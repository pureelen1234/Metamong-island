/**
 * config.js — 섬 전체가 공유하는 단일 상수 원천
 * GDD v1.7: 1일 = 실시간 20분, 아침 5 / 낮 7 / 노을 4 / 밤 4(분)
 *
 * 4단계(2026-11-21): 48×48 → **72×72** 사각 섬.
 *   · 섬 가운데를 가로지르는 완만한 곡선의 **중앙 강/개울**(걷기 불가)이
 *     남쪽 생활권과 북쪽 개척권을 나눈다.
 *   · 강 중앙(x=0, z≈-9)에 **미완성 다리**가 있고, 통나무·돌을 모아 놓으면
 *     그 위로 북쪽 개척권(숲 · 채석장 · 논)에 걸어서 건널 수 있다.
 */

// ── World / Terrain ────────────────────────────────────────────────
export const GRID = 72; // 72×72 그리드
export const TILE = 1; // 1칸 = 1 유닛
export const WORLD_SIZE = GRID * TILE;
export const HALF = WORLD_SIZE / 2;
export const WATER_LEVEL = 0;
export const WALK_MIN_HEIGHT = 0.06; // 이보다 낮으면 물 → 이동 차단

// ── 20분 하루 루프 ─────────────────────────────────────────────────
export const DAY_SECONDS = 1200;
export const PHASES = [
  { id: 'morning', label: '아침', icon: '🌅', start: 0, end: 300 },
  { id: 'day', label: '낮', icon: '☀️', start: 300, end: 720 },
  { id: 'sunset', label: '노을', icon: '🌇', start: 720, end: 960 },
  { id: 'night', label: '밤', icon: '🌙', start: 960, end: 1200 },
];

export function phaseAt(elapsed) {
  const t = ((elapsed % DAY_SECONDS) + DAY_SECONDS) % DAY_SECONDS;
  for (const p of PHASES) if (t >= p.start && t < p.end) return p;
  return PHASES[PHASES.length - 1];
}

