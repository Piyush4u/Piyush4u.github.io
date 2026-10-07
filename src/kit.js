import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { pbr } from './materials.js';

// Third-party assets (all CC BY 4.0, credited in the footer and README), split
// into individual prefabs and drawn with instancing:
//   roadkit.glb  "Road Modular"  by mortalityrexotable  -> road pieces, poles, signals, signs, bus stop
//   soho.glb     "Building"      by mortalityrexotable  -> SoHo cast-iron block + its two buildings
//   blocks.glb   "Buildings"     by Elbolillo           -> 10 photo-textured shopfront buildings
//   tree.glb     "Tree Animate"  by RandyGF             -> 3 wind-animated trees (morph targets)

const Y = new THREE.Vector3(0, 1, 0);

// ------------------------------------------------------------------ geometry baking
// Copy a (possibly quantised) glTF mesh into plain float geometry, transformed by M.
function bake(mesh, M) {
  const src = mesh.geometry;
  const n = src.attributes.position.count;
  const g = new THREE.BufferGeometry();
  const v = new THREE.Vector3();
  const nm = new THREE.Matrix3().getNormalMatrix(M);
  const lin = new THREE.Matrix3().setFromMatrix4(M);
  const P = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    v.fromBufferAttribute(src.attributes.position, i).applyMatrix4(M);
    P[i * 3] = v.x; P[i * 3 + 1] = v.y; P[i * 3 + 2] = v.z;
  }
  g.setAttribute('position', new THREE.BufferAttribute(P, 3));
  if (src.attributes.normal) {
    const N = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      v.fromBufferAttribute(src.attributes.normal, i).applyMatrix3(nm).normalize();
      N[i * 3] = v.x; N[i * 3 + 1] = v.y; N[i * 3 + 2] = v.z;
    }
    g.setAttribute('normal', new THREE.BufferAttribute(N, 3));
  }
  if (src.attributes.uv) {
    const a = src.attributes.uv, U = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) { U[i * 2] = a.getX(i); U[i * 2 + 1] = a.getY(i); }
    g.setAttribute('uv', new THREE.BufferAttribute(U, 2));
  }
  if (src.index) g.setIndex(new THREE.BufferAttribute(Uint32Array.from(src.index.array), 1));
  const mp = src.morphAttributes.position;
  if (mp?.length) {
    const rel = src.morphTargetsRelative;
    g.morphTargetsRelative = rel;
    g.morphAttributes.position = mp.map((a) => {
      const D = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        v.fromBufferAttribute(a, i);
        rel ? v.applyMatrix3(lin) : v.applyMatrix4(M);
        D[i * 3] = v.x; D[i * 3 + 1] = v.y; D[i * 3 + 2] = v.z;
      }
      return new THREE.BufferAttribute(D, 3);
    });
    const mn = src.morphAttributes.normal;
    if (mn?.length) {
      g.morphAttributes.normal = mn.map((a) => {
        const D = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
          v.fromBufferAttribute(a, i).applyMatrix3(nm);
          D[i * 3] = v.x; D[i * 3 + 1] = v.y; D[i * 3 + 2] = v.z;
        }
        return new THREE.BufferAttribute(D, 3);
      });
    }
  }
  return g;
}

// Keep only the triangles whose centroid passes `keep`, compacting the vertices.
function subset(g, keep) {
  const idx = g.index.array, P = g.attributes.position.array;
  const map = new Int32Array(g.attributes.position.count).fill(-1);
  const out = [];
  let next = 0;
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t], b = idx[t + 1], c = idx[t + 2];
    const cx = (P[a * 3] + P[b * 3] + P[c * 3]) / 3, cy = (P[a * 3 + 1] + P[b * 3 + 1] + P[c * 3 + 1]) / 3, cz = (P[a * 3 + 2] + P[b * 3 + 2] + P[c * 3 + 2]) / 3;
    if (!keep(cx, cy, cz)) continue;
    for (const k of [a, b, c]) {
      if (map[k] < 0) map[k] = next++;
      out.push(map[k]);
    }
  }
  const pick = (attr) => {
    const s = attr.itemSize, arr = new Float32Array(next * s);
    for (let i = 0; i < map.length; i++) if (map[i] >= 0) for (let k = 0; k < s; k++) arr[map[i] * s + k] = attr.array[i * s + k];
    return new THREE.BufferAttribute(arr, s);
  };
  const r = new THREE.BufferGeometry();
  for (const [k, a] of Object.entries(g.attributes)) r.setAttribute(k, pick(a));
  r.setIndex(new THREE.BufferAttribute(Uint32Array.from(out), 1));
  for (const [k, list] of Object.entries(g.morphAttributes)) r.morphAttributes[k] = list.map(pick);
  r.morphTargetsRelative = g.morphTargetsRelative;
  return r;
}

