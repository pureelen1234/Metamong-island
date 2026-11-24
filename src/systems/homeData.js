/**
 * homeData.js — 7단계 하우징의 단일 데이터 원천
 *
 * · HOUSE : 섬에 세워진 내 집(오두막보다 큰 살림집)의 자리·문·상호작용 거리
 * · ROOM  : 실내(거실) 크기·바닥 격자·벽면 정의
 * · FURNITURE : 가구 12종 — 바닥 가구 8종 + 벽면 가구 4종
 *
 * 화면(Phase7Panels)·3D(Home.js)·세이브(Progress)가 모두 이 파일만 읽는다.
 */

/** 내 집 — 남쪽 생활권, 광장 북동쪽 잔디밭. 문은 남쪽(광장 쪽)을 향한다 */
export const HOUSE = {
  id: 'home',
  name: '내 집',
  icon: '🏠',
  x: 3.2,
  z: 8.6,
  /** 집 그림이 차지하는 월드 높이 */
  height: 3.8,
  /** 문 앞 상호작용 지점 (집 남쪽 면 바로 앞) */
  door: { x: 3.2, z: 10.4 },
  /** [들어가기] 가 뜨는 거리 */
  range: 2.3,
  /** 충돌 반경(집 그림 폭의 절반보다 조금 작게) */
  collide: 1.5,
};

/**
 * 실내(거실) — 별도 씬으로 그리는 방.
 * 바닥은 x(가로) × z(세로), 벽은 뒤(back, -z)·왼쪽(left, -x)·오른쪽(right, +x) 세 면.
 * 앞면(카메라 쪽)은 벽을 세우지 않는 돌하우스 시점이다.
 */
export const ROOM = {
  width: 5.2,
  depth: 7.0,
  wallHeight: 3.0,
  /** 가구를 놓는 바닥 격자 간격 */
  grid: 0.2,
  /** 바닥 가구를 놓을 수 있는 안쪽 여백 */
  margin: 0.45,
  /** 벽면 가구가 붙는 벽면에서 살짝 띄우는 거리 */
  wallGap: 0.06,
  /** 벽면 가구를 붙일 수 있는 벽 인식 거리 */
  wallSnap: 1.35,
  /** 실내에 동시에 놓을 수 있는 가구 수(성능 상한) */
  maxPlaced: 26,
  /** 회전 한 번에 도는 각도(바닥 가구) */
  rotateStep: Math.PI / 4,
};

/**
 * 가구 정의
 *  kind: 'floor' | 'wall'
 *  flat: 바닥에 눕는 가구(러그) — 회전이 그대로 보인다
 *  w/h: 월드 단위 크기, mount: 벽에 걸리는 높이(바닥 기준)
 *  cost: 재료 + coin
 *  effect: 가구 기능 메타데이터 (rest / storage / decor)
 */
