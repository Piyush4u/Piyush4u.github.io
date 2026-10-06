import * as THREE from 'three';

// Loads the baked PBR sets in assets/tex and hands out tiled materials.
const SETS = {
  plaster: { orm: true }, asphalt: { orm: true }, pavers: { orm: true }, corrugated: { orm: true },
  steel: { orm: true }, concrete: { orm: true }, ground: { orm: true }, bark: { orm: true }, wood: { orm: true },
};
const SINGLES = ['curb_col', 'leaves_col', 'leaves_nor', 'louver_col', 'louver_nor', 'rail_col'];

export const TEX = {};

export async function loadTextures(renderer, onProgress) {
  const loader = new THREE.TextureLoader();
  const aniso = Math.min(16, renderer.capabilities.getMaxAnisotropy());
  const jobs = [];
  const add = (key, file, srgb) =>
    jobs.push(
      loader.loadAsync(`assets/tex/${file}.webp`).then((t) => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        t.anisotropy = aniso;
        if (srgb) t.colorSpace = THREE.SRGBColorSpace;
        TEX[key] = t;
      })
    );
  for (const name of Object.keys(SETS)) {
    add(`${name}_col`, `${name}_col`, true);
    add(`${name}_nor`, `${name}_nor`, false);
    add(`${name}_orm`, `${name}_orm`, false);
  }
  for (const s of SINGLES) add(s, s, s.endsWith('_col'));
  let done = 0;
  await Promise.all(jobs.map((j) => j.then(() => onProgress?.(++done / jobs.length))));
}

const tiled = (t, rx, ry) => {
  if (rx === 1 && ry === 1) return t;
  const c = t.clone();
  c.repeat.set(rx, ry);
  c.needsUpdate = true;
  return c;
};

// A MeshStandardMaterial (or Physical) wearing one of the baked sets.
export function pbr(name, { repeat = [1, 1], normalScale = 1, physical = false, ...opts } = {}) {
  const [rx, ry] = repeat;
  const M = physical ? THREE.MeshPhysicalMaterial : THREE.MeshStandardMaterial;
  const orm = tiled(TEX[`${name}_orm`], rx, ry);
  return new M({
    map: tiled(TEX[`${name}_col`], rx, ry),
    normalMap: tiled(TEX[`${name}_nor`], rx, ry),
    normalScale: new THREE.Vector2(normalScale, normalScale),
    roughnessMap: orm,
    metalnessMap: orm,
    aoMap: orm,
    aoMapIntensity: 0.9,
    roughness: 1,
    metalness: 1,
    ...opts,
  });
}
