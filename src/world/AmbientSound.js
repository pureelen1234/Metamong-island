/**
 * AmbientSound.js — 섬의 BGM (Web Audio API)
 *
 * 5단계 이후 '평화로운 힐링 사운드'로 다시 짰다.
 *  · 느린 템포(BPM 66, 16분음표 격자) — 걷는 속도보다 음악이 뒤처져도 괜찮은 60~72 대역
 *  · 펠트 피아노·오르골 음색: 부드러운 어텍(35ms) + 긴 지수 감쇠, 배음은 아주 약하게,
 *    살짝 디튠한 두 사인파가 천천히 겹치는 따뜻한 울림. 날카로운 고음·타악·드론은 없다.
 *  · 음 사이 여백: 한 마디에 2~5개만, 8마디(약 29초)를 돌며 코드(I·vi·IV·V)만 바뀐다
 *  · 로우패스 2.4kHz 한 줄 + 아주 옅은 딜레이(룸감) — 소리가 '째지' 않게
 *  · 마스터 0.46 → 컴프레서 → 스피커 (예전 0.55 보다 은은하게)
 *
 * 음소거는 '게인만 줄이는' 방식이 아니라 다음 4가지를 함께 한다.
 *  ① 마스터 게인을 60ms 안에 0 으로 (예약된 자동화 취소)
 *  ② 지금 울리는 음(오실레이터·잡음)을 전부 stop
 *  ③ 스케줄러 타이머 정지 — 대기 중인 음도 남기지 않는다
 *  ④ AudioContext.suspend() — 어떤 경로로도 소리가 나가지 않고, 폰의 오디오 세션도 놓아준다
 * 그리고 음소거 중에는 canvas 탭·가시성 복귀가 resume() 을 불러도 절대 깨어나지 않는다.
 */

const DEFAULT_BPM = 66;
/** 격자의 세기(0~1)에 곱해 실제 음량으로 바꾸는 기준값 — 은은한 마스터 볼륨의 기준 */
const NOTE_LEVEL = 0.12;
const TICK_MS = 120;
const LOOKAHEAD = 1.2;
/** 한 마디 = 16스텝(16분음표) */
const BAR_STEPS = 16;

