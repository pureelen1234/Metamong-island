/**
 * LifePanels.js — 2단계 화면(도감 탭 · 랭크 · 자판기 · 요리 · 강화 · 고양이 돌보기 · 의뢰)
 *
 * Panels.js 와 같은 규약을 쓴다: Game 이 돌려받은 {title, subtitle, body, actions} 를
 * Modal 에 그대로 넘기고, 상태를 바꾸는 일은 Game 의 메서드가 맡는다. 화면 갱신은
 * 같은 패널을 다시 여는 방식(game.openCodex 등 재호출)이다.
 */
import { h } from './dom.js';
import { CATS, DITTOS } from '../config.js';
import { BAG, FORAGE_ITEM_ORDER, ITEMS, ITEM_GROUPS, isForageItem } from '../systems/items.js';
import {
  ADE_STAMINA,
  CAT_CARE,
  CAT_LEVELS,
  COOK,
  COOK_ORDER,
  FISH,
  FISH_HABITAT,
  FISH_ORDER,
  FISH_TIME,
  GOLDEN_BUFF,
  RANKS,
  SHOP_ORDER,
  TOOLS,
  TOOL_ORDER,
  fishIn,
  fishTimeLabel,
  itemIcon,
  itemMeta,
  itemName,
  sizeLabel,
} from '../systems/lifeData.js';
import { recipeLabel } from '../systems/Cooking.js';
import { sellableEntries, sellPrice, goodsRows } from '../systems/Shop.js';
import { ALL_CROP_ORDER, CROPS, CROP_ORDER, FARMING, SEEDS, SEED_ORDER } from '../systems/farmData.js';
import { EXPEDITION_ORDER, EXPEDITION_RESOURCES, EXPEDITION_SITES } from '../systems/expeditionData.js';

const chip = (text, cls = '') => h('span', { class: `lchip ${cls}` }, text);

export class LifePanels {
  constructor(game) {
    this.game = game;
    this.codexTab = 'ditto';
    this.shopTab = 'sell';
  }

  /* ── 공용 조각 ────────────────────────────────────────── */

