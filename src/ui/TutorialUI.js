/**
 * TutorialUI.js — 7단계 튜토리얼 카드 (접기/펼치기 지원)
 *
 * 평소에는 한 줄짜리 아담한 목표 필로 표시되어 화면을 가리지 않고,
 * 탭하면 자세한 안내와 [도움말]·[건너뛰기]·[다음] 버튼이 펼쳐진다.
 */
import { h } from './dom.js';

export class TutorialUI {
  constructor(root, handlers = {}) {
    this.handlers = handlers;
    this.step = -1;
    this.total = 0;
    this.collapsed = true;

    this.ico = h('span', { class: 'tu-ico' }, '📖');
    this.counter = h('span', { class: 'tu-step' }, '1/10');
    this.title = h('div', { class: 'tu-title' }, '');
    this.chevron = h('span', { class: 'tu-chevron', 'aria-hidden': 'true' }, '▾');
    this.body = h('div', { class: 'tu-body' }, '');
    this.hint = h('div', { class: 'tu-hint' }, '');
    this.dots = h('div', { class: 'tu-dots' });

    this.helpBtn = h('button', { class: 'tu-btn ghost', type: 'button', onclick: () => this.handlers.onHelp?.() }, '📖 도움말');
    this.nextBtn = h('button', { class: 'tu-btn', type: 'button', onclick: () => this.handlers.onNext?.() }, '다음');
    this.skipBtn = h('button', { class: 'tu-btn ghost', type: 'button', onclick: () => this.handlers.onSkip?.() }, '건너뛰기');

    this.headBtn = h(
      'button',
      {
        class: 'tu-head',
        type: 'button',
        'aria-expanded': 'false',
        'aria-label': '가이드 펼치기 또는 접기',
        onclick: () => this.toggle(),
      },
      this.ico,
      h('div', { class: 'tu-headmain' }, this.counter, this.title),
      this.chevron
    );

    this.details = h(
      'div',
      { class: 'tu-details' },
      this.dots,
      this.body,
      this.hint,
      h('div', { class: 'tu-actions' }, this.helpBtn, this.skipBtn, this.nextBtn)
    );

    this.el = h(
      'div',
      { class: 'tutorial-card collapsed hidden', 'data-tutorial': 'card' },
      this.headBtn,
      this.details
    );
    root.append(this.el);
  }

  toggle(force) {
    this.collapsed = typeof force === 'boolean' ? force : !this.collapsed;
    this.el.classList.toggle('collapsed', this.collapsed);
    this.headBtn.setAttribute('aria-expanded', this.collapsed ? 'false' : 'true');
    this.chevron.textContent = this.collapsed ? '▾' : '▴';
  }

  /**
   * @param {number} step 0부터
   * @param {number} total
   * @param {{icon:string,title:string,body:()=>string,hint?:string}} def
   */
  show(step, total, def) {
    if (!def) {
      this.hide();
      return;
    }
    this.step = step;
    this.total = total;
    this.ico.textContent = def.icon || '📖';
    this.counter.textContent = `${step + 1}/${total}`;
    this.title.textContent = def.title || '';
    this.body.textContent = typeof def.body === 'function' ? def.body() : String(def.body || '');
    this.hint.textContent = def.hint ? `👉 ${def.hint}` : '';
    this.dots.innerHTML = '';
    for (let i = 0; i < total; i++) this.dots.append(h('i', { class: i < step ? 'on' : i === step ? 'cur' : '' }));
    this.nextBtn.textContent = step + 1 >= total ? '마무리' : '다음';
    this.el.classList.remove('hidden');
    this.el.dataset.step = String(step);
  }

  hide() {
    this.el.classList.add('hidden');
    this.el.dataset.step = '-1';
    this.step = -1;
  }

  get visible() {
    return !this.el.classList.contains('hidden');
  }
}
