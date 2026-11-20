/**
 * SaveStore.js — IndexedDB 우선, 실패하면 localStorage 폴백
 * 저장 데이터: day / elapsedSeconds / playerPos / discoveredDittos / settings
 */
import { SAVE } from '../config.js';
import { idbGet, idbPut, idbDelete } from './IndexedDB.js';

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
        return data;
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
        return JSON.parse(raw);
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
      await idbPut(SAVE.key, state);
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
