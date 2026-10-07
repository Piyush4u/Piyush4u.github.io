import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { createEnvironment, GradeShader } from './env.js';
import { loadTextures } from './materials.js';
import { clamp, lerp, smooth, easeInOut, remap, nextFrame } from './util.js';
import { buildRoute, buildWorld, buildBridge, RIVER, WALK_OUT } from './world.js';
import { buildTaxi } from './taxi.js';
import { loadCar } from './car.js';
import { loadKit } from './kit.js';
import { mergeStatic, warmUp, chunkedInstances, DistanceCuller } from './perf.js';
import { place, chaiStall, paperMountain, kpiTower, pharmacy, steelPlant, billboard, toolCrates } from './landmarks.js';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const loaderBar = $('#loader-bar');
const loaderNote = $('#loader-note');
const T0 = performance.now();
const setLoad = (p, note) => {
  if (location.search.includes('debug')) console.log('STAGE', (performance.now() - T0).toFixed(0), p, note);
  if (loaderBar) loaderBar.style.transform = `scaleX(${p})`;
  if (note && loaderNote) loaderNote.textContent = note;
};

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGL2RenderingContext && c.getContext('webgl2'));
  } catch {
    return false;
  }
}

const PROJECTS = [
  { title: 'Procurement Audit Automation', category: 'Intelligent Automation', tech: ['Python', 'SAP GUI Scripting', 'SQL'], outcome: 'Real-time audit data extraction and validation — compliance checks that used to take days now run on their own.' },
  { title: 'Vendor Analytics Dashboard', category: 'Business Intelligence', tech: ['Power BI', 'DAX', 'PostgreSQL'], outcome: 'Vendor performance tracking with anomaly detection, so supply-chain risk shows up before it costs money.' },
  { title: 'SAP Reporting Pipeline', category: 'Data Engineering', tech: ['Python', 'SAP', 'Data Warehousing'], outcome: 'One unified pipeline that generates and distributes the reports people used to stitch together by hand.' },
  { title: 'Document Processing Engine', category: 'AI & Data Processing', tech: ['Python', 'OCR', 'LLM'], outcome: 'An OCR + LLM pipeline that turns piles of physical records into clean, structured data.' },
];
const TOOLS = [
  ['Python', 'bots · scrapers · ML'], ['SAP GUI', 'scripting'], ['Power BI', 'DAX · models'], ['SQL', 'Postgres · MSSQL'], ['Power Automate', 'flows'],
  ['FastAPI', 'services'], ['Django', 'web apps'], ['React', 'frontends'], ['OCR + LLM', 'documents'],
  ['Selenium', 'web automation'], ['Git', 'versioning'], ['Figma', 'interfaces'],
];

