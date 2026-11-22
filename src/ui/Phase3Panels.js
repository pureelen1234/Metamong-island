/**
 * Phase3Panels.js — 3단계 화면(텃밭 · 씨앗 고르기 · 섬 업적 · 확대 지도)
 *
 * LifePanels 와 같은 규약: Game 이 돌려받은 {title, subtitle, body, actions} 를 Modal 에
 * 그대로 넘기고, 상태를 바꾸는 일은 Game 의 메서드가 맡는다. 화면 갱신은 같은 패널을
 * 다시 여는 방식(game.openFarm 등 재호출)이다.
 */
import { h } from './dom.js';
import { FARM, ZONES } from '../config.js';
import { CROPS, CROP_ORDER, FARMING, FARM_STAGES, SEED_ORDER, SEEDS } from '../systems/farmData.js';
import { ACH_GROUPS } from '../systems/achievementsData.js';
import { TOOLS } from '../systems/lifeData.js';
import { stageOf } from '../world/Farming.js';

const chip = (text, cls = '') => h('span', { class: `lchip ${cls}` }, text);

export class Phase3Panels {
  constructor(game) {
    this.game = game;
  }

  #bar(pct, cls = '') {
    return h('div', { class: `progress-line ${cls}` }, h('i', { style: { width: `${Math.max(0, Math.min(100, pct))}%` } }));
  }

  /* ── 🌱 텃밭 ──────────────────────────────────────────── */

  /** 밭 한 칸의 지금 상태를 한 줄로 */
  #plotInfo(index) {
    const p = this.game.progress;
    const st = p.plot(index);
    if (!st) return { state: 'empty', label: '씨앗을 심어 보세요', stage: -1, pct: 0, crop: null, st: null };
    const crop = CROPS[st.crop];
    const stage = stageOf(st);
    const pct = Math.round((1 - st.remain / Math.max(1, st.total)) * 100);
    return {
      state: st.remain > 0 ? 'grow' : 'ripe',
      label: st.remain > 0 ? `${FARM_STAGES[stage + 1]} · ${Math.ceil(st.remain)}초` : '수확 가능',
      stage,
      pct,
      crop,
      st,
    };
  }

  #plotButton(index, info) {
    if (info.state === 'empty') {
      const btn = h('button', { class: 'mini farm-btn', type: 'button' }, '🌱 심기');
      btn.addEventListener('click', () => this.game.openSeedPicker(index));
      return btn;
    }
    if (info.state === 'ripe') {
      const btn = h('button', { class: 'mini farm-btn on', type: 'button' }, '🧺 수확');
      btn.addEventListener('click', () => this.game.harvestPlot(index));
      return btn;
    }
    const canWater = info.st.watered < FARMING.maxWater;
    const btn = h(
      'button',
      { class: `mini farm-btn ${canWater ? 'water' : ''}`, type: 'button' },
      canWater ? `💧 물 ${FARMING.maxWater - info.st.watered}` : '💧 끝'
    );
    if (!canWater) btn.disabled = true;
    btn.addEventListener('click', () => this.game.waterPlot(index));
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
        { class: `mini fc-fert ${can ? 'on' : ''}`, type: 'button', 'aria-label': `${index + 1}번 밭에 성장 비료`, title: can ? `성장 비료 ${fert}개` : used >= FARMING.fertilizer.maxPerPlot ? '비료를 다 줬어요' : '비료가 없어요' },
        '🧪'
      );
      if (!can) btn.disabled = true;
      btn.addEventListener('click', () => this.game.fertilizePlot(index));
      row.append(btn);
    }
    return row;
  }

  farm() {
    const p = this.game.progress;
    const can = p.toolInfo('water');
    const planted = p.farmPlots.filter(Boolean).length;
    const ripe = p.farmPlots.filter((st) => st && st.remain <= 0).length;

    const stock = h(
      'div',
      { class: 'chips' },
      ...SEED_ORDER.map((id) => {
        const s = SEEDS[id];
        const n = p.supply(id);
        return chip(`${CROPS[s.crop].icon} ${s.name.replace(' 씨앗', '')} ${n}`, n > 0 ? 'ok' : 'lack');
      })
    );
    const basket = h(
      'div',
      { class: 'chips' },
      ...CROP_ORDER.map((id) => chip(`${CROPS[id].icon} ${CROPS[id].name} ${p.cropCount(id)}`, p.cropCount(id) > 0 ? 'warm' : ''))
    );

    const grid = h('div', { class: 'farm-grid', 'data-cols': String(FARM.cols) });
    for (let i = 0; i < FARM.cols * FARM.rows; i++) {
      const info = this.#plotInfo(i);
      const cell = h(
        'div',
        { class: `farm-cell ${info.state}`, 'data-plot': String(i) },
        h('div', { class: 'fc-head' }, h('span', { class: 'fc-ico' }, info.crop ? info.crop.icon : '·'), h('span', { class: 'fc-name' }, info.crop ? info.crop.name : '빈 밭')),
        h('div', { class: 'fc-stage' }, info.label),
        info.state === 'empty' ? null : this.#bar(info.pct, info.state === 'ripe' ? 'life' : ''),
        this.#plotActions(i, info)
      );
      grid.append(cell);
    }

    const fert = p.supply('fertilizer');
    return {
      title: '🌱 텃밭',
      subtitle: `4×4 경작지 · ${planted}칸 심음${ripe ? ` · ${ripe}칸 수확 가능` : ''}`,
      body: h(
        'div',
        {},
        h('div', { class: 'hint' }, '씨앗을 심하고 물을 주면 남은 시간이 절반으로 줄어요. 다 자란 작물은 텃밭 바구니에 담기고, 자판기 [팔기] 에서 그대로 팔 수 있어요.'),
        h('div', { class: 'section-label' }, '내 씨앗'),
        stock,
        h(
          'button',
          { class: 'btn soft wide', type: 'button', onclick: () => { this.game.life.shopTab = 'buy'; this.game.openVending(); } },
          '🥤 자판기에서 씨앗 사기'
        ),
        h('div', { class: 'section-label' }, '🧪 성장 비료'),
        h(
          'div',
          { class: 'row' },
          h(
            'div',
            {},
            h('div', { class: 'label' }, `보유 ${fert}개`),
            h('div', { class: 'hint' }, `한 칸에 쓰면 성장 단계가 하나 올라가요 · 칸당 최대 ${FARMING.fertilizer.maxPerPlot}번`),
          ),
          h(
            'button',
            { class: 'mini', type: 'button', onclick: () => { this.game.life.shopTab = 'buy'; this.game.openVending(); } },
            '사기'
          )
        ),
        h('div', { class: 'section-label' }, `🧺 수확 바구니 (가방과 따로 담겨요)`),
        basket,
        h('div', { class: 'section-label' }, '경작지'),
        grid,
        h('div', { class: 'section-label' }, '물뿌리개'),
        h(
          'div',
          { class: 'row' },
          h(
            'div',
            {},
            h('div', { class: 'label' }, `${TOOLS.water.icon} 물뿌리개 Lv.${can.level}`),
            h('div', { class: 'hint' }, `한 번에 ${FARMING.canArea[can.level - 1]} · 칸당 기력 ${FARMING.waterStamina}`)
          ),
          h('button', { class: 'mini', type: 'button', onclick: () => this.game.openUpgrade() }, can.maxed ? '최대' : '강화')
        ),
        h('div', { class: 'hint' }, ZONES.find((z) => z.id === 'farm') ? '북서쪽 모서리, 울타리 안이 텃밭이에요. 4×4 16칸까지 심을 수 있어요.' : '')
      ),
      actions: [
        { label: '🏆 업적 보기', kind: 'ghost', onClick: () => this.game.openAchievements() },
        { label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() },
      ],
    };
  }

  /** 빈 밭을 눌렀을 때 — 씨앗 3종 중 고르기 */
  seedPicker(index) {
    const p = this.game.progress;
    const list = h('div', { class: 'seed-list' });
    for (const id of SEED_ORDER) {
      const s = SEEDS[id];
      const crop = CROPS[s.crop];
      const n = p.supply(id);
      const btn = h('button', { class: `mini farm-btn ${n > 0 ? 'on' : ''}`, type: 'button' }, n > 0 ? '심기' : '없음');
      if (n <= 0) btn.disabled = true;
      btn.addEventListener('click', () => this.game.plantPlot(index, s.crop));
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
      title: `🌱 ${index + 1}번 밭에 심기`,
      subtitle: '어떤 씨앗을 심을까요',
      body: h(
        'div',
        {},
        h('div', { class: 'hint' }, '씨앗은 자판기 [사기] 탭에서 삽니다. 우체통의 텃밭 편지에 딸기 씨앗 2개가 동봉되어 있어요.'),
        list,
        h('div', { class: 'hint' }, `지금 기력 ${Math.round(p.stamina)} / 100 · 물주기 한 칸당 ${FARMING.waterStamina}`)
      ),
      actions: [
        { label: '← 텃밭', kind: 'ghost', onClick: () => this.game.openFarm() },
        { label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() },
      ],
    };
  }

  /* ── 🏆 섬 업적 ───────────────────────────────────────── */

  achievements() {
    const p = this.game.progress;
    const rows = p.achRows();
    const unlocked = rows.filter((r) => r.done).length;
    const claimable = rows.filter((r) => r.done && !r.claimed).length;

    const body = h('div', {});
    for (const group of ACH_GROUPS) {
      const list = rows.filter((r) => r.group === group.id);
      if (!list.length) continue;
      body.append(h('div', { class: 'section-label' }, `${group.icon} ${group.name}`));
      const wrap = h('div', { class: 'ach-list' });
      for (const r of list) {
        const btn = h(
          'button',
          { class: `mini ach-claim ${r.done && !r.claimed ? 'on' : ''}`, type: 'button' },
          r.claimed ? '받음' : r.done ? '보상 받기' : `${r.value}/${r.need}`
        );
        if (r.claimed || !r.done) btn.disabled = true;
        btn.addEventListener('click', () => this.game.claimAchievement(r.id));
        wrap.append(
          h(
            'div',
            { class: `ach-row ${r.done ? 'done' : ''} ${r.claimed ? 'claimed' : ''}` },
            h('span', { class: 'aico' }, r.done ? r.icon : '🔒'),
            h(
              'div',
              { class: 'amain' },
              h('div', { class: 'nm' }, r.name),
              this.#bar(r.pct, r.done ? 'life' : ''),
              h('div', { class: 'meta' }, `${r.desc} · 🪙 ${r.reward.coin}${r.reward.star ? ` · ⭐ ${r.reward.star}` : ''}`)
            ),
            btn
          )
        );
      }
      body.append(wrap);
    }

    return {
      title: '🏆 섬 업적',
      subtitle: `${rows.length}종 중 ${unlocked}종 달성${claimable ? ` · 받을 보상 ${claimable}건` : ''}`,
      body,
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }
}
