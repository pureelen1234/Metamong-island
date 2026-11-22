/**
 * TutorialUI.js — 7단계 튜토리얼 카드
 *
 * 화면 위쪽(HUD 아래)에 한 단계씩 안내를 띄운다. 단계의 실제 행동을 마치면
 * Game 이 자동으로 다음 단계로 넘긴다. [도움말] 로 게임 정보 화면을 열고,
 * [다음] 은 지금 단계를 건너뛰어 다음으로, [건너뛰기] 는 튜토리얼 전체를 닫는다.
 */
import { h } from './dom.js';

export class TutorialUI {
  constructor(root, handlers = {}) {
    this.handlers = handlers;
    this.step = -1;
    this.total = 0;

    this.ico = h('span', { class: 'tu-ico' }, '📖');
    this.counter = h('span', { class: 'tu-step' }, '1/10');
    this.title = h('div', { class: 'tu-title' }, '');
    this.body = h('div', { class: 'tu-body' }, '');
    this.hint = h('div', { class: 'tu-hint' }, '');
    this.dots = h('div', { class: 'tu-dots' });

    this.helpBtn = h('button', { class: 'tu-btn ghost', type: 'button', onclick: () => this.handlers.onHelp?.() }, '📖 도움말');
    this.nextBtn = h('button', { class: 'tu-btn', type: 'button', onclick: () => this.handlers.onNext?.() }, '다음');
    this.skipBtn = h('button', { class: 'tu-btn ghost', type: 'button', onclick: () => this.handlers.onSkip?.() }, '건너뛰기');

    this.el = h(
      'div',
      { class: 'tutorial-card hidden', 'data-tutorial': 'card' },
      h(
        'div',
        { class: 'tu-head' },
        this.ico,
        h('div', { class: 'tu-headmain' }, this.counter, this.title),
        this.dots
      ),
      this.body,
      this.hint,
      h('div', { class: 'tu-actions' }, this.helpBtn, this.skipBtn, this.nextBtn)
    );
    root.append(this.el);
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
    this.counter.textContent = `${step + 1} / ${total} 단계`;
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
