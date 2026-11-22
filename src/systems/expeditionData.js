/**
 * expeditionData.js — 7단계 원정(다른 지역)의 단일 데이터 원천
 *
 * · 하루 한 번(게임 내 Day 기준) 떠날 수 있는 원정지 3곳
 * · 원정 전용 자원 6종 — **본섬에서는 절대 나오지 않는다**
 * · 상위 포탑(화염·얼음)의 재료가 되는 자원은 여기서만 얻는다
 *
 * 화면(Phase7Panels)·3D(Expedition.js)·세이브(Progress)가 모두 이 파일만 읽는다.
 */

/** 원정 규칙 — 제한 시간·기력·하루 횟수 */
export const EXPEDITION = {
  /** 하루에 떠날 수 있는 횟수 (게임 내 Day 기준) */
  perDay: 1,
  /** 출발에 드는 기력 */
  entryStamina: 10,
  /** 한 자리에서 캘 때 드는 기력 */
  harvestStamina: 5,
  /** 제한 시간(초) — 시간이 다 되면 자동 귀환 */
  duration: 75,
  /** 원정지 안에서 걸어가는 속도 */
  walkSpeed: 2.8,
  /** 노드에 닿으면 자동으로 캐기까지 걸리는 시간 */
  harvestTime: 0.45,
  /** 한 번의 캐기로 들어오는 자원 수 [최소, 최대] */
  yield: [1, 2],
};

/** 원정 전용 자원 6종 — 섬(본섬) 채집·낚시·농사 어디에서도 나오지 않는다 */
export const EXPEDITION_RESOURCES = {
  volcano_heart: {
    id: 'volcano_heart',
    name: '화산 심장석',
    icon: '🌋',
    tint: '#ff7a4d',
    site: 'volcano',
    desc: '식어 가는 용암 속에서도 붉게 맥동하는 돌. 화염 포탑의 심장이 된다.',
  },
  ice_crystal: {
    id: 'ice_crystal',
    name: '얼음 결정',
    icon: '🧊',
    tint: '#8fd8f0',
    site: 'ice',
    desc: '천 년 동안 눌려 단단해진 얼음 조각. 녹지 않아 얼음 포탑의 냉기를 담는다.',
  },
  ancient_gear: {
    id: 'ancient_gear',
    name: '고대 톱니',
    icon: '⚙️',
    tint: '#c9b88f',
    site: 'volcano',
    desc: '누가 언제 만들었는지 모를 톱니. 아직도 손끝에 기계 기름 냄새가 밴다.',
  },
  deep_pearl: {
    id: 'deep_pearl',
    name: '심해 진주',
    icon: '🦪',
    tint: '#dff3f8',
    site: 'mist',
    desc: '아무도 닿지 못한 깊은 바다에서 올라온 진주. 안개 군도의 조개가 품고 있었다.',
  },
  meteor_shard: {
    id: 'meteor_shard',
    name: '유성 파편',
    icon: '☄️',
    tint: '#ffcf7a',
    site: 'volcano',
    desc: '별이 부서져 박힌 파편. 손에 쥐면 아직 미지근하다.',
  },
  mist_mushroom: {
    id: 'mist_mushroom',
    name: '안개 버섯',
    icon: '🍄',
    tint: '#cfd8e8',
    site: 'mist',
    desc: '안개가 서린 자리에만 피는 버섯. 갓을 건드리면 연기가 사르르.',
  },
};

export const EXPEDITION_ORDER = ['volcano_heart', 'ice_crystal', 'ancient_gear', 'deep_pearl', 'meteor_shard', 'mist_mushroom'];

/* ── 원정지 ───────────────────────────────────────────────── */

/**
 * nodes: 자원 자리 (x, z) — 원정지 안 반경 8 안쪽
 * kind: 'rock' | 'vent' | 'reef' | 'ice' — 바닥 소품 그림 종류
 */
