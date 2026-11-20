/**
 * Cat.js — 솜이 · 옹이 로우폴리 고양이 (몸통 1 Draw Call + 꼬리 1 Draw Call)
 * 평화로운 대기 모션(꼬리 흔들기·숨쉬기)과 쓰다듬기 반응(폴짝 + 하트)을 담당.
 */
import * as THREE from 'three';
import { part, buildMesh, blobShadow } from '../props/parts.js';

const CAT_STYLE = {
  white: {
    fur: '#fbf7f2',
    furShade: '#efe6dd',
    ear: '#f6ccd5',
    nose: '#f0a9b4',
    stripe: null,
  },
  ginger: {
    fur: '#f3c193',
    furShade: '#e3a877',
    ear: '#f4b7a0',
    nose: '#e88e93',
    stripe: '#d99363',
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
    this.group.scale.setScalar(1.12);

    const style = CAT_STYLE[def.variant] || CAT_STYLE.white;
    this.style = style;

    this.body = this.#buildBody(style);
    this.body.userData.actor = this;
    this.group.userData.actor = this;
    this.group.add(this.body);

    this.tail = new THREE.Group();
    this.tail.position.set(0, 0.36, -0.32);
    this.tail.add(this.#buildTail(style));
    this.group.add(this.tail);

    this.shadow = blobShadow(0.34, 0.16);
    this.shadow.position.set(this.base.x, this.base.y + 0.03, this.base.z);

    this.heart = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: heartTexture(), transparent: true, depthWrite: false, depthTest: false, toneMapped: false })
    );
    this.heart.scale.set(0.42, 0.42, 1);
    this.heart.visible = false;
    this.heart.position.set(this.base.x, this.base.y + 0.9, this.base.z);
    this.group.add(this.heart);
    this.heart.position.set(0, 0.95, 0);

    this.t = Math.random() * 10;
    this.hop = 0;
    this.heartT = 0;
    this.pets = 0;
  }

  #buildBody(style) {
    const parts = [];
    // 몸통 · 가슴
    parts.push(part(new THREE.SphereGeometry(0.27, 10, 8), style.fur, { position: [0, 0.33, 0], scale: [1.0, 0.82, 1.3] }));
    parts.push(part(new THREE.SphereGeometry(0.17, 8, 8), style.furShade, { position: [0, 0.28, 0.16], scale: [1, 0.78, 0.9] }));
    // 네 다리 (길게)
    for (const [x, z] of [
      [-0.13, 0.18],
      [0.13, 0.18],
      [-0.13, -0.17],
      [0.13, -0.17],
    ]) {
      parts.push(part(new THREE.BoxGeometry(0.085, 0.24, 0.085), style.furShade, { position: [x, 0.12, z] }));
      parts.push(part(new THREE.SphereGeometry(0.055, 6, 6), style.fur, { position: [x, 0.03, z + 0.01], scale: [1, 0.6, 1.2] }));
    }
    // 머리
    parts.push(part(new THREE.SphereGeometry(0.21, 10, 8), style.fur, { position: [0, 0.57, 0.36], scale: [1.02, 0.95, 0.98] }));
    // 귀 (뾰족하게)
    parts.push(
      part(new THREE.ConeGeometry(0.1, 0.24, 4), style.fur, { position: [-0.13, 0.78, 0.33], rotation: [0, 0.3, 0.16] })
    );
    parts.push(
      part(new THREE.ConeGeometry(0.1, 0.24, 4), style.fur, { position: [0.13, 0.78, 0.33], rotation: [0, -0.3, -0.16] })
    );
    parts.push(
      part(new THREE.ConeGeometry(0.055, 0.15, 4), style.ear, { position: [-0.13, 0.78, 0.345], rotation: [0, 0.3, 0.16] })
    );
    parts.push(
      part(new THREE.ConeGeometry(0.055, 0.15, 4), style.ear, { position: [0.13, 0.78, 0.345], rotation: [0, -0.3, -0.16] })
    );
    // 주둥이 · 코
    parts.push(part(new THREE.SphereGeometry(0.092, 8, 6), '#fffaf4', { position: [0, 0.5, 0.53], scale: [1, 0.72, 0.75] }));
    parts.push(part(new THREE.SphereGeometry(0.026, 6, 6), style.nose, { position: [0, 0.535, 0.585] }));
    // 눈 (+반짝임)
    parts.push(part(new THREE.SphereGeometry(0.037, 8, 8), '#3b3a46', { position: [-0.085, 0.585, 0.5] }));
    parts.push(part(new THREE.SphereGeometry(0.037, 8, 8), '#3b3a46', { position: [0.085, 0.585, 0.5] }));
    parts.push(part(new THREE.SphereGeometry(0.013, 6, 6), '#ffffff', { position: [-0.075, 0.598, 0.528] }));
    parts.push(part(new THREE.SphereGeometry(0.013, 6, 6), '#ffffff', { position: [0.095, 0.598, 0.528] }));
    // 볼
    parts.push(part(new THREE.SphereGeometry(0.04, 6, 6), '#ffd0d8', { position: [-0.145, 0.5, 0.48], scale: [1, 0.6, 0.5] }));
    parts.push(part(new THREE.SphereGeometry(0.04, 6, 6), '#ffd0d8', { position: [0.145, 0.5, 0.48], scale: [1, 0.6, 0.5] }));
    // 수염
    for (const side of [-1, 1]) {
      for (const y of [0.49, 0.52]) {
        parts.push(
          part(new THREE.BoxGeometry(0.19, 0.007, 0.007), '#f7ece2', {
            position: [side * 0.2, y, 0.54],
            rotation: [0, 0, side * 0.14],
          })
        );
      }
    }
    // 옹이 줄무늬
    if (style.stripe) {
      for (let i = 0; i < 3; i++) {
        parts.push(
          part(new THREE.BoxGeometry(0.3, 0.04, 0.05), style.stripe, {
            position: [0, 0.44 - i * 0.06, -0.1 + i * 0.1],
            rotation: [0.12, 0, 0],
          })
        );
      }
      parts.push(part(new THREE.BoxGeometry(0.18, 0.03, 0.03), style.stripe, { position: [0, 0.78, 0.34] }));
    }

    const mesh = buildMesh(parts);
    mesh.name = `CatBody_${this.id}`;
    return mesh;
  }

  #buildTail(style) {
    const parts = [
      part(new THREE.SphereGeometry(0.07, 8, 6), style.fur, { position: [0, 0, -0.04] }),
      part(new THREE.SphereGeometry(0.062, 8, 6), style.fur, { position: [0, 0.1, -0.14] }),
      part(new THREE.SphereGeometry(0.055, 8, 6), style.fur, { position: [0.02, 0.22, -0.22] }),
      part(new THREE.SphereGeometry(0.05, 8, 6), style.fur, { position: [0.05, 0.34, -0.26] }),
      part(new THREE.SphereGeometry(0.042, 8, 6), style.furShade, { position: [0.08, 0.45, -0.28] }),
    ];
    return buildMesh(parts);
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
    const breathe = Math.sin(this.t * 1.9) * 0.012;
    this.body.scale.setScalar(1 + breathe);

    // 꼬리 흔들기
    this.tail.rotation.y = Math.sin(this.t * 1.8) * 0.38;
    this.tail.rotation.x = -0.28 + Math.sin(this.t * 1.1) * 0.16;

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
