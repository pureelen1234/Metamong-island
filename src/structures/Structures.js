/**
 * Structures.js — 4단계 복구 예정 부지(부두·공방·고양이 쉼터·등대)
 * 어두운 폐허 대신 따뜻한 우드 · 크림 · 파스텔 민트/코랄 오두막.
 * 창문은 따뜻한 불빛(발광 메시)으로 아기자기하게.
 */
import * as THREE from 'three';
import { LANDMARKS } from '../config.js';
import { part, buildMesh, mergeParts, rbox, cyl, sphere } from '../props/parts.js';

const WOOD = '#cf9459';
const WOOD_DARK = '#b47b45';
const WOOD_LIGHT = '#e6bf8e';
const CREAM = '#f7ead2';
const CREAM_LIGHT = '#fff6e4';
const MINT = '#9ed8ac';
const MINT_DARK = '#83c79a';
const CORAL = '#f2a99c';
const COPPER = '#d98a5c';
const PINK = '#f7cfdc';
const STONE = '#e9ddc6';
const STONE_DARK = '#d9cbb0';
const GLOW = '#ffe7a3';

/** 발광(불 켜진 창) 파트를 하나의 메시로 */
function glowMesh(parts) {
  const geo = mergeParts(parts);
  const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false }));
  return mesh;
}

/* ── 부두: 물가의 아기자기한 나무 데크 + 작은 배 ───────────────── */
function dockParts() {
  const parts = [];
  // 데크 판자
  for (let i = 0; i < 8; i++) {
    const z = -2.1 + i * 0.6;
    parts.push(part(rbox(2.05, 0.1, 0.5, 0.035), i % 2 ? WOOD : WOOD_LIGHT, { position: [0, 0.55, z] }));
  }
  // 말뚝 (물속까지)
  for (const x of [-0.95, 0.95]) {
    for (const z of [-2.2, -0.4, 1.4, 2.3]) {
      parts.push(part(cyl(0.1, 0.12, 1.5, 12), WOOD_DARK, { position: [x, 0.0, z] }));
      parts.push(part(sphere(0.11, 12, 8), WOOD, { position: [x, 0.75, z] }));
    }
  }
  // 한쪽 난간
  for (const z of [-2.0, -0.6, 0.8, 2.1]) {
    parts.push(part(rbox(0.09, 0.5, 0.09, 0.03), WOOD, { position: [-0.95, 0.83, z] }));
  }
  parts.push(part(rbox(0.1, 0.09, 4.4, 0.04), WOOD_LIGHT, { position: [-0.95, 1.04, 0.05] }));
  // 계류 밧줄 고리
  parts.push(part(new THREE.TorusGeometry(0.09, 0.025, 6, 14), STONE_DARK, { position: [0.9, 0.62, 2.1], rotation: [0, 0.4, 0] }));

  // 물 위의 동글동글 조각배
  parts.push(part(sphere(0.5, 18, 12), CORAL, { position: [2.15, 0.16, 1.2], scale: [1.0, 0.42, 0.55] }));
  parts.push(part(sphere(0.4, 16, 10), CREAM_LIGHT, { position: [2.15, 0.26, 1.2], scale: [0.92, 0.3, 0.46] }));
  parts.push(part(rbox(0.1, 0.08, 1.0, 0.04), WOOD, { position: [2.15, 0.4, 1.2] }));

  // 갈매기 부표
  parts.push(part(sphere(0.14, 12, 10), '#ff9e9e', { position: [-1.9, 0.15, 2.4] }));
  parts.push(part(new THREE.TorusGeometry(0.14, 0.035, 6, 16), CREAM_LIGHT, { position: [-1.9, 0.15, 2.4], rotation: [Math.PI / 2, 0, 0] }));
  return parts;
}

/* ── 공방: 따뜻한 나무 벽 · 민트 지붕 · 노란 불빛 창 ─────────── */
function gablePart(width, height, depth, color, opts = {}) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, 0);
  shape.lineTo(width / 2, 0);
  shape.lineTo(0, height);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 2 });
  return part(geo, color, opts);
}

