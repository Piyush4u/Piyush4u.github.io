import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { canvas, tex, radialTexture, addGroundGrime } from './util.js';

// A hand-modelled Hindustan Ambassador — the yellow Kolkata taxi.
// Built in "profile space" (x = length, forward; y = up; z = width),
// then rotated so the car drives along +z in its parent group.

const W = 1.62;

function profileShape() {
  const s = new THREE.Shape();
  const top = [
    [2.16, 0.46], [2.22, 0.66], [2.16, 0.88], [1.98, 0.98], [1.6, 1.03], [0.85, 1.06],
    [-1.25, 1.06], [-1.95, 1.03], [-2.16, 0.96], [-2.22, 0.78], [-2.18, 0.52],
  ];
  // walk the outline clockwise starting at front-bottom
  s.moveTo(2.16, 0.46);
  for (let i = 1; i < top.length; i++) s.lineTo(top[i][0], top[i][1]);
  const arch = (cx, from, to) => {
    const r = 0.44, cy = 0.36;
    const a0 = Math.asin(0.06 / r);
    const steps = 18;
    for (let i = 0; i <= steps; i++) {
      // from rear side of arch to front side (we're walking rear -> front along bottom)
      const a = Math.PI - a0 - (i / steps) * (Math.PI - 2 * a0);
      s.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    }
  };
  s.lineTo(-1.79, 0.42);
  arch(-1.35);
  s.lineTo(0.91, 0.42);
  arch(1.35);
  s.lineTo(2.16, 0.46);
  return s;
}

function extrude(shape, depth, bevel = 0.07, seg = 5) {
  const g = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel * 0.85,
    bevelSegments: seg,
    curveSegments: 24,
  });
  g.translate(0, 0, -depth / 2);
  g.computeVertexNormals();
  return g;
}

// Bend the normals of the flat side panels so light and reflections roll over
// them like the Ambassador's rounded flanks (and the greenhouse's tumblehome).
function roundSides(g, { yMid = 0.78, ky = 0.9, kx = 0.18, lean = 0 } = {}) {
  const p = g.attributes.position, n = g.attributes.normal;
  const v = new THREE.Vector3();
  for (let i = 0; i < n.count; i++) {
    const nz = n.getZ(i);
    if (Math.abs(nz) < 0.85) continue;
    const x = p.getX(i), y = p.getY(i);
    v.set(Math.sign(x) * Math.pow(Math.abs(x) / 2.2, 3) * kx, (y - yMid) * ky + lean, Math.sign(nz)).normalize();
    n.setXYZ(i, v.x, v.y, v.z);
  }
  return g;
}

function beam(mat, a, b, t = 0.06, z = 0) {
  const A = new THREE.Vector3(a[0], a[1], z);
  const B = new THREE.Vector3(b[0], b[1], z);
  const len = A.distanceTo(B);
  const m = new THREE.Mesh(new THREE.BoxGeometry(t, len, t * 0.9), mat);
  m.position.addVectors(A, B).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize());
  m.castShadow = true;
  return m;
}

let sharedTextures;
function textures() {
  if (sharedTextures) return sharedTextures;
  const door = tex(
    canvas(512, 128, (c, w, h) => {
      c.clearRect(0, 0, w, h);
      c.fillStyle = '#1b3f8f';
      c.font = '700 64px "JetBrains Mono", monospace';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText('NO REFUSAL', w / 2, h / 2 + 4);
    })
  );
  const plate = tex(
    canvas(512, 128, (c, w, h) => {
      c.fillStyle = '#f6f3ea';
      c.fillRect(0, 0, w, h);
      c.strokeStyle = '#111';
      c.lineWidth = 8;
      c.strokeRect(6, 6, w - 12, h - 12);
      c.fillStyle = '#111';
      c.font = '700 66px "JetBrains Mono", monospace';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText('WB 04 PP 2016', w / 2, h / 2 + 4);
    })
  );
  const shadow = radialTexture('rgba(0,0,0,0.85)', 'rgba(0,0,0,0)', 128);
  sharedTextures = { door, plate, shadow };
  return sharedTextures;
}