/** UI 시간 표기: 00:00 ~ 20:00 (하루 20분) */
export function clockLabel(elapsed) {
  const t = ((elapsed % DAY_SECONDS) + DAY_SECONDS) % DAY_SECONDS;
  const minutes = Math.floor((t / DAY_SECONDS) * 20);
  const seconds = Math.floor(((t / DAY_SECONDS) * 20 * 60) % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ── 날씨 ──────────────────────────────────────────────────────────
export const WEATHERS = {
  clear: { id: 'clear', label: '맑음', icon: '☀️' },
  cloudy: { id: 'cloudy', label: '구름 조금', icon: '⛅' },
  drizzle: { id: 'drizzle', label: '이슬비', icon: '🌦️' },
};

const WEATHER_CYCLE = ['clear', 'clear', 'cloudy', 'drizzle', 'clear', 'cloudy', 'clear'];

/** 날짜별로 결정론적인 날씨 (아침에 결정되는 GDD 규칙을 단순 고정 시드로 구현) */
export function weatherForDay(day) {
  return WEATHERS[WEATHER_CYCLE[(day - 1) % WEATHER_CYCLE.length]];
}

// ── 하늘 팔레트 키프레임 (t: 하루 경과 초) ────────────────────────
// 동화책처럼 화사한 파스텔. 그림자가 검게 죽지 않도록 밤도 보랏빛으로 밝게 유지한다.
const KEY_DAWN = {
  t: 0,
  top: '#9ed7f5',
  bottom: '#ffe6d2',
  fog: '#f0faf6',
  sun: '#ffe7c4',
  sunIntensity: 0.95,
  hemiSky: '#fff6ea',
  hemiGround: '#d9f2c4',
  hemiIntensity: 1.32,
  night: 0.1,
};
const KEY_MORNING = {
  t: 110,
  top: '#74cff4',
  bottom: '#dcf5fd',
  fog: '#e4f7f5',
  sun: '#fff2cf',
  sunIntensity: 1.16,
  hemiSky: '#ffffff',
  hemiGround: '#dcf6c6',
  hemiIntensity: 1.5,
  night: 0,
};
const KEY_DAY = {
  t: 330,
  top: '#5fc6f2',
  bottom: '#cfeeff',
  fog: '#ddf4f8',
  sun: '#fffbe9',
  sunIntensity: 1.05,
  hemiSky: '#f4feff',
  hemiGround: '#d8f5c2',
  hemiIntensity: 1.55,
  night: 0,
};
const KEY_SUNSET = {
  t: 800,
  top: '#efa9c8',
  bottom: '#ffdcc0',
  fog: '#fce4d9',
  sun: '#ffb47c',
  sunIntensity: 1.22,
  hemiSky: '#ffd0ae',
  hemiGround: '#f0e2b8',
  hemiIntensity: 1.18,
  night: 0.02,
};
const KEY_DUSK = {
  t: 915,
  top: '#a99bdb',
  bottom: '#ffd8cc',
  fog: '#f0dde6',
  sun: '#ffa888',
  sunIntensity: 0.82,
  hemiSky: '#d4c0ea',
  hemiGround: '#c3cbb4',
  hemiIntensity: 0.9,
  night: 0.2,
};
const KEY_NIGHT = {
  t: 980,
  top: '#4e5b9c',
  bottom: '#b6c0ea',
  fog: '#9ea8d4',
  sun: '#d7e2ff',
  sunIntensity: 0.55,
  hemiSky: '#93a3ec',
  hemiGround: '#8298b0',
  hemiIntensity: 0.62,
  night: 1,
};
const KEY_PREDAWN = {
  t: 1170,
  top: '#7388c4',
  bottom: '#e5d8ee',
  fog: '#cfd6ea',
  sun: '#f0e9ff',
  sunIntensity: 0.86,
  hemiSky: '#e9e4f9',
  hemiGround: '#cadcc4',
  hemiIntensity: 1.1,
  night: 0.62,
};

// 정오 무렵까지 낮 색을 유지해 한낮이 노을색으로 물들지 않게 한다
const KEY_DAY_HOLD = { ...KEY_DAY, t: 650 };

export const SKY_KEYS = [
  KEY_DAWN,
  KEY_MORNING,
  KEY_DAY,
  KEY_DAY_HOLD,
  KEY_SUNSET,
  KEY_DUSK,
  KEY_NIGHT,
  KEY_PREDAWN,
  { ...KEY_DAWN, t: DAY_SECONDS },
];

// ── 플레이어 · 카메라 ─────────────────────────────────────────────
export const PLAYER = {
  speed: 4.3,
  turnLerp: 12,
  radius: 0.36,
  spriteHeight: 1.5, // 도트 스프라이트가 차지하는 월드 높이
};
export const CAMERA = {
  // 광각(58°)을 걷어 낸 37° — 화면 가장자리에서 건물이 눕거나 어안처럼 휘지 않는다.
  // 좁아진 화각만큼 카메라를 뒤로 물려 예전과 비슷한 시야를 유지한다.
  fov: 37,
  offset: { x: 0, y: 11.0, z: 13.4 },
  lookHeight: 0.7,
  lerp: 6.5,
};

// ── 중앙 강 / 개울 ────────────────────────────────────────────────
/**
 * 강 중심선 z(x) — 완만한 곡선. z=0 근처가 강 한가운데이고, -z 쪽이 북쪽이다.
 * 폭(water)은 약 5.8 유닛, 양쪽 둑 경사까지 3.9 유닛씩 — 다리 없이는 건널 수 없다.
 */
export function riverCenterZ(x) {
  return -9.0 + 2.4 * Math.sin(x * 0.11 + 0.35) + 0.9 * Math.sin(x * 0.24 - 1.1);
}

export const RIVER = {
  halfWidth: 1.5, // 바닥이 평평한 물길 반폭
  bank: 2.4, // 둑 경사 폭 (이 구간에서 지면 높이가 0.7 까지 올라온다)
  depth: 1.25, // 물길 바닥 깊이 (물 높이 0 보다 아래)
};

/** 이 자리가 강물/강둑(생활권·개척권 경계)인가 — 배치 검증·안내용 */
export function riverDistance(z, x) {
  return Math.abs(z - riverCenterZ(x));
}

// ── 섬 배치 ───────────────────────────────────────────────────────
// 좌표 규칙: +x = 동쪽(화면 오른쪽), -z = 북쪽(화면 안쪽), +z = 남쪽(화면 아래)
export const SPAWN = { x: 0.4, z: 17.4 };

/**
 * 다리 — 강 중앙 길목(x=0, z≈-9)에 놓는 목재 다리.
 * 건축 전에는 강에 막혀 북쪽 개척권으로 건널 수 없고, 재료를 모아 완성하면
 * 데크 위(isWalkable 예외)를 걸어서 건넌다. Day 제한은 없다.
 */
export const BRIDGE = {
  id: 'bridge',
  name: '다리',
  icon: '🌉',
  x: 0,
  z: -9.0,
  /** 데크 폭의 절반 (x 방향) */
  halfWidth: 1.45,
  /** 데크 길이의 절반 (z 방향) — 양 끝이 강둑 평지에 닿는다 */
  halfSpan: 4.0,
  /** 데크 윗면 높이 */
  deckY: 0.68,
  /** 건축 비용 (Day 제한 없음) */
  cost: { log: 6, stone: 4 },
  /** 다리 앞/뒤 길 접점 */
  south: { x: 0, z: -4.9 },
  north: { x: 0, z: -13.1 },
  /** [다리 놓기] 버튼이 뜨는 거리 */
  range: 2.6,
};

/** 월드 좌표가 다리 데크 위인가 (다리 완성 여부와 무관한 기하 판정) */
export function isOnBridgeDeck(x, z) {
  return Math.abs(x - BRIDGE.x) <= BRIDGE.halfWidth && Math.abs(z - BRIDGE.z) <= BRIDGE.halfSpan;
}

/** 복구 부지 · 도트 건물 4종 (공방·등대·자판기·부두) — 모두 남쪽 생활권 */
export const LANDMARKS = [
  // 사각 섬의 남쪽 해변 끝 — 부두 그림자가 물에 반쯤 잠기는 자리(지형 높이 ≈ 0.1)
  { id: 'dock', name: '부두', icon: '⚓', x: 0, z: 31.6, markerY: 2.2, height: 1.7, water: true },
  { id: 'workshop', name: '공방', icon: '🔨', x: -9.0, z: 9.8, markerY: 3.4, height: 2.8 },
  { id: 'vending', name: '메타몽 자판기', icon: '🥤', x: 9.0, z: 9.0, markerY: 2.4, height: 1.8 },
  { id: 'lighthouse', name: '등대', icon: '🗼', x: 14.6, z: -1.6, markerY: 5.6, height: 4.4 },
];

/**
 * 남쪽 생활권의 텃밭 — Farming.js 가 3×3 경작지를 까는 자리(타일 간격 farm.pitch)
 */
export const FARM = {
  id: 'farm',
  name: '텃밭',
  icon: '🌱',
  /** 3×3 경작지 중심 좌표 (남서쪽) */
  x: -17.2,
  z: 8.4,
  cols: 3,
  rows: 3,
  /** 타일 중심 간격 */
  pitch: 1.9,
  /** 흙 타일 한 변 */
  tile: 1.62,
  /** 입구(남동쪽) — 길이 여기로 닿는다 */
  gate: { x: -15.6, z: 12.2 },
};

/**
 * 북쪽 개척권의 논(수전) — Paddy.js 가 3×2 물 잠긴 논 타일을 깐다.
 * 볍씨를 자판기에서 사서 심고, 물을 주고, 벼를 거둬 쌀로 팔거나 주먹밥을 짓는다.
 */
export const PADDY = {
  id: 'paddy',
  name: '논',
  icon: '🌾',
  /** 3×2 논 중심 좌표 (북쪽 중앙·서편 물가) */
  x: -3.4,
  z: -19.0,
  cols: 3,
  rows: 2,
  pitch: 2.0,
  tile: 1.78,
  /** 논물 높이 — 흙 위로 얇게 잠긴 물 */
  waterY: 0.09,
  /** 입구(남쪽) — 다리에서 올라오는 길이 여기로 닿는다 */
  gate: { x: -3.4, z: -15.9 },
};

/** 구역 표시용 중심 (미니맵·안내) */
export const ZONES = [
  { id: 'farm', name: '텃밭', icon: '🌱', x: FARM.x, z: FARM.z, r: 4.6, side: 'south' },
  { id: 'orchard', name: '과수원', icon: '🍎', x: 17.0, z: 16.0, r: 5.6, side: 'south' },
  { id: 'garden', name: '꽃밭', icon: '🌸', x: -17.0, z: 19.6, r: 5.4, side: 'south' },
  { id: 'beach', name: '모래 해변', icon: '🏖️', x: 0, z: 27.6, r: 4.4, side: 'south' },
  { id: 'forest', name: '빼곡한 숲', icon: '🌲', x: -14.2, z: -20.5, r: 7.6, side: 'north' },
  { id: 'quarry', name: '채석장', icon: '🪨', x: 13.8, z: -18.0, r: 6.4, side: 'north' },
  { id: 'paddy', name: '논', icon: '🌾', x: PADDY.x, z: PADDY.z, r: 3.6, side: 'north' },
];

/**
 * 어설픈 메타몽 7마리 — 기본 1 + 위장 6종(조약돌·우체통·화분·벤치·버섯·이정표)
 * 4단계: 스폰 한 화면에 몰리지 않도록 꽃밭·과수원, 그리고 다리 건너 숲/채석장/논에 흩어 놓았다.
 * thumb: 도감 카드에서 잘라 보여 줄 아틀라스 셀
 */
export const DITTOS = [
  {
    id: 'ditto_mailbox_03',
    name: '우체통 메타몽',
    x: 3.2,
    z: 15.4,
    variant: 'mailbox',
    height: 1.1,
    thumb: { set: 'disguises', row: 1, col: 2 },
    flavor: '편지가 없어도 우체통인 척. 손잡이가 살짝 흔들린다.',
    where: '광장',
  },
  {
    id: 'ditto_basic_01',
    name: '동글 메타몽',
    x: -6.6,
    z: 16.4,
    variant: 'basic',
    height: 0.86,
    thumb: { set: 'ditto_basic', row: 1, col: 1 },
    flavor: '변신을 포기한 동글 메타몽. 점 눈만 남았다.',
    where: '광장 서쪽',
  },
  {
    id: 'ditto_flowerpot_04',
    name: '화분 메타몽',
    x: -17.2,
    z: 16.2,
    variant: 'flowerpot',
    height: 0.85,
    thumb: { set: 'disguises', row: 1, col: 3 },
    flavor: '물을 안 줘도 잎이 파랗다. 그게 수상하다.',
    where: '꽃밭',
  },
  {
    id: 'ditto_bench_05',
    name: '벤치 메타몽',
    x: 16.4,
    z: 14.2,
    variant: 'bench',
    height: 0.9,
    thumb: { set: 'disguises', row: 2, col: 1 },
    flavor: '앉으라고 만든 벤치인데, 앉으면 도망간다.',
    where: '과수원',
  },
  {
    id: 'ditto_pebble_02',
    name: '조약돌 메타몽',
    x: -11.0,
    z: -18.0,
    variant: 'pebble',
    height: 0.52,
    thumb: { set: 'disguises', row: 1, col: 1 },
    flavor: '조약돌인 척하지만 가끔 숨을 쉰다.',
    where: '북쪽 숲',
  },
  {
    id: 'ditto_signpost_07',
    name: '이정표 메타몽',
    x: 11.6,
    z: -19.8,
    variant: 'signpost',
    height: 1.15,
    thumb: { set: 'disguises', row: 2, col: 3 },
    flavor: '어디로 가라는 건지 본인도 모른다.',
    where: '채석장',
  },
  {
    id: 'ditto_mushroom_06',
    name: '버섯 메타몽',
    x: -1.6,
    z: -21.6,
    variant: 'mushroom',
    height: 0.78,
    thumb: { set: 'disguises', row: 2, col: 2 },
    flavor: '빨간 갓에 흰 점. 먹으면 안 될 것 같다.',
    where: '논 둑',
  },
];

/** 솜이 · 옹이 */
export const CATS = [
  { id: 'somi', name: '솜이', x: 5.4, z: 12.4, set: 'somi', height: 0.74 },
  { id: 'ongi', name: '옹이', x: 7.2, z: 11.0, set: 'ongi', height: 0.7 },
];

/** 우체통(우체통 메타몽) 자리 — 미니맵 표시용 */
export const MAILBOX = { x: 3.2, z: 15.4 };

/**
 * 도트 자연물 배치 (아틀라스 프레임 이름 그대로)
 * height = 스프라이트가 차지하는 월드 높이, collide = 플레이어 충돌 반경
 */
export const NATURE = [
  // ── 광장 둘레 — 가로등·울타리·꽃덤불·조약돌
  { frame: 'lamp', x: -4.8, z: 16.2, height: 2.0, collide: 0.22 },
  { frame: 'lamp', x: 5.2, z: 15.4, height: 2.0, collide: 0.22 },
  { frame: 'lamp', x: -4.6, z: 11.6, height: 2.0, collide: 0.22 },
  { frame: 'lamp', x: 5.4, z: 11.2, height: 2.0, collide: 0.22 },
  { frame: 'fence', x: -2.2, z: 12.2, height: 0.66, collide: 0.28 },
  { frame: 'fence', x: 3.2, z: 12.0, height: 0.66, collide: 0.28 },
  { frame: 'flowerbush', x: 1.4, z: 12.4, height: 0.6, collide: 0.24 },
  { frame: 'flowerbush', x: -5.6, z: 15.6, height: 0.56, collide: 0.24 },
  { frame: 'rock', x: 6.4, z: 16.4, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: -5.0, z: 8.0, height: 0.46, collide: 0.24 },
  { frame: 'flowerbush', x: -2.2, z: 19.2, height: 0.58, collide: 0.24 },
  { frame: 'flowerbush', x: 2.6, z: 19.0, height: 0.6, collide: 0.24 },
  { frame: 'flowerbush', x: -1.4, z: 21.0, height: 0.56, collide: 0.24 },
  { frame: 'rock', x: 1.6, z: 20.6, height: 0.48, collide: 0.24 },
  { frame: 'lamp', x: -1.0, z: 20.4, height: 2.0, collide: 0.22 },
  { frame: 'fence', x: -7.4, z: 16.4, height: 0.66, collide: 0.28 },
  { frame: 'fence', x: 6.6, z: 19.2, height: 0.66, collide: 0.28 },
  { frame: 'cherry1', x: -8.8, z: 18.6, height: 3.0, collide: 0.38 },
  { frame: 'cherry1', x: 11.8, z: 21.0, height: 3.0, collide: 0.38 },

  // ── 서쪽 — 공방 둘레
  { frame: 'tree_tall', x: -13.2, z: 8.2, height: 3.2, collide: 0.36 },
  { frame: 'tree_round', x: -13.4, z: 11.0, height: 2.6, collide: 0.34 },
  { frame: 'cherry1', x: -10.4, z: 5.8, height: 3.0, collide: 0.38 },
  { frame: 'flowerbush', x: -7.6, z: 12.6, height: 0.62, collide: 0.25 },
  { frame: 'rock', x: -6.6, z: 8.0, height: 0.5, collide: 0.26 },

  // ── 동쪽 — 자판기·등대 길
  { frame: 'tree_tall', x: 14.6, z: 7.6, height: 3.2, collide: 0.36 },
  { frame: 'tree_round', x: 8.4, z: 5.2, height: 2.6, collide: 0.34 },
  { frame: 'cherry2', x: 14.0, z: 12.2, height: 3.4, collide: 0.42 },
  { frame: 'flowerbush', x: 11.2, z: 12.6, height: 0.58, collide: 0.24 },
  { frame: 'rock', x: 7.2, z: 6.0, height: 0.5, collide: 0.26 },
  { frame: 'tree_round', x: 18.0, z: 4.6, height: 2.6, collide: 0.34 },
  { frame: 'cherry1', x: 11.8, z: 1.2, height: 3.0, collide: 0.38 },

  // ── 등대 언덕 (강 남쪽)
  { frame: 'rock', x: 17.4, z: -2.2, height: 0.54, collide: 0.28 },
  { frame: 'rock', x: 9.4, z: 0.4, height: 0.5, collide: 0.26 },
  { frame: 'flowerbush', x: 16.8, z: 1.6, height: 0.56, collide: 0.24 },
  { frame: 'tree_round', x: 19.4, z: 1.0, height: 2.6, collide: 0.34 },

  // ── 남쪽 — 부두로 가는 길 양옆 · 모래 해변
  { frame: 'lamp', x: -2.4, z: 22.0, height: 2.0, collide: 0.22 },
  { frame: 'lamp', x: 2.4, z: 22.0, height: 2.0, collide: 0.22 },
  { frame: 'fence', x: -4.8, z: 24.2, height: 0.66, collide: 0.28 },
  { frame: 'fence', x: 4.8, z: 24.2, height: 0.66, collide: 0.28 },
  { frame: 'rock', x: -3.6, z: 26.2, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: 3.8, z: 26.8, height: 0.46, collide: 0.24 },
  { frame: 'rock', x: -7.4, z: 27.6, height: 0.52, collide: 0.26 },
  { frame: 'rock', x: 7.2, z: 28.2, height: 0.48, collide: 0.26 },
  { frame: 'flowerbush', x: -6.6, z: 20.4, height: 0.56, collide: 0.24 },
  { frame: 'flowerbush', x: 6.8, z: 20.2, height: 0.58, collide: 0.24 },
  { frame: 'tree_round', x: -9.8, z: 23.4, height: 2.6, collide: 0.34 },
  { frame: 'cherry1', x: 9.6, z: 23.8, height: 3.0, collide: 0.38 },

  // ── 남서 꽃밭 (꽃잎 군락) — 걷다가 꽃잎을 딸 자리가 많다
  { frame: 'flowerbush', x: -14.6, z: 17.6, height: 0.58, collide: 0.24 },
  { frame: 'flowerbush', x: -16.2, z: 18.6, height: 0.6, collide: 0.24 },
  { frame: 'flowerbush', x: -18.0, z: 17.8, height: 0.56, collide: 0.24 },
  { frame: 'flowerbush', x: -19.4, z: 19.2, height: 0.58, collide: 0.24 },
  { frame: 'flowerbush', x: -20.4, z: 20.8, height: 0.62, collide: 0.24 },
  { frame: 'flowerbush', x: -19.0, z: 22.0, height: 0.58, collide: 0.24 },
  { frame: 'flowerbush', x: -17.2, z: 22.6, height: 0.56, collide: 0.24 },
  { frame: 'flowerbush', x: -15.4, z: 21.6, height: 0.6, collide: 0.24 },
  { frame: 'flowerbush', x: -14.8, z: 20.0, height: 0.54, collide: 0.24 },
  { frame: 'flowerbush', x: -16.8, z: 20.2, height: 0.58, collide: 0.24 },
  { frame: 'flowerbush', x: -18.6, z: 20.4, height: 0.6, collide: 0.24 },
  { frame: 'cherry1', x: -22.0, z: 16.4, height: 3.0, collide: 0.38 },
  { frame: 'tree_round', x: -13.2, z: 23.2, height: 2.6, collide: 0.34 },
  { frame: 'lamp', x: -15.8, z: 19.2, height: 2.0, collide: 0.22 },
  { frame: 'rock', x: -21.6, z: 22.8, height: 0.52, collide: 0.26 },

  // ── 남서 텃밭 둘레 (경작지 사각형은 비워 둔다)
  { frame: 'fence', x: -21.8, z: 5.2, height: 0.66, collide: 0.28 },
  { frame: 'fence', x: -21.8, z: 9.2, height: 0.66, collide: 0.28 },
  { frame: 'fence', x: -19.1, z: 4.2, height: 0.66, collide: 0.28 },
  { frame: 'fence', x: -15.6, z: 4.2, height: 0.66, collide: 0.28 },
  { frame: 'lamp', x: -13.6, z: 14.6, height: 2.0, collide: 0.22 },
  { frame: 'rock', x: -22.0, z: 13.4, height: 0.5, collide: 0.26 },
  { frame: 'flowerbush', x: -20.6, z: 12.8, height: 0.58, collide: 0.24 },

  // ── 남동 과수원 (나무·열매)
  { frame: 'cherry1', x: 13.6, z: 18.4, height: 3.0, collide: 0.38 },
  { frame: 'tree_round', x: 16.0, z: 20.6, height: 2.6, collide: 0.34 },
  { frame: 'cherry2', x: 19.2, z: 19.4, height: 3.4, collide: 0.42 },
  { frame: 'tree_tall', x: 21.4, z: 16.6, height: 3.2, collide: 0.36 },
  { frame: 'cherry1', x: 20.2, z: 12.4, height: 3.0, collide: 0.38 },
  { frame: 'tree_round', x: 16.4, z: 11.4, height: 2.6, collide: 0.34 },
  { frame: 'tree_round', x: 12.8, z: 14.2, height: 2.6, collide: 0.34 },
  { frame: 'fence', x: 12.4, z: 20.8, height: 0.66, collide: 0.28 },
  { frame: 'lamp', x: 10.4, z: 19.4, height: 2.0, collide: 0.22 },
  { frame: 'rock', x: 22.2, z: 21.2, height: 0.5, collide: 0.26 },

  // ══ 북쪽 개척권 (다리 건너) ══════════════════════════════
  // ── 빼곡한 숲 (북서~중앙북) — 통나무 수급이 시원한 군락
  { frame: 'tree_tall', x: -22.0, z: -16.5, height: 3.2, collide: 0.36 },
  { frame: 'tree_round', x: -18.6, z: -16.5, height: 2.6, collide: 0.34 },
  { frame: 'cherry1', x: -15.2, z: -16.5, height: 3.0, collide: 0.38 },
  { frame: 'tree_tall', x: -11.8, z: -16.5, height: 3.2, collide: 0.36 },
  { frame: 'cherry2', x: -14.4, z: -16.6, height: 3.4, collide: 0.42 },
  { frame: 'tree_round', x: -20.4, z: -19.4, height: 2.6, collide: 0.34 },
  { frame: 'cherry1', x: -17.0, z: -19.4, height: 3.0, collide: 0.38 },
  { frame: 'tree_tall', x: -13.6, z: -19.4, height: 3.2, collide: 0.36 },
  { frame: 'tree_round', x: -10.2, z: -19.4, height: 2.6, collide: 0.34 },
  { frame: 'tree_tall', x: -7.6, z: -18.6, height: 3.2, collide: 0.36 },
  { frame: 'cherry2', x: -22.4, z: -22.4, height: 3.4, collide: 0.42 },
  { frame: 'tree_round', x: -19.0, z: -22.4, height: 2.6, collide: 0.34 },
  { frame: 'tree_tall', x: -15.6, z: -22.4, height: 3.2, collide: 0.36 },
  { frame: 'cherry1', x: -12.2, z: -22.4, height: 3.0, collide: 0.38 },
  { frame: 'tree_round', x: -8.8, z: -22.4, height: 2.6, collide: 0.34 },
  { frame: 'tree_tall', x: -20.0, z: -25.2, height: 3.2, collide: 0.36 },
  { frame: 'cherry2', x: -16.6, z: -25.2, height: 3.4, collide: 0.42 },
  { frame: 'tree_round', x: -13.2, z: -25.2, height: 2.6, collide: 0.34 },
  { frame: 'tree_tall', x: -9.8, z: -25.2, height: 3.2, collide: 0.36 },
  { frame: 'flowerbush', x: -19.8, z: -21.0, height: 0.56, collide: 0.24 },
  { frame: 'flowerbush', x: -11.0, z: -24.0, height: 0.58, collide: 0.24 },
  { frame: 'rock', x: -23.4, z: -19.6, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: -15.0, z: -27.4, height: 0.46, collide: 0.24 },
  { frame: 'lamp', x: -7.0, z: -17.4, height: 2.0, collide: 0.22 },

  // ── 채석장 (북동) — 바위가 집중된 돌 수급지
  { frame: 'rock', x: 9.6, z: -13.6, height: 0.56, collide: 0.3 },
  { frame: 'rock', x: 12.6, z: -13.6, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: 15.6, z: -13.6, height: 0.54, collide: 0.28 },
  { frame: 'rock', x: 18.4, z: -13.6, height: 0.52, collide: 0.26 },
  { frame: 'rock', x: 8.8, z: -16.6, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: 11.6, z: -16.6, height: 0.56, collide: 0.3 },
  { frame: 'rock', x: 14.4, z: -16.6, height: 0.52, collide: 0.26 },
  { frame: 'rock', x: 17.2, z: -16.6, height: 0.54, collide: 0.28 },
  { frame: 'rock', x: 20.0, z: -16.6, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: 9.8, z: -19.8, height: 0.52, collide: 0.26 },
  { frame: 'rock', x: 12.8, z: -19.8, height: 0.58, collide: 0.3 },
  { frame: 'rock', x: 15.8, z: -19.8, height: 0.54, collide: 0.28 },
  { frame: 'rock', x: 18.6, z: -19.8, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: 11.0, z: -15.1, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: 13.9, z: -15.1, height: 0.54, collide: 0.28 },
  { frame: 'rock', x: 16.9, z: -15.1, height: 0.48, collide: 0.24 },
  { frame: 'rock', x: 19.4, z: -15.1, height: 0.52, collide: 0.26 },
  { frame: 'rock', x: 10.6, z: -18.2, height: 0.52, collide: 0.26 },
  { frame: 'rock', x: 13.6, z: -18.2, height: 0.56, collide: 0.3 },
  { frame: 'rock', x: 16.6, z: -18.2, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: 12.9, z: -21.3, height: 0.54, collide: 0.28 },
  { frame: 'rock', x: 15.9, z: -21.3, height: 0.5, collide: 0.26 },
  { frame: 'rock', x: 11.2, z: -22.8, height: 0.52, collide: 0.26 },
  { frame: 'rock', x: 14.6, z: -22.8, height: 0.56, collide: 0.3 },
  { frame: 'rock', x: 17.4, z: -22.8, height: 0.5, collide: 0.26 },
  { frame: 'tree_round', x: 21.8, z: -20.2, height: 2.6, collide: 0.34 },
  { frame: 'fence', x: 7.2, z: -19.4, height: 0.66, collide: 0.28 },
  { frame: 'lamp', x: 6.2, z: -17.6, height: 2.0, collide: 0.22 },

  // ── 논 둑 (물 잠긴 논 사각형은 비워 둔다)
  { frame: 'fence', x: -7.6, z: -17.4, height: 0.66, collide: 0.28 },
  { frame: 'fence', x: -7.6, z: -20.6, height: 0.66, collide: 0.28 },
  { frame: 'flowerbush', x: -6.0, z: -22.0, height: 0.56, collide: 0.24 },
  { frame: 'rock', x: -0.2, z: -16.4, height: 0.5, collide: 0.26 },
  { frame: 'lamp', x: 1.8, z: -21.4, height: 2.0, collide: 0.22 },
  { frame: 'tree_round', x: -8.0, z: -22.6, height: 2.6, collide: 0.34 },
];

export const INTERACT = {
  dittoRange: 2.9,
  catRange: 2.2,
  tapRange: 5.0,
  /** 채집(나무·바위·꽃덤불) — 스프라이트 발밑에서 이 거리 안이면 두드릴 수 있다 */
  nodeRange: 2.5,
  /** 건물 복구/창고 메뉴 */
  siteRange: 3.4,
  /** 논 타일 */
  plotRange: 2.5,
};

/**
 * 첫 1분 '웰컴 3단 미션' — 단계마다 코인 +15, 모두 끝나면 배너가 사라진다.
 */
export const WELCOME = {
  reward: 15,
  steps: [
    { id: 'gift', icon: '🎁', label: '우체통 선물 챙기기', hint: '📬 우체통 → 편지의 [선물 받기]' },
    { id: 'ditto', icon: '🔍', label: '메타몽 2마리 찾기', hint: '가까이 다가가 [살펴보기]' },
    { id: 'chop', icon: '🪓', label: '첫 나무 베기', hint: '나무 앞에서 [베기] 를 끝까지' },
  ],
};

export const SAVE = {
  dbName: 'metamong-island',
  store: 'saves',
  key: 'slot1',
  intervalSeconds: 5,
};