export const EXPEDITION_SITES = {
  mist: {
    id: 'mist',
    name: '안개 군도',
    icon: '🌫️',
    sub: '자욱한 안갯속, 조용한 섬들',
    sky: '#cfdbe8',
    ground: '#c3d3c6',
    groundDeep: '#9fbfae',
    resourceIds: ['mist_mushroom', 'deep_pearl'],
    nodes: [
      { type: 'mist_mushroom', x: -4.6, z: -2.2 },
      { type: 'mist_mushroom', x: -3.0, z: 1.6 },
      { type: 'mist_mushroom', x: 0.8, z: -3.6 },
      { type: 'mist_mushroom', x: 4.2, z: 1.2 },
      { type: 'mist_mushroom', x: 2.2, z: 4.4 },
      { type: 'deep_pearl', x: -5.4, z: 3.4 },
      { type: 'deep_pearl', x: 5.6, z: -1.8 },
      { type: 'deep_pearl', x: -1.4, z: 4.8 },
      { type: 'deep_pearl', x: 3.4, z: -4.6 },
      { type: 'deep_pearl', x: -0.4, z: 0.6 },
    ],
    hint: '안개가 짙어 발밑이 잘 보이지 않아요 — 버섯과 조개를 골고루 챙겨 오세요.',
  },
  volcano: {
    id: 'volcano',
    name: '화산 채굴지',
    icon: '🌋',
    sub: '식지 않은 돌과 부서진 별',
    sky: '#f6c9a8',
    ground: '#b79384',
    groundDeep: '#8d6a63',
    resourceIds: ['volcano_heart', 'meteor_shard', 'ancient_gear'],
    nodes: [
      { type: 'volcano_heart', x: -4.2, z: 1.2 },
      { type: 'volcano_heart', x: 1.2, z: -3.2 },
      { type: 'volcano_heart', x: 4.6, z: 2.0 },
      { type: 'volcano_heart', x: -2.2, z: -1.2 },
      { type: 'meteor_shard', x: 0.6, z: 3.8 },
      { type: 'meteor_shard', x: -5.2, z: -2.6 },
      { type: 'meteor_shard', x: 3.0, z: -4.4 },
      { type: 'ancient_gear', x: 5.4, z: -1.0 },
      { type: 'ancient_gear', x: -3.4, z: 4.2 },
      { type: 'ancient_gear', x: 2.2, z: 0.8 },
      { type: 'ancient_gear', x: -1.0, z: 2.6 },
    ],
    hint: '바닥이 뜨거워요 — 화산 심장석은 천천히, 유성 파편은 흩어진 자리를 찾아보세요.',
  },
  ice: {
    id: 'ice',
    name: '얼음 섬',
    icon: '🧊',
    sub: '발소리만 쨍한 얼음 벌판',
    sky: '#d8eef7',
    ground: '#d5e9f0',
    groundDeep: '#a9cbd8',
    resourceIds: ['ice_crystal', 'deep_pearl', 'ancient_gear'],
    nodes: [
      { type: 'ice_crystal', x: -4.4, z: -1.0 },
      { type: 'ice_crystal', x: 0.4, z: -4.0 },
      { type: 'ice_crystal', x: 4.8, z: 1.4 },
      { type: 'ice_crystal', x: -1.8, z: 3.2 },
      { type: 'deep_pearl', x: 3.2, z: -2.6 },
      { type: 'deep_pearl', x: -5.6, z: 2.2 },
      { type: 'deep_pearl', x: 1.6, z: 4.6 },
      { type: 'ancient_gear', x: 5.8, z: -1.6 },
      { type: 'ancient_gear', x: -2.8, z: -3.4 },
      { type: 'ancient_gear', x: 2.4, z: 1.8 },
      { type: 'ancient_gear', x: 0.0, z: 1.4 },
    ],
    hint: '얼음 결정은 바닥에 박혀 있어요 — 톱니와 진주도 함께 챙길 수 있어요.',
  },
};

export const SITE_ORDER = ['mist', 'volcano', 'ice'];

export const siteOf = (id) => EXPEDITION_SITES[id] || null;
export const resourceOf = (id) => EXPEDITION_RESOURCES[id] || null;
export const isExpeditionResource = (id) => !!EXPEDITION_RESOURCES[id];

/** 원정지 하나의 자원 종류 → 자원 목록 */
export function resourcesOf(siteId) {
  const site = siteOf(siteId);
  if (!site) return [];
  return site.resourceIds.map((id) => EXPEDITION_RESOURCES[id]).filter(Boolean);
}

/** 오늘 이미 다녀왔는가 */
export function ranToday(progress, day) {
  const e = progress && progress.expedition ? progress.expedition : null;
  return !!(e && e.lastDay === day);
}