function workshopParts() {
  const parts = [];
  // 돌 기단
  parts.push(part(rbox(3.3, 0.26, 2.7, 0.08), STONE, { position: [0, 0.13, 0] }));
  // 크림 벽체
  parts.push(part(rbox(3.0, 1.75, 2.4, 0.1), CREAM, { position: [0, 1.13, 0] }));
  // 목재 골조
  for (const [x, z] of [
    [-1.45, -1.15],
    [1.45, -1.15],
    [-1.45, 1.15],
    [1.45, 1.15],
  ]) {
    parts.push(part(rbox(0.17, 1.85, 0.17, 0.05), WOOD, { position: [x, 1.15, z] }));
  }
  parts.push(part(rbox(3.15, 0.16, 0.18, 0.05), WOOD, { position: [0, 1.98, 1.16] }));
  parts.push(part(rbox(3.15, 0.16, 0.18, 0.05), WOOD, { position: [0, 1.98, -1.16] }));
  parts.push(part(rbox(0.18, 0.16, 2.5, 0.05), WOOD, { position: [-1.46, 1.98, 0] }));
  parts.push(part(rbox(0.18, 0.16, 2.5, 0.05), WOOD, { position: [1.46, 1.98, 0] }));
  // 벽 하단 목재 띠 · 널판 이음선
  parts.push(part(rbox(3.05, 0.3, 2.45, 0.08), WOOD_LIGHT, { position: [0, 0.42, 0] }));
  for (const y of [0.72, 1.02, 1.32, 1.62]) {
    parts.push(part(rbox(3.02, 0.035, 2.42, 0.015), '#e7d2b2', { position: [0, y, 0] }));
  }

  // 박공 벽면 (앞·뒤 삼각형)
  parts.push(gablePart(3.0, 0.86, 0.14, CREAM, { position: [0, 2.05, 1.1] }));
  parts.push(gablePart(3.0, 0.86, 0.14, CREAM, { position: [0, 2.05, -1.24] }));

  // 민트 박공지붕 (두꺼운 판 + 능선)
  parts.push(part(rbox(1.95, 0.22, 3.0, 0.07), MINT, { position: [-0.83, 2.5, 0], rotation: [0, 0, 0.5] }));
  parts.push(part(rbox(1.95, 0.22, 3.0, 0.07), MINT, { position: [0.83, 2.5, 0], rotation: [0, 0, -0.5] }));
  parts.push(part(rbox(0.3, 0.24, 3.05, 0.08), MINT_DARK, { position: [0, 2.98, 0] }));
  // 지붕 처마 목재
  parts.push(part(rbox(0.18, 0.16, 3.04, 0.05), WOOD, { position: [-1.63, 2.08, 0] }));
  parts.push(part(rbox(0.18, 0.16, 3.04, 0.05), WOOD, { position: [1.63, 2.08, 0] }));

  // 문 · 창 테두리 (문은 아치형 나무문)
  parts.push(part(rbox(0.84, 1.2, 0.1, 0.06), WOOD, { position: [-0.55, 0.72, 1.22] }));
  parts.push(part(sphere(0.42, 18, 12), WOOD, { position: [-0.55, 1.32, 1.2], scale: [1, 0.62, 0.16] }));
  parts.push(part(rbox(0.68, 1.14, 0.08, 0.05), '#e8c79a', { position: [-0.55, 0.7, 1.28] }));
  parts.push(part(sphere(0.34, 16, 12), '#e8c79a', { position: [-0.55, 1.26, 1.26], scale: [1, 0.62, 0.14] }));
  parts.push(part(sphere(0.045, 10, 8), WOOD_DARK, { position: [-0.28, 0.7, 1.34] }));
  // 문 창살
  parts.push(part(rbox(0.4, 0.04, 0.05, 0.015), WOOD_DARK, { position: [-0.55, 0.78, 1.345] }));
  parts.push(part(rbox(0.04, 0.28, 0.05, 0.015), WOOD_DARK, { position: [-0.55, 0.78, 1.345] }));
  // 오른쪽 창 테두리 + 창살
  parts.push(part(rbox(0.76, 0.66, 0.1, 0.05), WOOD, { position: [0.98, 1.2, 1.22] }));
  parts.push(part(rbox(0.62, 0.05, 0.06, 0.02), WOOD_DARK, { position: [0.98, 1.2, 1.335] }));
  parts.push(part(rbox(0.05, 0.52, 0.06, 0.02), WOOD_DARK, { position: [0.98, 1.2, 1.335] }));

  // 굴뚝 (돌)
  parts.push(part(rbox(0.44, 1.1, 0.44, 0.06), STONE, { position: [-0.95, 2.95, -0.72], rotation: [0, 0.2, 0.05] }));
  parts.push(part(rbox(0.56, 0.14, 0.56, 0.05), CREAM_LIGHT, { position: [-0.95, 3.5, -0.72], rotation: [0, 0.2, 0.05] }));

  // 입구 계단 · 현관 난간
  parts.push(part(rbox(1.15, 0.14, 0.55, 0.05), WOOD_LIGHT, { position: [-0.55, 0.18, 1.55] }));
  parts.push(part(rbox(1.15, 0.14, 0.5, 0.05), WOOD, { position: [-0.55, 0.32, 1.42] }));

  // 작업대 · 모루 · 통나무
  parts.push(part(rbox(1.2, 0.1, 0.55, 0.04), WOOD_LIGHT, { position: [2.2, 0.75, 0.55] }));
  for (const [x, z] of [
    [1.7, 0.32],
    [2.7, 0.32],
    [1.7, 0.78],
    [2.7, 0.78],
  ]) {
    parts.push(part(rbox(0.09, 0.6, 0.09, 0.03), WOOD_DARK, { position: [x, 0.42, z] }));
  }
  parts.push(part(rbox(0.3, 0.16, 0.16, 0.05), '#9aa3b8', { position: [2.2, 0.88, 0.5] }));
  parts.push(part(cyl(0.2, 0.2, 0.7, 12), WOOD, { position: [-1.95, 0.24, 1.0], rotation: [Math.PI / 2, 0, 0.4] }));
  parts.push(part(cyl(0.16, 0.16, 0.6, 12), WOOD_LIGHT, { position: [-1.8, 0.5, 0.6], rotation: [Math.PI / 2, 0, -0.2] }));

  // 현관 랜턴 (나무 등걸 + 유리)
  parts.push(part(rbox(0.06, 0.16, 0.06, 0.02), WOOD_DARK, { position: [-1.2, 1.52, 1.3] }));
  parts.push(part(rbox(0.16, 0.2, 0.14, 0.04), WOOD_DARK, { position: [-1.2, 1.34, 1.3] }));
  parts.push(part(cyl(0.02, 0.11, 0.1, 8), WOOD_DARK, { position: [-1.2, 1.46, 1.3] }));
  // 화단
  parts.push(part(rbox(0.9, 0.22, 0.3, 0.06), WOOD_LIGHT, { position: [1.1, 0.55, 1.35] }));
  for (let i = 0; i < 4; i++) {
    parts.push(part(sphere(0.07, 10, 8), i % 2 ? PINK : '#fff2b0', { position: [0.8 + i * 0.2, 0.7, 1.35] }));
  }
  return parts;
}

