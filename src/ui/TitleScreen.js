/** TitleScreen.js — 실시간 섬 3D 프리뷰 위의 타이틀 (이어하기 / 새로 시작) */
import { h } from './dom.js';

export class TitleScreen {
  constructor(root, { hasSave = false, onContinue, onNew } = {}) {
    this.onContinue = onContinue;
    this.onNew = onNew;
    this.hasSave = hasSave;
    this.busy = false;

    this.progressBar = h('i');
    this.progressWrap = h('div', { class: 'title-progress' }, this.progressBar);

    this.continueBtn = hasSave
      ? h('button', { class: 'btn primary', type: 'button', disabled: 'disabled' }, '이어하기')
      : null;
    this.newBtn = h(
      'button',
      { class: `btn ${hasSave ? 'ghost' : 'primary'}`, type: 'button', disabled: 'disabled' },
      hasSave ? '새로 시작' : '새로 시작'
    );

    if (this.continueBtn) {
      this.continueBtn.addEventListener('click', () => this.#choose('continue'));
    }
    this.newBtn.addEventListener('click', () => this.#choose('new'));

    this.hint = h(
      'div',
      { class: 'title-hint' },
      hasSave ? '저장된 섬이 있어요 — 이어서 걸어볼까요?' : '저장된 섬이 없어요 — 새 섬을 열어 볼까요?'
    );

    this.el = h(
      'div',
      { class: 'title-screen' },
      h('div', { class: 'title-badge' }, 'PHASE 4 · HD-2D 도트'),
      h(
        'div',
        { class: 'title-panel' },
        h('p', { class: 'title-eyebrow' }, '보경이를 위한 작은 섬'),
        h('h1', { class: 'title-heading' }, '어설픈 메타몽 섬'),
        h(
          'p',
          { class: 'title-sub' },
          '눈만은 못 숨기는 메타몽들과 고양이들이 모여든 비밀 낙원. 오늘도 고생 많았어요 — 여기선 아무것도 안 급해도 돼요.'
        ),
        this.progressWrap,
        h('div', { class: 'title-actions' }, this.continueBtn, this.newBtn),
        this.hint
      ),
      h('div', { class: 'title-version' }, 'GDD v1.7 · Phase 4 · 72×72 섬')
    );

    root.append(this.el);
  }

  /** 로딩 진행률 0~1 → 버튼 활성화 */
  setProgress(p) {
    const v = Math.max(0.06, Math.min(1, p));
    this.progressBar.style.width = `${Math.round(v * 100)}%`;
    if (v >= 1) this.setReady(true);
  }

  setReady(ready) {
    if (this.busy) return;
    if (this.continueBtn) {
      if (ready) this.continueBtn.removeAttribute('disabled');
      else this.continueBtn.setAttribute('disabled', 'disabled');
    }
    if (ready) this.newBtn.removeAttribute('disabled');
    else this.newBtn.setAttribute('disabled', 'disabled');
    this.progressWrap.style.opacity = ready ? '0' : '1';
  }

  #choose(kind) {
    if (this.busy) return;
    this.busy = true;
    this.hint.textContent = kind === 'continue' ? '저장된 섬으로 돌아가는 중…' : '새로운 섬을 여는 중…';
    const fn = kind === 'continue' ? this.onContinue : this.onNew;
    if (fn) fn(kind);
  }

  hide() {
    this.el.classList.add('hidden');
  }

  show() {
    this.el.classList.remove('hidden');
    this.busy = false;
    this.setReady(false);
  }

  destroy() {
    this.el.remove();
  }
}