function meshesOf(objs) {
  const out = [];
  for (const o of objs) o.traverse((c) => c.isMesh && out.push(c));
  return out;
}

// ------------------------------------------------------------------ prefabs
export class Prefab {
  constructor(name, parts) {
    this.name = name;
    this.parts = parts; // [{ geometry, material }] in prefab space
    this.box = new THREE.Box3();
    for (const p of parts) {
      p.geometry.computeBoundingBox();
      this.box.union(p.geometry.boundingBox);
    }
    this.size = this.box.getSize(new THREE.Vector3());
    this.instances = [];
    this.tips = []; // lamp heads, in prefab space
  }
  place(position, yaw, scale = 1) {
    const m = new THREE.Matrix4().compose(position, new THREE.Quaternion().setFromAxisAngle(Y, yaw), new THREE.Vector3(scale, scale, scale));
    this.instances.push(m);
    return m;
  }
}

// Bake `objs` (already in the loaded scene) into a prefab whose origin is `pivot`
// (world point), rotated by `yaw` and uniformly scaled.
function makePrefab(name, objs, pivot, { yaw = 0, scale = 1, mergeByMaterial = true } = {}) {
  const P = new THREE.Matrix4()
    .makeScale(scale, scale, scale)
    .multiply(new THREE.Matrix4().makeRotationY(yaw))
    .multiply(new THREE.Matrix4().makeTranslation(-pivot.x, -pivot.y, -pivot.z));
  const groups = new Map();
  for (const m of meshesOf(objs)) {
    const g = bake(m, P.clone().multiply(m.matrixWorld));
    const key = mergeByMaterial ? m.material.uuid : m.uuid;
    let src = '';
    for (let o = m; o && !src; o = o.parent) if (objs.includes(o)) src = o.name;
    if (!groups.has(key)) groups.set(key, { material: m.material, geos: [], src });
    groups.get(key).geos.push(g);
  }
  const parts = [];
  for (const { material, geos, src } of groups.values()) {
    const geometry = geos.length > 1 ? mergeGeometries(geos) : geos[0];
    if (!geometry) {
      // attribute sets differ; keep them separate
      for (const g of geos) parts.push({ geometry: g, material, src });
      continue;
    }
    parts.push({ geometry, material, src });
  }
  const pf = new Prefab(name, parts);
  pf.toPrefab = P;
  return pf;
}

const worldBox = (objs) => {
  const b = new THREE.Box3();
  for (const o of objs) b.expandByObject(o);
  return b;
};

// Pole-type props: the base is where vertices touch the ground; tips are the far ends of the arms.
function poleInfo(obj) {
  const meshes = meshesOf([obj]);
  const v = new THREE.Vector3();
  const box = worldBox([obj]);
  const base = new THREE.Vector3();
  let nb = 0;
  for (const m of meshes) {
    const p = m.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).applyMatrix4(m.matrixWorld);
      if (v.y < box.min.y + 0.4) { base.add(v); nb++; }
    }
  }
  base.divideScalar(Math.max(1, nb));
  base.y = box.min.y;
  const sx = box.max.x - box.min.x, sz = box.max.z - box.min.z;
  const tips = [];
  const yTip = box.max.y - 0.25;
  if (sx > sz) {
    for (const x of [box.min.x, box.max.x]) if (Math.abs(x - base.x) > 0.9) tips.push(new THREE.Vector3(x + Math.sign(base.x - x) * 0.35, yTip, base.z));
  } else {
    for (const z of [box.min.z, box.max.z]) if (Math.abs(z - base.z) > 0.9) tips.push(new THREE.Vector3(base.x, yTip, z + Math.sign(base.z - z) * 0.35));
  }
  return { base, tips };
}

