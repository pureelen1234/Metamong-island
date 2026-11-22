/**
 * Phase4Panels.js — 4단계 화면(다리 · 논 · 리어카)
 *
 * 다른 패널과 같은 규약: Game 이 돌려받은 {title, subtitle, body, actions} 를 Modal 에
 * 그대로 넘기고, 상태를 바꾸는 일은 Game 의 메서드가 맡는다(재료 투입·완성·심기·수확).
 */
import { h } from './dom.js';
import { BRIDGE, PADDY } from '../config.js';
import { BRIDGE_RECIPE, BAG, CART, ITEMS } from '../systems/items.js';
import { ALL_CROP_ORDER, CROPS, FARMING, PADDY_SEED_ORDER, SEEDS } from '../systems/farmData.js';
import { stageOf } from '../world/Farming.js';

const name = (id) => (ITEMS[id] ? ITEMS[id].name : id);
const icon = (id) => (ITEMS[id] ? ITEMS[id].icon : '❔');

export class Phase4Panels {
  constructor(game) {
    this.game = game;
  }

  #bar(pct, cls = '') {
    return h('div', { class: `progress-line ${cls}` }, h('i', { style: { width: `${Math.max(0, Math.min(100, pct))}%` } }));
  }

  /* ── 🌉 다리 ──────────────────────────────────────────── */

  bridge() {
    const g = this.game;
    const st = g.progress.bridgeState();
    const inv = g.progress.inventory;
    const recipe = BRIDGE_RECIPE;

    const totalNeed = Object.values(recipe).reduce((a, b) => a + b, 0);
    const totalIn = Object.entries(recipe).reduce((a, [id, need]) => a + Math.min(need, st.invested[id] || 0), 0);
    const pct = totalNeed ? Math.round((totalIn / totalNeed) * 100) : 0;
    const ready = Object.entries(recipe).every(([id, need]) => (st.invested[id] || 0) >= need);
    const canAdd = Object.entries(recipe).some(([id, need]) => (st.invested[id] || 0) < need && inv.count(id) > 0);

    const rows = Object.entries(recipe).map(([id, need]) => {
      const have = inv.count(id);
      const put = Math.min(need, st.invested[id] || 0);
      const done = put >= need;
      return h(
        'div',
        { class: `req-row ${done ? 'done' : ''}` },
        h('span', { class: 'ico' }, icon(id)),
        h(
          'div',
          { class: 'info' },
          h('div', { class: 'nm' }, `${name(id)}${done ? ' ✓' : ''}`),
          h('div', { class: 'sub' }, `가방 ${have}개 · 창고 ${inv.stored(id)}개`)
        ),
        h('span', { class: `need ${have + (st.invested[id] || 0) >= need ? 'ok' : 'lack'}` }, `${put}/${need}`)
      );
    });

    const body = st.built
      ? h(
          'div',
          {},
          h('div', { class: 'done-banner' }, '🌉 다리 완성', h('div', { class: 'sub' }, '강 위로 널빤지 데크가 놓였어요.') ),
          h('div', { class: 'hint' }, '이제 다리 위를 걸어 북쪽 개척권으로 건널 수 있어요 — 빼곡한 숲 · 채석장 · 논이 기다려요.')
        )
      : h(
          'div',
          {},
          h('div', { class: 'hint' }, '강이 남쪽 생활권과 북쪽 개척권을 갈라 놓았어요. 통나무와 돌을 모아 다리를 놓으면 걸어서 건널 수 있어요.'),
          this.#bar(pct),
          h('div', { class: 'req-list' }, ...rows),
          h('div', { class: 'hint' }, ready ? '재료가 다 모였어요 — [다리 놓기] 를 눌러 주세요.' : '재료를 모아 [재료 투입] 으로 하나씩 넣어요. Day 는 기다리지 않아도 돼요.'),
          h('div', { class: 'section-label' }, '건너편'),
          h(
            'div',
            { class: 'chips' },
            h('span', { class: 'lchip' }, '🌲 빼곡한 숲'),
            h('span', { class: 'lchip' }, '🪨 채석장'),
            h('span', { class: 'lchip warm' }, '🌾 논')
          )
        );

    const actions = [];
    if (!st.built) {
      actions.push({ label: '재료 투입', kind: 'ghost', disabled: !canAdd, onClick: () => g.investBridge() });
      actions.push({ label: '다리 놓기', kind: 'primary', disabled: !ready, onClick: () => g.completeBridge() });
    }
    actions.push({ label: '닫기', kind: st.built || !ready ? 'primary' : 'ghost', onClick: () => g.modal.close() });

    return {
      title: `${BRIDGE.icon} ${BRIDGE.name}`,
      subtitle: st.built ? '이미 놓인 다리예요' : '강 중앙 길목 — 재료만 모으면 바로 놓을 수 있어요',
      body,
      actions,
    };
  }

  /* ── 🌾 논 ───────────────────────────────────────────── */

  #plotInfo(index) {
    const p = this.game.progress;
    const st = p.paddyPlot(index);
    if (!st) return { state: 'empty', label: '볍씨를 심어 보세요', stage: -1, pct: 0, crop: null, st: null };
    const crop = CROPS[st.crop] || CROPS.rice;
    const stage = stageOf(st);
    const pct = Math.round((1 - st.remain / Math.max(1, st.total)) * 100);
    return {
      state: st.remain > 0 ? 'grow' : 'ripe',
      label: st.remain > 0 ? `${['새싹', '자라는 중', '여무는 중'][Math.max(0, stage)]} · ${Math.ceil(st.remain)}초` : '수확 가능',
      stage,
      pct,
      crop,
      st,
    };
  }

  #plotButton(index, info) {
    if (info.state === 'empty') {
      const btn = h('button', { class: 'mini farm-btn', type: 'button' }, '🌾 심기');
      btn.addEventListener('click', () => this.game.openPaddySeedPicker(index));
      return btn;
    }
    if (info.state === 'ripe') {
      const btn = h('button', { class: 'mini farm-btn on', type: 'button' }, '🧺 수확');
      btn.addEventListener('click', () => this.game.harvestPaddy(index));
      return btn;
    }
    const canWater = info.st.watered < FARMING.maxWater;
    const btn = h(
      'button',
      { class: `mini farm-btn ${canWater ? 'water' : ''}`, type: 'button' },
      canWater ? `💧 물 ${FARMING.maxWater - info.st.watered}` : '💧 끝'
    );
    if (!canWater) btn.disabled = true;
    btn.addEventListener('click', () => this.game.waterPaddy(index));
    return btn;
  }

  /** 칸 안의 버튼 줄 — 기본 동작(심기/물/수확) + 성장 비료 */
  #plotActions(index, info) {
    const row = h('div', { class: 'fc-acts' }, this.#plotButton(index, info));
    if (info.state === 'grow') {
      const fert = this.game.progress.supply('fertilizer');
      const used = Math.max(0, Math.floor(Number(info.st && info.st.fert) || 0));
      const can = fert > 0 && used < FARMING.fertilizer.maxPerPlot;
      const btn = h(
        'button',
        { class: `mini fc-fert ${can ? 'on' : ''}`, type: 'button', 'aria-label': `${index + 1}번 논에 성장 비료`, title: can ? `성장 비료 ${fert}개` : used >= FARMING.fertilizer.maxPerPlot ? '비료를 다 줬어요' : '비료가 없어요' },
        '🧪'
      );
      if (!can) btn.disabled = true;
      btn.addEventListener('click', () => this.game.fertilizePaddy(index));
      row.append(btn);
    }
    return row;
  }

  paddy() {
    const p = this.game.progress;
    const can = p.toolInfo('water');
    const planted = p.paddyPlots.filter(Boolean).length;
    const ripe = p.paddyPlots.filter((st) => st && st.remain <= 0).length;
    const riceSeed = p.supply('seed_rice');

    const grid = h('div', { class: 'farm-grid paddy-grid', 'data-cols': String(PADDY.cols) });
    for (let i = 0; i < PADDY.cols * PADDY.rows; i++) {
      const info = this.#plotInfo(i);
      const cell = h(
        'div',
        { class: `farm-cell ${info.state} paddy`, 'data-plot': String(i) },
        h('div', { class: 'fc-head' }, h('span', { class: 'fc-ico' }, info.crop ? info.crop.icon : '·'), h('span', { class: 'fc-name' }, info.crop ? info.crop.name : '빈 논')),
        h('div', { class: 'fc-stage' }, info.label),
        info.state === 'empty' ? null : this.#bar(info.pct, info.state === 'ripe' ? 'life' : ''),
        this.#plotActions(i, info)
      );
      grid.append(cell);
    }
    const fert = p.supply('fertilizer');

    return {
      title: '🌾 논',
      subtitle: `다리 건너 4×2 논 · ${planted}칸 심음${ripe ? ` · ${ripe}칸 수확 가능` : ''}`,
      body: h(
        'div',
        {},
        h('div', { class: 'hint' }, '볍씨를 논에 심고 물을 대면 남은 시간이 절반으로 줄어요. 다 여문 벼는 수확 바구니에 담기고, 자판기 [팔기] 에서 쌀로 팔 수 있어요.'),
        h('div', { class: 'section-label' }, '내 볍씨'),
        h('div', { class: 'chips' }, h('span', { class: `lchip ${riceSeed > 0 ? 'ok' : 'lack'}` }, `🌾 볍씨 ${riceSeed}`)),
        h(
          'button',
          { class: 'btn soft wide', type: 'button', onclick: () => { this.game.life.shopTab = 'buy'; this.game.openVending(); } },
          '🥤 자판기에서 볍씨 사기 (20코인)'
        ),
        h('div', { class: 'section-label' }, '🧪 성장 비료'),
        h(
          'div',
          { class: 'row' },
          h('div', {}, h('div', { class: 'label' }, `보유 ${fert}개`), h('div', { class: 'hint' }, `논 한 칸의 성장 단계를 하나 올려요 · 칸당 최대 ${FARMING.fertilizer.maxPerPlot}번`)),
          h('button', { class: 'mini', type: 'button', onclick: () => { this.game.life.shopTab = 'buy'; this.game.openVending(); } }, '사기')
        ),
        h('div', { class: 'section-label' }, '🧺 수확 바구니'),
        h(
          'div',
          { class: 'chips' },
          ...ALL_CROP_ORDER.map((id) => {
            const n = p.cropCount(id);
            return h('span', { class: `lchip ${n > 0 ? 'warm' : ''}` }, `${CROPS[id].icon} ${CROPS[id].name} ${n}`);
          })
        ),
        h('div', { class: 'section-label' }, '논 타일'),
        grid,
        h('div', { class: 'section-label' }, '물뿌리개'),
        h(
          'div',
          { class: 'row' },
          h(
            'div',
            {},
            h('div', { class: 'label' }, `🚿 물뿌리개 Lv.${can.level}`),
            h('div', { class: 'hint' }, `한 번에 ${['1칸', '한 줄 4칸', '8칸'][can.level - 1]} · 칸당 기력 ${FARMING.waterStamina}`)
          ),
          h('button', { class: 'mini', type: 'button', onclick: () => this.game.openUpgrade() }, can.maxed ? '최대' : '강화')
        ),
        h('div', { class: 'hint' }, '논은 다리 건너 북쪽 개척권, 이정표 옆에 있어요.')
      ),
      actions: [
        { label: '🌱 텃밭 보기', kind: 'ghost', onClick: () => this.game.openFarm() },
        { label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() },
      ],
    };
  }

  paddySeedPicker(index) {
    const p = this.game.progress;
    const list = h('div', { class: 'seed-list' });
    for (const id of PADDY_SEED_ORDER) {
      const s = SEEDS[id];
      const crop = CROPS[s.crop];
      const n = p.supply(id);
      const btn = h('button', { class: `mini farm-btn ${n > 0 ? 'on' : ''}`, type: 'button' }, n > 0 ? '심기' : '없음');
      if (n <= 0) btn.disabled = true;
      btn.addEventListener('click', () => this.game.plantPaddy(index, s.crop));
      list.append(
        h(
          'div',
          { class: 'seed-row' },
          h('span', { class: 'gico' }, crop.icon),
          h(
            'div',
            { class: 'gmain' },
            h('div', { class: 'nm' }, `${s.name} · ${n}개`),
            h('div', { class: 'meta' }, `${Math.round(crop.grow)}초 → ${crop.name} ${crop.yield[0]}~${crop.yield[1]}개 · 개당 🪙 ${crop.price}`)
          ),
          btn
        )
      );
    }
    return {
      title: `🌾 ${index + 1}번 논에 심기`,
      subtitle: '볍씨를 논에 뿌려요',
      body: h(
        'div',
        {},
        h('div', { class: 'hint' }, '볍씨는 자판기 [사기] 탭에서 20코인에 살 수 있어요. 다리 건너 북쪽 개척권의 논에서만 자라요.'),
        list,
        h('div', { class: 'hint' }, `지금 기력 ${Math.round(p.stamina)} / 100 · 물주기 한 칸당 ${FARMING.waterStamina}`)
      ),
      actions: [
        { label: '← 논', kind: 'ghost', onClick: () => this.game.openPaddy() },
        { label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() },
      ],
    };
  }

  /* ── 🛒 리어카 ────────────────────────────────────────── */

  cart() {
    const g = this.game;
    const p = g.progress;
    const has = p.cartLevel >= CART.maxLevel;
    const check = g.canBuildCart();
    const inv = p.inventory;

    const rows = Object.entries(CART.cost).map(([id, need]) => {
      const have = id === 'coin' ? p.coins : inv.count(id);
      const done = have >= need;
      return h(
        'div',
        { class: `req-row ${done ? 'done' : ''}` },
        h('span', { class: 'ico' }, id === 'coin' ? '🪙' : icon(id)),
        h(
          'div',
          { class: 'info' },
          h('div', { class: 'nm' }, `${id === 'coin' ? '섬 코인' : name(id)}${done ? ' ✓' : ''}`),
          h('div', { class: 'sub' }, `가진 것 ${have}개`)
        ),
        h('span', { class: `need ${done ? 'ok' : 'lack'}` }, `${need}`)
      );
    });

    return {
      title: '🛒 리어카',
      subtitle: has ? '가방이 넓어졌어요' : '짊어지는 가방을 두 배로',
      body: has
        ? h(
            'div',
            {},
            h('div', { class: 'done-banner' }, '🛒 리어카 완성', h('div', { class: 'sub' }, CART.desc)),
            h(
              'div',
              { class: 'row' },
              h('div', {}, h('div', { class: 'label' }, '가방 칸'), h('div', { class: 'hint' }, `🎒 ${inv.usedSlots()}/${inv.slots}칸 사용 중`)),
              h('span', { class: 'hint' }, `한 칸 ${BAG.stack}개`)
            ),
            h('div', { class: 'hint' }, '이제 캐는 대로 담아도 금방 차지 않아요. 걸어 다니면 리어카가 뒤따라와요.')
          )
        : h(
            'div',
            {},
            h('div', { class: 'hint' }, CART.desc),
            h(
              'div',
              { class: 'row' },
              h('div', {}, h('div', { class: 'label' }, '가방'), h('div', { class: 'hint' }, `${BAG.slots}칸 → ${BAG.slots + CART.slotsPerLevel}칸`)),
              h('span', { class: 'hint' }, `한 칸 ${BAG.stack}개`)
            ),
            h('div', { class: 'section-label' }, '필요한 것'),
            h('div', { class: 'req-list' }, ...rows),
            h('div', { class: 'hint' }, g.progress.building('workshop').done ? '공방 도구방에서 바로 만들어요.' : '공방을 먼저 복구해야 만들어요 🔨')
          ),
      actions: has
        ? [{ label: '닫기', kind: 'primary', onClick: () => g.modal.close() }]
        : [
            { label: '만들기', kind: 'primary', disabled: !check.ok, onClick: () => g.buildCart() },
            { label: '닫기', kind: 'ghost', onClick: () => g.modal.close() },
          ],
    };
  }
}
