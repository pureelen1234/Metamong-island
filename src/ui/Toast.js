/** Toast.js — 화면 하단 안내 토스트 (연속 동일 메시지 묶음 처리) */
import { h } from './dom.js';

export class Toast {
  constructor(root) {
    this.container = h('div', { class: 'toasts', role: 'status', 'aria-live': 'polite' });
    root.append(this.container);
    this.lastToast = null;
  }

  show(message, ms = 2600) {
    const text = String(message ?? '');
    if (
      this.lastToast &&
      this.lastToast.message === text &&
      this.lastToast.el.isConnected &&
      !this.lastToast.el.classList.contains('out')
    ) {
      this.lastToast.count += 1;
      this.lastToast.el.textContent = `${text} ×${this.lastToast.count}`;
      window.clearTimeout(this.lastToast.timer);
      const entry = this.lastToast;
      entry.timer = window.setTimeout(() => this.#dismiss(entry), ms);
      return entry.el;
    }

    while (this.container.children.length >= 3) {
      const oldest = this.container.firstChild;
      if (this.lastToast && this.lastToast.el === oldest) {
        window.clearTimeout(this.lastToast.timer);
        this.lastToast = null;
      }
      oldest.remove();
    }

    const el = h('div', { class: 'toast' }, text);
    this.container.append(el);
    const entry = { message: text, count: 1, el, timer: 0 };
    entry.timer = window.setTimeout(() => this.#dismiss(entry), ms);
    this.lastToast = entry;
    return el;
  }

  #dismiss(entry) {
    if (!entry || !entry.el.isConnected) return;
    entry.el.classList.add('out');
    if (this.lastToast === entry) this.lastToast = null;
    window.setTimeout(() => entry.el.remove(), 380);
  }

  clear() {
    if (this.lastToast) {
      window.clearTimeout(this.lastToast.timer);
      this.lastToast = null;
    }
    while (this.container.firstChild) this.container.removeChild(this.container.firstChild);
  }
}
