/**
 * saveSchema.js — 세이브 병합(migrate)
 *
 * v1: day·elapsed·player·discovered·settings 만 있던 첫 세이브
 * v2: 1단계 생활 상태(stamina·bag·storage·buildings·mailbox·nodes)
 * v3: 2단계 생활 상태(coins·skills·fish·supplies·tools·cats·cooked·quests·buff·fishing)
 * v4: 3단계 생활 상태(crops·farmPlots·counters·achievements) — 사각 섬 · 텃밭 농사 · 업적
 * v5: 4단계 생활 상태(bridge/bridgeBuilt · cartLevel/bagCapacity · paddyPlots · welcome)
 *     — 72×72 섬 · 중앙 강/다리 · 북쪽 숲/채석장/논 · 리어카
 * v6: 5단계 생활 상태(defense) — 불청객 방어전
 *     방어 슬롯 5곳에 세운 설비(종류·체력) · 제작 창고 · 전적(승/패 · 포탑 명중 · 완벽 대피)
 *
 * 어떤 버전이 들어와도 SaveStore 가 읽는 순간 코어 필드를 검사하고, 생활 상태는
 * Progress 로 정규화해 "기본값이 병합된" 한 덩어리로 돌려준다. v1~v5 세이브는
 * v6 필드가 조용히 기본값(빈 방어 슬롯 · 창고 0 · 전적 0)으로 채워지므로
 * 그대로 이어서 플레이할 수 있다.
 *
 * 원칙: 절대 throw 하지 않는다. 알아볼 수 없으면 null(=새 섬)을 돌려준다.
 */
import { Progress } from '../systems/Progress.js';
import { DAY_SECONDS, SPAWN } from '../config.js';

export const SAVE_VERSION = 6;

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
    x: num(playerSrc.x, num(px.x, SPAWN.x)),
    z: num(playerSrc.z, num(px.z, SPAWN.z)),
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
    fromVersion: Math.max(1, Math.min(SAVE_VERSION, Math.floor(num(raw.version, 1)))),
    savedAt: num(raw.savedAt, Date.now()),
    day: Math.max(1, Math.min(3650, Math.floor(num(raw.day, 1)))),
    elapsed: clamp(num(raw.elapsed, num(raw.elapsedSeconds, 120)), 0, DAY_SECONDS - 0.01, 120),
    discovered,
    settings,
    player,
    ...life,
  };
}
