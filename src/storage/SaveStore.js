/**
 * SaveStore.js — IndexedDB 우선, 실패하면 localStorage 폴백
 * 저장 데이터: day / elapsed / player / discovered / settings +
 *   stamina / bag / storage / buildings / mailbox / nodes (1단계 생활 시스템)
 *
 * 저장할 때는 지금 스키마 버전(saveSchema.SAVE_VERSION)을 찍고,
 * 읽을 때는 항상 migrateSave() 를 통과시킨다 — 구버전 세이브도 기본값이
 * 병합된 같은 모양으로 올라오고, 알아볼 수 없으면 null(새 섬)이 된다.
 */
import { SAVE } from '../config.js';
import { idbGet, idbPut, idbDelete } from './IndexedDB.js';
import { SAVE_VERSION, migrateSave } from './saveSchema.js';

const LS_KEY = `${SAVE.dbName}:${SAVE.key}`;

export class SaveStore {
  constructor() {
    this.mode = 'unknown'; // 'idb' | 'local'
    this.lastError = null;
    this._queue = Promise.resolve();
    this._gen = 0;
  }

  async load() {
    let idbData = null;
    let lsData = null;

    try {
      const data = await idbGet(SAVE.key);
      if (data) idbData = migrateSave(data);
      this.mode = 'idb';
    } catch (err) {
      this.lastError = String(err && err.message ? err.message : err);
      this.mode = 'local';
    }

    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        lsData = migrateSave(JSON.parse(raw));
        if (this.mode === 'unknown') this.mode = 'local';
      }
    } catch (err) {
      this.lastError = String(err);
    }

    if (idbData && lsData) {
      const idbTs = Number(idbData.savedAt) || 0;
      const lsTs = Number(lsData.savedAt) || 0;
      return lsTs > idbTs ? lsData : idbData;
    }
    return idbData || lsData || null;
  }

  async hasSave() {
    return !!(await this.load());
  }

  save(state) {
    const gen = this._gen;
    const savedAt = state && Number.isFinite(Number(state.savedAt)) ? Number(state.savedAt) : Date.now();
    const payload = { ...state, version: SAVE_VERSION, savedAt };

    const run = async () => {
      if (gen !== this._gen) return false;
      try {
        await idbPut(SAVE.key, payload);
        if (gen !== this._gen) return false;
        this.mode = 'idb';
        return true;
      } catch (err) {
        this.lastError = String(err && err.message ? err.message : err);
        this.mode = 'local';
        if (gen !== this._gen) return false;
        try {
          localStorage.setItem(LS_KEY, JSON.stringify(payload));
          return true;
        } catch (err2) {
          this.lastError = String(err2);
          return false;
        }
      }
    };

    const next = this._queue.then(run, run);
    this._queue = next.catch(() => false);
    return next;
  }

  /** pagehide 등 비동기 대기가 불가능한 종료 시점용 동기 저장 */
  saveSync(state) {
    try {
      const savedAt = state && Number.isFinite(Number(state.savedAt)) ? Number(state.savedAt) : Date.now();
      const payload = { ...state, version: SAVE_VERSION, savedAt };
      localStorage.setItem(LS_KEY, JSON.stringify(payload));
      return true;
    } catch (err) {
      this.lastError = String(err && err.message ? err.message : err);
      return false;
    }
  }

  clear() {
    this._gen += 1;
    const run = async () => {
      try {
        await idbDelete(SAVE.key);
      } catch (err) {
        this.lastError = String(err);
      }
      try {
        localStorage.removeItem(LS_KEY);
      } catch {
        /* noop */
      }
    };
    const next = this._queue.then(run, run);
    this._queue = next.catch(() => {});
    return next;
  }
}
