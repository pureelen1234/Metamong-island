/**
 * check_layout.mjs — 72×72 섬 배치 검증 (순수 데이터, 브라우저 없이 실행)
 *
 *   node tools/check_layout.mjs
 *
 * 확인하는 것
 *   ① 모든 배치물·메타몽·고양이·건물·텃밭/논 타일이 걸을 수 있는 땅 위에 있는가
 *   ② 텃밭 3×3 · 논 3×2 칸과 나무·바위·꽃덤불·건물·길이 겹치지 않는가
 *   ③ 길 위에 충돌물(나무·바위·울타리·가로등)이 서 있지 않고, 길이 물에 잠기지 않는가
 *   ④ 배치물끼리 서로 파고들지 않는가
 *   ⑤ 스폰 지점·부두 앞 낚시 자리·찌가 물 위에 있는가
 *   ⑥ 4단계: 중앙 강이 길을 끊고, 다리 데크가 강을 건너며, 다리를 놓으면 건널 수 있는가
 *   ⑦ 4단계: 남쪽/북쪽 개척권에 메타몽이 흩어져 있는가
 *   ⑧ 5단계: 불청객 상륙 지점·진격로·방어 슬롯 5곳이 땅/길 위에 있고 서로 겹치지 않는가
 */
import * as THREE from 'three';
import { NATURE, LANDMARKS, DITTOS, CATS, DEFENSE, FARM, PADDY, SPAWN, ZONES, BRIDGE, RIVER, riverCenterZ, isOnBridgeDeck } from '../src/config.js';
import { HEIGHTS, isWalkableAt, islandHeight, setBridgeBuilt } from '../src/terrain/Heightmap.js';
import { ROUTES } from '../src/world/Path.js';
import { FISHING } from '../src/systems/lifeData.js';

const problems = [];
const notes = [];
const fail = (msg) => problems.push(msg);

/* ── 길 중심선 폴리라인 ─────────────────────────────── */
function sampleRoute(points) {
  const curve = new THREE.CatmullRomCurve3(
    points.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    false,
    'catmullrom',
    0.5
  );
  const n = Math.max(8, Math.round(curve.getLength() / 0.5));
  return curve.getSpacedPoints(n).map((v) => [v.x, v.z]);
}
const PATH_PTS = ROUTES.flatMap((r) => sampleRoute(r));
const PATH_HALF = 1.15 / 2 + 0.08;

function distToPaths(x, z) {
  let best = Infinity;
  for (const [px, pz] of PATH_PTS) {
    const d = Math.hypot(px - x, pz - z);
    if (d < best) best = d;
  }
  return best;
}

/* ── ① 땅 위인가 ─────────────────────────────────────── */
const walk = (x, z, label) => {
  if (!isWalkableAt(HEIGHTS, x, z)) fail(`${label} (${x}, ${z}) 가 물/급경사 위에 있다 (h=${islandHeight(x, z).toFixed(2)})`);
};
walk(SPAWN.x, SPAWN.z, '스폰');

/* ── ② 경작지 타일 ───────────────────────────────────── */
function tilesOf(def) {
  const out = [];
  for (let r = 0; r < def.rows; r++) {
    for (let c = 0; c < def.cols; c++) {
      out.push({
        r,
        c,
        x: +(def.x + (c - (def.cols - 1) / 2) * def.pitch).toFixed(2),
        z: +(def.z + (r - (def.rows - 1) / 2) * def.pitch).toFixed(2),
        tile: def.tile,
      });
    }
  }
  return out;
}

const farmTiles = tilesOf(FARM);
const paddyTiles = tilesOf(PADDY);
for (const t of farmTiles) {
  walk(t.x, t.z, `텃밭 칸 ${t.r + 1}-${t.c + 1}`);
  const pathD = distToPaths(t.x, t.z);
  if (pathD < FARM.tile / 2 + PATH_HALF) fail(`텃밭 칸 ${t.r + 1}-${t.c + 1} (${t.x}, ${t.z}) 이 길 위에 있다 (${pathD.toFixed(2)})`);
}
for (const t of paddyTiles) {
  walk(t.x, t.z, `논 칸 ${t.r + 1}-${t.c + 1}`);
  const pathD = distToPaths(t.x, t.z);
  if (pathD < PADDY.tile / 2 + PATH_HALF) fail(`논 칸 ${t.r + 1}-${t.c + 1} (${t.x}, ${t.z}) 이 길 위에 있다 (${pathD.toFixed(2)})`);
}

const nearTiles = (x, z, margin) => {
  for (const t of [...farmTiles, ...paddyTiles]) {
    const half = t.tile / 2 + margin;
    if (Math.abs(x - t.x) < half && Math.abs(z - t.z) < half) return t;
  }
  return null;
};

