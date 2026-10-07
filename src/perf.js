import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Performance plumbing: spatial chunking (so the frustum and the shadow camera can
// cull most of the city), static-mesh merging (fewer draw calls), and a warm-up
// pass that compiles every shader and uploads every buffer/texture before the
// first frame, so nothing hitches mid-scroll.

export const CHUNK = 70; // metres
const key = (x, z, size = CHUNK) => `${Math.floor(x / size)},${Math.floor(z / size)}`;
const _v = new THREE.Vector3();

// Instance matrices -> one InstancedMesh per spatial chunk.
export function chunkedInstances(geometry, material, matrices, { colors = null, cast = true, receive = true, layer = 0, chunk = CHUNK, cull = 0 } = {}) {
  const buckets = new Map();
  matrices.forEach((m, i) => {
    _v.setFromMatrixPosition(m);
    const k = key(_v.x, _v.z, chunk);
    if (!buckets.has(k)) buckets.set(k, []);
    buckets.get(k).push(i);
  });
  const out = [];
  for (const idx of buckets.values()) {
    const im = new THREE.InstancedMesh(geometry, material, idx.length);
    idx.forEach((src, j) => {
      im.setMatrixAt(j, matrices[src]);
      if (colors) im.setColorAt(j, colors[src]);
    });
    im.castShadow = cast;
    im.receiveShadow = receive;
    im.computeBoundingSphere();
    im.userData.indices = idx;
    if (cull) im.userData.cull = cull;
    if (layer) im.layers.set(layer);
    out.push(im);
  }
  return out;
}

// Split one big (world-space) geometry into per-chunk geometries by triangle centroid.
export function splitByChunk(g, size = CHUNK) {
  const pos = g.attributes.position;
  const index = g.index ? g.index.array : null;
  const triCount = index ? index.length / 3 : pos.count / 3;
  const vi = (t, k) => (index ? index[t * 3 + k] : t * 3 + k);
  const buckets = new Map();
  for (let t = 0; t < triCount; t++) {
    const a = vi(t, 0), b = vi(t, 1), c = vi(t, 2);
    const cx = (pos.getX(a) + pos.getX(b) + pos.getX(c)) / 3;
    const cz = (pos.getZ(a) + pos.getZ(b) + pos.getZ(c)) / 3;
    const k = key(cx, cz, size);
    if (!buckets.has(k)) buckets.set(k, []);
    buckets.get(k).push(t);
  }
  if (buckets.size <= 1) return [g];
  const out = [];
  for (const tris of buckets.values()) {
    const map = new Map();
    const newIndex = [];
    for (const t of tris) for (let k = 0; k < 3; k++) {
      const v = vi(t, k);
      if (!map.has(v)) map.set(v, map.size);
      newIndex.push(map.get(v));
    }
    const n = map.size;
    const r = new THREE.BufferGeometry();
    for (const [name, attr] of Object.entries(g.attributes)) {
      const s = attr.itemSize;
      const arr = new attr.array.constructor(n * s);
      for (const [src, dst] of map) for (let k = 0; k < s; k++) arr[dst * s + k] = attr.array[src * s + k];
      r.setAttribute(name, new THREE.BufferAttribute(arr, s, attr.normalized));
    }
    r.setIndex(new THREE.BufferAttribute(n > 65535 ? Uint32Array.from(newIndex) : Uint16Array.from(newIndex), 1));
    r.computeBoundingSphere();
    r.computeBoundingBox();
    out.push(r);
  }
  return out;
}

// Replace a big mesh with per-chunk meshes (same material, same flags).
export function chunkMesh(mesh, { chunk = CHUNK, cull = 0 } = {}) {
  const parent = mesh.parent;
  const parts = splitByChunk(mesh.geometry, chunk);
  if (parts.length <= 1) {
    if (cull) mesh.userData.cull = cull;
    return [mesh];
  }
  const out = parts.map((g) => {
    const m = new THREE.Mesh(g, mesh.material);
    m.castShadow = mesh.castShadow;
    m.receiveShadow = mesh.receiveShadow;
    m.renderOrder = mesh.renderOrder;
    m.layers.mask = mesh.layers.mask;
    m.position.copy(mesh.position);
    m.quaternion.copy(mesh.quaternion);
    m.scale.copy(mesh.scale);
    if (cull) m.userData.cull = cull;
    parent?.add(m);
    return m;
  });
  parent?.remove(mesh);
  mesh.geometry.dispose();
  return out;
}

// Merge the static meshes under `root` by material (keeping anything under a node
// flagged userData.dynamic, sprites, points, instanced meshes and lines as they are).
export function mergeStatic(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const groups = new Map();
  const victims = [];
  const isDynamic = (o) => {
    for (let p = o; p && p !== root; p = p.parent) if (p.userData.dynamic) return true;
    return false;
  };
  const hasTexture = (m) => Object.values(m).some((v) => v && v.isTexture);
  // Untextured, non-animated standard materials that differ only in colour can share one
  // vertex-coloured material: that collapses dozens of single-colour parts into one draw.
  const signature = (m) =>
    m.isMeshStandardMaterial && !m.isMeshPhysicalMaterial && !hasTexture(m) && !m.userData.live && !m.vertexColors && !m.onBeforeCompile.toString().includes('shader')
      ? `std|${m.roughness}|${m.metalness}|${m.emissive.getHexString()}|${m.emissiveIntensity}|${m.side}|${m.flatShading}`
      : null;
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || isDynamic(o)) return;
    if (Array.isArray(o.material) || o.material.transparent || o.geometry.morphAttributes.position) return;
    const sig = signature(o.material);
    const k = (sig || o.material.uuid) + (o.castShadow ? 's' : '') + (o.receiveShadow ? 'r' : '');
    if (!groups.has(k)) groups.set(k, { material: o.material, sig, cast: o.castShadow, receive: o.receiveShadow, geos: [] });
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (!g.attributes.normal) g.computeVertexNormals();
    if (sig) {
      const c = o.material.color, n = g.attributes.position.count, col = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    }
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    groups.get(k).geos.push(g);
    victims.push(o);
  });
  for (const o of victims) o.parent.remove(o);
  const merged = [];
  for (const { material, sig, cast, receive, geos } of groups.values()) {
    const g = geos.length > 1 ? mergeGeometries(geos) : geos[0];
    if (!g) continue;
    let mat = material;
    if (sig) {
      mat = material.clone();
      mat.color.set(0xffffff);
      mat.vertexColors = true;
    }
    const m = new THREE.Mesh(g, mat);
    m.castShadow = cast;
    m.receiveShadow = receive;
    root.add(m);
    merged.push(m);
  }
  return merged;
}

