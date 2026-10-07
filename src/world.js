import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { rng, canvas, tex, radialTexture, beamMatrix, paintVertexColor, normalizeForMerge, addGroundGrime } from './util.js';
import { TEX, pbr } from './materials.js';
import { FacadeKit, metricUV, GROUND_FLOOR, FLOOR } from './facades.js';
import { planStreets, tryKitBuilding } from './streets.js';
import { instanceAll, animateTrees } from './kit.js';
import { chunkMesh, chunkedInstances } from './perf.js';

const UP = new THREE.Vector3(0, 1, 0);
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
    out.r = (out.r || new THREE.Vector3()).crossVectors(out.t, UP).normalize();
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
// gaps: [[s0, s1], ...] stretches of centre-line distance to leave open (side-street mouths)
function ribbon(route, from, to, y, uvScale = 12, step = 1, gaps = []) {
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
    if (gaps.some(([g0, g1]) => dist > g0 && dist < g1)) { row = 0; continue; }
    const a = f.p.clone().addScaledVector(f.r, from);
    const b = f.p.clone().addScaledVector(f.r, to);
    pos.push(a.x, y, a.z, b.x, y, b.z);
    uv.push(0, dist / uvScale, 1, dist / uvScale);
    if (row > 0) {
      const k = pos.length / 3 - 2;
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

function curbFace(route, off, h, step = 2, gaps = []) {
  const pos = [], idx = [], uvs = [];
  let distC = 0, prevC = null, dist = 0, prevP = null;
  const N = route.samples.length - 1;
  const f = {};
  let row = 0;
  for (let i = 0; i <= N; i += step) {
    route.frame(i / N, f);
    const a = f.p.clone().addScaledVector(f.r, off);
    if (prevC) distC += prevC.distanceTo(a);
    prevC = a;
    if (prevP) dist += prevP.distanceTo(f.p);
    prevP = f.p.clone();
    if (gaps.some(([g0, g1]) => dist > g0 && dist < g1)) { row = 0; continue; }
    pos.push(a.x, 0, a.z, a.x, h, a.z);
    uvs.push(distC / 2, 0, distC / 2, 1);
    if (row > 0) {
      const k = pos.length / 3 - 2;
      idx.push(k - 2, k, k - 1, k - 1, k, k + 1);
    }
    row++;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
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
export function buildWorld(scene, route, exclusions, quality, assets = null) {
  const r = rng(42);
  const world = { nightMats: [], update: [] };
  const N = route.samples.length - 1;

  // Ground (split around the river)
  const makeGround = (zFrom, zTo) => {
    const len = Math.abs(zTo - zFrom);
    const mat = pbr('ground', { repeat: [3600 / 10, len / 10] });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(3600, len), mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(0, -0.02, (zFrom + zTo) / 2);
    m.receiveShadow = true;
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
  let water;
  if (quality.tier === 0) {
    water = new THREE.Mesh(
      new THREE.PlaneGeometry(3600, RIVER.zNear - RIVER.zFar + 10),
      new THREE.MeshPhysicalMaterial({
        color: 0x1d3640, roughness: 0.06, metalness: 0.1, normalMap: waterNormal,
        normalScale: new THREE.Vector2(0.35, 0.35), clearcoat: 1, clearcoatRoughness: 0.1,
      })
    );
    world.update.push((t) => { waterNormal.offset.set(t * 0.004, t * 0.011); });
  } else {
    waterNormal.repeat.set(1, 1);
    water = new Water(new THREE.PlaneGeometry(3600, RIVER.zNear - RIVER.zFar + 10), {
      textureWidth: quality.tier === 2 ? 512 : 256, textureHeight: quality.tier === 2 ? 512 : 256, waterNormals: waterNormal,
      sunDirection: new THREE.Vector3(0.3, 0.6, -0.7).normalize(), sunColor: 0xffe2b0,
      waterColor: 0x0d2730, distortionScale: 1.6, fog: true, alpha: 1,
    });
    water.material.uniforms.size.value = 6;
    // the stock shader adds a flat 10% grey to every reflection and lights the surface with a
    // fixed sun, which turns the river milky beige at dusk and night; tint it by the sky instead
    water.material.fragmentShader = water.material.fragmentShader.replace(
      '( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight )',
      '( waterColor * 0.5 + reflectionSample * 0.94 + specularLight * 0.6 )'
    ).replace('sunColor * diffuseLight * 0.3', 'diffuseLight * waterColor * 0.6');
    world.water = water;
    // the reflection re-renders the scene: skip it when the governor says so, or when far away
    const reflect = water.onBeforeRender.bind(water);
    let tick = 0;
    water.onBeforeRender = (...a) => {
      // half-rate reflection: the river moves slowly, nobody can tell
      if (world.reflections !== false && (tick++ & 1) === 0) reflect(...a);
    };
    world.update.push((t, camera) => {
      water.material.uniforms.time.value = t * 0.35;
      // only pay for the reflection render near the river
      water.visible = !camera || camera.position.z < -380;
    });
  }
  // River body colour: a deep green-teal, lit by whatever the sky is doing right now.
  const riverBody = new THREE.Color('#1f5a5e');
  world.lightWater = (dir, sunColor, sunIntensity, skyColor, skyIntensity, night) => {
    if (water.isWater) {
      const u = water.material.uniforms;
      u.sunDirection.value.copy(dir);
      u.sunColor.value.copy(sunColor).multiplyScalar((sunIntensity / 3) * (1 - night * 0.7));
      u.waterColor.value.copy(riverBody).multiply(skyColor).multiplyScalar(0.25 + skyIntensity * 0.35);
    } else {
      water.material.color.copy(riverBody).multiplyScalar(THREE.MathUtils.lerp(0.75, 0.22, night));
    }
  };
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, RIVER.level, (RIVER.zNear + RIVER.zFar) / 2);
  scene.add(water);
  const bankMat = pbr('concrete', { repeat: [900, 1.2], color: 0x9c968a });
  for (const z of [RIVER.zNear, RIVER.zFar]) {
    const bank = new THREE.Mesh(new THREE.BoxGeometry(3600, 4.5, 2), bankMat);
    bank.position.set(0, -2.2, z + (z === RIVER.zNear ? -1 : 1));
    bank.receiveShadow = true;
    scene.add(bank);
  }

  // Side streets, signals, signs and shelters from the road kit
  const streets = assets
    ? planStreets({ route, kit: assets, exclusions, rng: rng(91), ROAD_HALF, WALK_OUT, RIVER })
    : { gaps: { '-1': [], '1': [] }, lampHeads: [] };
  world.streets = streets;

  // Road & sidewalks
  const roadMat = pbr('asphalt', { side: THREE.DoubleSide, normalScale: 1.2, envMapIntensity: 1.1 });
  const road = new THREE.Mesh(ribbon(route, -ROAD_HALF, ROAD_HALF, 0.0, 9, 1), roadMat);
  road.receiveShadow = true;
  scene.add(road);
  chunkMesh(road, { chunk: 140, cull: 520 }).forEach((m) => m.layers.set(1));
  world.road = roadMat;
  const walkMat = addGroundGrime(pbr('pavers', { side: THREE.DoubleSide }), { height: 0.4, strength: 0 });
  for (const [a, b, sd] of [[ROAD_HALF, WALK_OUT, 1], [-WALK_OUT, -ROAD_HALF, -1]]) {
    const g = ribbon(route, a, b, 0.16, 2.4, 1, streets.gaps[sd]);
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * ((WALK_OUT - ROAD_HALF) / 2.4));
    const m = new THREE.Mesh(g, walkMat);
    m.receiveShadow = true;
    scene.add(m);
    chunkMesh(m, { chunk: 140, cull: 420 }).forEach((c) => c.layers.set(1));
  }
  const curbPaint = new THREE.MeshStandardMaterial({ map: TEX.curb_col, roughness: 0.8, side: THREE.DoubleSide });
  const curbPlain = pbr('concrete', { repeat: [1, 0.05], side: THREE.DoubleSide });
  for (const off of [ROAD_HALF, -ROAD_HALF]) {
    const m = new THREE.Mesh(curbFace(route, off, 0.16, 1, streets.gaps[Math.sign(off)]), curbPaint);
    m.receiveShadow = true;
    scene.add(m);
    chunkMesh(m, { chunk: 140, cull: 300 }).forEach((c) => c.layers.set(1));
  }
  for (const off of [WALK_OUT, -WALK_OUT]) {
    const m = new THREE.Mesh(curbFace(route, off, 0.16, 2, streets.gaps[Math.sign(off)]), curbPlain);
    scene.add(m);
    chunkMesh(m, { chunk: 140, cull: 300 }).forEach((c) => c.layers.set(1));
  }

  const inRiver = (z, pad = 6) => z < RIVER.zNear + pad && z > RIVER.zFar - pad;
  const excluded = (x, z, rad) => exclusions.some((e) => Math.hypot(e.x - x, e.z - z) < e.r + rad);

  // Buildings
  const facade = facadeTextures();
  const bGeos = [], roofGeos = [], awnGeos = [], frontGeos = [];
  const kit = new FacadeKit(rng(77), { lite: quality.isMobile });
  const tryBuilding = (x, z, w, d, h, rot, minRoad = WALK_OUT + 0.6, front = 0, floors = 0) => {
    const rad = Math.hypot(w, d) / 2;
    if (inRiver(z, rad + 4) || excluded(x, z, rad)) return false;
    // corners must stay clear of the road
    const c = Math.cos(rot), s = Math.sin(rot);
    for (const [cx, cz] of [[-w / 2, -d / 2], [w / 2, -d / 2], [-w / 2, d / 2], [w / 2, d / 2], [0, 0]]) {
      const px = x + cx * c + cz * s, pz = z - cx * s + cz * c;
      if (route.distToRoad(px, pz) < minRoad) return false;
    }
    const tint = PALETTE[Math.floor(r() * PALETTE.length)];
    if (front) {
      const g = metricUV(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0));
      paintVertexColor(g, tint);
      g.rotateY(rot);
      g.translate(x, 0, z);
      frontGeos.push(normalizeForMerge(g));
      kit.addBuilding({ x, z, rot, side: front, perp: w, along: d, floors, tint });
    } else {
      const g = buildingGeometry(w, h, d, r);
      paintVertexColor(g, tint);
      g.rotateY(rot);
      g.translate(x, 0, z);
      bGeos.push(normalizeForMerge(g));
    }
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
    const kitBlocks = assets ? assets.buildings.filter((b) => b.kind === 'block' || b.name !== 'soho-block') : [];
    let sohoBlocks = 0;
    while (s < L + 30) {
      if (kitBlocks.length && r() < 0.9) {
        // a real (photo-textured) building, front on the footpath; on bends try narrower ones
        const tries = [];
        if (sohoBlocks < 2 && r() < 0.18) tries.push(assets.buildings.find((b) => b.name === 'soho-block'));
        tries.push(kitBlocks[Math.floor(r() * kitBlocks.length)]);
        tries.push(...kitBlocks.slice().sort((a, b) => a.size.x - b.size.x).slice(0, 4).sort(() => r() - 0.5));
        let placed = null;
        for (const pf of tries) {
          placed = tryKitBuilding({ pf, route, s, side, WALK_OUT, excluded, inRiver });
          if (placed) { if (pf.name === 'soho-block') sohoBlocks++; break; }
        }
        if (placed) {
          exclusions.push({ x: placed.centre.x, z: placed.centre.z, r: Math.min(placed.w, placed.depth) * 0.5 });
          s += placed.w + 0.15 + r() * 0.6;
          continue;
        }
      }
      const w = 8 + r() * 8;
      const u = Math.min(1, s / L);
      route.frame(u, f);
      const d = 9 + r() * 7;
      const tall = r();
      const floors = tall < 0.06 ? 8 + Math.floor(r() * 5) : 2 + Math.floor(r() * 3.2);
      const h = GROUND_FLOOR + floors * FLOOR + 0.3;
      const off = WALK_OUT + 1.2 + d / 2 + r() * 1.5;
      const x = f.p.x + f.r.x * side * off;
      const z = f.p.z + f.r.z * side * off;
      const rot = Math.atan2(f.t.x, f.t.z);
      // local z runs along the road, local x faces it
      tryBuilding(x, z, d, w, h, rot, WALK_OUT + 0.6, side, floors);
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
      if (assets && r() < 0.45) {
        const pf = assets.buildings[Math.floor(r() * assets.buildings.length)];
        const rad = Math.hypot(pf.size.x, pf.size.z) / 2;
        if (!inRiver(z, rad + 4) && !excluded(x, z, rad * 0.9) && route.distToRoad(x, z) > 20 + rad * 0.5) {
          const front = new THREE.Vector3(x, 0, z).addScaledVector(f.r, -side * pf.size.z / 2);
          pf.place(front, Math.atan2(-f.r.x * side, -f.r.z * side));
          exclusions.push({ x, z, r: rad * 0.7 });
          s += pf.size.x + 6 + r() * 10;
          continue;
        }
      }
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
  const plaster = addGroundGrime(pbr('plaster', { vertexColors: true, normalScale: 1.4 }), { height: 3.2, strength: 0.38 });
  const fronts = new THREE.Mesh(mergeGeometries([...frontGeos, ...kit.wallGeos]), plaster);
  fronts.castShadow = true;
  fronts.receiveShadow = true;
  scene.add(fronts);
  chunkMesh(fronts, { chunk: 140, cull: 600 }).forEach((m) => m.layers.set(1));
  const facades = kit.build(scene);
  const buildings = new THREE.Mesh(mergeGeometries(bGeos), bMat);
  buildings.castShadow = true;
  buildings.receiveShadow = true;
  scene.add(buildings);
  chunkMesh(buildings, { chunk: 140, cull: 660 });
  const roofs = new THREE.Mesh(mergeGeometries(roofGeos), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }));
  roofs.castShadow = true;
  roofs.receiveShadow = true;
  scene.add(roofs);
  chunkMesh(roofs, { chunk: 140, cull: 320 }).forEach((m) => m.layers.set(1));
  if (awnGeos.length) {
    const aw = new THREE.Mesh(mergeGeometries(awnGeos), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, side: THREE.DoubleSide }));
    aw.castShadow = true;
    scene.add(aw);
    chunkMesh(aw, { chunk: 140, cull: 200 }).forEach((m) => m.layers.set(1));
  }
  world.windows = bMat;

  // Street lamps + light pools + overhead wires
  const poleGeo = mergeGeometries([
    normalizeForMerge(new THREE.CylinderGeometry(0.07, 0.11, 7, 10).translate(0, 3.5, 0), ['position', 'normal', 'uv']),
    normalizeForMerge(new THREE.BoxGeometry(0.07, 0.07, 1.8).translate(0, 6.95, 0.9), ['position', 'normal', 'uv']),
    normalizeForMerge(new THREE.BoxGeometry(0.3, 0.12, 0.6).translate(0, 6.9, 1.85), ['position', 'normal', 'uv']),
  ]);
  const headGeo = new THREE.BoxGeometry(0.26, 0.04, 0.5).translate(0, 6.83, 1.85);
  const lampPts = [];
  const wireY = assets?.props.lamp ? 7.2 : 6.2;
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
  const kitLamp = assets?.props.lamp;
  const heads = []; // { pos, yaw }
  if (kitLamp) {
    for (const p of lampPts) {
      const m = kitLamp.place(new THREE.Vector3(p.x, 0.16, p.z), p.rot);
      for (const t of kitLamp.tips) heads.push({ pos: t.clone().applyMatrix4(m), yaw: p.rot });
    }
    for (const pos of streets.lampHeads) heads.push({ pos, yaw: 0 });
  }
  const poleMesh = new THREE.InstancedMesh(poleGeo, pbr('steel', { color: 0x4a5056, repeat: [0.5, 2] }), kitLamp ? 0 : lampPts.length);
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff2d0, emissive: 0xffc982, emissiveIntensity: 0 });
  const nHeads = kitLamp ? heads.length : lampPts.length;
  const headMesh = new THREE.InstancedMesh(kitLamp ? new THREE.BoxGeometry(0.34, 0.05, 0.6) : headGeo, headMat, nHeads);
  const poolTex = radialTexture('rgba(255,196,120,0.9)', 'rgba(255,170,90,0)', 128);
  const poolMat = new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const poolMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(8, 8).rotateX(-Math.PI / 2), poolMat, nHeads);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  if (kitLamp) {
    heads.forEach(({ pos, yaw }, i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
      m4.compose(v.copy(pos).setY(pos.y - 0.12), q, one);
      headMesh.setMatrixAt(i, m4);
      m4.compose(v.set(pos.x, 0.03, pos.z), new THREE.Quaternion(), one);
      poolMesh.setMatrixAt(i, m4);
    });
  } else lampPts.forEach((p, i) => {
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
      const a = new THREE.Vector3(arr[i].x, wireY, arr[i].z), b = new THREE.Vector3(arr[i + 1].x, wireY, arr[i + 1].z);
      if (a.distanceTo(b) > 40) continue;
      if (exclusions.some((e) => e.r > 5 && Math.hypot(e.x - (a.x + b.x) / 2, e.z - (a.z + b.z) / 2) < e.r)) continue;
      for (let strand = 0; strand < 3; strand++) {
        const sag = 0.8 + strand * 0.35 + r() * 0.4;
        let prev = a.clone().setY(a.y - strand * 0.25);
        for (let t = 1; t <= 10; t++) {
          const tt = t / 10;
          const p = a.clone().lerp(b, tt);
          p.y = wireY - strand * 0.25 - Math.sin(tt * Math.PI) * sag;
          wire.push(prev.x, prev.y, prev.z, p.x, p.y, p.z);
          prev = p;
        }
      }
    }
  }
  const wg = new THREE.BufferGeometry();
  wg.setAttribute('position', new THREE.Float32BufferAttribute(wire, 3));
  scene.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: 0x1a1a1a, transparent: true, opacity: 0.7 })));

  // Trees: branching trunks with alpha-cut leaf cards (rain trees & neem)
  const tr = rng(5);
  const variants = [0, 1, 2].map(() => {
    const wood = [], cards = [];
    const up = new THREE.Vector3(0, 1, 0);
    const limb = (a, b, r0, r1) => {
      const len = a.distanceTo(b);
      const g = new THREE.CylinderGeometry(r1, r0, len, 9, 3, true);
      g.translate(0, len / 2, 0);
      const uv = g.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 2, uv.getY(i) * len);
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(up, b.clone().sub(a).normalize()));
      g.translate(a.x, a.y, a.z);
      wood.push(normalizeForMerge(g, ['position', 'normal', 'uv']));
    };
    const trunkTop = new THREE.Vector3((tr() - 0.5) * 0.6, 3.2 + tr() * 1.2, (tr() - 0.5) * 0.6);
    limb(new THREE.Vector3(0, -0.2, 0), trunkTop, 0.32, 0.22);
    const canopyC = new THREE.Vector3(0, 6.4, 0);
    const tips = [];
    const nb = 5 + Math.floor(tr() * 3);
    for (let b = 0; b < nb; b++) {
      const ang = (b / nb) * Math.PI * 2 + tr() * 0.6;
      const reach = 2.2 + tr() * 1.8;
      const mid = trunkTop.clone().add(new THREE.Vector3(Math.cos(ang) * reach * 0.5, 1.2 + tr() * 0.8, Math.sin(ang) * reach * 0.5));
      const end = trunkTop.clone().add(new THREE.Vector3(Math.cos(ang) * reach, 2.4 + tr() * 1.6, Math.sin(ang) * reach));
      limb(trunkTop, mid, 0.16, 0.11);
      limb(mid, end, 0.11, 0.05);
      tips.push(end, mid.clone().lerp(end, 0.5));
    }
    tips.push(trunkTop.clone().add(new THREE.Vector3(0, 3.2, 0)));
    // leaf cards around each tip; normals point away from the canopy centre so it shades like a volume
    for (const tip of tips) {
      for (let k = 0; k < 9; k++) {
        const size = 1.5 + tr() * 1.1;
        const g = new THREE.PlaneGeometry(size, size);
        g.rotateX(-Math.PI / 2 + (tr() - 0.5) * 1.6);
        g.rotateY(tr() * Math.PI * 2);
        const off = new THREE.Vector3((tr() - 0.5) * 1.8, (tr() - 0.3) * 1.2, (tr() - 0.5) * 1.8);
        g.translate(tip.x + off.x, tip.y + off.y, tip.z + off.z);
        const p = g.attributes.position, n = g.attributes.normal;
        for (let i = 0; i < p.count; i++) {
          const d = new THREE.Vector3(p.getX(i), p.getY(i), p.getZ(i)).sub(canopyC);
          d.y *= 1.6;
          d.normalize();
          n.setXYZ(i, d.x, d.y, d.z);
        }
        cards.push(normalizeForMerge(g, ['position', 'normal', 'uv']));
      }
    }
    return { wood: mergeGeometries(wood), leaves: mergeGeometries(cards) };
  });
  const treePts = [];
  for (let s = 14; s < route.length; s += 9 + r() * 10) {
    route.frame(s / route.length, f);
    const side = r() < 0.5 ? -1 : 1;
    const off = WALK_OUT - 0.9;
    const x = f.p.x + f.r.x * side * off, z = f.p.z + f.r.z * side * off;
    // keep clear of landmarks, side streets, shelters and signals (big exclusions), not of the buildings behind
    if (inRiver(z, 8) || exclusions.some((e) => (e.r > 9 || e.r < 4.5) && Math.hypot(e.x - x, e.z - z) < e.r + 2.5)) continue;
    treePts.push([x, z, 0.7 + r() * 0.35, r() * 6, true]);
  }
  // park trees in open ground
  const parkTrees = assets ? (quality.isMobile ? 50 : 150) : 260;
  for (let i = 0; i < parkTrees; i++) {
    const x = (r() - 0.5) * 500, z = 60 - r() * 900;
    if (inRiver(z, 10) || excluded(x, z, 3) || route.distToRoad(x, z) < 12) continue;
    treePts.push([x, z, 0.9 + r() * 0.6, r() * 6]);
  }
  const barkMat = pbr('bark', { normalScale: 1.5 });
  const leafMat = new THREE.MeshStandardMaterial({
    map: TEX.leaves_col, normalMap: TEX.leaves_nor, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.78, color: 0xffffff,
  });
  leafMat.map.wrapS = leafMat.map.wrapT = THREE.ClampToEdgeWrapping;
  const leafDepth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: TEX.leaves_col, alphaTest: 0.45 });
  const col = new THREE.Color();
  if (assets?.trees.length) {
    // wind-animated trees from the kit (three species, morph-target sway)
    const kinds = assets.trees;
    // the broad rain tree goes in open ground; the narrower two line the footpaths
    treePts.forEach(([x, z, sc, rot, street], i) => {
      if (street) kinds[1 + (i % 2)].place(new THREE.Vector3(x, 0.1, z), rot, 0.62 + sc * 0.18);
      else kinds[i % kinds.length].place(new THREE.Vector3(x, 0.1, z), rot, 0.8 + sc * 0.3);
    });
  } else variants.forEach((vt, vi) => {
    const pts = treePts.filter((_, i) => i % 3 === vi);
    if (!pts.length) return;
    const trunks = new THREE.InstancedMesh(vt.wood, barkMat, pts.length);
    const leaves = new THREE.InstancedMesh(vt.leaves, leafMat, pts.length);
    leaves.customDepthMaterial = leafDepth;
    pts.forEach(([x, z, s, rot], i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot);
      m4.compose(v.set(x, 0.1, z), q, new THREE.Vector3(s, s, s));
      trunks.setMatrixAt(i, m4);
      leaves.setMatrixAt(i, m4);
      leaves.setColorAt(i, col.setHSL(0.22 + r() * 0.06, 0.45 + r() * 0.2, 0.62 + r() * 0.18));
    });
    trunks.castShadow = leaves.castShadow = true;
    trunks.receiveShadow = leaves.receiveShadow = true;
    scene.add(trunks, leaves);
  });

  // Stars & moon
  const starGeo = new THREE.BufferGeometry();
  const sp = [];
  for (let i = 0; i < 1800; i++) {
    const th = r() * Math.PI * 2, ph = Math.acos(r() * 0.92);
    sp.push(Math.sin(ph) * Math.cos(th) * 640, Math.cos(ph) * 640, Math.sin(ph) * Math.sin(th) * 640);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(8.5, 32, 16),
    new THREE.MeshBasicMaterial({ color: 0xfff6e0, fog: false, transparent: true, opacity: 0 })
  );
  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTexture('rgba(255,240,210,0.55)', 'rgba(255,240,210,0)'), fog: false, transparent: true, opacity: 0, depthWrite: false }));
  moonGlow.scale.set(108, 108, 1);
  scene.add(moon, moonGlow);
  // Clouds (CC0 cloud billboard from pmndrs/assets), tinted by the time of day
  const cloudTex = new THREE.TextureLoader().load('assets/tex/cloud.webp');
  cloudTex.colorSpace = THREE.SRGBColorSpace;
  const clouds = new THREE.Group();
  const cloudMats = [];
  for (let i = 0; i < 18; i++) {
    const m = new THREE.SpriteMaterial({ map: cloudTex, transparent: true, depthWrite: false, fog: false, opacity: 0.55 + r() * 0.35, rotation: r() * 6.28 });
    m.userData.base = m.opacity;
    cloudMats.push(m);
    const sp = new THREE.Sprite(m);
    const a = r() * Math.PI * 2, d = 430 + r() * 200;
    sp.position.set(Math.cos(a) * d, 85 + r() * 130, Math.sin(a) * d);
    const sc = 160 + r() * 220;
    sp.scale.set(sc * (1.4 + r()), sc, 1);
    sp.userData.base = m.opacity;
    clouds.add(sp);
  }
  clouds.renderOrder = -1;
  scene.add(clouds);
  world.clouds = clouds;
  world.tintClouds = (color, k) => cloudMats.forEach((m) => { m.color.copy(color); m.opacity = m.userData.base * k; });
  world.sky = { stars, starMat, moon, moonGlow };

  if (assets) {
    // layer 1: drawn by the main camera, skipped by the river's reflection pass
    instanceAll(scene, assets.buildings, { chunk: 140, cull: 640, layer: 1 });
    instanceAll(scene, Object.values(assets.roads), { cull: 460, layer: 1 });
    instanceAll(scene, Object.values(assets.props), { chunk: 140, cull: 300, layer: 1 });
    instanceAll(scene, assets.trees, { chunk: 140, cull: 300, layer: 1 });
    const wind = animateTrees(assets.trees);
    world.update.push((t, camera) => wind(t, camera));
  }

  world.setNight = (n) => {
    if (assets) {
      for (const m of assets.nightMats) m.emissiveIntensity = m.userData.night === 'windows' ? n * 1.8 : n * 0.55;
      if (assets.poster) assets.poster.emissiveIntensity = 0.25 + n * 0.9;
    }
    bMat.emissiveIntensity = n * 1.25;
    facades.setNight(n);
    headMat.emissiveIntensity = n * 6;
    poolMat.opacity = n * 0.55;
    poolMesh.visible = n > 0.01;
    stars.visible = n > 0.35;
    moon.visible = moonGlow.visible = n > 0.3;
    starMat.opacity = Math.max(0, n - 0.35) * 1.4;
    moon.material.opacity = Math.max(0, n - 0.3);
    moonGlow.material.opacity = Math.max(0, n - 0.3) * 0.8;
  };
  return world;
}

// ---------------------------------------------------------------- bridge
// A cantilever truss in the spirit of Howrah Bridge.
export function buildBridge(scene, route, { shimmer = true } = {}) {
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
  const steel = pbr('steel', { color: 0x6a727c, repeat: [1, 3], normalScale: 1.5 });
  const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), steel, beams.length);
  const m = new THREE.Matrix4();
  beams.forEach(([a, b, th], i) => inst.setMatrixAt(i, beamMatrix(a, b, th, th, m)));
  inst.castShadow = true;
  inst.receiveShadow = true;
  g.add(inst);
  // deck
  const deck = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2 + 1, 1.4, L + 2), pbr('steel', { color: 0x50565c, repeat: [2, 20] }));
  deck.position.set(0, -0.72, z0 - L / 2);
  deck.receiveShadow = true;
  g.add(deck);
  // piers
  for (const t of [0.22, 0.78]) {
    const pier = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2 + 6, 4, 7), pbr('concrete', { repeat: [5, 1] }));
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
      // a painted glow stands in for the lamps' reflection where the river has no mirror
      refl.material.opacity = n * 0.8;
      refl.visible = shimmer && n > 0.01;
    },
  };
}
