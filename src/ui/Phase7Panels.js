/**
 * Phase7Panels.js — 7단계 화면(하우징 가구 · 원정 지도 · 원정 결과 · 도움말)
 *
 * 다른 패널과 같은 규약: Game 이 돌려받은 {title, subtitle, body, actions} 를 Modal 에
 * 그대로 넘기고, 상태를 바꾸는 일은 Game 의 메서드가 맡는다.
 */
import { h } from './dom.js';
import { FURNITURE, FURNITURE_ORDER, FLOOR_FURNITURE, ROOM, WALL_FURNITURE, WALL_NAMES } from '../systems/homeData.js';
import { EXPEDITION, EXPEDITION_RESOURCES, SITE_ORDER, ranToday, siteOf } from '../systems/expeditionData.js';
import { helpSections } from '../systems/tutorialData.js';
import { ITEMS } from '../systems/items.js';
import { STRUCTURES } from '../systems/defenseData.js';

/** 재료 이름 — 가방·특산·원정 어디에 있든 같은 이름을 쓴다 */
const matName = (id) => (ITEMS[id] ? ITEMS[id].name : EXPEDITION_RESOURCES[id] ? EXPEDITION_RESOURCES[id].name : id);
const matIcon = (id) => (ITEMS[id] ? ITEMS[id].icon : EXPEDITION_RESOURCES[id] ? EXPEDITION_RESOURCES[id].icon : '❔');

export class Phase7Panels {
  constructor(game) {
    this.game = game;
    this.helpTab = 'basic';
  }

