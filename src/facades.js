import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { canvas, tex, normalizeForMerge, paintVertexColor, addGroundGrime } from './util.js';
import { TEX, pbr } from './materials.js';
import { chunkedInstances, chunkMesh } from './perf.js';

// Street-facing facade detail for the first row of buildings: real 3D window
// frames, glass that reflects the sky, louvred shutters, wrought-iron balconies
// with laundry, AC units, drain pipes, shopfronts and hand-painted signboards.

export const GROUND_FLOOR = 4.2;
export const FLOOR = 3.2;

const SIGNS = [
  ['MAA TARA SWEETS', 'মিষ্টান্ন ভাণ্ডার', '#b3261e', '#ffe7a8'],
  ['SHARMA STORES', 'GROCERY · DAILY NEEDS', '#1f4e8c', '#ffffff'],
  ['XEROX · STD · ISD', 'LAMINATION · PRINTOUT', '#f2c200', '#1a1a1a'],
  ['NEW MEDICAL HALL', 'ঔষধালয় · 24 HRS', '#0f7a4f', '#ffffff'],
  ['CHA & TOAST', 'চা · টোস্ট · ঘুগনি', '#6b2f1a', '#ffd9a0'],
  ['MOBILE REPAIR', 'ALL BRANDS · RECHARGE', '#202020', '#3fe0ff'],
  ['LAXMI JEWELLERS', 'HALLMARK GOLD · SINCE 1972', '#7a1630', '#f6d27a'],
  ['BOOK DEPOT', 'বই · STATIONERY', '#2c5530', '#f3eedb'],
  ['HOTEL BIRIYANI', 'MUTTON · CHICKEN · AC', '#d8432f', '#ffffff'],
  ['PHOTO STUDIO', 'PASSPORT PHOTO IN 5 MIN', '#3b2a68', '#ffffff'],
  ['GUPTA HARDWARE', 'PAINTS · SANITARY · TOOLS', '#e86a10', '#1a1a1a'],
  ['FRESH JUICE CORNER', 'MOSAMBI · ANAR · SUGARCANE', '#2f8f2f', '#fff9c4'],
  ['CYBER CAFE', 'INTERNET · FORMS · TICKETS', '#0b3d91', '#9be7ff'],
  ['DAS TAILORS', 'LADIES & GENTS · ALTERATION', '#7b5b3a', '#fff3dc'],
  ['RATION SHOP', 'FAIR PRICE · NO. 14/B', '#55606b', '#ffffff'],
  ['SEN ELECTRICALS', 'FANS · WIRING · INVERTER', '#ffd400', '#0d2a6b'],
];

function signAtlas() {
  // 2 columns x 8 rows of 1024x128 boards
  return tex(
    canvas(2048, 1024, (c) => {
      SIGNS.forEach(([title, sub, bg, fg], i) => {
        const x = (i % 2) * 1024, y = Math.floor(i / 2) * 128;
        const g = c.createLinearGradient(0, y, 0, y + 128);
        g.addColorStop(0, bg);
        g.addColorStop(1, shade(bg, -0.25));
        c.fillStyle = g;
        c.fillRect(x, y, 1024, 128);
        c.strokeStyle = shade(bg, -0.45);
        c.lineWidth = 6;
        c.strokeRect(x + 3, y + 3, 1018, 122);
        c.fillStyle = fg;
        c.textBaseline = 'middle';
        c.font = '800 66px "Manrope", "Hind Siliguri", sans-serif';
        c.fillText(title, x + 34, y + 54);
        c.font = '600 26px "Hind Siliguri", "Manrope", sans-serif';
        c.globalAlpha = 0.85;
        c.fillText(sub, x + 38, y + 104);
        c.globalAlpha = 1;
        // weathering: sun-fade, rain streaks, grime at the bottom edge
        for (let k = 0; k < 120; k++) {
          c.fillStyle = `rgba(0,0,0,${Math.random() * 0.08})`;
          c.fillRect(x + Math.random() * 1024, y + Math.random() * 60, 2 + Math.random() * 3, 30 + Math.random() * 70);
        }
        const gg = c.createLinearGradient(0, y + 90, 0, y + 128);
        gg.addColorStop(0, 'rgba(30,20,10,0)');
        gg.addColorStop(1, 'rgba(30,20,10,0.35)');
        c.fillStyle = gg;
        c.fillRect(x, y + 90, 1024, 38);
      });
    })
  );
}
function shade(hex, k) {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, 0, k * 0.5);
  return '#' + c.getHexString();
}