/** MIDI 음번호 → 주파수 */
function hz(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

/**
 * 마디 안의 리듬 셀 — [스텝(0~15), 코드톤 번호, 옥타브 올림, 세기]
 * 세 개를 마디마다 돌려 쓰면 길이 8마디짜리 선율이 단조롭지 않게 흐른다.
 */
const CELLS = [
  [[0, 0, 0, 1.0], [3, 2, 0, 0.6], [7, 1, 0, 0.46], [11, 2, 1, 0.3]],
  [[0, 0, 0, 0.92], [4, 1, 0, 0.52], [9, 2, 1, 0.4]],
  [[0, 0, 0, 0.86], [2, 2, 0, 0.44], [6, 1, 0, 0.4], [12, 3, 0, 0.3]],
];

/** 화음 — root(낮은 도) + 반음 간격 */
const chord = (root, iv) => ({ root, iv });

/**
 * 단계별 진행. bars 는 8(또는 4)마디의 화음, cells 는 마디마다 쓸 리듬 셀 번호.
 * level 은 그 국면의 전체 세기(야간·방어전은 더 조용하다).
 */
const PATTERNS = {
  // 아침 — C 장조 I·vi·IV·V, 가장 따뜻하고 성긴 선율
  morning: {
    bpm: 66,
    oct: 2,
    level: 1,
    cells: [0, 1, 2, 1, 0, 2, 1, 2],
    sparkle: [4, 7],
    bars: [
      chord(48, [0, 4, 7, 11]),
      chord(45, [0, 3, 7, 10]),
      chord(41, [0, 4, 7, 11]),
      chord(43, [0, 4, 7, 11]),
      chord(48, [0, 4, 7, 11]),
      chord(45, [0, 3, 7, 10]),
      chord(38, [0, 3, 7, 10]),
      chord(43, [0, 4, 7, 10]),
    ],
  },
  // 낮 — G 장조, 조금 더 밝지만 여전히 느긋하다
  day: {
    bpm: 68,
    oct: 2,
    level: 0.96,
    cells: [1, 0, 2, 1, 1, 2, 0, 1],
    sparkle: [2, 6],
    bars: [
      chord(43, [0, 4, 7, 11]),
      chord(40, [0, 3, 7, 10]),
      chord(36, [0, 4, 7, 11]),
      chord(38, [0, 4, 7, 11]),
      chord(45, [0, 3, 7, 10]),
      chord(38, [0, 4, 7, 10]),
      chord(43, [0, 4, 7, 11]),
      chord(36, [0, 4, 7, 11]),
    ],
  },
  // 노을 — F 장조, 내려앉는 결말. 음을 더 줄이고 길게 남긴다
  sunset: {
    bpm: 62,
    oct: 1,
    level: 0.92,
    cells: [2, 0, 2, 2],
    sparkle: [2],
    bars: [
      chord(41, [0, 4, 7, 11]),
      chord(38, [0, 3, 7, 10]),
      chord(34, [0, 4, 7, 11]),
      chord(36, [0, 4, 7, 11]),
    ],
  },
  // 밤 — 오르골. 한 마디에 한두 음, 높은 옥타브에 아주 여리게
  night: {
    bpm: 60,
    oct: 2,
    level: 0.8,
    cells: [2, 2, 1, 2],
    sparkle: [1, 3],
    sparse: true,
    bars: [
      chord(48, [0, 7, 11]),
      chord(45, [0, 3, 7]),
      chord(41, [0, 7, 11]),
      chord(43, [0, 4, 7]),
    ],
  },
  // 방어전 — 가볍게 오르는 긴장. A 단조지만 아주 조용하고 부드럽게만
  battle: {
    bpm: 84,
    oct: 2,
    level: 0.62,
    cells: [1, 2, 0, 1],
    sparkle: [3, 7],
    pulse: true,
    bars: [
      chord(45, [0, 3, 7]),
      chord(41, [0, 4, 7]),
      chord(48, [0, 4, 7]),
      chord(43, [0, 4, 7, 10]),
      chord(45, [0, 3, 7]),
      chord(41, [0, 4, 7]),
      chord(40, [0, 3, 7]),
      chord(43, [0, 4, 7, 10]),
    ],
  },
};

/** 코드톤 번호 → 실제 MIDI (번호가 화음 길이를 넘으면 한 옥타브 위로) */
function toneToMidi(ch, tone, oct) {
  const iv = ch.iv;
  const k = ((tone % iv.length) + iv.length) % iv.length;
  const lift = Math.floor(tone / iv.length) * 12;
  return ch.root + 12 * oct + iv[k] + lift;
}

/** 국면 하나를 '스텝 → 음 목록' 격자로 미리 펼쳐 둔다(틱마다 계산하지 않게) */
function buildGrid(pat) {
  const total = pat.bars.length * BAR_STEPS;
  const grid = Array.from({ length: total }, () => []);
  const push = (step, ev) => {
    const i = ((step % total) + total) % total;
    grid[i].push(ev);
  };

  pat.bars.forEach((ch, bar) => {
    const base = bar * BAR_STEPS;
    const cell = CELLS[pat.cells[bar % pat.cells.length]];

    cell.forEach(([pos, tone, octAdd, vel]) => {
      if (pat.sparse && pos !== 0 && vel < 0.35) return; // 밤에는 더 성기게
      push(base + pos, {
        midi: toneToMidi(ch, tone, pat.oct + octAdd),
        vel: vel * pat.level,
        dur: pat.sparse ? 3.6 : 3.1,
        soft: false,
      });
    });

    // 낮게 깔리는 화음 뿌리 — 마디에 한 번, 길게, 아주 여리게
    push(base, {
      midi: ch.root + 12 * (pat.oct - 1),
      vel: 0.4 * pat.level,
      dur: pat.sparse ? 5.2 : 4.6,
      soft: true,
    });

    // 반짝임 — 가끔 한 옥타브 위의 화음톤 하나
    if (pat.sparkle.includes(bar)) {
      push(base + 10, { midi: toneToMidi(ch, 2, pat.oct + 1), vel: 0.24 * pat.level, dur: 2.6, soft: false });
    }

    // 방어전 — 가벼운 심장 박동(마디마다 네 번, 아주 낮게)
    if (pat.pulse) {
      [4, 8, 12].forEach((pos) =>
        push(base + pos, { midi: ch.root + 12 * (pat.oct - 1), vel: 0.2 * pat.level, dur: 1.1, soft: true })
      );
    }
  });

  return grid;
}

const GRIDS = Object.fromEntries(Object.entries(PATTERNS).map(([id, pat]) => [id, buildGrid(pat)]));

export class AmbientSound {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.bgmBus = null;
    this.sfxBus = null;
    this.noteBus = null;
    this.wetGain = null;
    this.started = false;
    this.muted = false;
    this.phase = 'morning';
    this.volume = 0.46;
    this.step = 0;
    this.nextTime = 0;
    this.timer = null;
    this.noiseBuf = null;
    this.voices = new Set();
    this.suspendTimer = null;
  }

  start() {
    if (this.started) {
      if (!this.muted && this.ctx && this.ctx.state !== 'running') this.ctx.resume().catch(() => {});
      return;
    }
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      this.ctx = new Ctx();
      const ctx = this.ctx;

      // ── 출력단: 마스터 → 살짝 눌러 주는 컴프레서 → 스피커
      this.master = ctx.createGain();
      this.master.gain.value = 0;

      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -20;
      comp.knee.value = 26;
      comp.ratio.value = 2.2;
      comp.attack.value = 0.012;
      comp.release.value = 0.3;

      this.master.connect(comp);
      comp.connect(ctx.destination);

      // ── BGM 버스: 부드러운 로우패스 + 옅은 룸 딜레이
      this.bgmBus = ctx.createGain();
      this.bgmBus.gain.value = 1;
      this.noteBus = this.bgmBus;

      const tone = ctx.createBiquadFilter();
      tone.type = 'lowpass';
      tone.frequency.value = 2400; // 고음의 '째는' 느낌을 걷어 낸다
      tone.Q.value = 0.32;
      this.bgmBus.connect(tone);
      tone.connect(this.master);

      const delay = ctx.createDelay(0.8);
      delay.delayTime.value = 0.42;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.22;
      const wet = ctx.createGain();
      wet.gain.value = 0.13;
      this.wetGain = wet;
      tone.connect(delay);
      delay.connect(feedback);
      feedback.connect(delay);
      delay.connect(wet);
      wet.connect(this.master);

      // ── SFX 버스: 로우패스·딜레이 없이 마스터로 직결(선명하고 깔끔한 타격·UI음)
      this.sfxBus = ctx.createGain();
      this.sfxBus.gain.value = 1;
      this.sfxBus.connect(this.master);

      this.started = true;
      this.step = 0;
      this.nextTime = ctx.currentTime + 0.2;

      // 어딘가에서 컨텍스트가 되살아나도 음소거 중이면 즉시 다시 잠근다
      ctx.addEventListener('statechange', () => {
        if (!this.muted || !this.ctx) return;
        if (this.ctx.state === 'running') {
          this.master.gain.cancelScheduledValues(0);
          this.master.gain.value = 0;
          this.#stopClock();
          this.#stopVoices(this.ctx.currentTime);
          this.ctx.suspend().catch(() => {});
        }
      });

      if (this.muted) {
        // 음소거 상태로 시작 — 소리를 만들지 않고 컨텍스트도 잠가 둔다
        this.master.gain.value = 0;
        this.#stopClock();
        ctx.suspend().catch(() => {});
        return;
      }

      this.#rampTo(this.volume, 1.6);
      this.#startClock();
      if (ctx.state !== 'running') ctx.resume().catch(() => {});
    } catch {
      this.started = false;
    }
  }

  /* ── 시퀀서 ───────────────────────────────────────────── */

  #stepSeconds() {
    const pat = PATTERNS[this.phase] || PATTERNS.morning;
    return 60 / (pat.bpm || DEFAULT_BPM) / 4;
  }

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
    if (!ctx || this.muted || ctx.state !== 'running') return;
    const stepSec = this.#stepSeconds();
    // 탭을 다녀오며 시간이 크게 벌어지면 밀린 음을 몰아 치지 않는다
    if (this.nextTime < ctx.currentTime - stepSec * 3) this.nextTime = ctx.currentTime + 0.06;

    while (this.nextTime < ctx.currentTime + LOOKAHEAD) {
      this.#scheduleStep(this.step, this.nextTime);
      this.step += 1;
      this.nextTime += stepSec;
    }
  }

  #scheduleStep(step, when) {
    if (this.muted) return; // 음소거 중에는 음을 만들지 않는다
    const grid = GRIDS[this.phase] || GRIDS.morning;
    if (!grid || !grid.length) return;
    const events = grid[((step % grid.length) + grid.length) % grid.length];
    if (!events) return;
    for (const ev of events) {
      this.#pluck(hz(ev.midi), when, ev.dur, ev.vel * NOTE_LEVEL, !!ev.soft);
    }
  }

  /**
   * 펠트 피아노·오르골 한 음.
   * 부드러운 어텍(35ms) → 살짝 남기는 중간 감쇠 → 긴 지수 감쇠.
   * 살짝 디튠한 두 번째 사인파가 천천히 겹치며 따뜻한 맥놀이를 만든다.
   */
  #pluck(freq, when, dur, level, soft = false) {
    const ctx = this.ctx;
    if (!ctx) return;

    const out = ctx.createGain();
    const peak = Math.max(0.0002, level);
    out.gain.setValueAtTime(0.0001, when);
    out.gain.linearRampToValueAtTime(peak, when + 0.035);
    out.gain.exponentialRampToValueAtTime(Math.max(0.00012, peak * 0.62), when + 0.34);
    out.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    out.connect(this.bgmBus);

    // 기음 + 아주 약한 배음 + 살짝 어긋난 쌍둥이(따뜻한 맥놀이)
    const partials = soft
      ? [[1, 1, 'triangle', 0], [1, 0.3, 'sine', -4], [2, 0.1, 'sine', 0]]
      : [[1, 1, 'sine', 0], [1, 0.24, 'sine', 6], [2, 0.12, 'sine', 0], [3, 0.03, 'triangle', 0]];

    for (const [mul, amp, type, detune] of partials) {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq * mul;
      if (detune) osc.detune.value = detune;
      const g = ctx.createGain();
      g.gain.value = amp;
      if (mul > 1) {
        // 배음은 더 빨리 사라져 오르골의 '딩' 결을 만든다 — 아주 약하게
        g.gain.setValueAtTime(amp, when);
        g.gain.exponentialRampToValueAtTime(0.0001, when + Math.min(0.7, dur * 0.45));
      }
      osc.connect(g);
      g.connect(out);
      osc.start(when);
      osc.stop(when + dur + 0.08);
      this.#trackVoice(osc);
    }

    // 펠트의 부드러운 숨결 — 딱딱한 어택 대신 아주 옅은 저역 잡음
    if (level > 0.045 && ctx.sampleRate) {
      const buf = this.#ensureNoise();
      if (buf) {
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 780;
        const ng = ctx.createGain();
        ng.gain.setValueAtTime(0.0001, when);
        ng.gain.linearRampToValueAtTime(Math.min(0.02, level * 0.09), when + 0.02);
        ng.gain.exponentialRampToValueAtTime(0.0001, when + 0.14);
        src.connect(lp);
        lp.connect(ng);
        ng.connect(out);
        src.start(when);
        src.stop(when + 0.2);
        this.#trackVoice(src);
      }
    }
  }

  #trackVoice(node) {
    this.voices.add(node);
    node.onended = () => this.voices.delete(node);
  }

  /** 지금 울리는 음을 전부 끊는다(음소거·일시정지) */
  #stopVoices(when = null) {
    const t = when == null ? (this.ctx ? this.ctx.currentTime : 0) : when;
    for (const node of this.voices) {
      try {
        node.stop(t);
      } catch {
        /* 이미 끝난 음 */
      }
    }
    this.voices.clear();
  }

  #rampTo(value, seconds = 0.8) {
    if (!this.ctx || !this.master) return;
    const now = this.ctx.currentTime;
    const g = this.master.gain;
    g.cancelScheduledValues(now);
    g.setValueAtTime(g.value, now);
    g.linearRampToValueAtTime(value, now + seconds);
  }

  /* ── 효과음 (채집 · 복구 · 생활) ──────────────────────
     BGM 과 같은 noteBus 를 지나므로 음소거·로우패스·딜레이가 그대로 적용된다.
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
    g.connect(this.sfxBus || this.bgmBus);
    src.start(when);
    src.stop(when + dur + 0.03);
    this.#trackVoice(src);
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
    g.connect(this.sfxBus || this.bgmBus);
    osc.start(when);
    osc.stop(when + dur + 0.04);
    this.#trackVoice(osc);
  }

  /** 나무(둔탁) · 바위(딱) · 꽃덤불(사각) */
  sfxHit(kind) {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.005;
    if (kind === 'rock') {
      this.#noise(t, 0.12, { type: 'lowpass', freq: 1900, q: 0.7, level: 0.16 });
      this.#tone(t, 210, 0.1, 0.12, 'triangle', 140);
    } else if (kind === 'flower') {
      this.#noise(t, 0.15, { type: 'bandpass', freq: 2400, q: 1.1, level: 0.08 });
    } else {
      this.#noise(t, 0.13, { type: 'lowpass', freq: 860, q: 0.8, level: 0.17 });
      this.#tone(t, 150, 0.13, 0.11, 'sine', 108);
    }
  }

  /** 재료 획득 — 반짝 두 음 */
  sfxPickup() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 880, 0.1, 0.07, 'sine');
    this.#tone(t + 0.08, 1320, 0.13, 0.055, 'sine');
  }

  /** 희귀 획득(별조각) — 셋잇단 상행 */
  sfxRare() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    [1046, 1318, 1568, 2093].forEach((f, i) => this.#tone(t + i * 0.08, f, 0.32, 0.065, 'sine'));
  }

  /** 열매 먹기 — 톡 삼키는 소리 */
  sfxEat() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 430, 0.16, 0.12, 'sine', 250);
    this.#noise(t + 0.03, 0.1, { type: 'lowpass', freq: 1200, level: 0.07 });
  }

  /** 기력 부족·가득 참 등 안 되는 소리 */
  sfxDeny() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 190, 0.16, 0.1, 'triangle', 130);
    this.#tone(t + 0.1, 160, 0.16, 0.075, 'triangle', 110);
  }

  /** 건물 복구 완료 팡파르 — 장조 아르페지오(부드러운 오르골) */
  sfxFanfare() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.02;
    [72, 76, 79, 84, 88].forEach((midi, i) => this.#pluck(hz(midi), t + i * 0.12, 2.0, 0.13));
    this.#noise(t + 0.02, 0.45, { type: 'lowpass', freq: 2600, level: 0.035 });
  }

  /** 재료 투입 — 망치 두 번 */
  sfxBuild() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#noise(t, 0.12, { type: 'lowpass', freq: 700, level: 0.16 });
    this.#tone(t, 170, 0.12, 0.1, 'sine', 120);
    this.#tone(t + 0.12, 1180, 0.1, 0.04, 'triangle');
  }

  /** UI 톡 — 창고 이동 등 */
  sfxUi() {
    if (!this.sfxReady) return;
    this.#tone(this.ctx.currentTime + 0.005, 988, 0.07, 0.05, 'sine');
  }

  /* ── 2단계: 낚시 · 요리 · 코인 · 고양이 ───────────────── */

  /** 찌를 던지는 휘익 */
  sfxCast() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#noise(t, 0.24, { type: 'bandpass', freq: 900, q: 0.7, level: 0.06 });
    this.#tone(t, 620, 0.22, 0.03, 'triangle', 250);
  }

  /** 찌가 물에 닿는 톡 (level 0.4~1) */
  sfxSplash(level = 1) {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.008;
    const lv = Math.max(0.15, Math.min(1, Number(level) || 1));
    this.#noise(t, 0.26, { type: 'highpass', freq: 1400, q: 0.8, level: 0.13 * lv });
    this.#tone(t, 320, 0.16, 0.08 * lv, 'sine', 170);
  }

  /** 입질 — 짧게 두 번 울리는 신호음 */
  sfxBite() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 1046, 0.09, 0.09, 'sine');
    this.#tone(t + 0.085, 1397, 0.12, 0.08, 'sine');
  }

  /** 낚아채는 소리 — 상행 세 음 */
  sfxReel() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    [784, 988, 1319].forEach((f, i) => this.#tone(t + i * 0.06, f, 0.16, 0.07, 'sine'));
  }

  /** 야옹 — 낮게 시작해 살짝 올라가는 부드러운 글라이드 */
  sfxMeow() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#tone(t, 560, 0.34, 0.07, 'triangle', 760);
    this.#tone(t + 0.18, 720, 0.26, 0.045, 'sine', 520);
  }

  /** 코인 — 반짝 두 음 */
  sfxCoin() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.008;
    this.#tone(t, 1319, 0.08, 0.065, 'sine');
    this.#tone(t + 0.06, 1760, 0.12, 0.055, 'sine');
  }

  /** 요리 — 지글 + 딩 */
  sfxCook() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.01;
    this.#noise(t, 0.42, { type: 'lowpass', freq: 1500, q: 0.6, level: 0.08 });
    this.#pluck(hz(84), t + 0.28, 1.4, 0.09);
    this.#pluck(hz(88), t + 0.42, 1.3, 0.07);
  }

  /* ── 3~7단계: 농사 · 방어전 · 하우징 효과음 (드라이 SFX 버스) ── */

  /** 물주기 — 찰랑이는 물줄기 + 방울 */
  sfxWater() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.005;
    this.#noise(t, 0.2, { type: 'bandpass', freq: 1850, q: 0.9, level: 0.11 });
    this.#tone(t + 0.02, 520, 0.1, 0.06, 'sine', 760);
    this.#tone(t + 0.09, 680, 0.09, 0.05, 'sine', 920);
  }

  /** 씨앗 심기 — 토독 흙 다지기 + 새싹 팝 */
  sfxPlant() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.005;
    this.#noise(t, 0.09, { type: 'lowpass', freq: 950, q: 0.8, level: 0.12 });
    this.#tone(t + 0.03, 390, 0.1, 0.075, 'triangle', 580);
  }

  /** 새총 · 물풍선 발사 */
  sfxShoot(kind = 'sling') {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.004;
    if (kind === 'balloon') {
      this.#noise(t, 0.14, { type: 'bandpass', freq: 1100, q: 0.8, level: 0.09 });
      this.#tone(t, 360, 0.14, 0.075, 'sine', 640);
    } else {
      this.#tone(t, 520, 0.09, 0.08, 'triangle', 260);
      this.#noise(t, 0.06, { type: 'highpass', freq: 1600, q: 0.7, level: 0.06 });
    }
  }

  /** 불청객 명중 — 경쾌한 타격 팝 */
  sfxHitRaider() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.004;
    this.#tone(t, 280, 0.09, 0.1, 'triangle', 150);
    this.#tone(t + 0.03, 660, 0.07, 0.055, 'sine', 880);
    this.#noise(t, 0.07, { type: 'bandpass', freq: 1400, q: 1.0, level: 0.08 });
  }

  /** 가구 · 방어 설비 배치 — 포근한 나무 톡 + 확인음 */
  sfxPlace() {
    if (!this.sfxReady) return;
    const t = this.ctx.currentTime + 0.005;
    this.#noise(t, 0.09, { type: 'lowpass', freq: 720, q: 0.9, level: 0.13 });
    this.#tone(t, 240, 0.08, 0.09, 'sine', 180);
    this.#tone(t + 0.06, 784, 0.1, 0.055, 'sine');
  }

  /* ── 외부 제어 ────────────────────────────────────────── */

  /**
   * 음소거. true → ①게인 0 ②울리는 음 stop ③타이머 stop ④컨텍스트 suspend.
   * false → 컨텍스트 resume + 게인이 서서히 원래 볼륨으로.
   */
  setMuted(muted) {
    this.muted = !!muted;
    if (!this.started || !this.ctx) return;
    if (this.muted) this.#silence();
    else this.#wake();
  }

  #silence() {
    const ctx = this.ctx;
    if (!ctx) return;
    clearTimeout(this.suspendTimer);
    const now = ctx.currentTime;
    const g = this.master.gain;
    g.cancelScheduledValues(0);
    g.setValueAtTime(g.value, now);
    g.linearRampToValueAtTime(0, now + 0.06); // 60ms — 딸깍 소리 없이 바로 끊는다
    if (this.wetGain) {
      const wg = this.wetGain.gain;
      wg.cancelScheduledValues(0);
      wg.setValueAtTime(wg.value, now);
      wg.linearRampToValueAtTime(0, now + 0.05);
    }
    this.#stopClock();
    this.#stopVoices(now + 0.07);
    // 남은 꼬리까지 0 이 된 뒤 컨텍스트 자체를 잠근다
    this.suspendTimer = setTimeout(() => {
      this.suspendTimer = null;
      if (this.muted && this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {});
    }, 110);
  }

  #wake() {
    const ctx = this.ctx;
    if (!ctx) return;
    clearTimeout(this.suspendTimer);
    this.suspendTimer = null;
    const go = () => {
      if (this.muted) return;
      const now = ctx.currentTime;
      const g = this.master.gain;
      g.cancelScheduledValues(0);
      g.setValueAtTime(0, now);
      g.linearRampToValueAtTime(this.volume, now + 0.9); // 팝 없이 스며들 듯
      if (this.wetGain) {
        const wg = this.wetGain.gain;
        wg.cancelScheduledValues(0);
        wg.setValueAtTime(0, now);
        wg.linearRampToValueAtTime(0.13, now + 0.6);
      }
      this.step = 0;
      this.nextTime = now + 0.18;
      this.#startClock();
    };
    if (ctx.state === 'running') go();
    else ctx.resume().then(go).catch(() => {});
  }

  setPhase(phase) {
    const next = PATTERNS[phase] ? phase : 'morning';
    if (next === this.phase) return;
    this.phase = next;
    // 다음 마디 첫머리에서 갈아타도록 정렬
    this.step = Math.ceil(this.step / BAR_STEPS) * BAR_STEPS;
  }

  /** 화면이 잠들 때 — 소리를 끊고 컨텍스트도 잠근다(음소거 상태는 그대로) */
  suspend() {
    this.#stopClock();
    this.#stopVoices();
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {});
  }

  /**
   * 화면 복귀·화면 탭. 음소거 중이면 절대 깨우지 않는다 —
   * '음소거했는데 소리가 돌아오는' 구멍을 막는 지점.
   */
  resume() {
    if (this.muted) return;
    if (!this.started) {
      this.start();
      return;
    }
    if (!this.ctx) return;
    const kick = () => {
      if (!this.ctx || this.ctx.state !== 'running' || this.muted) return;
      this.nextTime = Math.max(this.nextTime, this.ctx.currentTime + 0.08);
      this.#startClock();
    };
    if (this.ctx.state === 'running') kick();
    else this.ctx.resume().then(kick).catch(() => {});
  }
}
