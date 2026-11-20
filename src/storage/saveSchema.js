/**
 * saveSchema.js — 세이브 병합(migrate)
 *
 * 1단계 이전 세이브에는 day·elapsed·player·discovered·settings 만 있었다.
 * 그런 세이브를 그대로 불러오면 새 시스템이 undefined 를 만지다 죽으므로,
 * SaveStore 가 읽는 순간 코어 필드를 검사하고 생활 상태(stamina·bag·storage·
 * buildings·mailbox)는 Progress 로 정규화해 "기본값이 병합된" 한 덩어리로 돌려준다.
 *
 * 원칙: 절대 throw 하지 않는다. 알아볼 수 없으면 null(=새 섬)을 돌려준다.
 */
import { Progress } from '../systems/Progress.js';
import { DAY_SECONDS } from '../config.js';

export const SAVE_VERSION = 2;

const DEFAULT_SETTINGS = { muted: false, timeScale: 1, fps30: false };
const SPEEDS = [1, 10, 60];

const num = (v, fallback) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

const clamp = (v, lo, hi, fallback) => {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(lo, Math.min(hi, n));
};

export function migrateSave(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;

  const settingsSrc = raw.settings && typeof raw.settings === 'object' ? raw.settings : {};
  const settings = {
    muted: !!settingsSrc.muted,
    timeScale: SPEEDS.includes(Number(settingsSrc.timeScale)) ? Number(settingsSrc.timeScale) : DEFAULT_SETTINGS.timeScale,
    fps30: !!settingsSrc.fps30,
  };

  const playerSrc = raw.player && typeof raw.player === 'object' ? raw.player : {};
  const px = raw.playerPos && typeof raw.playerPos === 'object' ? raw.playerPos : {};
  const player = {
    x: num(playerSrc.x, num(px.x, 0.4)),
    z: num(playerSrc.z, num(px.z, 11.8)),
    yaw: num(playerSrc.yaw, Math.PI),
  };

  const discovered = Array.isArray(raw.discovered)
    ? raw.discovered.filter((id) => typeof id === 'string')
    : Array.isArray(raw.discoveredDittos)
      ? raw.discoveredDittos.filter((id) => typeof id === 'string')
      : [];

  // 생활 상태는 Progress 가 필드별로 검사하며 기본값을 채운다
  const life = new Progress(raw).toJSON();

  return {
    version: SAVE_VERSION,
    savedAt: num(raw.savedAt, Date.now()),
    day: Math.max(1, Math.min(3650, Math.floor(num(raw.day, 1)))),
    elapsed: clamp(num(raw.elapsed, num(raw.elapsedSeconds, 120)), 0, DAY_SECONDS - 0.01, 120),
    discovered,
    settings,
    player,
    ...life,
  };
}
