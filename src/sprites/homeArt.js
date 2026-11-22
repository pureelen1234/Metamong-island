/**
 * homeArt.js — 7단계 하우징의 도트 그림 (전부 캔버스 픽셀아트)
 *
 * 새 PNG 를 받아 오지 않고 32~96px 픽셀을 직접 찍어 NearestFilter 텍스처를 만든다.
 *   · houseTexture()   : 섬에 세운 내 집(지붕·문·창문·굴뚝)
 *   · floorTexture()   : 실내 마룻바닥(널빤지)
 *   · wallTexture()    : 실내 벽지(크림 + 아래쪽 걸레받이)
 *   · furnitureTexture(id) : 가구 12종 (침대·책상·의자·러그·화분·소파·서랍장·스탠드·액자·선반·창문·벽등)
 *
 * 섬의 다른 도트와 같은 톤(파스텔 + 1px 외곽선)을 쓴다.
 */
import * as THREE from 'three';

const cache = new Map();

function pixelCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  return { c, ctx };
}

function toTexture(c, { repeat = null } = {}) {
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  if (repeat) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat[0], repeat[1]);
  }
  tex.needsUpdate = true;
  return tex;
}

/** 1px 외곽선 — 실루엣이 또렷해진다 */
function addOutline(ctx, w, h, color = 'rgba(62,44,60,1)') {
  const img = ctx.getImageData(0, 0, w, h);
  const src = new Uint8ClampedArray(img.data);
  const at = (x, y) => src[(y * w + x) * 4 + 3];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (src[i + 3] > 40) continue;
      const near =
        (x > 0 && at(x - 1, y) > 120) ||
        (x < w - 1 && at(x + 1, y) > 120) ||
        (y > 0 && at(x, y - 1) > 120) ||
        (y < h - 1 && at(x, y + 1) > 120);
      if (!near) continue;
      img.data[i] = 86;
      img.data[i + 1] = 66;
      img.data[i + 2] = 84;
      img.data[i + 3] = 230;
    }
  }
  ctx.putImageData(img, 0, 0);
}

