/**
 * gatherArt.js — 6단계 새 채집지(해변·숲·광맥)의 도트 스프라이트 (32×32 캔버스 픽셀아트)
 *
 * farmArt.js 와 같은 방식 — 이미지 에셋 없이 픽셀을 직접 찍어 NearestFilter 로 키운다.
 * 아틀라스 프레임이 아니라 캔버스 텍스처라서, Scenery 가 이 텍스처로 세로 빌보드를 세운다.
 *   · shell 조개 · conch 소라 · driftwood 유목
 *   · pine_mushroom 송이버섯 · acorn 도토리 · honey 달콤한 꿀
 *   · copper 구리광석 · crystal 수정
 */
import * as THREE from 'three';

const cache = new Map();

function canvas(size = 32) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  return { c, ctx };
}

function toTexture(c) {
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

/** 1px 외곽선 — 게임의 다른 도트처럼 실루엣이 또렷해진다 */
function addOutline(ctx, size, color = 'rgba(86,66,84,0.92)') {
  const img = ctx.getImageData(0, 0, size, size);
  const src = new Uint8ClampedArray(img.data);
  const at = (x, y) => src[(y * size + x) * 4 + 3];
  const put = (x, y) => {
    const i = (y * size + x) * 4;
    if (src[i + 3] > 40) return;
    const [r, g, b, a] = parseOutline(color);
    img.data[i] = r;
    img.data[i + 1] = g;
    img.data[i + 2] = b;
    img.data[i + 3] = a;
  };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (at(x, y) > 40) continue;
      const near =
        (x > 0 && at(x - 1, y) > 120) ||
        (x < size - 1 && at(x + 1, y) > 120) ||
        (y > 0 && at(x, y - 1) > 120) ||
        (y < size - 1 && at(x, y + 1) > 120);
      if (near) put(x, y);
    }
  }
  ctx.putImageData(img, 0, 0);
}

function parseOutline(c) {
  const m = /rgba?\(([^)]+)\)/.exec(c);
  if (!m) return [86, 66, 84, 235];
  const parts = m[1].split(',').map((v) => parseFloat(v.trim()));
  return [parts[0], parts[1], parts[2], Math.round((parts[3] ?? 1) * 255)];
}

