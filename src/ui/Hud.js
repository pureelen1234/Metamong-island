/**
 * Hud.js — 인게임 HUD
 * 위젯: 상태 필 / 기력 게이지 · 우체통 / 상단 우측 컨트롤 / 조이스틱 / 액션 / 퀵메뉴바
 *
 * 1단계 추가
 *  · 기력 게이지 — 채집할 때마다 줄고, 열매를 먹으면 차오른다
 *  · 우체통 버튼 — 안 읽은 편지 + 미수령 선물 수를 빨간 배지로 (우체통 메타몽과는 별개)
 *  · 가방 버튼 배지 — 8칸 중 몇 칸을 쓰고 있는지
 */
import { h } from './dom.js';
import { Joystick } from './Joystick.js';
import { Toast } from './Toast.js';

const QUICK_ITEMS = [
  { id: 'bag', icon: '🎒', label: '가방' },
  { id: 'codex', icon: '📔', label: '도감' },
  { id: 'build', icon: '🏗️', label: '건축' },
  { id: 'rank', icon: '🌱', label: '랭크' },
];

export class Hud {
  constructor(root, handlers = {}) {
    this.handlers = handlers;

    this.container = h('div', { class: 'hud-root hidden' });
    root.append(this.container);

    // ── 상태 필
    this.phIcon = h('span', {}, '🌅');
    this.phLabel = h('span', {}, '아침');
    this.wxLabel = h('span', {}, '맑음');
    this.dayLabel = h('span', { class: 'day' }, 'Day 1');
    this.clockLabel = h('span', { class: 'clock' }, '00:00');
    this.speedTag = h('span', { class: 'speed hidden' }, '10×');

    this.pill = h(
      'div',
      { class: 'pill' },
      this.phIcon,
      this.phLabel,
      h('span', { class: 'sep' }, '·'),
      this.wxLabel,
      h('span', { class: 'sep' }, '·'),
      this.dayLabel,
      h('span', { class: 'sep' }, '·'),
      this.clockLabel,
      this.speedTag
    );

    // ── 기력 + 우체통
    this.staminaFill = h('i');
    this.staminaVal = h('span', { class: 'val' }, '100');
    this.stamina = h(
      'div',
      { class: 'stamina', title: '기력 — 채집할 때 줄고, 열매를 먹으면 차요' },
      h('span', { class: 'ico' }, '💪'),
      h('div', { class: 'bar' }, this.staminaFill),
      this.staminaVal
    );

    this.mailBadge = h('span', { class: 'badge hidden' }, '0');
    this.mailBtn = h(
      'button',
      { class: 'icon-btn mail-btn', type: 'button', 'aria-label': '우체통 열기', onclick: () => this.handlers.onMail?.() },
      h('span', { class: 'ico' }, '📬'),
      this.mailBadge
    );

    this.left = h('div', { class: 'hud-left' }, this.pill, h('div', { class: 'hud-stats' }, this.stamina, this.mailBtn));

    // ── 상단 우측 컨트롤
    this.muteBtn = h('button', { class: 'icon-btn', type: 'button', 'aria-label': '음소거 토글', onclick: () => this.handlers.onMute?.() }, '🔊');
    this.pauseBtn = h('button', { class: 'icon-btn', type: 'button', 'aria-label': '일시정지 및 설정', onclick: () => this.handlers.onPause?.() }, '⏸');
    this.top = h('div', { class: 'hud-top' }, this.left, h('div', { class: 'hud-controls' }, this.muteBtn, this.pauseBtn));

    // ── 액션 버튼
    this.actionIcon = h('span', { class: 'ico' }, '✋');
    this.actionText = h('span', { class: 'txt' }, '둘러보기');
    this.actionBtn = h(
      'button',
      { class: 'action-btn', type: 'button', disabled: 'disabled', 'aria-label': '상황 액션', onclick: () => this.handlers.onAction?.() },
      this.actionIcon,
      this.actionText
    );

    // ── 퀵 메뉴바
    this.quickbar = h('div', { class: 'quickbar' });
    this.quickBadges = {};
    for (const item of QUICK_ITEMS) {
      const badge = item.id === 'bag' ? h('span', { class: 'quick-badge' }, '0/8') : null;
      const btn = h(
        'button',
        { class: 'quick', type: 'button', onclick: () => this.handlers.onQuick?.(item.id) },
        h('span', { class: 'ico' }, item.icon),
        h('span', {}, item.label),
        badge
      );
      if (badge) this.quickBadges.bag = badge;
      this.quickbar.append(btn);
    }

    // ── 조이스틱
    this.joystick = new Joystick(this.container);

    // ── 토스트 · GL 오버레이
    this.toastView = new Toast(this.container);
    this.glOverlay = h(
      'div',
      { class: 'gl-overlay' },
      h('div', { class: 'box' }, h('h3', {}, '그래픽을 다시 준비하고 있어요'), h('p', {}, '잠깐만 기다려 주세요. 섬은 그대로 있으니 걱정 마세요.'))
    );
    this.container.append(this.top, this.actionBtn, this.quickbar, this.glOverlay);

    this.lastPill = '';
    this.lastStamina = -1;
    this.lastMail = -1;
  }

