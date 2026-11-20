/**
 * Landmarks.js — 랜드마크 이름표를 DOM 오버레이로 그린다.
 * 3D 스프라이트는 가까이 가면 화면을 덮어버리므로, 화면 좌표로 투영해 항상 같은 크기로 유지한다.
 */
import * as THREE from 'three';
import { h } from './dom.js';

export class LandmarkLabels {
  constructor(root, sites) {
    this.container = h('div', { class: 'landmark-layer' });
    root.append(this.container);
    this.items = sites.map((site) => {
      const el = h(
        'div',
        { class: 'landmark-pill' },
        h('span', { class: 'lm-ico' }, site.icon),
        h('span', { class: 'lm-name' }, site.name),
        h('span', { class: 'lm-day' }, `${site.day}일차 복구`)
      );
      this.container.append(el);
      return { site, el, x: site.x, y: site.y + site.markerY + 0.55, z: site.z, opacity: -1 };
    });
    this.v = new THREE.Vector3();
  }

  setVisible(v) {
    this.container.style.opacity = v ? '1' : '0';
  }

  update(camera, visible) {
    if (!visible) {
      if (this.container.style.opacity !== '0') this.container.style.opacity = '0';
      return;
    }
    this.container.style.opacity = '1';

    const w = window.innerWidth;
    const hgt = window.innerHeight;
    const camPos = camera.position;

    for (const item of this.items) {
      this.v.set(item.x, item.y, item.z);
      const dist = camPos.distanceTo(this.v);
      this.v.project(camera);

      const behind = this.v.z > 1;
      const sx = (this.v.x * 0.5 + 0.5) * w;
      const sy = (-this.v.y * 0.5 + 0.5) * hgt;
      const offScreen = sy < 92 || sy > hgt - 96 || sx < 24 || sx > w - 24;
      const target =
        behind || dist > 34 || offScreen ? 0 : Math.min(1, Math.max(0, (34 - dist) / 12)) * 0.95;
      item.opacity += (target - item.opacity) * 0.18;
      if (Math.abs(target - item.opacity) < 0.02) item.opacity = target;

      const el = item.el;
      if (item.opacity <= 0.02) {
        if (el.style.display !== 'none') el.style.display = 'none';
        continue;
      }
      if (el.style.display === 'none') el.style.display = 'flex';
      el.style.opacity = item.opacity.toFixed(2);
      el.style.transform = `translate(-50%, -50%) translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px)`;
    }
  }
}