  #tabs(defs, active, onPick) {
    const bar = h('div', { class: 'tabbar' });
    for (const d of defs) {
      const btn = h(
        'button',
        { class: `tab ${d.id === active ? 'on' : ''}`, type: 'button', 'data-tab': d.id },
        d.label
      );
      btn.addEventListener('click', () => onPick(d.id));
      bar.append(btn);
    }
    return bar;
  }

  #bar(pct, cls = '') {
    return h('div', { class: `progress-line ${cls}` }, h('i', { style: { width: `${Math.max(0, Math.min(100, pct))}%` } }));
  }

  /** 아틀라스 셀을 잘라 배경으로 — 고양이 초상화 */
  #paintThumb(el, set, row) {
    const atlas = this.game.atlases.get(set);
    if (!atlas) return;
    el.style.backgroundImage = `url("${new URL(`sprites/${set}_sheet.png`, document.baseURI).href}")`;
    el.style.backgroundSize = `${atlas.cols * 100}% ${atlas.rows * 100}%`;
    el.style.backgroundPosition = `${((1 - 1) / Math.max(1, atlas.cols - 1)) * 100}% ${((row - 1) / Math.max(1, atlas.rows - 1)) * 100}%`;
  }

  /* ── 📔 도감 (메타몽 · 물고기 · 요리 · 고양이) ────────── */

  codex() {
    const tabs = this.#tabs(
      [
        { id: 'ditto', label: '메타몽' },
        { id: 'fish', label: '물고기' },
        { id: 'gather', label: '채집' },
        { id: 'expedition', label: '원정' },
        { id: 'cook', label: '요리' },
        { id: 'farm', label: '농사' },
        { id: 'cat', label: '고양이' },
      ],
      this.codexTab,
      (id) => {
        this.codexTab = id;
        this.game.openCodex();
      }
    );

    const body = h('div', { class: 'codex-tabs' }, tabs);
    if (this.codexTab === 'fish') body.append(this.#codexFish());
    else if (this.codexTab === 'gather') body.append(this.#codexGather());
    else if (this.codexTab === 'expedition') body.append(this.#codexExpedition());
    else if (this.codexTab === 'cook') body.append(this.#codexCook());
    else if (this.codexTab === 'farm') body.append(this.#codexFarm());
    else if (this.codexTab === 'cat') body.append(this.#codexCat());
    else body.append(this.#codexDitto());

    const subtitles = {
      ditto: '점 눈 두 개만 남은 어설픈 위장들',
      fish: '바다 10종 · 민물 5종 — 시간대마다 다른 얼굴',
      gather: '해변·숲·광맥에서 주운 특산물',
      expedition: '다른 지역에서만 나오는 원정 자원 6종',
      cook: '공방에서 만들어 본 요리',
      farm: '4×4 텃밭에서 기른 작물 기록',
      cat: '솜이와 옹이의 마음',
    };

    return {
      id: `codex_${this.codexTab}`,
      title: '📔 도감',
      subtitle: subtitles[this.codexTab] || '',
      body,
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }

  #codexDitto() {
    const found = this.game.state.discovered;
    const grid = h('div', { class: 'codex-grid' });
    for (const def of DITTOS) {
      const known = found.includes(def.id);
      const thumb = h('div', { class: `codex-thumb ${known ? '' : 'locked'}` }, known ? '' : '· ? ·');
      if (known && def.thumb) this.game.paintDittoThumb(thumb, def.thumb);
      grid.append(
        h(
          'div',
          { class: `codex-card ${known ? '' : 'unknown'}` },
          thumb,
          h('div', { class: 'name' }, known ? def.name : '아직 못 찾음'),
          h('div', { class: 'meta' }, known ? def.flavor : '섬 어딘가에서 돌멩이인 척하고 있어요')
        )
      );
    }
    const pct = Math.round((found.length / DITTOS.length) * 100);
    return h(
      'div',
      {},
      this.#bar(pct),
      h('div', { class: 'hint' }, `발견 ${found.length} / ${DITTOS.length} · 이번 섬에는 어설픈 메타몽 일곱 마리가 숨어 있어요`),
      h('div', { class: 'section-label' }, '이번 섬의 도감'),
      grid
    );
  }

  #codexFish() {
    const p = this.game.progress;
    const kinds = FISH_ORDER.filter((id) => p.fishCount(id) > 0).length;
    const body = h('div', {});
    let first = true;
    for (const hab of ['sea', 'river']) {
      const meta = FISH_HABITAT[hab];
      const ids = FISH_ORDER.filter((id) => FISH[id].habitat === hab || FISH[id].habitat === 'both');
      const got = ids.filter((id) => p.fishCount(id) > 0).length;
      body.append(h('div', { class: 'section-label' }, `${meta.icon} ${meta.name} (${got}/${ids.length})`));
      const grid = h('div', { class: 'fish-grid' });
      for (const id of ids) {
        const f = FISH[id];
        const n = p.fishCount(id);
        const known = n > 0;
        grid.append(
          h(
            'div',
            { class: `fish-card ${known ? '' : 'locked'} ${f.rare ? 'rare' : ''}` },
            h('span', { class: 'fico' }, known ? f.icon : '❔'),
            h(
              'div',
              { class: 'fmain' },
              h('div', { class: 'nm' }, known ? f.name : '아직 못 봄'),
              h('div', { class: 'meta' }, known ? f.desc : hab === 'river' ? '중앙 강에서 낚시하면 만날 수 있어요' : '부두에서 낚시하면 만날 수 있어요'),
              h('div', { class: 'meta' }, `🕐 ${fishTimeLabel(f)}${f.rare ? ' · 희귀' : ''}`)
            ),
            h('div', { class: 'fright' }, known ? chip(`${n}마리`, 'ok') : chip('미등록'))
          )
        );
        first = false;
      }
      body.append(grid);
    }
    return h(
      'div',
      {},
      this.#bar(Math.round((kinds / FISH_ORDER.length) * 100)),
      h(
        'div',
        { class: 'hint' },
        `등록 ${kinds} / ${FISH_ORDER.length}종 · 낚시 ${p.fishing.casts}회 · 성공 ${p.fishing.catches}회 · 놓침 ${p.fishing.misses}회`
      ),
      h(
        'div',
        { class: 'chips' },
        ...FISH_TIME.map((t) => h('span', { class: 'lchip' }, `${t.icon} ${t.label}`)),
        h('span', { class: 'lchip warm' }, '🪱 미끼 → 희귀 ↑')
      ),
      body
    );
  }

  /** 6단계: 특산 채집 도감 — 해변·숲·광맥에서 주운 재료 */
  #codexGather() {
    const p = this.game.progress;
    const total = FORAGE_ITEM_ORDER.length;
    const known = FORAGE_ITEM_ORDER.filter((id) => p.hasDiscoveredForage?.(id) || p.forageCount(id) > 0).length;
    const body = h('div', {});
    for (const group of ITEM_GROUPS.filter((g) => g.id !== 'basic')) {
      const rows = group.items.map((id) => {
        const n = p.forageCount(id);
        return { id, meta: ITEMS[id], n, discovered: !!(p.hasDiscoveredForage?.(id) || n > 0) };
      });
      const got = rows.filter((r) => r.discovered).length;
      body.append(h('div', { class: 'section-label' }, `${group.icon} ${group.name} (${got}/${rows.length})`));
      const list = h('div', { class: 'recipe-list' });
      for (const r of rows) {
        const n = r.n;
        const ok = r.discovered;
        const sample = this.game.world.scenery.nodes.find((node) => node.sprite === r.id);
        list.append(
          h(
            'div',
            { class: `recipe-card ${ok ? '' : 'locked'}` },
            h('span', { class: 'rico' }, ok ? r.meta.icon : '❔'),
            h(
              'div',
              { class: 'rmain' },
              h('div', { class: 'nm' }, ok ? r.meta.name : '아직 못 봄'),
              h('div', { class: 'meta' }, r.meta.desc),
              h('div', { class: 'meta' }, sample ? `자판기 판매 🪙 ${sellPrice(r.id)} · 다시 자라기 ${sample.respawnRange[0]}~${sample.respawnRange[1]}초` : `자판기 판매 🪙 ${sellPrice(r.id)}`)
            ),
            h('div', { class: 'fright' }, ok ? chip(n > 0 ? `바구니 ${n}` : '등록됨', 'ok') : chip('미등록'))
          )
        );
      }
      body.append(list);
    }
    return h(
      'div',
      {},
      this.#bar(Math.round((known / total) * 100)),
      h('div', { class: 'hint' }, `특산 바구니 ${known} / ${total}종 · 모두 ${p.forageTotal}개 · 가방 칸을 차지하지 않아요`),
      body,
      h('div', { class: 'hint' }, '해변은 부두 쪽 모래사장, 숲과 광맥은 다리를 건너 북쪽에 있어요. 자판기 [팔기] 에서 팔거나 공방 요리 재료로 써요.')
    );
  }

  /** 7단계: 원정 자원 도감 — 다른 지역에서만 나오는 6종 */
  #codexExpedition() {
    const p = this.game.progress;
    const total = EXPEDITION_ORDER.length;
    const known = EXPEDITION_ORDER.filter((id) => p.hasDiscoveredExpedition?.(id) || p.expeditionCount(id) > 0).length;
    const list = h('div', { class: 'recipe-list' });
    for (const id of EXPEDITION_ORDER) {
      const r = EXPEDITION_RESOURCES[id];
      const n = p.expeditionCount(id);
      const ok = !!(p.hasDiscoveredExpedition?.(id) || n > 0);
      const site = r.site ? EXPEDITION_SITES[r.site] : null;
      list.append(
        h(
          'div',
          { class: `recipe-card ${ok ? '' : 'locked'}` },
          h('span', { class: 'rico' }, ok ? r.icon : '❔'),
          h(
            'div',
            { class: 'rmain' },
            h('div', { class: 'nm' }, ok ? r.name : '아직 못 봄'),
            h('div', { class: 'meta' }, r.desc),
            h('div', { class: 'meta' }, site ? `${site.icon} ${site.name} 에서만` : '원정에서만')
          ),
          h('div', { class: 'fright' }, ok ? chip(n > 0 ? `바구니 ${n}` : '등록됨', 'ok') : chip('미등록'))
        )
      );
    }
    return h(
      'div',
      {},
      this.#bar(Math.round((known / total) * 100)),
      h('div', { class: 'hint' }, `원정 바구니 ${known} / ${total}종 · 모두 ${p.expeditionTotal}개 · 가방 칸을 차지하지 않아요`),
      list,
      h('div', { class: 'hint' }, '원정 의뢰판(🧭)에서 하루 한 번 다른 지역에 다녀오면 이 자원을 얻어요. 본섬 채집·낚시·농사에서는 나오지 않아요.')
    );
  }

  #codexCook() {
    const p = this.game.progress;
    const list = h('div', { class: 'recipe-list' });
    let made = 0;
    for (const id of COOK_ORDER) {
      const r = COOK[id];
      const n = p.cookedCount(id);
      if (n > 0) made += 1;
      const ing = recipeLabel(r).map((part) => `${itemIcon(part.id)} ${itemName(part.id)} ${part.n}`).join(' · ');
      list.append(
        h(
          'div',
          { class: `recipe-card ${n > 0 ? '' : 'locked'}` },
          h('span', { class: 'rico' }, r.icon),
          h(
            'div',
            { class: 'rmain' },
            h('div', { class: 'nm' }, r.name),
            h('div', { class: 'meta' }, ing),
            h('div', { class: 'meta' }, r.buff > 0 ? `기력 ${r.stamina} 회복 + ${GOLDEN_BUFF.seconds}초 버프` : `기력 +${r.stamina}`)
          ),
          h('div', { class: 'fright' }, n > 0 ? chip(`${n}번`, 'ok') : chip('미등록'))
        )
      );
    }
    return h(
      'div',
      {},
      this.#bar(Math.round((made / COOK_ORDER.length) * 100)),
      h('div', { class: 'hint' }, `만든 요리 ${made} / ${COOK_ORDER.length}종 · 공방을 복구하면 요리할 수 있어요`),
      h('div', { class: 'section-label' }, '레시피'),
      list
    );
  }

  #codexFarm() {
    const p = this.game.progress;
    const list = h('div', { class: 'recipe-list' });
    let known = 0;
    for (const id of ALL_CROP_ORDER) {
      const crop = CROPS[id];
      const have = p.cropCount(id);
      const ok = !!(p.hasDiscoveredCrop?.(id) || have > 0);
      if (ok) known += 1;
      const seed = SEEDS[crop.seedId];
      list.append(
        h(
          'div',
          { class: `recipe-card ${ok ? '' : 'locked'}` },
          h('span', { class: 'rico' }, ok ? crop.icon : '❔'),
          h(
            'div',
            { class: 'rmain' },
            h('div', { class: 'nm' }, ok ? crop.name : '아직 못 봄'),
            h('div', { class: 'meta' }, `${seed.icon} ${seed.name} ${seed.price}코인 · ${Math.round(crop.grow)}초 · ${crop.yield[0]}~${crop.yield[1]}개`),
            h('div', { class: 'meta' }, ok ? crop.desc : '텃밭에서 기르면 여기에 기록돼요')
          ),
          h('div', { class: 'fright' }, ok ? chip(have > 0 ? `바구니 ${have}` : '등록됨', 'ok') : chip('미등록'))
        )
      );
    }
    return h(
      'div',
      {},
      this.#bar(Math.round((known / ALL_CROP_ORDER.length) * 100)),
      h('div', { class: 'hint' }, `바구니에 담긴 작물 ${known} / ${ALL_CROP_ORDER.length}종 · 지금까지 수확 ${p.count('crop')}번 · 심은 씨앗 ${p.count('plant')}번`),
      h('div', { class: 'section-label' }, '작물'),
      list,
      h('div', { class: 'hint' }, `수확물은 가방 칸을 차지하지 않고 수확 바구니에 담겨요. 자판기 [팔기] 에서 개당 ${ALL_CROP_ORDER.map((id) => `${CROPS[id].name} ${CROPS[id].price}`).join(' · ')} 코인에 팔려요.`)
    );
  }

  #codexCat() {    const p = this.game.progress;
    const grid = h('div', { class: 'cat-grid' });
    for (const def of CATS) {
      const row = p.catRow(def.id);
      const portrait = h('div', { class: 'cat-portrait' });
      this.#paintThumb(portrait, def.set, 5);
      grid.append(
        h(
          'div',
          { class: 'cat-card' },
          portrait,
          h(
            'div',
            { class: 'cmain' },
            h('div', { class: 'nm' }, `${def.name} · Lv.${row.level}`),
            this.#bar(row.pct, 'care'),
            h('div', { class: 'meta' }, row.nextAt ? `호감도 ${row.aff} / ${row.nextAt}` : `호감도 ${row.aff} · 최고 레벨`),
            h('div', { class: 'meta' }, CAT_CARE.dialogue[def.id][row.level - 1])
          )
        )
      );
    }
    return h(
      'div',
      {},
      h('div', { class: 'hint' }, '쓰다듬고 간식을 주면 호감도가 올라요. Lv.3부터 [따라오기] 를 켤 수 있어요.'),
      grid
    );
  }

  /* ── 🌱 랭크 ──────────────────────────────────────────── */

  rank() {
    const p = this.game.progress;
    const skills = p.skills;
    const title = skills.title();
    const rows = skills.rows();

    const body = h(
      'div',
      {},
      h(
        'div',
        { class: 'title-medal' },
        h('span', { class: 'ico' }, title.icon),
        h('div', {}, h('div', { class: 'nm' }, title.name), h('div', { class: 'meta' }, `생활 EXP 합계 ${title.total}`)),
        title.next ? chip(`다음 ${title.next.name}까지 ${title.toNext}`, 'warm') : chip('최고 칭호', 'ok')
      ),
      this.#bar(title.pct, 'life'),
      h('div', { class: 'section-label' }, '5대 생활 스킬'),
      h(
        'div',
        { class: 'skill-list' },
        ...rows.map((r) =>
          h(
            'div',
            { class: 'skill-row' },
            h('span', { class: 'sico' }, r.icon),
            h(
              'div',
              { class: 'smain' },
              h('div', { class: 'nm' }, `${r.name} · ${r.rank}`),
              this.#bar(r.pct),
              h('div', { class: 'meta' }, `${r.exp} EXP${r.next ? ` · ${r.next.name}까지 ${r.toNext}` : ' · 최고 랭크'}`)
            ),
            h('span', { class: 'lv' }, `Lv.${r.level}`)
          )
        )
      ),
      h('div', { class: 'section-label' }, '승급 조건'),
      h('div', { class: 'hint' }, RANKS.map((r) => `${r.name} ${r.exp}`).join(' · ')),
      h('div', { class: 'section-label' }, '경험치'),
      h('div', { class: 'hint' }, '채집 +6 · 낚시 성공 +14 · 요리 +30 · 돌보기 +10 (간식 +12) · 농사 심기 +6 / 물주기 +3 / 수확 +16'),
      h('div', { class: 'hint' }, '5개 스킬 EXP 합계가 섬 생활 칭호를 정해요.')
    );

    const ach = p.claimableAchievements;
    return {
      id: 'rank',
      title: '🌱 생활 랭크',
      subtitle: `${title.name} · 총 ${title.total} EXP`,
      body,
      actions: [
        { label: `🏆 업적${ach ? ` (보상 ${ach})` : ''}`, kind: 'ghost', onClick: () => this.game.openAchievements() },
        { label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() },
      ],
    };
  }

  /* ── 📋 오늘의 의뢰 ───────────────────────────────────── */

  /** 우체통·의뢰 모달에 넣는 목록 */
  questList() {
    const p = this.game.progress;
    const rows = p.questRows();
    const wrap = h('div', { class: 'quest-list' });
    if (!rows.length) {
      wrap.append(h('div', { class: 'hint' }, '오늘의 의뢰를 준비 중이에요.'));
      return wrap;
    }
    for (const q of rows) {
      const btn = h(
        'button',
        { class: `mini quest-claim ${q.done && !q.claimed ? 'on' : ''}`, type: 'button' },
        q.claimed ? '완료' : q.done ? '보상 받기' : `${q.progress}/${q.need}`
      );
      if (q.claimed || !q.done) btn.disabled = true;
      btn.addEventListener('click', () => this.game.claimQuest(q.id));
      wrap.append(
        h(
          'div',
          { class: `quest-row ${q.done ? 'done' : ''} ${q.claimed ? 'claimed' : ''}` },
          h('span', { class: 'qico' }, q.icon),
          h(
            'div',
            { class: 'qmain' },
            h('div', { class: 'nm' }, q.label),
            this.#bar(q.pct),
            h(
              'div',
              { class: 'meta' },
              `🪙 ${q.reward.coin}${q.reward.star ? ` · ⭐ ${q.reward.star}` : ''} · ${q.progress}/${q.need}`
            )
          ),
          btn
        )
      );
    }
    return wrap;
  }

  quests() {
    const p = this.game.progress;
    const rows = p.questRows();
    const done = rows.filter((q) => q.done && !q.claimed).length;
    return {
      id: 'quests',
      title: '📋 오늘의 의뢰',
      subtitle: `Day ${p.quests.day} · ${rows.length}건${done ? ` · 받을 보상 ${done}건` : ''}`,
      body: h(
        'div',
        {},
        h('div', { class: 'hint' }, 'Day 가 바뀌면 새 의뢰 두 건이 자동으로 생겨요. 달성하면 코인과 별조각을 받아요.'),
        this.questList(),
        h('div', { class: 'section-label' }, '보유'),
        h('div', { class: 'hint' }, `🪙 섬 코인 ${p.coins}`)
      ),
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }

  /* ── 🥤 자판기 ────────────────────────────────────────── */

  vending() {
    const p = this.game.progress;
    const tabs = this.#tabs(
      [
        { id: 'sell', label: '팔기' },
        { id: 'buy', label: '사기' },
      ],
      this.shopTab,
      (id) => {
        this.shopTab = id;
        this.game.openVending();
      }
    );

    const body = h(
      'div',
      {},
      h('div', { class: 'wallet' }, h('span', {}, '🪙'), h('strong', {}, String(p.coins)), h('span', { class: 'hint' }, '섬 코인')),
      tabs
    );

    if (this.shopTab === 'buy') {
      const rows = goodsRows(p);
      const goodRow = (g) => {
        const btn = h('button', { class: `mini buy ${g.affordable ? 'on' : ''}`, type: 'button' }, `🪙 ${g.price}`);
        if (!g.affordable) btn.disabled = true;
        btn.addEventListener('click', () => this.game.buyGood(g.id));
        return h(
          'div',
          { class: 'shop-row' },
          h('span', { class: 'gico' }, g.icon),
          h(
            'div',
            { class: 'gmain' },
            h('div', { class: 'nm' }, `${g.name}${g.owned ? ` · ${g.owned}개 보유` : ''}`),
            h('div', { class: 'meta' }, g.desc)
          ),
          btn
        );
      };
      const goods = rows.filter((g) => g.kind !== 'seed');
      const seeds = rows.filter((g) => g.kind === 'seed');
      body.append(h('div', { class: 'section-label' }, '사기'));
      body.append(h('div', { class: 'shop-list' }, ...goods.map(goodRow)));
      body.append(h('div', { class: 'section-label' }, '🌱 씨앗 (북서 텃밭 4×4 · 북쪽 논)'));
      body.append(h('div', { class: 'shop-list' }, ...seeds.map(goodRow)));
      if (p.supply('ade') > 0) {
        body.append(
          h(
            'button',
            { class: 'btn soft wide', type: 'button', onclick: () => this.game.drinkAde() },
            `🥤 반짝 에이드 마시기  ·  기력 +${ADE_STAMINA}  (${p.supply('ade')}개)`
          )
        );
      }
      body.append(h('div', { class: 'hint' }, '츄르는 고양이 돌보기에서, 별빛 미끼는 낚시할 때 쓰고, 씨앗은 텃밭·논에서, 성장 비료는 밭·논 한 칸의 성장 단계를 올려요 🧪'));
    } else {
      const rows = sellableEntries(p);
      const list = h('div', { class: 'shop-list' });
      if (!rows.length) list.append(h('div', { class: 'hint' }, '팔 수 있는 재료나 물고기가 없어요.'));
      for (const row of rows) {
        const one = h('button', { class: 'mini', type: 'button' }, '1개');
        one.addEventListener('click', () => this.game.sellItem(row.id, 1));
        const all = h('button', { class: 'mini on', type: 'button' }, '전부');
        all.addEventListener('click', () => this.game.sellItem(row.id, 'all'));
        list.append(
          h(
            'div',
            { class: 'shop-row' },
            h('span', { class: 'gico' }, itemIcon(row.id)),
            h(
              'div',
              { class: 'gmain' },
              h('div', { class: 'nm' }, `${itemName(row.id)} × ${row.n}`),
              h(
                'div',
                { class: 'meta' },
                `개당 🪙 ${row.unit}${row.source === 'fish' ? ' · 낚시 바구니' : row.source === 'crop' ? ' · 수확 바구니' : row.source === 'forage' ? ' · 특산 바구니' : ''}`
              )
            ),
            h('div', { class: 'shop-btns' }, one, all)
          )
        );
      }
      body.append(
        h('div', { class: 'section-label' }, '팔기'),
        list,
        h('div', { class: 'hint' }, '전부 팔면 그 재료·물고기·작물을 한 번에 정리해요.')
      );
    }

    return {
      id: `vending_${this.shopTab}`,
      title: '🥤 메타몽 자판기',
      subtitle: '팔고, 사고 — 섬 코인이 오가는 곳',
      body,
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }

  /* ── 🍳 요리 ──────────────────────────────────────────── */

  cooking() {
    const p = this.game.progress;
    const list = h('div', { class: 'recipe-list' });
    for (const id of COOK_ORDER) {
      const r = COOK[id];
      const check = p.canCook(id);
      const items = recipeLabel(r).map((part) => {
        const have =
          part.source === 'fish'
            ? p.fishCount(part.id)
            : part.source === 'crop'
              ? p.cropCount(part.id)
              : part.source === 'forage'
                ? p.forageCount(part.id)
                : p.inventory.count(part.id);
        return h(
          'span',
          { class: `lchip ${have >= part.n ? 'ok' : 'lack'}` },
          `${itemIcon(part.id)} ${itemName(part.id)} ${have}/${part.n}`
        );
      });
      const btn = h('button', { class: `mini cook ${check.ok ? 'on' : ''}`, type: 'button' }, '요리');
      if (!check.ok) btn.disabled = true;
      btn.addEventListener('click', () => this.game.cook(id));
      list.append(
        h(
          'div',
          { class: 'recipe-row' },
          h('span', { class: 'rico' }, r.icon),
          h(
            'div',
            { class: 'rmain' },
            h('div', { class: 'nm' }, `${r.name} · 기력 +${r.stamina}${r.buff ? ' + 버프' : ''}`),
            h('div', { class: 'chips' }, ...items),
            h('div', { class: 'meta' }, r.desc)
          ),
          h('div', { class: 'shop-btns' }, btn)
        )
      );
    }

    return {
      id: 'cooking',
      title: '🍳 공방 요리',
      subtitle: `지금 기력 ${Math.round(p.stamina)} / 100`,
      body: h(
        'div',
        {},
        h('div', { class: 'hint' }, '재료와 물고기를 넣고 요리하면 기력이 회복돼요. 황금 정식은 60초 동안 채집이 가벼워져요. 특산물(🍄🐚💎)은 특산 바구니에서 꺼내 써요.'),
        list,
        h('div', { class: 'section-label' }, '보유 재료'),
        h(
          'div',
          { class: 'chips' },
          ...['log', 'stone', 'petal', 'star', 'berry'].map((id) => chip(`${itemIcon(id)} ${itemName(id)} ${p.inventory.count(id)}`)),
          ...FISH_ORDER.filter((id) => p.fishCount(id) > 0).map((id) => chip(`${itemIcon(id)} ${itemName(id)} ${p.fishCount(id)}`)),
          ...ALL_CROP_ORDER.filter((id) => p.cropCount(id) > 0).map((id) => chip(`${CROPS[id].icon} ${CROPS[id].name} ${p.cropCount(id)}`)),
          ...FORAGE_ITEM_ORDER.filter((id) => p.forageCount(id) > 0).map((id) => chip(`${itemIcon(id)} ${itemName(id)} ${p.forageCount(id)}`, 'warm'))
        )
      ),
      actions: [
        { label: '🔨 도구 강화', kind: 'ghost', onClick: () => this.game.openUpgrade() },
        { label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() },
      ],
    };
  }

  /* ── 🪓 도구 강화 ─────────────────────────────────────── */

  upgrade() {
    const p = this.game.progress;
    const list = h('div', { class: 'tool-list' });
    for (const id of TOOL_ORDER) {
      const info = p.toolInfo(id);
      const check = p.canUpgrade(id);
      const costChips = Object.entries(info.cost).map(([item, need]) => {
        const have = item === 'coin' ? p.coins : p.inventory.count(item);
        const label = item === 'coin' ? `🪙 ${need}` : `${itemIcon(item)} ${itemName(item)} ${need}`;
        return chip(`${label} (${have})`, have >= need ? 'ok' : 'lack');
      });
      const btn = h(
        'button',
        { class: `mini up ${check.ok ? 'on' : ''}`, type: 'button' },
        info.maxed ? '최대' : `Lv.${info.level + 1} 강화`
      );
      if (!check.ok) btn.disabled = true;
      btn.addEventListener('click', () => this.game.upgradeTool(id));
      const effect =
        info.level >= info.max
          ? '더 강화할 수 없어요'
          : id === 'water'
            ? `한 번에 ${['십자 5칸', '3×3 9칸'][info.level - 1]}에 물주기`
            : `기력 소모 ×${info.def.stamina[info.level].toFixed(2)}${info.def.hits[info.level] ? ' · 타격 +1' : ''}`;
      list.append(
        h(
          'div',
          { class: 'tool-row' },
          h('span', { class: 'tico' }, info.def.icon),
          h(
            'div',
            { class: 'tmain' },
            h('div', { class: 'nm' }, `${info.def.name} · Lv.${info.level}${info.maxed ? ' (최대)' : ''}`),
            h('div', { class: 'chips' }, ...costChips),
            h('div', { class: 'meta' }, effect)
          ),
          h('div', { class: 'shop-btns' }, btn)
        )
      );
    }
    return {
      id: 'upgrade',
      title: '🪓 도구 강화',
      subtitle: '재료와 코인을 넣으면 한 번에 더 많이 캐요',
      body: h(
        'div',
        {},
        h('div', { class: 'hint' }, '도끼는 나무, 곡괭이는 바위에 적용돼요. 물뿌리개는 레벨이 오르면 한 번에 더 넓게 물을 줘요.'),
        list,
        h('div', { class: 'section-label' }, '보유'),
        h('div', { class: 'hint' }, `🪙 ${p.coins} · 🪵 ${p.inventory.count('log')} · 🪨 ${p.inventory.count('stone')} · ⭐ ${p.inventory.count('star')}`)
      ),
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }

  /* ── 🐱 고양이 돌보기 ─────────────────────────────────── */

  cat(catId) {
    const p = this.game.progress;
    const def = CATS.find((c) => c.id === catId) || CATS[0];
    const row = p.catRow(def.id);
    const cat = this.game.cats.find((c) => c.id === def.id);
    const level = row.level;

    const portrait = h('div', { class: 'cat-portrait big tap' });
    this.#paintThumb(portrait, def.set, 5);
    portrait.addEventListener('click', () => this.game.petCat(def.id));

    const petBtn = h(
      'button',
      { class: `btn soft wide ${cat && cat.cd.pet > 0 ? 'wait' : ''}`, type: 'button' },
      cat && cat.cd.pet > 0
        ? `🤲 쓰다듬기 · ${cat.cd.pet.toFixed(1)}초 뒤에 또`
        : `🤲 쓰다듬기  ·  호감도 +${CAT_CARE.pet.aff}`
    );
    if (cat && cat.cd.pet > 0) petBtn.disabled = true;
    petBtn.addEventListener('click', () => this.game.petCat(def.id));

    // 간식 3종
    const snacks = h('div', { class: 'snack-row' });
    for (const id of CAT_CARE.snackOrder) {
      const s = CAT_CARE.snacks[id];
      const have = id === 'churu' ? p.supply('churu') : id === 'berry' ? p.inventory.count('berry') : p.fishCount('anchovy');
      const btn = h(
        'button',
        { class: `mini snack ${have > 0 && cat && cat.cd.snack <= 0 ? 'on' : ''}`, type: 'button' },
        `${s.icon} ${s.name} (${have})`
      );
      if (have <= 0 || !cat || cat.cd.snack > 0) btn.disabled = true;
      btn.addEventListener('click', () => this.game.feedCat(def.id, id));
      snacks.append(btn);
    }

    // 따라오기
    let followEl;
    if (row.canFollow) {
      const btn = h(
        'button',
        { class: `switch wide ${row.follow ? 'on' : ''}`, type: 'button', 'aria-label': '따라오기' },
        row.follow ? '따라오는 중' : '따라오기'
      );
      btn.addEventListener('click', () => this.game.toggleFollow(def.id));
      followEl = h('div', { class: 'row' }, h('div', {}, h('div', { class: 'label' }, '따라오기'), h('div', { class: 'hint' }, '섬을 걸으면 뒤따라와요')), btn);
    } else {
      followEl = h('div', { class: 'hint' }, `따라오기는 호감도 Lv.${CAT_CARE.followLevel}부터 열려요 (지금 Lv.${level}).`);
    }

    const giftRows = Object.entries(CAT_CARE.gifts).map(([lv, gift]) => {
      const got = row.gifts.includes(Number(lv));
      const label = Object.entries(gift).map(([id, n]) => `${itemIcon(id)} ${itemName(id)} ${n}`).join(' · ');
      return h('div', { class: `gift-row ${got ? 'got' : ''}` }, h('span', {}, `Lv.${lv}`), h('span', { class: 'meta' }, label), h('span', { class: 'mini' }, got ? '받음' : '대기'));
    });

    const body = h(
      'div',
      {},
      h(
        'div',
        { class: 'cat-head' },
        portrait,
        h(
          'div',
          { class: 'cat-info' },
          h('div', { class: 'nm' }, `${def.name} · Lv.${row.level}`),
          this.#bar(row.pct, 'care'),
          h('div', { class: 'meta' }, row.nextAt ? `호감도 ${row.aff} / ${row.nextAt} (다음 Lv.${row.level + 1}까지 ${row.toNext})` : `호감도 ${row.aff} · 최고 레벨`),
          h('div', { class: 'say' }, CAT_CARE.dialogue[def.id][level - 1])
        )
      ),
      h('div', { class: 'section-label' }, '돌보기'),
      petBtn,
      h('div', { class: 'section-label' }, '간식'),
      snacks,
      h('div', { class: 'section-label' }, '함께 걷기'),
      followEl,
      h('div', { class: 'section-label' }, '보답 선물'),
      h('div', { class: 'gift-list' }, ...giftRows)
    );

    return {
      title: `🐱 ${def.name} 돌보기`,
      subtitle: row.follow ? '지금 따라오고 있어요' : '쓰다듬고 간식을 주면 마음이 열려요',
      body,
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }
}