// ------------------------------------------------------------------ night windows
// Build an emissive mask from a facade photo: dark glass panes in randomly "occupied"
// cells glow warm at night, brick and frames stay dark.
function windowMask(texture, seed = 1) {
  const img = texture.image;
  if (!img || !img.width) return null;
  const w = Math.min(512, img.width), h = Math.min(512, img.height);
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, w, h);
  const d = ctx.getImageData(0, 0, w, h);
  let s = seed * 9301 + 49297;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  const cell = 14;
  const lit = [];
  for (let i = 0; i < Math.ceil(w / cell) * Math.ceil(h / cell); i++) lit.push(rnd() < 0.38 ? 0.6 + rnd() * 0.4 : 0);
  const cols = Math.ceil(w / cell);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const r = d.data[i] / 255, g = d.data[i + 1] / 255, b = d.data[i + 2] / 255;
      const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const sat = Math.max(r, g, b) - Math.min(r, g, b);
      const glass = l < 0.26 && sat < 0.16 ? 1 : 0;
      const k = glass * lit[Math.floor(y / cell) * cols + Math.floor(x / cell)];
      d.data[i] = 255 * k;
      d.data[i + 1] = 196 * k;
      d.data[i + 2] = 120 * k;
      d.data[i + 3] = 255;
    }
  ctx.putImageData(d, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.flipY = texture.flipY;
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = texture.wrapS;
  t.wrapT = texture.wrapT;
  t.channel = texture.channel;
  return t;
}

// The bus-shelter poster advertises the person whose city this is.
function posterCanvas() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 1024;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 1024);
  g.addColorStop(0, '#11151b');
  g.addColorStop(1, '#2a1c10');
  x.fillStyle = g;
  x.fillRect(0, 0, 512, 1024);
  x.fillStyle = '#f5c518';
  x.font = '400 120px "Instrument Serif", Georgia, serif';
  x.fillText('Boring', 40, 300);
  x.fillText('work?', 40, 420);
  x.fillStyle = '#ffffff';
  x.font = 'italic 400 64px "Instrument Serif", Georgia, serif';
  x.fillText('Let a bot do it.', 40, 520);
  x.font = '600 26px "JetBrains Mono", monospace';
  x.fillStyle = '#c8c0b2';
  x.fillText('SAP · PYTHON · POWER BI', 40, 620);
  x.fillStyle = '#f5c518';
  x.fillRect(40, 860, 432, 90);
  x.fillStyle = '#111';
  x.font = '800 30px Manrope, sans-serif';
  x.fillText('PIYUSH4U.GITHUB.IO', 64, 918);
  return c;
}