function curtainTexture() {
  return tex(
    canvas(256, 256, (c, w, h) => {
      const g = c.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, '#ffe2b0');
      g.addColorStop(1, '#f2a75c');
      c.fillStyle = g;
      c.fillRect(0, 0, w, h);
      // fabric folds
      for (let x = 0; x < w; x += 2) {
        const v = Math.sin(x * 0.19) * 0.5 + Math.sin(x * 0.07 + 1) * 0.5;
        c.fillStyle = `rgba(120,60,20,${0.08 + v * 0.08})`;
        c.fillRect(x, 0, 2, h);
      }
      // a curtain pulled aside reveals a ceiling fan & tube-light glow
      c.fillStyle = 'rgba(255,255,240,0.55)';
      c.fillRect(w * 0.55, h * 0.08, w * 0.35, 6);
      c.fillStyle = 'rgba(60,40,30,0.5)';
      c.fillRect(w * 0.5, h * 0.3, w * 0.5, h * 0.7);
    })
  );
}

function shopTexture() {
  return tex(
    canvas(512, 256, (c, w, h) => {
      const bg = c.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#fff3d6');
      bg.addColorStop(1, '#c79a62');
      c.fillStyle = bg;
      c.fillRect(0, 0, w, h);
      const pal = ['#a8483c', '#c9a43a', '#3e6690', '#4a7a58', '#e8e2d4', '#c07a3a', '#6a5080', '#d9d0bf', '#8a8478'];
      for (let row = 0; row < 4; row++) {
        const y = 18 + row * 52;
        c.fillStyle = '#6b4a2a';
        c.fillRect(0, y + 40, w, 5);
        let x = 4;
        while (x < w - 8) {
          const bw = 8 + Math.random() * 18, bh = 16 + Math.random() * 22;
          c.fillStyle = pal[Math.floor(Math.random() * pal.length)];
          c.fillRect(x, y + 40 - bh, bw, bh);
          c.fillStyle = 'rgba(0,0,0,0.15)';
          c.fillRect(x + bw - 2, y + 40 - bh, 2, bh);
          x += bw + 1.5;
        }
      }
      // falloff toward the edges & floor, like a real tube-lit shop
      const v = c.createRadialGradient(w / 2, h * 0.3, h * 0.2, w / 2, h * 0.4, w * 0.6);
      v.addColorStop(0, 'rgba(0,0,0,0)');
      v.addColorStop(1, 'rgba(20,12,4,0.55)');
      c.fillStyle = v;
      c.fillRect(0, 0, w, h);
      // counter
      c.fillStyle = '#4a3020';
      c.fillRect(0, h - 40, w, 40);
      c.fillStyle = 'rgba(255,255,255,0.08)';
      c.fillRect(0, h - 40, w, 3);
    })
  );
}

function acTexture() {
  return tex(
    canvas(128, 96, (c, w, h) => {
      c.fillStyle = '#e9e7e0';
      c.fillRect(0, 0, w, h);
      c.fillStyle = '#3a3a3a';
      c.beginPath();
      c.arc(w * 0.62, h / 2, h * 0.36, 0, 7);
      c.fill();
      c.strokeStyle = '#9a9a9a';
      for (let i = 0; i < 6; i++) { c.beginPath(); c.arc(w * 0.62, h / 2, h * 0.06 * i, 0, 7); c.stroke(); }
      c.fillStyle = 'rgba(120,90,60,0.35)';
      c.fillRect(0, h - 10, w, 10);
    })
  );
}