async function main() {
  if (!webglAvailable()) {
    document.documentElement.classList.add('static');
    $('#loader')?.remove();
    return;
  }
  const isMobile = matchMedia('(max-width: 760px), (pointer: coarse)').matches;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  setLoad(0.08, 'Loading type…');
  await Promise.race([
    Promise.all([
      document.fonts.load('400 40px "Instrument Serif"'),
      document.fonts.load('800 40px "Manrope"'),
      document.fonts.load('600 20px "JetBrains Mono"'),
    ]),
    new Promise((r) => setTimeout(r, 2500)),
  ]).catch(() => {});

  // ---------------------------------------------------------------- renderer
  const canvasEl = $('#scene');
  const renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, powerPreference: 'high-performance', stencil: false });
  // Quality tier: 2 = high (discrete GPU), 1 = medium (integrated / unknown), 0 = low (phones, tablets).
  // A frame-rate governor below can only step it down from here, never up, so it never thrashes.
  const gpuName = (() => {
    try {
      const gl = renderer.getContext();
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      return String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
    } catch { return ''; }
  })();
  const qParam = new URLSearchParams(location.search).get('q');
  let tier = isMobile ? 0 : /Intel|Mali|Adreno|PowerVR|SwiftShader|llvmpipe|Software|Basic Render|Radeon\(TM\) Graphics|Vega \d+ Graphics/i.test(gpuName) ? 1 : 2;
  if (qParam) tier = { low: 0, med: 1, medium: 1, high: 2 }[qParam] ?? tier;
  const dpr = window.devicePixelRatio || 1;
  let pixelRatio = Math.min(dpr, [isMobile ? 1.25 : 1, 1.25, 1.5][tier]);
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = tier === 0 ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false; // updated only when something moves (see loop)

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xe8b9a0, 0.004);
  const camera = new THREE.PerspectiveCamera(isMobile ? 55 : 42, innerWidth / innerHeight, 0.3, 700);
  camera.layers.enable(1); // layer 1 = fine detail, skipped by the river's reflection pass

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const sky = new Sky();
  sky.scale.setScalar(10000);
  scene.add(sky);
  const skyU = sky.material.uniforms;
  skyU.mieDirectionalG.value = 0.8;

  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  const shadowRes = tier === 0 ? 1024 : 2048;
  sun.shadow.mapSize.set(shadowRes, shadowRes);
  const sc = sun.shadow.camera;
  sc.left = -45; sc.right = 45; sc.top = 45; sc.bottom = -45; sc.near = 60; sc.far = 260;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.04;
  scene.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(0xbcd6ff, 0x4b4a3a, 0.8);
  scene.add(hemi);

  setLoad(0.12, 'Mixing paint…');
  // textures first (the kit's street props borrow the steel material), then the env + models in parallel
  let assets = null;
  const kitJob = loadTextures(renderer, (k) => setLoad(0.08 + k * 0.12, 'Mixing paint…')).then(() =>
    loadKit((k) => setLoad(0.2 + k * 0.12, 'Building the street…')).catch((e) => {
      console.warn('Street assets failed to load; falling back to the procedural city', e);
      return null;
    })
  );
  const [env] = await Promise.all([
    createEnvironment(renderer, { steps: tier === 0 ? 2 : 4 }),
    kitJob.then((k) => { assets = k; }),
  ]);
  env.update(0, scene);
  setLoad(0.34, 'Laying the road…');
  await nextFrame();
  const route = buildRoute();

  // ---------------------------------------------------------------- story stops
  // u = position on the road; side = which side the landmark sits on.
  const U = (z) => route.uAtZ(z);
  const STOPS = [
    { id: 'intro', u: U(8), creep: 0.004, hold: 0.04,
      cam: { pos: [-4.2, 1.5, 7.2], look: [1.6, 1.0, 0.2] }, mob: { pos: [-3.5, 2.2, 9.5], look: [0.4, 1.2, 0] } },
    { id: 'ch1', u: U(-82), side: 1, creep: 0.006,
      cam: { pos: [-3.2, 2.3, -6.5], look: [8, 3.4, 5] }, mob: { pos: [-3.5, 3, -9], look: [7, 3.5, 4] } },
    { id: 'ch2', u: U(-170), side: -1, creep: 0.006,
      cam: { pos: [5.2, 1.6, -17], look: [-12, 10, 6] }, mob: { pos: [4, 1.5, -12], look: [-12, 13, 7] } },
    { id: 'ch3', u: U(-262), side: 1, creep: 0.006,
      cam: { pos: [-4.2, 2.3, -11.5], look: [9, 4.6, 3] }, mob: { pos: [-3.6, 2.6, -9], look: [8, 4, 4] } },
    { id: 'ch4', u: U(-350), side: -1, creep: 0.008, hold: 0.07,
      cam: { pos: [5, 5.5, -13], look: [-30, 9, 12] }, mob: { pos: [6, 7, -18], look: [-30, 11, 8] } },
    { id: 'work', u: U(-430), side: 1, creep: 0.06, hold: 0.13,
      cam: { pos: [-2.8, 3.2, -8], look: [9, 5.5, 12] }, mob: { pos: [-2.5, 3.5, -10], look: [8, 6.5, 13] } },
    { id: 'tools', u: U(-520), side: -1, creep: 0.006,
      cam: { pos: [3.4, 2, -5.5], look: [-8, 2.6, 4] }, mob: { pos: [3.8, 2.6, -9], look: [-8, 2.8, 2] } },
    { id: 'contact', u: U((RIVER.zNear + RIVER.zFar) / 2 + 8), creep: 0.01, hold: 0.09,
      cam: { pos: [42, 4.5, 44], look: [-4, 7, -18] }, mob: { pos: [44, 6, 60], look: [-2, 9, -16] } },
  ];
  const CHASE = { pos: [0, 2.7, -9], look: [0, 1.2, 8] };

  // scroll timeline: hold → travel → hold → ...
  const defaultHold = 0.055;
  const holdTotal = STOPS.reduce((a, s) => a + (s.hold ?? defaultHold), 0);
  const travel = (1 - holdTotal) / (STOPS.length - 1);
  let acc = 0;
  STOPS.forEach((s, i) => {
    s.hold = s.hold ?? defaultHold;
    s.p0 = acc;
    s.p1 = acc + s.hold;
    acc = s.p1 + (i < STOPS.length - 1 ? travel : 0);
  });
  STOPS[STOPS.length - 1].p1 = 1;

  function timeline(p) {
    for (let i = 0; i < STOPS.length; i++) {
      const s = STOPS[i];
      if (p <= s.p1 || i === STOPS.length - 1) {
        if (p >= s.p0) {
          const k = remap(p, s.p0, s.p1);
          return { i, hold: true, k, u: s.u - s.creep / 2 + s.creep * k };
        }
        const a = STOPS[i - 1];
        const k = remap(p, a.p1, s.p0);
        const e = easeInOut(k);
        return { i: i - 1, hold: false, k, u: lerp(a.u + a.creep / 2, s.u - s.creep / 2, e) };
      }
    }
  }

  // ---------------------------------------------------------------- build world
  const exclusions = [];
  const landmarks = [];
  const addLandmark = (lm, u, side, dist) => {
    place(route, lm.group, u, side, dist);
    mergeStatic(lm.group); // hundreds of parts -> a handful of draw calls
    lm.group.userData.cull = lm.radius > 30 ? 460 : 380;
    lm.group.traverse((o) => { if (!o.isLight) o.layers.set(1); }); // not needed in the river reflection
    scene.add(lm.group);
    const c = (lm.center || new THREE.Vector3()).clone().applyEuler(lm.group.rotation).add(lm.group.position);
    exclusions.push({ x: c.x, z: c.z, r: lm.radius });
    lm.worldCenter = c;
    landmarks.push(lm);
    return lm;
  };

  setLoad(0.3, 'Raising landmarks…');
  await nextFrame();
  addLandmark(chaiStall(), STOPS[0].u - 0.004, 1, WALK_OUT - 1.3);
  addLandmark(paperMountain(), STOPS[1].u + 0.004, 1, WALK_OUT + 2.6);
  addLandmark(kpiTower(), STOPS[2].u + 0.008, -1, WALK_OUT + 1.6);
  addLandmark(pharmacy(), STOPS[3].u + 0.005, 1, WALK_OUT + 1.4);
  addLandmark(steelPlant(), STOPS[4].u + 0.012, -1, WALK_OUT + 4);
  const work = STOPS[5];
  const boards = PROJECTS.map((p, i) => {
    const b = addLandmark(billboard(p, i), work.u - work.creep / 2 + 0.008 + (i * (work.creep + 0.006)) / 4, 1, WALK_OUT + 0.6);
    b.group.rotateY(0.55);
    return b;
  });
  addLandmark(toolCrates(TOOLS), STOPS[6].u + 0.004, -1, WALK_OUT + 1.6);

  setLoad(0.45, 'Painting the city…');
  await nextFrame();
  const world = buildWorld(scene, route, exclusions, { isMobile, tier }, assets);
  setLoad(0.65, 'Bolting the bridge…');
  await nextFrame();
  const bridge = buildBridge(scene, route);

  // the hero
  // the hero car (falls back to the hand-built Ambassador if the model can't load)
  setLoad(0.7, 'Rolling the Camaro out…');
  let taxi;
  try {
    taxi = await loadCar((k) => setLoad(0.7 + k * 0.08, 'Rolling the Camaro out…'));
  } catch (e) {
    console.warn('Car model failed, using the Ambassador', e);
    taxi = buildTaxi({ lights: true });
  }
  taxi.root.traverse((o) => { if (!o.isLight) o.layers.set(1); });
  scene.add(taxi.root);
  // a few parked cousins: one hand-built Ambassador, merged and instanced
  {
    const proto = buildTaxi({ lights: false });
    mergeStatic(proto.root);
    proto.root.updateMatrixWorld(true);
    const spots = [[-30, 1], [-128, -1], [-212, 1], [-300, -1], [-470, 1], [-548, -1], [-760, 1]].map(([z, side]) => {
      const f = route.frame(U(z));
      const m = new THREE.Matrix4().compose(
        f.p.clone().addScaledVector(f.r, side * 3.3),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(f.t.x, f.t.z) + (side > 0 ? 0 : Math.PI)),
        new THREE.Vector3(1, 1, 1)
      );
      return m;
    });
    proto.root.traverse((o) => {
      if (!o.isMesh) return;
      const local = o.matrixWorld.clone();
      const mats = spots.map((m) => m.clone().multiply(local));
      for (const im of chunkedInstances(o.geometry, o.material, mats, { cast: o.castShadow && !o.material.transparent, chunk: 300, cull: 260 })) {
        im.renderOrder = o.renderOrder;
        im.layers.set(1);
        scene.add(im);
      }
    });
  }

  // ---------------------------------------------------------------- post
  setLoad(0.8, 'Warming the engine…');
  await nextFrame();
  let composer = null, bloom = null, grade = null, gtao = null;
  const buildComposer = () => {
    const w = Math.floor(innerWidth * pixelRatio), h = Math.floor(innerHeight * pixelRatio);
    const wantAO = new URLSearchParams(location.search).has('ao') && tier === 2;
    const rtOpts = { type: THREE.HalfFloatType, samples: tier === 2 ? 4 : 2 };
    if (wantAO) rtOpts.depthTexture = new THREE.DepthTexture(w, h);
    const rt = new THREE.WebGLRenderTarget(w, h, rtOpts);
    composer = new EffectComposer(renderer, rt);
    composer.setPixelRatio(pixelRatio);
    composer.addPass(new RenderPass(scene, camera));
    if (wantAO) {
      try {
        gtao = new GTAOPass(scene, camera, w, h);
        gtao.setGBuffer(composer.renderTarget1.depthTexture);
        gtao.updateGtaoMaterial({ radius: 1.2, distanceExponent: 1.4, thickness: 2, scale: 1.1, samples: 8, distanceFallOff: 1 });
        gtao.blendIntensity = 0.85;
        composer.addPass(gtao);
      } catch { gtao = null; }
    }
    // bloom works on a quarter-size buffer: soft glow, a fraction of the cost
    bloom = new UnrealBloomPass(new THREE.Vector2(Math.floor(innerWidth / 4), Math.floor(innerHeight / 4)), 0.3, 0.6, 0.92);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
    grade = new ShaderPass(GradeShader);
    composer.addPass(grade);
  };
  const dropComposer = () => {
    composer?.dispose();
    composer = null;
    bloom = null;
    grade = null;
    gtao = null;
  };
  if (tier > 0) buildComposer();

  // ---------------------------------------------------------------- time of day
  const C = (h) => new THREE.Color(h);
  const TOD = [
    { p: 0.0, elev: 4, az: 120, sun: C('#ffb08a'), si: 1.6, sky: C('#a9b6d8'), gnd: C('#4a3a33'), hi: 0.55, fog: C('#e7b8a0'), fd: 0.0042, tur: 8, ray: 2.6, mie: 0.006, exp: 0.62, night: 0.05 },
    { p: 0.18, elev: 22, az: 140, sun: C('#ffe2c0'), si: 2.6, sky: C('#bcd2f0'), gnd: C('#4d4a3a'), hi: 0.8, fog: C('#d9d6d2'), fd: 0.0032, tur: 6, ray: 1.6, mie: 0.005, exp: 0.6, night: 0 },
    { p: 0.36, elev: 48, az: 170, sun: C('#fff6ea'), si: 3.2, sky: C('#c4dcff'), gnd: C('#4f553e'), hi: 0.95, fog: C('#c8d6e2'), fd: 0.003, tur: 4, ray: 1.2, mie: 0.004, exp: 0.55, night: 0 },
    { p: 0.52, elev: 18, az: 220, sun: C('#ffc684'), si: 2.8, sky: C('#c8c4d8'), gnd: C('#55463a'), hi: 0.75, fog: C('#e4c39f'), fd: 0.0032, tur: 7, ray: 2, mie: 0.006, exp: 0.6, night: 0 },
    { p: 0.66, elev: 6, az: 245, sun: C('#ff9a52'), si: 2.2, sky: C('#b9a6c8'), gnd: C('#4a3530'), hi: 0.6, fog: C('#d9946f'), fd: 0.0036, tur: 9, ray: 3, mie: 0.008, exp: 0.66, night: 0.15 },
    { p: 0.78, elev: 0.5, az: 255, sun: C('#ff6a3a'), si: 1.0, sky: C('#7f74a6'), gnd: C('#2e2430'), hi: 0.45, fog: C('#8a5a63'), fd: 0.0042, tur: 10, ray: 3.6, mie: 0.01, exp: 0.78, night: 0.55 },
    { p: 0.88, elev: -4, az: 262, sun: C('#7f8cff'), si: 0.35, sky: C('#3c4a80'), gnd: C('#151522'), hi: 0.35, fog: C('#232a48'), fd: 0.0042, tur: 10, ray: 1.5, mie: 0.005, exp: 0.95, night: 0.92 },
    { p: 1.0, elev: -9, az: 270, sun: C('#9fb2ff'), si: 0.3, sky: C('#2a3768'), gnd: C('#0e0f18'), hi: 0.3, fog: C('#141a33'), fd: 0.0036, tur: 10, ray: 0.6, mie: 0.004, exp: 1.0, night: 1 },
  ];
  const tod = { sun: new THREE.Color(), sky: new THREE.Color(), gnd: new THREE.Color(), fog: new THREE.Color() };
  function sampleTOD(p) {
    let i = 0;
    while (i < TOD.length - 2 && p > TOD[i + 1].p) i++;
    const a = TOD[i], b = TOD[i + 1];
    const k = smooth(remap(p, a.p, b.p));
    for (const key of ['elev', 'az', 'si', 'hi', 'fd', 'tur', 'ray', 'mie', 'exp', 'night']) tod[key] = lerp(a[key], b[key], k);
    for (const key of ['sun', 'sky', 'gnd', 'fog']) tod[key].copy(a[key]).lerp(b[key], k);
    return tod;
  }
  const sunDir = new THREE.Vector3(), lightDir = new THREE.Vector3(), moonDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(62), THREE.MathUtils.degToRad(200));
  const cloudTint = new THREE.Color();

  // ---------------------------------------------------------------- DOM story
  const panels = $$('.panel[data-stop]');
  const subs = $$('.proj');
  const projCount = $('#proj-count');
  const rail = $$('.rail a');
  const progressEl = $('#progress');
  const hint = $('#scroll-hint');
  rail.forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const s = STOPS[+a.dataset.stop];
      jumpTo(s.p0 + s.hold * 0.4);
    });
  });
  $$('[data-jump]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const s = STOPS.find((x) => x.id === a.dataset.jump);
      if (s) jumpTo(s.p0 + s.hold * 0.4);
    })
  );
  function maxScroll() { return document.documentElement.scrollHeight - innerHeight; }
  function jumpTo(p) { window.scrollTo({ top: p * maxScroll(), behavior: reduceMotion ? 'auto' : 'smooth' }); }

  // Only touch the DOM when a value actually changes (style writes are not free).
  const panelState = panels.map(() => ({ o: -1, y: 0, vis: '', live: null }));
  let lastIdx = -1, lastActive = -1, lastProg = -1, lastHint = -1;
  function updatePanels(p) {
    STOPS.forEach((s, i) => {
      const el = panels[i];
      if (!el) return;
      const fadeIn = i === 0 ? -1 : 0.022, fadeOut = i === STOPS.length - 1 ? -1 : 0.022;
      let o = 1;
      if (fadeIn > 0) o = Math.min(o, remap(p, s.p0 - fadeIn, s.p0));
      if (fadeOut > 0) o = Math.min(o, 1 - remap(p, s.p1, s.p1 + fadeOut));
      o = Math.round(clamp(o) * 500) / 500;
      const st = panelState[i];
      if (o === st.o) return;
      st.o = o;
      el.style.opacity = String(o);
      el.style.transform = `translate3d(0, ${((1 - o) * (p < s.p0 ? 28 : -28)).toFixed(1)}px, 0)`;
      const vis = o < 0.01 ? 'hidden' : 'visible';
      if (vis !== st.vis) { st.vis = vis; el.style.visibility = vis; }
      const live = o > 0.6;
      if (live !== st.live) { st.live = live; el.classList.toggle('live', live); }
    });
    const k = remap(p, work.p0, work.p1);
    const idx = Math.min(PROJECTS.length - 1, Math.floor(k * PROJECTS.length));
    if (idx !== lastIdx) {
      lastIdx = idx;
      subs.forEach((s, i) => s.classList.toggle('on', i === idx));
      if (projCount) projCount.textContent = `${idx + 1} / ${PROJECTS.length}`;
    }
    let active = 0;
    STOPS.forEach((s, i) => { if (p >= s.p0 - 0.03) active = i; });
    if (active !== lastActive) {
      lastActive = active;
      rail.forEach((a, i) => a.classList.toggle('on', i === active));
    }
    const prog = Math.round(p * 1000) / 1000;
    if (prog !== lastProg && progressEl) { lastProg = prog; progressEl.style.transform = `scaleX(${prog})`; }
    const hv = Math.round((1 - remap(p, 0.005, 0.03)) * 100) / 100;
    if (hv !== lastHint && hint) { lastHint = hv; hint.style.opacity = String(hv); }
  }

  // ---------------------------------------------------------------- camera rig
  const f = {};
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
  const tmpA = { pos: [0, 0, 0], look: [0, 0, 0] };
  const mixShot = (a, b, k, out = tmpA) => {
    for (let j = 0; j < 3; j++) {
      out.pos[j] = lerp(a.pos[j], b.pos[j], k);
      out.look[j] = lerp(a.look[j], b.look[j], k);
    }
    return out;
  };
  const shotOf = (s) => (isMobile ? s.mob : s.cam);
  function cameraShot(tl) {
    const s = STOPS[tl.i];
    if (tl.hold) {
      // the project stretch slowly pans as billboards slide past
      return shotOf(s);
    }
    const n = STOPS[tl.i + 1];
    const k = tl.k;
    if (k < 0.4) return mixShot(shotOf(s), CHASE, smooth(k / 0.4));
    if (k > 0.6) return mixShot(CHASE, shotOf(n), smooth((k - 0.6) / 0.4));
    return CHASE;
  }
  const toWorld = (v, frame, out) =>
    out.copy(frame.p).addScaledVector(frame.r, v[0]).addScaledVector(new THREE.Vector3(0, 1, 0), v[1]).addScaledVector(frame.t, v[2]);

  // ---------------------------------------------------------------- loop state
  let target = 0, current = 0, lastU = STOPS[0].u, speed = 0;
  const readScroll = () => { target = clamp(scrollY / Math.max(1, maxScroll())); };
  addEventListener('scroll', readScroll, { passive: true });
  readScroll();
  current = target;
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener('pointermove', (e) => {
    mouse.x = e.clientX / innerWidth - 0.5;
    mouse.y = e.clientY / innerHeight - 0.5;
  });

  // On phones the address bar slides in and out while scrolling, firing resize events.
  // Reallocating every render target each time causes visible hitches, so height-only
  // changes are ignored (the canvas is sized to the large viewport in CSS) and real
  // resizes are debounced.
  let lastW = innerWidth, lastH = innerHeight, resizeTimer = 0;
  addEventListener('resize', () => {
    const w = innerWidth, h = innerHeight;
    if (w === lastW && Math.abs(h - lastH) < Math.max(160, lastH * 0.2)) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      lastW = innerWidth;
      lastH = innerHeight;
      camera.aspect = lastW / lastH;
      camera.fov = lastW < 760 ? 55 : 42;
      camera.updateProjectionMatrix();
      renderer.setSize(lastW, lastH, false);
      composer?.setSize(lastW, lastH);
    }, 150);
  });

  const adaptive = !new URLSearchParams(location.search).has('still');
  const debug = new URLSearchParams(location.search).has('debug');
  // ?fps shows a tiny meter (frame rate, quality tier, render scale) for testing on real devices
  const fpsEl = new URLSearchParams(location.search).has('fps') ? document.body.appendChild(Object.assign(document.createElement('div'), {
    style: 'position:fixed;left:8px;bottom:8px;z-index:99;font:600 12px/1.4 ui-monospace,monospace;color:#f5c518;background:rgba(0,0,0,.6);padding:4px 8px;border-radius:6px;pointer-events:none',
  })) : null;
  let fpsFrames = 0, fpsTime = 0;
  if (debug) {
    renderer.info.autoReset = false;
    window.__perf = { renderer, scene, camera, frameMs: [], makeFrustum: (c) => new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse)) };
  }
  const clock = new THREE.Clock();
  let frames = 0, fpsT = 0, frameNo = 0, lastDrop = 0;
  const notches = [
    () => { if (pixelRatio > 1) { pixelRatio = Math.max(1, pixelRatio - 0.25); return true; } },
    () => { if (bloom?.enabled) { bloom.enabled = false; return true; } },
    () => { if (world.water && world.reflections !== false) { world.reflections = false; return true; } },
    () => { if (sun.shadow.mapSize.x > 1024) { sun.shadow.mapSize.set(1024, 1024); sun.shadow.map?.dispose(); sun.shadow.map = null; return true; } },
    () => { if (composer) { dropComposer(); return true; } },
    () => { if (pixelRatio > 0.8) { pixelRatio = 0.8; return true; } },
  ];
  function degrade() {
    for (const n of notches) {
      const pr = pixelRatio;
      if (n()) {
        if (pixelRatio !== pr) {
          renderer.setPixelRatio(pixelRatio);
          composer?.setPixelRatio(pixelRatio);
        }
        return;
      }
    }
  }
  function frame() {
    const rawDt = clock.getDelta();
    const dt = Math.min(rawDt, 0.05);
    const t = clock.elapsedTime;
    current = reduceMotion ? target : lerp(current, target, 1 - Math.exp(-dt * 3.2));
    if (Math.abs(current - target) < 0.00002) current = target;

    const tl = timeline(current);
    route.frame(tl.u, f);
    // taxi
    const du = tl.u - lastU;
    lastU = tl.u;
    const dist = du * route.length;
    speed = lerp(speed, dist / Math.max(dt, 1e-3), 0.1);
    taxi.root.position.copy(f.p);
    taxi.root.rotation.y = Math.atan2(f.t.x, f.t.z);
    taxi.spin(dist);
    taxi.body.position.y = Math.sin(t * 31) * 0.004 + Math.min(Math.abs(speed), 20) * Math.sin(t * 13) * 0.0006;
    taxi.body.rotation.x = clamp(-speed * 0.0015, -0.03, 0.03);

    // camera
    const shot = cameraShot(tl);
    mouse.sx = lerp(mouse.sx, mouse.x, 0.05);
    mouse.sy = lerp(mouse.sy, mouse.y, 0.05);
    toWorld(shot.pos, f, camPos);
    toWorld(shot.look, f, camLook);
    camPos.addScaledVector(f.r, mouse.sx * 0.8).y += -mouse.sy * 0.4 + Math.sin(t * 0.6) * 0.04;
    camPos.y = Math.max(camPos.y, 0.6);
    camera.position.copy(camPos);
    camera.lookAt(camLook);

    // light & sky
    const d = sampleTOD(current);
    const phi = THREE.MathUtils.degToRad(90 - d.elev);
    const theta = THREE.MathUtils.degToRad(d.az);
    sunDir.setFromSphericalCoords(1, phi, theta);
    skyU.sunPosition.value.copy(sunDir);
    skyU.turbidity.value = d.tur;
    skyU.rayleigh.value = d.ray;
    skyU.mieCoefficient.value = d.mie;
    // light comes from at least 25° up so the night still has moonlit shadows
    lightDir.setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - Math.max(d.elev, 24)), theta);
    sun.position.copy(f.p).addScaledVector(lightDir, 150);
    sun.target.position.copy(f.p);
    sun.color.copy(d.sun);
    sun.intensity = d.si;
    hemi.color.copy(d.sky);
    hemi.groundColor.copy(d.gnd);
    hemi.intensity = d.hi * 0.45;
    scene.fog.color.copy(d.fog);
    scene.fog.density = d.fd;
    env.update(current, scene);
    scene.environmentIntensity = lerp(0.9, 0.55, d.night);
    if (grade) grade.uniforms.time.value = t;
    renderer.toneMappingExposure = d.exp;
    const n = d.night;
    world.setNight(n);
    bridge.setNight(n);
    taxi.setNight(clamp(n * 1.3));
    world.sky.moon.position.copy(camera.position).addScaledVector(moonDir, 590);
    world.sky.moonGlow.position.copy(world.sky.moon.position);
    world.sky.stars.position.copy(camera.position);
    world.clouds.position.set(camera.position.x, 0, camera.position.z);
    cloudTint.copy(d.sun).lerp(d.fog, 0.55).multiplyScalar(lerp(1.0, 0.18, n));
    world.tintClouds(cloudTint, lerp(0.75, 0.25, n));
    if (bloom) bloom.strength = 0.2 + n * 0.45;

    for (const lm of landmarks) {
      const near = lm.worldCenter.distanceToSquared(camera.position) < 140 * 140;
      lm.update?.(t, near);
      lm.setNight?.(n, clamp(1 - Math.abs(current - 0.42) * 6));
    }
    for (const u of world.update) u(t, camera);

    updatePanels(current);
    culler.update(camera.position);
    // shadows: every frame while the car moves; at a standstill a gentle 15 Hz keeps
    // the swaying trees and robot arms honest
    const moving = Math.abs(dist) > 1e-4;
    frameNo++;
    if (moving || frameNo % (tier === 0 ? 6 : 4) === 0) renderer.shadowMap.needsUpdate = true;
    const t0 = debug ? performance.now() : 0;
    if (debug) renderer.info.reset();
    if (composer) composer.render();
    else renderer.render(scene, camera);
    if (debug) window.__perf.frameMs.push(performance.now() - t0);

    if (fpsEl) {
      fpsFrames++;
      fpsTime += rawDt;
      if (fpsTime > 0.5) {
        fpsEl.textContent = `${Math.round(fpsFrames / fpsTime)} fps · tier ${tier} · ${pixelRatio.toFixed(2)}x${composer ? '' : ' · direct'}`;
        fpsFrames = 0;
        fpsTime = 0;
      }
    }
    // governor: if we can't hold ~55 fps, shed cost one notch at a time (never back up)
    if (adaptive && !document.hidden) {
      frames++;
      fpsT += rawDt;
      if (fpsT > 2) {
        const fps = frames / fpsT;
        if (fps < 52 && t - lastDrop > 3) { degrade(); lastDrop = t; }
        frames = 0;
        fpsT = 0;
      }
    }
    requestAnimationFrame(frame);
  }

  setLoad(0.92, 'Warming up the GPU…');
  await nextFrame();
  const culler = new DistanceCuller(scene);
  // compile every shader and upload every mesh and texture now, not mid-scroll
  renderer.shadowMap.needsUpdate = true;
  await warmUp(renderer, scene, camera, () => { renderer.shadowMap.needsUpdate = true; });
  if (composer) composer.render();
  renderer.shadowMap.needsUpdate = true;
  setLoad(1, 'Ready. Hop in.');
  requestAnimationFrame(frame);
  await nextFrame();
  await nextFrame();
  document.documentElement.classList.add('ready');
  setTimeout(() => $('#loader')?.remove(), 1600);
  window.__story = { STOPS, jumpTo };
}

main().catch((err) => {
  console.error(err);
  document.documentElement.classList.add('static');
  $('#loader')?.remove();
});
