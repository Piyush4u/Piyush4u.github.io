import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { rng, canvas, tex, radialTexture, beamMatrix, paintVertexColor, normalizeForMerge } from './util.js';

export const ROAD_HALF = 4.5;
export const WALK_OUT = 7.4;
export const RIVER = { zNear: -582, zFar: -716, level: -3.2 };

// ---------------------------------------------------------------- route
export function buildRoute() {
  const pts = [
    [0, 70], [0, 20], [3, -40], [-10, -100], [-16, -160], [-2, -220], [18, -280], [20, -340],
    [2, -400], [-14, -455], [-8, -505], [0, -545], [0, -575], [0, -620], [0, -700], [0, -760], [0, -830],
  ].map(([x, z]) => new THREE.Vector3(x, 0, z));
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  curve.arcLengthDivisions = 2000;
  const length = curve.getLength();
  const N = 1400;
  const samples = [];
  for (let i = 0; i <= N; i++) samples.push(curve.getPointAt(i / N));
  const uAtZ = (z) => {
    let best = 0, bd = Infinity;
    for (let i = 0; i <= N; i++) {
      const d = Math.abs(samples[i].z - z);
      if (d < bd) { bd = d; best = i; }
    }
    return best / N;
  };
  const frame = (u, out = {}) => {
    u = Math.min(1, Math.max(0, u));
    out.p = curve.getPointAt(u, out.p || new THREE.Vector3());
    out.t = curve.getTangentAt(u, out.t || new THREE.Vector3()).setY(0).normalize();
    out.r = (out.r || new THREE.Vector3()).crossVectors(out.t, new THREE.Vector3(0, 1, 0)).normalize();
    return out;
  };
  const distToRoad = (x, z) => {
    let bd = Infinity;
    for (let i = 0; i <= N; i += 2) {
      const dx = samples[i].x - x, dz = samples[i].z - z;
      const d = dx * dx + dz * dz;
      if (d < bd) bd = d;
    }
    return Math.sqrt(bd);
  };
  return { curve, length, samples, uAtZ, frame, distToRoad };
}