/** 픽셀 사각형 */ 
function px(ctx, x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

/** 32×32 도트 한 종류를 그린다 */ 
function draw(id, ctx) {
  if (id === 'shell') {
    // 부채꼴 조개 — 캔버스를 넓게 채우는 크림·분홍 조가비
    px(ctx, 6, 26, 20, 2, '#ffd9cf');
    px(ctx, 2, 22, 28, 4, '#ffe6dc');
    px(ctx, 3, 19, 26, 3, '#ffd9cf');
    px(ctx, 5, 16, 22, 3, '#ffece4');
    px(ctx, 8, 13, 16, 3, '#fff4ee');
    px(ctx, 11, 10, 10, 3, '#ffffff');
    // 빗살 줄무늬
    for (const [x, y, h] of [[6, 17, 8], [10, 14, 11], [13, 12, 13], [16, 11, 14], [19, 12, 13], [22, 14, 11], [26, 17, 8]]) {
      px(ctx, x, y, 1, h, '#ff9fb6');
    }
    px(ctx, 9, 21, 14, 2, '#f8b9c6');
    px(ctx, 13, 22, 6, 2, '#ffc9d4');
    // 윗면 하이라이트
    px(ctx, 14, 12, 4, 1, '#ffffff');
    px(ctx, 10, 16, 3, 1, '#fff8f4');
    px(ctx, 12, 27, 8, 2, '#f0c9b6');
  } else if (id === 'conch') {
    // 소라 — 나선 껍데기, 뾰족한 꼭대기와 나팔 입구
    px(ctx, 5, 24, 22, 3, '#f6d8ab');
    px(ctx, 10, 6, 4, 6, '#f6c98f');
    px(ctx, 11, 3, 3, 4, '#fbe0b8');
    px(ctx, 12, 1, 2, 3, '#fff0d8');
    px(ctx, 8, 10, 16, 14, '#eaa96a');
    px(ctx, 9, 8, 14, 4, '#f3bc84');
    px(ctx, 7, 20, 20, 4, '#d18b4f');
    px(ctx, 8, 24, 18, 2, '#c0793f');
    // 나선 무늬
    px(ctx, 10, 12, 12, 2, '#c9793f');
    px(ctx, 12, 15, 12, 2, '#c9793f');
    px(ctx, 14, 18, 10, 2, '#c9793f');
    px(ctx, 9, 10, 3, 2, '#fbd6a6');
    px(ctx, 16, 13, 2, 1, '#ffd9ae');
    // 나팔 입구
    px(ctx, 23, 14, 5, 10, '#b56334');
    px(ctx, 24, 15, 3, 7, '#7f3f1f');
    px(ctx, 23, 13, 5, 1, '#ffdfb6');
  } else if (id === 'driftwood') {
    // 유목 — 바닷물에 다듬어진 창백한 나무토막, 작은 가지 둘
    px(ctx, 2, 20, 28, 8, '#e3cfae');
    px(ctx, 2, 18, 28, 2, '#f6ead2');
    px(ctx, 2, 28, 28, 1, '#c4ab86');
    px(ctx, 5, 21, 7, 2, '#fbf1dc');
    px(ctx, 16, 23, 10, 1, '#cbb18b');
    px(ctx, 22, 26, 5, 1, '#cbb18b');
    // 가지
    px(ctx, 24, 12, 3, 8, '#e3cfae');
    px(ctx, 25, 10, 5, 3, '#f6ead2');
    px(ctx, 8, 13, 3, 7, '#dcc6a2');
    px(ctx, 9, 11, 3, 3, '#eddcc0');
    // 나뭇결
    px(ctx, 5, 22, 2, 6, '#b89e78');
    px(ctx, 13, 21, 1, 7, '#c9ae88');
    px(ctx, 21, 22, 1, 5, '#b89e78');
    px(ctx, 4, 29, 24, 2, '#f2e6cc');
  } else if (id === 'pine_mushroom') {
    // 송이버섯 — 큰 갓 하나 + 작은 송이 둘
    const big = (cx, baseY, w, capH, stemW) => {
      px(ctx, cx - w / 2, baseY - capH, w, capH, '#a9713f');
      px(ctx, cx - w / 2 + 1, baseY - capH, w - 2, 2, '#c48a51');
      px(ctx, cx - w / 2 + 2, baseY - capH + 1, w - 4, 1, '#d9a468');
      px(ctx, cx - w / 2 - 1, baseY - 3, w + 2, 3, '#8a5a30');
      px(ctx, cx - stemW / 2, baseY - 4, stemW, 10, '#f6e6c8');
      px(ctx, cx - stemW / 2, baseY + 4, stemW, 2, '#e2cda6');
      px(ctx, cx - stemW / 2, baseY - 4, 2, 8, '#fff3dc');
    };
    big(17, 21, 22, 8, 8);
    big(8, 27, 10, 5, 4);
    big(25, 28, 9, 5, 3);
    px(ctx, 5, 29, 24, 2, '#d9c39a');
    px(ctx, 3, 30, 6, 1, '#8fbb6a');
    px(ctx, 24, 30, 6, 1, '#8fbb6a');
  } else if (id === 'acorn') {
    // 도토리 — 큰 알 세 개 + 마른 잎
    const acorn = (x, y, s = 1) => {
      const w = 8 * s;
      px(ctx, x, y, w, 10 * s, '#d8a465');
      px(ctx, x, y + 8 * s, w, 2 * s, '#b9854f');
      px(ctx, x + 1, y + 1, 3, 4, '#f0cfa0');
      px(ctx, x - 1, y - 4, w + 2, 5, '#7a5236');
      px(ctx, x, y - 4, w, 2, '#96663f');
      px(ctx, x + w / 2 - 1, y - 6, 2, 3, '#5d3f28');
    };
    acorn(6, 18, 1);
    acorn(17, 21, 1);
    acorn(23, 13, 0.6);
    // 잎
    px(ctx, 4, 8, 2, 8, '#7d6a4a');
    px(ctx, 1, 4, 8, 4, '#d8b56a');
    px(ctx, 2, 5, 5, 2, '#e8ca88');
    px(ctx, 9, 28, 18, 2, '#e6d3b0');
  } else if (id === 'honey') {
    // 달콤한 꿀 — 벌집 토막에서 꿀이 흘러내린다
    px(ctx, 6, 24, 20, 6, '#b9854f');
    px(ctx, 6, 22, 20, 3, '#d8a465');
    const comb = (x, y, s = 1) => {
      px(ctx, x, y, 7 * s, 7 * s, '#f2b53c');
      px(ctx, x + 1, y, 5 * s, 2, '#ffd77a');
      px(ctx, x, y + 6 * s, 7 * s, 1, '#d4932c');
      px(ctx, x + 3, y + 3, 2, 2, '#a86c1f');
      px(ctx, x + 1, y + 3, 1, 1, '#ffe7a6');
    };
    comb(6, 10, 1);
    comb(14, 10, 1);
    comb(22, 11, 0.7);
    comb(10, 17, 1);
    comb(18, 17, 1);
    px(ctx, 15, 18, 5, 5, '#ffcf5c');
    px(ctx, 16, 23, 3, 4, '#ffb83c');
    px(ctx, 17, 27, 2, 2, '#ffd77a');
    px(ctx, 6, 29, 22, 2, '#e0b878');
    // 벌 한 마리
    px(ctx, 26, 6, 4, 3, '#5d4a2a');
    px(ctx, 27, 5, 2, 1, '#ffd34e');
    px(ctx, 27, 4, 1, 1, '#fff3c0');
  } else if (id === 'copper') {
    // 구리 광석 — 따뜻한 회갈색 암석에 주황 구리 광맥, 청록 산화 반점
    px(ctx, 5, 19, 22, 8, '#8a7768');
    px(ctx, 7, 15, 18, 5, '#a89484');
    px(ctx, 9, 12, 14, 4, '#c0aa96');
    px(ctx, 6, 24, 21, 3, '#6e5d52');
    px(ctx, 8, 14, 4, 2, '#d8c4ae');
    // 구리 광맥 — 두껍고 밝게
    px(ctx, 10, 12, 4, 11, '#ef9a4e');
    px(ctx, 10, 20, 11, 3, '#ef9a4e');
    px(ctx, 18, 15, 3, 7, '#ffb970');
    px(ctx, 20, 12, 2, 4, '#d97a30');
    px(ctx, 12, 14, 1, 5, '#ffd2a0');
    px(ctx, 19, 17, 1, 3, '#ffe3c0');
    // 청록 산화 반점
    px(ctx, 8, 17, 3, 2, '#6fc0a8');
    px(ctx, 21, 21, 3, 2, '#6fc0a8');
    px(ctx, 15, 24, 4, 2, '#4f9b88');
    px(ctx, 9, 27, 13, 1, '#4f4238');
  } else {
    // 수정 — 맑은 청록 결정 세 갈래, 반짝임
    px(ctx, 6, 25, 20, 3, '#8fa6b8');
    const shard = (x, top, bottom, w, light, mid, dark) => {
      px(ctx, x, top, w, bottom - top, mid);
      px(ctx, x, top, 1, bottom - top, light);
      px(ctx, x + w - 1, top, 1, bottom - top, dark);
      px(ctx, x + 1, top - 2, w - 2, 2, light);
    };
    shard(9, 14, 26, 5, '#d8f6ff', '#9fe4f2', '#6fc0d6');
    shard(15, 8, 26, 6, '#e8fbff', '#b2ecf8', '#7ccbe0');
    shard(21, 15, 26, 4, '#d0f2fc', '#95dcec', '#64b6cb');
    px(ctx, 16, 11, 2, 5, '#ffffff');
    px(ctx, 17, 9, 1, 2, '#ffffff');
    // 반짝 별
    px(ctx, 25, 7, 1, 5, '#ffffff');
    px(ctx, 23, 9, 5, 1, '#ffffff');
    px(ctx, 8, 10, 1, 3, '#e8fbff');
    px(ctx, 7, 11, 3, 1, '#e8fbff');
  }
}

/** 채집지 종류 → 32×32 도트 텍스처 */ 
export function gatherTexture(id) {
  const key = `gather:${id}`;
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = canvas(32);
  draw(id, ctx);
  addOutline(ctx, 32);
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}

/** node 의 height(월드 높이) 에 맞춘 세로 빌보드 메시 */
export function gatherSprite(id, height = 0.5) {
  const geo = new THREE.PlaneGeometry(height, height);
  geo.translate(0, height / 2, 0);
  const mat = new THREE.MeshBasicMaterial({
    map: gatherTexture(id),
    alphaTest: 0.5,
    transparent: false,
    depthWrite: true,
    side: THREE.DoubleSide,
    toneMapped: false,
    fog: true,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 3;
  return mesh;
}

/** 채집지별 남는 자리(밑동) — 모래더미 / 흙더미 / 자갈 */ 
export function gatherStubTexture(bucket = 'beach') {
  const key = `gstub:${bucket}`;
  if (cache.has(key)) return cache.get(key);
  const { c, ctx } = canvas(16);
  if (bucket === 'beach') {
    px(ctx, 3, 10, 10, 3, '#f2e0bc');
    px(ctx, 4, 9, 8, 1, '#ffeccb');
    px(ctx, 5, 12, 6, 1, '#dcc7a0');
    px(ctx, 6, 8, 1, 1, '#fff6e2');
  } else if (bucket === 'forest') {
    px(ctx, 3, 9, 10, 4, '#8a6a4a');
    px(ctx, 4, 8, 8, 1, '#a4815c');
    px(ctx, 5, 12, 6, 1, '#6f5439');
    px(ctx, 7, 5, 1, 4, '#6fa35a');
    px(ctx, 8, 4, 2, 2, '#9ed07a');
  } else {
    px(ctx, 3, 10, 10, 3, '#a6aabf');
    px(ctx, 4, 9, 8, 2, '#c3c6d6');
    px(ctx, 5, 12, 6, 1, '#7b8098');
    px(ctx, 6, 9, 2, 1, '#e7e9f2');
  }
  const tex = toTexture(c);
  cache.set(key, tex);
  return tex;
}
