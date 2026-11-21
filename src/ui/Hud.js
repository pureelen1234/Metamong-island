/**
 * Hud.js — 인게임 HUD
 * 위젯: 상태 필 / 기력 게이지 · 우체통 / 상단 우측 컨트롤 / 조이스틱 / 액션 / 퀵메뉴바
 *
 * 1단계 추가
 *  · 기력 게이지 — 채집할 때마다 줄고, 열매를 먹으면 차오른다
 *  · 우체통 버튼 — 안 읽은 편지 + 미수령 선물 수를 빨간 배지로 (우체통 메타몽과는 별개)
 *  · 가방 버튼 배지 — 8칸 중 몇 칸을 쓰고 있는지
 *
 * 2단계 추가
 *  · 섬 코인(🪙) · 오늘의 의뢰 버튼(📋, 받을 보상 배지) · 황금 버프 칩
 *  · 낚시 스트립 — 찌 상태 문구와 입질 게이지, 입질 순간 중앙 `!` 팝업
 *
 * 3단계 추가
 *  · 실시간 사각 미니맵(우측 상단, 탭하면 확대 지도 모달)
 *  · 텃밭 퀵버튼(다 자란 밭 배지) · 업적 보상 배지(랭크 버튼)
 */
import { h } from './dom.js';
import { Joystick } from './Joystick.js';
import { Toast } from './Toast.js';

