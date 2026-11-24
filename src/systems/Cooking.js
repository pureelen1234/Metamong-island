/**
 * Cooking.js — 공방 요리 규칙
 *
 * 재료 판정·차감은 Progress(가방+창고 · 물고기 · 수확물 · 특산 · 원정 바구니)가, 화면은 LifePanels 가 맡고,
 * 여기서는 "요리 한 번"의 순서(재료 차감 → 기력 회복 → 기록 → EXP → 버프)만 정한다.
 */
import { COOK } from './lifeData.js';

/**
 * @returns {{ok:boolean, reason?:string, recipe?:object}}
 */
export function cook(progress, id) {
  const recipe = COOK[id];
  if (!recipe) return { ok: false, reason: 'recipe' };
  const check = progress.canCook(id);
  if (!check.ok) return { ok: false, reason: check.reason, lack: check.lack };

  for (const [item, need] of Object.entries(recipe.need || {})) progress.takeMaterial(item, need);
  for (const [fish, need] of Object.entries(recipe.fish || {})) progress.takeFish(fish, need);
  for (const [crop, need] of Object.entries(recipe.crop || {})) progress.takeCrop(crop, need);
  for (const [forage, need] of Object.entries(recipe.forage || {})) progress.takeForage(forage, need);
  for (const [exp, need] of Object.entries(recipe.expedition || {})) progress.takeExpedition(exp, need);

  progress.restStamina(recipe.stamina);
  progress.markCooked(id);
  progress.gainExp('cook', recipe.exp);
  if (recipe.buff > 0) {
    const bonus = typeof progress.skillBonus === 'function' ? progress.skillBonus('cook') : 0;
    progress.setBuff('golden', Math.round(recipe.buff * (1 + bonus)));
  }

  return { ok: true, recipe };
}

/** 레시피 재료를 "꽃잎 2 · 열매 1" 형태로 */
export function recipeLabel(recipe) {
  const parts = [];
  for (const [item, n] of Object.entries(recipe.need || {})) parts.push({ id: item, n, source: 'bag' });
  for (const [item, n] of Object.entries(recipe.fish || {})) parts.push({ id: item, n, source: 'fish' });
  for (const [item, n] of Object.entries(recipe.crop || {})) parts.push({ id: item, n, source: 'crop' });
  for (const [item, n] of Object.entries(recipe.forage || {})) parts.push({ id: item, n, source: 'forage' });
  for (const [item, n] of Object.entries(recipe.expedition || {})) parts.push({ id: item, n, source: 'expedition' });
  return parts;
}
