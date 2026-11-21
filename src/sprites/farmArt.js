/**
 * farmArt.js — 텃밭 흙 타일과 작물 3종의 도트 텍스처 (16~24px 캔버스 픽셀아트)
 *
 * 아이콘3d.js 와 같은 방식 — 폰트·이미지 에셋 없이 픽셀을 직접 찍어 NearestFilter 로
 * 키운다. 흙은 마른 밭/물 준 밭 두 가지, 작물은 씨앗·새싹·자라는 중·다 자람 네 단계.
 */
import * as THREE from 'three';

const cache = new Map();

function canvas(size) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  return { c, ctx };
}

function toTexture(c, nearest = true) {
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = nearest ? THREE.NearestFilter : THREE.LinearFilter;
  tex.minFilter = nearest ? THREE.NearestFilter : THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

/** 24×24 흙 타일 — 밭고랑(가로 줄) + 알갱이 */
export function soilTexture(wet = false) {
  const key = `soil:${wet ? 'wet' : 'dry'}`;
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = canvas(24);
  const base = wet ? ['#7a5433', '#6b482a', '#5d3f24'] : ['#a87a4e', '#9a6d43', '#8a5f39'];
  const fleck = wet ? '#8a6039' : '#bb8d5c';
  const shade = wet ? '#54381f' : '#7a5331';

  ctx.fillStyle = base[0];
  ctx.fillRect(0, 0, 24, 24);
  // 밭고랑 — 3줄마다 어두운 홈
  for (let y = 2; y < 24; y += 6) {
    ctx.fillStyle = shade;
    ctx.fillRect(0, y, 24, 2);
    ctx.fillStyle = base[2];
    ctx.fillRect(0, y + 2, 24, 1);
    ctx.fillStyle = base[1];
    ctx.fillRect(0, y - 1, 24, 1);
  }
  // 흙 알갱이
  let s = 12345;
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = 0; i < 34; i++) {
    const x = Math.floor(rnd() * 24);
    const y = Math.floor(rnd() * 24);
    ctx.fillStyle = rnd() < 0.55 ? fleck : shade;
    ctx.fillRect(x, y, rnd() < 0.3 ? 2 : 1, 1);
  }
  // 마른 밭은 가장자리를 살짝 밝게 — 물 준 밭은 어둡고 촉촉하게
  ctx.fillStyle = wet ? 'rgba(40,24,12,0.22)' : 'rgba(220,180,130,0.18)';
  ctx.fillRect(0, 0, 24, 1);
  ctx.fillRect(0, 23, 24, 1);
  ctx.fillRect(0, 0, 1, 24);
  ctx.fillRect(23, 0, 1, 24);

  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/* ── 작물 픽셀아트 ─────────────────────────────────────── */

function leaves(ctx, cx, cy, w, h, dark = '#4f8f45', mid = '#69b45a', light = '#8fd47a') {
  // 줄기
  ctx.fillStyle = dark;
  ctx.fillRect(cx, cy, 1, h);
  // 좌우 잎
  ctx.fillStyle = mid;
  ctx.fillRect(cx - w, cy + 1, w, 2);
  ctx.fillRect(cx + 1, cy + 2, w, 2);
  ctx.fillStyle = light;
  ctx.fillRect(cx - w - 1, cy, 2, 2);
  ctx.fillRect(cx + 1 + w - 1, cy + 1, 2, 2);
}

function seedMound(ctx) {
  ctx.fillStyle = '#6d4a2c';
  ctx.fillRect(8, 19, 8, 3);
  ctx.fillStyle = '#8a6039';
  ctx.fillRect(9, 18, 6, 1);
  ctx.fillStyle = '#f4e0a8';
  ctx.fillRect(11, 17, 1, 1);
  ctx.fillRect(13, 18, 1, 1);
}

/** stage: 0 씨앗 / 1 새싹 / 2 자라는 중 / 3 다 자람 */
export function cropTexture(cropId, stage) {
  const key = `crop:${cropId}:${stage}`;
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = canvas(24);

  if (stage <= 0) {
    seedMound(ctx);
  } else if (stage === 1) {
    leaves(ctx, 11, 13, 2, 7);
    ctx.fillStyle = '#8fd47a';
    ctx.fillRect(11, 11, 2, 2);
  } else if (stage === 2) {
    leaves(ctx, 11, 9, 3, 10);
    ctx.fillStyle = '#69b45a';
    ctx.fillRect(6, 11, 3, 3);
    ctx.fillRect(14, 12, 3, 3);
    if (cropId === 'strawberry') {
      // 흰 꽃
      ctx.fillStyle = '#fff6fb';
      ctx.fillRect(8, 8, 2, 2);
      ctx.fillRect(15, 10, 2, 2);
      ctx.fillStyle = '#ffe0ef';
      ctx.fillRect(9, 9, 1, 1);
    } else if (cropId === 'radish') {
      // 잎 아래로 살짝 보이는 흰 무
      ctx.fillStyle = '#f2f7e8';
      ctx.fillRect(13, 17, 3, 3);
      ctx.fillStyle = '#dbe6c9';
      ctx.fillRect(13, 19, 3, 1);
    } else if (cropId === 'rice') {
      // 벼 — 물 위로 뻗은 푸른 잎과 이삭 몇 가닥
      ctx.fillStyle = '#4f8f45';
      ctx.fillRect(9, 15, 1, 6);
      ctx.fillRect(13, 14, 1, 7);
      ctx.fillStyle = '#8fd47a';
      ctx.fillRect(7, 12, 1, 6);
      ctx.fillRect(15, 13, 1, 6);
      ctx.fillStyle = '#c9e39a';
      ctx.fillRect(8, 10, 1, 4);
      ctx.fillRect(14, 11, 1, 4);
    } else {
      // 호박 — 작은 노란 열매 하나
      ctx.fillStyle = '#ffd77a';
      ctx.fillRect(8, 15, 3, 3);
      ctx.fillStyle = '#f0ab3c';
      ctx.fillRect(8, 17, 3, 1);
    }
  } else if (cropId === 'strawberry') {
    // 잎 사이로 빨간 열매 세 알
    leaves(ctx, 11, 6, 4, 8);
    const berry = (x, y) => {
      ctx.fillStyle = '#e8476a';
      ctx.fillRect(x, y, 3, 4);
      ctx.fillStyle = '#ff6f8f';
      ctx.fillRect(x, y + 1, 2, 2);
      ctx.fillStyle = '#ffd0dc';
      ctx.fillRect(x, y + 1, 1, 1);
      ctx.fillStyle = '#4f8f45';
      ctx.fillRect(x + 1, y - 1, 1, 1);
    };
    berry(6, 13);
    berry(11, 16);
    berry(15, 12);
  } else if (cropId === 'radish') {
    // 잎이 주인공 — 위로 크게 뻗은 세 갈래 잎
    ctx.fillStyle = '#4f8f45';
    ctx.fillRect(11, 4, 2, 13);
    ctx.fillStyle = '#69b45a';
    ctx.fillRect(5, 7, 7, 4);
    ctx.fillRect(13, 9, 7, 4);
    ctx.fillStyle = '#8fd47a';
    ctx.fillRect(4, 5, 5, 3);
    ctx.fillRect(15, 7, 5, 3);
    ctx.fillRect(8, 2, 4, 4);
    ctx.fillRect(10, 14, 5, 3);
    ctx.fillStyle = '#c6ecb0';
    ctx.fillRect(6, 8, 2, 1);
    ctx.fillRect(16, 10, 2, 1);
    // 잎 아래로 살짝 보이는 무의 윗동 — 흰 덩어리 대신 연둣빛 뿌리 끝만
    ctx.fillStyle = '#bcd3a2';
    ctx.fillRect(10, 17, 4, 3);
    ctx.fillStyle = '#dfecc8';
    ctx.fillRect(11, 17, 2, 2);
  } else if (cropId === 'rice') {
    // 다 자란 벼 — 황금빛 이삭이 고개를 숙인 모습
    ctx.fillStyle = '#3f7a3c';
    ctx.fillRect(8, 14, 1, 8);
    ctx.fillRect(12, 13, 1, 9);
    ctx.fillRect(16, 15, 1, 7);
    ctx.fillStyle = '#5f9c4a';
    ctx.fillRect(10, 16, 1, 6);
    ctx.fillRect(14, 17, 1, 5);
    const head = (x, y) => {
      ctx.fillStyle = '#e6c159';
      ctx.fillRect(x, y, 3, 4);
      ctx.fillStyle = '#f4dd93';
      ctx.fillRect(x, y + 1, 2, 2);
      ctx.fillStyle = '#b98f34';
      ctx.fillRect(x + 1, y + 4, 1, 3);
    };
    head(6, 7);
    head(10, 5);
    head(14, 8);
  } else {
    // 황금호박 — 둥글고 골이 진 몸통 + 갈색 줄기
    ctx.fillStyle = '#c98a2e';
    ctx.fillRect(6, 12, 12, 8);
    ctx.fillRect(7, 10, 10, 2);
    ctx.fillRect(8, 20, 8, 1);
    ctx.fillStyle = '#f0ab3c';
    ctx.fillRect(7, 12, 10, 6);
    ctx.fillStyle = '#ffc95e';
    ctx.fillRect(8, 13, 3, 3);
    ctx.fillRect(13, 14, 2, 3);
    ctx.fillStyle = '#a86c1f';
    ctx.fillRect(9, 12, 1, 7);
    ctx.fillRect(14, 12, 1, 7);
    ctx.fillStyle = '#6d4a2c';
    ctx.fillRect(11, 8, 2, 3);
    ctx.fillStyle = '#8fd47a';
    ctx.fillRect(13, 7, 3, 2);
  }

  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** 밭 테두리 표시용 — 물을 준 직후 반짝이는 물방울 (16×16) */
export function dropletTexture() {
  const key = 'droplet';
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = canvas(16);
  ctx.fillStyle = '#bfeaff';
  ctx.fillRect(7, 3, 2, 8);
  ctx.fillRect(6, 5, 4, 5);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(7, 5, 1, 2);
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** 다 자란 밭 위에 반짝이는 네 갈래 별 (16×16) */
export function sparkleTexture() {
  const key = 'sparkle';
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = canvas(16);
  const star = (cx, cy, len, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(cx, cy - len, 1, len * 2 + 1);
    ctx.fillRect(cx - len, cy, len * 2 + 1, 1);
    ctx.fillRect(cx - 1, cy - 1, 3, 3);
  };
  star(8, 8, 5, 'rgba(255,245,190,0.95)');
  star(8, 8, 2, 'rgba(255,255,255,1)');
  star(3, 4, 1, 'rgba(255,240,170,0.8)');
  star(13, 11, 1, 'rgba(255,240,170,0.75)');
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}