const QUICK_ITEMS = [
  { id: 'bag', icon: '🎒', label: '가방' },
  { id: 'codex', icon: '📔', label: '도감' },
  { id: 'build', icon: '🏗️', label: '건축' },
  { id: 'farm', icon: '🌱', label: '텃밭' },
  { id: 'rank', icon: '🌿', label: '랭크' },
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

    // ── 2단계: 섬 코인 · 오늘의 의뢰
    this.coinVal = h('span', { class: 'n' }, '0');
    this.coinChip = h(
      'div',
      { class: 'coin-chip', title: '섬 코인 — 자판기에 물건을 팔면 모여요' },
      h('span', { class: 'ico' }, '🪙'),
      this.coinVal
    );

    this.questBadge = h('span', { class: 'badge hidden' }, '0');
    this.questBtn = h(
      'button',
      { class: 'icon-btn quest-btn', type: 'button', 'aria-label': '오늘의 의뢰 열기', onclick: () => this.handlers.onQuest?.() },
      h('span', { class: 'ico' }, '📋'),
      this.questBadge
    );

    this.buffChip = h('span', { class: 'buff-chip hidden' }, '✨');

    // ── 4단계: 리어카 칩 · 첫 1분 웰컴 3단 미션 배너
    this.cartChip = h('span', { class: 'cart-chip hidden' }, '🛒 16칸');

    this.left = h(
      'div',
      { class: 'hud-left' },
      this.pill,
      h('div', { class: 'hud-stats' }, this.stamina, this.coinChip, this.mailBtn, this.questBtn, this.cartChip, this.buffChip)
    );

    // 웰컴 미션 — 상단 HUD 바로 아래의 작은 칩. 탭하면 3단 미션 목록을 연다
    this.welcomeIcon = h('span', { class: 'w-ico' }, '🎯');
    this.welcomeText = h('span', { class: 'w-txt' }, '');
    this.welcomeDots = h('span', { class: 'w-dots' });
    this.welcome = h(
      'button',
      {
        class: 'welcome-chip hidden',
        type: 'button',
        'aria-label': '첫걸음 미션 열기',
        onclick: () => this.handlers.onWelcome?.(),
      },
      this.welcomeIcon,
      this.welcomeText,
      this.welcomeDots
    );
    this.left.append(this.welcome);
    this.lastWelcome = '';

    /* ── 5단계: 방어 예고 배너 + 웨이브 스트립 + 무기 버튼 ───── */
    this.dfText = h('span', { class: 'df-txt' }, '');
    this.dfMain = h(
      'button',
      { class: 'df-main', type: 'button', 'aria-label': '방어 현황 열기', onclick: () => this.handlers.onDefense?.() },
      h('span', { class: 'df-ico' }, '🛡️'),
      this.dfText
    );
    this.dfGo = h(
      'button',
      { class: 'df-go', type: 'button', 'aria-label': '지금 방어 시작', onclick: () => this.handlers.onDefenseStart?.() },
      '▶'
    );
    this.dfBanner = h('div', { class: 'defense-banner hidden' }, this.dfMain, this.dfGo);
    this.left.append(this.dfBanner);
    this.lastBanner = '';

    // 웨이브 중 남은 불청객 · 남은 시간
    this.dfWaveText = h('span', { class: 'txt' }, '');
    this.dfWaveBar = h('i');
    this.dfStrip = h(
      'div',
      { class: 'defense-strip hidden' },
      h('span', { class: 'ico' }, '🛡️'),
      this.dfWaveText,
      h('div', { class: 'bar' }, this.dfWaveBar)
    );

    // 방어전 중에만 나오는 두 개의 무기 버튼 — 오른쪽 액션 버튼 위
    this.wpAmmo = h('span', { class: 'wp-ammo' }, '5');
    this.wpSling = h(
      'button',
      { class: 'wp', type: 'button', 'aria-label': '새총 발사', onclick: () => this.handlers.onWeapon?.('sling') },
      h('span', { class: 'wp-ico' }, '🪃'),
      h('span', { class: 'wp-nm' }, '새총')
    );
    this.wpBalloon = h(
      'button',
      { class: 'wp balloon', type: 'button', 'aria-label': '꽃잎 물풍선 발사', onclick: () => this.handlers.onWeapon?.('balloon') },
      h('span', { class: 'wp-ico' }, '🎈'),
      h('span', { class: 'wp-nm' }, '물풍선'),
      this.wpAmmo
    );
    this.weaponBar = h('div', { class: 'weapon-bar hidden' }, this.wpSling, this.wpBalloon);
    this.lastWave = '';

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
      let badge = null;
      if (item.id === 'bag') badge = h('span', { class: 'quick-badge' }, '0/8');
      else if (item.id === 'rank') badge = h('span', { class: 'quick-badge ach hidden' }, '0');
      else if (item.id === 'farm') badge = h('span', { class: 'quick-badge ripe hidden' }, '0');
      const btn = h(
        'button',
        { class: 'quick', type: 'button', onclick: () => this.handlers.onQuick?.(item.id) },
        h('span', { class: 'ico' }, item.icon),
        h('span', {}, item.label),
        badge
      );
      if (item.id === 'bag') this.quickBadges.bag = badge;
      if (item.id === 'rank') this.quickBadges.ach = badge;
      if (item.id === 'farm') this.quickBadges.ripe = badge;
      if (badge) btn.classList.add(`quick-${item.id}`);
      this.quickbar.append(btn);
    }

    // ── 조이스틱
    this.joystick = new Joystick(this.container);

    // ── 2단계: 낚시 스트립 · 입질 팝업
    this.fishLabel = h('span', { class: 'txt' }, '');
    this.fishBar = h('i');
    this.fishStrip = h(
      'div',
      { class: 'fish-strip hidden' },
      h('span', { class: 'ico' }, '🎣'),
      this.fishLabel,
      h('div', { class: 'bar' }, this.fishBar)
    );
    this.bitePop = h('div', { class: 'bite-pop' }, '!');

    // ── 토스트 · GL 오버레이
    this.toastView = new Toast(this.container);
    this.glOverlay = h(
      'div',
      { class: 'gl-overlay' },
      h('div', { class: 'box' }, h('h3', {}, '그래픽을 다시 준비하고 있어요'), h('p', {}, '잠깐만 기다려 주세요. 섬은 그대로 있으니 걱정 마세요.'))
    );
    this.container.append(this.top, this.actionBtn, this.quickbar, this.fishStrip, this.bitePop, this.dfStrip, this.weaponBar, this.glOverlay);

    this.lastPill = '';
    this.lastStamina = -1;
    this.lastMail = -1;
    this.lastCoins = -1;
    this.lastQuests = -1;
    this.lastAch = -1;
    this.lastRipe = -1;
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

  /** 섬 코인 */
  setCoins(n) {
    const v = Math.max(0, Math.floor(Number(n) || 0));
    if (v === this.lastCoins) return;
    this.lastCoins = v;
    this.coinVal.textContent = String(v);
    this.coinChip.classList.toggle('rich', v >= 200);
  }

  /** 오늘의 의뢰 — 받을 보상이 있으면 배지 */
  setQuests(count) {
    const n = Math.max(0, Math.floor(Number(count) || 0));
    if (n === this.lastQuests) return;
    this.lastQuests = n;
    this.questBadge.textContent = n > 9 ? '9+' : String(n);
    this.questBadge.classList.toggle('hidden', n <= 0);
    this.questBtn.classList.toggle('has-mail', n > 0);
  }

  /** 업적 — 받을 보상이 있으면 랭크 버튼에 배지 */
  setAchievements(count) {
    const n = Math.max(0, Math.floor(Number(count) || 0));
    if (n === this.lastAch) return;
    this.lastAch = n;
    const badge = this.quickBadges.ach;
    if (!badge) return;
    badge.textContent = n > 9 ? '9+' : String(n);
    badge.classList.toggle('hidden', n <= 0);
  }

  /** 텃밭 — 다 자란 밭 수 배지 */
  setRipePlots(count) {
    const n = Math.max(0, Math.floor(Number(count) || 0));
    if (n === this.lastRipe) return;
    this.lastRipe = n;
    const badge = this.quickBadges.ripe;
    if (!badge) return;
    badge.textContent = n > 9 ? '9+' : String(n);
    badge.classList.toggle('hidden', n <= 0);
  }

  /** 🛒 리어카 — 보유하면 칩으로 알려 준다 */
  setCart(level, slots) {
    const has = Math.floor(Number(level) || 0) > 0;
    if (!this.cartChip) return;
    this.cartChip.classList.toggle('hidden', !has);
    if (has) {
      const n = Math.max(0, Math.floor(Number(slots) || 0));
      this.cartChip.textContent = `🛒 ${n}칸`;
      this.cartChip.title = `리어카 — 가방이 ${n}칸으로 늘었어요`;
    }
  }

  /**
   * 첫 1분 웰컴 3단 미션 배너
   * @param {number} step 지금 진행 단계(0부터)
   * @param {Array<{icon:string,label:string,hint?:string}>} steps
   */
  setWelcome(step, steps) {
    const list = Array.isArray(steps) ? steps : [];
    if (!this.welcome) return;
    if (!list.length || step >= list.length) {
      if (this.lastWelcome !== 'done') {
        this.lastWelcome = 'done';
        this.welcome.classList.add('hidden');
      }
      return;
    }
    const cur = list[step];
    const key = `${step}/${list.length}`;
    this.welcome.classList.remove('hidden');
    if (key === this.lastWelcome) return;
    this.lastWelcome = key;
    this.welcomeIcon.textContent = cur.icon || '🎯';
    this.welcomeText.textContent = `${step + 1}/${list.length} ${cur.label}`;
    this.welcome.title = cur.hint || '';
    this.welcomeDots.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
      this.welcomeDots.append(h('i', { class: i < step ? 'on' : i === step ? 'cur' : '' }));
    }
  }

  /**
   * 5단계 방어 HUD — 예고 배너 · 웨이브 스트립 · 무기 버튼을 한 번에 맞춘다
   * @param {{banner?:null|{text:string,go?:boolean}, wave?:null|{left:number,total:number,timer:number,stolen:number}, weapons?:null|{ammo:number,sling:boolean,balloon:boolean}}} info
   */
  setDefense(info = {}) {
    const { banner = null, wave = null, weapons = null } = info;

    const bkey = banner ? `${banner.text}|${banner.go ? 1 : 0}` : '';
    if (bkey !== this.lastBanner) {
      this.lastBanner = bkey;
      this.dfBanner.classList.toggle('hidden', !banner);
      if (banner) {
        this.dfText.textContent = banner.text;
        this.dfGo.classList.toggle('hidden', !banner.go);
      }
    }

    const wkey = wave ? `${wave.spawned}/${wave.left}/${wave.total}/${Math.ceil(wave.timer)}/${wave.stolen}` : '';
    if (wkey !== this.lastWave) {
      this.lastWave = wkey;
      this.dfStrip.classList.toggle('hidden', !wave);
      if (wave) {
        const done = Math.max(0, wave.total - wave.left);
        this.dfWaveText.textContent =
          wave.spawned === 0
            ? `🌊 수집단 상륙 중… · ${Math.ceil(wave.timer)}초`
            : `남은 불청객 ${wave.left} · ${Math.ceil(wave.timer)}초`;
        this.dfWaveBar.style.width = `${Math.min(100, (done / Math.max(1, wave.total)) * 100)}%`;
        this.dfStrip.classList.toggle('danger', wave.stolen > 0);
      }
    }

    this.weaponBar.classList.toggle('hidden', !weapons);
    if (weapons) {
      if (this.wpAmmo.textContent !== String(weapons.ammo)) this.wpAmmo.textContent = String(weapons.ammo);
      this.wpSling.classList.toggle('cool', !weapons.sling);
      this.wpBalloon.classList.toggle('cool', !weapons.balloon);
      this.wpBalloon.classList.toggle('empty', weapons.ammo <= 0);
    }
  }

  /** 황금 정식 버프 남은 시간 칩 */
  setBuff(text) {    if (!text) {
      this.buffChip.classList.add('hidden');
      return;
    }
    this.buffChip.textContent = text;
    this.buffChip.classList.remove('hidden');
  }

  /**
   * 낚시 스트립
   * @param {null|{state:string,label:string,urgent?:boolean,ratio?:number}} info
   */
  setFishing(info) {
    if (!info) {
      this.fishStrip.classList.add('hidden');
      this.fishStrip.classList.remove('urgent');
      return;
    }
    this.fishStrip.classList.remove('hidden');
    this.fishStrip.classList.toggle('urgent', !!info.urgent);
    if (this.fishLabel.textContent !== info.label) this.fishLabel.textContent = info.label;
    const ratio = info.ratio === undefined ? 1 : Math.max(0, Math.min(1, info.ratio));
    this.fishBar.style.width = `${ratio * 100}%`;
  }

  /** 입질 순간 중앙 `!` 팝업 */
  bite() {
    this.bitePop.classList.remove('on');
    // 같은 프레임에 다시 켜도 애니메이션이 재시작되도록 리플로우를 강제한다
    void this.bitePop.offsetWidth;
    this.bitePop.classList.add('on');
    if (this.bitePop.__timer) clearTimeout(this.bitePop.__timer);
    this.bitePop.__timer = setTimeout(() => this.bitePop.classList.remove('on'), 1600);
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
