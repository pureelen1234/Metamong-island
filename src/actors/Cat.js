/**
 * Cat.js — 솜이 · 옹이 (찹쌀떡 치비 고양이)
 * 큰 머리 · 동글 눈 + 반짝 하이라이트 · 볼터치 · 작은 미소.
 * 평화로운 대기 모션(꼬리 흔들기·숨쉬기)과 쓰다듬기 반응(폴짝 + 하트)을 담당.
 */
import * as THREE from 'three';
import { part, buildMesh, blobShadow, sphere, capsule, rbox } from '../props/parts.js';
import { solid } from '../render/toon.js';

const CAT_STYLE = {
  white: {
    fur: '#fdf6e8',
    furShade: '#f0e4d1',
    belly: '#fffdf6',
    ear: '#ffc3cd',
    nose: '#ff9fb0',
    eye: '#3f6086',
    stripe: null,
    bandana: null,
  },
  ginger: {
    fur: '#f8ab52',
    furShade: '#ef9a3f',
    belly: '#fff0d8',
    ear: '#ffb3bd',
    nose: '#d97a68',
    eye: '#5b3a24',
    stripe: '#dd8730',
    bandana: '#8fd6bd',
  },
};

function heartTexture() {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 128, 128);
  ctx.font = '92px "Noto Sans CJK KR", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  ctx.strokeText('♥', 64, 66);
  ctx.fillStyle = '#ff8fae';
  ctx.fillText('♥', 64, 66);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class Cat {
  constructor(def, terrain) {
    this.kind = 'cat';
    this.id = def.id;
    this.name = def.name;
    this.variant = def.variant;
    this.terrain = terrain;
    this.base = new THREE.Vector3(def.x, terrain.groundY(def.x, def.z), def.z);

    this.group = new THREE.Group();
    this.group.name = `Cat_${def.id}`;
    this.group.position.copy(this.base);
    this.group.scale.setScalar(1.16);

    const style = CAT_STYLE[def.variant] || CAT_STYLE.white;
    this.style = style;

    this.body = this.#buildBody(style);
    this.body.userData.actor = this;
    this.group.userData.actor = this;
    this.group.add(this.body);

    this.tail = new THREE.Group();
    this.tail.position.set(0, 0.34, -0.24);
    this.tail.add(this.#buildTail(style));
    this.group.add(this.tail);

    this.shadow = blobShadow(0.36, 0.05);
    this.shadow.position.set(this.base.x, this.base.y + 0.03, this.base.z);

    this.heart = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: heartTexture(), transparent: true, depthWrite: false, depthTest: false, toneMapped: false })
    );
    this.heart.scale.set(0.42, 0.42, 1);
    this.heart.visible = false;
    this.group.add(this.heart);
    this.heart.position.set(0, 0.95, 0);

    this.t = Math.random() * 10;
    this.hop = 0;
    this.heartT = 0;
    this.pets = 0;
  }

  #buildBody(style) {
    const parts = [];
    // 몸통 (동글동글)
    parts.push(part(sphere(0.255, 20, 16), style.fur, { position: [0, 0.3, 0], scale: [1.0, 0.99, 0.95] }));
    // 배 · 가슴
    parts.push(part(sphere(0.15, 16, 12), style.belly, { position: [0, 0.29, 0.145], scale: [1, 0.95, 0.52] }));

    // 짧고 통통한 네 다리
    for (const [x, z] of [
      [-0.12, 0.1],
      [0.12, 0.1],
      [-0.12, -0.12],
      [0.12, -0.12],
    ]) {
      parts.push(part(capsule(0.058, 0.03, 10), style.furShade, { position: [x, 0.1, z] }));
      parts.push(part(sphere(0.061, 10, 8), style.belly, { position: [x, 0.03, z + 0.02], scale: [1, 0.68, 1.1] }));
    }

    // 머리 (몸통보다 큰 찹쌀떡 머리)
    parts.push(part(sphere(0.275, 22, 18), style.fur, { position: [0, 0.62, 0.02] }));

    // 귀 (둥근 삼각형) + 분홍 속귀
    for (const side of [-1, 1]) {
      parts.push(
        part(new THREE.ConeGeometry(0.105, 0.24, 16), style.fur, {
          position: [side * 0.155, 0.845, 0.015],
          rotation: [0, 0, side * -0.2],
        })
      );
      parts.push(
        part(new THREE.ConeGeometry(0.058, 0.15, 14), style.ear, {
          position: [side * 0.152, 0.835, 0.055],
          rotation: [0, 0, side * -0.2],
        })
      );
    }

    // 주둥이 · 코 · 작은 입
    parts.push(part(sphere(0.135, 16, 12), style.belly, { position: [0, 0.53, 0.235], scale: [1.15, 0.86, 0.58] }));
    parts.push(part(sphere(0.028, 10, 8), style.nose, { position: [0, 0.578, 0.3], scale: [1.2, 0.9, 0.8] }));
    for (const side of [-1, 1]) {
      parts.push(
        part(new THREE.TorusGeometry(0.03, 0.0065, 6, 12, Math.PI), style.stripe ? '#8a5330' : '#b98a6a', {
          position: [side * 0.031, 0.545, 0.293],
          rotation: [0, 0, Math.PI],
        })
      );
    }

    // 큰 눈 + 반짝 하이라이트
    for (const side of [-1, 1]) {
      parts.push(part(sphere(0.062, 16, 14), style.eye, { position: [side * 0.105, 0.635, 0.255] }));
      parts.push(part(sphere(0.022, 10, 8), '#ffffff', { position: [side * 0.105 + 0.018, 0.655, 0.305] }));
      parts.push(part(sphere(0.011, 8, 6), '#ffffff', { position: [side * 0.105 - 0.016, 0.618, 0.308] }));
    }

    // 볼터치
    for (const side of [-1, 1]) {
      parts.push(
        part(sphere(0.055, 12, 8), '#ffd0d8', {
          position: [side * 0.19, 0.585, 0.205],
          scale: [1, 0.6, 0.35],
        })
      );
    }

    // 옹이 줄무늬 (이마 세 줄 · 등)
    if (style.stripe) {
      for (const [x, y, z, s] of [
        [-0.085, 0.815, 0.145, 1.0],
        [0, 0.83, 0.155, 1.15],
        [0.085, 0.815, 0.145, 1.0],
      ]) {
        parts.push(
          part(sphere(0.05, 10, 8), style.stripe, {
            position: [x, y, z],
            scale: [0.34 * s, 0.9 * s, 0.26],
          })
        );
      }
      for (const side of [-1, 1]) {
        parts.push(
          part(sphere(0.05, 10, 8), style.stripe, {
            position: [side * 0.235, 0.42, -0.02],
            scale: [0.35, 1.0, 0.85],
          })
        );
        parts.push(
          part(sphere(0.045, 10, 8), style.stripe, {
            position: [side * 0.215, 0.28, 0.04],
            scale: [0.3, 0.9, 0.75],
          })
        );
      }
      // 앞다리 줄무늬
      for (const side of [-1, 1]) {
        parts.push(
          part(sphere(0.05, 10, 8), style.stripe, {
            position: [side * 0.12, 0.13, 0.03],
            scale: [0.9, 0.34, 0.7],
          })
        );
      }
    }

    // 옹이의 청록 반다나
    if (style.bandana) {
      parts.push(
        part(new THREE.TorusGeometry(0.165, 0.04, 8, 22), style.bandana, {
          position: [0, 0.44, 0.05],
          rotation: [Math.PI / 2 - 0.18, 0, 0],
          scale: [1, 1, 0.8],
        })
      );
      parts.push(
        part(new THREE.ConeGeometry(0.135, 0.23, 3), style.bandana, {
          position: [0, 0.36, 0.235],
          rotation: [Math.PI - 0.25, 0, 0],
          scale: [1, 1, 0.55],
        })
      );
    }

    // 솜이의 보송 볼 털
    if (!style.stripe) {
      for (const side of [-1, 1]) {
        parts.push(
          part(sphere(0.075, 12, 8), style.fur, {
            position: [side * 0.245, 0.585, 0.11],
            scale: [0.8, 1.0, 0.9],
          })
        );
      }
    }

    const mesh = buildMesh(parts);
    mesh.name = `CatBody_${this.id}`;
    solid(mesh, 0.012);
    return mesh;
  }

  #buildTail(style) {
    const parts = [
      part(sphere(0.075, 12, 8), style.fur, { position: [0, 0, -0.04] }),
      part(sphere(0.068, 12, 8), style.fur, { position: [0, 0.1, -0.13] }),
      part(sphere(0.061, 12, 8), style.fur, { position: [0.02, 0.2, -0.2] }),
      part(sphere(0.054, 12, 8), style.fur, { position: [0.05, 0.3, -0.24] }),
      part(sphere(0.047, 12, 8), style.furShade, { position: [0.08, 0.39, -0.255] }),
    ];
    if (style.stripe) {
      parts.push(part(sphere(0.05, 10, 8), style.stripe, { position: [0.01, 0.15, -0.17], scale: [1.1, 0.32, 1.0] }));
      parts.push(part(sphere(0.045, 10, 8), style.stripe, { position: [0.045, 0.27, -0.23], scale: [1.1, 0.32, 1.0] }));
      parts.push(part(sphere(0.04, 10, 8), style.stripe, { position: [0.075, 0.36, -0.25], scale: [1.1, 0.32, 1.0] }));
    }
    return solid(buildMesh(parts), 0.011);
  }

  distanceTo(pos) {
    const dx = this.base.x - pos.x;
    const dz = this.base.z - pos.z;
    return Math.hypot(dx, dz);
  }

  pet() {
    this.hop = 1;
    this.heartT = 1.5;
    this.pets += 1;
  }

  update(dt) {
    this.t += dt;
    const breathe = Math.sin(this.t * 1.9) * 0.014;
    this.body.scale.set(1 + breathe * 0.7, 1 + breathe, 1 + breathe * 0.7);

    // 꼬리 흔들기
    this.tail.rotation.y = Math.sin(this.t * 1.8) * 0.42;
    this.tail.rotation.x = -0.22 + Math.sin(this.t * 1.1) * 0.18;

    // 폴짝
    if (this.hop > 0) {
      this.hop = Math.max(0, this.hop - dt * 1.6);
      const lift = Math.sin((1 - this.hop) * Math.PI) * 0.32;
      this.group.position.y = this.base.y + lift;
      this.body.rotation.z = Math.sin((1 - this.hop) * Math.PI * 2) * 0.08;
    } else {
      this.group.position.y = this.base.y;
      this.body.rotation.z *= 0.9;
    }

    // 하트
    if (this.heartT > 0) {
      this.heartT = Math.max(0, this.heartT - dt);
      const p = 1 - this.heartT / 1.5;
      this.heart.visible = true;
      this.heart.position.set(0, 0.95 + p * 0.8, 0);
      this.heart.material.opacity = Math.min(1, this.heartT * 1.6);
      const s = 0.32 + p * 0.25;
      this.heart.scale.set(s, s, 1);
    } else if (this.heart.visible) {
      this.heart.visible = false;
    }
  }
}