const box = (w, h, d, x = 0, y = 0, z = 0) => normalizeForMerge(new THREE.BoxGeometry(w, h, d).translate(x, y, z), ['position', 'normal', 'uv']);

let _assets = null;
export function kitAssets() {
  if (_assets) return _assets;
  const geo = {
    frame: mergeGeometries([
      box(0.14, 0.16, 1.62, 0.07, 1.0, 0),
      box(0.26, 0.07, 1.72, 0.13, -0.95, 0),
      box(0.1, 1.9, 0.1, 0.05, 0, -0.71),
      box(0.1, 1.9, 0.1, 0.05, 0, 0.71),
      box(0.05, 1.8, 0.05, 0.04, 0, 0),
      box(0.05, 0.05, 1.32, 0.04, 0.45, 0),
    ]),
    pane: new THREE.PlaneGeometry(1.34, 1.84).rotateY(Math.PI / 2),
    shutter: new THREE.BoxGeometry(0.035, 1.84, 0.64),
    slab: new THREE.BoxGeometry(1.0, 0.14, 2.8),
    rail: new THREE.BoxGeometry(0.02, 1.0, 2.8),
    railSide: new THREE.BoxGeometry(1.0, 1.0, 0.02),
    cloth: new THREE.PlaneGeometry(0.5, 0.75).rotateY(Math.PI / 2).translate(0, -0.37, 0),
    ac: new THREE.BoxGeometry(0.55, 0.5, 0.82),
    pipe: new THREE.CylinderGeometry(0.06, 0.06, 1, 8),
    shop: new THREE.PlaneGeometry(1, 1).rotateY(Math.PI / 2),
    awning: (() => {
      const g = new THREE.BoxGeometry(1.4, 0.06, 1);
      g.rotateZ(-0.3);
      return g;
    })(),
  };
  const curtain = curtainTexture();
  const shopTex = shopTexture();
  const louverMap = TEX.louver_col;
  const mats = {
    frame: addGroundGrime(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55 })),
    paneDark: new THREE.MeshPhysicalMaterial({ color: 0x0c1115, roughness: 0.05, metalness: 0.0, envMapIntensity: 1.6, specularIntensity: 1, ior: 1.52 }),
    paneLit: new THREE.MeshPhysicalMaterial({ color: 0x20160e, map: curtain, emissive: 0xffffff, emissiveMap: curtain, emissiveIntensity: 0.05, roughness: 0.08, envMapIntensity: 1.2 }),
    shutter: new THREE.MeshStandardMaterial({ map: louverMap, normalMap: TEX.louver_nor, roughness: 0.75, color: 0xffffff }),
    slab: addGroundGrime(pbr('plaster', { repeat: [0.4, 0.4], vertexColors: false })),
    rail: new THREE.MeshStandardMaterial({ map: TEX.rail_col, alphaTest: 0.5, side: THREE.DoubleSide, metalness: 0.6, roughness: 0.5, color: 0x222222 }),
    cloth: new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: 0.95, color: 0xffffff }),
    ac: new THREE.MeshStandardMaterial({ map: acTexture(), roughness: 0.6 }),
    pipe: new THREE.MeshStandardMaterial({ color: 0x3a3c3e, roughness: 0.5, metalness: 0.2 }),
    shopLit: new THREE.MeshStandardMaterial({ map: shopTex, emissive: 0xffffff, emissiveMap: shopTex, emissiveIntensity: 0.35, roughness: 0.4 }),
    shutterRoll: pbr('corrugated', { repeat: [1, 1], color: 0x9aa3a8 }),
    awning: new THREE.MeshStandardMaterial({ roughness: 0.85, side: THREE.DoubleSide, color: 0xffffff }),
  };
  _assets = { geo, mats };
  return _assets;
}

