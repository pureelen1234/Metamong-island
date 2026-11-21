/**
 * check_layout.mjs — 사각 섬 배치 검증 (순수 데이터, 브라우저 없이 실행)
 *
 *   node tools/check_layout.mjs
 *
 * 확인하는 것
 *   ① 모든 배치물·메타몽·고양이·건물·텃밭 타일이 걸을 수 있는 땅 위에 있는가
 *   ② 텃밭 3×3 칸과 나무·바위·꽃덤불·건물·길이 겹치지 않는가
 *   ③ 길 위에 충돌물(나무·바위·울타리·가로등)이 서 있지 않은가
 *   ④ 배치물끼리 서로 파고들지 않는가
 *   ⑤ 스폰 지점·부두 앞 낚시 자리·찌가 물 위에 있는가
 */
import * as THREE from 'three';
import { NATURE, LANDMARKS, DITTOS, CATS, FARM, SPAWN, ZONES } from '../src/config.js';
import { HEIGHTS, isWalkableAt, islandHeight } from '../src/terrain/Heightmap.js';
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

/* ── ② 텃밭 타일 ─────────────────────────────────────── */
const tiles = [];
for (let r = 0; r < FARM.rows; r++) {
  for (let c = 0; c < FARM.cols; c++) {
    const x = +(FARM.x + (c - (FARM.cols - 1) / 2) * FARM.pitch).toFixed(2);
    const z = +(FARM.z + (r - (FARM.rows - 1) / 2) * FARM.pitch).toFixed(2);
    tiles.push({ r, c, x, z });
    walk(x, z, `텃밭 칸 ${r + 1}-${c + 1}`);
    const pathD = distToPaths(x, z);
    if (pathD < FARM.tile / 2 + PATH_HALF) fail(`텃밭 칸 ${r + 1}-${c + 1} (${x}, ${z}) 이 길 위에 있다 (${pathD.toFixed(2)})`);
  }
}

const nearTile = (x, z, margin) => {
  for (const t of tiles) {
    const half = FARM.tile / 2 + margin;
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
  const t = nearTile(item.x, item.z, r + 0.2);
  if (t) fail(`${item.frame} (${item.x}, ${item.z}) 이 텃밭 칸 ${t.r + 1}-${t.c + 1} 과 겹친다`);
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

/* ── 구역 중심 ──────────────────────────────────────── */
for (const z of ZONES) walk(z.x, z.z, `구역 ${z.name}`);

/* ── 결과 ───────────────────────────────────────────── */
console.log(`배치물 ${NATURE.length} · 충돌물 ${colliders.length} · 텃밭 칸 ${tiles.length} · 길 샘플 ${PATH_PTS.length}`);
for (const n of notes) console.log('  · ' + n);
if (problems.length) {
  console.log(`\n✗ 문제 ${problems.length}건`);
  for (const p of problems) console.log('  - ' + p);
  process.exit(1);
}
console.log('\n✓ 배치 검증 통과');
