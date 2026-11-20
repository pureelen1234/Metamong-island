/**
 * config.js — 섬 전체가 공유하는 단일 상수 원천
 * GDD v1.6: 1일 = 실시간 20분, 아침 5 / 낮 7 / 노을 4 / 밤 4(분)
 */

// ── World / Terrain ────────────────────────────────────────────────
export const GRID = 48; // 48×48 그리드
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
// 색은 모두 파스텔. 0초의 '새벽'과 1200초(다음 날 0초)가 이어지도록 마지막에 복제본을 둔다.
const KEY_DAWN = {
  t: 0,
  top: '#8fb6de',
  bottom: '#ffd9c0',
  fog: '#f6dbd2',
  sun: '#ffcda3',
  sunIntensity: 0.62,
  hemiSky: '#ffe3d3',
  hemiGround: '#bdd7b6',
  hemiIntensity: 0.55,
  night: 0.18,
};
const KEY_MORNING = {
  t: 110,
  top: '#9bd3f2',
  bottom: '#f8e6d9',
  fog: '#f7e7dc',
  sun: '#ffe0b4',
  sunIntensity: 0.85,
  hemiSky: '#fff0dc',
  hemiGround: '#c6e2be',
  hemiIntensity: 0.55,
  night: 0,
};
const KEY_DAY = {
  t: 330,
  top: '#7cc6ef',
  bottom: '#e2f5ff',
  fog: '#def0f7',
  sun: '#fff8ea',
  sunIntensity: 0.58,
  hemiSky: '#f0fbff',
  hemiGround: '#cbeac6',
  hemiIntensity: 0.48,
  night: 0,
};
const KEY_SUNSET = {
  t: 800,
  top: '#c9a0ce',
  bottom: '#ffd2a8',
  fog: '#ffd0b9',
  sun: '#ffb683',
  sunIntensity: 0.72,
  hemiSky: '#ffe2c8',
  hemiGround: '#c8cbb0',
  hemiIntensity: 0.5,
  night: 0.06,
};
const KEY_DUSK = {
  t: 915,
  top: '#5c6b9e',
  bottom: '#e8b6b4',
  fog: '#a6a2c4',
  sun: '#ffa98f',
  sunIntensity: 0.45,
  hemiSky: '#c9c2d8',
  hemiGround: '#aeb3a8',
  hemiIntensity: 0.45,
  night: 0.42,
};
const KEY_NIGHT = {
  t: 980,
  top: '#28334f',
  bottom: '#6b79a4',
  fog: '#525d84',
  sun: '#dbe6ff',
  sunIntensity: 0.3,
  hemiSky: '#8894bd',
  hemiGround: '#5d688c',
  hemiIntensity: 0.42,
  night: 1,
};
const KEY_PREDAWN = {
  t: 1170,
  top: '#43507c',
  bottom: '#8b93b8',
  fog: '#7c82a3',
  sun: '#cfdcf8',
  sunIntensity: 0.35,
  hemiSky: '#a9b2d2',
  hemiGround: '#717b9b',
  hemiIntensity: 0.42,
  night: 0.72,
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
};
export const CAMERA = {
  fov: 55,
  offset: { x: 0, y: 5.2, z: 11.2 },
  lookHeight: 1.45,
  lerp: 6.5,
};

// ── 섬 배치 ───────────────────────────────────────────────────────
export const SPAWN = { x: 1.0, z: 10.0 };

/** 4단계 복구 예정 부지 (부두·공방·고양이 쉼터·등대) */
export const LANDMARKS = [
  { id: 'dock', name: '부두', icon: '⚓', day: 5, x: 0, z: 20.4, rot: 0, markerY: 3.0 },
  { id: 'workshop', name: '공방', icon: '🔨', day: 10, x: -6.5, z: 3.0, rot: 0.35, markerY: 3.0 },
  { id: 'shelter', name: '고양이 쉼터', icon: '🐾', day: 17, x: 7.0, z: 2.0, rot: -0.4, markerY: 2.6 },
  { id: 'lighthouse', name: '등대', icon: '🗼', day: 24, x: 8.0, z: -8.0, rot: 0, markerY: 5.4 },
];

/** 어설픈 위장 메타몽 2마리 (부록 A #01 · #02) */
export const DITTOS = [
  {
    id: 'ditto_pebble_01',
    name: '조약돌 메타몽',
    x: -4.0,
    z: 12.6,
    variant: 'pebble',
    flavor: '조약돌인 척하지만 가끔 숨을 쉰다.',
  },
  {
    id: 'ditto_boulder_02',
    name: '바위 메타몽',
    x: 11.5,
    z: -2.5,
    variant: 'boulder',
    flavor: '이끼 낀 바위인 척. 눈은 못 숨긴다.',
  },
];

/** 솜이 · 옹이 */
export const CATS = [
  { id: 'somi', name: '솜이', x: 6.2, z: 2.8, variant: 'white' },
  { id: 'ongi', name: '옹이', x: 7.9, z: 1.4, variant: 'ginger' },
];

/** 프롭: 우체통·표지판·캠프파이어·밥그릇 */
export const PROPS = [
  { id: 'mailbox', kind: 'mailbox', x: 2.8, z: 16.4, rot: -0.4 },
  { id: 'sign', kind: 'sign', x: 0.6, z: 13.4, rot: 0.18 },
  { id: 'campfire', kind: 'campfire', x: 4.6, z: 7.2, rot: 0 },
  { id: 'bowl', kind: 'bowl', x: 6.0, z: 3.4, rot: 0 },
];

export const INTERACT = {
  dittoRange: 2.9,
  catRange: 2.2,
  tapRange: 5.0,
};

export const SAVE = {
  dbName: 'metamong-island',
  store: 'saves',
  key: 'slot1',
  intervalSeconds: 5,
};