// A single detailed window (frame, glass, optional open shutters) for hand-placed buildings.
const _shutterMats = {};
const _frameMats = {};
export function windowUnit({ lit = false, shutters = true, shutterColor = '#2f5e44', frameColor = '#f1ede3', open = 0.35 } = {}) {
  const { geo, mats } = kitAssets();
  const g = new THREE.Group();
  // one material per colour, shared, so a landmark's windows merge into one draw
  const frameMat = _frameMats[frameColor] || (_frameMats[frameColor] = addGroundGrime(new THREE.MeshStandardMaterial({ color: frameColor, roughness: 0.55 })));
  const f = new THREE.Mesh(geo.frame, frameMat);
  f.castShadow = f.receiveShadow = true;
  g.add(f);
  const p = new THREE.Mesh(geo.pane, lit ? mats.paneLit : mats.paneDark);
  p.position.x = 0.012;
  g.add(p);
  if (shutters) {
    const sm = _shutterMats[shutterColor] || (_shutterMats[shutterColor] = Object.assign(mats.shutter.clone(), {}));
    sm.color.set(shutterColor);
    for (const s of [-1, 1]) {
      const m = new THREE.Mesh(geo.shutter, sm);
      m.position.set(0.06 + Math.sin(open) * 0.3, 0, s * 1.0);
      m.rotation.y = s * open;
      m.castShadow = true;
      g.add(m);
    }
  }
  return g;
}

export class FacadeKit {
  constructor(rng, { lite = false } = {}) {
    this.r = rng;
    this.lite = lite;
    this.I = {
      frame: [], paneDark: [], paneLit: [], shutter: [], slab: [], rail: [], railSide: [], cloth: [],
      ac: [], pipe: [], shopLit: [], shutterRoll: [], awning: [],
    };
    this.signGeos = [];
    this.wallGeos = [];
  }