/* ── ③ 배치물 ────────────────────────────────────────── */
const colliders = [];
for (const item of NATURE) {
  walk(item.x, item.z, `${item.frame}`);
  const r = item.collide || 0;
  const pathD = distToPaths(item.x, item.z);
  if (r > 0 && pathD < r + PATH_HALF) fail(`${item.frame} (${item.x}, ${item.z}) 이 길을 막는다 (길까지 ${pathD.toFixed(2)}, r=${r})`);
  const t = nearTiles(item.x, item.z, r + 0.2);
  if (t) fail(`${item.frame} (${item.x}, ${item.z}) 이 경작지 칸 ${t.r + 1}-${t.c + 1} 과 겹친다`);
  if (r > 0) colliders.push({ kind: item.frame, x: item.x, z: item.z, r });
}

for (const lm of LANDMARKS) {
  if (lm.water) continue;
  walk(lm.x, lm.z, `${lm.name}`);
  const pathD = distToPaths(lm.x, lm.z);
  if (pathD > 3.6) notes.push(`${lm.name} 이 길에서 ${pathD.toFixed(1)} 떨어져 있다`);
}

/* ── ④ 서로 파고들지 않는가 ─────────────────────────── */
for (let i = 0; i < colliders.length; i++) {
  for (let j = i + 1; j < colliders.length; j++) {
    const a = colliders[i];
    const b = colliders[j];
    const d = Math.hypot(a.x - b.x, a.z - b.z);
    const min = a.r + b.r - 0.05;
    if (d < min) fail(`${a.kind}(${a.x},${a.z}) 와 ${b.kind}(${b.x},${b.z}) 가 겹친다 (${d.toFixed(2)} < ${min.toFixed(2)})`);
  }
}

/* ── 메타몽 · 고양이 ────────────────────────────────── */
for (const d of DITTOS) {
  walk(d.x, d.z, `메타몽 ${d.name}`);
  for (const c of colliders) {
    const dist = Math.hypot(d.x - c.x, d.z - c.z);
    if (dist < c.r + 0.4) fail(`메타몽 ${d.name} 이 ${c.kind} 에 파묻혀 있다 (${dist.toFixed(2)})`);
  }
}
for (const c of CATS) walk(c.x, c.z, `고양이 ${c.name}`);

/* ── ⑤ 부두 · 낚시 ──────────────────────────────────── */
const spot = FISHING.spot;
walk(spot.x, spot.z, '낚시 자리');
const castH = islandHeight(FISHING.castTo.x, FISHING.castTo.z);
if (castH > -0.1) fail(`낚시 찌(${FISHING.castTo.x}, ${FISHING.castTo.z}) 가 물 위가 아니다 (h=${castH.toFixed(2)})`);
const dock = LANDMARKS.find((l) => l.id === 'dock');
const dockH = islandHeight(dock.x, dock.z);
if (dockH > 0.25 || dockH < -0.25) fail(`부두 발밑 높이가 물가가 아니다 (h=${dockH.toFixed(2)})`);
const spotToDock = Math.hypot(spot.x - dock.x, spot.z - dock.z);
if (spotToDock > spot.range) fail(`낚시 자리가 부두에서 반경(${spot.range}) 밖이다 (${spotToDock.toFixed(2)})`);

/* ── ⑥ 중앙 강 · 다리 ───────────────────────────────── */
// 강은 동서로 이어져 섬을 두 쪽으로 가른다
for (let x = -26; x <= 26; x += 2) {
  const z = riverCenterZ(x);
  if (islandHeight(x, z) > -0.3) fail(`강 한가운데(${x}, ${z.toFixed(1)})가 물이 아니다 (h=${islandHeight(x, z).toFixed(2)})`);
  if (isWalkableAt(HEIGHTS, x, z)) fail(`강 한가운데(${x}, ${z.toFixed(1)})가 걸을 수 있다`);
}
// 다리를 놓기 전에는 강을 건널 수 없다 — 다리 데크 x 구간에서도 물은 막힌다
setBridgeBuilt(false);
let blocked = 0;
for (let z = BRIDGE.z - 3; z <= BRIDGE.z + 3; z += 0.5) {
  if (!isWalkableAt(HEIGHTS, BRIDGE.x, z)) blocked += 1;
}
if (blocked < 8) fail(`다리 없이 강 중앙(x=${BRIDGE.x})이 걸린다 (막힌 표본 ${blocked})`);
// 다리를 놓으면 데크 위로 건널 수 있다 — 남쪽 끝에서 북쪽 끝까지 연속으로 걸린다
setBridgeBuilt(true);
for (let z = BRIDGE.south.z; z >= BRIDGE.north.z - 0.01; z -= 0.25) {
  if (!isWalkableAt(HEIGHTS, BRIDGE.x, z)) fail(`다리 위 (${BRIDGE.x}, ${z.toFixed(2)}) 를 걸을 수 없다`);
}
if (!isOnBridgeDeck(BRIDGE.x, BRIDGE.z)) fail('다리 데크 판정이 강 중앙을 덮지 않는다');
walk(BRIDGE.south.x, BRIDGE.south.z, '다리 남쪽 끝');
walk(BRIDGE.north.x, BRIDGE.north.z, '다리 북쪽 끝');
// 다리를 놓아도 강폭 밖(데크 바깥)은 여전히 물이다
for (const dx of [RIVER.halfWidth + 2, -(RIVER.halfWidth + 2)]) {
  if (isWalkableAt(HEIGHTS, BRIDGE.x + dx, BRIDGE.z)) fail(`다리 옆 (${BRIDGE.x + dx}, ${BRIDGE.z}) 이 걸린다`);
}
setBridgeBuilt(false);