  #chips(cost, have) {
    return h(
      'div',
      { class: 'chips' },
      ...Object.entries(cost).map(([id, n]) => {
        const owned = id === 'coin' ? this.game.progress.coins : have(id);
        return h('span', { class: `lchip ${owned >= n ? 'ok' : 'lack'}` }, `${id === 'coin' ? '🪙' : matIcon(id)} ${matName(id)} ${n} (${owned})`);
      })
    );
  }

  /* ── 🏠 가구 목록 ───────────────────────────────────── */

  furniture() {
    const g = this.game;
    const home = g.home;
    const have = (id) => g.progress.materialCount(id);
    const ownedRows = h('div', { class: 'furn-list' });
    const ownedIds = FURNITURE_ORDER.filter((id) => home.ownedCount(id) > 0);
    if (!ownedIds.length) {
      ownedRows.append(h('div', { class: 'hint' }, '아직 가진 가구가 없어요 — 아래에서 하나 만들어 보세요.'));
    }
    for (const id of ownedIds) {
      const f = FURNITURE[id];
      const n = home.ownedCount(id);
      const btn = h('button', { class: 'mini on', type: 'button' }, '놓기');
      btn.addEventListener('click', () => g.placeFurniture(id));
      ownedRows.append(
        h(
          'div',
          { class: 'furn-row' },
          h('span', { class: 'furn-ico' }, f.icon),
          h(
            'div',
            { class: 'furn-main' },
            h('div', { class: 'nm' }, `${f.name} ×${n}`),
            h('div', { class: 'meta' }, `${f.kind === 'wall' ? `벽면 · ${WALL_NAMES.back}부터` : f.flat ? '바닥(눕는)' : '바닥'} · ${f.kind === 'wall' ? '벽 가까이 놓으면 붙어요' : '탭한 자리에 놓여요'}`)
          ),
          btn
        )
      );
    }

    const craftRows = h('div', { class: 'furn-list' });
    for (const id of FURNITURE_ORDER) {
      const f = FURNITURE[id];
      const lack = Object.entries(f.cost).filter(([k, n]) => (k === 'coin' ? g.progress.coins : have(k)) < n);
      const btn = h('button', { class: `mini ${lack.length ? '' : 'on'}`, type: 'button' }, lack.length ? '재료 부족' : '제작');
      if (lack.length) btn.disabled = true;
      btn.addEventListener('click', () => g.craftFurniture(id));
      craftRows.append(
        h(
          'div',
          { class: 'furn-row' },
          h('span', { class: 'furn-ico' }, f.icon),
          h(
            'div',
            { class: 'furn-main' },
            h('div', { class: 'nm' }, `${f.name} · 보유 ${home.ownedCount(id)}`),
            h('div', { class: 'meta' }, f.desc),
            this.#chips(f.cost, have)
          ),
          btn
        )
      );
    }

    return {
      title: '🛋️ 가구 고르기',
      subtitle: `실내 ${ROOM.width}×${ROOM.depth} · 바닥 ${FLOOR_FURNITURE.length}종 · 벽면 ${WALL_FURNITURE.length}종`,
      body: h(
        'div',
        {},
        h('div', { class: 'section-label' }, `보유 가구 (${ownedIds.reduce((a, id) => a + home.ownedCount(id), 0)}개)`),
        ownedRows,
        h('div', { class: 'section-label' }, '공방 제작'),
        craftRows,
        h('div', { class: 'hint' }, '가구를 고르면 방에 유령 가구가 나타나요. 화면을 탭해 자리를 잡고 [놓기]. [🔄 회전] 은 바닥 가구 45°, 벽면 가구는 벽을 옮겨요.')
      ),
      actions: [
        { label: '닫기', kind: 'primary', onClick: () => g.modal.close() },
      ],
    };
  }

  /* ── 🧭 원정 지도 ───────────────────────────────────── */

  expedition() {
    const g = this.game;
    const p = g.progress;
    const done = ranToday(p, g.state.day);
    const cards = h('div', { class: 'exp-site-list' });
    for (const id of SITE_ORDER) {
      const site = siteOf(id);
      const resources = site.resourceIds.map((rid) => EXPEDITION_RESOURCES[rid]);
      const btn = h('button', { class: `mini ${done ? '' : 'on'}`, type: 'button' }, done ? '오늘 완료' : '출발');
      if (done) btn.disabled = true;
      btn.addEventListener('click', () => g.startExpedition(id));
      cards.append(
        h(
          'div',
          { class: 'exp-site' },
          h('span', { class: 'exp-ico' }, site.icon),
          h(
            'div',
            { class: 'exp-main' },
            h('div', { class: 'nm' }, `${site.name}`),
            h('div', { class: 'meta' }, `${site.sub} · 채집 자리 ${site.nodes.length}곳`),
            h(
              'div',
              { class: 'chips' },
              ...resources.map((r) => h('span', { class: 'lchip' }, `${r.icon} ${r.name} ${p.expeditionCount(r.id)}`))
            ),
            h('div', { class: 'meta' }, site.hint)
          ),
          btn
        )
      );
    }

    const basketIds = Object.keys(EXPEDITION_RESOURCES).filter((id) => p.expeditionCount(id) > 0);

    return {
      title: '🧭 원정 의뢰판',
      subtitle: `${EXPEDITION.perDay}일 ${EXPEDITION.duration}초 · 기력 ${EXPEDITION.entryStamina}/${EXPEDITION.harvestStamina} · 본섬에 없는 자원`,
      body: h(
        'div',
        {},
        h(
          'div',
          { class: 'row' },
          h(
            'div',
            {},
            h('div', { class: 'label' }, done ? '오늘 원정은 마쳤어요' : '오늘 아직 다녀오지 않았어요'),
            h('div', { class: 'hint' }, done ? `Day ${g.state.day} 원정 완료 — 다음 Day 에 다시 열려요` : `Day ${g.state.day} · 한 번 떠나면 제한 시간 ${EXPEDITION.duration}초`)
          ),
          h('span', { class: 'hint' }, `💪 ${Math.round(p.stamina)} / 100`)
        ),
        cards,
        h('div', { class: 'section-label' }, '원정 바구니'),
        basketIds.length
          ? h('div', { class: 'chips' }, ...basketIds.map((id) => h('span', { class: 'lchip ok' }, `${EXPEDITION_RESOURCES[id].icon} ${EXPEDITION_RESOURCES[id].name} ${p.expeditionCount(id)}`)))
          : h('div', { class: 'hint' }, '아직 비어 있어요. 원정지에서 자원을 탭해 캐 오세요.'),
        h('div', { class: 'section-label' }, '원정 자원으로 만드는 상위 포탑'),
        h(
          'div',
          { class: 'chips' },
          ...['flame_turret', 'ice_turret'].map((kind) => {
            const s = STRUCTURES[kind];
            return h('span', { class: 'lchip warm' }, `${s.icon} ${s.name} · 공격 ${s.damage} · ${s.cooldown}초`);
          })
        ),
        h('div', { class: 'hint' }, '원정 자원은 가방 칸을 차지하지 않고 원정 바구니에 담겨요. 공방 [방어 제작] 에서 화염·얼음 포탑을 만들 수 있어요.')
      ),
      actions: [{ label: '닫기', kind: 'primary', onClick: () => g.modal.close() }],
    };
  }

  /* ── 원정 결과 ──────────────────────────────────────── */

  expeditionResult(res) {
    const g = this.game;
    const site = res && res.site ? siteOf(res.site) : null;
    const entries = res ? Object.entries(res.collected) : [];
    const chips = entries.map(([id, n]) => {
      const r = EXPEDITION_RESOURCES[id] || { icon: '❔', name: id };
      return h('span', { class: 'lchip ok' }, `${r.icon} ${r.name} ${n}`);
    });
    return {
      title: `${site ? site.icon : '🧭'} 원정 귀환`,
      subtitle: res && res.reason === 'timeout' ? '제한 시간이 다 되어 자동으로 돌아왔어요' : '챙긴 자원을 바구니에 담았어요',
      body: h(
        'div',
        {},
        h(
          'div',
          { class: 'row' },
          h('div', {}, h('div', { class: 'label' }, site ? site.name : '원정지'), h('div', { class: 'hint' }, `캔 자리 ${res ? res.harvested : 0}곳 · 가져온 자원 ${res ? res.total : 0}개`)),
          h('span', { class: 'hint' }, `Day ${g.state.day}`)
        ),
        entries.length ? h('div', { class: 'chips' }, ...chips) : h('div', { class: 'hint' }, '아무것도 캐지 못했어요 — 다음엔 자원을 탭해 캐 보세요.'),
        h('div', { class: 'section-label' }, '원정 바구니'),
        h(
          'div',
          { class: 'chips' },
          ...Object.keys(EXPEDITION_RESOURCES)
            .filter((id) => g.progress.expeditionCount(id) > 0)
            .map((id) => h('span', { class: 'lchip' }, `${EXPEDITION_RESOURCES[id].icon} ${EXPEDITION_RESOURCES[id].name} ${g.progress.expeditionCount(id)}`))
        ),
        h('div', { class: 'hint' }, '다음 원정은 다음 Day 에 열려요. 상위 포탑은 공방 [방어 제작] 에서 만들 수 있어요.')
      ),
      actions: [
        { label: '🛡️ 방어 제작', kind: 'ghost', onClick: () => g.openDefenseCraft() },
        { label: '닫기', kind: 'primary', onClick: () => g.modal.close() },
      ],
    };
  }

  /* ── 📖 도움말 ──────────────────────────────────────── */

  help() {
    const g = this.game;
    const sections = helpSections();
    const active = sections.find((s) => s.id === this.helpTab) || sections[0];
    const bar = h('div', { class: 'tabbar help-tabs' });
    for (const s of sections) {
      const btn = h('button', { class: `tab ${s.id === active.id ? 'on' : ''}`, type: 'button', 'data-tab': s.id }, `${s.icon} ${s.title}`);
      btn.addEventListener('click', () => {
        this.helpTab = s.id;
        g.openHelp();
      });
      bar.append(btn);
    }
    const rows = h('div', { class: 'help-rows' });
    for (const r of active.rows) {
      rows.append(h('div', { class: 'help-row' }, h('div', { class: 'k' }, r.k), h('div', { class: 'v' }, r.v)));
    }
    return {
      title: '📖 게임 도움말',
      subtitle: '모든 수치는 지금 게임 코드에서 그대로 읽어 와요',
      body: h(
        'div',
        {},
        bar,
        rows,
        h('div', { class: 'hint' }, '튜토리얼을 다시 보고 싶으면 [🔄 처음부터 다시 보기] 를 눌러요.')
      ),
      actions: [
        { label: '🔄 처음부터 다시 보기', kind: 'ghost', onClick: () => g.restartTutorial() },
        { label: '닫기', kind: 'primary', onClick: () => g.modal.close() },
      ],
    };
  }
}