// ------------------------------------------------------------------ loading
export async function loadKit(onProgress) {
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const files = ['roadkit', 'soho', 'blocks', 'tree'];
  const done = {};
  const progress = () => onProgress?.(Object.values(done).reduce((a, b) => a + b, 0) / files.length);
  const [road, soho, blocks, tree] = await Promise.all(
    files.map((f) =>
      loader.loadAsync(`assets/models/${f}.glb`, (e) => {
        if (e.total) { done[f] = e.loaded / e.total; progress(); }
      })
    )
  );
  for (const g of [road, soho, blocks, tree]) g.scene.updateMatrixWorld(true);
  const kit = { buildings: [], props: {}, roads: {}, trees: [], nightMats: [] };
  const byName = (gltf, re) => {
    const out = [];
    gltf.scene.traverse((o) => { if (re.test(o.name) && o.parent && !re.test(o.parent.name)) out.push(o); });
    return out;
  };
  const one = (gltf, re) => byName(gltf, re)[0];

  // --- buildings (all front onto +z in their files)
  const nightFacade = (mat, seed) => {
    if (!mat.map || mat.userData.night) return;
    const mask = windowMask(mat.map, seed);
    if (!mask) return;
    mat.emissiveMap = mask;
    mat.emissive = new THREE.Color(0xffffff);
    mat.emissiveIntensity = 0;
    mat.userData.night = 'windows';
    kit.nightMats.push(mat);
  };
  const nightShop = (mat) => {
    if (!mat.map || mat.userData.night) return;
    mat.emissiveMap = mat.map;
    mat.emissive = new THREE.Color(0xffe2b8);
    mat.emissiveIntensity = 0;
    mat.userData.night = 'shop';
    kit.nightMats.push(mat);
  };
  let seed = 3;
  const blockRoots = [];
  blocks.scene.traverse((o) => { if (/^Building(_0\d)?$/.test(o.name)) blockRoots.push(o); });
  for (const b of blockRoots) {
    const box = worldBox([b]);
    const pf = makePrefab(b.name, [b], new THREE.Vector3((box.min.x + box.max.x) / 2, box.min.y, box.max.z));
    for (const p of pf.parts) {
      const n = p.material.name || '';
      p.material.envMapIntensity = 0.8;
      if (/^Shops/.test(n)) nightShop(p.material);
      else if (/^building/.test(n)) nightFacade(p.material, seed++);
    }
    pf.kind = 'block';
    kit.buildings.push(pf);
  }
  // SoHo: the whole corner block, plus its brown and green-extension buildings on their own
  const sohoGround = 0.44;
  const sohoParts = byName(soho, /^BROWN_SOHO00[1-6]_\d+$/);
  {
    const box = worldBox(sohoParts);
    const pf = makePrefab('soho-block', sohoParts, new THREE.Vector3((box.min.x + box.max.x) / 2, sohoGround, box.max.z - 0.6));
    pf.kind = 'soho';
    kit.buildings.push(pf);
  }
  for (const [name, re] of [['soho-brown', /^BROWN_SOHO00[34]_\d+$/], ['soho-green', /^BROWN_SOHO006_\d+$/]]) {
    const objs = byName(soho, re);
    const box = worldBox(objs);
    const pf = makePrefab(name, objs, new THREE.Vector3((box.min.x + box.max.x) / 2, sohoGround, box.max.z - 0.4));
    // standing alone these shells are open at the back (the block's concrete core used to hide it): close them
    const core = new THREE.BoxGeometry(pf.size.x - 0.5, pf.box.max.y - 0.6, pf.size.z - 2.2);
    core.translate(0, (pf.box.max.y - 0.6) / 2, pf.box.min.z + (pf.size.z - 2.2) / 2 + 0.25);
    const uv = core.attributes.uv, pos = core.attributes.position, nrm = core.attributes.normal;
    for (let i = 0; i < pos.count; i++) {
      const ax = Math.abs(nrm.getX(i)) > 0.5;
      uv.setXY(i, (ax ? pos.getZ(i) : pos.getX(i)) / 4, pos.getY(i) / 4);
    }
    pf.parts.push({ geometry: core, material: pbr('concrete', { color: 0xbdb3a4 }), src: 'core' });
    pf.kind = 'soho';
    kit.buildings.push(pf);
  }
  soho.scene.traverse((o) => {
    if (o.isMesh && /SoHo/.test(o.material.name)) nightFacade(o.material, seed++);
  });

  // --- road pieces: run along z; origin at the +z end, centred, so a piece occupies local z in [-length, 0]
  for (const [key, re] of [
    ['crossing', /^Pedestrian_crossing/], ['road', /^Road_\d/], ['manhole', /^Manhole/], ['old', /^Old_/],
    ['crossroad', /^Crossroad/], ['entrance', /^Road_entrance/],
  ]) {
    const o = one(road, re);
    if (!o) continue;
    const box = worldBox([o]);
    kit.roads[key] = makePrefab(key, [o], new THREE.Vector3((box.min.x + box.max.x) / 2, 0, box.max.z));
  }
  // boulevard: the double carriageway together with the median lamps the kit already lines up on it
  {
    const dbl = one(road, /^Double_road_\d/);
    const poles = byName(road, /^Dual_light_pole/).filter((p) => {
      const c = worldBox([p]).getCenter(new THREE.Vector3());
      const bx = worldBox([dbl]);
      return c.x > bx.min.x && c.x < bx.max.x && c.z > bx.min.z && c.z < bx.max.z;
    });
    const box = worldBox([dbl]);
    const pivot = new THREE.Vector3((box.min.x + box.max.x) / 2, 0, box.max.z);
    const pf = makePrefab('boulevard', [dbl, ...poles], pivot);
    for (const p of poles) for (const t of poleInfo(p).tips) pf.tips.push(t.clone().applyMatrix4(pf.toPrefab));
    kit.roads.boulevard = pf;
  }

  // --- street furniture
  const steel = pbr('steel', { color: 0x8a9298, repeat: [0.3, 2] });
  const paint = (pf, mat) => pf.parts.forEach((p) => { if (p.material.name === 'material_0') p.material = mat; });
  const poleProp = (key, re, yaw) => {
    const o = one(road, re);
    if (!o) return;
    const { base, tips } = poleInfo(o);
    const pf = makePrefab(key, [o], base, { yaw });
    pf.tips = tips.map((t) => t.clone().applyMatrix4(pf.toPrefab));
    paint(pf, steel);
    kit.props[key] = pf;
  };
  // arms point -x in the kit; yaw +90deg turns them to +z (toward the road when placed)
  poleProp('lamp', /^Light_pole_24/, Math.PI / 2);
  poleProp('signal', /^Traffic_light_18/, Math.PI / 2);
  // sign faces point -x in the kit; yaw +90deg turns them to +z
  poleProp('stop', /^Stop_sign_45/, Math.PI / 2);
  poleProp('speed30', /^Speed_limit_plate_30/, Math.PI / 2);
  poleProp('speed80', /^Speed_limit_plate_80/, Math.PI / 2);
  {
    // bus shelter opens toward -x in the kit; turn it to open onto +z
    const parts = byName(road, /bus_stop/);
    const box = worldBox(parts);
    const pf = makePrefab('busstop', parts, new THREE.Vector3((box.min.x + box.max.x) / 2, box.min.y, (box.min.z + box.max.z) / 2), { yaw: Math.PI / 2, mergeByMaterial: false });
    const frame = new THREE.MeshStandardMaterial({ color: 0x3b4248, metalness: 0.7, roughness: 0.35 });
    const glass = new THREE.MeshPhysicalMaterial({ color: 0xa8c4cc, transparent: true, opacity: 0.25, roughness: 0.05, depthWrite: false });
    const ad = new THREE.CanvasTexture(posterCanvas());
    ad.colorSpace = THREE.SRGBColorSpace;
    const poster = new THREE.MeshStandardMaterial({ map: ad, emissive: 0xffffff, emissiveMap: ad, emissiveIntensity: 0.25, roughness: 0.3 });
    kit.poster = poster;
    ad.flipY = false;
    const centre = pf.box.getCenter(new THREE.Vector3());
    pf.parts.forEach((p) => {
      if (/^Glasses/.test(p.src)) p.material = glass;
      else if (/^Poster/.test(p.src)) {
        p.material = poster;
        // planar UVs that read correctly from outside the shelter
        const g = p.geometry;
        g.computeBoundingBox();
        const bb = g.boundingBox, c = bb.getCenter(new THREE.Vector3());
        const n = c.clone().sub(centre).setY(0);
        const sz = bb.getSize(new THREE.Vector3());
        if (sz.x < sz.z) n.set(Math.sign(n.x) || 1, 0, 0); else n.set(0, 0, Math.sign(n.z) || 1);
        const right = n.clone().negate().cross(Y); // viewer looks along -n
        const pos = g.attributes.position, uv = new Float32Array(pos.count * 2);
        const v = new THREE.Vector3();
        const span = Math.abs(right.x) > 0.5 ? sz.x : sz.z;
        for (let i = 0; i < pos.count; i++) {
          v.fromBufferAttribute(pos, i).sub(c);
          uv[i * 2] = v.dot(right) / span + 0.5;
          uv[i * 2 + 1] = 0.5 - (v.y / sz.y);
        }
        g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      } else p.material = frame;
    });
    kit.props.busstop = pf;
  }

  // --- trees: three trees share one file; split them, keep their wind morphs
  {
    const bark = meshesOf([tree.scene]).find((m) => m.material.name === 'Bark');
    const others = meshesOf([tree.scene]).filter((m) => m !== bark);
    const clip = tree.animations[0];
    const cuts = [-Infinity, -92, -22, Infinity];
    const targets = [8.6, 9.6, 7.6]; // metres, wide / tall / small
    for (let k = 0; k < 3; k++) {
      const inK = (x) => x > cuts[k] && x <= cuts[k + 1];
      const bw = subset(bake(bark, bark.matrixWorld), (x) => inK(x));
      bw.computeBoundingBox();
      const P = bw.attributes.position.array;
      const base = new THREE.Vector3();
      let nb = 0;
      for (let i = 0; i < P.length; i += 3) if (P[i + 1] < bw.boundingBox.min.y + 2) { base.x += P[i]; base.z += P[i + 2]; nb++; }
      base.x /= nb; base.z /= nb; base.y = bw.boundingBox.min.y;
      const all = [bw];
      const parts = [];
      const leafs = others.map((m) => ({ m, g: subset(bake(m, m.matrixWorld), (x) => inK(x)) }));
      leafs.forEach(({ g }) => all.push(g));
      let top = -Infinity;
      for (const g of all) { g.computeBoundingBox(); top = Math.max(top, g.boundingBox.max.y); }
      const s = targets[k] / (top - base.y);
      const M = new THREE.Matrix4().makeScale(s, s, s).multiply(new THREE.Matrix4().makeTranslation(-base.x, -base.y, -base.z));
      const fit = (g) => {
        g.applyMatrix4(M);
        for (const key of Object.keys(g.morphAttributes)) {
          if (key !== 'position') continue;
          for (const a of g.morphAttributes[key]) for (let i = 0; i < a.count; i++) a.setXYZ(i, a.getX(i) * s, a.getY(i) * s, a.getZ(i) * s);
        }
        return g;
      };
      parts.push({ geometry: fit(bw), material: bark.material });
      for (const { m, g } of leafs) {
        const track = clip.tracks.find((t) => t.name.startsWith(m.name + '.morphTargetInfluences'));
        parts.push({ geometry: fit(g), material: m.material, track });
      }
      const pf = new Prefab('tree' + k, parts);
      kit.trees.push(pf);
    }
    for (const m of meshesOf([tree.scene])) {
      const mt = m.material;
      // spec-gloss -> metal-rough left these glossy; foliage and bark are matte
      mt.metalness = 0;
      mt.metalnessMap = null;
      mt.roughness = mt.name === 'Bark' ? 0.95 : 0.82;
      mt.roughnessMap = null;
      mt.envMapIntensity = 0.55;
      if ('specularIntensity' in mt) { mt.specularIntensity = 0.25; mt.specularIntensityMap = null; mt.specularColorMap = null; }
      mt.side = THREE.DoubleSide;
      if (mt.name !== 'Bark') {
        mt.alphaTest = 0.45;
        mt.transparent = false;
      }
      mt.needsUpdate = true;
    }
  }
  return kit;
}