/* ── ⑦ 개척권 분산 ──────────────────────────────────── */
const south = DITTOS.filter((d) => d.z > riverCenterZ(d.x));
const north = DITTOS.filter((d) => d.z <= riverCenterZ(d.x));
if (south.length < 3) fail(`생활권 메타몽이 ${south.length}마리뿐이다`);
if (north.length < 3) fail(`개척권 메타몽이 ${north.length}마리뿐이다`);
for (const z of ZONES) {
  walk(z.x, z.z, `구역 ${z.name}`);
  if (z.side === 'north' && z.z > riverCenterZ(z.x)) fail(`구역 ${z.name} 이 남쪽에 있다`);
  if (z.side === 'south' && z.z <= riverCenterZ(z.x)) fail(`구역 ${z.name} 이 북쪽에 있다`);
}

/* ── ⑨ 5단계 방어전 무대 ───────────────────────────── */
for (const [i, w] of DEFENSE.route.entries()) walk(w.x, w.z, `불청객 진격로 ${i + 1}`);
walk(DEFENSE.landing.x, DEFENSE.landing.z, '상륙 지점');
const boatH = islandHeight(DEFENSE.boat.x, DEFENSE.boat.z);
if (boatH > -0.1) fail(`수집단의 배(${DEFENSE.boat.x}, ${DEFENSE.boat.z})가 물 위가 아니다 (h=${boatH.toFixed(2)})`);
walk(DEFENSE.plaza.x, DEFENSE.plaza.z, '광장 안전 울타리');
for (const slot of DEFENSE.slots) {
  walk(slot.x, slot.z, `방어 슬롯 ${slot.id}`);
  const pd = distToPaths(slot.x, slot.z);
  if (pd > 1.4) fail(`방어 슬롯 ${slot.id} (${slot.x}, ${slot.z}) 이 오솔길에서 너무 멀다 (${pd.toFixed(2)})`);
  for (const c of colliders) {
    const d = Math.hypot(slot.x - c.x, slot.z - c.z);
    if (d < c.r + 0.45) fail(`방어 슬롯 ${slot.id} 이 ${c.kind}(${c.x},${c.z}) 에 파묻힌다 (${d.toFixed(2)})`);
  }
  for (const lm of LANDMARKS) {
    if (Math.hypot(slot.x - lm.x, slot.z - lm.z) < 2.2) fail(`방어 슬롯 ${slot.id} 이 ${lm.name} 에 너무 가깝다`);
  }
  if (Math.hypot(slot.x - DEFENSE.plaza.x, slot.z - DEFENSE.plaza.z) < DEFENSE.plaza.r - 0.5) {
    fail(`방어 슬롯 ${slot.id} 이 광장 안전 울타리 안쪽에 있다`);
  }
}
notes.push(`방어 슬롯 ${DEFENSE.slots.length}곳 · 상륙(${DEFENSE.landing.x}, ${DEFENSE.landing.z}) → 광장(${DEFENSE.plaza.x}, ${DEFENSE.plaza.z})`);

/* ── ⑧ 길이 물에 잠기지 않는가 ──────────────────────── */
for (const [x, z] of PATH_PTS) {
  const h = islandHeight(x, z);
  if (h < 0.1) fail(`길 표본 (${x.toFixed(1)}, ${z.toFixed(1)}) 이 물에 잠긴다 (h=${h.toFixed(2)})`);
}

/* ── 결과 ───────────────────────────────────────────── */
console.log(
  `배치물 ${NATURE.length} · 충돌물 ${colliders.length} · 텃밭 칸 ${farmTiles.length} · 논 칸 ${paddyTiles.length} · 길 샘플 ${PATH_PTS.length}`
);
console.log(`메타몽 ${DITTOS.length} (생활권 ${south.length} · 개척권 ${north.length}) · 강 z(x=0)=${riverCenterZ(0).toFixed(2)}`);
for (const n of notes) console.log('  · ' + n);
if (problems.length) {
  console.log(`\n✗ 문제 ${problems.length}건`);
  for (const p of problems) console.log('  - ' + p);
  process.exit(1);
}
console.log('\n✓ 배치 검증 통과');
