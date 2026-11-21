/**
 * AmbientSound.js — 섬의 BGM (Web Audio API)
 *
 * 예전의 낮게 깔리던 코드 드론을 걷어 내고, 밝은 장조(C·G·F)의 오르골/마림바풍
 * 힐링 멜로디를 8분음표 스텝 시퀀서로 연주한다.
 *  · 음색: 사인 기음 + 2·3배음(아주 약하게) → 오르골처럼 톡톡 튀는 감쇠
 *  · 낮은 볼륨(마스터 0.55 · 음 하나 0.12) + 부드러운 컴프레서 + 잔잔한 딜레이 한 줄
 *  · 첫 제스처 이후에만 시작하고, 음소거/탭 숨김에서 안전하게 멈춘다
 */

/** 분당 84 — 걸음을 방해하지 않는 느긋한 8분음표 (한 스텝 ≈ 0.357초) */
const BPM = 84;
const STEP_SECONDS = 60 / BPM / 2;
const TICK_MS = 140;
const LOOKAHEAD = 1.1;

/** MIDI 음번호 → 주파수 */
function hz(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

/**
 * 16스텝 = 네 마디(한 마디 4스텝). null 은 쉼표.
 * bass 는 마디마다 한 음(4스텝 간격)으로 깔린다.
 */
const PATTERNS = {
  // 아침 — C 메이저, 반짝이는 오르골 아르페지오
  morning: {
    melody: [76, 79, 84, 79, 72, 76, 81, 76, 77, 81, 84, 81, 79, 83, 86, 79],
    bass: [48, 45, 41, 43],
  },
  // 낮 — G 메이저, 조금 더 밝고 통통 튀게
  day: {
    melody: [79, 83, 86, 83, 81, 84, 88, 84, 77, 81, 86, 81, 79, 83, 86, 83],
    bass: [43, 40, 41, 43],
  },
  // 노을 — F 메이저, 포근하게 내려앉는 결말
  sunset: {
    melody: [77, 81, 84, 81, 74, 77, 81, 77, 79, 83, 86, 83, 72, 76, 79, 76],
    bass: [41, 38, 43, 48],
  },
  // 밤 — 성긴 음 사이로 여백을 두어 잠자리처럼 조용하게(여전히 장조)
  night: {
    melody: [72, null, 76, null, 69, null, 72, null, 65, null, 69, null, 67, null, 74, null],
    bass: [48, 45, 41, 43],
  },
};

export class AmbientSound {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.noteBus = null;
    this.started = false;
    this.muted = false;
    this.phase = 'morning';
    this.volume = 0.55;
    this.step = 0;
    this.nextTime = 0;
    this.timer = null;
    this.noiseBuf = null;
  }

  start() {
    if (this.started) {
      if (this.ctx && this.ctx.state !== 'running') this.ctx.resume().catch(() => {});
      return;
    }
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      this.ctx = new Ctx();
      const ctx = this.ctx;

      // ── 출력단: 마스터 → 살짝 눌러 주는 컴프레서 → 스피커
      this.master = ctx.createGain();
      this.master.gain.value = 0.0001;

      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.knee.value = 22;
      comp.ratio.value = 2.4;
      comp.attack.value = 0.006;
      comp.release.value = 0.24;

      this.master.connect(comp);
      comp.connect(ctx.destination);

      // ── 음 하나가 지나가는 버스: 저역을 살짝 덜어 내고, 잔향 대신 짧은 딜레이 한 줄
      this.noteBus = ctx.createGain();
      this.noteBus.gain.value = 1;

      const tone = ctx.createBiquadFilter();
      tone.type = 'lowpass';
      tone.frequency.value = 5200;
      tone.Q.value = 0.4;
      this.noteBus.connect(tone);
      tone.connect(this.master);

      const delay = ctx.createDelay(0.6);
      delay.delayTime.value = 0.3;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.24;
      const wet = ctx.createGain();
      wet.gain.value = 0.16;
      tone.connect(delay);
      delay.connect(feedback);
      feedback.connect(delay);
      delay.connect(wet);
      wet.connect(this.master);

      this.started = true;
      this.step = 0;
      this.nextTime = ctx.currentTime + 0.12;
      this.#rampTo(this.muted ? 0.0001 : this.volume);
      this.#startClock();
      if (ctx.state !== 'running') ctx.resume().catch(() => {});
    } catch {
      this.started = false;
    }
  }

  /* ── 시퀀서 ───────────────────────────────────────────── */

  #startClock() {
    if (this.timer) return;
    this.timer = setInterval(() => this.#tick(), TICK_MS);
  }

  #stopClock() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  #tick() {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    // 탭을 다녀오며 시간이 크게 벌어지면 밀린 음을 몰아 치지 않는다
    if (this.nextTime < ctx.currentTime - STEP_SECONDS * 2) this.nextTime = ctx.currentTime + 0.05;

    while (this.nextTime < ctx.currentTime + LOOKAHEAD) {
      this.#scheduleStep(this.step, this.nextTime);
      this.step += 1;
      this.nextTime += STEP_SECONDS;
    }
  }

  #scheduleStep(step, when) {
    const pat = PATTERNS[this.phase] || PATTERNS.morning;
    if (this.muted) return; // 음소거 중에는 음을 만들지 않는다(낭비 방지)
    const i = ((step % pat.melody.length) + pat.melody.length) % pat.melody.length;
    const note = pat.melody[i];
    if (note !== null && note !== undefined) {
      // 마디 첫 음을 조금 더 또렷하게, 나머지는 살짝 여리게
      const accent = i % 4 === 0 ? 1 : 0.78;
      this.#pluck(hz(note), when, 1.7, 0.12 * accent);
    }
    if (i % 4 === 0 && pat.bass) {
      const bass = pat.bass[(i / 4) % pat.bass.length];
      if (bass !== null && bass !== undefined) this.#pluck(hz(bass), when, 2.4, 0.07, true);
    }
  }

  /** 오르골/마림바 한 음 — 사인 기음 + 약한 배음, 짧은 어택과 지수 감쇠 */
  #pluck(freq, when, dur, level, soft = false) {
    const ctx = this.ctx;
    if (!ctx) return;
    const out = ctx.createGain();
    out.gain.setValueAtTime(0.0001, when);
    out.gain.exponentialRampToValueAtTime(level, when + 0.008);
    out.gain.exponentialRampToValueAtTime(level * 0.3, when + 0.26);
    out.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    out.connect(this.noteBus);

    const partials = soft
      ? [[1, 1, 'triangle'], [2, 0.18, 'sine']]
      : [[1, 1, 'sine'], [2, 0.3, 'sine'], [3, 0.1, 'triangle']];

    for (const [mul, amp, type] of partials) {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq * mul;
      const g = ctx.createGain();
      g.gain.value = amp;
      // 배음은 더 빨리 사라져서 '딩' 하는 금속감을 만든다
      if (mul > 1) {
        g.gain.setValueAtTime(amp, when);
        g.gain.exponentialRampToValueAtTime(0.0001, when + 0.5);
      }
      osc.connect(g);
      g.connect(out);
      osc.start(when);
      osc.stop(when + dur + 0.08);
    }
  }

  #rampTo(value) {
    if (!this.ctx || !this.master) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(value, now, 0.35);
  }

  /* ── 효과음 (채집 · 복구) ─────────────────────────────
     BGM 과 같은 noteBus 를 지나므로 음소거·저역 정리·딜레이가 그대로 적용된다.
     화면이 잠들었거나 오디오가 아직 열리지 않았으면 조용히 넘어간다. */

  get sfxReady() {
    return !!(this.started && this.ctx && this.ctx.state === 'running' && !this.muted);
  }

  #ensureNoise() {
    if (this.noiseBuf || !this.ctx) return this.noiseBuf;
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * 0.4);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    this.noiseBuf = buf;
    return buf;
  }

  /** 짧은 잡음 — 나무/바위를 두드리는 "톡" */
  #noise(when, dur, { type = 'bandpass', freq = 1200, q = 1, level = 0.2 } = {}) {
    const ctx = this.ctx;
    const buf = this.#ensureNoise();
    if (!buf) return;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = freq;
    filter.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(Math.max(0.001, level), when + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(this.noteBus);
    src.start(when);
    src.stop(when + dur + 0.03);
  }

  /** 짧은 음 한 개 — 필요하면 주파수를 미끄러뜨린다 */
  #tone(when, freq, dur, level, type = 'sine', glideTo = null) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, when);
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, when + dur * 0.9);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(Math.max(0.001, level), when + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    osc.connect(g);
    g.connect(this.noteBus);
    osc.start(when);
    osc.stop(when + dur + 0.04);
  }

  /** 나무(둔탁) · 바위(딱) · 꽃덤불(사각) */
  sfxHit(kind) {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.005;
    if (kind === 'rock') {
      this.#noise(t, 0.13, { type: 'highpass', freq: 2400, q: 0.7, level: 0.22 });
      this.#tone(t, 220, 0.1, 0.15, 'triangle', 140);
    } else if (kind === 'flower') {
      this.#noise(t, 0.16, { type: 'bandpass', freq: 3200, q: 1.1, level: 0.11 });
    } else {
      this.#noise(t, 0.13, { type: 'lowpass', freq: 900, q: 0.8, level: 0.2 });
      this.#tone(t, 150, 0.13, 0.13, 'sine', 108);
    }
  }

  /** 재료 획득 — 반짝 두 음 */
  sfxPickup() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 880, 0.09, 0.09, 'sine');
    this.#tone(t + 0.07, 1320, 0.12, 0.075, 'sine');
  }

  /** 희귀 획득(별조각) — 셋잇단 상행 */
  sfxRare() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    [1046, 1318, 1568, 2093].forEach((f, i) => this.#tone(t + i * 0.075, f, 0.34, 0.09, 'sine'));
  }

  /** 열매 먹기 — 톡 삼키는 소리 */
  sfxEat() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 430, 0.16, 0.14, 'sine', 250);
    this.#noise(t + 0.03, 0.1, { type: 'lowpass', freq: 1400, level: 0.08 });
  }

  /** 기력 부족·가득 참 등 안 되는 소리 */
  sfxDeny() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 190, 0.16, 0.12, 'triangle', 130);
    this.#tone(t + 0.1, 160, 0.16, 0.09, 'triangle', 110);
  }

  /** 건물 복구 완료 팡파르 — 장조 아르페지오 + 반짝임 */
  sfxFanfare() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.02;
    [72, 76, 79, 84, 88].forEach((midi, i) => this.#pluck(hz(midi), t + i * 0.11, 1.8, 0.16));
    this.#noise(t + 0.02, 0.5, { type: 'highpass', freq: 4200, level: 0.05 });
  }

  /** 재료 투입 — 망치 두 번 */
  sfxBuild() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#noise(t, 0.12, { type: 'lowpass', freq: 700, level: 0.18 });
    this.#tone(t, 170, 0.12, 0.12, 'sine', 120);
    this.#tone(t + 0.12, 1280, 0.1, 0.05, 'triangle');
  }

  /** UI 톡 — 창고 이동 등 */
  sfxUi() {
    if (!this.sfxReady) return;
    this.#tone(this.ctx.currentTime + 0.005, 988, 0.07, 0.06, 'sine');
  }

  /* ── 2단계: 낚시 · 요리 · 코인 · 고양이 ───────────────── */

  /** 찌를 던지는 휘익 */
  sfxCast() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#noise(t, 0.24, { type: 'bandpass', freq: 900, q: 0.7, level: 0.07 });
    this.#tone(t, 620, 0.22, 0.035, 'triangle', 250);
  }

  /** 찌가 물에 닿는 톡 (level 0.4~1) */
  sfxSplash(level = 1) {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.008;
    const lv = Math.max(0.15, Math.min(1, Number(level) || 1));
    this.#noise(t, 0.26, { type: 'highpass', freq: 1500, q: 0.8, level: 0.17 * lv });
    this.#tone(t, 320, 0.16, 0.09 * lv, 'sine', 170);
  }

  /** 입질 — 짧게 두 번 울리는 신호음 */
  sfxBite() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 1046, 0.09, 0.11, 'sine');
    this.#tone(t + 0.085, 1397, 0.12, 0.1, 'sine');
  }

  /** 낚아채는 소리 — 상행 세 음 */
  sfxReel() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    [784, 988, 1319].forEach((f, i) => this.#tone(t + i * 0.06, f, 0.16, 0.08, 'sine'));
  }

  /** 야옹 — 낮게 시작해 살짝 올라가는 부드러운 글라이드 */
  sfxMeow() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 560, 0.34, 0.075, 'triangle', 760);
    this.#tone(t + 0.18, 720, 0.26, 0.05, 'sine', 520);
  }

  /** 코인 — 반짝 두 음 */
  sfxCoin() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.008;
    this.#tone(t, 1319, 0.08, 0.08, 'sine');
    this.#tone(t + 0.06, 1760, 0.12, 0.07, 'sine');
  }

  /** 요리 — 지글 + 딩 */
  sfxCook() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#noise(t, 0.42, { type: 'lowpass', freq: 1600, q: 0.6, level: 0.09 });
    this.#pluck(hz(84), t + 0.28, 1.2, 0.1);
    this.#pluck(hz(88), t + 0.4, 1.1, 0.08);
  }

  /* ── 외부 제어 ────────────────────────────────────────── */

  setMuted(muted) {
    this.muted = !!muted;
    if (this.started) this.#rampTo(this.muted ? 0.0001 : this.volume);
  }

  setPhase(phase) {
    const next = PATTERNS[phase] ? phase : 'morning';
    if (next === this.phase) return;
    this.phase = next;
    // 다음 스텝부터 새 멜로디로 이어진다 (마디 첫머리에서 갈아타도록 정렬)
    this.step = Math.ceil(this.step / 16) * 16;
  }

  suspend() {
    this.#stopClock();
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {});
  }

  resume() {
    if (!this.started) {
      this.start();
      return;
    }
    if (!this.ctx) return;
    const kick = () => {
      if (this.ctx.state !== 'running') return;
      this.nextTime = Math.max(this.nextTime, this.ctx.currentTime + 0.05);
      this.#startClock();
    };
    if (this.ctx.state === 'running') kick();
    else this.ctx.resume().then(kick).catch(() => {});
  }
}