// ---------------------------------------------------------------- textures
function asphaltTexture() {
  const r = rng(7);
  return tex(
    canvas(1024, 1024, (c, w, h) => {
      c.fillStyle = '#3b3b3d';
      c.fillRect(0, 0, w, h);
      for (let i = 0; i < 70000; i++) {
        const v = 40 + r() * 50;
        c.fillStyle = `rgba(${v},${v},${v + 2},${0.25 + r() * 0.5})`;
        c.fillRect(r() * w, r() * h, 1 + r() * 2.5, 1 + r() * 2.5);
      }
      // patches & tyre polish
      for (let i = 0; i < 18; i++) {
        c.fillStyle = `rgba(20,20,22,${0.08 + r() * 0.12})`;
        c.beginPath();
        c.ellipse(r() * w, r() * h, 30 + r() * 120, 20 + r() * 80, r() * 3, 0, 7);
        c.fill();
      }
      for (const x of [0.28, 0.4, 0.6, 0.72]) {
        const g = c.createLinearGradient(x * w - 40, 0, x * w + 40, 0);
        g.addColorStop(0, 'rgba(0,0,0,0)');
        g.addColorStop(0.5, 'rgba(18,18,20,0.22)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        c.fillStyle = g;
        c.fillRect(x * w - 40, 0, 80, h);
      }
      // markings
      c.fillStyle = 'rgba(232,228,214,0.88)';
      c.fillRect(34, 0, 14, h);
      c.fillRect(w - 48, 0, 14, h);
      c.fillStyle = 'rgba(240,196,40,0.9)';
      c.fillRect(w / 2 - 7, 0, 14, h * 0.5);
      // wear on markings
      c.globalCompositeOperation = 'destination-out';
      for (let i = 0; i < 9000; i++) {
        c.fillStyle = `rgba(0,0,0,${r() * 0.5})`;
        c.fillRect(r() * w, r() * h, 2, 2);
      }
      c.globalCompositeOperation = 'destination-over';
      c.fillStyle = '#3b3b3d';
      c.fillRect(0, 0, w, h);
    }),
    { repeat: true, aniso: 16 }
  );
}

function pavementTexture() {
  const r = rng(11);
  return tex(
    canvas(512, 512, (c, w, h) => {
      c.fillStyle = '#9d978d';
      c.fillRect(0, 0, w, h);
      for (let i = 0; i < 20000; i++) {
        const v = 120 + r() * 60;
        c.fillStyle = `rgba(${v},${v - 4},${v - 10},0.35)`;
        c.fillRect(r() * w, r() * h, 2, 2);
      }
      c.strokeStyle = 'rgba(60,56,50,0.55)';
      c.lineWidth = 3;
      for (let i = 0; i <= 4; i++) {
        c.beginPath(); c.moveTo(0, i * 128); c.lineTo(w, i * 128); c.stroke();
        c.beginPath(); c.moveTo(i * 128, 0); c.lineTo(i * 128, h); c.stroke();
      }
    }),
    { repeat: true }
  );
}

function groundTexture() {
  const r = rng(3);
  return tex(
    canvas(512, 512, (c, w, h) => {
      c.fillStyle = '#5d6040';
      c.fillRect(0, 0, w, h);
      for (let i = 0; i < 260; i++) {
        const g = c.createRadialGradient(0, 0, 0, 0, 0, 1);
        const tone = r() < 0.5 ? '78,90,52' : '112,98,70';
        g.addColorStop(0, `rgba(${tone},0.5)`);
        g.addColorStop(1, `rgba(${tone},0)`);
        c.save();
        c.translate(r() * w, r() * h);
        c.scale(20 + r() * 70, 20 + r() * 70);
        c.fillStyle = g;
        c.fillRect(-1, -1, 2, 2);
        c.restore();
      }
      for (let i = 0; i < 40000; i++) {
        const v = r();
        c.fillStyle = v < 0.5 ? 'rgba(60,72,40,0.5)' : 'rgba(130,118,90,0.35)';
        c.fillRect(r() * w, r() * h, 1.5, 1.5);
      }
    }),
    { repeat: true }
  );
}

// Facade atlas: 8x8 bays (each bay = 3m x 3m). Kolkata flavour: green shutters & balconies.
function facadeTextures() {
  const r = rng(21);
  const cells = [];
  for (let i = 0; i < 64; i++) cells.push({ shutter: r() < 0.38, balcony: r() < 0.22, lit: r() < 0.36, warm: r() < 0.75, blind: r() * 0.5 });
  const draw = (emissive) =>
    canvas(512, 512, (c, w) => {
      const s = w / 8;
      c.fillStyle = emissive ? '#000' : '#efe9dd';
      c.fillRect(0, 0, w, w);
      if (!emissive) {
        for (let i = 0; i < 30000; i++) {
          c.fillStyle = `rgba(${r() < 0.5 ? '90,80,70' : '255,255,255'},${r() * 0.12})`;
          c.fillRect(r() * w, r() * w, 2, 2);
        }
        // rain streaks — every old Kolkata wall has them
        for (let i = 0; i < 140; i++) {
          c.fillStyle = `rgba(70,64,55,${0.04 + r() * 0.08})`;
          c.fillRect(r() * w, r() * w, 1 + r() * 3, 20 + r() * 60);
        }
      }
      cells.forEach((cell, i) => {
        const x = (i % 8) * s, y = Math.floor(i / 8) * s;
        if (!emissive) {
          c.fillStyle = 'rgba(60,52,44,0.18)';
          c.fillRect(x, y, s, 4); // cornice line
        }
        const wx = x + s * 0.3, wy = y + s * 0.24, ww = s * 0.4, wh = s * 0.52;
        if (emissive) {
          if (cell.lit) {
            const g = c.createLinearGradient(0, wy, 0, wy + wh);
            g.addColorStop(0, cell.warm ? '#ffd28a' : '#cfe6ff');
            g.addColorStop(1, cell.warm ? '#ff9f43' : '#7fa9e0');
            c.fillStyle = g;
            c.fillRect(wx, wy, ww, wh);
            c.fillStyle = `rgba(0,0,0,${cell.blind})`;
            c.fillRect(wx, wy, ww, wh * 0.4);
          }
          return;
        }
        c.fillStyle = 'rgba(70,60,50,0.35)';
        c.fillRect(wx - 3, wy - 3, ww + 6, wh + 6);
        const g = c.createLinearGradient(wx, wy, wx + ww, wy + wh);
        g.addColorStop(0, '#2f3c48');
        g.addColorStop(1, '#151b22');
        c.fillStyle = g;
        c.fillRect(wx, wy, ww, wh);
        c.fillStyle = 'rgba(220,230,240,0.12)';
        c.fillRect(wx + 2, wy + 2, ww * 0.35, wh - 4);
        if (cell.shutter) {
          c.fillStyle = '#3d6b4f';
          c.fillRect(wx - ww * 0.42, wy, ww * 0.38, wh);
          c.fillRect(wx + ww * 1.04, wy, ww * 0.38, wh);
          c.fillStyle = 'rgba(0,0,0,0.25)';
          for (let k = 0; k < 7; k++) {
            c.fillRect(wx - ww * 0.42, wy + (k * wh) / 7, ww * 0.38, 1.5);
            c.fillRect(wx + ww * 1.04, wy + (k * wh) / 7, ww * 0.38, 1.5);
          }
        }
        if (cell.balcony) {
          c.fillStyle = 'rgba(40,40,40,0.75)';
          c.fillRect(x + s * 0.12, wy + wh + 2, s * 0.76, 3);
          for (let k = 0; k < 9; k++) c.fillRect(x + s * 0.12 + (k * s * 0.76) / 8, wy + wh * 0.75, 1.5, wh * 0.25 + 4);
        }
      });
    });
  return { map: tex(draw(false), { repeat: true }), emissive: tex(draw(true), { repeat: true }) };
}

// ---------------------------------------------------------------- geometry helpers
function ribbon(route, from, to, y, uvScale = 12, step = 1) {
  const pos = [], uv = [], idx = [];
  const N = route.samples.length - 1;
  const f = {};
  let dist = 0;
  let prev = null;
  let row = 0;
  for (let i = 0; i <= N; i += step) {
    route.frame(i / N, f);
    if (prev) dist += prev.distanceTo(f.p);
    prev = f.p.clone();
    const a = f.p.clone().addScaledVector(f.r, from);
    const b = f.p.clone().addScaledVector(f.r, to);
    pos.push(a.x, y, a.z, b.x, y, b.z);
    uv.push(0, dist / uvScale, 1, dist / uvScale);
    if (row > 0) {
      const k = row * 2;
      idx.push(k - 2, k, k - 1, k - 1, k, k + 1);
    }
    row++;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  // ensure normals point up regardless of winding
  const n = g.attributes.normal;
  for (let i = 0; i < n.count; i++) n.setXYZ(i, 0, 1, 0);
  return g;
}

function curbFace(route, off, h, step = 2) {
  const pos = [], idx = [];
  const N = route.samples.length - 1;
  const f = {};
  let row = 0;
  for (let i = 0; i <= N; i += step) {
    route.frame(i / N, f);
    const a = f.p.clone().addScaledVector(f.r, off);
    pos.push(a.x, 0, a.z, a.x, h, a.z);
    if (row > 0) {
      const k = row * 2;
      idx.push(k - 2, k, k - 1, k - 1, k, k + 1);
    }
    row++;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function buildingGeometry(w, h, d, r) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const A = 24; // 8 bays * 3m
  const ou = Math.floor(r() * 8) / 8, ov = Math.floor(r() * 8) / 8;
  for (let face = 0; face < 6; face++) {
    for (let k = 0; k < 4; k++) {
      const i = face * 4 + k;
      if (face === 2 || face === 3) { uv.setXY(i, 0.003, 0.997); continue; }
      const span = face < 2 ? d : w;
      uv.setXY(i, uv.getX(i) * (span / A) + ou, uv.getY(i) * (h / A) + ov);
    }
  }
  g.translate(0, h / 2, 0);
  return g;
}

const PALETTE = ['#e9dcc0', '#d39a76', '#efe6d2', '#bccab9', '#e2b98b', '#cfc7b8', '#e8cfc7', '#f3eee3', '#c9b48f', '#a9bfc9', '#dcc6a0'];

// ---------------------------------------------------------------- world
export function buildWorld(scene, route, exclusions, quality) {
  const r = rng(42);
  const world = { nightMats: [], update: [] };
  const N = route.samples.length - 1;

  // Ground (split around the river)
  const gTex = groundTexture();
  gTex.repeat.set(140, 140);
  const groundMat = new THREE.MeshStandardMaterial({ map: gTex, roughness: 1, color: 0xb9b49a });
  const makeGround = (zFrom, zTo) => {
    const len = Math.abs(zTo - zFrom);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(3600, len), groundMat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(0, -0.02, (zFrom + zTo) / 2);
    m.receiveShadow = true;
    const t = gTex.clone();
    t.repeat.set(140, (140 * len) / 3600);
    t.needsUpdate = true;
    m.material = groundMat.clone();
    m.material.map = t;
    scene.add(m);
  };
  makeGround(1500, RIVER.zNear);
  makeGround(RIVER.zFar, -2600);

  // River
  const waterNormal = (() => {
    const size = 256;
    const data = new Uint8Array(size * size * 4);
    const h = (x, y) =>
      Math.sin(x * 0.11) * 0.5 + Math.sin(y * 0.07 + x * 0.03) * 0.8 + Math.sin((x + y) * 0.23) * 0.3 + Math.sin(x * 0.4 - y * 0.31) * 0.15;
    for (let y = 0; y < size; y++)
      for (let x = 0; x < size; x++) {
        const s = (2 * Math.PI) / size;
        const hx = h((x + 1) * s * 40, y * s * 40) - h((x - 1) * s * 40, y * s * 40);
        const hy = h(x * s * 40, (y + 1) * s * 40) - h(x * s * 40, (y - 1) * s * 40);
        const v = new THREE.Vector3(-hx, -hy, 2).normalize();
        const i = (y * size + x) * 4;
        data[i] = (v.x * 0.5 + 0.5) * 255;
        data[i + 1] = (v.y * 0.5 + 0.5) * 255;
        data[i + 2] = (v.z * 0.5 + 0.5) * 255;
        data[i + 3] = 255;
      }
    const t = new THREE.DataTexture(data, size, size);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(60, 4);
    t.needsUpdate = true;
    return t;
  })();
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(3600, RIVER.zNear - RIVER.zFar + 10),
    new THREE.MeshPhysicalMaterial({
      color: 0x24414a, roughness: 0.06, metalness: 0.1, normalMap: waterNormal,
      normalScale: new THREE.Vector2(0.35, 0.35), clearcoat: 1, clearcoatRoughness: 0.1,
    })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, RIVER.level, (RIVER.zNear + RIVER.zFar) / 2);
  scene.add(water);
  world.update.push((t) => { waterNormal.offset.set(t * 0.004, t * 0.011); });
  const bankMat = new THREE.MeshStandardMaterial({ color: 0x6b655b, roughness: 0.95 });
  for (const z of [RIVER.zNear, RIVER.zFar]) {
    const bank = new THREE.Mesh(new THREE.BoxGeometry(3600, 4.5, 2), bankMat);
    bank.position.set(0, -2.2, z + (z === RIVER.zNear ? -1 : 1));
    bank.receiveShadow = true;
    scene.add(bank);
  }

  // Road & sidewalks
  const asphalt = asphaltTexture();
  const road = new THREE.Mesh(
    ribbon(route, -ROAD_HALF, ROAD_HALF, 0.0, 12, 1),
    new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.82, metalness: 0.02, side: THREE.DoubleSide })
  );
  road.receiveShadow = true;
  scene.add(road);
  const pave = pavementTexture();
  const walkMat = new THREE.MeshStandardMaterial({ map: pave, roughness: 0.9, side: THREE.DoubleSide });
  for (const [a, b] of [[ROAD_HALF, WALK_OUT], [-WALK_OUT, -ROAD_HALF]]) {
    const g = ribbon(route, a, b, 0.16, 2.5, 1);
    // u along width should also be metric
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * ((WALK_OUT - ROAD_HALF) / 2.5));
    const m = new THREE.Mesh(g, walkMat);
    m.receiveShadow = true;
    scene.add(m);
  }
  const curbMat = new THREE.MeshStandardMaterial({ color: 0xb8b2a6, roughness: 0.8, side: THREE.DoubleSide });
  for (const off of [ROAD_HALF, -ROAD_HALF, WALK_OUT, -WALK_OUT]) scene.add(new THREE.Mesh(curbFace(route, off, 0.16), curbMat));

  const inRiver = (z, pad = 6) => z < RIVER.zNear + pad && z > RIVER.zFar - pad;
  const excluded = (x, z, rad) => exclusions.some((e) => Math.hypot(e.x - x, e.z - z) < e.r + rad);

  // Buildings
  const facade = facadeTextures();
  const bGeos = [], roofGeos = [], awnGeos = [];
  const tryBuilding = (x, z, w, d, h, rot, minRoad = WALK_OUT + 0.6) => {
    const rad = Math.hypot(w, d) / 2;
    if (inRiver(z, rad + 4) || excluded(x, z, rad)) return false;
    // corners must stay clear of the road
    const c = Math.cos(rot), s = Math.sin(rot);
    for (const [cx, cz] of [[-w / 2, -d / 2], [w / 2, -d / 2], [-w / 2, d / 2], [w / 2, d / 2], [0, 0]]) {
      const px = x + cx * c + cz * s, pz = z - cx * s + cz * c;
      if (route.distToRoad(px, pz) < minRoad) return false;
    }
    const g = buildingGeometry(w, h, d, r);
    paintVertexColor(g, PALETTE[Math.floor(r() * PALETTE.length)]);
    g.rotateY(rot);
    g.translate(x, 0, z);
    bGeos.push(normalizeForMerge(g));
    // parapet + rooftop water tanks (the black Sintex tanks on every Indian roof)
    const par = new THREE.BoxGeometry(w + 0.3, 0.6, d + 0.3);
    par.translate(0, h + 0.3, 0);
    paintVertexColor(par, '#8a8378');
    const parts = [par];
    const tanks = 1 + Math.floor(r() * 3);
    for (let k = 0; k < tanks; k++) {
      const t = new THREE.CylinderGeometry(0.7, 0.75, 1.5, 14);
      t.translate((r() - 0.5) * (w - 2), h + 1.35, (r() - 0.5) * (d - 2));
      paintVertexColor(t, '#141414');
      parts.push(t);
    }
    if (r() < 0.4) {
      const hut = new THREE.BoxGeometry(2.5, 2.4, 2.5);
      hut.translate((r() - 0.5) * (w - 3), h + 1.2, (r() - 0.5) * (d - 3));
      paintVertexColor(hut, '#bdb4a3');
      parts.push(hut);
    }
    for (const p of parts) {
      p.rotateY(rot);
      p.translate(x, 0, z);
      roofGeos.push(normalizeForMerge(p, ['position', 'normal', 'color']));
    }
    return true;
  };

  const f = {};
  for (const side of [-1, 1]) {
    let s = 4;
    const L = route.length;
    while (s < L + 30) {
      const w = 8 + r() * 8;
      const u = Math.min(1, s / L);
      route.frame(u, f);
      const d = 9 + r() * 7;
      const tall = r();
      const h = tall < 0.08 ? 30 + r() * 26 : 9 + Math.floor(r() * 4) * 3.2 + r() * 2;
      const off = WALK_OUT + 1.2 + d / 2 + r() * 1.5;
      const x = f.p.x + f.r.x * side * off;
      const z = f.p.z + f.r.z * side * off;
      const rot = Math.atan2(f.t.x, f.t.z);
      // local z runs along the road, local x faces it
      if (tryBuilding(x, z, d, w, h, rot)) {
        // awning over the shopfront
        if (r() < 0.55) {
          const a = new THREE.BoxGeometry(1.6, 0.12, w * 0.8);
          a.rotateZ(-side * 0.22);
          a.translate(side * (d / 2 + 0.75), 3.4, 0);
          paintVertexColor(a, ['#b23a2e', '#2f6d8a', '#d18b2c', '#3f7a4c', '#8a3f6d'][Math.floor(r() * 5)]);
          a.rotateY(rot);
          a.translate(x, 0, z);
          awnGeos.push(normalizeForMerge(a, ['position', 'normal', 'color']));
        }
      }
      s += w + 0.6 + r() * 2.5;
    }
    // second row, set back — gives the skyline depth
    s = 0;
    while (s < route.length + 60) {
      const u = Math.min(1, s / route.length);
      route.frame(u, f);
      const w = 12 + r() * 14, d = 12 + r() * 14;
      const h = r() < 0.18 ? 34 + r() * 40 : 12 + r() * 16;
      const off = 34 + r() * 30;
      const x = f.p.x + f.r.x * side * off;
      const z = f.p.z + f.r.z * side * off;
      tryBuilding(x, z, w, d, h, Math.atan2(f.t.x, f.t.z) + (r() - 0.5) * 0.3, 20);
      s += w + 6 + r() * 10;
    }
  }
  // the far bank skyline — this is what glitters behind the bridge at night
  for (let i = 0; i < 70; i++) {
    const x = (r() - 0.5) * 520;
    const z = RIVER.zFar - 24 - r() * 240;
    const w = 12 + r() * 18, d = 12 + r() * 18;
    const h = r() < 0.3 ? 40 + r() * 55 : 14 + r() * 22;
    tryBuilding(x, z, w, d, h, (r() - 0.5) * 0.4, 14);
  }
  // near bank river-front
  for (let i = 0; i < 36; i++) {
    const x = (r() < 0.5 ? -1 : 1) * (26 + r() * 240);
    const z = RIVER.zNear + 22 + r() * 70;
    tryBuilding(x, z, 12 + r() * 10, 10 + r() * 10, 10 + r() * 22, (r() - 0.5) * 0.2, 14);
  }

  const bMat = new THREE.MeshStandardMaterial({
    map: facade.map, emissiveMap: facade.emissive, emissive: 0xffffff, emissiveIntensity: 0,
    vertexColors: true, roughness: 0.88,
  });
  const buildings = new THREE.Mesh(mergeGeometries(bGeos), bMat);
  buildings.castShadow = true;
  buildings.receiveShadow = true;
  scene.add(buildings);
  const roofs = new THREE.Mesh(mergeGeometries(roofGeos), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }));
  roofs.castShadow = true;
  roofs.receiveShadow = true;
  scene.add(roofs);
  if (awnGeos.length) {
    const aw = new THREE.Mesh(mergeGeometries(awnGeos), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, side: THREE.DoubleSide }));
    aw.castShadow = true;
    scene.add(aw);
  }
  world.windows = bMat;

  // Street lamps + light pools + overhead wires
  const poleGeo = mergeGeometries([
    normalizeForMerge(new THREE.CylinderGeometry(0.07, 0.11, 7, 10).translate(0, 3.5, 0), ['position', 'normal']),
    normalizeForMerge(new THREE.BoxGeometry(0.07, 0.07, 1.8).translate(0, 6.95, 0.9), ['position', 'normal']),
    normalizeForMerge(new THREE.BoxGeometry(0.3, 0.12, 0.6).translate(0, 6.9, 1.85), ['position', 'normal']),
  ]);
  const headGeo = new THREE.BoxGeometry(0.26, 0.04, 0.5).translate(0, 6.83, 1.85);
  const lampPts = [];
  for (let s = 6; s < route.length - 10; s += 26) {
    route.frame(s / route.length, f);
    for (const side of [-1, 1]) {
      const off = ROAD_HALF + 1.0;
      const x = f.p.x + f.r.x * side * off, z = f.p.z + f.r.z * side * off;
      if (excluded(x, z, 1)) continue;
      // face the arm toward the road
      const rot = Math.atan2(-f.r.x * side, -f.r.z * side);
      lampPts.push({ x, z, rot, side, onBridge: inRiver(z, 0) });
    }
  }
  const poleMesh = new THREE.InstancedMesh(poleGeo, new THREE.MeshStandardMaterial({ color: 0x3a3f44, metalness: 0.6, roughness: 0.5 }), lampPts.length);
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff2d0, emissive: 0xffc982, emissiveIntensity: 0 });
  const headMesh = new THREE.InstancedMesh(headGeo, headMat, lampPts.length);
  const poolTex = radialTexture('rgba(255,196,120,0.9)', 'rgba(255,170,90,0)', 128);
  const poolMat = new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const poolMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(8, 8).rotateX(-Math.PI / 2), poolMat, lampPts.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  lampPts.forEach((p, i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), p.rot);
    m4.compose(v.set(p.x, 0.16, p.z), q, one);
    poleMesh.setMatrixAt(i, m4);
    headMesh.setMatrixAt(i, m4);
    const px = p.x + Math.sin(p.rot) * 1.85, pz = p.z + Math.cos(p.rot) * 1.85;
    m4.compose(v.set(px, 0.03, pz), new THREE.Quaternion(), one);
    poolMesh.setMatrixAt(i, m4);
  });
  poleMesh.castShadow = true;
  poolMesh.renderOrder = 2;
  scene.add(poleMesh, headMesh, poolMesh);
  world.lampHead = headMat;
  world.lampPool = poolMat;

  // sagging overhead cables between poles — a very Kolkata sky
  const wire = [];
  const bySide = { '-1': lampPts.filter((p) => p.side === -1 && !p.onBridge), '1': lampPts.filter((p) => p.side === 1 && !p.onBridge) };
  for (const k of ['-1', '1']) {
    const arr = bySide[k];
    for (let i = 0; i < arr.length - 1; i++) {
      const a = new THREE.Vector3(arr[i].x, 6.2, arr[i].z), b = new THREE.Vector3(arr[i + 1].x, 6.2, arr[i + 1].z);
      if (a.distanceTo(b) > 40) continue;
      for (let strand = 0; strand < 3; strand++) {
        const sag = 0.8 + strand * 0.35 + r() * 0.4;
        let prev = a.clone().setY(a.y - strand * 0.25);
        for (let t = 1; t <= 10; t++) {
          const tt = t / 10;
          const p = a.clone().lerp(b, tt);
          p.y = 6.2 - strand * 0.25 - Math.sin(tt * Math.PI) * sag;
          wire.push(prev.x, prev.y, prev.z, p.x, p.y, p.z);
          prev = p;
        }
      }
    }
  }
  const wg = new THREE.BufferGeometry();
  wg.setAttribute('position', new THREE.Float32BufferAttribute(wire, 3));
  scene.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: 0x1a1a1a, transparent: true, opacity: 0.7 })));

  // Trees
  const foliage = (() => {
    const parts = [];
    const rr = rng(5);
    for (let k = 0; k < 6; k++) {
      const s = mergeVertices(new THREE.IcosahedronGeometry(1.0 + rr() * 0.7, 3).deleteAttribute('normal').deleteAttribute('uv'));
      const p = s.attributes.position;
      const ph = rr() * 10;
      for (let i = 0; i < p.count; i++) {
        v.fromBufferAttribute(p, i);
        const n = 1 + 0.12 * Math.sin(v.x * 3.1 + ph) * Math.sin(v.y * 2.7 + ph) * Math.sin(v.z * 3.3);
        v.multiplyScalar(n);
        v.y *= 0.8;
        p.setXYZ(i, v.x, v.y, v.z);
      }
      s.computeVertexNormals();
      s.translate((rr() - 0.5) * 2.2, 3.5 + rr() * 1.6, (rr() - 0.5) * 2.2);
      parts.push(normalizeForMerge(s, ['position', 'normal']));
    }
    return mergeGeometries(parts);
  })();
  const trunkGeo = new THREE.CylinderGeometry(0.14, 0.24, 4, 7).translate(0, 2, 0);
  const treePts = [];
  for (let s = 14; s < route.length; s += 9 + r() * 10) {
    route.frame(s / route.length, f);
    const side = r() < 0.5 ? -1 : 1;
    const off = WALK_OUT - 0.9;
    const x = f.p.x + f.r.x * side * off, z = f.p.z + f.r.z * side * off;
    if (inRiver(z, 8) || excluded(x, z, 9)) continue;
    treePts.push([x, z, 0.8 + r() * 0.6, r() * 6]);
  }
  // park trees in open ground
  for (let i = 0; i < 260; i++) {
    const x = (r() - 0.5) * 500, z = 60 - r() * 900;
    if (inRiver(z, 10) || excluded(x, z, 3) || route.distToRoad(x, z) < 12) continue;
    treePts.push([x, z, 1 + r() * 0.9, r() * 6]);
  }
  const trunks = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0x4a3a2c, roughness: 1 }), treePts.length);
  const leaves = new THREE.InstancedMesh(foliage, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 }), treePts.length);
  const col = new THREE.Color();
  treePts.forEach(([x, z, s, rot], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot);
    m4.compose(v.set(x, 0.1, z), q, new THREE.Vector3(s, s, s));
    trunks.setMatrixAt(i, m4);
    leaves.setMatrixAt(i, m4);
    leaves.setColorAt(i, col.setHSL(0.24 + r() * 0.08, 0.38 + r() * 0.2, 0.2 + r() * 0.1));
  });
  trunks.castShadow = leaves.castShadow = true;
  leaves.receiveShadow = true;
  scene.add(trunks, leaves);

  // Stars & moon
  const starGeo = new THREE.BufferGeometry();
  const sp = [];
  for (let i = 0; i < 1800; i++) {
    const th = r() * Math.PI * 2, ph = Math.acos(r() * 0.92);
    sp.push(Math.sin(ph) * Math.cos(th) * 1400, Math.cos(ph) * 1400, Math.sin(ph) * Math.sin(th) * 1400);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(18, 32, 16),
    new THREE.MeshBasicMaterial({ color: 0xfff6e0, fog: false, transparent: true, opacity: 0 })
  );
  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTexture('rgba(255,240,210,0.55)', 'rgba(255,240,210,0)'), fog: false, transparent: true, opacity: 0, depthWrite: false }));
  moonGlow.scale.set(220, 220, 1);
  scene.add(moon, moonGlow);
  world.sky = { stars, starMat, moon, moonGlow };

  world.setNight = (n) => {
    bMat.emissiveIntensity = n * 1.25;
    headMat.emissiveIntensity = n * 6;
    poolMat.opacity = n * 0.55;
    starMat.opacity = Math.max(0, n - 0.35) * 1.4;
    moon.material.opacity = Math.max(0, n - 0.3);
    moonGlow.material.opacity = Math.max(0, n - 0.3) * 0.8;
  };
  return world;
}

