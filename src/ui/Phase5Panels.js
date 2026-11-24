/**
 * Phase5Panels.js — 5단계 화면(방어 현황 · 슬롯 관리 · 방어 제작 · 결과)
 */
import { h } from './dom.js';
import { DEFENSE, DITTOS, isInvasionDay } from '../config.js';
import { RESULT_TEXT, STRUCTURES, STRUCTURE_NOTES, STRUCTURE_ORDER, CAT_HELP, WEAPONS, supportOf } from '../systems/defenseData.js';
import { ITEMS } from '../systems/items.js';
import { EXPEDITION_RESOURCES } from '../systems/expeditionData.js';

const name = (id) => (ITEMS[id] ? ITEMS[id].name : EXPEDITION_RESOURCES[id] ? EXPEDITION_RESOURCES[id].name : id);
const icon = (id) => (ITEMS[id] ? ITEMS[id].icon : EXPEDITION_RESOURCES[id] ? EXPEDITION_RESOURCES[id].icon : '❔');

export class Phase5Panels {
  constructor(game) {
    this.game = game;
  }

  #bar(pct, cls = '') {
    return h('div', { class: `progress-line ${cls}` }, h('i', { style: { width: `${Math.max(0, Math.min(100, pct))}%` } }));
  }

  #costChips(cost) {
    const have = (id) => this.game.haveMaterial(id);
    return h(
      'div',
      { class: 'chips' },
      ...Object.entries(cost).map(([id, n]) => {
        const owned = have(id);
        return h('span', { class: `lchip ${owned >= n ? 'ok' : 'lack'}` }, `${icon(id)} ${name(id)} ${n} (${owned})`);
      })
    );
  }

  /* ── 🛡️ 방어 현황 ─────────────────────────────────────── */

  defense() {
    const g = this.game;
    const p = g.progress;
    const d = p.defense;
    const wave = g.defense ? g.defense.waveState() : null;
    const support = supportOf(g.state.discovered);
    const evac = g.defense ? { active: g.defense.evac.active, count: g.defense.evacCount } : { active: false, count: 0 };
    const today = isInvasionDay(g.state.day);
    const until = DEFENSE.periodDays - (g.state.day % DEFENSE.periodDays);
    const ran = d.lastRunDay === g.state.day;

    const slots = g.defense ? g.defense.slotsInfo() : [];
    const slotList = h('div', { class: 'df-slot-list' });
    for (const s of slots) {
      slotList.append(
        h(
          'button',
          { class: `df-slot ${s.kind ? 'on' : ''}`, type: 'button', onclick: () => g.openDefenseSlot(s.index) },
          h('span', { class: 'ds-no' }, `${s.index + 1}`),
          h('span', { class: 'ds-ico' }, s.icon),
          h(
            'div',
            { class: 'ds-main' },
            h('div', { class: 'nm' }, s.name),
            h('div', { class: 'meta' }, s.kind ? `${s.side} · 체력 ${s.hp}/${s.hpMax}` : `${s.side} · 비어 있음`)
          ),
          h('span', { class: 'ds-go' }, s.kind ? '관리' : '설치')
        )
      );
    }

    const stockChips = h(
      'div',
      { class: 'chips' },
      ...STRUCTURE_ORDER.map((kind) => {
        const def = STRUCTURES[kind];
        const n = d.stock[kind] || 0;
        return h('span', { class: `lchip ${n > 0 ? 'ok' : 'lack'}` }, `${def.icon} ${def.name} ${n}`);
      })
    );

    const title = today ? '오늘 밤 상륙 예정' : `D-${until} 상륙 예정`;
    const body = h(
      'div',
      {},
      h(
        'div',
        { class: 'df-summary' },
        h('div', { class: 'df-badge' }, '🛡️'),
        h(
          'div',
          { class: 'df-sum-text' },
          h('div', { class: 'nm' }, `Day ${g.state.day} · ${title}`),
          h('div', { class: 'meta' }, `방어 승 ${d.wins} · 패 ${d.losses} · 쓰러뜨린 불청객 ${d.totalDown}`)
        )
      ),
      h(
        'div',
        { class: 'hint' },
        '3일마다 밤, 남쪽 부두로 회색 망토 수집단이 옵니다. 부두~광장 오솔길의 슬롯 5곳에 방어 설비를 세우고, 메타몽을 광장으로 모은 뒤 직접 새총과 물풍선으로 막아 보세요.'
      ),
      h('div', { class: 'section-label' }, '방어 슬롯 5곳'),
      slotList,
      h('div', { class: 'section-label' }, '설비 창고'),
      stockChips,
      h(
        'div',
        { class: 'row' },
        h(
          'div',
          {},
          h('div', { class: 'label' }, `📣 메타몽 대피 ${evac.active ? `${evac.count}/${DITTOS.length}` : '아직'}`),
          h('div', { class: 'hint' }, evac.active ? '광장 안전 울타리 안에 모이고 있어요' : '누르면 섬 곳곳의 메타몽이 광장으로 달려와요')
        ),
        h('button', { class: 'mini', type: 'button', onclick: () => g.gatherDittos() }, evac.active ? '다시 모으기' : '모으기')
      ),
      h('div', { class: 'section-label' }, '모인 메타몽의 변신 보조'),
      h(
        'div',
        { class: 'chips' },
        h('span', { class: `lchip ${support.count > 0 ? 'ok' : ''}` }, `🟣 발견 ${support.count}/${DITTOS.length}`),
        h('span', { class: 'lchip warm' }, `응원 버프 ×${support.power.toFixed(2)}`),
        h('span', { class: 'lchip' }, `🪵 울타리 내구 ×${support.fenceHp.toFixed(2)}`),
        h('span', { class: 'lchip' }, `🟣 가짜 분신 ${support.decoys}`),
        h('span', { class: 'lchip' }, `🍓 탄약 +${support.ammo}`)
      ),
      h(
        'div',
        { class: 'chips' },
        h('span', { class: 'lchip' }, `${CAT_HELP.somi.icon} 솜이 Lv.${p.catRow('somi').level} · ${CAT_HELP.somi.desc}`),
        h('span', { class: 'lchip' }, `${CAT_HELP.ongi.icon} 옹이 Lv.${p.catRow('ongi').level} · ${CAT_HELP.ongi.desc}`)
      ),
      wave
        ? h('div', { class: 'hint' }, `지금 웨이브 진행 중 — 남은 불청객 ${wave.left} · ${Math.ceil(wave.timer)}초`)
        : h('div', { class: 'hint' }, ran ? '오늘 방어전은 이미 마쳤어요. 다음 Day 에 다시 도전할 수 있어요.' : '[지금 방어 시작] 을 누르면 하루에 한 번 바로 방어전을 진행할 수 있어요.')
    );

    const actions = [
      { label: '🛠️ 방어 제작', kind: 'ghost', onClick: () => g.openDefenseCraft() },
      { label: '📣 메타몽 모으기', kind: 'ghost', onClick: () => g.gatherDittos() },
      wave || ran
        ? { label: '닫기', kind: 'primary', onClick: () => g.modal.close() }
        : { label: '🛡️ 지금 방어 시작', kind: 'primary', onClick: () => g.startDefenseNow() },
    ];

    return {
      id: 'defense',
      title: '🛡️ 불청객 방어전',
      subtitle: '3일마다 밤 — 부두에서 올라오는 회색 망토 수집단',
      body,
      actions,
    };
  }

  /* ── 슬롯 관리 ────────────────────────────────────────── */

  slot(index) {
    const g = this.game;
    const d = g.progress.defense;
    const slot = DEFENSE.slots[index];
    const st = g.defense ? g.defense.structureAt(index) : null;

    const head = st
      ? h(
          'div',
          { class: 'df-installed' },
          h('span', { class: 'ico' }, st.def.icon),
          h(
            'div',
            { class: 'main' },
            h('div', { class: 'nm' }, st.def.name),
            h('div', { class: 'meta' }, st.def.effect || ''),
            this.#bar((st.hp / Math.max(1, st.hpMax)) * 100, 'life'),
            h('div', { class: 'hint' }, `체력 ${Math.round(st.hp)} / ${Math.round(st.hpMax)}`)
          )
        )
      : h('div', { class: 'hint' }, '아직 비어 있는 슬롯이에요. 창고의 설비를 골라 세워 주세요.');

    const list = h('div', { class: 'df-pick' });
    for (const kind of STRUCTURE_ORDER) {
      const def = STRUCTURES[kind];
      const n = d.stock[kind] || 0;
      const canMake = Object.entries(def.cost).every(([id, need]) => g.haveMaterial(id) >= need);

      let actionBtn;
      if (n > 0) {
        actionBtn = h('button', { class: `mini ${st ? '' : 'on'}`, type: 'button' }, '설치');
        if (st) actionBtn.disabled = true;
        actionBtn.addEventListener('click', () => g.installStructure(index, kind));
      } else if (canMake) {
        actionBtn = h('button', { class: 'mini up on', type: 'button' }, '제작');
        actionBtn.addEventListener('click', () => g.craftStructure(kind));
      } else {
        actionBtn = h('button', { class: 'mini', type: 'button', disabled: 'disabled' }, '없음');
      }

      list.append(
        h(
          'div',
          { class: 'df-pick-row' },
          h('span', { class: 'ico' }, def.icon),
          h(
            'div',
            { class: 'main' },
            h('div', { class: 'nm' }, `${def.name} · 창고 ${n}`),
            h('div', { class: 'meta' }, def.effect),
            h('div', { class: 'meta' }, `${def.desc}`),
            this.#costChips(def.cost)
          ),
          actionBtn
        )
      );
    }

    const actions = [];
    if (st) actions.push({ label: '회수', kind: 'ghost', onClick: () => g.removeStructure(index) });
    actions.push({ label: '🛡️ 방어 현황', kind: 'ghost', onClick: () => g.openDefense() });
    actions.push({ label: '닫기', kind: 'primary', onClick: () => g.modal.close() });

    return {
      id: `defense_slot_${index}`,
      title: `${index + 1}번 방어 슬롯`,
      subtitle: `부두~광장 오솔길 ${slot.side} — ${st ? st.def.name : '비어 있음'}`,
      body: h(
        'div',
        {},
        head,
        h('div', { class: 'section-label' }, '창고에서 꺼내 설치'),
        list,
        h('div', { class: 'hint' }, '설치는 재료를 쓰지 않아요 — 공방 [방어 제작] 에서 만든 설비를 여기서 꺼내 세웁니다. 회수하면 창고로 돌아와요.')
      ),
      actions,
    };
  }

  /* ── 방어 제작 ───────────────────────────────────────── */

  craft() {
    const g = this.game;
    const p = g.progress;
    const d = p.defense;

    const list = h('div', { class: 'df-pick' });
    for (const kind of STRUCTURE_ORDER) {
      const def = STRUCTURES[kind];
      const lack = Object.entries(def.cost).filter(([id, n]) => g.haveMaterial(id) < n);
      const btn = h('button', { class: `mini ${lack.length ? '' : 'on'}`, type: 'button' }, lack.length ? '재료 부족' : '제작');
      if (lack.length) btn.disabled = true;
      btn.addEventListener('click', () => g.craftStructure(kind));
      list.append(
        h(
          'div',
          { class: 'df-pick-row' },
          h('span', { class: 'ico' }, def.icon),
          h(
            'div',
            { class: 'main' },
            h('div', { class: 'nm' }, `${def.name} · 창고 ${d.stock[kind] || 0}`),
            h('div', { class: 'meta' }, def.effect),
            h('div', { class: 'meta' }, STRUCTURE_NOTES[kind]),
            this.#costChips(def.cost)
          ),
          btn
        )
      );
    }

    return {
      id: 'defense_craft',
      title: '🛠️ 방어 제작',
      subtitle: '재료와 원정 자원으로 만드는 여섯 가지 방어 설비',
      body: h(
        'div',
        {},
        h('div', { class: 'hint' }, '만든 설비는 창고에 담기고, 부두~광장 오솔길의 방어 슬롯 5곳에서 [설치] 합니다. 화염·얼음 포탑은 원정지에서만 나오는 자원(화산 심장석·얼음 결정·고대 톱니·유성 파편)이 들어요.'),
        list,
        h('div', { class: 'section-label' }, '무기'),
        h(
          'div',
          { class: 'chips' },
          h('span', { class: 'lchip ok' }, `${WEAPONS.sling.icon} ${WEAPONS.sling.name} 무제한`),
          h('span', { class: 'lchip warm' }, `${WEAPONS.balloon.icon} ${WEAPONS.balloon.name} 꽃잎 1 → ${WEAPONS.balloon.shots}발`)
        ),
        h('div', { class: 'hint' }, '방어전 중에는 화면 오른쪽에 무기 두 개가 뜹니다. 액션 버튼도 가장 가까운 불청객에게 새총을 쏴요.')
      ),
      actions: [
        { label: '🛡️ 방어 현황', kind: 'ghost', onClick: () => g.openDefense() },
        { label: '닫기', kind: 'primary', onClick: () => g.modal.close() },
      ],
    };
  }

  /* ── 결과 ─────────────────────────────────────────────── */

  result(res) {
    const g = this.game;
    const d = g.progress.defense;
    const text = res.victory ? RESULT_TEXT.victory : RESULT_TEXT.partial;
    const r = res.reward || {};
    const stat = (label, value) =>
      h('div', { class: 'row' }, h('div', { class: 'label' }, label), h('span', { class: 'hint' }, String(value)));

    return {
      id: 'defense_result',
      title: `${text.icon} ${text.title}`,
      subtitle: text.sub,
      body: h(
        'div',
        {},
        h('div', { class: 'df-result' }, h('span', { class: 'ico' }, text.icon), h('div', { class: 'main' }, h('div', { class: 'nm' }, `Day ${res.day} 방어전`), h('div', { class: 'meta' }, res.victory ? '수집단이 빈손으로 돌아갔어요' : '건물과 작물은 그대로예요'))),
        stat('불청객', `${res.total}명 중 ${res.down}명 쓰러뜨림`),
        stat('포탑 명중', `${res.turretHits}회`),
        stat('솜이 냥냥 펀치', `${res.somiHits}회`),
        stat('옹이 할퀴기', `${res.ongiHits}회`),
        stat('빼앗긴 코인', `${res.stolen}개`),
        res.victory
          ? h(
              'div',
              {},
              h('div', { class: 'section-label' }, '보상'),
              h(
                'div',
                { class: 'chips' },
                h('span', { class: 'lchip warm' }, `🪙 ${r.coin}`),
                h('span', { class: 'lchip warm' }, `⭐ ${r.star}`),
                r.seedCount ? h('span', { class: 'lchip ok' }, `🌱 희귀 씨앗 ${r.seedCount}`) : null
              ),
              h('div', { class: 'hint' }, '다음 상륙까지 3일 — 슬롯을 손보거나 더 튼튼하게 만들어 두세요.')
            )
          : h('div', { class: 'hint' }, '코인 일부만 챙겨 갔어요. 다음엔 울타리와 포탑을 슬롯에 세워 두면 훨씬 수월해요.'),
        h('div', { class: 'hint' }, `누적 — 방어 승 ${d.wins} · 패 ${d.losses} · 포탑 명중 ${d.turretHits}`)
      ),
      actions: [
        { label: '🛡️ 슬롯 관리', kind: 'ghost', onClick: () => g.openDefense() },
        { label: '닫기', kind: 'primary', onClick: () => g.modal.close() },
      ],
    };
  }
}
