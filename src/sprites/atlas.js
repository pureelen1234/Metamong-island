/**
 * atlas.js — 도트 스프라이트 아틀라스 로더 (HD-2D)
 *
 * public/sprites/ 의 세트(PNG 아틀라스 + JSON 매니페스트)를 읽어
 * 픽셀이 뭉개지지 않도록 NearestFilter · mipmap 없음으로 텍스처를 만든다.
 */
import * as THREE from 'three';

export const SPRITE_SETS = [
  'protagonist',
  'somi',
  'ongi',
  'ditto_basic',
  'disguises',
  'buildings',
  'nature',
  // 5단계 불청객 — 컨셉 시안 기반 HD-2D 도트 (2행×4열: 정면 걷기·뒷면 걷기)
  'raider',
  'raider_runner',
  'raider_big',
];

const loader = new THREE.TextureLoader();

function configure(texture) {
  texture.colorSpace = THREE.SRGBColorSpace;
  // ③ 도트 선명도 — 확대/축소 모두 Nearest, 밉맵 없음
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.anisotropy = 1;
  return texture;
}

async function loadSet(set) {
  const dir = new URL('sprites/', document.baseURI);
  const res = await fetch(new URL(`${set}.json`, dir).href);
  if (!res.ok) throw new Error(`스프라이트 매니페스트 없음: ${set}.json (${res.status})`);
  const json = await res.json();
  const texture = configure(await loader.loadAsync(new URL(`${set}_sheet.png`, dir).href));

  const frames = new Map();
  for (const f of json.frames) frames.set(f.name, f);

  return {
    set,
    texture,
    frames,
    cell: json.cell,
    cols: json.grid[0],
    rows: json.grid[1],
    notes: json.notes || [],
  };
}

/** 모든 세트를 병렬 로드 */
export async function loadAtlases() {
  const list = await Promise.all(SPRITE_SETS.map(loadSet));
  const map = new Map();
  for (const a of list) map.set(a.set, a);
  return map;
}
