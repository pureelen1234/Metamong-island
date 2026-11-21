/**
 * defenseArt.js — 5단계 방어전 스프라이트 (전부 캔버스 픽셀아트)
 *
 * 섬의 다른 도트와 같은 톤을 맞추기 위해, 새 PNG 를 받아 오지 않고 32×32 픽셀을
 * 직접 찍어 텍스처를 만든다. NearestFilter 라 기기 폰트·해상도에 상관없이 같은 그림이 나온다.
 *
 * 그리는 것: 회색 망토 불청객 3종 / 배 / 나무 울타리 / 메타몽 허수아비 /
 *            물풍선 포탑 / 별빛 경보등 / 물풍선·조약돌 / 어설픈 분신 /
 *            방어 슬롯 표시 · 광장 안전 울타리 링
 */
import * as THREE from 'three';

const cache = new Map();

function pixelCanvas(size = 32) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  return { c, ctx };
}

function toTexture(canvas) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

/** 격자에 색 블록을 찍는 도우미 (x, y, w, h, color) */
function painter(ctx, cell = 1) {
  return (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x * cell, y * cell, w * cell, h * cell);
  };
}

/* ── 불청객 ───────────────────────────────────────────────── */

const RAIDER_PALETTE = {
  grunt: { hood: '#9a96a8', hoodDark: '#6b6779', cloak: '#8a8698', cloakDark: '#615d70', sack: '#d3a872', eye: '#ffe680', belt: '#5a5164' },
  runner: { hood: '#a9b8ad', hoodDark: '#718076', cloak: '#93a598', cloakDark: '#6a7a6f', sack: '#cbb98d', eye: '#fff09a', belt: '#5d6a60' },
  big: { hood: '#87818f', hoodDark: '#544f60', cloak: '#767083', cloakDark: '#4f4a5c', sack: '#c1935f', eye: '#ffd35f', belt: '#463f52' },
};

/**
 * 회색 망토 수집단 — 후드를 눌러쓴 채 어깨에 자루를 멘 모습.
 * 멀리서도 한눈에 보이도록 후드 테두리·얼굴 그늘·노란 점 눈·자루를 크게 잡는다.
 */
