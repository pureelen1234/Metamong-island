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
  fov: 58,
  offset: { x: 0, y: 7.4, z: 9.0 },
  lookHeight: 0.7,
  lerp: 6.5,
};

// ── 섬 배치 ───────────────────────────────────────────────────────
export const SPAWN = { x: 0.6, z: 13.0 };

/** 복구 부지 · 도트 건물 4종 (공방·등대·자판기·부두) */
export const LANDMARKS = [
  { id: 'dock', name: '부두', icon: '⚓', day: 5, x: 0, z: 20.4, markerY: 2.2, height: 1.7, water: true },
  { id: 'workshop', name: '공방', icon: '🔨', day: 10, x: -6.5, z: 3.0, markerY: 3.4, height: 2.8 },
  { id: 'vending', name: '메타몽 자판기', icon: '🥤', day: 17, x: 7.0, z: 2.0, markerY: 2.4, height: 1.8 },
  { id: 'lighthouse', name: '등대', icon: '🗼', day: 24, x: 8.0, z: -8.0, markerY: 5.6, height: 4.4 },
];

/**
 * 어설픈 메타몽 7마리 — 기본 1 + 위장 6종(조약돌·우체통·화분·벤치·버섯·이정표)
 * thumb: 도감 카드에서 잘라 보여 줄 아틀라스 셀
 */
export const DITTOS = [
  {
    id: 'ditto_basic_01',
    name: '동글 메타몽',
    x: -7.0,
    z: 10.0,
    variant: 'basic',
    height: 0.86,
    thumb: { set: 'ditto_basic', row: 1, col: 1 },
    flavor: '변신을 포기한 동글 메타몽. 점 눈만 남았다.',
  },
  {
    id: 'ditto_pebble_02',
    name: '조약돌 메타몽',
    x: -4.0,
    z: 12.6,
    variant: 'pebble',
    height: 0.52,
    thumb: { set: 'disguises', row: 1, col: 1 },
    flavor: '조약돌인 척하지만 가끔 숨을 쉰다.',
  },
  {
    id: 'ditto_mailbox_03',
    name: '우체통 메타몽',
    x: 2.8,
    z: 16.4,
    variant: 'mailbox',
    height: 1.1,
    thumb: { set: 'disguises', row: 1, col: 2 },
    flavor: '편지가 없어도 우체통인 척. 손잡이가 살짝 흔들린다.',
  },
  {
    id: 'ditto_flowerpot_04',
    name: '화분 메타몽',
    x: -2.5,
    z: 8.0,
    variant: 'flowerpot',
    height: 0.85,
    thumb: { set: 'disguises', row: 1, col: 3 },
    flavor: '물을 안 줘도 잎이 파랗다. 그게 수상하다.',
  },
  {
    id: 'ditto_bench_05',
    name: '벤치 메타몽',
    x: 5.5,
    z: 8.5,
    variant: 'bench',
    height: 0.9,
    thumb: { set: 'disguises', row: 2, col: 1 },
    flavor: '앉으라고 만든 벤치인데, 앉으면 도망간다.',
  },
  {
    id: 'ditto_mushroom_06',
    name: '버섯 메타몽',
    x: 3.5,
    z: 14.0,
    variant: 'mushroom',
    height: 0.78,
    thumb: { set: 'disguises', row: 2, col: 2 },
    flavor: '빨간 갓에 흰 점. 먹으면 안 될 것 같다.',
  },
  {
    id: 'ditto_signpost_07',
    name: '이정표 메타몽',
    x: -1.5,
    z: 16.0,
    variant: 'signpost',
    height: 1.15,
    thumb: { set: 'disguises', row: 2, col: 3 },
    flavor: '어디로 가라는 건지 본인도 모른다.',
  },
];

/** 솜이 · 옹이 */
export const CATS = [
  { id: 'somi', name: '솜이', x: 5.5, z: 3.4, set: 'somi', height: 0.74 },
  { id: 'ongi', name: '옹이', x: 8.6, z: 1.1, set: 'ongi', height: 0.7 },
];

/**
 * 도트 자연물 배치 (아틀라스 프레임 이름 그대로)
 * height = 스프라이트가 차지하는 월드 높이, collide = 플레이어 충돌 반경
 */
