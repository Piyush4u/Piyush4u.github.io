import * as THREE from 'three';

// Deterministic randomness so the city is identical on every visit.
export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const remap = (v, a, b) => clamp((v - a) / (b - a));

export function canvas(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  return c;
}

export function tex(c, { srgb = true, repeat = false, aniso = 8 } = {}) {
  const t = c instanceof THREE.Texture ? c : new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso;
  t.needsUpdate = true;
  return t;
}

export function radialTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)', size = 128) {
  return tex(
    canvas(size, size, (ctx, w) => {
      const g = ctx.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
      g.addColorStop(0, inner);
      g.addColorStop(1, outer);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, w);
    })
  );
}

const _up = new THREE.Vector3(0, 1, 0);
const _dir = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _m = new THREE.Vector3();

// Matrix for a unit box (1x1x1) stretched between two points.
export function beamMatrix(a, b, thick = 0.2, depth = thick, out = new THREE.Matrix4()) {
  _dir.subVectors(b, a);
  const len = _dir.length();
  _dir.normalize();
  _q.setFromUnitVectors(_up, _dir);
  _m.addVectors(a, b).multiplyScalar(0.5);
  _s.set(thick, len, depth);
  return out.compose(_m, _q, _s);
}

export function paintVertexColor(geo, color) {
  const c = new THREE.Color(color);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = c.r;
    arr[i * 3 + 1] = c.g;
    arr[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

// Strip attributes not shared by every geometry so they can be merged.
export function normalizeForMerge(geo, keep = ['position', 'normal', 'uv', 'color']) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  for (const k of Object.keys(g.attributes)) if (!keep.includes(k)) g.deleteAttribute(k);
  if (keep.includes('uv') && !g.attributes.uv) {
    g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  }
  return g;
}

export const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));

// Height canvas (bright = high) -> tangent-space normal map.
export function normalMapFrom(src, strength = 2, { repeat = true } = {}) {
  const w = src.width, h = src.height;
  const data = src.getContext('2d').getImageData(0, 0, w, h).data;
  const H = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) H[i] = (data[i * 4] + data[i * 4 + 1] + data[i * 4 + 2]) / 765;
  const out = document.createElement('canvas');
  out.width = w;
  out.height = h;
  const ctx = out.getContext('2d');
  const img = ctx.createImageData(w, h);
  const at = (x, y) => H[((y + h) % h) * w + ((x + w) % w)];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      const l = Math.hypot(dx, dy, 1);
      const i = (y * w + x) * 4;
      img.data[i] = (-dx / l * 0.5 + 0.5) * 255;
      img.data[i + 1] = (dy / l * 0.5 + 0.5) * 255;
      img.data[i + 2] = (1 / l * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  ctx.putImageData(img, 0, 0);
  return tex(out, { srgb: false, repeat });
}

// Darken surfaces near the ground (grime, splash-back, ambient occlusion feel).
export function addGroundGrime(material, { height = 2.6, strength = 0.32 } = {}) {
  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vGrimeY;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\n{ vec4 gp = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n gp = instanceMatrix * gp;\n#endif\n vGrimeY = (modelMatrix * gp).y; }');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vGrimeY;')
      .replace('#include <map_fragment>', `#include <map_fragment>\n diffuseColor.rgb *= mix(1.0 - ${strength.toFixed(3)}, 1.0, smoothstep(0.0, ${height.toFixed(2)}, vGrimeY));`);
  };
  material.customProgramCacheKey = () => 'grime' + height + strength;
  return material;
}
