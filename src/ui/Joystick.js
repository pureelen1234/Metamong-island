/** Joystick.js — Floating 가상 조이스틱 (터치 + 마우스 드래그 공용, Pointer Events) */
import { h } from './dom.js';

export class Joystick {
  constructor(root) {
    this.zone = h('div', { class: 'joystick-zone' });
    this.home = h('div', { class: 'joystick-home' }, h('span', {}, 'MOVE'));
    this.base = h('div', { class: 'joystick-base' }, h('div', { class: 'joystick-knob' }));
    this.knob = this.base.firstChild;
    this.zone.append(this.home, this.base);
    root.append(this.zone);

    this.radius = 52;
    this.deadZone = 0.14;
    this.vector = { x: 0, y: 0 };
    this.active = false;
    this.enabled = true;
    this.pointerId = null;
    this.origin = { x: 0, y: 0 };

    this.zone.addEventListener('pointerdown', (e) => this.#down(e));
    this.zone.addEventListener('pointermove', (e) => this.#move(e));
    this.zone.addEventListener('pointerup', (e) => this.#up(e));
    this.zone.addEventListener('pointercancel', (e) => this.#up(e));
    this.zone.addEventListener('lostpointercapture', (e) => this.#up(e));
    this.zone.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('blur', () => this.reset());
  }

  setEnabled(v) {
    this.enabled = v;
    if (!v) this.reset();
    this.zone.style.opacity = v ? '1' : '0.35';
  }

  #local(e) {
    const rect = this.zone.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top, width: rect.width, height: rect.height };
  }

  #down(e) {
    if (!this.enabled || this.pointerId !== null) return;
    e.preventDefault();
    this.pointerId = e.pointerId;
    this.active = true;
    const p = this.#local(e);
    const maxX = Math.max(this.radius, p.width - this.radius);
    const maxY = Math.max(this.radius, p.height - this.radius);
    const cx = Math.max(this.radius, Math.min(maxX, p.x));
    const cy = Math.max(this.radius, Math.min(maxY, p.y));
    this.origin = { x: cx, y: cy };
    this.base.style.left = `${cx}px`;
    this.base.style.top = `${cy}px`;
    this.zone.classList.add('active');
    this.base.classList.add('active');
    this.home.style.opacity = '0';
    this.knob.style.transform = 'translate(0px, 0px)';
    this.vector.x = 0;
    this.vector.y = 0;
    try {
      this.zone.setPointerCapture(e.pointerId);
    } catch {
      /* 캡처 미지원 브라우저는 무시 */
    }
  }

  #move(e) {
    if (this.pointerId !== e.pointerId || !this.active) return;
    e.preventDefault();
    const p = this.#local(e);
    let dx = p.x - this.origin.x;
    let dy = p.y - this.origin.y;
    const dist = Math.hypot(dx, dy);
    if (dist > this.radius) {
      dx = (dx / dist) * this.radius;
      dy = (dy / dist) * this.radius;
    }
    this.knob.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;

    let nx = dx / this.radius;
    let ny = dy / this.radius;
    const mag = Math.hypot(nx, ny);
    if (mag < this.deadZone) {
      nx = 0;
      ny = 0;
    } else {
      // 데드존을 부드럽게 빼서 미세 조작감 유지
      const scaled = (mag - this.deadZone) / (1 - this.deadZone);
      nx = (nx / mag) * scaled;
      ny = (ny / mag) * scaled;
    }
    this.vector.x = nx;
    this.vector.y = ny;
  }

  #up(e) {
    if (this.pointerId !== null && e.pointerId !== undefined && e.pointerId !== this.pointerId) return;
    this.reset();
  }

  reset() {
    const id = this.pointerId;
    this.pointerId = null;
    this.active = false;
    this.vector.x = 0;
    this.vector.y = 0;
    this.zone.classList.remove('active');
    this.base.classList.remove('active');
    this.home.style.opacity = '0.85';
    this.knob.style.transform = 'translate(0px, 0px)';
    try {
      if (id !== null && this.zone.hasPointerCapture && this.zone.hasPointerCapture(id)) {
        this.zone.releasePointerCapture(id);
      }
    } catch {
      /* noop */
    }
  }
}
