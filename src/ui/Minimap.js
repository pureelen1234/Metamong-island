/**
 * Minimap.js — 실시간 사각 섬 미니맵
 *
 * · HUD 우측 상단의 작은 네모 지도(104px) — 390×844 세로 화면에서 조이스틱·액션 버튼·
 *   퀵메뉴·토스트와 겹치지 않는 자리에 놓는다.
 * · 지형은 Heightmap 의 높이를 그대로 훑어 물/모래/잔디를 칠하고, 길·텃밭·4대 건물·
 *   우체통은 한 번만 그려 캐시한다(정적). 매 프레임 다시 그리는 것은 내 위치와 고양이뿐.
 * · 지도를 톡 누르면 확대 지도 + 범례 모달이 열린다.
 */
import * as THREE from 'three';
import { h } from './dom.js';
import { CATS, FARM, HALF, LANDMARKS, ZONES } from '../config.js';
import { HEIGHTS, sampleHeight } from '../terrain/Heightmap.js';
import { ROUTES } from '../world/Path.js';

/** 월드 좌표 → 지도 픽셀 */
const proj = (v, size) => ((v + HALF) / (HALF * 2)) * size;

const COLOR = {
  deep: '#5fc4d8',
  shallow: '#8fe0e4',
  wetSand: '#f6e2b6',
  sand: '#ffe6b8',
  grass: '#a9e08c',
  grassDeep: '#8ed577',
  path: '#f2dcb2',
  farm: '#9a6d43',
  farmEdge: '#c39a68',
  mailbox: '#ff8fa6',
  player: '#ff5f92',
};

