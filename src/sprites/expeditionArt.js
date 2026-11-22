/**
 * expeditionArt.js — 7단계 원정지의 도트 그림 (캔버스 픽셀아트)
 *
 * · groundTexture(site) : 원정지 바닥(모래·화산재·얼음) — 타일처럼 반복
 * · resourceTexture(id) : 원정 전용 자원 6종의 채집 자리
 * · decorTexture(kind)  : 바위·화산 틈·산호·얼음덩이 같은 배경 소품
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

function addOutline(ctx, w, h) {
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

/* ── 바닥 ─────────────────────────────────────────────────── */

export function groundTexture(siteId = 'mist') {
  const key = `ground:${siteId}`;
  if (cache.has(key)) return cache.get(key);
  const pal = {
    mist: { base: '#c3d3c6', dark: '#adc2b3', light: '#d6e4d4', spec: '#9fb9a8' },
    volcano: { base: '#b79384', dark: '#a07c72', light: '#c9a99b', spec: '#8d6a63' },
    ice: { base: '#d5e9f0', dark: '#bfdce8', light: '#eef8fb', spec: '#a9cbd8' },
  }[siteId] || { base: '#c3d3c6', dark: '#adc2b3', light: '#d6e4d4', spec: '#9fb9a8' };

  const { c, ctx } = pixelCanvas(64, 64);
  const p = px(ctx);
  p(0, 0, 64, 64, pal.base);
  for (let i = 0; i < 90; i++) {
    const x = Math.floor(Math.random() * 62);
    const y = Math.floor(Math.random() * 62);
    const s = Math.random() < 0.4 ? 2 : 1;
    p(x, y, s, s, Math.random() < 0.5 ? pal.dark : pal.light);
  }
  for (let i = 0; i < 14; i++) {
    const x = Math.floor(Math.random() * 58);
    const y = Math.floor(Math.random() * 58);
    p(x, y, 3, 2, pal.spec);
  }

  const tex = toTexture(c, { repeat: [5, 5] });
  cache.set(key, tex);
  return tex;
}

/* ── 자원 자리 ────────────────────────────────────────────── */

export function resourceTexture(id) {
  const key = `res:${id}`;
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(32, 32);
  const p = px(ctx);

  if (id === 'volcano_heart') {
    p(6, 26, 20, 3, '#7a4a3e');
    p(10, 8, 5, 18, '#c9402e');
    p(15, 4, 5, 22, '#f2663f');
    p(20, 11, 4, 15, '#d94b32');
    p(12, 9, 3, 15, '#ff9a5e');
    p(16, 6, 2, 18, '#ffd0a0');
    p(9, 24, 14, 3, '#a63a2c');
    p(22, 20, 4, 2, '#8d3226');
  } else if (id === 'ice_crystal') {
    p(5, 27, 22, 3, '#89b8c8');
    p(9, 10, 5, 17, '#8fd8f0');
    p(14, 4, 5, 23, '#c4f0fb');
    p(19, 12, 4, 15, '#a5e2f4');
    p(11, 12, 2, 12, '#eafcff');
    p(16, 6, 2, 16, '#ffffff');
    p(8, 25, 16, 2, '#71a8bc');
  } else if (id === 'ancient_gear') {
    p(6, 24, 20, 4, '#8f7f63');
    ctx.fillStyle = '#c9b88f';
    ctx.beginPath();
    ctx.arc(16, 15, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#a8946c';
    ctx.beginPath();
    ctx.arc(16, 15, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f2e8ce';
    ctx.beginPath();
    ctx.arc(16, 15, 3, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      p(Math.round(16 + Math.cos(a) * 10) - 1, Math.round(15 + Math.sin(a) * 10) - 1, 3, 3, '#bca880');
    }
  } else if (id === 'deep_pearl') {
    p(4, 24, 24, 4, '#a9c3d0');
    p(5, 19, 22, 6, '#dff3f8');
    p(8, 15, 16, 5, '#c4e6f0');
    p(12, 10, 8, 6, '#f6fdff');
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(16, 12, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#eaf8ff';
    ctx.beginPath();
    ctx.arc(15, 11, 3, 0, Math.PI * 2);
    ctx.fill();
    p(7, 22, 18, 2, '#93b6c6');
  } else if (id === 'meteor_shard') {
    p(6, 26, 20, 3, '#7a6a52');
    p(9, 12, 6, 14, '#5f5346');
    p(14, 6, 6, 20, '#8f7c62');
    p(12, 10, 3, 14, '#ffcf7a');
    p(16, 8, 3, 16, '#ffb15e');
    p(19, 14, 3, 10, '#e8924a');
    p(20, 6, 4, 4, '#ffe6b0');
    p(8, 24, 16, 2, '#5b4f40');
  } else if (id === 'mist_mushroom') {
    p(8, 26, 16, 3, '#9fb9a8');
    p(13, 16, 6, 11, '#e6ecf4');
    p(8, 10, 16, 7, '#cfd8e8');
    p(10, 8, 12, 3, '#e6edf7');
    p(8, 15, 16, 2, '#b9c4d6');
    p(12, 12, 3, 3, '#ffffff');
    p(19, 13, 2, 2, '#ffffff');
    p(15, 4, 3, 4, '#dfe7f2');
  }

  addOutline(ctx, 32, 32);
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/* ── 배경 소품 ────────────────────────────────────────────── */

/** kind: 'rock' | 'vent' | 'reef' | 'ice' */
export function decorTexture(kind = 'rock') {
  const key = `decor:${kind}`;
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = pixelCanvas(32, 32);
  const p = px(ctx);
  if (kind === 'rock') {
    p(4, 24, 24, 5, '#8c8a9c');
    p(6, 14, 20, 11, '#a9a7b8');
    p(9, 9, 14, 8, '#c1bfcd');
    p(11, 11, 6, 3, '#d9d7e2');
    p(7, 20, 6, 4, '#9492a4');
  } else if (kind === 'vent') {
    p(3, 25, 26, 4, '#7a4a3e');
    p(6, 16, 20, 10, '#9c5a48');
    p(10, 12, 12, 6, '#c96c4f');
    p(13, 8, 6, 6, '#f0865c');
    p(15, 5, 3, 4, '#ffb98a');
    p(9, 20, 4, 3, '#e07a4f');
    p(19, 19, 4, 3, '#e07a4f');
  } else if (kind === 'reef') {
    p(3, 26, 26, 3, '#a9c3d0');
    p(7, 18, 5, 9, '#f0a8b8');
    p(13, 14, 5, 13, '#ffc2cc');
    p(19, 19, 5, 8, '#e58fa6');
    p(9, 21, 3, 2, '#fff0f4');
    p(15, 17, 3, 2, '#fff6f8');
  } else {
    p(3, 25, 26, 4, '#a9cbd8');
    p(6, 12, 9, 14, '#dff3fa');
    p(16, 8, 9, 18, '#eafbff');
    p(8, 14, 3, 10, '#ffffff');
    p(18, 10, 3, 14, '#ffffff');
    p(24, 20, 4, 6, '#bfe3ef');
  }
  addOutline(ctx, 32, 32);
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}
