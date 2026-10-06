import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { rng, canvas, tex, radialTexture, addGroundGrime } from './util.js';
import { TEX, pbr } from './materials.js';
import { metricUV, windowUnit } from './facades.js';
import { WALK_OUT } from './world.js';

const FONT_SERIF = '"Instrument Serif", Georgia, serif';
const FONT_SANS = '"Manrope", system-ui, sans-serif';
const FONT_MONO = '"JetBrains Mono", ui-monospace, monospace';

// Put a group beside the road at route position u, its local +z facing the road.
export function place(route, group, u, side, dist) {
  const f = route.frame(u);
  group.position.copy(f.p).addScaledVector(f.r, side * dist);
  group.rotation.y = Math.atan2(-f.r.x * side, -f.r.z * side);
  return group;
}

const std = (o) => new THREE.MeshStandardMaterial(o);
function mesh(geo, mat, x = 0, y = 0, z = 0, parent) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}
// a box whose UVs are in metres, so tiled PBR materials keep their real scale
function mbox(w, h, d, tile = 3) {
  return metricUV(new THREE.BoxGeometry(w, h, d), tile);
}
function rot90(mat) {
  for (const k of ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap']) {
    if (!mat[k]) continue;
    mat[k] = mat[k].clone();
    mat[k].center.set(0.5, 0.5);
    mat[k].rotation = Math.PI / 2;
    mat[k].needsUpdate = true;
  }
  return mat;
}
function addWindow(parent, x, y, z, opts) {
  const w = windowUnit(opts);
  w.position.set(x, y, z);
  w.rotation.y = -Math.PI / 2; // unit faces +x; landmarks face +z
  parent.add(w);
  return w;
}
function local(group, x, z) {
  return new THREE.Vector3(x, 0, z).applyEuler(group.rotation).add(group.position);
}
function signTexture(w, h, draw) {
  return tex(canvas(w, h, draw));
}

// ------------------------------------------------------------ 00 · chai stall (start)
export function chaiStall() {
  const g = new THREE.Group();
  const wood = pbr('wood', { color: 0x9a7a5a });
  const tin = pbr('corrugated', { color: 0x9aa0a4 });
  mesh(mbox(3.2, 1.1, 1.3, 1.5), wood, 0, 0.55, 0, g);
  mesh(new THREE.BoxGeometry(3.4, 0.08, 1.5), std({ color: 0x3a2a1c }), 0, 1.12, 0, g);
  for (const x of [-1.55, 1.55]) for (const z of [-0.6, 0.6]) mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.6), wood, x, 1.3, z, g);
  const roof = mesh(mbox(4, 0.05, 2.4, 2), tin, 0, 2.6, 0.2, g);
  roof.rotation.x = 0.12;
  const kettle = mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.34, 20), std({ color: 0xb87333, metalness: 0.9, roughness: 0.3 }), -0.8, 1.33, 0.1, g);
  mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16), std({ color: 0x222 }), -0.8, 1.19, 0.1, g);
  // clay cups — bhaar
  for (let i = 0; i < 8; i++) mesh(new THREE.CylinderGeometry(0.045, 0.032, 0.08, 10), std({ color: 0xa0522d, roughness: 1 }), 0.2 + (i % 4) * 0.13, 1.2, -0.1 + Math.floor(i / 4) * 0.14, g);
  // bench
  mesh(new THREE.BoxGeometry(2.2, 0.08, 0.4), wood, 0.4, 0.5, 1.6, g);
  for (const x of [-0.5, 1.3]) mesh(new THREE.BoxGeometry(0.08, 0.5, 0.36), wood, x, 0.25, 1.6, g);
  const sign = signTexture(512, 128, (c, w, h) => {
    c.fillStyle = '#b8321f';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#ffe9b0';
    c.font = `700 62px ${FONT_SANS}`;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText('CHA  ·  ₹10', w / 2, h / 2 + 3);
  });
  const sg = mesh(new THREE.PlaneGeometry(2.2, 0.55), std({ map: sign, roughness: 0.7 }), 0, 2.25, 0.62, g);
  sg.castShadow = false;
  // steam
  const steamTex = radialTexture('rgba(255,255,255,0.55)', 'rgba(255,255,255,0)');
  const puffs = [];
  for (let i = 0; i < 10; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: steamTex, transparent: true, depthWrite: false, opacity: 0 }));
    s.userData.o = i / 10;
    g.add(s);
    puffs.push(s);
  }
  return {
    group: g,
    radius: 4,
    update(t) {
      for (const s of puffs) {
        const k = (t * 0.25 + s.userData.o) % 1;
        s.position.set(kettle.position.x + Math.sin(k * 6 + s.userData.o * 9) * 0.15, 1.55 + k * 1.4, kettle.position.z);
        const sc = 0.25 + k * 0.7;
        s.scale.set(sc, sc, 1);
        s.material.opacity = Math.sin(k * Math.PI) * 0.22;
      }
    },
  };
}

