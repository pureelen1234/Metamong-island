/**
 * HomeHud.js — 실내에서만 보이는 조작 바 (가구·회전·놓기·치우기·나가기)
 *
 * Game 이 매번 state 를 넘겨 라벨·활성 상태를 맞춘다.
 * 실제 동작은 모두 Game 의 메서드가 맡는다.
 */
import { h } from './dom.js';

export class HomeHud {
  constructor(root, handlers = {}) {
    this.handlers = handlers;

    this.info = h('div', { class: 'hm-info' }, '가구를 골라 방을 꾸며 보세요');
    this.furnBtn = h('button', { class: 'hm-btn', type: 'button', onclick: () => handlers.onFurniture?.() }, '🛋️ 가구');
    this.rotateBtn = h('button', { class: 'hm-btn', type: 'button', onclick: () => handlers.onRotate?.() }, '🔄 회전');
    this.placeBtn = h('button', { class: 'hm-btn primary', type: 'button', onclick: () => handlers.onPlace?.() }, '놓기');
    this.pickBtn = h('button', { class: 'hm-btn', type: 'button', onclick: () => handlers.onPick?.() }, '✋ 옮기기');
    this.removeBtn = h('button', { class: 'hm-btn', type: 'button', onclick: () => handlers.onRemove?.() }, '🧹 치우기');
    this.exitBtn = h('button', { class: 'hm-btn ghost', type: 'button', onclick: () => handlers.onExit?.() }, '🚪 나가기');

    this.el = h(
      'div',
      { class: 'home-hud hidden' },
      h('div', { class: 'hm-title' }, '🏠 우리 집 · 거실'),
      this.info,
      h('div', { class: 'hm-actions' }, this.furnBtn, this.rotateBtn, this.placeBtn, this.pickBtn, this.removeBtn, this.exitBtn)
    );
    root.append(this.el);
  }

  show() {
    this.el.classList.remove('hidden');
  }

  hide() {
    this.el.classList.add('hidden');
  }

  /** @param {{ghost:object|null, selected:object|null, placedCount:number, selectedName?:string}} s */
  update(s = {}) {
    const { ghost = null, selected = null, placedCount = 0, selectedName = '' } = s;
    this.placeBtn.classList.toggle('hidden', !ghost);
    this.rotateBtn.disabled = !(ghost || selected);
    this.pickBtn.disabled = !selected;
    this.removeBtn.disabled = !selected;
    if (ghost) {
      this.info.textContent = `🫥 ${ghost.name} — 방을 탭해 자리를 잡고 [놓기]`;
    } else if (selected) {
      this.info.textContent = `✅ ${selectedName || '가구'} 선택 — [회전]·[옮기기]·[치우기]`;
    } else {
      this.info.textContent = `놓인 가구 ${placedCount}개 · 가구를 탭하면 고를 수 있어요`;
    }
    const key = `${ghost ? ghost.name : ''}|${selected ? selectedName : ''}|${placedCount}`;
    if (key !== this.el.dataset.key) this.el.dataset.key = key;
  }
}
