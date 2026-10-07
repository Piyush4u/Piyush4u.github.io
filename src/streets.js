import * as THREE from 'three';

// Lays the road-kit and building assets into the city: side streets that branch off
// the main road (assembled from the kit's road pieces), the buildings that line them,
// traffic signals, stop and speed signs, and bus shelters.

const yawTo = (dir) => Math.atan2(dir.x, dir.z); // yaw that turns local +z toward dir

export function planStreets({ route, kit, exclusions, rng, ROAD_HALF, WALK_OUT, RIVER }) {
  const L = route.length;
  const f = {}, g = {};
  const gaps = { '-1': [], '1': [] };
  const lampHeads = []; // world positions of lamp heads we add here (for night glow)
  const landmarks = exclusions.slice();
  const clearOfLandmarks = (p, pad) => landmarks.every((e) => Math.hypot(e.x - p.x, e.z - p.z) > e.r + pad);
  const straight = (s) => {
    route.frame((s - 16) / L, f);
    const a = f.t.clone();
    route.frame((s + 16) / L, g);
    return a.angleTo(g.t) < 0.085;
  };

  // ---------------------------------------------------------------- choose junctions
  const plan = [];
  const kinds = ['street', 'boulevard', 'street'];
  let last = -1e9;
  for (let s = 60; s < L - 80 && plan.length < kinds.length; s += 5) {
    if (s - last < 110 || !straight(s)) continue;
    route.frame(s / L, f);
    if (f.p.z < RIVER.zNear + 60) continue;
    const kind = kinds[plan.length];
    const W = kind === 'boulevard' ? kit.roads.boulevard.size.x : kit.roads.road.size.x;
    const len = kind === 'boulevard' ? kit.roads.boulevard.size.z : 105;
    if (kind === 'boulevard' && !kit.roads.boulevard) continue;
    for (const side of plan.length % 2 ? [-1, 1] : [1, -1]) {
      const d = f.r.clone().multiplyScalar(side);
      let ok = true;
      for (let k = 0; k <= len + 20 && ok; k += 6) {
        const p = f.p.clone().addScaledVector(d, ROAD_HALF + k);
        ok = clearOfLandmarks(p, W / 2 + 8);
      }
      if (!ok) continue;
      plan.push({ s, side, kind, W, P: f.p.clone(), R: f.r.clone(), T: f.t.clone(), d });
      last = s;
      break;
    }
  }

  // ---------------------------------------------------------------- build each side street
  const bigFirst = kit.buildings.filter((b) => b.kind === 'block').sort((a, b) => b.size.x - a.size.x);
  const pickBuilding = (maxW) => {
    const fits = kit.buildings.filter((b) => b.size.x <= maxW && b.kind === 'block');
    return fits.length ? fits[Math.floor(rng() * fits.length)] : null;
  };
  for (const j of plan) {
    const { d, W, side } = j;
    const lat = new THREE.Vector3(-d.z, 0, d.x);
    const M = j.P.clone().addScaledVector(d, ROAD_HALF).setY(0.006);
    gaps[side].push([j.s - W / 2 - 0.3, j.s + W / 2 + 0.3]);
    const seq = j.kind === 'boulevard' ? ['boulevard'] : ['crossing', 'road', 'manhole', 'crossroad', 'old', 'road', 'entrance'];
    let acc = 0;
    const yawAlong = yawTo(d.clone().negate()); // piece's local -z runs away from the main road
    for (const key of seq) {
      const pf = kit.roads[key];
      if (!pf) continue;
      const m = pf.place(M.clone().addScaledVector(d, acc), yawAlong);
      for (const t of pf.tips) lampHeads.push(t.clone().applyMatrix4(m));
      acc += pf.size.z;
    }
    j.length = acc;
    // keep everything else out of the street
    for (let k = -2; k <= acc + 2; k += 4) {
      const p = M.clone().addScaledVector(d, k);
      exclusions.push({ x: p.x, z: p.z, r: W / 2 + 0.6 });
    }

    // buildings lining both sides, fronts on the street's footpaths
    for (const ss of [-1, 1]) {
      let a = 16;
      while (a < acc - 6) {
        const pf = pickBuilding(Math.min(34, acc - a - 2));
        if (!pf) break;
        const w = pf.size.x, depth = pf.size.z;
        const face = lat.clone().multiplyScalar(-ss); // toward the street axis
        const front = M.clone().addScaledVector(d, a + w / 2).addScaledVector(lat, ss * (W / 2 + 0.3)).setY(0);
        const centre = front.clone().addScaledVector(face, -depth / 2);
        let ok = clearOfLandmarks(centre, Math.hypot(w, depth) / 2) && route.distToRoad(centre.x, centre.z) > WALK_OUT + depth / 2;
        for (const [cx, cz] of [[-w / 2, 0], [w / 2, 0], [-w / 2, -depth], [w / 2, -depth]]) {
          const c = front.clone().addScaledVector(d, cx).addScaledVector(face, cz);
          if (route.distToRoad(c.x, c.z) < WALK_OUT + 0.8) ok = false;
        }
        if (ok) {
          pf.place(front, yawTo(face));
          exclusions.push({ x: centre.x, z: centre.z, r: Math.min(w, depth) * 0.55 });
        }
        a += w + 0.4 + rng() * 1.5;
      }
    }
    // a building closing the vista at the far end
    {
      const pf = bigFirst.find((b) => b.size.x >= W + 4) || bigFirst[0];
      const front = M.clone().addScaledVector(d, acc + 1.5).setY(0);
      const centre = front.clone().addScaledVector(d, pf.size.z / 2);
      if (clearOfLandmarks(centre, pf.size.x / 2)) {
        pf.place(front, yawTo(d.clone().negate()));
        exclusions.push({ x: centre.x, z: centre.z, r: Math.max(pf.size.x, pf.size.z) * 0.55 });
      }
    }
    // street lamps along the side street (the boulevard brings its own median lamps)
    if (j.kind === 'street' && kit.props.lamp) {
      for (let a = 10; a < acc - 4; a += 24) {
        for (const ss of [-1, 1]) {
          const pos = M.clone().addScaledVector(d, a + (ss > 0 ? 0 : 12)).addScaledVector(lat, ss * (W / 2 - 0.45)).setY(0.19);
          const m = kit.props.lamp.place(pos, yawTo(lat.clone().multiplyScalar(-ss)));
          for (const t of kit.props.lamp.tips) lampHeads.push(t.clone().applyMatrix4(m));
        }
      }
    }
    // signals on the main road either side of the mouth, arms over the carriageway
    if (kit.props.signal) {
      for (const ds of [-1, 1]) {
        route.frame((j.s + ds * (W / 2 + 1.6)) / L, g);
        const pos = g.p.clone().addScaledVector(g.r, side * (ROAD_HALF + 0.55)).setY(0.16);
        kit.props.signal.place(pos, yawTo(g.r.clone().multiplyScalar(-side)));
        exclusions.push({ x: pos.x, z: pos.z, r: 1.5 });
      }
    }
    // stop sign for traffic leaving the side street
    if (kit.props.stop) {
      const pos = M.clone().addScaledVector(d, 4).addScaledVector(lat, W / 2 - 0.7).setY(0.19);
      kit.props.stop.place(pos, yawTo(d));
    }
  }

  // ---------------------------------------------------------------- main-road furniture
  const inGap = (s, side) => gaps[side].some(([a, b]) => s > a - 8 && s < b + 8);
  // bus shelters on the footpath, opening onto the road
  let shelters = 0;
  for (let s = 120; s < L - 120 && shelters < 2 && kit.props.busstop; s += 7) {
    const side = shelters % 2 ? -1 : 1;
    if (inGap(s, side) || !straight(s)) continue;
    route.frame(s / L, f);
    const pos = f.p.clone().addScaledVector(f.r, side * ((ROAD_HALF + WALK_OUT) / 2 + 0.2)).setY(0.16);
    if (!clearOfLandmarks(pos, 12) || pos.z < RIVER.zNear + 30) continue;
    kit.props.busstop.place(pos, yawTo(f.r.clone().multiplyScalar(-side)));
    exclusions.push({ x: pos.x, z: pos.z, r: 4 });
    shelters++;
    s += 180;
  }
  // speed-limit plates facing oncoming traffic
  for (const [s0, key] of [[70, 'speed30'], [300, 'speed30'], [520, 'speed80']]) {
    const pf = kit.props[key];
    if (!pf) continue;
    for (let s = s0; s < s0 + 60; s += 3) {
      if (inGap(s, 1)) continue;
      route.frame(s / L, f);
      const pos = f.p.clone().addScaledVector(f.r, ROAD_HALF + 0.45).setY(0.16);
      if (!clearOfLandmarks(pos, 3)) continue;
      pf.place(pos, yawTo(f.t.clone().negate()));
      exclusions.push({ x: pos.x, z: pos.z, r: 1.2 });
      break;
    }
  }

  return { gaps, lampHeads, plan };
}