export const NATURE = [
  { frame: 'cherry1', x: -10.5, z: 6.5, height: 3.0, collide: 0.45 },
  { frame: 'cherry2', x: -11.6, z: 12.4, height: 3.4, collide: 0.5 },
  { frame: 'cherry1', x: 10.6, z: -1.6, height: 3.2, collide: 0.45 },
  { frame: 'tree_round', x: 9.6, z: 5.6, height: 2.7, collide: 0.42 },
  { frame: 'tree_round', x: -5.4, z: -2.4, height: 2.5, collide: 0.4 },
  { frame: 'tree_tall', x: -4.6, z: 17.6, height: 3.1, collide: 0.4 },
  { frame: 'tree_tall', x: 12.4, z: 8.8, height: 3.3, collide: 0.4 },
  { frame: 'tree_round', x: -13.2, z: -1.2, height: 2.9, collide: 0.42 },
  { frame: 'tree_tall', x: 2.6, z: -6.8, height: 2.9, collide: 0.4 },
  { frame: 'flowerbush', x: 6.6, z: 12.2, height: 0.72, collide: 0.3 },
  { frame: 'flowerbush', x: -8.2, z: 2.6, height: 0.66, collide: 0.3 },
  { frame: 'flowerbush', x: -3.2, z: 4.6, height: 0.6, collide: 0.28 },
  { frame: 'flowerbush', x: 4.2, z: 17.8, height: 0.62, collide: 0.28 },
  { frame: 'rock', x: 10.2, z: 9.4, height: 0.62, collide: 0.45 },
  { frame: 'rock', x: -9.4, z: 15.2, height: 0.55, collide: 0.42 },
  { frame: 'rock', x: 1.4, z: 7.6, height: 0.46, collide: 0.35 },
  { frame: 'fence', x: 3.4, z: 11.0, height: 0.66, collide: 0.35 },
  { frame: 'fence', x: 3.4, z: 12.6, height: 0.66, collide: 0.35 },
  { frame: 'fence', x: -1.0, z: 13.0, height: 0.66, collide: 0.35 },
  { frame: 'lamp', x: 1.6, z: 15.2, height: 2.0, collide: 0.25 },
  { frame: 'lamp', x: -3.4, z: 10.4, height: 2.0, collide: 0.25 },
  { frame: 'lamp', x: 4.6, z: 6.0, height: 2.0, collide: 0.25 },
  { frame: 'flowerbush', x: -2.2, z: 13.4, height: 0.58, collide: 0.26 },
  { frame: 'flowerbush', x: 1.9, z: 12.1, height: 0.62, collide: 0.28 },
  { frame: 'rock', x: 4.9, z: 13.9, height: 0.5, collide: 0.38 },
  { frame: 'cherry1', x: -6.4, z: 13.0, height: 2.9, collide: 0.42 },
  { frame: 'tree_tall', x: 6.8, z: 15.6, height: 3.0, collide: 0.4 },
  { frame: 'tree_round', x: 9.2, z: 12.6, height: 2.6, collide: 0.4 },
  { frame: 'flowerbush', x: 7.4, z: 9.2, height: 0.6, collide: 0.28 },
  { frame: 'fence', x: -1.8, z: 18.4, height: 0.66, collide: 0.35 },
  { frame: 'cherry2', x: -4.8, z: 9.4, height: 3.2, collide: 0.46 },
  { frame: 'tree_round', x: 5.2, z: 11.6, height: 2.5, collide: 0.4 },
  { frame: 'flowerbush', x: 0.2, z: 7.4, height: 0.58, collide: 0.26 },
  { frame: 'flowerbush', x: 3.6, z: 6.6, height: 0.54, collide: 0.26 },
  { frame: 'rock', x: -1.8, z: 6.6, height: 0.44, collide: 0.32 },
  { frame: 'lamp', x: 3.8, z: 14.8, height: 2.0, collide: 0.25 },
  { frame: 'cherry1', x: -3.4, z: 15.8, height: 3.0, collide: 0.45 },
  { frame: 'tree_round', x: 4.6, z: 16.4, height: 2.6, collide: 0.42 },
  { frame: 'flowerbush', x: 1.2, z: 15.4, height: 0.56, collide: 0.24 },
  { frame: 'flowerbush', x: -2.4, z: 11.0, height: 0.6, collide: 0.26 },
  { frame: 'rock', x: 5.6, z: 11.4, height: 0.5, collide: 0.35 },
  { frame: 'cherry1', x: -3.2, z: 11.8, height: 3.1, collide: 0.45 },
  { frame: 'tree_round', x: 3.4, z: 9.9, height: 2.5, collide: 0.4 },
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
