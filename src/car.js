import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { radialTexture } from './util.js';

// The hero car: "1967 Chevrolet Camaro SS 350 Coupe" by Ddiaz Design
// (https://sketchfab.com/ddiaz-design), CC BY-NC-SA 4.0. Optimised copy in
// assets/models/camaro.glb (meshopt geometry, WebP textures).
const LENGTH = 4.72; // metres, real-world 1967 Camaro
const WHEEL_PARTS = new Set(['tire', 'rimMat', 'RimB', 'rotor']);

export async function loadCar(onProgress) {
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync('assets/models/camaro.glb', (e) => {
    if (e.total) onProgress?.(e.loaded / e.total);
  });
  const model = gltf.scene;

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  body.add(model);

  const meshes = [];
  model.traverse((o) => {
    if (o.isMesh) meshes.push(o);
  });
  const byMat = (name) => meshes.filter((m) => m.material?.name === name);
  const boxOf = (objs) => {
    const b = new THREE.Box3();
    objs.forEach((o) => b.expandByObject(o));
    return b;
  };

  // 1. orient: taillights (red glass) mark the rear; point the nose down +z
  root.updateMatrixWorld(true);
  let all = boxOf([model]);
  const centre = all.getCenter(new THREE.Vector3());
  const tail = boxOf(byMat('Red_glass')).getCenter(new THREE.Vector3());
  const dir = centre.clone().sub(tail).setY(0).normalize();
  model.rotation.y = -Math.atan2(dir.x, dir.z);
  root.updateMatrixWorld(true);

  // 2. scale to real size, centre it, sit it on the ground
  all = boxOf([model]);
  const size = all.getSize(new THREE.Vector3());
  const s = LENGTH / Math.max(size.x, size.z);
  model.scale.multiplyScalar(s);
  root.updateMatrixWorld(true);
  all = boxOf([model]);
  const c = all.getCenter(new THREE.Vector3());
  model.position.x -= c.x;
  model.position.z -= c.z;
  model.position.y -= all.min.y;
  root.updateMatrixWorld(true);

  // 3. give each wheel its own pivot so it can roll
  const wheels = [];
  for (const tyre of byMat('tire')) {
    const wc = boxOf([tyre]).getCenter(new THREE.Vector3());
    const pivot = new THREE.Group();
    pivot.position.copy(body.worldToLocal(wc.clone()));
    body.add(pivot);
    pivot.updateMatrixWorld(true);
    wheels.push({ pivot, centre: wc });
  }
  for (const m of meshes) {
    if (!WHEEL_PARTS.has(m.material?.name)) continue;
    const mc = boxOf([m]).getCenter(new THREE.Vector3());
    let best = null, bd = Infinity;
    for (const w of wheels) {
      const d = w.centre.distanceTo(mc);
      if (d < bd) { bd = d; best = w; }
    }
    if (best && bd < 0.6) best.pivot.attach(m);
  }
  const radius = wheels.length ? boxOf([wheels[0].pivot]).getSize(new THREE.Vector3()).y / 2 : 0.34;

  // 4. materials: cheaper glass, lamps we can switch on at dusk, shadows everywhere
  let headLamp = null, tailLamp = null;
  for (const m of meshes) {
    m.castShadow = true;
    m.receiveShadow = true;
    const mat = m.material;
    if (!mat) continue;
    if (mat.name === 'Windows') {
      mat.transmission = 0;
      mat.transparent = true;
      mat.opacity = 0.38;
      mat.color.set(0x0c1418);
      mat.depthWrite = false;
      m.castShadow = false;
    }
    if (mat.name === 'Light_glass') m.castShadow = false;
    if (mat.name === 'Red_glass') {
      mat.transmission = 0;
      mat.transparent = true;
      mat.color.set(0x8a0a06);
      mat.opacity = 0.85;
      mat.emissive = new THREE.Color(0xff1a10);
      mat.emissiveIntensity = 0.35;
      tailLamp = mat;
      m.castShadow = false;
    }
    if (mat.name === 'Light') {
      mat.emissive = new THREE.Color(0xfff1d0);
      headLamp = mat;
    }
    if (mat.name === 'CarPaint') {
      mat.envMapIntensity = 1.25;
    }
  }

  // soft contact shadow under the car
  const blob = new THREE.Mesh(
    new THREE.PlaneGeometry(2.3, 5.2),
    new THREE.MeshBasicMaterial({ map: radialTexture('rgba(0,0,0,0.85)', 'rgba(0,0,0,0)', 128), transparent: true, depthWrite: false, opacity: 0.8 })
  );
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.012;
  blob.renderOrder = 1;
  root.add(blob);

  // headlight beam for the night stretch
  const spot = new THREE.SpotLight(0xffe2b0, 0, 55, 0.5, 0.55, 1.2);
  spot.position.set(0, 0.7, 2.3);
  const target = new THREE.Object3D();
  target.position.set(0, 0, 14);
  root.add(spot, target);
  spot.target = target;

  return {
    root,
    body,
    wheels: wheels.map((w) => w.pivot),
    setNight(n) {
      if (headLamp) headLamp.emissiveIntensity = n * 4;
      if (tailLamp) tailLamp.emissiveIntensity = 0.35 + n * 3;
      spot.intensity = n * 60;
    },
    spin(dist) {
      for (const w of wheels) w.pivot.rotation.x += dist / radius;
    },
  };
}