/** 공방 창문 불빛 (창살 뒤에서 따뜻하게) */
function workshopGlowParts() {
  return [
    // 오른쪽 창 유리
    part(rbox(0.56, 0.46, 0.05, 0.03), GLOW, { position: [0.98, 1.2, 1.3] }),
    // 문 위 둥근 창
    part(sphere(0.135, 14, 12), GLOW, { position: [-0.55, 1.29, 1.335], scale: [1, 0.92, 0.25] }),
    // 문 창
    part(rbox(0.34, 0.24, 0.05, 0.03), GLOW, { position: [-0.55, 0.78, 1.31] }),
    // 옆 벽 창
    part(rbox(0.5, 0.44, 0.05, 0.03), GLOW, { position: [1.54, 1.2, 0.1], rotation: [0, Math.PI / 2, 0] }),
    // 현관 랜턴
    part(rbox(0.1, 0.13, 0.1, 0.03), GLOW, { position: [-1.2, 1.34, 1.38] }),
  ];
}

/* ── 고양이 쉼터: 크림 벽 · 코랄 지붕 · 고양이 귀 ─────────────── */
function shelterParts() {
  const parts = [];
  parts.push(part(rbox(1.9, 0.18, 1.7, 0.06), STONE, { position: [0, 0.09, 0] }));
  parts.push(part(rbox(1.75, 0.95, 1.55, 0.14), CREAM, { position: [0, 0.6, 0] }));
  // 목재 골조
  parts.push(part(rbox(1.82, 0.14, 1.62, 0.06), WOOD, { position: [0, 1.1, 0] }));
  for (const [x, z] of [
    [-0.85, 0.76],
    [0.85, 0.76],
    [-0.85, -0.76],
    [0.85, -0.76],
  ]) {
    parts.push(part(rbox(0.12, 1.0, 0.12, 0.04), WOOD, { position: [x, 0.6, z] }));
  }
  // 코랄 박공지붕 (앞뒤 박공 벽 포함)
  parts.push(gablePart(1.75, 0.62, 0.12, CREAM, { position: [0, 1.09, 0.74] }));
  parts.push(gablePart(1.75, 0.62, 0.12, CREAM, { position: [0, 1.09, -0.86] }));
  parts.push(part(rbox(1.14, 0.18, 1.85, 0.06), CORAL, { position: [-0.45, 1.42, 0], rotation: [0, 0, 0.56] }));
  parts.push(part(rbox(1.14, 0.18, 1.85, 0.06), CORAL, { position: [0.45, 1.42, 0], rotation: [0, 0, -0.56] }));
  parts.push(part(rbox(0.26, 0.2, 1.9, 0.07), '#e59589', { position: [0, 1.72, 0] }));
  // 고양이 귀
  for (const side of [-1, 1]) {
    parts.push(
      part(new THREE.ConeGeometry(0.2, 0.34, 18), CORAL, {
        position: [side * 0.4, 1.86, 0.05],
        rotation: [0, 0, side * -0.18],
      })
    );
    parts.push(
      part(new THREE.ConeGeometry(0.11, 0.2, 14), PINK, {
        position: [side * 0.38, 1.86, 0.14],
        rotation: [0, 0, side * -0.18],
      })
    );
  }
  // 둥근 출입구
  parts.push(part(rbox(0.6, 0.62, 0.1, 0.1), '#7f6a5a', { position: [0, 0.42, 0.76] }));
  parts.push(part(sphere(0.3, 16, 12), '#7f6a5a', { position: [0, 0.72, 0.76], scale: [1, 0.62, 0.16] }));
  parts.push(part(rbox(0.7, 0.1, 0.14, 0.04), MINT, { position: [0, 1.03, 0.8] }));
  // 창문 테두리
  parts.push(part(rbox(0.5, 0.44, 0.08, 0.04), WOOD, { position: [0.52, 0.68, 0.77] }));
  // 방석 · 밥그릇 · 발바닥 표찰
  parts.push(part(rbox(0.62, 0.08, 0.44, 0.03), PINK, { position: [0.55, 0.05, 1.05] }));
  parts.push(part(cyl(0.13, 0.1, 0.08, 14), MINT, { position: [-0.6, 0.05, 1.02] }));
  parts.push(part(cyl(0.1, 0.1, 0.02, 14), '#f0b9a2', { position: [-0.6, 0.08, 1.02] }));
  parts.push(part(rbox(0.38, 0.3, 0.06, 0.06), WOOD_LIGHT, { position: [0.95, 1.15, 0.55], rotation: [0, -0.5, 0] }));
  return parts;
}