// ---------------------------------------------------------------- bridge
// A cantilever truss in the spirit of Howrah Bridge.
export function buildBridge(scene, route) {
  const g = new THREE.Group();
  const z0 = RIVER.zNear + 6, z1 = RIVER.zFar - 6;
  const L = z0 - z1;
  const halfW = 7.2;
  const topY = (t) => {
    // anchor -> tower -> suspended span -> tower -> anchor
    const k = [[0, 7], [0.22, 30], [0.36, 21], [0.5, 15.5], [0.64, 21], [0.78, 30], [1, 7]];
    for (let i = 0; i < k.length - 1; i++) {
      if (t <= k[i + 1][0]) {
        const f = (t - k[i][0]) / (k[i + 1][0] - k[i][0]);
        return k[i][1] + (k[i + 1][1] - k[i][1]) * f;
      }
    }
    return 7;
  };
  const segs = 26;
  const beams = [];
  const P = (x, y, t) => new THREE.Vector3(x, y, z0 - t * L);
  for (const x of [-halfW, halfW]) {
    for (let i = 0; i < segs; i++) {
      const a = i / segs, b = (i + 1) / segs;
      beams.push([P(x, 0.4, a), P(x, 0.4, b), 0.55]); // bottom chord
      beams.push([P(x, topY(a), a), P(x, topY(b), b), 0.6]); // top chord
      beams.push([P(x, 0.4, a), P(x, topY(a), a), 0.35]); // vertical
      beams.push([P(x, 0.4, a), P(x, topY(b), b), 0.22]); // diagonal
      beams.push([P(x, topY(a), a), P(x, 0.4, b), 0.22]);
    }
    beams.push([P(x, 0.4, 1), P(x, topY(1), 1), 0.35]);
    // tower legs reach down into the river
    for (const t of [0.22, 0.78]) {
      beams.push([P(x, RIVER.level - 1, t), P(x, topY(t) + 2, t), 1.4]);
    }
  }
  // overhead cross-bracing
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, y = topY(t);
    if (y > 9) {
      beams.push([P(-halfW, y, t), P(halfW, y, t), 0.28]);
      if (i < segs) beams.push([P(-halfW, y, t), P(halfW, topY((i + 1) / segs), (i + 1) / segs), 0.16]);
    }
  }
  const steel = new THREE.MeshStandardMaterial({ color: 0x59606a, metalness: 0.75, roughness: 0.45 });
  const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), steel, beams.length);
  const m = new THREE.Matrix4();
  beams.forEach(([a, b, th], i) => inst.setMatrixAt(i, beamMatrix(a, b, th, th, m)));
  inst.castShadow = true;
  inst.receiveShadow = true;
  g.add(inst);
  // deck
  const deck = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2 + 1, 1.4, L + 2), new THREE.MeshStandardMaterial({ color: 0x4a4e54, roughness: 0.8, metalness: 0.3 }));
  deck.position.set(0, -0.72, z0 - L / 2);
  deck.receiveShadow = true;
  g.add(deck);
  // piers
  for (const t of [0.22, 0.78]) {
    const pier = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2 + 6, 4, 7), new THREE.MeshStandardMaterial({ color: 0x7a7468, roughness: 0.95 }));
    pier.position.set(0, RIVER.level + 0.6, z0 - t * L);
    g.add(pier);
  }
  // fairy lights along the top chords
  const lightPts = [];
  for (const x of [-halfW, halfW]) for (let i = 0; i <= 120; i++) { const t = i / 120; lightPts.push(P(x, topY(t) + 0.45, t)); }
  for (const x of [-halfW - 0.4, halfW + 0.4]) for (let i = 0; i <= 60; i++) { const t = i / 60; lightPts.push(P(x, 0.9, t)); }
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffe6b0, emissive: 0xffc46b, emissiveIntensity: 0 });
  const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.16, 8, 6), bulbMat, lightPts.length);
  lightPts.forEach((p, i) => { m.makeTranslation(p.x, p.y, p.z); bulbs.setMatrixAt(i, m); });
  g.add(bulbs);
  // reflection shimmer on water
  const refl = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 140),
    new THREE.MeshBasicMaterial({ map: radialTexture('rgba(255,190,110,0.6)', 'rgba(255,170,90,0)'), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  refl.rotation.x = -Math.PI / 2;
  refl.position.set(0, RIVER.level + 0.05, z0 - L / 2);
  g.add(refl);
  scene.add(g);
  return {
    group: g,
    setNight(n) {
      bulbMat.emissiveIntensity = 0.1 + n * 3.2;
      refl.material.opacity = n * 0.8;
    },
  };
}
