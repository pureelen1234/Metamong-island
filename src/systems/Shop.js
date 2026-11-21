/**
 * Shop.js — 자판기 상점(팔기·사기) 규칙
 *
 * 팔기는 가방 재료 · 낚시 바구니 물고기 · **수확물 바구니 작물**을 모두 대상으로 한다.
 * 사기는 코인을 쓰고 물건 개수(progress.supplies)를 늘린다. 3단계에서 씨앗 3종이
 * 사기 품목에 붙어 같은 supplies 통로로 들어온다.
 */
import { SHOP, SHOP_ORDER, SELL, FISH, FISH_ORDER } from './lifeData.js';
import { ITEM_ORDER } from './items.js';
import { ALL_CROP_ORDER } from './farmData.js';

export function sellPrice(id) {
  return Math.max(0, Math.floor(Number(SELL[id]) || 0));
}

/** 팔 수 있는 것 전부 — {id, n, unit, total, source} */
export function sellableEntries(progress) {
  const rows = [];
  for (const id of ITEM_ORDER) {
    const n = progress.inventory.count(id);
    const unit = sellPrice(id);
    if (n > 0 && unit > 0) rows.push({ id, n, unit, total: n * unit, source: 'bag' });
  }
  for (const id of FISH_ORDER) {
    const n = progress.fishCount(id);
    const unit = sellPrice(id);
    if (n > 0 && unit > 0) rows.push({ id, n, unit, total: n * unit, source: 'fish' });
  }
  for (const id of ALL_CROP_ORDER) {
    const n = progress.cropCount(id);
    const unit = sellPrice(id);
    if (n > 0 && unit > 0) rows.push({ id, n, unit, total: n * unit, source: 'crop' });
  }
  return rows;
}

/**
 * @param {string} id
 * @param {number|'all'} amount
 */
export function sell(progress, id, amount = 1) {
  const unit = sellPrice(id);
  if (!unit) return { ok: false, reason: 'nosell' };
  const inBag = progress.inventory.count(id);
  const inFish = progress.fishCount(id);
  const inCrop = progress.cropCount(id);
  const have = inBag + inFish + inCrop;
  if (have <= 0) return { ok: false, reason: 'empty' };
  const want = amount === 'all' ? have : Math.max(1, Math.floor(Number(amount) || 1));
  const count = Math.min(have, want);

  // 물고기 바구니 → 수확물 바구니 → 가방 순서로 덜어 낸다
  let left = count;
  const fromFish = Math.min(inFish, left);
  if (fromFish > 0) {
    progress.takeFish(id, fromFish);
    left -= fromFish;
  }
  const fromCrop = Math.min(inCrop, left);
  if (fromCrop > 0) {
    progress.takeCrop(id, fromCrop);
    left -= fromCrop;
  }
  if (left > 0) progress.inventory.take(id, left);

  const coin = count * unit;
  progress.addCoins(coin);
  return { ok: true, count, coin };
}

export function buy(progress, id) {
  const good = SHOP[id];
  if (!good) return { ok: false, reason: 'nogood' };
  if (progress.supply(id) >= 99) return { ok: false, reason: 'full' };
  if (!progress.spendCoins(good.price)) return { ok: false, reason: 'coin' };
  progress.addSupply(id, 1);
  return { ok: true, good };
}

export function goodsRows(progress) {
  return SHOP_ORDER.map((id) => ({ ...SHOP[id], owned: progress.supply(id), affordable: progress.coins >= SHOP[id].price }));
}

export function fishMeta(id) {
  return FISH[id] || null;
}
