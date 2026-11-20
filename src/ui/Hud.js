/** Hud.js — 인게임 HUD (위젯 5개: 상태 필 / 상단 우측 컨트롤 / 조이스틱 / 액션 / 퀵메뉴바) */
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

    // ── 상단 우측 컨트롤
    this.muteBtn = h('button', { class: 'icon-btn', type: 'button', 'aria-label': '음소거 토글', onclick: () => this.handlers.onMute?.() }, '🔊');
    this.pauseBtn = h('button', { class: 'icon-btn', type: 'button', 'aria-label': '일시정지 및 설정', onclick: () => this.handlers.onPause?.() }, '⏸');
    this.top = h('div', { class: 'hud-top' }, this.pill, h('div', { class: 'hud-controls' }, this.muteBtn, this.pauseBtn));

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
    for (const item of QUICK_ITEMS) {
      const btn = h('button', { class: 'quick', type: 'button', onclick: () => this.handlers.onQuick?.(item.id) }, h('span', { class: 'ico' }, item.icon), h('span', {}, item.label));
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
