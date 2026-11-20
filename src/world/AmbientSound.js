/**
 * AmbientSound.js — 섬의 잔잔한 앰비언트 패드 (Web Audio API)
 * 첫 사용자 제스처 이후에만 시작하고, 음소거/탭 숨김에서 안전하게 멈춘다.
 */

const CHORDS = {
  morning: [261.63, 329.63, 392.0, 523.25], // C 메이저
  day: [293.66, 369.99, 440.0, 587.33], // D 메이저
  sunset: [220.0, 261.63, 329.63, 392.0], // A 마이너
  night: [174.61, 220.0, 261.63, 349.23], // F 마이너
};

export class AmbientSound {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.oscillators = [];
    this.gains = [];
    this.started = false;
    this.muted = false;
    this.phase = 'morning';
    this.volume = 0.055;
  }

  start() {
    if (this.started) {
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
      return;
    }
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      this.ctx = new Ctx();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.0001;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1250;
      filter.Q.value = 0.4;

      this.master.connect(filter);
      filter.connect(this.ctx.destination);

      const freqs = CHORDS[this.phase] || CHORDS.morning;
      for (let i = 0; i < 4; i++) {
        const osc = this.ctx.createOscillator();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.value = freqs[i] / 2;
        osc.detune.value = (i - 1.5) * 4;
        const g = this.ctx.createGain();
        g.gain.value = 0.22;
        osc.connect(g);
        g.connect(this.master);
        osc.start();
        this.oscillators.push(osc);
        this.gains.push(g);
      }

      // 아주 느린 숨쉬기 (볼륨 LFO)
      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = 0.06;
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = 0.03;
      lfo.connect(lfoGain);
      lfoGain.connect(this.master.gain);
      lfo.start();
      this.lfo = lfo;

      this.started = true;
      this.#rampTo(this.muted ? 0.0001 : this.volume);
    } catch {
      this.started = false;
    }
  }

  #rampTo(value) {
    if (!this.ctx || !this.master) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(value, now, 0.6);
  }

  setMuted(muted) {
    this.muted = !!muted;
    this.#rampTo(this.muted ? 0.0001 : this.volume);
  }

  setPhase(phase) {
    if (!phase || phase === this.phase) {
      this.phase = phase || this.phase;
      return;
    }
    this.phase = phase;
    const freqs = CHORDS[phase] || CHORDS.morning;
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.oscillators.forEach((osc, i) => {
      osc.frequency.setTargetAtTime((freqs[i] || freqs[freqs.length - 1]) / 2, now, 1.6);
    });
  }

  suspend() {
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {});
  }

  resume() {
    if (!this.started) {
      this.start();
      return;
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
  }
}