export function buildTaxi({ lights = true, color = 0xf2bd1b } = {}) {
  const T = textures();
  const root = new THREE.Group();
  const body = new THREE.Group(); // pitches & rolls
  const prof = new THREE.Group(); // profile space
  prof.rotation.y = -Math.PI / 2;
  body.add(prof);
  root.add(body);

  const paint = addGroundGrime(new THREE.MeshPhysicalMaterial({
    color, roughness: 0.34, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.2,
  }), { height: 0.95, strength: 0.32 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xe9ecef, metalness: 1, roughness: 0.14 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x1c2a2e, metalness: 0.0, roughness: 0.02, envMapIntensity: 1.1, transparent: true, opacity: 0.34,
    specularIntensity: 1, ior: 1.52, depthWrite: false,
  });
  const vinyl = new THREE.MeshStandardMaterial({ color: 0x2a1714, roughness: 0.45 });
  const cabin = new THREE.MeshStandardMaterial({ color: 0x15130f, roughness: 0.8 });
  const black = new THREE.MeshStandardMaterial({ color: 0x0c0c0d, roughness: 0.7 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.92 });
  const headLens = new THREE.MeshStandardMaterial({
    color: 0xfff8e6, emissive: 0xfff1c9, emissiveIntensity: 0.15, roughness: 0.1, metalness: 0.2,
  });
  const tailLens = new THREE.MeshStandardMaterial({
    color: 0x7a0a0a, emissive: 0xff1a1a, emissiveIntensity: 0.25, roughness: 0.2,
  });
  const amber = new THREE.MeshStandardMaterial({ color: 0xffa21a, emissive: 0xff8a00, emissiveIntensity: 0.2 });

  const add = (geo, mat, x = 0, y = 0, z = 0, cast = true) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = cast;
    m.receiveShadow = true;
    prof.add(m);
    return m;
  };

  // Shell
  add(roundSides(extrude(profileShape(), W - 0.14, 0.07, 6)), paint);
  // Greenhouse glass
  const gh = new THREE.Shape();
  gh.moveTo(-1.22, 1.0); gh.lineTo(-0.95, 1.47); gh.lineTo(0.42, 1.49); gh.lineTo(0.84, 1.0); gh.lineTo(-1.22, 1.0);
  add(roundSides(extrude(gh, W - 0.3, 0.035, 3), { yMid: 1.0, ky: 0.2, kx: 0.05, lean: 0.3 }), glass);
  // Roof cap & pillars
  add(new RoundedBoxGeometry(1.5, 0.08, W - 0.2, 3, 0.035), paint, -0.27, 1.5, 0);
  const zg = (W - 0.24) / 2;
  for (const z of [-zg, zg]) {
    prof.add(beam(paint, [0.84, 1.03], [0.42, 1.5], 0.07, z));
    prof.add(beam(paint, [-0.22, 1.03], [-0.22, 1.5], 0.08, z));
    prof.add(beam(paint, [-1.2, 1.03], [-0.95, 1.5], 0.09, z));
  }
  // Chrome belt & side trim
  for (const z of [-W / 2 - 0.004, W / 2 + 0.004]) {
    add(new THREE.BoxGeometry(2.1, 0.022, 0.012), chrome, -0.2, 1.04, z, false);
    add(new THREE.BoxGeometry(3.95, 0.03, 0.014), chrome, 0, 0.78, z, false);
    // door seams
    for (const x of [0.86, -0.22, -1.24]) add(new THREE.BoxGeometry(0.012, 0.56, 0.006), black, x, 0.75, z, false);
    // handles
    for (const x of [0.62, -0.42]) add(new THREE.BoxGeometry(0.16, 0.03, 0.03), chrome, x, 0.95, z + Math.sign(z) * 0.01, false);
    // NO REFUSAL decal
    const decal = new THREE.Mesh(
      new THREE.PlaneGeometry(0.95, 0.24),
      new THREE.MeshStandardMaterial({ map: T.door, transparent: true, roughness: 0.4, depthWrite: false })
    );
    decal.position.set(0.28, 0.6, z + Math.sign(z) * 0.006);
    if (z < 0) decal.rotation.y = Math.PI;
    prof.add(decal);
    // mirror
    add(new THREE.BoxGeometry(0.06, 0.08, 0.12), chrome, 0.78, 1.12, z + Math.sign(z) * 0.08);
  }
  // Bumpers
  add(new RoundedBoxGeometry(0.16, 0.15, W + 0.08, 3, 0.05), chrome, 2.26, 0.48, 0);
  add(new RoundedBoxGeometry(0.16, 0.15, W + 0.06, 3, 0.05), chrome, -2.25, 0.5, 0);
  // Grille
  add(new THREE.BoxGeometry(0.05, 0.3, 0.92), black, 2.2, 0.72, 0, false);
  add(new RoundedBoxGeometry(0.06, 0.34, 0.98, 2, 0.02), chrome, 2.19, 0.72, 0, false).scale.set(1, 1, 1);
  for (let i = 0; i < 9; i++) add(new THREE.BoxGeometry(0.06, 0.28, 0.028), chrome, 2.225, 0.72, -0.4 + i * 0.1, false);
  // Headlights, indicators, taillights
  const hl = new THREE.CylinderGeometry(0.115, 0.115, 0.08, 32);
  hl.rotateZ(Math.PI / 2);
  const ring = new THREE.TorusGeometry(0.12, 0.02, 10, 32);
  ring.rotateY(Math.PI / 2);
  for (const z of [-0.6, 0.6]) {
    add(hl, headLens, 2.17, 0.76, z, false);
    add(ring, chrome, 2.2, 0.76, z, false);
    add(new THREE.BoxGeometry(0.04, 0.05, 0.1), amber, 2.2, 0.6, z * 1.12, false);
    add(new THREE.BoxGeometry(0.04, 0.17, 0.13), tailLens, -2.2, 0.82, z * 1.02, false);
  }
  // Plates
  const plateMat = new THREE.MeshStandardMaterial({ map: T.plate, roughness: 0.5 });
  const pf = add(new THREE.PlaneGeometry(0.52, 0.13), plateMat, 2.345, 0.47, 0, false);
  pf.rotation.y = Math.PI / 2;
  const pr = add(new THREE.PlaneGeometry(0.52, 0.13), plateMat, -2.34, 0.66, 0, false);
  pr.rotation.y = -Math.PI / 2;
  // Underbody
  add(new THREE.BoxGeometry(3.7, 0.22, W - 0.24), black, 0, 0.42, 0, false);

  // Cabin: bench seats, dash, steering wheel and a driver (India drives on the left, wheel on the right)
  add(new THREE.BoxGeometry(2.3, 0.05, W - 0.3), cabin, -0.25, 0.64, 0, false);
  add(new THREE.BoxGeometry(2.1, 0.03, W - 0.34), cabin, -0.27, 1.43, 0, false);
  for (const [sx, bx] of [[0.12, -0.14], [-0.86, -1.12]]) {
    add(new RoundedBoxGeometry(0.52, 0.2, W - 0.36, 3, 0.06), vinyl, sx, 0.78, 0, false);
    add(new RoundedBoxGeometry(0.14, 0.5, W - 0.36, 3, 0.05), vinyl, bx, 1.07, 0, false).rotation.z = 0.12;
  }
  add(new RoundedBoxGeometry(0.34, 0.22, W - 0.3, 2, 0.05), cabin, 0.72, 0.98, 0, false);
  const wheelG = new THREE.TorusGeometry(0.19, 0.018, 8, 32);
  wheelG.rotateY(Math.PI / 2);
  add(wheelG, black, 0.46, 1.1, 0.36, false).rotation.z = 0.45;
  add(new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8).rotateZ(Math.PI / 2 - 0.45), black, 0.6, 1.04, 0.36, false);
  const shirt = new THREE.MeshStandardMaterial({ color: 0xd8d2c0, roughness: 0.85 });
  const skin = new THREE.MeshStandardMaterial({ color: 0x7a4e33, roughness: 0.55 });
  add(new RoundedBoxGeometry(0.26, 0.5, 0.4, 3, 0.1), shirt, 0.02, 1.1, 0.36, false);
  add(new THREE.SphereGeometry(0.105, 20, 14), skin, 0.06, 1.45, 0.36, false).scale.set(1, 1.15, 0.95);
  add(new THREE.SphereGeometry(0.11, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x14100d, roughness: 0.9 }), 0.05, 1.48, 0.36, false);
  for (const z of [0.22, 0.5]) add(new THREE.CylinderGeometry(0.035, 0.035, 0.42, 8).rotateZ(Math.PI / 2 - 0.5), shirt, 0.26, 1.16, z, false);
  // Old mechanical flag-meter on the left of the windscreen
  add(new RoundedBoxGeometry(0.14, 0.16, 0.1, 2, 0.02), new THREE.MeshStandardMaterial({ color: 0x5e1212, roughness: 0.45 }), 0.78, 1.18, -(W / 2) - 0.02, true);
  add(new THREE.BoxGeometry(0.015, 0.1, 0.07), new THREE.MeshStandardMaterial({ color: 0xd8d4c8 }), 0.8, 1.32, -(W / 2) - 0.02, false);
  // Roof carrier
  const rack = new THREE.MeshStandardMaterial({ color: 0xc9ccd0, metalness: 1, roughness: 0.28 });
  for (const z of [-0.62, 0.62]) {
    add(new THREE.CylinderGeometry(0.018, 0.018, 1.4, 10).rotateZ(Math.PI / 2), rack, -0.27, 1.64, z);
    for (const x of [-0.9, 0.35]) add(new THREE.CylinderGeometry(0.014, 0.014, 0.12, 8), rack, x, 1.58, z);
  }
  for (const x of [-0.85, -0.27, 0.3]) add(new THREE.CylinderGeometry(0.014, 0.014, 1.24, 8).rotateX(Math.PI / 2), rack, x, 1.64, 0);
  // Rain gutters, wipers, aerial
  for (const z of [-zg - 0.04, zg + 0.04]) add(new THREE.BoxGeometry(1.5, 0.02, 0.02), chrome, -0.27, 1.47, z, false);
  for (const z of [-0.32, 0.22]) {
    const w = add(new THREE.BoxGeometry(0.012, 0.012, 0.42), black, 0.86, 1.07, z, false);
    w.rotation.x = 0.25;
  }
  add(new THREE.CylinderGeometry(0.004, 0.006, 0.9, 6), chrome, 1.5, 1.45, -0.7, false).rotation.z = -0.25;
  // Black arch liners so you can't see daylight through the wheel wells
  const arch = new THREE.CylinderGeometry(0.42, 0.42, W - 0.12, 20, 1, true, Math.PI / 2, Math.PI);
  arch.rotateX(Math.PI / 2);
  const archMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.95, side: THREE.BackSide });
  for (const x of [1.35, -1.35]) add(arch, archMat, x, 0.36, 0, false);

  // Wheels
  const wheels = [];
  const tire = new THREE.TorusGeometry(0.245, 0.095, 16, 40);
  const tread = new THREE.CylinderGeometry(0.335, 0.335, 0.17, 40, 1, true);
  tread.rotateX(Math.PI / 2);
  const hub = new THREE.CylinderGeometry(0.17, 0.19, 0.04, 32);
  hub.rotateX(Math.PI / 2);
  const cap = new THREE.SphereGeometry(0.07, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  cap.rotateX(Math.PI / 2);
  for (const x of [1.35, -1.35]) {
    for (const z of [-(W / 2 - 0.13), W / 2 - 0.13]) {
      const w = new THREE.Group();
      w.position.set(x, 0.335, z);
      const side = Math.sign(z);
      const a = new THREE.Mesh(tire, rubber);
      const b = new THREE.Mesh(tread, rubber);
      const c = new THREE.Mesh(hub, chrome);
      c.position.z = side * 0.07;
      const d = new THREE.Mesh(cap, chrome);
      d.position.z = side * 0.085;
      d.scale.z = side;
      // little hubcap spokes so rotation reads
      for (let k = 0; k < 4; k++) {
        const s = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.025, 0.02), black);
        s.rotation.z = (k * Math.PI) / 4;
        s.position.z = side * 0.093;
        w.add(s);
      }
      [a, b, c, d].forEach((m) => { m.castShadow = true; w.add(m); });
      prof.add(w);
      wheels.push(w);
    }
  }

  // Soft contact shadow
  const blob = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 5.4),
    new THREE.MeshBasicMaterial({ map: T.shadow, transparent: true, depthWrite: false, opacity: 0.75 })
  );
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.012;
  blob.renderOrder = 1;
  root.add(blob);

  let headSpot = null;
  if (lights) {
    headSpot = new THREE.SpotLight(0xffe2b0, 0, 55, 0.5, 0.55, 1.2);
    headSpot.position.set(0, 0.8, 2.2);
    const target = new THREE.Object3D();
    target.position.set(0, 0, 14);
    root.add(target);
    headSpot.target = target;
    root.add(headSpot);
  }

  return {
    root,
    body,
    wheels,
    setNight(n) {
      headLens.emissiveIntensity = 0.15 + n * 5;
      tailLens.emissiveIntensity = 0.25 + n * 3;
      if (headSpot) headSpot.intensity = n * 60;
    },
    spin(dist) {
      for (const w of wheels) w.rotation.z -= dist / 0.335;
    },
  };
}
