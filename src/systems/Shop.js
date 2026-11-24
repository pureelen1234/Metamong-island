/**
 * Shop.js — 자판기 상점(팔기·사기) 규칙
 *
 * 팔기는 가방 재료 · 낚시 바구니 물고기 · 수확물 바구니 작물 · 특산 바구니(해변·숲·광물) · 원정 바구니 자원을 모두 대상으로 한다.
 * 사기는 코인을 쓰고 물건 개수(progress.supplies)를 늘린다. 씨앗·성장 비료도 같은 supplies 통로로 들어온다.
 */
import { SHOP, SHOP_ORDER, SELL, FISH, FISH_ORDER } from './lifeData.js';
import { FORAGE_ITEM_ORDER, ITEM_ORDER, isForageItem } from './items.js';
import { ALL_CROP_ORDER } from './farmData.js';
import { EXPEDITION_ORDER, isExpeditionResource } from './expeditionData.js';

export function sellPrice(id) {
  return Math.max(0, Math.floor(Number(SELL[id]) || 0));
}

/** 팔 수 있는 것 전부 — {id, n, unit, total, source} */
export function sellableEntries(progress) {
  const rows = [];
  for (const id of ITEM_ORDER) {
    if (isForageItem(id)) continue; // 특산물은 아래 바구니 목록에서 센다
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
  for (const id of FORAGE_ITEM_ORDER) {
    const n = progress.forageCount(id);
    const unit = sellPrice(id);
    if (n > 0 && unit > 0) rows.push({ id, n, unit, total: n * unit, source: 'forage' });
  }
  for (const id of EXPEDITION_ORDER) {
    const n = progress.expeditionCount(id);
    const unit = sellPrice(id);
    if (n > 0 && unit > 0) rows.push({ id, n, unit, total: n * unit, source: 'expedition' });
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
  const inBag = isForageItem(id) || isExpeditionResource(id) ? 0 : progress.inventory.count(id);
  const inFish = progress.fishCount(id);
  const inCrop = progress.cropCount(id);
  const inForage = progress.forageCount(id);
  const inExpedition = isExpeditionResource(id) ? progress.expeditionCount(id) : 0;
  const have = inBag + inFish + inCrop + inForage + inExpedition;
  if (have <= 0) return { ok: false, reason: 'empty' };
  const want = amount === 'all' ? have : Math.max(1, Math.floor(Number(amount) || 1));
  const count = Math.min(have, want);

  // 원정 바구니 → 특산 바구니 → 물고기 바구니 → 수확물 바구니 → 가방 순서로 덜어 낸다
  let left = count;
  const fromExpedition = Math.min(inExpedition, left);
  if (fromExpedition > 0) {
    progress.takeExpedition(id, fromExpedition);
    left -= fromExpedition;
  }
  const fromForage = Math.min(inForage, left);
  if (fromForage > 0) {
    progress.takeForage(id, fromForage);
    left -= fromForage;
  }
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