function shelterGlowParts() {
  return [
    part(rbox(0.36, 0.32, 0.05, 0.03), GLOW, { position: [0.52, 0.68, 0.82] }),
    part(rbox(0.06, 0.34, 0.06, 0.02), GLOW, { position: [0.52, 0.68, 0.84] }),
  ];
}

/* ── 등대: 크림+민트 줄무늬 · 구리 지붕 · 불 켜진 등롱 ─────────── */
function lighthouseParts() {
  const parts = [];
  // 돌 기단
  parts.push(part(cyl(1.02, 1.14, 0.42, 22), STONE_DARK, { position: [0, 0.21, 0] }));
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    parts.push(part(rbox(0.28, 0.2, 0.18, 0.06), STONE, { position: [Math.cos(a) * 1.02, 0.13, Math.sin(a) * 1.02], rotation: [0, -a, 0] }));
  }
  // 줄무늬 몸통 (크림 ↔ 민트)
  parts.push(part(cyl(0.86, 0.9, 0.9, 24), CREAM, { position: [0, 0.85, 0] }));
  parts.push(part(cyl(0.8, 0.86, 0.8, 24), MINT, { position: [0, 1.7, 0] }));
  parts.push(part(cyl(0.74, 0.8, 0.8, 24), CREAM, { position: [0, 2.5, 0] }));
  parts.push(part(cyl(0.69, 0.74, 0.8, 24), MINT, { position: [0, 3.3, 0] }));
  // 상단 갤러리
  parts.push(part(cyl(0.9, 0.82, 0.16, 24), CREAM_LIGHT, { position: [0, 3.78, 0] }));
  // 민트 난간
  parts.push(part(new THREE.TorusGeometry(0.8, 0.035, 8, 28), MINT_DARK, { position: [0, 4.16, 0], rotation: [Math.PI / 2, 0, 0] }));
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    parts.push(part(cyl(0.03, 0.03, 0.4, 8), MINT_DARK, { position: [Math.cos(a) * 0.8, 3.98, Math.sin(a) * 0.8] }));
  }
  // 등롱 기둥
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    parts.push(part(rbox(0.06, 0.6, 0.06, 0.02), CREAM_LIGHT, { position: [Math.cos(a) * 0.52, 4.1, Math.sin(a) * 0.52] }));
  }
  // 구리 지붕 · 꼭대기
  parts.push(part(cyl(0.06, 0.62, 0.42, 20), COPPER, { position: [0, 4.6, 0] }));
  parts.push(part(cyl(0.5, 0.56, 0.12, 20), '#c97d4f', { position: [0, 4.36, 0] }));
  parts.push(part(sphere(0.09, 12, 10), COPPER, { position: [0, 4.86, 0] }));
  parts.push(part(cyl(0.02, 0.05, 0.14, 10), COPPER, { position: [0, 4.96, 0] }));
  // 문 · 창 테두리
  parts.push(part(rbox(0.56, 0.98, 0.12, 0.07), WOOD, { position: [0, 0.78, 0.86] }));
  parts.push(part(sphere(0.29, 16, 12), WOOD, { position: [0, 1.3, 0.84], scale: [1, 0.6, 0.16] }));
  parts.push(part(sphere(0.045, 10, 8), WOOD_DARK, { position: [0.16, 0.74, 0.94] }));
  // 문 앞 작은 박공 지붕
  parts.push(part(rbox(0.5, 0.1, 0.58, 0.04), MINT, { position: [-0.22, 1.62, 0.92], rotation: [0, 0, -0.55] }));
  parts.push(part(rbox(0.5, 0.1, 0.58, 0.04), MINT, { position: [0.22, 1.62, 0.92], rotation: [0, 0, 0.55] }));
  parts.push(part(rbox(0.1, 0.34, 0.1, 0.03), WOOD_DARK, { position: [-0.34, 1.5, 0.98] }));
  parts.push(part(rbox(0.1, 0.34, 0.1, 0.03), WOOD_DARK, { position: [0.34, 1.5, 0.98] }));
  // 작은 현관 계단
  parts.push(part(rbox(0.9, 0.12, 0.42, 0.04), STONE, { position: [0, 0.12, 1.05] }));
  // 창 테두리
  parts.push(part(rbox(0.34, 0.42, 0.08, 0.04), CREAM_LIGHT, { position: [0, 2.62, 0.72] }));
  parts.push(part(rbox(0.3, 0.38, 0.08, 0.04), CREAM_LIGHT, { position: [0.62, 1.9, 0.4], rotation: [0, 0.9, 0] }));
  return parts;
}