export function raiderTexture(kind = 'grunt') {
  const key = `raider:${kind}`;
  if (cache.has(key)) return cache.get(key);
  const pal = RAIDER_PALETTE[kind] || RAIDER_PALETTE.grunt;
  const big = kind === 'big';
  const { c, ctx } = pixelCanvas(32);
  const p = painter(ctx, 1);

  // 후드 — 뾰족한 위, 넓은 어깨. 바깥 테두리를 한 픽셀 밝게 둘러 실루엣을 살린다
  p(13, 1, 6, 1, pal.hood);
  p(11, 2, 10, 1, pal.hood);
  p(10, 3, 12, 1, pal.hood);
  p(9, 4, 14, 2, pal.hood);
  p(8, 6, 16, 5, pal.hood);
  p(8, 6, 1, 5, pal.hoodDark);
  p(23, 6, 1, 5, pal.hoodDark);
  p(9, 11, 14, 1, pal.hoodDark);
  // 얼굴 그늘 — 후드 안쪽은 어둡게 뚫린다
  p(11, 6, 10, 5, '#2f2b3a');
  p(11, 6, 10, 1, '#221f2c');
  p(12, 7, 8, 4, '#3a3547');
  // 노란 점 눈 두 개 (섬의 메타몽처럼 점만) — 3×2 로 크게
  p(12, 8, 3, 2, pal.eye);
  p(18, 8, 3, 2, pal.eye);
  p(12, 8, 1, 1, '#fffce8');
  p(18, 8, 1, 1, '#fffce8');
  // 망토 몸통 — 어깨에서 아래로 퍼지는 사다리꼴
  p(10, 12, 12, 2, pal.cloak);
  p(9, 14, 14, 9, pal.cloak);
  p(9, 14, 2, 9, pal.cloakDark);
  p(21, 14, 2, 9, pal.cloakDark);
  p(10, 23, 12, 1, pal.cloakDark);
  // 망토 주름
  p(13, 15, 1, 7, pal.cloakDark);
  p(19, 15, 1, 7, pal.cloakDark);
  // 허리끈
  p(10, 18, 12, 1, pal.belt);
  // 팔 — 망토 밖으로 삐져나온 손
  p(7, 14, 3, 6, pal.cloak);
  p(7, 19, 3, 2, '#e8d8c4');
  p(22, 15, 3, 6, pal.cloakDark);
  p(22, 20, 3, 2, '#dccdb8');
  // 자루 — 어깨에 걸친 밝은 보따리(멀리서도 눈에 띄게)
  const sx = big ? 20 : 21;
  p(sx, 9, 7, 8, pal.sack);
  p(sx, 9, 7, 1, '#efd3a4');
  p(sx, 16, 7, 1, '#b08453');
  p(sx + 6, 11, 1, 5, '#b08453');
  p(sx + 2, 12, 3, 1, '#a87c4c');
  // 묶은 끈
  p(sx + 1, 8, 5, 1, '#7a5636');
  // 발
  p(10, 24, 4, 2, '#3a3547');
  p(18, 24, 4, 2, '#3a3547');
  if (big) {
    // 덩치는 어깨가 넓고 망토가 길다
    p(7, 12, 18, 2, pal.hoodDark);
    p(8, 23, 16, 2, pal.cloakDark);
  }

  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** 불청객이 실려 오는 배 — 돛 대신 작은 등불 하나 */
export function boatTexture() {
  const key = 'boat';
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(32);
  const p = painter(ctx, 1);
  // 선체
  p(4, 18, 24, 3, '#5b4a63');
  p(6, 21, 20, 3, '#453749');
  p(6, 21, 20, 1, '#6b5872');
  p(9, 24, 14, 1, '#33283a');
  // 뱃전
  p(8, 15, 16, 3, '#6f5b78');
  p(8, 15, 16, 1, '#8a7593');
  // 돛대
  p(15, 4, 2, 12, '#4a3c52');
  // 회색 돛
  p(17, 6, 7, 8, '#9d97a8');
  p(17, 6, 7, 1, '#b8b2c2');
  p(23, 8, 1, 6, '#7d7788');
  // 등불
  p(9, 12, 3, 3, '#ffd98a');
  p(10, 13, 1, 1, '#fff4cf');
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/* ── 방어 설비 ───────────────────────────────────────────── */

/** 🪵 나무 울타리 — 기둥 두 개에 널빤지 세 장 */
export function structureTexture(kind) {
  const key = `structure:${kind}`;
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(32);
  const p = painter(ctx, 1);

  if (kind === 'fence') {
    // 세로 기둥
    p(3, 8, 4, 23, '#8a5a30');
    p(3, 8, 1, 23, '#a9743f');
    p(6, 8, 1, 23, '#6b4423');
    p(25, 8, 4, 23, '#8a5a30');
    p(25, 8, 1, 23, '#a9743f');
    p(28, 8, 1, 23, '#6b4423');
    // 널빤지 세 장 — 위가 밝고 아래가 어둡다
    for (const y of [12, 18, 24]) {
      p(2, y, 28, 4, '#c9925a');
      p(2, y, 28, 1, '#e0b37c');
      p(2, y + 3, 28, 1, '#96633a');
      p(15, y + 1, 1, 2, '#a9743f');
    }
    // 못
    p(6, 13, 1, 1, '#6b4423');
    p(25, 19, 1, 1, '#6b4423');
    // 풀잎
    p(1, 29, 6, 1, '#7fbf62');
    p(24, 29, 7, 1, '#7fbf62');
  } else if (kind === 'scarecrow') {
    // 기둥
    p(15, 10, 3, 21, '#8a5a30');
    p(15, 10, 1, 21, '#a9743f');
    // 가로대
    p(6, 15, 21, 2, '#8a5a30');
    p(6, 15, 21, 1, '#b07c46');
    // 보라 메타몽 인형 — 동글동글
    p(11, 3, 11, 1, '#a98fd8');
    p(9, 4, 15, 2, '#b79ce2');
    p(8, 6, 17, 6, '#b79ce2');
    p(9, 12, 15, 2, '#a184cf');
    p(8, 6, 1, 6, '#9375c0');
    p(24, 6, 1, 6, '#9375c0');
    // 점 눈 · 입
    p(12, 8, 2, 2, '#3a2f4f');
    p(19, 8, 2, 2, '#3a2f4f');
    p(15, 11, 3, 1, '#3a2f4f');
    // 인형을 묶은 밧줄
    p(13, 13, 8, 1, '#f0dcb4');
    // 짚
    p(4, 17, 3, 1, '#e6cf92');
    p(26, 17, 3, 1, '#e6cf92');
    p(14, 30, 5, 2, '#6b4423');
  } else if (kind === 'turret') {
    // 삼각 받침
    p(14, 16, 4, 8, '#8a5a30');
    p(15, 16, 1, 8, '#a9743f');
    p(8, 27, 16, 2, '#96633a');
    p(10, 24, 2, 4, '#8a5a30');
    p(20, 24, 2, 4, '#8a5a30');
    // 물풍선 (크고 동글)
    p(12, 2, 9, 1, '#8ed3ef');
    p(10, 3, 13, 2, '#9fdcf4');
    p(8, 5, 17, 8, '#a9e2f7');
    p(9, 13, 15, 2, '#8ed3ef');
    p(8, 5, 1, 8, '#7cc6e6');
    p(24, 5, 1, 8, '#7cc6e6');
    // 물빛 하이라이트
    p(11, 6, 3, 3, '#e6f8ff');
    p(12, 6, 1, 1, '#ffffff');
    // 고무줄 · 노즐
    p(13, 15, 6, 1, '#f0dcb4');
    p(15, 15, 2, 3, '#6b5a48');
  } else {
    // ⭐ 별빛 경보등 — 기둥 위의 별
    p(15, 10, 2, 21, '#8a7a6a');
    p(15, 10, 1, 21, '#a99887');
    p(11, 29, 10, 2, '#7c6c5c');
    // 별
    p(15, 1, 2, 3, '#ffe89a');
    p(15, 8, 2, 3, '#ffe89a');
    p(10, 4, 3, 2, '#ffe89a');
    p(19, 4, 3, 2, '#ffe89a');
    p(12, 3, 8, 1, '#ffdb6b');
    p(11, 4, 10, 4, '#ffd45c');
    p(12, 8, 8, 1, '#ffc94a');
    p(14, 4, 4, 3, '#fff6c9');
    // 등불 빛
    p(13, 9, 6, 1, 'rgba(255,246,200,0.55)');
    p(9, 12, 14, 1, '#f0dcb4');
  }

  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/* ── 날아가는 것들 ───────────────────────────────────────── */

export function balloonTexture() {
  const key = 'balloon';
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(16);
  const p = painter(ctx, 1);
  p(6, 1, 4, 1, '#9fdcf4');
  p(4, 2, 8, 2, '#a9e2f7');
  p(3, 4, 10, 5, '#b6e8fa');
  p(4, 9, 8, 2, '#8ed3ef');
  p(6, 11, 4, 1, '#7cc6e6');
  p(5, 4, 2, 2, '#eafaff');
  p(7, 12, 2, 1, '#f0dcb4');
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

export function pelletTexture() {
  const key = 'pellet';
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(8);
  const p = painter(ctx, 1);
  p(3, 1, 3, 1, '#e0e2ee');
  p(2, 2, 4, 3, '#c3c6d6');
  p(2, 5, 4, 1, '#a6aabf');
  p(3, 6, 2, 1, '#8f94ac');
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** 어설픈 가짜 분신 — 반투명 보랏빛 메타몽 */
export function decoyTexture() {
  const key = 'decoy';
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(24);
  const p = painter(ctx, 1);
  p(8, 4, 8, 1, '#cbb3f0');
  p(6, 5, 12, 2, '#d8c3f7');
  p(5, 7, 14, 8, '#d8c3f7');
  p(6, 15, 12, 2, '#bfa8e6');
  p(8, 17, 8, 1, '#a98fd8');
  // 점 눈
  p(9, 10, 2, 2, '#4a3b66');
  p(14, 10, 2, 2, '#4a3b66');
  p(11, 14, 3, 1, '#7f6a9c');
  // 흔들리는 밑동
  p(7, 19, 10, 1, 'rgba(190,170,230,0.55)');
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/* ── 바닥 표시 ───────────────────────────────────────────── */

/** 방어 슬롯 표시 — 점선 원 + 작은 십자 */
export function slotMarkerTexture() {
  const key = 'slotMarker';
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 96;
  const ctx = c.getContext('2d');
  ctx.strokeStyle = 'rgba(255, 226, 160, 0.95)';
  ctx.lineWidth = 5;
  ctx.setLineDash([11, 9]);
  ctx.beginPath();
  ctx.arc(48, 48, 38, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.strokeStyle = 'rgba(255, 245, 210, 0.9)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(48, 34);
  ctx.lineTo(48, 62);
  ctx.moveTo(34, 48);
  ctx.lineTo(62, 48);
  ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, tex);
  return tex;
}

/** 광장 안전 울타리 — 민트색 점선 링 */
export function safeRingTexture() {
  const key = 'safeRing';
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 192;
  const ctx = c.getContext('2d');
  ctx.strokeStyle = 'rgba(150, 232, 200, 0.95)';
  ctx.lineWidth = 7;
  ctx.setLineDash([18, 14]);
  ctx.beginPath();
  ctx.arc(96, 96, 86, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(96, 96, 78, 0, Math.PI * 2);
  ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, tex);
  return tex;
}