// ------------------------------------------------------------ 01 · the paper mountain
export function paperMountain() {
  const g = new THREE.Group();
  const r = rng(101);
  const wall = addGroundGrime(pbr('plaster', { color: 0xead6ae, normalScale: 1.4 }), { height: 3, strength: 0.4 });
  // shop
  const shop = mesh(mbox(14, 8, 8), wall, 0, 4, -6.5, g);
  mesh(mbox(14.5, 0.45, 8.5), pbr('concrete', { color: 0xb8ae9c }), 0, 8.2, -6.5, g);
  mesh(mbox(14.3, 0.18, 0.3), wall, 0, 4.95, -2.4, g);
  const shutter = mesh(new THREE.PlaneGeometry(6, 3.2), rot90(pbr('corrugated', { color: 0x8c9499, repeat: [1.6, 3] })), -3, 1.6, -2.48, g);
  const doorTex = tex(canvas(256, 256, (c, w, h) => {
    const g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#3a2a1c'); g.addColorStop(1, '#120c08');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    const l = c.createRadialGradient(w * 0.5, h * 0.15, 4, w * 0.5, h * 0.15, w * 0.6);
    l.addColorStop(0, 'rgba(255,230,180,0.9)'); l.addColorStop(1, 'rgba(255,200,120,0)');
    c.fillStyle = l; c.fillRect(0, 0, w, h);
    c.fillStyle = 'rgba(160,130,90,0.5)';
    for (let i = 0; i < 5; i++) c.fillRect(20 + i * 46, h * 0.45, 34, h * 0.4);
  }));
  const doorGlow = std({ map: doorTex, emissive: 0xffffff, emissiveMap: doorTex, emissiveIntensity: 0.35, roughness: 0.3 });
  mesh(new THREE.PlaneGeometry(3.4, 3), doorGlow, 3.6, 1.5, -2.48, g);
  for (const [i, x] of [-4.5, 0, 4.5].entries()) addWindow(g, x, 6.3, -2.5, { lit: i === 1, shutterColor: '#3f5f7a', open: 0.3 + i * 0.15 });
  const sign = signTexture(1024, 160, (c, w, h) => {
    c.fillStyle = '#1f3b63';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#f5c518';
    c.fillRect(0, h - 10, w, 10);
    c.fillStyle = '#fff';
    c.font = `800 70px ${FONT_SANS}`;
    c.textBaseline = 'middle';
    c.fillText('INVOICE DESK', 36, h / 2 - 4);
    c.font = `500 30px ${FONT_MONO}`;
    c.textAlign = 'right';
    c.fillStyle = '#c9d6ea';
    c.fillText('DATA ENTRY · ERP · EST. 2016', w - 36, h / 2 - 2);
  });
  mesh(new THREE.BoxGeometry(12, 1.6, 0.2), std({ map: sign, emissiveMap: sign, emissive: 0xffffff, emissiveIntensity: 0.25 }), 0, 4.1, -2.35, g);

  // the mountain: reams, file boxes, binders
  const items = [];
  const kinds = [
    { s: [0.42, 0.11, 0.3], c: [0xf4f2ec, 0xffffff, 0xece6d6] },
    { s: [0.5, 0.32, 0.36], c: [0xffffff, 0xe8dccb, 0xd9c8b0] },
    { s: [0.32, 0.29, 0.07], c: [0x2a4f8f, 0x8f2a2a, 0x2f7a45, 0x1f1f1f] },
  ];
  for (let gx = -6; gx <= 6; gx++) {
    for (let gz = -2; gz <= 3; gz++) {
      const cx = gx * 0.55 + (r() - 0.5) * 0.2, cz = gz * 0.5 + (r() - 0.5) * 0.2;
      const peak = Math.max(0, 1 - Math.hypot(gx / 6.5, (gz - 0.2) / 3.4));
      let y = 0;
      const levels = Math.floor(peak * 16 + r() * 2);
      for (let l = 0; l < levels; l++) {
        const ki = r() < 0.6 ? 0 : r() < 0.6 ? 1 : 2;
        const k = kinds[ki];
        const s = k.s;
        items.push({ k: ki, x: cx, y: y + s[1] / 2, z: cz, s, rot: (r() - 0.5) * 0.4, col: ki === 0 ? 0xffffff : k.c[Math.floor(r() * k.c.length)] });
        y += s[1];
      }
    }
  }
  const ream = tex(canvas(128, 128, (c, w, h) => {
    c.fillStyle = '#f4f2ea'; c.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 2) { c.fillStyle = `rgba(150,145,130,${0.15 + Math.random() * 0.2})`; c.fillRect(0, y, w, 1); }
    c.fillStyle = '#2c5aa0'; c.fillRect(0, h * 0.35, w, h * 0.3);
    c.fillStyle = '#fff'; c.font = '700 18px Manrope, sans-serif'; c.fillText('A4 · 75gsm', 10, h * 0.55);
  }));
  const kraft = tex(canvas(128, 128, (c, w, h) => {
    c.fillStyle = '#b08a5a'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) { c.fillStyle = `rgba(${90 + Math.random() * 60},${60 + Math.random() * 40},30,0.25)`; c.fillRect(Math.random() * w, Math.random() * h, 3, 1); }
    c.fillStyle = 'rgba(200,180,140,0.7)'; c.fillRect(w * 0.42, 0, w * 0.16, h);
    c.fillStyle = '#222'; c.font = '700 14px JetBrains Mono, monospace'; c.fillText('FY 2016-17', 8, h - 12);
  }));
  const binder = tex(canvas(128, 128, (c, w, h) => {
    c.fillStyle = '#ffffff'; c.fillRect(0, 0, w, h);
    c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(0, 0, w, 8); c.fillRect(0, h - 8, w, 8);
    c.fillStyle = '#f6f1e0'; c.fillRect(w * 0.3, h * 0.25, w * 0.4, h * 0.3);
    c.beginPath(); c.arc(w / 2, h * 0.78, 9, 0, 7); c.fillStyle = '#222'; c.fill();
  }));
  const groups = { 0: [], 1: [], 2: [] };
  items.forEach((it) => groups[it.k].push(it));
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  [[0, ream, 0.75], [1, kraft, 0.9], [2, binder, 0.45]].forEach(([k, map, rough]) => {
    const list = groups[k];
    if (!list.length) return;
    const im = new THREE.InstancedMesh(new RoundedBoxGeometry(1, 1, 1, 2, 0.03), std({ map, roughness: rough, color: 0xffffff }), list.length);
    list.forEach((it, i) => {
      q.setFromEuler(new THREE.Euler((Math.random() - 0.5) * 0.04, it.rot, (Math.random() - 0.5) * 0.04));
      m4.compose(new THREE.Vector3(it.x, it.y, it.z), q, new THREE.Vector3(...it.s));
      im.setMatrixAt(i, m4);
      im.setColorAt(i, c.set(it.col));
    });
    im.castShadow = im.receiveShadow = true;
    g.add(im);
  });

  // CRT terminal with green ERP text
  const crtCanvas = canvas(256, 192, () => {});
  const crtTex = tex(crtCanvas);
  const drawCRT = (t) => {
    const x = crtCanvas.getContext('2d');
    x.fillStyle = '#031a08';
    x.fillRect(0, 0, 256, 192);
    x.fillStyle = '#39ff6a';
    x.font = `600 14px ${FONT_MONO}`;
    const lines = ['ERP v4.2  INVOICE ENTRY', '------------------------', 'INV# 2016-0' + (4412 + Math.floor(t * 3)), 'VENDOR  : ______', 'QTY     : ______', 'AMOUNT  : ______', 'GST     : ______', '', '> F2 SAVE   F3 NEXT', '> REPEAT x 10,000'];
    lines.forEach((l, i) => x.fillText(l, 10, 20 + i * 17));
    if (Math.floor(t * 2) % 2) x.fillRect(10 + 82, 20 + 9 * 17 - 12, 9, 14);
    for (let y = 0; y < 192; y += 3) { x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(0, y, 256, 1); }
    crtTex.needsUpdate = true;
  };
  drawCRT(0);
  const desk = new THREE.Group();
  desk.position.set(5.2, 0, 1.4);
  desk.rotation.y = -0.5;
  g.add(desk);
  mesh(mbox(1.6, 0.06, 0.8, 1.5), pbr('wood', { color: 0x7a5a3a }), 0, 0.78, 0, desk);
  for (const x of [-0.72, 0.72]) for (const z of [-0.32, 0.32]) mesh(new THREE.BoxGeometry(0.05, 0.78, 0.05), std({ color: 0x3d2817 }), x, 0.39, z, desk);
  mesh(new RoundedBoxGeometry(0.62, 0.52, 0.55, 3, 0.05), std({ color: 0xd8d0bb, roughness: 0.6 }), 0, 1.08, -0.05, desk);
  mesh(new THREE.PlaneGeometry(0.5, 0.38), std({ map: crtTex, emissiveMap: crtTex, emissive: 0xffffff, emissiveIntensity: 1.4 }), 0, 1.1, 0.226, desk);
  mesh(new THREE.BoxGeometry(0.55, 0.04, 0.2), std({ color: 0xcfc6ae }), 0, 0.83, 0.25, desk);

  // flying sheets — the paperwork that never stops
  const sheetMat = std({ color: 0xffffff, side: THREE.DoubleSide, roughness: 0.7 });
  const sheets = [];
  for (let i = 0; i < 26; i++) {
    const s = mesh(new THREE.PlaneGeometry(0.3, 0.42), sheetMat, 0, 0, 0, g);
    s.castShadow = true;
    s.userData = { a: r() * 6.28, rad: 1 + r() * 3.2, h: 2 + r() * 5, sp: 0.2 + r() * 0.35, wob: r() * 6 };
    sheets.push(s);
  }
  let last = -1;
  return {
    group: g,
    radius: 11,
    center: new THREE.Vector3(0, 0, -3),
    update(t, near) {
      if (!near) return;
      for (const s of sheets) {
        const d = s.userData;
        const a = d.a + t * d.sp;
        s.position.set(Math.cos(a) * d.rad, d.h + Math.sin(t * 0.7 + d.wob) * 0.6, 0.6 + Math.sin(a) * d.rad * 0.6);
        s.rotation.set(t * d.sp * 2 + d.wob, a, Math.sin(t + d.wob));
      }
      const k = Math.floor(t * 6);
      if (k !== last) { last = k; drawCRT(t); }
    },
  };
}

