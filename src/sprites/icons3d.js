/**
 * icons3d.js — 월드에 떨어지는 재료·새싹·반짝임의 도트 텍스처
 *
 * DOM UI 는 이모지를 쓰지만, 3D 스프라이트는 16×16 픽셀을 직접 찍어 만든다.
 * NearestFilter 로 키우면 섬의 HD-2D 도트 톤과 맞고, 기기 폰트에 상관없이
 * 어디서나 같은 그림이 나온다. 텍스처는 한 번만 만들어 재사용한다.
 */
import * as THREE from 'three';

const cache = new Map();

function pixelCanvas(size = 16) {
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

/** 16×16 격자에 색 블록을 찍는 도우미 */
function painter(ctx, cell) {
  return (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x * cell, y * cell, w * cell, h * cell);
  };
}

function buildItem(id) {
  const { c, ctx } = pixelCanvas(16);
  const p = painter(ctx, 1);

  if (id === 'berry') {
    p(7, 2, 2, 1, '#6dbf6a'); // 잎
    p(9, 3, 1, 1, '#579a55');
    p(8, 4, 1, 1, '#7a5236'); // 꼭지
    p(5, 5, 6, 1, '#e8496b');
    p(4, 6, 8, 1, '#ef5a7b');
    p(4, 7, 9, 1, '#f0607f');
    p(3, 8, 10, 1, '#ee5c7d');
    p(3, 9, 10, 1, '#e8506f');
    p(4, 10, 9, 1, '#dc4865');
    p(5, 11, 7, 1, '#c93d59');
    p(6, 12, 5, 1, '#b2334f');
    p(5, 7, 2, 2, '#ffa3bb'); // 하이라이트
    p(6, 6, 1, 1, '#ffc2d2');
    p(5, 9, 1, 1, '#ffe3ea');
    p(8, 10, 1, 1, '#ffe3ea');
    p(11, 8, 1, 1, '#ffd0dc');
  } else if (id === 'log') {
    p(3, 6, 10, 6, '#a9713f');
    p(3, 6, 10, 1, '#c68a52');
    p(3, 11, 10, 1, '#8a5a30');
    p(5, 7, 1, 4, '#965f33');
    p(8, 8, 4, 1, '#b87f47');
    p(2, 7, 2, 4, '#d8a468'); // 잘린 면
    p(2, 8, 2, 2, '#e8bc85');
    p(3, 8, 1, 2, '#b9854f');
    p(12, 7, 2, 4, '#c9925a'); // 반대쪽 면
    p(12, 8, 1, 2, '#8a5a30');
  } else if (id === 'stone') {
    p(5, 5, 6, 1, '#d3d5e2');
    p(4, 6, 8, 1, '#c3c6d6');
    p(3, 7, 10, 1, '#b3b7ca');
    p(3, 8, 10, 2, '#a6aabf');
    p(4, 10, 9, 1, '#8f94ac');
    p(5, 11, 7, 1, '#7b8098');
    p(6, 12, 5, 1, '#6b7086');
    p(5, 6, 3, 1, '#e7e9f2');
    p(7, 9, 2, 1, '#c9cddd');
  } else if (id === 'petal') {
    p(7, 4, 3, 1, '#ffd0e2');
    p(6, 5, 5, 1, '#ffb8d2');
    p(5, 6, 6, 2, '#ffa6c8');
    p(4, 8, 6, 2, '#f892b8');
    p(5, 10, 4, 1, '#e97fa8');
    p(6, 11, 2, 1, '#d16d96');
    p(7, 6, 2, 1, '#ffe6f0');
  } else if (id === 'star') {
    p(7, 1, 2, 3, '#ffe9a8');
    p(7, 12, 2, 3, '#ffe9a8');
    p(1, 7, 3, 2, '#ffe9a8');
    p(12, 7, 3, 2, '#ffe9a8');
    p(5, 5, 6, 1, '#ffd464');
    p(4, 6, 8, 1, '#ffcf55');
    p(4, 7, 8, 2, '#ffc94a');
    p(5, 9, 6, 1, '#ffbf3e');
    p(6, 10, 4, 1, '#ffb42f');
    p(7, 7, 2, 2, '#fff8dc');
    p(6, 6, 1, 1, '#fff3c0');
  } else {
    p(6, 6, 4, 4, '#dcdcea');
  }

  return toTexture(c);
}

export function itemTexture(id) {
  const key = `item:${id}`;
  if (!cache.has(key)) cache.set(key, buildItem(id));
  return cache.get(key);
}