const px = (ctx) => (x, y, w, h, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

/* ── 집 외형 ──────────────────────────────────────────────── */

export function houseTexture() {
  if (cache.has('house')) return cache.get('house');
  const { c, ctx } = pixelCanvas(96, 84);
  const p = px(ctx);
  // 지붕 — 분홍 기와. 위로 좁아지는 사다리꼴
  p(10, 30, 76, 5, '#e38aa8');
  p(16, 24, 64, 7, '#eda0b8');
  p(24, 17, 48, 8, '#f2b4c6');
  p(34, 10, 28, 8, '#f8c8d6');
  p(44, 5, 8, 6, '#fbd8e2');
  for (let i = 0; i < 8; i++) p(14 + i * 9, 35, 8, 3, '#d77b9b');
  p(8, 34, 80, 3, '#c96d8c');
  // 지붕 하이라이트
  p(30, 19, 20, 2, '#ffe2ea');
  p(36, 12, 12, 2, '#fff0f4');
  // 몸체 — 크림색 벽
  p(14, 37, 68, 40, '#fdf2dc');
  p(14, 37, 5, 40, '#f1e2c6');
  p(77, 37, 5, 40, '#e8d6b6');
  p(14, 74, 68, 3, '#d8c3a2');
  // 벽 목재 기둥
  p(16, 40, 3, 34, '#d8b98d');
  p(59, 40, 3, 34, '#d8b98d');
  p(77, 40, 3, 34, '#d8b98d');
  // 굴뚝
  p(68, 12, 10, 16, '#d9c8bc');
  p(67, 9, 12, 4, '#c4b2a6');
  p(70, 14, 6, 2, '#efe2d8');
  // 창문 두 개 — 둥근 아치
  const win = (x, y) => {
    p(x, y, 16, 15, '#ffd9a8');
    p(x + 1, y + 1, 14, 13, '#bfe6f6');
    p(x + 2, y + 2, 12, 5, '#d9f2fb');
    p(x + 7, y + 1, 2, 13, '#fff6e6');
    p(x + 1, y + 7, 14, 2, '#fff6e6');
    p(x, y + 15, 16, 2, '#e8c79c');
  };
  win(22, 45);
  win(61, 45);
  // 문 — 아치형 나무문 + 손잡이
  p(40, 50, 20, 27, '#c8825a');
  p(41, 49, 18, 2, '#b06f4c');
  p(42, 51, 16, 24, '#dda277');
  p(44, 54, 12, 3, '#c98a5f');
  p(44, 60, 12, 3, '#c98a5f');
  p(44, 66, 12, 3, '#c98a5f');
  p(55, 63, 2, 2, '#ffe6b0');
  p(38, 76, 24, 3, '#b9a184');
  // 담쟁이 잎
  p(20, 70, 4, 4, '#a8d8a0');
  p(25, 73, 3, 3, '#bde4b2');
  p(72, 71, 4, 4, '#a8d8a0');
  // 문 위 작은 등
  p(48, 44, 5, 3, '#ffe9b8');

  addOutline(ctx, 96, 84);
  const tex = toTexture(c);
  cache.set('house', tex);
  return tex;
}

/* ── 실내 바닥 · 벽지 ─────────────────────────────────────── */

export function floorTexture() {
  if (cache.has('floor')) return cache.get('floor');
  const { c, ctx } = pixelCanvas(128, 128);
  const p = px(ctx);
  p(0, 0, 128, 128, '#d6b78c');
  for (let row = 0; row < 8; row++) {
    const y = row * 16;
    p(0, y, 128, 15, row % 2 ? '#d2b183' : '#ddc094');
    p(0, y + 15, 128, 1, '#b38f65');
    const off = row % 2 ? 16 : 0;
    for (let x = off; x < 128; x += 32) p(x, y, 1, 15, '#bf9c72');
    // 나뭇결
    p(8 + off, y + 5, 12, 1, '#dcbb92');
    p(48 + off, y + 9, 16, 1, '#dcbb92');
  }

  const tex = toTexture(c, { repeat: [2, 2] });
  cache.set('floor', tex);
  return tex;
}

export function wallTexture() {
  if (cache.has('wall')) return cache.get('wall');
  const { c, ctx } = pixelCanvas(128, 128);
  const p = px(ctx);
  p(0, 0, 128, 128, '#f2e4cb');
  // 옅은 세로 줄무늬 벽지
  for (let x = 0; x < 128; x += 16) p(x, 0, 2, 128, '#e9d7bb');
  for (let x = 8; x < 128; x += 16) p(x + 1, 0, 1, 128, '#f1e0c6');
  // 위쪽 크림 하이라이트
  p(0, 0, 128, 10, '#f8eeda');
  // 아래쪽 걸레받이
  p(0, 110, 128, 18, '#dcc19b');
  p(0, 108, 128, 3, '#d9bf99');
  p(0, 96, 128, 1, '#efdcc0');

  const tex = toTexture(c);
  cache.set('wall', tex);
  return tex;
}

/* ── 가구 12종 ────────────────────────────────────────────── */

function drawFurniture(id, ctx) {
  const p = px(ctx);
  if (id === 'bed') {
    // 머리판 + 이불 + 베개
    p(3, 8, 42, 32, '#d0ac7c');
    p(4, 9, 40, 30, '#f2ddbd');
    p(4, 24, 40, 15, '#f3a9c1');
    p(6, 25, 36, 3, '#ffd8e3');
    p(6, 32, 36, 2, '#f6bccd');
    p(6, 11, 14, 10, '#ffffff');
    p(7, 12, 12, 8, '#fff6e8');
    p(3, 36, 42, 4, '#a9743f');
    p(3, 40, 4, 4, '#b07f4d');
    p(41, 40, 4, 4, '#b07f4d');
    p(3, 8, 42, 2, '#d8b487');
  } else if (id === 'desk') {
    // 상판 + 다리 + 책 두 권
    p(2, 18, 44, 4, '#b9834f');
    p(2, 18, 44, 1, '#dcaa74');
    p(4, 22, 4, 16, '#b9834f');
    p(40, 22, 4, 16, '#b9834f');
    p(10, 24, 26, 2, '#c69257');
    p(12, 10, 8, 8, '#8fb7d9');
    p(21, 12, 7, 6, '#e2869b');
    p(30, 13, 6, 5, '#a8d8a0');
    p(6, 34, 36, 2, '#c9a273');
  } else if (id === 'chair') {
    p(10, 6, 28, 5, '#a9743f');
    p(12, 11, 4, 12, '#b57b4c');
    p(32, 11, 4, 12, '#b57b4c');
    p(8, 22, 32, 5, '#b9834f');
    p(9, 22, 30, 2, '#d8a26a');
    p(10, 27, 4, 14, '#a9703f');
    p(34, 27, 4, 14, '#a9703f');
    p(14, 30, 20, 2, '#c08a55');
  } else if (id === 'rug') {
    // 둥근 러그 — 위에서 본 모양 (바닥에 눕는다)
    ctx.fillStyle = '#f6c6d4';
    ctx.beginPath();
    ctx.ellipse(24, 24, 23, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fde3ea';
    ctx.beginPath();
    ctx.ellipse(24, 24, 17, 13, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#eaa9bd';
    ctx.beginPath();
    ctx.ellipse(24, 24, 9, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    p(23, 4, 2, 2, '#ffffff');
    p(23, 42, 2, 2, '#ffffff');
  } else if (id === 'plant') {
    // 화분 + 잎
    p(14, 30, 20, 4, '#cf8b64');
    p(13, 34, 22, 12, '#d99a72');
    p(14, 35, 20, 2, '#eab392');
    p(17, 38, 14, 6, '#b8764f');
    p(22, 12, 4, 20, '#8fbf7f');
    p(12, 16, 10, 5, '#a8d79a');
    p(26, 18, 10, 5, '#a8d79a');
    p(16, 8, 8, 6, '#c0e8ae');
    p(25, 10, 7, 5, '#9ccf8c');
    p(20, 20, 5, 4, '#b9e2a6');
  } else if (id === 'sofa') {
    p(2, 12, 44, 20, '#f7b9cd');
    p(2, 10, 8, 24, '#eda3ba');
    p(38, 10, 8, 24, '#eda3ba');
    p(6, 26, 36, 12, '#fbd3df');
    p(8, 16, 15, 9, '#fff0f5');
    p(25, 16, 15, 9, '#fff0f5');
    p(22, 16, 2, 12, '#f4c2d2');
    p(6, 38, 6, 4, '#c99a63');
    p(36, 38, 6, 4, '#c99a63');
    p(4, 11, 40, 2, '#ffeaf1');
  } else if (id === 'cabinet') {
    p(4, 6, 40, 36, '#a9743f');
    p(5, 7, 38, 34, '#c48d5c');
    p(7, 10, 34, 9, '#c98f5c');
    p(7, 21, 34, 9, '#c98f5c');
    p(7, 32, 34, 7, '#c98f5c');
    p(8, 11, 32, 7, '#e6b686');
    p(8, 22, 32, 7, '#e6b686');
    p(8, 33, 32, 5, '#e6b686');
    p(22, 14, 4, 2, '#f2c98a');
    p(22, 25, 4, 2, '#f2c98a');
    p(22, 35, 4, 2, '#f2c98a');
    p(4, 6, 40, 2, '#efc79a');
    p(6, 42, 4, 3, '#a9703f');
    p(38, 42, 4, 3, '#a9703f');
  } else if (id === 'lamp') {
    // 스탠드 — 받침·기둥·갓
    p(16, 42, 16, 4, '#c7a97f');
    p(22, 22, 4, 20, '#b08a5f');
    p(12, 10, 24, 12, '#ffd98a');
    p(14, 8, 20, 3, '#fff1c8');
    p(12, 20, 24, 2, '#f5cf87');
    p(16, 12, 6, 6, '#fff8e0');
  } else if (id === 'picture') {
    // 액자 — 나무 틀 + 바다 그림
    p(2, 2, 44, 44, '#c98f5c');
    p(3, 3, 42, 42, '#f6e7c8');
    p(6, 6, 36, 36, '#ffcf9a');
    p(6, 6, 36, 14, '#bfe6f6');
    p(6, 20, 36, 8, '#8fe0d8');
    p(6, 28, 36, 14, '#ffe9c4');
    p(10, 30, 10, 4, '#f4d9a8');
    p(30, 12, 5, 5, '#fff6d8');
    p(8, 24, 6, 2, '#ffffff');
    p(24, 26, 8, 2, '#ffffff');
    p(2, 2, 44, 2, '#e0ab77');
  } else if (id === 'shelf') {
    p(2, 26, 44, 6, '#d9a86f');
    p(2, 26, 44, 2, '#f0cb9a');
    p(4, 32, 4, 12, '#b9834f');
    p(40, 32, 4, 12, '#b9834f');
    // 올려 둔 물건
    p(8, 18, 8, 8, '#a8d8a0');
    p(9, 19, 6, 2, '#c8ecbd');
    p(20, 16, 7, 10, '#8fb7d9');
    p(21, 17, 5, 2, '#c3ddf2');
    p(30, 20, 8, 6, '#e2869b');
    p(31, 21, 6, 2, '#f7b6c6');
  } else if (id === 'window') {
    // 둥근 창문 — 틀 + 하늘 + 커튼
    p(4, 4, 40, 40, '#d9a86f');
    p(6, 6, 36, 36, '#bfe6f6');
    p(6, 6, 36, 12, '#d9f2fb');
    p(6, 18, 36, 8, '#9fe0de');
    p(6, 26, 36, 16, '#dff6ea');
    p(22, 6, 3, 36, '#fdf2dc');
    p(6, 22, 36, 3, '#fdf2dc');
    p(6, 6, 8, 14, '#fff0f5');
    p(32, 6, 8, 14, '#fff0f5');
    p(8, 8, 4, 10, '#ffd7e3');
    p(34, 8, 4, 10, '#ffd7e3');
    p(4, 4, 40, 3, '#eec292');
  } else if (id === 'wall_lamp') {
    // 벽등 — 벽에 붙는 받침 + 따뜻한 빛
    p(14, 4, 20, 3, '#b08a5f');
    p(22, 6, 4, 6, '#a17c54');
    p(12, 12, 24, 16, '#ffe6a8');
    p(14, 10, 20, 3, '#fff1c8');
    ctx.fillStyle = '#fff6d8';
    ctx.beginPath();
    ctx.ellipse(24, 22, 10, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    p(12, 28, 24, 3, '#f5cf87');
  }
}

/** 가구 텍스처 — 48×48 캔버스 한 장을 w×h 판에 그대로 입힌다 */
export function furnitureTexture(id) {
  const key = `furn:${id}`;
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(48, 48);
  drawFurniture(id, ctx);
  addOutline(ctx, 48, 48);
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** 실내 조명용 부드러운 원형 빛 텍스처 */
export function warmGlowTexture() {
  if (cache.has('warm')) return cache.get('warm');
  const { c, ctx } = pixelCanvas(96, 96);
  const g = ctx.createRadialGradient(48, 48, 4, 48, 48, 46);
  g.addColorStop(0, 'rgba(255,236,190,0.85)');
  g.addColorStop(0.45, 'rgba(255,214,160,0.35)');
  g.addColorStop(1, 'rgba(255,200,150,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 96, 96);
  const tex = toTexture(c);
  cache.set('warm', tex);
  return tex;
}