// ------------------------------------------------------------ 02 · glass tower with KPI wall
export function kpiTower() {
  const g = new THREE.Group();
  const curtain = tex(
    canvas(256, 256, (c, w) => {
      const gr = c.createLinearGradient(0, 0, 0, w);
      gr.addColorStop(0, '#9fbcd0');
      gr.addColorStop(1, '#5d7d94');
      c.fillStyle = gr;
      c.fillRect(0, 0, w, w);
      c.fillStyle = '#2a333b';
      for (let i = 0; i < 4; i++) { c.fillRect(0, i * 64, w, 5); c.fillRect(i * 64, 0, 3, w); }
    }),
    { repeat: true }
  );
  curtain.repeat.set(5, 18);
  const glassMat = new THREE.MeshPhysicalMaterial({ map: curtain, metalness: 0.85, roughness: 0.08, clearcoat: 1, envMapIntensity: 1.4, emissive: 0x223344, emissiveIntensity: 0 });
  const H = 74;
  mesh(new THREE.BoxGeometry(20, H, 20), glassMat, 0, H / 2 + 6, -14, g);
  // podium / lobby
  const lobby = std({ color: 0x1b232a, emissive: 0xfff0d6, emissiveIntensity: 0.5, roughness: 0.2, metalness: 0.4 });
  mesh(mbox(24, 6, 22, 4), addGroundGrime(pbr('concrete', { color: 0xd8d2c6 })), 0, 3, -14, g);
  mesh(new THREE.PlaneGeometry(16, 4.4), lobby, 0, 2.4, -2.98, g);
  mesh(mbox(22, 0.5, 2.5, 4), pbr('concrete', { color: 0xc4bdb0 }), 0, 5.2, -2, g);
  // crown
  mesh(mbox(16, 4, 16, 2), pbr('steel', { color: 0x4a525a }), 0, H + 8, -14, g);
  const beacon = std({ color: 0xff2a2a, emissive: 0xff2020, emissiveIntensity: 2 });
  mesh(new THREE.CylinderGeometry(0.1, 0.1, 8), std({ color: 0x777 }), 0, H + 14, -14, g);
  mesh(new THREE.SphereGeometry(0.35, 12, 8), beacon, 0, H + 18.2, -14, g);

  // giant KPI screen
  const sc = canvas(1024, 576, () => {});
  const st = tex(sc);
  const bars = Array.from({ length: 12 }, (_, i) => 0.3 + Math.abs(Math.sin(i * 1.7)) * 0.6);
  const draw = (t) => {
    const c = sc.getContext('2d');
    c.fillStyle = '#081018';
    c.fillRect(0, 0, 1024, 576);
    c.fillStyle = '#f5c518';
    c.font = `700 30px ${FONT_MONO}`;
    c.fillText('KPI · WEEKLY QUALITY REVIEW', 40, 60);
    c.fillStyle = '#7f93a8';
    c.font = `500 22px ${FONT_MONO}`;
    c.fillText('CENTRUM · SALES QA · 2018–2020', 40, 96);
    // tiles
    const tiles = [['CSAT', (88 + Math.sin(t) * 2).toFixed(1) + '%'], ['CALLS QA', (1240 + Math.floor(t * 7) % 60).toString()], ['TREND', '▲ 12%']];
    tiles.forEach(([k, v], i) => {
      const x = 40 + i * 320;
      c.fillStyle = '#101c28';
      c.fillRect(x, 124, 290, 120);
      c.fillStyle = '#7f93a8';
      c.font = `500 20px ${FONT_MONO}`;
      c.fillText(k, x + 20, 158);
      c.fillStyle = '#ffffff';
      c.font = `400 64px ${FONT_SERIF}`;
      c.fillText(v, x + 20, 226);
    });
    // bars
    bars.forEach((b, i) => {
      const h = (b + Math.sin(t * 1.3 + i) * 0.05) * 230;
      c.fillStyle = i === 11 ? '#f5c518' : '#2b6cb0';
      c.fillRect(40 + i * 56, 540 - h, 36, h);
    });
    // trend line
    c.strokeStyle = '#ff7a3d';
    c.lineWidth = 4;
    c.beginPath();
    for (let i = 0; i <= 30; i++) {
      const x = 720 + i * 9.5, y = 500 - i * 7 - Math.sin(i * 0.8 + t * 2) * 14;
      i ? c.lineTo(x, y) : c.moveTo(x, y);
    }
    c.stroke();
    c.fillStyle = '#7f93a8';
    c.font = `500 18px ${FONT_MONO}`;
    c.fillText('A dashboard is an argument.', 720, 300);
    st.needsUpdate = true;
  };
  draw(0);
  mesh(mbox(17, 9.8, 0.5, 2), pbr('steel', { color: 0x2a2e33 }), 0, 13, -3.7, g);
  mesh(new THREE.PlaneGeometry(16.2, 9.1), std({ map: st, emissiveMap: st, emissive: 0xffffff, emissiveIntensity: 1.15, roughness: 0.4 }), 0, 13, -3.44, g);
  let last = -1;
  return {
    group: g,
    radius: 16,
    center: new THREE.Vector3(0, 0, -14),
    update(t, near) {
      if (!near) return;
      const k = Math.floor(t * 8);
      if (k !== last) { last = k; draw(t); }
      beacon.emissiveIntensity = 1 + Math.max(0, Math.sin(t * 3)) * 4;
    },
    setNight(n) { glassMat.emissiveIntensity = n * 0.6; lobby.emissiveIntensity = 0.5 + n * 1.5; },
  };
}