export const FURNITURE = {
  bed: {
    id: 'bed',
    name: '포근한 침대',
    icon: '🛏️',
    kind: 'floor',
    w: 2.2,
    h: 1.3,
    cost: { log: 6, petal: 4, coin: 210 },
    effect: { kind: 'rest', comfort: 4, label: '침대에서 쉬면 기력 전부 회복' },
    desc: '솜이·옹이가 먼저 차지할지도 몰라요. 침대에서 쉬면 기력을 전부 회복해요.',
  },
  desk: {
    id: 'desk',
    name: '작은 책상',
    icon: '📚',
    kind: 'floor',
    w: 1.7,
    h: 1.05,
    cost: { log: 5, stone: 2, coin: 120 },
    effect: { kind: 'decor', comfort: 2, label: '방 안락도 +2' },
    desc: '편지 쓰고 도감 정리하기 좋은 나무 책상.',
  },
  chair: {
    id: 'chair',
    name: '나무 의자',
    icon: '🪑',
    kind: 'floor',
    w: 0.85,
    h: 0.85,
    cost: { log: 3, coin: 45 },
    effect: { kind: 'decor', comfort: 1, label: '방 안락도 +1' },
    desc: '책상 옆에 하나. 앉으면 마음이 느긋해져요.',
  },
  rug: {
    id: 'rug',
    name: '둥근 러그',
    icon: '🟫',
    kind: 'floor',
    flat: true,
    w: 3.0,
    h: 2.2,
    cost: { petal: 6, driftwood: 1, coin: 65 },
    effect: { kind: 'decor', comfort: 2, label: '방 안락도 +2' },
    desc: '발끝이 포근한 둥근 러그. 방 한가운데 깔아 두면 좋아요.',
  },
  plant: {
    id: 'plant',
    name: '화분',
    icon: '🪴',
    kind: 'floor',
    w: 0.8,
    h: 1.15,
    cost: { petal: 3, stone: 2, coin: 55 },
    effect: { kind: 'decor', comfort: 1, label: '방 안락도 +1' },
    desc: '물을 안 줘도 파란 잎. 메타몽이 아닐까 의심되는 화분.',
  },
  sofa: {
    id: 'sofa',
    name: '구름 소파',
    icon: '🛋️',
    kind: 'floor',
    w: 2.0,
    h: 1.0,
    cost: { log: 5, petal: 5, berry: 2, coin: 250 },
    effect: { kind: 'decor', comfort: 4, label: '방 안락도 +4' },
    desc: '솜이랑 나란히 앉기 좋은 폭신한 소파.',
  },
  cabinet: {
    id: 'cabinet',
    name: '서랍장',
    icon: '🗄️',
    kind: 'floor',
    w: 1.4,
    h: 1.2,
    cost: { log: 6, copper: 1, coin: 170 },
    effect: { kind: 'storage', comfort: 3, label: '집 안에서 공방 창고 원격 이용' },
    desc: '통나무 서랍 세 칸. 구리 손잡이가 반짝이며 공방 창고와 연결돼요.',
  },
  lamp: {
    id: 'lamp',
    name: '스탠드 조명',
    icon: '🕯️',
    kind: 'floor',
    w: 0.7,
    h: 1.5,
    cost: { stone: 2, star: 1, mist_mushroom: 1, coin: 150 },
    effect: { kind: 'decor', comfort: 3, label: '방 안락도 +3' },
    desc: '별조각과 안개 버섯 빛을 담은 스탠드. 밤에도 방이 포근해요.',
  },
  // ── 벽면 가구 4종 — 벽 가까이 놓으면 벽에 딱 붙는다
  picture: {
    id: 'picture',
    name: '바다 액자',
    icon: '🖼️',
    kind: 'wall',
    w: 1.15,
    h: 0.9,
    mount: 1.65,
    cost: { log: 2, petal: 2, deep_pearl: 1, coin: 140 },
    effect: { kind: 'decor', comfort: 3, label: '방 안락도 +3' },
    desc: '심해 진주로 테두리를 장식한 바다 액자. 벽에 걸면 방이 넓어 보여요.',
  },
  shelf: {
    id: 'shelf',
    name: '나무 선반',
    icon: '📦',
    kind: 'wall',
    w: 1.5,
    h: 0.5,
    mount: 1.95,
    cost: { log: 4, stone: 1, coin: 95 },
    effect: { kind: 'decor', comfort: 2, label: '방 안락도 +2' },
    desc: '자판기에서 산 물건을 올려 두는 얇은 선반.',
  },
  window: {
    id: 'window',
    name: '둥근 창문',
    icon: '🪟',
    kind: 'wall',
    w: 1.35,
    h: 1.2,
    mount: 1.6,
    cost: { log: 3, crystal: 1, coin: 180 },
    effect: { kind: 'decor', comfort: 3, label: '방 안락도 +3' },
    desc: '수정을 갈아 만든 유리창. 낮에는 햇빛이 방에 내려앉아요.',
  },
  wall_lamp: {
    id: 'wall_lamp',
    name: '벽등',
    icon: '💡',
    kind: 'wall',
    w: 0.55,
    h: 0.75,
    mount: 2.15,
    cost: { star: 1, copper: 1, coin: 130 },
    effect: { kind: 'decor', comfort: 2, label: '방 안락도 +2' },
    desc: '작은 벽등. 밤에 켜 두면 벽에 별빛이 번져요.',
  },
};

export const FURNITURE_ORDER = ['bed', 'desk', 'chair', 'rug', 'plant', 'sofa', 'cabinet', 'lamp', 'picture', 'shelf', 'window', 'wall_lamp'];
export const FLOOR_FURNITURE = FURNITURE_ORDER.filter((id) => FURNITURE[id].kind === 'floor');
export const WALL_FURNITURE = FURNITURE_ORDER.filter((id) => FURNITURE[id].kind === 'wall');

/** 벽면 이름 → 안내 */
export const WALL_NAMES = { back: '뒤쪽 벽', left: '왼쪽 벽', right: '오른쪽 벽' };
/** [회전] 한 번에 벽면 가구가 옮겨 가는 순서 */
export const WALL_CYCLE = ['back', 'right', 'left'];

/** 가구 정의 조회 (없으면 null) */
export function furnitureOf(id) {
  return FURNITURE[id] || null;
}

/** 이 가구가 벽면 가구인가 */
export const isWallFurniture = (id) => !!(FURNITURE[id] && FURNITURE[id].kind === 'wall');
