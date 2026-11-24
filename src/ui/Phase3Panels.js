/**
 * Phase3Panels.js — 3단계 화면(텃밭 · 씨앗 고르기 · 섬 업적 · 확대 지도)
 *
 * 4×4 텃밭은 탭-선택 카드 + 하단 44px 액션 바 + 상단 일괄 버튼([전체 수확]·[전체 물주기]) 구조로
 * 모바일에서도 오터치 없이 편하게 가꿀 수 있다.
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
    this.selectedPlot = 0;
  }

  #bar(pct, cls = '') {
    return h('div', { class: `progress-line ${cls}` }, h('i', { style: { width: `${Math.max(0, Math.min(100, pct))}%` } }));
  }

  /* ── 🌱 텃밭 ──────────────────────────────────────────── */

  /** 밭 한 칸의 지금 상태를 한 줄로 */
  #plotInfo(index) {
    const p = this.game.progress;
    const st = p.plot(index);
    if (!st) return { state: 'empty', label: '빈 밭', stage: -1, pct: 0, crop: null, st: null };
    const crop = CROPS[st.crop];
    const stage = stageOf(st);
    const pct = Math.round((1 - st.remain / Math.max(1, st.total)) * 100);
    return {
      state: st.remain > 0 ? 'grow' : 'ripe',
      label: st.remain > 0 ? `${FARM_STAGES[stage + 1]} · ${Math.ceil(st.remain)}초` : '수확 가능!',
      shortLabel: st.remain > 0 ? `${Math.ceil(st.remain)}초` : '수확!',
      stage,
      pct,
      crop,
      st,
    };
  }

  farm() {
    const p = this.game.progress;
    const totalPlots = FARM.cols * FARM.rows;
    if (this.selectedPlot < 0 || this.selectedPlot >= totalPlots) this.selectedPlot = 0;

    const can = p.toolInfo('water');
    const planted = p.farmPlots.filter(Boolean).length;
    const ripeCount = p.farmPlots.filter((st) => st && st.remain <= 0).length;
    const waterableCount = p.farmPlots.filter((st) => st && st.remain > 0 && st.watered < FARMING.maxWater).length;
    const fert = p.supply('fertilizer');

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

    // 상단 일괄 버튼 바
    const harvestAllBtn = h(
      'button',
      {
        class: `btn ${ripeCount > 0 ? 'primary' : 'ghost'}`,
        type: 'button',
        onclick: () => this.game.harvestAllFarm(),
      },
      `🧺 전체 수확 (${ripeCount})`
    );
    if (ripeCount <= 0) harvestAllBtn.disabled = true;

    const waterAllBtn = h(
      'button',
      {
        class: `btn ${waterableCount > 0 ? 'soft' : 'ghost'}`,
        type: 'button',
        onclick: () => this.game.waterAllFarm(),
      },
      `💧 전체 물주기 (${waterableCount})`
    );
    if (waterableCount <= 0) waterAllBtn.disabled = true;

    const bulkBar = h('div', { class: 'farm-bulk-bar' }, harvestAllBtn, waterAllBtn);

    // 4×4 탭-선택 카드 그리드
    const grid = h('div', { class: 'farm-grid', 'data-cols': String(FARM.cols) });
    for (let i = 0; i < totalPlots; i++) {
      const info = this.#plotInfo(i);
      const isSelected = i === this.selectedPlot;
      const cell = h(
        'button',
        {
          class: `farm-cell ${info.state} ${isSelected ? 'selected' : ''}`,
          type: 'button',
          'data-plot': String(i),
          'aria-pressed': isSelected ? 'true' : 'false',
          'aria-label': `${i + 1}번 밭 ${info.crop ? info.crop.name : '빈 밭'} ${info.label}`,
        },
        h('span', { class: 'fc-num' }, String(i + 1)),
        h('span', { class: 'fc-ico' }, info.crop ? info.crop.icon : '🌱'),
        h('div', { class: 'fc-name' }, info.crop ? info.crop.name : '빈 밭'),
        h('div', { class: 'fc-stage' }, info.shortLabel || info.label),
        info.state === 'empty' ? null : this.#bar(info.pct, info.state === 'ripe' ? 'life' : '')
      );
      cell.addEventListener('click', () => {
        if (this.selectedPlot === i && info.state === 'empty') {
          this.game.openSeedPicker(i);
          return;
        }
        this.selectedPlot = i;
        this.game.openFarm();
      });
      grid.append(cell);
    }

    // 하단 선택 칸 44px 액션 바
    const sel = this.selectedPlot;
    const selInfo = this.#plotInfo(sel);
    const barActions = h('div', { class: 'fab-btns' });

    if (selInfo.state === 'empty') {
      const plantBtn = h(
        'button',
        { class: 'btn primary', type: 'button', onclick: () => this.game.openSeedPicker(sel) },
        '🌱 씨앗 심기'
      );
      barActions.append(plantBtn);
    } else if (selInfo.state === 'ripe') {
      const harvBtn = h(
        'button',
        { class: 'btn primary', type: 'button', onclick: () => this.game.harvestPlot(sel) },
        '🧺 수확하기'
      );
      barActions.append(harvBtn);
    } else {
      const canWater = selInfo.st.watered < FARMING.maxWater;
      const waterBtn = h(
        'button',
        { class: `btn ${canWater ? 'primary' : 'ghost'}`, type: 'button', onclick: () => this.game.waterPlot(sel) },
        canWater ? `💧 물주기 (${FARMING.maxWater - selInfo.st.watered})` : '💧 물주기 완료'
      );
      if (!canWater) waterBtn.disabled = true;

      const usedFert = Math.max(0, Math.floor(Number(selInfo.st && selInfo.st.fert) || 0));
      const canFert = fert > 0 && usedFert < FARMING.fertilizer.maxPerPlot;
      const fertBtn = h(
        'button',
        { class: `btn ${canFert ? 'soft' : 'ghost'}`, type: 'button', onclick: () => this.game.fertilizePlot(sel) },
        usedFert >= FARMING.fertilizer.maxPerPlot ? '🧪 비료 완료' : `🧪 비료 (${fert})`
      );
      if (!canFert) fertBtn.disabled = true;

      barActions.append(waterBtn, fertBtn);
    }

    const actionBar = h(
      'div',
      { class: 'farm-action-bar' },
      h(
        'div',
        { class: 'fab-info' },
        h('span', { class: 'fab-ico' }, selInfo.crop ? selInfo.crop.icon : '🌱'),
        h(
          'div',
          { class: 'fab-text' },
          h('div', { class: 'nm' }, `${sel + 1}번 밭 · ${selInfo.crop ? selInfo.crop.name : '빈 밭'}`),
          h('div', { class: 'meta' }, selInfo.state === 'empty' ? '씨앗을 골라 심어 보세요' : selInfo.label)
        )
      ),
      barActions
    );

    return {
      id: 'farm',
      title: '🌱 텃밭',
      subtitle: `4×4 경작지 · ${planted}칸 심음${ripeCount ? ` · ${ripeCount}칸 수확 가능` : ''}`,
      body: h(
        'div',
        {},
        h('div', { class: 'hint' }, '씨앗을 심고 물을 주면 남은 시간이 절반으로 줄어요. 밭 칸을 눌러 선택한 뒤 아래 버튼으로 편하게 가꿔 보세요.'),
        h('div', { class: 'section-label' }, '한 번에 관리'),
        bulkBar,
        h('div', { class: 'section-label' }, '경작지 (칸을 눌러 선택)'),
        grid,
        actionBar,
        h('div', { class: 'section-label' }, '내 씨앗'),
        stock,
        h(
          'button',
          { class: 'btn soft wide', type: 'button', onclick: () => { this.game.life.shopTab = 'buy'; this.game.openVending(); } },
          '🥤 자판기에서 씨앗·비료 사기'
        ),
        h('div', { class: 'section-label' }, '🧺 수확 바구니 (가방과 따로 담겨요)'),
        basket,
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
      id: `seed_picker_${index}`,
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
      id: 'achievements',
      title: '🏆 섬 업적',
      subtitle: `${rows.length}종 중 ${unlocked}종 달성${claimable ? ` · 받을 보상 ${claimable}건` : ''}`,
      body,
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }
}