// Compile every program, upload every texture and buffer, and prime the shadow and
// reflection passes — all before the curtain lifts.
export async function warmUp(renderer, scene, camera, extra = () => {}) {
  const hidden = [];
  const culled = [];
  scene.traverse((o) => {
    if (o.visible === false) { hidden.push(o); o.visible = true; }
    if (o.frustumCulled) { culled.push(o); o.frustumCulled = false; }
    const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of mats) for (const k in m) {
      const v = m[k];
      if (v && v.isTexture) renderer.initTexture(v);
    }
  });
  const dbg = location.search.includes('debug');
  const t = performance.now();
  try {
    if (renderer.compileAsync) await renderer.compileAsync(scene, camera);
  } catch {}
  if (dbg) console.log('STAGE compileAsync', (performance.now() - t).toFixed(0));
  const rt = new THREE.WebGLRenderTarget(64, 64);
  renderer.setRenderTarget(rt);
  extra();
  renderer.render(scene, camera);
  if (dbg) console.log('STAGE warm render', (performance.now() - t).toFixed(0));
  renderer.setRenderTarget(null);
  rt.dispose();
  for (const o of hidden) o.visible = false;
  for (const o of culled) o.frustumCulled = true;
}

// Hides anything tagged userData.cull (metres) once it is further than that from the
// camera — haze has already swallowed it, and every skipped object is a draw call saved
// in the main, shadow and reflection passes.
export class DistanceCuller {
  constructor(scene) {
    this.items = [];
    const box = new THREE.Box3(), sphere = new THREE.Sphere();
    scene.updateMatrixWorld(true);
    scene.traverse((o) => {
      const d = o.userData.cull;
      if (!d) return;
      if (o.isInstancedMesh) {
        if (!o.boundingSphere) o.computeBoundingSphere();
        sphere.copy(o.boundingSphere).applyMatrix4(o.matrixWorld);
      } else if (o.isMesh) {
        if (!o.geometry.boundingSphere) o.geometry.computeBoundingSphere();
        sphere.copy(o.geometry.boundingSphere).applyMatrix4(o.matrixWorld);
      } else {
        box.setFromObject(o).getBoundingSphere(sphere);
      }
      this.items.push({ o, c: sphere.center.clone(), r: sphere.radius, d });
    });
  }
  update(p) {
    for (const it of this.items) it.o.visible = it.c.distanceTo(p) - it.r < it.d;
  }
}
