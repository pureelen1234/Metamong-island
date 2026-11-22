/**
 * ExpeditionHud.js — 원정지에 있는 동안 보이는 머리 띠
 * 원정지 이름 · 남은 시간 · 지금까지 챙긴 자원 · [귀환] 버튼.
 */
import { h } from './dom.js';
import { EXPEDITION_RESOURCES } from '../systems/expeditionData.js';

export class ExpeditionHud {
  constructor(root, handlers = {}) {
    this.site = h('span', { class: 'ex-site' }, '');
    this.timer = h('span', { class: 'ex-timer' }, '0:00');
    this.chips = h('div', { class: 'chips ex-chips' });
    this.returnBtn = h('button', { class: 'ex-return', type: 'button', onclick: () => handlers.onReturn?.() }, '🧺 귀환');

    this.el = h(
      'div',
      { class: 'expedition-hud hidden' },
      h('div', { class: 'ex-head' }, h('span', { class: 'ex-ico' }, '🧭'), this.site, this.timer, this.returnBtn),
      this.chips,
      h('div', { class: 'ex-hint' }, '자원을 탭하면 걸어가서 캐요 · 남은 시간이 0이 되면 자동 귀환')
    );
    root.append(this.el);
  }

  show() {
    this.el.classList.remove('hidden');
  }

  hide() {
    this.el.classList.add('hidden');
  }

  /** @param {{siteName:string, icon:string, timer:number, collected:object}} s */
  update(s = {}) {
    const t = Math.max(0, Number(s.timer) || 0);
    const m = Math.floor(t / 60);
    const sec = Math.floor(t % 60);
    const label = `${m}:${String(sec).padStart(2, '0')}`;
    if (this.timer.textContent !== label) this.timer.textContent = label;
    this.timer.classList.toggle('low', t <= 15);
    this.site.textContent = `${s.icon || '🧭'} ${s.siteName || ''}`;
    const entries = Object.entries(s.collected || {});
    const key = entries.map(([id, n]) => `${id}:${n}`).join(',');
    if (this.chips.dataset.key !== key) {
      this.chips.dataset.key = key;
      this.chips.innerHTML = '';
      if (!entries.length) {
        this.chips.append(h('span', { class: 'lchip' }, '아직 담은 자원이 없어요'));
      } else {
        for (const [id, n] of entries) {
          const r = EXPEDITION_RESOURCES[id] || { icon: '❔', name: id };
          this.chips.append(h('span', { class: 'lchip ok' }, `${r.icon} ${r.name} ${n}`));
        }
      }
    }
  }
}