function lighthouseGlowParts() {
  return [
    // 등롱 불빛
    part(cyl(0.48, 0.48, 0.5, 18), '#fff0b8', { position: [0, 4.1, 0] }),
    part(sphere(0.2, 14, 12), '#fff7d6', { position: [0, 4.1, 0] }),
    // 문 위 아치 창
    part(sphere(0.24, 14, 10), GLOW, { position: [0, 1.45, 0.88], scale: [1, 0.7, 0.16] }),
    // 둥근 창
    part(rbox(0.22, 0.3, 0.06, 0.03), GLOW, { position: [0, 2.62, 0.77] }),
    part(cyl(0.14, 0.14, 0.06, 14), GLOW, { position: [0.62, 1.9, 0.45], rotation: [0, 0.9, Math.PI / 2] }),
  ];
}

const BUILDERS = { dock: dockParts, workshop: workshopParts, shelter: shelterParts, lighthouse: lighthouseParts };
const GLOWS = { workshop: workshopGlowParts, shelter: shelterGlowParts, lighthouse: lighthouseGlowParts };
const MARKER_COLORS = { dock: '#9fdcea', workshop: '#f3c98e', shelter: '#f6bcd4', lighthouse: '#c6b6ea' };

export class Structures {
  constructor(terrain) {
    this.group = new THREE.Group();
    this.group.name = 'Structures';
    this.sites = [];
    this.time = 0;

    for (const lm of LANDMARKS) {
      const builder = BUILDERS[lm.id];
      if (!builder) continue;
      const y = lm.id === 'dock' ? 0 : Math.max(terrain.sampleHeight(lm.x, lm.z), 0.02) - 0.04;
      const mesh = buildMesh(builder());
      mesh.name = `Structure_${lm.id}`;
      mesh.position.set(lm.x, y, lm.z);
      mesh.rotation.y = lm.rot;
      // 고양이 쉼터는 고양이·주인공 체급에 맞게 축소
      if (lm.id === 'shelter') mesh.scale.setScalar(0.78);
      this.group.add(mesh);

      const glowBuilder = GLOWS[lm.id];
      if (glowBuilder) {
        const glow = glowMesh(glowBuilder());
        glow.name = `StructureGlow_${lm.id}`;
        glow.position.copy(mesh.position);
        glow.rotation.y = mesh.rotation.y;
        glow.scale.copy(mesh.scale);
        this.group.add(glow);
      }

      this.sites.push({ ...lm, y, mesh });
    }

    // 부지 위에 떠 있는 작은 물방울 표식 (구슬 + 고리 · InstancedMesh 1 Draw Call)
    const drop = new THREE.SphereGeometry(0.15, 14, 12);
    drop.scale(1, 1.15, 1);
    const ringGeo = new THREE.TorusGeometry(0.2, 0.022, 6, 18);
    ringGeo.rotateX(Math.PI / 2);
    ringGeo.translate(0, -0.2, 0);
    const coneGeo = mergeParts([drop, ringGeo]);
    const coneMat = new THREE.MeshStandardMaterial({ roughness: 0.75, metalness: 0, emissive: '#ffffff', emissiveIntensity: 0.12 });
    this.markers = new THREE.InstancedMesh(coneGeo, coneMat, this.sites.length);
    this.markers.name = 'StructureMarkers';
    this.markers.frustumCulled = false;
    this.sites.forEach((site, i) => {
      this.markers.setColorAt(i, new THREE.Color(MARKER_COLORS[site.id] || '#ffffff'));
    });
    if (this.markers.instanceColor) this.markers.instanceColor.needsUpdate = true;
    this.group.add(this.markers);

    this.#writeMarkerMatrices(0);
  }

  #writeMarkerMatrices(t) {
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const s = new THREE.Vector3(1, 1, 1);
    this.sites.forEach((site, i) => {
      const bob = Math.sin(t * 1.6 + i * 1.7) * 0.12;
      v.set(site.x, site.y + site.markerY + bob, site.z);
      q.setFromEuler(new THREE.Euler(0, t * 0.9 + i, 0));
      m.compose(v, q, s);
      this.markers.setMatrixAt(i, m);
    });
    this.markers.instanceMatrix.needsUpdate = true;
  }

  update(dt) {
    this.time += dt;
    this.#writeMarkerMatrices(this.time);
  }
}