  // x,z: building centre; rot: building yaw; side: +1/-1 road side;
  // perp: depth (local x), along: width along the road (local z); floors above the shop
  addBuilding({ x, z, rot, side, perp, along, floors, tint }) {
    const r = this.r;
    const yaw = rot + (side > 0 ? 0 : Math.PI);
    const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    const qb = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot);
    const face = side * (perp / 2);
    const at = (lz, y, dx = 0) => new THREE.Vector3(face + side * dx, y, lz).applyQuaternion(qb).add(new THREE.Vector3(x, 0, z));
    const push = (key, pos, extraYaw = 0, scale = [1, 1, 1], color, qBase = q) => {
      const qq = extraYaw ? qBase.clone().multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), extraYaw)) : qBase;
      this.I[key].push({ m: new THREE.Matrix4().compose(pos, qq, new THREE.Vector3(...scale)), color });
    };
    const frameColor = ['#f1ede3', '#f1ede3', '#2f5e44', '#5b3b24', '#3b5a7a', '#e8e0c8'][Math.floor(r() * 6)];
    const shutterColor = ['#2f5e44', '#2d6a5a', '#3f6b3a', '#5b3b24', '#2f4f6f', '#7b8b5a'][Math.floor(r() * 6)];
    const bays = Math.max(1, Math.floor((along - 1.2) / 3.0));
    const zAt = (i) => -along / 2 + (along * (i + 0.5)) / bays;

    // cornices between floors & a parapet band (merged into the plaster wall)
    for (let k = 0; k <= floors; k++) {
      const y = GROUND_FLOOR + k * FLOOR - 0.06;
      const g = new THREE.BoxGeometry(0.24, k === floors ? 0.3 : 0.14, along + 0.24);
      g.translate(face + side * 0.1, y, 0);
      metricUV(g);
      paintVertexColor(g, new THREE.Color(tint).multiplyScalar(0.93));
      g.applyQuaternion(qb);
      g.translate(x, 0, z);
      this.wallGeos.push(normalizeForMerge(g));
    }

    // upper floors
    const balconyFloor = r() < 0.55;
    for (let k = 0; k < floors; k++) {
      const yc = GROUND_FLOOR + k * FLOOR + 1.55;
      for (let i = 0; i < bays; i++) {
        const zc = zAt(i);
        push('frame', at(zc, yc), 0, [1, 1, 1], frameColor);
        const closed = r() < 0.16;
        if (!closed) push(r() < 0.42 ? 'paneLit' : 'paneDark', at(zc, yc, 0.012));
        if (closed) {
          for (const s of [-1, 1]) push('shutter', at(zc + s * 0.33, yc, 0.07), 0, [1, 1, 1], shutterColor);
        } else if (r() < 0.6) {
          for (const s of [-1, 1]) {
            const open = 0.15 + r() * 0.5;
            push('shutter', at(zc + s * (0.7 + 0.3), yc, 0.06 + Math.sin(open) * 0.3), s * open, [1, 1, 1], shutterColor);
          }
        }
        if (balconyFloor && k >= 0 && r() < 0.5 && !this.lite) {
          const yb = yc - 1.02;
          push('slab', at(zc, yb, 0.5), 0, [1, 1, 1], tint);
          push('rail', at(zc, yb + 0.55, 0.98));
          for (const s of [-1, 1]) push('railSide', at(zc + s * 1.38, yb + 0.55, 0.5));
          const n = Math.floor(r() * 4);
          for (let c = 0; c < n; c++) {
            const col = ['#c2185b', '#f9a825', '#1565c0', '#2e7d32', '#ffffff', '#6a1b9a', '#e65100', '#00838f'][Math.floor(r() * 8)];
            push('cloth', at(zc - 0.9 + c * 0.6 + r() * 0.2, yb + 0.55, 0.8), (r() - 0.5) * 0.4, [0.8 + r() * 0.5, 0.9 + r() * 0.6, 1], col);
          }
        } else if (r() < 0.12 && !this.lite) {
          push('ac', at(zc, yc - 1.3, 0.3));
        }
      }
    }
    // windows on the exposed side walls too
    for (const sz of [-1, 1]) {
      if (r() < 0.35) continue;
      const qs = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot + (sz > 0 ? -Math.PI / 2 : Math.PI / 2));
      const atS = (lx, y, dx = 0) => new THREE.Vector3(lx, y, sz * (along / 2 + dx)).applyQuaternion(qb).add(new THREE.Vector3(x, 0, z));
      const nb = Math.max(0, Math.floor((perp - 2.5) / 3.6));
      for (let k = 0; k < floors; k++) {
        const yc = GROUND_FLOOR + k * FLOOR + 1.55;
        for (let i = 0; i < nb; i++) {
          const lx = -perp / 2 + 1.2 + ((perp - 2.4) * (i + 0.5)) / nb;
          push('frame', atS(lx, yc), 0, [1, 1, 1], frameColor, qs);
          push(r() < 0.4 ? 'paneLit' : 'paneDark', atS(lx, yc, 0.012), 0, [1, 1, 1], undefined, qs);
          if (r() < 0.5) for (const s2 of [-1, 1]) push('shutter', atS(lx + s2 * 1.0, yc, 0.08), s2 * (0.2 + r() * 0.3), [1, 1, 1], shutterColor, qs);
        }
      }
    }
    // drain pipes
    if (!this.lite) {
      const top = GROUND_FLOOR + floors * FLOOR;
      for (const zz of [-along / 2 + 0.25, along / 2 - 0.25]) if (r() < 0.6) push('pipe', at(zz, top / 2, 0.1), 0, [1, top, 1]);
    }

    // ground floor: shops
    const shops = Math.max(1, Math.round(along / 5));
    for (let s = 0; s < shops; s++) {
      const w = along / shops;
      const zc = -along / 2 + w * (s + 0.5);
      const open = r() < 0.6;
      push(open ? 'shopLit' : 'shutterRoll', at(zc, 1.55, 0.015), 0, [1, 3.1, w - 0.5]);
      // pillar between shops
      if (s > 0) {
        const g = new THREE.BoxGeometry(0.3, GROUND_FLOOR, 0.45);
        g.translate(face + side * 0.12, GROUND_FLOOR / 2, -along / 2 + w * s);
        metricUV(g);
        paintVertexColor(g, new THREE.Color(tint).multiplyScalar(0.88));
        g.applyQuaternion(qb);
        g.translate(x, 0, z);
        this.wallGeos.push(normalizeForMerge(g));
      }
      if (r() < 0.75) {
        // signboard over the shop
        const idx = Math.floor(r() * SIGNS.length);
        const g = new THREE.BoxGeometry(0.1, 0.78, w - 0.3);
        const uv = g.attributes.uv;
        const u0 = (idx % 2) * 0.5, v1 = 1 - Math.floor(idx / 2) / 8, v0 = v1 - 1 / 8;
        for (let f = 0; f < 6; f++)
          for (let k = 0; k < 4; k++) {
            const i = f * 4 + k;
            if (f === 0) uv.setXY(i, u0 + uv.getX(i) * 0.5, v0 + uv.getY(i) / 8);
            else uv.setXY(i, u0 + 0.002, v1 - 0.002);
          }
        if (side < 0) {
          // face 0 is +x; flip so the board face points to the road
          g.rotateY(Math.PI);
        }
        g.translate(face + side * 0.1, 3.72, zc);
        g.applyQuaternion(qb);
        g.translate(x, 0, z);
        this.signGeos.push(normalizeForMerge(g));
      } else if (r() < 0.6) {
        push('awning', at(zc, 3.3, 0.7), 0, [1, 1, w - 0.4], ['#b23a2e', '#2f6d8a', '#d18b2c', '#3f7a4c', '#8a3f6d'][Math.floor(r() * 5)]);
      }
    }
  }

  build(scene) {
    const out = { setNight: () => {} };
    const { geo, mats } = kitAssets();
    // chunked so the camera and shadow frustums can cull them; on layer 1 so the river's
    // reflection pass skips this fine detail
    const make = (key, g, mat, cast = false) => {
      const list = this.I[key];
      if (!list.length) return null;
      const c = new THREE.Color();
      const colors = list.map((it) => (it.color ? c.clone().set(it.color) : null));
      const meshes = chunkedInstances(g, mat, list.map((it) => it.m), { colors: colors.some(Boolean) ? colors.map((x) => x || new THREE.Color(1, 1, 1)) : null, cast, layer: 1, cull: 150 });
      meshes.forEach((m) => scene.add(m));
      return meshes;
    };
    make('frame', geo.frame, mats.frame, false);
    make('paneDark', geo.pane, mats.paneDark, false);
    make('paneLit', geo.pane, mats.paneLit, false);
    make('shutter', geo.shutter, mats.shutter);
    make('slab', geo.slab, mats.slab, true);
    make('rail', geo.rail, mats.rail);
    make('railSide', geo.railSide, mats.rail);
    make('cloth', geo.cloth, mats.cloth);
    make('ac', geo.ac, mats.ac);
    make('pipe', geo.pipe, mats.pipe);
    make('shopLit', geo.shop, mats.shopLit, false);
    make('shutterRoll', geo.shop, mats.shutterRoll, false);
    make('awning', geo.awning, mats.awning);
    const atlas = signAtlas();
    const signMat = new THREE.MeshStandardMaterial({ map: atlas, emissive: 0xffffff, emissiveMap: atlas, emissiveIntensity: 0.0, roughness: 0.6 });
    if (this.signGeos.length) {
      const signs = new THREE.Mesh(mergeGeometries(this.signGeos), signMat);
      signs.receiveShadow = true;
      scene.add(signs);
      chunkMesh(signs, { cull: 170 }).forEach((m) => m.layers.set(1));
    }
    out.setNight = (n) => {
      mats.paneLit.emissiveIntensity = 0.05 + n * 1.5;
      mats.shopLit.emissiveIntensity = 0.3 + n * 0.55;
      signMat.emissiveIntensity = n * 0.55;
    };
    return out;
  }
}

// metric UVs on a box: 1 texture tile = 3 m
export function metricUV(g, tile = 3) {
  const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i));
    let u, v;
    if (ay > 0.5) { u = p.getX(i); v = p.getZ(i); }
    else if (ax > 0.5) { u = p.getZ(i); v = p.getY(i); }
    else { u = p.getX(i); v = p.getY(i); }
    uv.setXY(i, u / tile, v / tile);
  }
  return g;
}