/** 채집이 끝난 자리에 남는 그루터기 — 나무는 밑동+새싹, 바위는 자갈, 꽃덤불은 흙더미 (24×24) */
export function stumpTexture(kind = 'tree') {
  const key = `stump:${kind}`;
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(24);
  const p = painter(ctx, 1);

  if (kind === 'tree') {
    // 밑동 — 위는 좁고 아래로 갈수록 넓어지는 그루터기
    const rows = [
      [5, 10, 15, '#dcae74'],
      [6, 9, 16, '#d3a067'],
      [7, 9, 16, '#c9925a'],
      [8, 8, 17, '#b07c46'],
      [9, 8, 17, '#96633a'],
      [10, 8, 17, '#8a5a34'],
      [11, 8, 17, '#8a5a34'],
      [12, 8, 17, '#8a5a34'],
      [13, 8, 17, '#8a5a34'],
      [14, 8, 17, '#8a5a34'],
      [15, 7, 18, '#855631'],
      [16, 7, 18, '#7c5030'],
      [17, 7, 18, '#7c5030'],
      [18, 6, 19, '#74482a'],
      [19, 6, 19, '#6a4025'],
      [20, 6, 19, '#5f3d24'],
    ];
    for (const [y, x0, x1, color] of rows) {
      p(x0, y, x1 - x0 + 1, 1, color);
      // 좌우 가장자리는 한 픽셀 어둡게 — 도트 외곽선처럼 또렷하게
      p(x0, y, 1, 1, '#5f3d24');
      p(x1, y, 1, 1, '#4e3019');
    }
    // 오른쪽 그늘 · 왼쪽 하이라이트
    p(16, 9, 2, 10, '#74482a');
    p(8, 10, 1, 8, '#a06b3d');
    // 나이테 — 잘린 단면 위에 두 줄
    p(11, 6, 3, 1, '#a5713d');
    p(10, 6, 1, 2, '#a5713d');
    p(14, 6, 1, 2, '#a5713d');
    p(12, 7, 2, 1, '#b9854f');
    p(12, 5, 1, 1, '#f0d8ab');
    // 껍질 결
    p(10, 12, 1, 4, '#6f4628');
    p(13, 14, 1, 4, '#6f4628');
    // 돋아난 잎 — 그루터기 오른쪽
    p(18, 12, 1, 6, '#6fa35a');
    p(19, 10, 2, 2, '#9ed07a');
    p(21, 9, 1, 2, '#7fbb62');
    p(18, 8, 1, 2, '#9ed07a');
  } else if (kind === 'rock') {
    // 부서진 자갈 더미
    p(4, 14, 7, 5, '#b3b7ca');
    p(5, 12, 5, 2, '#d3d5e2');
    p(11, 15, 8, 5, '#a6aabf');
    p(12, 13, 6, 2, '#c3c6d6');
    p(17, 16, 4, 4, '#8f94ac');
    p(3, 19, 18, 1, '#7b8098');
    p(6, 15, 2, 1, '#e7e9f2');
    p(14, 15, 2, 1, '#dfe2ee');
    // 돋아난 잎
    p(8, 9, 1, 3, '#6fa35a');
    p(6, 8, 2, 2, '#9ed07a');
  } else {
    // 꽃을 딴 자리 — 흙더미와 떨어진 꽃잎, 새순
    p(3, 16, 18, 4, '#8a6a4a');
    p(4, 15, 16, 1, '#a4815c');
    p(3, 19, 18, 1, '#6f5439');
    p(6, 14, 2, 2, '#ffb8d2');
    p(11, 13, 2, 1, '#ffa6c8');
    p(15, 14, 1, 1, '#ffd0e2');
    p(16, 8, 1, 7, '#6fa35a');
    p(14, 7, 2, 2, '#9ed07a');
    p(17, 6, 2, 2, '#9ed07a');
    p(19, 7, 1, 1, '#7fbb62');
  }

  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** 채집이 끝난 자리에 남는 새싹 (16×16) */
export function sproutTexture() {
  const key = 'sprout';
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(16);
  const p = painter(ctx, 1);
  p(7, 8, 2, 6, '#7fae5b');
  p(5, 6, 3, 2, '#8ec96a');
  p(3, 7, 2, 1, '#a5db7f');
  p(8, 4, 3, 2, '#8ec96a');
  p(11, 5, 2, 1, '#a5db7f');
  p(7, 3, 2, 2, '#b7e694');
  p(6, 12, 4, 1, '#5f8a45');
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** 드롭 발밑에 깔리는 부드러운 빛무리 */
export function glowTexture() {
  const key = 'glow';
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 31);
  g.addColorStop(0, 'rgba(255,255,255,0.95)');
  g.addColorStop(0.42, 'rgba(255,246,214,0.55)');
  g.addColorStop(1, 'rgba(255,240,200,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(32, 32, 31, 0, Math.PI * 2);
  ctx.fill();
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** 물 위로 퍼지는 동심원 물결 링 (부두 낚시) — 64×64 흰 테두리 */
export function rippleTexture() {
  const key = 'ripple';
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 14, 32, 32, 31);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.06)');
  g.addColorStop(0.8, 'rgba(236,252,255,0.92)');
  g.addColorStop(0.94, 'rgba(206,240,255,0.42)');
  g.addColorStop(1, 'rgba(206,240,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(32, 32, 31, 0, Math.PI * 2);
  ctx.fill();
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** 파티클 점 — 동그랗게 번지는 작은 빛 */
export function dotTexture() {
  const key = 'dot';
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 15);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.75)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(16, 16, 15, 0, Math.PI * 2);
  ctx.fill();
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}