// ------------------------------------------------------------ 03 · the 24x7 pharmacy
export function pharmacy() {
  const g = new THREE.Group();
  const wall = addGroundGrime(pbr('plaster', { color: 0xe9e4d8, normalScale: 1.4 }), { height: 3, strength: 0.4 });
  mesh(mbox(16, 11, 10), wall, 0, 5.5, -7, g);
  mesh(mbox(16.5, 0.5, 10.5), pbr('concrete', { color: 0xb5ab98 }), 0, 11.2, -7, g);
  mesh(mbox(16.3, 0.2, 0.3), wall, 0, 9.4, -1.9, g);
  // upstairs windows with green shutters
  for (const [i, x] of [-5.5, -1.8, 1.8, 5.5].entries()) addWindow(g, x, 7.6, -2.0, { lit: i % 2 === 1, shutterColor: '#2f5e44', open: 0.25 + (i % 3) * 0.2 });
  // shop window: lit shelves of medicine
  const shelves = canvas(1024, 384, (c, w, h) => {
    const bg = c.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#fbfaf5');
    bg.addColorStop(1, '#dfe9e2');
    c.fillStyle = bg;
    c.fillRect(0, 0, w, h);
    // ceiling tube lights
    for (let x = 60; x < w; x += 240) {
      const gl = c.createRadialGradient(x + 60, 6, 2, x + 60, 6, 120);
      gl.addColorStop(0, 'rgba(255,255,255,0.95)');
      gl.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = gl;
      c.fillRect(x - 60, 0, 240, 120);
    }
    const r = rng(31);
    const brands = ['#1f9d6a', '#ffffff', '#2b6cb0', '#e85d4a', '#f5c518', '#8e5bd1', '#f1f1f1', '#ff8f3a', '#0aa2c0'];
    for (let row = 0; row < 4; row++) {
      const y = 46 + row * 84;
      let x = 6;
      while (x < w - 30) {
        const bottle = r() < 0.25;
        const bw = bottle ? 12 + r() * 8 : 16 + r() * 26, bh = bottle ? 30 + r() * 20 : 24 + r() * 30;
        const col = brands[Math.floor(r() * brands.length)];
        const gg = c.createLinearGradient(x, 0, x + bw, 0);
        gg.addColorStop(0, col);
        gg.addColorStop(0.75, col);
        gg.addColorStop(1, 'rgba(0,0,0,0.35)');
        c.fillStyle = gg;
        if (bottle) {
          c.beginPath();
          c.roundRect(x, y + 62 - bh, bw, bh, 5);
          c.fill();
          c.fillStyle = '#ddd';
          c.fillRect(x + bw * 0.25, y + 62 - bh - 6, bw * 0.5, 7);
        } else {
          c.fillRect(x, y + 62 - bh, bw, bh);
          c.fillStyle = 'rgba(255,255,255,0.85)';
          c.fillRect(x + 3, y + 62 - bh * 0.62, bw - 6, bh * 0.22);
          c.fillStyle = 'rgba(0,0,0,0.5)';
          c.fillRect(x + 4, y + 62 - bh * 0.55, (bw - 8) * r(), 2);
        }
        x += bw + 1 + r() * 2;
      }
      // shelf edge with price strips & soft shadow under it
      c.fillStyle = '#c9cfd2';
      c.fillRect(0, y + 62, w, 7);
      c.fillStyle = '#ffe35a';
      for (let px = 20; px < w; px += 90 + r() * 40) c.fillRect(px, y + 63, 26, 5);
      const sh = c.createLinearGradient(0, y + 69, 0, y + 86);
      sh.addColorStop(0, 'rgba(0,0,0,0.25)');
      sh.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = sh;
      c.fillRect(0, y + 69, w, 17);
    }
    // glass reflection streak
    const gl = c.createLinearGradient(0, 0, w, h);
    gl.addColorStop(0.1, 'rgba(255,255,255,0)');
    gl.addColorStop(0.18, 'rgba(255,255,255,0.22)');
    gl.addColorStop(0.26, 'rgba(255,255,255,0)');
    c.fillStyle = gl;
    c.fillRect(0, 0, w, h);
  });
  const shelfTex = tex(shelves);
  const windowMat = std({ map: shelfTex, emissiveMap: shelfTex, emissive: 0xffffff, emissiveIntensity: 0.7, roughness: 0.15, metalness: 0.1 });
  mesh(new THREE.PlaneGeometry(13, 4.2), windowMat, 0, 2.4, -1.98, g);
  for (const x of [-6.5, -2.2, 2.2, 6.5]) mesh(new THREE.BoxGeometry(0.12, 4.4, 0.12), std({ color: 0xd0d0d0, metalness: 0.9, roughness: 0.25 }), x, 2.3, -1.92, g);
  const fascia = signTexture(1024, 140, (c, w, h) => {
    c.fillStyle = '#0f7a4f';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#ffffff';
    c.font = `800 74px ${FONT_SANS}`;
    c.textBaseline = 'middle';
    c.fillText('PHARMACY', 40, h / 2);
    c.font = `600 34px ${FONT_MONO}`;
    c.textAlign = 'right';
    c.fillText('OPEN 24 × 7', w - 40, h / 2);
  });
  mesh(new THREE.BoxGeometry(15.5, 1.5, 0.3), std({ map: fascia, emissiveMap: fascia, emissive: 0xffffff, emissiveIntensity: 0.5 }), 0, 5.05, -1.85, g);
  // the green cross
  const crossMat = std({ color: 0x0fbf6a, emissive: 0x19e07e, emissiveIntensity: 1.5, roughness: 0.3 });
  const cross = new THREE.Group();
  cross.position.set(7.4, 6.6, 0.4);
  g.add(cross);
  mesh(new THREE.BoxGeometry(0.06, 0.06, 2.6), std({ color: 0x555 }), 0, 0.8, -1.2, cross);
  mesh(new RoundedBoxGeometry(0.5, 1.6, 0.3, 2, 0.06), crossMat, 0, 0, 0, cross);
  mesh(new RoundedBoxGeometry(1.6, 0.5, 0.3, 2, 0.06), crossMat, 0, 0, 0, cross);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTexture('rgba(40,255,140,0.6)', 'rgba(40,255,140,0)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.set(5, 5, 1);
  cross.add(halo);
  // a stool and a waiting customer's scooter would be nice; keep it to a bench
  mesh(new THREE.BoxGeometry(2.2, 0.08, 0.5), std({ color: 0x3a6b8a }), -4, 0.62, 0.3, g);
  for (const x of [-4.9, -3.1]) mesh(new THREE.BoxGeometry(0.06, 0.6, 0.45), std({ color: 0x333 }), x, 0.3, 0.3, g);
  return {
    group: g,
    radius: 11,
    center: new THREE.Vector3(0, 0, -6),
    update(t) {
      const p = 0.75 + 0.25 * Math.sin(t * 2.2);
      crossMat.emissiveIntensity = 1.2 + p * 2.2;
      halo.material.opacity = 0.35 + p * 0.4;
      cross.rotation.y = Math.sin(t * 0.6) * 0.25;
    },
    setNight(n) { windowMat.emissiveIntensity = 0.7 + n * 1.3; },
  };
}

// ------------------------------------------------------------ 04 · the steel plant
export function steelPlant() {
  const g = new THREE.Group();
  const r = rng(404);
  const shedMat = pbr('corrugated', { color: 0x8ea2b2, normalScale: 1.4 });
  const concrete = addGroundGrime(pbr('concrete', { color: 0xc2bcb0 }));
  const steel = pbr('steel', { color: 0x7d858e });
  const rust = pbr('steel', { color: 0xb8714a, normalScale: 1.5 });

  // yard slab
  const slab = mesh(mbox(110, 0.2, 80, 4), pbr('concrete', { color: 0x9a958c }), 0, 0.1, -40, g);
  slab.castShadow = false;
  // fence + gate
  for (let x = -54; x <= 54; x += 3) {
    if (Math.abs(x) < 6) continue;
    mesh(new THREE.BoxGeometry(0.08, 2.4, 0.08), steel, x, 1.2, -0.5, g);
  }
  for (const y of [0.6, 1.4, 2.2]) {
    mesh(new THREE.BoxGeometry(48, 0.05, 0.05), steel, -30, y, -0.5, g);
    mesh(new THREE.BoxGeometry(48, 0.05, 0.05), steel, 30, y, -0.5, g);
  }
  for (const x of [-6.5, 6.5]) mesh(mbox(1.2, 6, 1.2, 2), concrete, x, 3, -0.5, g);
  const gate = signTexture(1024, 150, (c, w, h) => {
    c.fillStyle = '#121518';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#ff7a2a';
    c.font = `800 62px ${FONT_SANS}`;
    c.textBaseline = 'middle';
    c.fillText('AUTOMATION FLOOR', 32, h / 2);
    c.fillStyle = '#a7b1ba';
    c.font = `500 28px ${FONT_MONO}`;
    c.textAlign = 'right';
    c.fillText('BOTS ON SHIFT · 24/7', w - 32, h / 2);
  });
  mesh(new THREE.BoxGeometry(14.2, 1.8, 0.4), std({ map: gate, emissiveMap: gate, emissive: 0xffffff, emissiveIntensity: 0.6 }), 0, 6.6, -0.5, g);

  // main shed with gabled roof
  const shed = new THREE.Group();
  shed.position.set(-8, 0, -36);
  g.add(shed);
  mesh(mbox(48, 18, 30, 2), shedMat, 0, 9, 0, shed);
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-15.5, 0); roofShape.lineTo(0, 6); roofShape.lineTo(15.5, 0); roofShape.lineTo(-15.5, 0);
  const roof = mesh(new THREE.ExtrudeGeometry(roofShape, { depth: 49, bevelEnabled: false }), pbr('corrugated', { color: 0x7d878e, repeat: [0.5, 0.5] }), 24.5, 18, 0, shed);
  roof.rotation.y = -Math.PI / 2;
  // glowing furnace mouth
  const mouthTex = tex(canvas(256, 256, (c, w, h) => {
    c.fillStyle = '#000'; c.fillRect(0, 0, w, h);
    const g = c.createRadialGradient(w / 2, h * 0.7, 4, w / 2, h * 0.7, w * 0.6);
    g.addColorStop(0, '#fff2c0'); g.addColorStop(0.25, '#ffb040'); g.addColorStop(0.6, '#c43c08'); g.addColorStop(1, '#100400');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  }));
  const mouth = std({ color: 0x050200, emissive: 0xffffff, emissiveMap: mouthTex, emissiveIntensity: 2.2 });
  mesh(new THREE.PlaneGeometry(10, 8), mouth, -6, 4, 15.02, shed);
  const clere = tex(canvas(512, 32, (c, w, h) => {
    c.fillStyle = '#1a1e22'; c.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 16) { c.fillStyle = `rgba(150,170,180,${0.25 + Math.random() * 0.2})`; c.fillRect(x + 2, 3, 12, h - 6); }
  }));
  mesh(new THREE.PlaneGeometry(40, 1.4), std({ map: clere, roughness: 0.2, metalness: 0.3, emissive: 0xffd7a0, emissiveMap: clere, emissiveIntensity: 0.15 }), 0, 15, 15.02, shed);

  // chimneys
  const stripe = tex(
    canvas(64, 256, (c) => {
      c.fillStyle = '#c9c3b8';
      c.fillRect(0, 0, 64, 256);
      for (let i = 0; i < 3; i++) { c.fillStyle = '#b8321f'; c.fillRect(0, i * 28, 64, 14); }
    })
  );
  const chimneyTops = [];
  [[18, -58], [26, -60], [34, -56]].forEach(([x, z], i) => {
    const h = 46 + i * 4;
    mesh(new THREE.CylinderGeometry(1.3, 2.2, h, 24), std({ map: stripe, normalMap: TEX.concrete_nor, roughnessMap: TEX.concrete_orm, roughness: 1 }), x, h / 2, z, g);
    chimneyTops.push(new THREE.Vector3(x, h + 0.5, z));
  });
  // blast furnace
  const bf = new THREE.Group();
  bf.position.set(32, 0, -30);
  g.add(bf);
  mesh(new THREE.CylinderGeometry(5, 6, 22, 28), rust, 0, 11, 0, bf);
  mesh(new THREE.CylinderGeometry(3, 5, 6, 28), steel, 0, 25, 0, bf);
  mesh(new THREE.CylinderGeometry(0.9, 0.9, 16, 16), steel, 0, 36, 0, bf);
  for (const a of [0, 2.1, 4.2]) {
    const pipe = mesh(new THREE.CylinderGeometry(0.7, 0.7, 26, 12), steel, Math.cos(a) * 7, 18, Math.sin(a) * 7, bf);
    pipe.rotation.z = Math.cos(a) * 0.25;
    pipe.rotation.x = -Math.sin(a) * 0.25;
  }
  for (let i = 0; i < 5; i++) mesh(new THREE.TorusGeometry(5.6, 0.25, 8, 40), steel, 0, 3 + i * 4.5, 0, bf).rotation.x = Math.PI / 2;
  // silos
  for (const [x, z] of [[-40, -28], [-40, -42], [-48, -35]]) {
    mesh(new THREE.CylinderGeometry(4, 4, 18, 28), std({ color: 0xcfd3d6, metalness: 0.8, roughness: 0.32, normalMap: TEX.steel_nor }), x, 9, z, g);
    mesh(new THREE.ConeGeometry(4.1, 3, 28), std({ color: 0xb9bec2, metalness: 0.7, roughness: 0.35 }), x, 19.5, z, g);
  }
  // big overhead pipe rack
  for (let x = -28; x <= 28; x += 7) mesh(new THREE.BoxGeometry(0.5, 9, 0.5), steel, x, 4.5, -16, g);
  for (const y of [8.6, 9.6]) mesh(new THREE.CylinderGeometry(0.5, 0.5, 58, 14), y > 9 ? rust : steel, 0, y, -16, g).rotation.z = Math.PI / 2;

  // conveyor with molten ingots
  const conv = new THREE.Group();
  conv.position.set(0, 0, -8);
  g.add(conv);
  mesh(new THREE.BoxGeometry(44, 0.25, 2), std({ color: 0x1b1d20, roughness: 0.75, normalMap: TEX.asphalt_nor }), 0, 1.3, 0, conv);
  for (const s of [-1, 1]) mesh(mbox(44, 0.35, 0.12, 2), pbr('steel', { color: 0xf0b400 }), 0, 1.45, s * 1.05, conv);
  for (let x = -21; x <= 21; x += 3) for (const s of [-1, 1]) mesh(new THREE.BoxGeometry(0.15, 1.2, 0.15), steel, x, 0.6, s * 0.9, conv);
  const ingotMat = std({ color: 0x220800, emissive: 0xff3c00, emissiveIntensity: 5, roughness: 0.6 });
  const ingots = new THREE.InstancedMesh(new RoundedBoxGeometry(1.4, 0.35, 0.8, 2, 0.06), ingotMat, 16);
  ingots.castShadow = true;
  conv.add(ingots);
  const glow = new THREE.PointLight(0xff6a20, 0, 26, 1.6);
  glow.position.set(0, 3, -6);
  g.add(glow);

  // two robot arms
  const arms = [];
  const orange = new THREE.MeshPhysicalMaterial({ color: 0xff6a0a, metalness: 0.2, roughness: 0.35, clearcoat: 0.6, clearcoatRoughness: 0.2 });
  const dark = std({ color: 0x222428, metalness: 0.6, roughness: 0.4 });
  for (const [x, ph] of [[-9, 0], [9, 1.9]]) {
    const base = new THREE.Group();
    base.position.set(x, 0, -5);
    g.add(base);
    mesh(new THREE.CylinderGeometry(0.9, 1.1, 0.6, 24), dark, 0, 0.3, 0, base);
    const yaw = new THREE.Group();
    yaw.position.y = 0.6;
    base.add(yaw);
    mesh(new THREE.CylinderGeometry(0.7, 0.8, 0.9, 24), orange, 0, 0.45, 0, yaw);
    const sh = new THREE.Group();
    sh.position.y = 1.0;
    yaw.add(sh);
    mesh(new THREE.SphereGeometry(0.5, 16, 12), dark, 0, 0, 0, sh);
    mesh(new RoundedBoxGeometry(0.55, 2.8, 0.55, 2, 0.12), orange, 0, 1.4, 0, sh);
    const el = new THREE.Group();
    el.position.y = 2.8;
    sh.add(el);
    mesh(new THREE.SphereGeometry(0.38, 16, 12), dark, 0, 0, 0, el);
    mesh(new RoundedBoxGeometry(0.42, 2.2, 0.42, 2, 0.1), orange, 0, 1.1, 0, el);
    const wr = new THREE.Group();
    wr.position.y = 2.2;
    el.add(wr);
    mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.4, 12), dark, 0, 0.2, 0, wr);
    for (const s of [-1, 1]) mesh(new THREE.BoxGeometry(0.08, 0.4, 0.25), dark, s * 0.15, 0.55, 0, wr);
    arms.push({ yaw, sh, el, wr, ph });
  }

  // smoke
  const smokeTex = radialTexture('rgba(200,200,200,0.7)', 'rgba(200,200,200,0)');
  const smoke = [];
  chimneyTops.forEach((top, ci) => {
    for (let i = 0; i < 12; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTex, transparent: true, depthWrite: false, color: 0xcfcac2 }));
      s.userData = { top, o: i / 12 + ci * 0.13, drift: 0.6 + r() * 0.8 };
      g.add(s);
      smoke.push(s);
    }
  });
  // sparks spitting from the furnace mouth
  const SP = 140;
  const spGeo = new THREE.BufferGeometry();
  const spPos = new Float32Array(SP * 3);
  const spVel = [];
  for (let i = 0; i < SP; i++) spVel.push({ t: Math.random(), vx: (Math.random() - 0.5) * 4, vy: 2 + Math.random() * 4, vz: 2 + Math.random() * 3 });
  spGeo.setAttribute('position', new THREE.BufferAttribute(spPos, 3));
  const sparks = new THREE.Points(spGeo, new THREE.PointsMaterial({ color: 0xffb347, size: 0.09, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
  sparks.position.set(shed.position.x - 6, 1.2, shed.position.z + 15.2);
  g.add(sparks);
  const m4 = new THREE.Matrix4();
  return {
    group: g,
    radius: 46,
    center: new THREE.Vector3(0, 0, -38),
    update(t, near) {
      for (const s of smoke) {
        const d = s.userData;
        const k = (t * 0.06 + d.o) % 1;
        s.position.set(d.top.x + k * 22 * d.drift, d.top.y + k * 18, d.top.z + k * 6);
        const sc = 3 + k * 16;
        s.scale.set(sc, sc, 1);
        s.material.opacity = Math.sin(Math.min(1, k * 1.4) * Math.PI) * 0.4;
      }
      if (!near) return;
      for (let i = 0; i < 16; i++) {
        const x = ((((t * 2.2 + i * 2.75) % 44) + 44) % 44) - 22;
        m4.makeTranslation(x, 1.62, 0);
        ingots.setMatrixAt(i, m4);
      }
      ingots.instanceMatrix.needsUpdate = true;
      for (let i = 0; i < SP; i++) {
        const v = spVel[i];
        const k = (t * 0.7 + v.t) % 1;
        const tt = k * 1.2;
        spPos[i * 3] = v.vx * tt;
        spPos[i * 3 + 1] = Math.max(0, v.vy * tt - 4.9 * tt * tt);
        spPos[i * 3 + 2] = v.vz * tt;
      }
      spGeo.attributes.position.needsUpdate = true;
      for (const a of arms) {
        const k = t * 0.9 + a.ph;
        a.yaw.rotation.y = Math.sin(k) * 1.1;
        a.sh.rotation.z = 0.35 + Math.sin(k * 1.3) * 0.35;
        a.el.rotation.z = 1.25 + Math.sin(k * 1.3 + 1) * 0.35;
        a.wr.rotation.y = k * 2;
      }
      mouth.emissiveIntensity = 2.0 + Math.sin(t * 7) * 0.25 + Math.sin(t * 13) * 0.15;
    },
    setNight(n, dusk) { glow.intensity = 30 + dusk * 80; },
  };
}

// ------------------------------------------------------------ 05 · project billboards
export function billboard(p, i) {
  const g = new THREE.Group();
  const c = canvas(1280, 720, (x, w, h) => {
    const bg = x.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, '#0b0f14');
    bg.addColorStop(1, '#141c26');
    x.fillStyle = bg;
    x.fillRect(0, 0, w, h);
    x.fillStyle = '#f5c518';
    x.fillRect(0, 0, 14, h);
    x.font = `400 200px ${FONT_SERIF}`;
    x.fillStyle = 'rgba(245,197,24,0.16)';
    x.textAlign = 'right';
    x.fillText('0' + (i + 1), w - 50, 210);
    x.textAlign = 'left';
    x.fillStyle = '#f5c518';
    x.font = `600 28px ${FONT_MONO}`;
    x.fillText(p.category.toUpperCase(), 70, 100);
    x.fillStyle = '#fff';
    x.font = `400 96px ${FONT_SERIF}`;
    const words = p.title.split(' ');
    let line = '', y = 210;
    for (const wd of words) {
      if (x.measureText(line + wd).width > w - 200) { x.fillText(line, 70, y); line = ''; y += 96; }
      line += wd + ' ';
    }
    x.fillText(line, 70, y);
    x.fillStyle = '#9fb0c2';
    x.font = `500 30px ${FONT_SANS}`;
    const wrap = (txt, yy, maxW) => {
      let ln = '';
      for (const wd of txt.split(' ')) {
        if (x.measureText(ln + wd).width > maxW) { x.fillText(ln, 70, yy); ln = ''; yy += 42; }
        ln += wd + ' ';
      }
      x.fillText(ln, 70, yy);
      return yy;
    };
    const yy = wrap(p.outcome, y + 80, w - 160);
    let cx = 70;
    x.font = `600 24px ${FONT_MONO}`;
    for (const t of p.tech) {
      const tw = x.measureText(t).width + 36;
      x.strokeStyle = 'rgba(245,197,24,0.6)';
      x.lineWidth = 2;
      x.strokeRect(cx, yy + 50, tw, 48);
      x.fillStyle = '#f5c518';
      x.fillText(t, cx + 18, yy + 83);
      cx += tw + 14;
    }
  });
  const t = tex(c);
  const frame = pbr('steel', { color: 0x3a4046 });
  for (const x of [-2.8, 2.8]) mesh(new THREE.BoxGeometry(0.3, 6, 0.3), frame, x, 3, -0.2, g);
  mesh(new THREE.BoxGeometry(9.2, 5.3, 0.35), frame, 0, 8.2, -0.25, g);
  const screen = std({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.35 });
  mesh(new THREE.PlaneGeometry(8.8, 4.95), screen, 0, 8.2, -0.06, g);
  // catwalk lamps
  for (const x of [-3, 0, 3]) mesh(new THREE.BoxGeometry(0.5, 0.15, 0.4), std({ color: 0x222, emissive: 0xfff2d0, emissiveIntensity: 1 }), x, 5.4, 0.5, g);
  return { group: g, radius: 6, setNight(n) { screen.emissiveIntensity = 0.9 + n * 0.6; } };
}

// ------------------------------------------------------------ 06 · the toolbox crates
export function toolCrates(tools) {
  const g = new THREE.Group();
  const r = rng(606);
  const plank = (label, sub) =>
    tex(
      canvas(256, 256, (c, w) => {
        c.drawImage(TEX.wood_col.image, 0, 0, w, w);
        c.strokeStyle = 'rgba(70,45,22,0.85)';
        c.lineWidth = 16;
        c.strokeRect(8, 8, w - 16, w - 16);
        c.beginPath(); c.moveTo(16, 16); c.lineTo(w - 16, w - 16); c.stroke();
        if (label) {
          c.fillStyle = 'rgba(20,16,12,0.86)';
          c.fillRect(30, 86, w - 60, 86);
          c.fillStyle = '#f5c518';
          let size = 40;
          c.font = `800 ${size}px ${FONT_SANS}`;
          while (c.measureText(label).width > w - 80 && size > 18) { size -= 2; c.font = `800 ${size}px ${FONT_SANS}`; }
          c.textAlign = 'center';
          c.fillText(label, w / 2, 128);
          c.fillStyle = '#d9cbb3';
          c.font = `500 15px ${FONT_MONO}`;
          c.fillText(sub, w / 2, 156);
        }
      })
    );
  const side = pbr('wood', { repeat: [1, 1] });
  const S = 1.5;
  const rows = [5, 4, 3];
  let k = 0;
  rows.forEach((n, row) => {
    for (let i = 0; i < n && k < tools.length; i++, k++) {
      const [name, sub] = tools[k];
      const front = std({ map: plank(name, sub), normalMap: TEX.wood_nor, roughness: 0.85 });
      const m = mesh(new THREE.BoxGeometry(S, S, S), [side, side, side, side, front, side], (i - (n - 1) / 2) * (S + 0.06), S / 2 + row * S, (r() - 0.5) * 0.15, g);
      m.rotation.y = (r() - 0.5) * 0.12;
    }
  });
  // pallet
  mesh(new THREE.BoxGeometry(5 * S + 1, 0.15, S + 0.6), std({ color: 0x8a6a42, roughness: 1 }), 0, 0.07, 0, g).position.y = -0.0;
  return { group: g, radius: 6 };
}