  show() {
    this.container.classList.remove('hidden');
  }

  hide() {
    this.container.classList.add('hidden');
  }

  setTime({ icon, label, weatherIcon, weatherLabel, day, clock, speed }) {
    const key = `${icon}${label}${weatherIcon}${weatherLabel}${day}${clock}${speed}`;
    if (key === this.lastPill) return;
    this.lastPill = key;
    this.phIcon.textContent = icon;
    this.phLabel.textContent = label;
    this.wxLabel.textContent = `${weatherIcon} ${weatherLabel}`;
    this.dayLabel.textContent = `Day ${day}`;
    this.clockLabel.textContent = clock;
    if (speed && speed !== 1) {
      this.speedTag.textContent = `${speed}×`;
      this.speedTag.classList.remove('hidden');
    } else {
      this.speedTag.classList.add('hidden');
    }
  }

  setStamina(current, max = 100) {
    const v = Math.max(0, Math.min(max, Math.round(current)));
    if (v === this.lastStamina) return;
    this.lastStamina = v;
    this.staminaFill.style.width = `${(v / max) * 100}%`;
    this.staminaVal.textContent = String(v);
    this.stamina.classList.toggle('low', v < 25);
    this.stamina.classList.toggle('mid', v >= 25 && v < 55);
  }

  setMail(count) {
    const n = Math.max(0, Math.floor(Number(count) || 0));
    if (n === this.lastMail) return;
    this.lastMail = n;
    this.mailBadge.textContent = n > 9 ? '9+' : String(n);
    this.mailBadge.classList.toggle('hidden', n <= 0);
    this.mailBtn.classList.toggle('has-mail', n > 0);
  }

  setBag(used, total) {
    const badge = this.quickBadges.bag;
    if (!badge) return;
    badge.textContent = `${used}/${total}`;
    badge.classList.toggle('full', used >= total);
  }

  setAction({ active, icon = '✋', label = '둘러보기' }) {
    if (active === this.actionBtn.__active && label === this.actionBtn.__label) return;
    this.actionBtn.__active = active;
    this.actionBtn.__label = label;
    this.actionIcon.textContent = icon;
    this.actionText.textContent = label;
    if (active) {
      this.actionBtn.removeAttribute('disabled');
      this.actionBtn.classList.add('enabled');
    } else {
      this.actionBtn.setAttribute('disabled', 'disabled');
      this.actionBtn.classList.remove('enabled');
    }
  }

  setMuted(muted) {
    this.muteBtn.textContent = muted ? '🔇' : '🔊';
    this.muteBtn.setAttribute('aria-pressed', muted ? 'true' : 'false');
  }

  toast(message, ms = 2600) {
    return this.toastView.show(message, ms);
  }

  setContextLost(lost) {
    this.glOverlay.classList.toggle('on', !!lost);
  }
}
