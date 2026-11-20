/**
 * Fx.js — 채집 타격의 파티클과 머리 위 획득 문구
 *
 * · 파티클: 미리 잡아 둔 Points 버퍼 220개. 색은 파티클마다 다르고,
 *   살아 있는 동안만 화면에 보이며 죽으면 y=-999 로 숨긴다.
 * · 플로팅 텍스트: DOM 한 겹에 얹어 3D 좌표를 매 프레임 화면 좌표로 투영한다.
 *   (스프라이트 대신 DOM 을 쓰면 폰트가 선명하고, 글자가 기기 해상도에 맞게 나온다)
 */
import * as THREE from 'three';
import { dotTexture } from '../sprites/icons3d.js';
import { h } from '../ui/dom.js';

const MAX = 220;

export class Fx {
  constructor(scene, uiRoot) {
    this.scene = scene;
    this.particles = Array.from({ length: MAX }, () => ({
      x: 0, y: -999, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 1, size: 1, color: new THREE.Color('#ffffff'),
    }));
    this.cursor = 0;

    const positions = new Float32Array(MAX * 3);
    const colors = new Float32Array(MAX * 3);
    for (let i = 0; i < MAX; i++) positions[i * 3 + 1] = -999;

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.17,
      map: dotTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.96,
      depthWrite: false,
      toneMapped: false,
      sizeAttenuation: true,
    });

    this.points = new THREE.Points(geo, mat);
    this.points.name = 'GatherFx';
    this.points.frustumCulled = false;
    this.points.renderOrder = 4;
    scene.add(this.points);

    this.layer = h('div', { class: 'float-layer' });
    uiRoot.append(this.layer);
    this.texts = [];
    this.v = new THREE.Vector3();
  }

  /** 색 파티클 한 줌 */
  burst(x, y, z, color = '#ffd7e7', count = 10, opts = {}) {
    const spread = opts.spread ?? 1.6;
    const up = opts.up ?? 2.3;
    const size = opts.size ?? 1;
    for (let i = 0; i < count; i++) {
      const p = this.particles[this.cursor];
      this.cursor = (this.cursor + 1) % MAX;
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * spread;
      p.x = x + Math.cos(a) * 0.12;
      p.y = y + 0.25 + Math.random() * 0.5;
      p.z = z + Math.sin(a) * 0.12;
      p.vx = Math.cos(a) * r;
      p.vz = Math.sin(a) * r;
      p.vy = 0.6 + Math.random() * up;
      p.max = 0.45 + Math.random() * 0.4;
      p.life = p.max;
      p.size = size * (0.7 + Math.random() * 0.6);
      p.color.set(color);
      // 살짝 다른 밝기를 섞어 알갱이처럼 보이게
      p.color.offsetHSL(0, 0, (Math.random() - 0.5) * 0.12);
    }
  }

  /** 머리 위에 잠깐 떠오르는 문구 */
  float(text, x, y, z, color = '#6b5878') {
    const el = h('div', { class: 'float-text', style: { color } }, text);
    this.layer.append(el);
    this.texts.push({ el, pos: new THREE.Vector3(x, y, z), age: 0, life: 1.15 });
    while (this.texts.length > 14) {
      const old = this.texts.shift();
      old.el.remove();
    }
  }

  update(dt, camera) {
    const pos = this.points.geometry.attributes.position.array;
    const col = this.points.geometry.attributes.color.array;
    for (let i = 0; i < MAX; i++) {
      const p = this.particles[i];
      const i3 = i * 3;
      if (p.life <= 0) {
        if (pos[i3 + 1] !== -999) {
          pos[i3 + 1] = -999;
          col[i3] = col[i3 + 1] = col[i3 + 2] = 0;
        }
        continue;
      }
      p.life = Math.max(0, p.life - dt);
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      p.vy -= 5.4 * dt;
      p.vx *= 1 - dt * 1.6;
      p.vz *= 1 - dt * 1.6;
      if (p.y < 0.02) {
        p.y = 0.02;
        p.vy *= -0.32;
      }
      if (p.life <= 0) {
        pos[i3 + 1] = -999;
        col[i3] = col[i3 + 1] = col[i3 + 2] = 0;
        continue;
      }
      const k = Math.min(1, p.life / p.max);
      pos[i3] = p.x;
      pos[i3 + 1] = p.y;
      pos[i3 + 2] = p.z;
      col[i3] = p.color.r * k;
      col[i3 + 1] = p.color.g * k;
      col[i3 + 2] = p.color.b * k;
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;

    if (!this.texts.length) return;
    const w = window.innerWidth;
    const hgt = window.innerHeight;
    for (let i = this.texts.length - 1; i >= 0; i--) {
      const t = this.texts[i];
      t.age += dt;
      if (t.age >= t.life) {
        t.el.remove();
        this.texts.splice(i, 1);
        continue;
      }
      const rise = t.age / t.life;
      this.v.copy(t.pos);
      this.v.y += 0.55 + rise * 0.85;
      this.v.project(camera);
      const sx = (this.v.x * 0.5 + 0.5) * w;
      const sy = (-this.v.y * 0.5 + 0.5) * hgt;
      t.el.style.transform = `translate(-50%, -50%) translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px)`;
      t.el.style.opacity = String(Math.min(1, (1 - rise) * 2.4));
      t.el.style.fontSize = `${13 - rise * 1.5}px`;
    }
  }

  clear() {
    for (const p of this.particles) {
      p.life = 0;
      p.y = -999;
    }
    for (const t of this.texts) t.el.remove();
    this.texts = [];
  }
}
