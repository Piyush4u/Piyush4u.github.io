import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { smooth, remap } from './util.js';

// Image-based lighting from real (CC0, Poly Haven) skies, cross-faded with the
// story's time of day and re-filtered into a PMREM only when the blend changes.
const KEYS = [
  { p: 0.0, name: 'dawn', gain: 1.0 },
  { p: 0.17, name: 'city', gain: 1.0 },
  { p: 0.56, name: 'city', gain: 0.95 },
  { p: 0.7, name: 'sunset', gain: 1.0 },
  { p: 0.8, name: 'sunset', gain: 0.8 },
  { p: 0.9, name: 'night', gain: 1.5 },
  { p: 1.0, name: 'night', gain: 1.5 },
];

export async function createEnvironment(renderer) {
  const loader = new EXRLoader();
  const names = [...new Set(KEYS.map((k) => k.name))];
  const maps = {};
  await Promise.all(
    names.map((n) =>
      loader.loadAsync(`assets/hdri/${n}.exr`).then((t) => {
        t.minFilter = t.magFilter = THREE.LinearFilter;
        t.generateMipmaps = false;
        maps[n] = t;
      })
    )
  );
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: { a: { value: null }, b: { value: null }, k: { value: 0 }, ga: { value: 1 }, gb: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D a; uniform sampler2D b; uniform float k; uniform float ga; uniform float gb;
      varying vec3 vDir;
      vec2 eq(vec3 d) { return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5); }
      void main() {
        vec2 uv = eq(normalize(vDir));
        vec3 c = mix(texture2D(a, uv).rgb * ga, texture2D(b, uv).rgb * gb, k);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(5, 64, 32), mat));
  let rt = null;
  let lastKey = '';
  return {
    update(p, scene) {
      let i = 0;
      while (i < KEYS.length - 2 && p > KEYS[i + 1].p) i++;
      const A = KEYS[i], B = KEYS[i + 1];
      const k = Math.round(smooth(remap(p, A.p, B.p)) * 20) / 20;
      const key = `${i}:${k}`;
      if (key === lastKey) return;
      lastKey = key;
      mat.uniforms.a.value = maps[A.name];
      mat.uniforms.b.value = maps[B.name];
      mat.uniforms.ga.value = A.gain;
      mat.uniforms.gb.value = B.gain;
      mat.uniforms.k.value = k;
      const next = pmrem.fromScene(envScene, 0, 0.1, 20);
      scene.environment = next.texture;
      rt?.dispose();
      rt = next;
    },
  };
}

// Lens & film finish, applied after tone-mapping.
export const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    vignette: { value: 0.32 },
    grain: { value: 0.035 },
    ca: { value: 0.0025 },
    lift: { value: new THREE.Vector3(0.0, 0.0, 0.0) },
    sat: { value: 1.06 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform float time; uniform float vignette; uniform float grain; uniform float ca;
    uniform vec3 lift; uniform float sat;
    varying vec2 vUv;
    float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 d = vUv - 0.5;
      float r2 = dot(d, d);
      vec2 off = d * ca * (0.4 + r2 * 2.0);
      vec3 c;
      c.r = texture2D(tDiffuse, vUv + off).r;
      c.g = texture2D(tDiffuse, vUv).g;
      c.b = texture2D(tDiffuse, vUv - off).b;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, sat);
      c = c + lift * (1.0 - c);
      c = mix(c, c * c * (3.0 - 2.0 * c), 0.18);
      c *= 1.0 - vignette * smoothstep(0.05, 0.62, r2 * 1.6);
      c += (rand(vUv * 1024.0 + fract(time) * 37.0) - 0.5) * grain;
      gl_FragColor = vec4(c, 1.0);
    }`,
};
