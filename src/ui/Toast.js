/** Toast.js — 화면 하단 안내 토스트 */
import { h } from './dom.js';

export class Toast {
  constructor(root) {
    this.container = h('div', { class: 'toasts' });
    root.append(this.container);
  }

  show(message, ms = 2600) {
    while (this.container.children.length >= 3) this.container.firstChild.remove();
    const el = h('div', { class: 'toast' }, message);
    this.container.append(el);
    const timer = window.setTimeout(() => {
      el.classList.add('out');
      window.setTimeout(() => el.remove(), 380);
    }, ms);
    el.addEventListener('animationend', () => {
      if (el.classList.contains('out')) window.clearTimeout(timer);
    });
    return el;
  }

  clear() {
    while (this.container.firstChild) this.container.removeChild(this.container.firstChild);
  }
}
