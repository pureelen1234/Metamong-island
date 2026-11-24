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
  berry: { id: 'berry', name: '열매', icon: '🍓', tint: '#ff7d9c', desc: '먹으면 기력 +15' },

  // ── 6단계: 새 채집지의 특산물 (가방이 아니라 특산 바구니 progress.forage 에 담긴다)
  shell: { id: 'shell', name: '조개', icon: '🐚', tint: '#ffdfe8', group: 'beach', forage: true, desc: '남쪽 모래 해변에서 주워요' },
  conch: { id: 'conch', name: '소라', icon: '🐌', tint: '#ffcfa8', group: 'beach', forage: true, desc: '파도가 밀어 둔 소라 껍데기' },
  driftwood: { id: 'driftwood', name: '유목', icon: '🪵', tint: '#dcc6a2', group: 'beach', forage: true, desc: '바닷물에 다듬어진 나무토막' },
  pine_mushroom: { id: 'pine_mushroom', name: '송이버섯', icon: '🍄', tint: '#e6b98a', group: 'forest', forage: true, desc: '북쪽 빼곡한 숲의 솔밭에서' },
  acorn: { id: 'acorn', name: '도토리', icon: '🌰', tint: '#c9945f', group: 'forest', forage: true, desc: '숲 바닥에 톡 떨어진 도토리' },
  honey: { id: 'honey', name: '달콤한 꿀', icon: '🍯', tint: '#ffc65e', group: 'forest', forage: true, desc: '숲의 벌집에서 한 방울' },
  copper: { id: 'copper', name: '구리광석', icon: '🔶', tint: '#e0955b', group: 'ore', forage: true, desc: '채석장 바위틈의 구리 광맥' },
  crystal: { id: 'crystal', name: '수정', icon: '💎', tint: '#a8e6f2', group: 'ore', forage: true, desc: '채석장 깊은 곳의 맑은 수정' },
};

/**
 * 가방·창고·목록의 분류 — 재료 종류가 늘어난 만큼 6단계에서 묶어 보여 준다.
 * 특산(beach·forest·ore)은 가방을 차지하지 않고 특산 바구니(progress.forage)에 담긴다.
 */
export const ITEM_GROUPS = [
  { id: 'basic', name: '기본 재료', icon: '🧺', items: ['log', 'stone', 'petal', 'star', 'berry'] },
  { id: 'beach', name: '해변 특산', icon: '🐚', items: ['shell', 'conch', 'driftwood'] },
  { id: 'forest', name: '숲 특산', icon: '🍄', items: ['pine_mushroom', 'acorn', 'honey'] },
  { id: 'ore', name: '광물', icon: '💎', items: ['copper', 'crystal'] },
];

/** 특산 바구니로 가는 재료인가 */
const FORAGE_SET = new Set(['shell', 'conch', 'driftwood', 'pine_mushroom', 'acorn', 'honey', 'copper', 'crystal']);
export const isForageItem = (id) => FORAGE_SET.has(id);

/** 가방·창고·목록에서 늘 같은 순서로 보여 준다 */
export const ITEM_ORDER = ITEM_GROUPS.flatMap((g) => g.items);
/** 특산물(가방을 차지하지 않는 바구니 재료) */
export const FORAGE_ITEM_ORDER = ['shell', 'conch', 'driftwood', 'pine_mushroom', 'acorn', 'honey', 'copper', 'crystal'];

/** 가방: 기본 8칸, 한 칸에 20개까지 — 리어카를 만들면 16칸으로 늘어난다 */
export const BAG = { slots: 8, cartSlots: 16, stack: 20 };

/** 특산 바구니 — 물고기·수확물처럼 가방 칸을 쓰지 않는다 */
export const FORAGE = { cap: 999, stack: 20 };

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
  hitBeach: 2,
  hitForest: 3,
  hitMine: 7,
  eat: 15,
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

/**
 * 채집 대상 분류 — 프레임 이름으로 종류를 정한다.
 * 6단계에서 해변(줍기)·숲(채집)·광맥(캐기)이 붙었다. 새 채집지는 아틀라스 프레임이 아니라
 * config.GATHER 의 캔버스 도트를 쓰므로 frames 는 비어 있고, toolKind 로 도구 강화를 잇는다.
 */
export const HARVEST = {
  tree: { frames: ['cherry1', 'cherry2', 'tree_tall', 'tree_round'], cost: STAMINA.hitTree, hits: [2, 3], icon: '🪓', verb: '베기', toolKind: 'tree' },
  rock: { frames: ['rock'], cost: STAMINA.hitRock, hits: [2, 3], icon: '⛏️', verb: '채굴', toolKind: 'rock' },
  flower: { frames: ['flowerbush'], cost: STAMINA.hitFlower, hits: [1, 1], icon: '🌸', verb: '꽃 따기', toolKind: 'flower' },
  beach: { frames: [], cost: STAMINA.hitBeach, hits: [1, 2], icon: '🐚', verb: '줍기', toolKind: 'flower', basket: 'forage' },
  forest: { frames: [], cost: STAMINA.hitForest, hits: [1, 2], icon: '🍄', verb: '채집', toolKind: 'flower', basket: 'forage' },
  mine: { frames: [], cost: STAMINA.hitMine, hits: [2, 3], icon: '⛏️', verb: '캐기', toolKind: 'rock', basket: 'forage' },
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