/** 정적 지형 레이어 — 한 번만 그려 둔다 */
export function buildMapBase(size) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');

  // ① 물 → 모래 → 잔디 (높이 그대로)
  const img = ctx.createImageData(size, size);
  const px = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const wx = (x / size) * HALF * 2 - HALF;
      const wz = (y / size) * HALF * 2 - HALF;
      const hgt = sampleHeight(HEIGHTS, wx, wz);
      let col;
      if (hgt < -0.35) col = COLOR.deep;
      else if (hgt < 0.06) col = COLOR.shallow;
      else if (hgt < 0.28) col = COLOR.wetSand;
      else if (hgt < 0.52) col = COLOR.sand;
      else if (hgt < 0.66) col = COLOR.grass;
      else col = COLOR.grassDeep;
      const [r, g, b] = hexRgb(col);
      const i = (y * size + x) * 4;
      px[i] = r;
      px[i + 1] = g;
      px[i + 2] = b;
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  // ② 길 — 흙길 리본
  ctx.strokeStyle = COLOR.path;
  ctx.lineWidth = Math.max(1.4, size * 0.016);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (const route of ROUTES) {
    const curve = new THREE.CatmullRomCurve3(
      route.map(([x, z]) => new THREE.Vector3(x, 0, z)),
      false,
      'catmullrom',
      0.5
    );
    const pts = curve.getSpacedPoints(28);
    ctx.beginPath();
    pts.forEach((p, i) => {
      const x = proj(p.x, size);
      const y = proj(p.z, size);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  // ③ 북서 텃밭 — 흙 사각형 + 3×3 칸
  const tile = (FARM.tile / (HALF * 2)) * size;
  const pitch = (FARM.pitch / (HALF * 2)) * size;
  ctx.fillStyle = COLOR.farmEdge;
  const bx = proj(FARM.x - (FARM.cols * FARM.pitch) / 2, size);
  const bz = proj(FARM.z - (FARM.rows * FARM.pitch) / 2, size);
  const bw = (FARM.cols * FARM.pitch * size) / (HALF * 2);
  ctx.fillRect(bx, bz, bw, bw);
  ctx.fillStyle = COLOR.farm;
  for (let r = 0; r < FARM.rows; r++) {
    for (let cc = 0; cc < FARM.cols; cc++) {
      const x = proj(FARM.x + (cc - (FARM.cols - 1) / 2) * FARM.pitch, size) - tile / 2;
      const z = proj(FARM.z + (r - (FARM.rows - 1) / 2) * FARM.pitch, size) - tile / 2;
      ctx.fillRect(x, z, Math.max(1.6, tile), Math.max(1.6, tile));
    }
  }

  // ④ 과수원 · 꽃밭 — 구역 점
  for (const z of ZONES) {
    if (z.id !== 'orchard' && z.id !== 'garden') continue;
    ctx.fillStyle = z.id === 'orchard' ? 'rgba(120,190,110,0.55)' : 'rgba(255,183,214,0.6)';
    ctx.beginPath();
    ctx.arc(proj(z.x, size), proj(z.z, size), Math.max(4, (z.r / (HALF * 2)) * size), 0, Math.PI * 2);
    ctx.fill();
  }

  // ⑤ 4대 건물 — 흰 테두리 원 + 이모지 글리프
  for (const lm of LANDMARKS) {
    const x = proj(lm.x, size);
    const y = proj(lm.z, size);
    const r = Math.max(4.2, size * 0.045);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.lineWidth = Math.max(1, size * 0.011);
    ctx.strokeStyle = '#b2698f';
    ctx.stroke();
    ctx.font = `${Math.round(r * 1.25)}px "Noto Color Emoji", "Apple Color Emoji", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#6b5878';
    ctx.fillText(lm.icon, x, y + r * 0.06);
  }

  // ⑥ 우체통 (우체통 메타몽 자리)
  const mail = { x: 2.6, z: 11.6 };
  ctx.beginPath();
  ctx.arc(proj(mail.x, size), proj(mail.z, size), Math.max(2.6, size * 0.028), 0, Math.PI * 2);
  ctx.fillStyle = COLOR.mailbox;
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = Math.max(0.8, size * 0.008);
  ctx.stroke();

  return c;
}

let hexCache = new Map();
function hexRgb(hex) {
  if (hexCache.has(hex)) return hexCache.get(hex);
  const n = parseInt(hex.slice(1), 16);
  const out = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  hexCache.set(hex, out);
  return out;
}

export class Minimap {
  /**
   * @param {HTMLElement} root
   * @param {object} game
   * @param {{size?:number}} opts
   */
  constructor(root, game, { size = 104 } = {}) {
    this.game = game;
    this.size = size;
    // 화면 배율에 맞춰 내부 해상도를 잡는다 — 1× 화면에서 2배로 그리면 축소되며 흐려진다
    this.dpr = Math.min(2, Math.max(1, Math.round(window.devicePixelRatio || 1)));
    this.acc = 0;

    this.canvas = h('canvas', {
      class: 'minimap-canvas',
      width: size * this.dpr,
      height: size * this.dpr,
      'aria-label': '섬 미니맵',
    });
    this.canvas.style.width = `${size}px`;
    this.canvas.style.height = `${size}px`;

    this.pin = h('span', { class: 'minimap-pin' }, '🗺️');
    this.wrap = h(
      'button',
      {
        class: 'minimap',
        type: 'button',
        'aria-label': '섬 지도 크게 보기',
        onclick: () => this.game.openMinimap?.(),
      },
      this.canvas,
      this.pin
    );
    root.append(this.wrap);
    // 터치가 캔버스 탭으로 새어 나가 상호작용이 겹치지 않게
    this.wrap.addEventListener('pointerdown', (e) => e.stopPropagation());

    this.base = buildMapBase(size * this.dpr);
    this.ctx = this.canvas.getContext('2d');
    this.draw();
  }

  /** 정적 배경 + 움직이는 점(내 위치·고양이) */
  draw() {
    const g = this.game;
    if (!g || !g.player) return;
    const s = this.size * this.dpr;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, s, s);
    ctx.drawImage(this.base, 0, 0, s, s);

    // 솜이 · 옹이
    for (const def of CATS) {
      const cat = g.cats ? g.cats.find((c) => c.id === def.id) : null;
      const x = proj(cat ? cat.position.x : def.x, s);
      const y = proj(cat ? cat.position.z : def.z, s);
      ctx.beginPath();
      ctx.arc(x, y, Math.max(2.2, s * 0.028), 0, Math.PI * 2);
      ctx.fillStyle = def.id === 'somi' ? '#f7f1e6' : '#6d5a4a';
      ctx.fill();
      ctx.lineWidth = Math.max(0.8, s * 0.007);
      ctx.strokeStyle = '#8b6a8f';
      ctx.stroke();
    }

    // 내 위치 — 바라보는 방향 삼각형 + 발밑 반짝임
    const px = proj(g.player.position.x, s);
    const py = proj(g.player.position.z, s);
    const yaw = g.player.yaw || 0;
    const dirx = Math.sin(yaw);
    const diry = Math.cos(yaw);
    const r = Math.max(3.4, s * 0.045);
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Math.atan2(diry, dirx) + Math.PI / 2);
    ctx.beginPath();
    ctx.moveTo(0, -r);
    ctx.lineTo(r * 0.72, r * 0.72);
    ctx.lineTo(0, r * 0.32);
    ctx.lineTo(-r * 0.72, r * 0.72);
    ctx.closePath();
    ctx.fillStyle = COLOR.player;
    ctx.fill();
    ctx.lineWidth = Math.max(1, s * 0.014);
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.restore();
  }

  update(dt) {
    this.acc += dt;
    if (this.acc < 0.12) return;
    this.acc = 0;
    this.draw();
  }

  /** 확대 지도 모달 — 큰 캔버스 + 범례 */
  modalBody(size = 320) {
    const dpr = Math.min(2, Math.max(1, Math.round((window.devicePixelRatio || 1) * 1.5)));
    const canvas = h('canvas', { class: 'minimap-big', width: size * dpr, height: size * dpr });
    canvas.style.width = '100%';
    canvas.style.maxWidth = `${size}px`;
    canvas.style.aspectRatio = '1 / 1';
    const ctx = canvas.getContext('2d');
    const s = size * dpr;
    ctx.drawImage(buildMapBase(s), 0, 0, s, s);

    const g = this.game;
    // 고양이
    for (const def of CATS) {
      const cat = g.cats ? g.cats.find((c) => c.id === def.id) : null;
      const x = proj(cat ? cat.position.x : def.x, s);
      const y = proj(cat ? cat.position.z : def.z, s);
      ctx.beginPath();
      ctx.arc(x, y, Math.max(3, s * 0.014), 0, Math.PI * 2);
      ctx.fillStyle = def.id === 'somi' ? '#f7f1e6' : '#6d5a4a';
      ctx.fill();
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = '#8b6a8f';
      ctx.stroke();
    }
    // 내 위치
    const px = proj(g.player.position.x, s);
    const py = proj(g.player.position.z, s);
    const yaw = g.player.yaw || 0;
    const r = Math.max(6, s * 0.022);
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Math.atan2(Math.cos(yaw), Math.sin(yaw)) + Math.PI / 2);
    ctx.beginPath();
    ctx.moveTo(0, -r);
    ctx.lineTo(r * 0.72, r * 0.72);
    ctx.lineTo(0, r * 0.32);
    ctx.lineTo(-r * 0.72, r * 0.72);
    ctx.closePath();
    ctx.fillStyle = COLOR.player;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.restore();

    const legend = h('div', { class: 'map-legend' });
    const row = (swatch, name, note) =>
      h(
        'div',
        { class: 'legend-row' },
        h('span', { class: 'sw', style: { background: swatch } }),
        h('span', { class: 'nm' }, name),
        h('span', { class: 'meta' }, note)
      );
    for (const lm of LANDMARKS) {
      const done = !!g.progress.building(lm.id).done;
      legend.append(row('#ffffff', `${lm.icon} ${lm.name}`, done ? '복구 완료' : '복구 전'));
    }
    legend.append(row(COLOR.mailbox, '📬 우체통', '편지·의뢰 보상'));
    legend.append(row(COLOR.farm, '🌱 텃밭', `3×3 경작지 · ${g.progress.farmPlots.filter(Boolean).length}칸 심음`));
    for (const def of CATS) {
      const cat = g.cats ? g.cats.find((c) => c.id === def.id) : null;
      legend.append(row(def.id === 'somi' ? '#f7f1e6' : '#6d5a4a', `🐱 ${def.name}`, cat ? `Lv.${g.progress.catRow(def.id).level}` : ''));
    }
    legend.append(row(COLOR.player, '📍 나', `(${g.player.position.x.toFixed(1)}, ${g.player.position.z.toFixed(1)})`));

    return h(
      'div',
      { class: 'map-modal' },
      h('div', { class: 'map-canvas-wrap' }, canvas),
      h('div', { class: 'hint' }, '지도는 섬 전체(48×48)를 담아요. 물·모래·잔디·길·텃밭이 실제 지형 그대로이고, 내 화살표가 바라보는 방향을 가리켜요.'),
      h('div', { class: 'section-label' }, '범례'),
      legend
    );
  }
}

