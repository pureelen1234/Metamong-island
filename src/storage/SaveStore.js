/**
 * SaveStore.js — IndexedDB 우선, 실패하면 localStorage 폴백
 * 저장 데이터: day / elapsed / player / discovered / settings +
 *   stamina / bag / storage / buildings / mailbox / nodes (1단계 생활 시스템)
 *
 * 저장할 때는 지금 스키마 버전(saveSchema.SAVE_VERSION, 5단계 = 6)을 찍고,
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
  }

  async load() {
    try {
      const data = await idbGet(SAVE.key);
      if (data) {
        this.mode = 'idb';
        return migrateSave(data);
      }
      this.mode = 'idb';
    } catch (err) {
      this.lastError = String(err && err.message ? err.message : err);
      this.mode = 'local';
    }
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        this.mode = this.mode === 'unknown' ? 'local' : this.mode;
        return migrateSave(JSON.parse(raw));
      }
    } catch (err) {
      this.lastError = String(err);
    }
    return null;
  }

  async hasSave() {
    return !!(await this.load());
  }

  async save(state) {
    try {
      await idbPut(SAVE.key, { ...state, version: SAVE_VERSION });
      this.mode = 'idb';
      return true;
    } catch (err) {
      this.lastError = String(err && err.message ? err.message : err);
      this.mode = 'local';
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(state));
        return true;
      } catch (err2) {
        this.lastError = String(err2);
        return false;
      }
    }
  }

  async clear() {
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
  }
}