// Main-road buildings: try to stand a kit building with its front on the footpath.
export function tryKitBuilding({ pf, route, s, side, WALK_OUT, excluded, inRiver }) {
  const L = route.length;
  const w = pf.size.x, depth = pf.size.z;
  const f = route.frame(Math.min(1, (s + w / 2) / L));
  const face = f.r.clone().multiplyScalar(-side);
  const along = f.t;
  // on a bend the corners of a wide building cut the footpath: step it back until they clear
  for (let setback = 0.25; setback <= 4.5; setback += 0.75) {
    const front = f.p.clone().addScaledVector(f.r, side * (WALK_OUT + setback)).setY(0);
    const centre = front.clone().addScaledVector(face, -depth / 2);
    const rad = Math.hypot(w, depth) / 2;
    if (inRiver(centre.z, rad + 4) || excluded(centre.x, centre.z, rad * 0.8)) return null;
    let ok = true;
    for (const [cx, cz] of [[-w / 2, 0], [w / 2, 0], [-w / 2, -depth], [w / 2, -depth], [0, -depth], [-w / 4, 0], [w / 4, 0], [0, 0]]) {
      const c = front.clone().addScaledVector(along, cx).addScaledVector(face, cz);
      if (route.distToRoad(c.x, c.z) < WALK_OUT + 0.05 || inRiver(c.z, 3)) { ok = false; break; }
    }
    if (!ok) continue;
    pf.place(front, yawTo(face));
    return { w, depth, centre, setback };
  }
  return null;
}