// ------------------------------------------------------------------ instancing
export function instanceAll(scene, prefabs, { shadows = true } = {}) {
  const meshes = [];
  for (const pf of prefabs) {
    if (!pf.instances.length) continue;
    for (const p of pf.parts) {
      const im = new THREE.InstancedMesh(p.geometry, p.material, pf.instances.length);
      pf.instances.forEach((m, i) => im.setMatrixAt(i, m));
      im.castShadow = shadows && !p.material.transparent;
      im.receiveShadow = true;
      im.computeBoundingSphere();
      im.computeBoundingBox?.();
      scene.add(im);
      meshes.push(im);
      p.mesh = im;
    }
  }
  return meshes;
}

// Wind: every tree samples the baked MorphBake clip at its own phase.
export function animateTrees(trees) {
  const dummy = new THREE.Mesh();
  const updaters = [];
  for (const pf of trees) {
    if (!pf.instances.length) continue;
    const phases = pf.instances.map((_, i) => (i * 1.618) % 6.4);
    for (const p of pf.parts) {
      if (!p.track || !p.mesh) continue;
      const interp = p.track.createInterpolant();
      const nT = p.geometry.morphAttributes.position?.length || 0;
      dummy.morphTargetInfluences = new Array(nT).fill(0);
      const duration = p.track.times[p.track.times.length - 1];
      // the depth material used for shadows has to cut the leaves out too
      if (p.material.alphaTest) {
        p.mesh.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: p.material.map, alphaTest: p.material.alphaTest });
      }
      updaters.push((t) => {
        for (let i = 0; i < pf.instances.length; i++) {
          const w = interp.evaluate((t * 0.8 + phases[i]) % duration);
          for (let k = 0; k < nT; k++) dummy.morphTargetInfluences[k] = w[k];
          p.mesh.setMorphAt(i, dummy);
        }
        p.mesh.morphTexture.needsUpdate = true;
      });
    }
  }
  let last = -1;
  return (t, near = true) => {
    // 30 Hz is plenty for a breeze
    if (t - last < 1 / 30) return;
    last = t;
    for (const u of updaters) u(t);
  };
}
