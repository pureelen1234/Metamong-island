/**
 * AmbientSound.js — 섬의 BGM (Web Audio API)
 *
 * 예전의 낮게 깔리던 코드 드론을 걷어 내고, 밝은 장조(C·G·F)의 오르골/마림바풍
 * 힐링 멜로디를 8분음표 스텝 시퀀서로 연주한다.
 *  · 음색: 사인 기음 + 2·3배음(아주 약하게) → 오르골처럼 톡톡 튀는 감쇠
 *  · 낮은 볼륨(마스터 0.5) + 짧은 저역 차단 + 잔잔한 딜레이 한 줄
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
    this.volume = 0.5;
    this.step = 0;
    this.nextTime = 0;
    this.timer = null;
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
      this.#pluck(hz(note), when, 1.7, 0.085 * accent);
    }
    if (i % 4 === 0 && pat.bass) {
      const bass = pat.bass[(i / 4) % pat.bass.length];
      if (bass !== null && bass !== undefined) this.#pluck(hz(bass), when, 2.4, 0.05, true);
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
