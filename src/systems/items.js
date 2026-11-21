/**
 * items.js — 1단계 생활 시스템이 공유하는 재료·가방·기력·복구 레시피 상수
 * 모든 화면(가방·창고·복구·우체통)과 3D 연출이 이 한 곳을 바라본다.
 */

/** 재료 정의 — icon 은 DOM UI, tint 는 3D 파티클·드롭 색 */
export const ITEMS = {
  log: { id: 'log', name: '통나무', icon: '🪵', tint: '#c98b52', desc: '나무를 두드리면 나와요' },
  stone: { id: 'stone', name: '돌', icon: '🪨', tint: '#a9a9c0', desc: '바위를 두드리면 나와요' },
  petal: { id: 'petal', name: '꽃잎', icon: '🌸', tint: '#ffb3d1', desc: '꽃덤불과 벚꽃나무에서' },
  star: { id: 'star', name: '별조각', icon: '⭐', tint: '#ffd77a', desc: '바위에서 아주 가끔' },
  berry: { id: 'berry', name: '열매', icon: '🍓', tint: '#ff7d9c', desc: '먹으면 기력 +30' },
};

/** 가방·창고·목록에서 늘 같은 순서로 보여 준다 */
export const ITEM_ORDER = ['log', 'stone', 'petal', 'star', 'berry'];

/** 가방: 기본 8칸, 한 칸에 20개까지 — 리어카를 만들면 16칸으로 늘어난다 */
export const BAG = { slots: 8, cartSlots: 16, stack: 20 };

/** 🛒 리어카 — 공방에서 만드는 운반 도구 (가방 칸 2배) */
export const CART = {
  id: 'cart',
  name: '리어카',
  icon: '🛒',
  cost: { log: 8, stone: 5, coin: 60 },
  /** 리어카 1대당 늘어나는 가방 칸 */
  slotsPerLevel: 8,
  maxLevel: 1,
  desc: '바퀴 달린 작은 손수레. 짊어지고 다니는 가방이 두 배로 넓어진다.',
};

/** 창고: 재료별 최대 보관량(사실상 무제한이지만 폭주를 막는 상한) */
export const STORAGE_CAP = 999;

/** 기력(스태미나) */
export const STAMINA = {
  max: 100,
  hitTree: 6,
  hitRock: 7,
  hitFlower: 3,
  eat: 30,
  /** 0.166/s — 10분에 가득. 열매를 먹는 재미를 해치지 않을 만큼만 천천히 */
  regenPerSecond: 1 / 6,
};

/** 4대 건물 복구 레시피 (LANDMARKS id 와 1:1) — 4단계: Day 잠금 없이 재료만 모으면 바로 */
export const RECIPES = {
  dock: { log: 3, stone: 2 },
  workshop: { log: 4, stone: 3 },
  vending: { log: 4, stone: 4 },
  lighthouse: { log: 6, stone: 5 },
};

/** 건물별 한 줄 설명 — 복구 모달에서 재료와 함께 보여 준다 */
export const BUILD_NOTES = {
  dock: '배가 다시 닿을 수 있게 널빤지를 잇는 곳이에요.',
  workshop: '창고와 도구방이 함께 열려요. 재료 정리는 여기서 해요.',
  vending: '메타몽 자판기예요. 복구하면 밤에 은은하게 빛나요.',
  lighthouse: '복구하면 밤마다 따뜻한 불이 켜져요. 섬의 마지막 등불이에요.',
};

/** 강을 건너는 다리 — 통나무·돌만 모으면 Day 1에도 바로 놓을 수 있다 */
export const BRIDGE_RECIPE = { log: 6, stone: 4 };

/** 채집 대상 분류 — 프레임 이름으로 종류를 정한다 */
export const HARVEST = {
  tree: { frames: ['cherry1', 'cherry2', 'tree_tall', 'tree_round'], cost: STAMINA.hitTree, hits: [2, 3], icon: '🪓', verb: '베기' },
  rock: { frames: ['rock'], cost: STAMINA.hitRock, hits: [2, 3], icon: '⛏️', verb: '채굴' },
  flower: { frames: ['flowerbush'], cost: STAMINA.hitFlower, hits: [1, 1], icon: '🌸', verb: '꽃 따기' },
};

/** 프레임 → 채집 종류 */
export function harvestKindOf(frame) {
  for (const [kind, def] of Object.entries(HARVEST)) {
    if (def.frames.includes(frame)) return kind;
  }
  return null;
}

/** 채집 완료 시 나오는 재료 (1~3개, 확률 보너스) */
export function rollDrops(kind, frame, rand = Math.random) {
  const gains = {};
  if (kind === 'tree') {
    gains.log = 1 + Math.floor(rand() * 3);
    if (String(frame).startsWith('cherry') && rand() < 0.65) gains.petal = 1;
  } else if (kind === 'rock') {
    gains.stone = 1 + Math.floor(rand() * 3);
    if (rand() < 0.14) gains.star = 1;
  } else if (kind === 'flower') {
    gains.petal = 1 + (rand() < 0.5 ? 1 : 0);
  }
  return gains;
}

/** {log:2, stone:1} → "통나무 2 · 돌 1" */
export function gainsLabel(gains) {
  return Object.entries(gains)
    .filter(([, n]) => n > 0)
    .map(([id, n]) => `${ITEMS[id] ? ITEMS[id].name : id} ${n}`)
    .join(' · ');
}
