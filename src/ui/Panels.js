/**
 * Panels.js — 가방 · 창고 · 복구 · 우체통 모달의 화면
 *
 * Game 은 이 클래스가 돌려주는 {title, subtitle, body, actions} 를 그대로 Modal 에 넘긴다.
 * 버튼을 누른 뒤 화면을 갱신할 때는 같은 패널을 다시 열면 되고(game.openX 재호출),
 * 재료 이동·열매 먹기 같은 실제 상태 변경은 Game 의 메서드가 맡는다.
 */
import { h } from './dom.js';
import { LANDMARKS } from '../config.js';
import { BAG, BUILD_NOTES, FORAGE_ITEM_ORDER, ITEMS, ITEM_GROUPS, ITEM_ORDER, RECIPES } from '../systems/items.js';
import { LETTERS } from '../systems/letters.js';
import { itemIcon, itemName } from '../systems/lifeData.js';

const name = (id) => (ITEMS[id] ? ITEMS[id].name : itemName(id));
const icon = (id) => (ITEMS[id] ? ITEMS[id].icon : itemIcon(id));

export class Panels {
  constructor(game) {
    this.game = game;
  }

  /* ── 가방 ─────────────────────────────────────────────── */

  bag() {
    const inv = this.game.progress.inventory;
    const grid = h('div', { class: 'bag-grid' });
    for (let i = 0; i < inv.slots; i++) {
      const slot = inv.bag[i];
      const cell = h(
        'div',
        { class: `bag-slot ${slot ? 'filled' : 'empty'} ${slot && slot.id === 'berry' ? 'tap' : ''}` },
        h('span', { class: 'ico' }, slot ? ITEMS[slot.id].icon : '·'),
        slot ? h('span', { class: 'n' }, String(slot.n)) : null,
        slot ? h('span', { class: 'nm' }, name(slot.id)) : null
      );
      if (slot && slot.id === 'berry') {
        cell.addEventListener('click', () => this.game.eatBerry());
      }
      grid.append(cell);
    }

    const berries = inv.count('berry');
    const eatRow =
      berries > 0
        ? h(
            'button',
            { class: 'btn soft wide', type: 'button', onclick: () => this.game.eatBerry() },
            `🍓 열매 먹기  ·  기력 +30  (${berries}개)`
          )
        : h('div', { class: 'hint' }, '열매가 없어요 — 온전한 나무 밑에 가끔 떨어져요 🍓');

    const p = this.game.progress;
    // 6단계: 재료가 많아져 종류별로 묶어 보여 준다. 특산물은 가방이 아니라 특산 바구니에서.
    const basicRows = ITEM_GROUPS.find((g) => g.id === 'basic').items.map((id) => ({ id, n: inv.count(id) + inv.stored(id) }));
    const forageRows = FORAGE_ITEM_ORDER.map((id) => ({ id, n: p.forageCount(id) }));

    const body = h(
      'div',
      {},
      h('div', { class: 'hint' }, `가방 ${inv.usedSlots()}/${inv.slots}칸 · 담긴 재료 ${inv.totalItems()}개 · 한 칸에 ${BAG.stack}개까지`),
      grid,
      h('div', { class: 'section-label' }, '🧺 기본 재료 (가방 + 창고)'),
      h(
        'div',
        { class: 'chips' },
        ...basicRows.map((r) => h('span', { class: `lchip ${r.n > 0 ? 'ok' : ''}` }, `${ITEMS[r.id].icon} ${ITEMS[r.id].name} ${r.n}`))
      ),
      h('div', { class: 'section-label' }, '🐚 특산 바구니 (가방 칸을 차지하지 않아요)'),
      h(
        'div',
        { class: 'chips' },
        ...forageRows.map((r) =>
          h('span', { class: `lchip ${r.n > 0 ? 'warm' : ''}` }, `${ITEMS[r.id].icon} ${ITEMS[r.id].name} ${r.n}`)
        )
      ),
      h('div', { class: 'hint' }, '해변(🐚 조개·소라·유목) · 숲(🍄 송이버섯·도토리·꿀) · 광맥(🔶 구리광석·💎 수정)에서 주운 것은 특산 바구니에 모여요. 가방이 꽉 차도 특산물은 따로 담겨요.'),
      h('div', { class: 'section-label' }, '쓰기'),
      eatRow,
      h('div', { class: 'section-label' }, '재료가 가득 차면'),
      h('div', { class: 'hint' }, '공방의 창고에 맡겨 두세요. 가방이 넘치면 그 자리에 잠깐 내려놓게 돼요.')
    );

    return {
      id: 'bag',
      title: '🎒 가방',
      subtitle: '채집한 재료와 열매가 여기에 담겨요',
      body,
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }

  /* ── 공방 창고 ────────────────────────────────────────── */

  storage() {
    const inv = this.game.progress.inventory;
    const bagRows = inv.bagEntries();
    const storeRows = inv.storageEntries();

    const row = (entry, dir) => {
      const isOut = dir === 'out';
      const move = (amt) => (isOut ? this.game.moveToStorage(entry.id, amt) : this.game.moveFromStorage(entry.id, amt));
      return h(
        'div',
        { class: 'store-row' },
        h('span', { class: 'ico' }, icon(entry.id)),
        h('span', { class: 'nm' }, name(entry.id)),
        h('span', { class: 'n' }, String(entry.n)),
        h('button', { class: 'mini', type: 'button', 'aria-label': `1개 ${isOut ? '창고로' : '가방으로'}`, onclick: () => move(1) }, isOut ? '→1' : '←1'),
        h('button', { class: 'mini', type: 'button', 'aria-label': `전부 ${isOut ? '창고로' : '가방으로'}`, onclick: () => move('all') }, isOut ? '→전체' : '←전체')
      );
    };

    const groupLabel = { basic: '🧺 기본 재료', beach: '🐚 해변', forest: '🍄 숲', ore: '💎 광물' };
    const grouped = (entries, dir) => {
      const box = h('div', {});
      for (const group of ITEM_GROUPS) {
        const list = entries.filter((e) => group.items.includes(e.id));
        if (!list.length) continue;
        box.append(h('div', { class: 'section-label' }, groupLabel[group.id] || group.name));
        box.append(h('div', { class: 'store-list' }, ...list.map((e) => row(e, dir))));
      }
      return box;
    };

    const body = h(
      'div',
      {},
      h('div', { class: 'hint' }, '1 은 하나씩, 전체 는 그 재료를 전부 옮겨요 — 오른쪽은 창고로, 왼쪽은 가방으로.'),
      h('div', { class: 'section-label' }, `🎒 가방 → 📦 창고  (${inv.usedSlots()}/${inv.slots}칸)`),
      bagRows.length ? grouped(bagRows, 'out') : h('div', { class: 'hint' }, '가방이 비어 있어요.'),
      h('div', { class: 'section-label' }, '📦 창고 → 🎒 가방'),
      storeRows.length ? grouped(storeRows, 'in') : h('div', { class: 'hint' }, '창고가 비어 있어요. 모아 둔 재료가 여기 쌓여요.')
    );

    return {
      id: 'storage',
      title: '📦 공방 창고',
      subtitle: '대량으로 모아 두고, 필요할 때 가방으로 꺼내요',
      body,
      actions: [
        { label: '건물 복구 보기', kind: 'ghost', onClick: () => this.game.openBuild('workshop') },
        { label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() },
      ],
    };
  }

  /* ── 건물 복구 ────────────────────────────────────────── */

  build(lmId) {
    const lm = LANDMARKS.find((l) => l.id === lmId) || LANDMARKS[0];
    const st = this.game.progress.building(lm.id);
    const recipe = RECIPES[lm.id] || {};
    const inv = this.game.progress.inventory;

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
          h('div', { class: 'sub' }, `가방 ${have}개 · 창고 ${this.game.progress.inventory.stored(id)}개`)
        ),
        h('span', { class: `need ${have + (st.invested[id] || 0) >= need ? 'ok' : 'lack'}` }, `${put}/${need}`)
      );
    });

    const body = st.done
      ? h(
          'div',
          {},
          h('div', { class: 'done-banner' }, '✨ 복구 완료', h('div', { class: 'sub' }, BUILD_NOTES[lm.id] || '')),
          h('div', { class: 'hint' }, lm.id === 'lighthouse' ? '밤이 되면 등대에 따뜻한 불이 켜져요.' : '이제 섬의 일부가 되살아났어요.')
        )
      : h(
          'div',
          {},
          h('div', { class: 'hint' }, BUILD_NOTES[lm.id] || ''),
          h('div', { class: 'progress-line' }, h('i', { style: { width: `${pct}%` } })),
          h('div', { class: 'req-list' }, ...rows),
          h('div', { class: 'hint' }, ready ? '재료가 다 모였어요 — [복구 완료!] 를 눌러 주세요.' : '재료를 모아 [재료 투입] 으로 하나씩 넣어요.')
        );

    const actions = [];
    if (lm.id === 'workshop' && st.done) {
      actions.push({ label: '📦 창고 열기', kind: 'ghost', onClick: () => this.game.openStorage() });
    }
    if (!st.done) {
      actions.push({ label: '재료 투입', kind: 'ghost', disabled: !canAdd, onClick: () => this.game.invest(lm.id) });
      actions.push({ label: '복구 완료!', kind: 'primary', disabled: !ready, onClick: () => this.game.completeBuild(lm.id) });
    }
    actions.push({ label: '닫기', kind: st.done || !ready ? 'primary' : 'ghost', onClick: () => this.game.modal.close() });

    return {
      id: `build_${lm.id}`,
      title: `${lm.icon} ${lm.name}`,
      subtitle: st.done ? '이미 복구된 건물이에요' : '재료만 모이면 지금 바로 복구할 수 있어요',
      body,
      actions,
    };
  }

  /** 공방 근처에서 여는 메뉴 */
  workshopMenu() {
    const st = this.game.progress.building('workshop');
    const inv = this.game.progress.inventory;

    const entry = (icon, title, sub, onClick, disabled = false) => {
      const btn = h(
        'button',
        { class: `menu-entry ${disabled ? 'off' : ''}`, type: 'button', ...(disabled ? { disabled: 'disabled' } : {}) },
        h('span', { class: 'mico' }, icon),
        h('div', { class: 'mmain' }, h('div', { class: 'nm' }, title), h('div', { class: 'meta' }, sub)),
        h('span', { class: 'arrow' }, disabled ? '🔒' : '›')
      );
      if (!disabled) btn.addEventListener('click', onClick);
      return btn;
    };

    const body = h(
      'div',
      {},
      h('div', { class: 'hint' }, st.done ? '공방이 열렸어요. 재료를 정리하고, 요리하고, 도구를 손봐요.' : '공방은 아직 낡았어요. 복구하면 창고·요리·도구방이 함께 열려요.'),
      h(
        'div',
        { class: 'row' },
        h('div', {}, h('div', { class: 'label' }, '가방'), h('div', { class: 'hint' }, `${inv.usedSlots()}/${inv.slots}칸 사용 중`)),
        h('span', { class: 'hint' }, `재료 ${inv.totalItems()}개`)
      ),
      h('div', { class: 'section-label' }, '공방 메뉴'),
      h(
        'div',
        { class: 'menu-list' },
        entry('📦', '창고', st.done ? '재료를 맡기고 꺼내요' : '공방을 복구하면 열려요', () => this.game.openStorage(), !st.done),
        entry('🍳', '요리하기', st.done ? '재료와 물고기로 기력을 회복해요' : '공방을 복구하면 열려요', () => this.game.openCooking(), !st.done),
        entry('🪓', '도구 강화', st.done ? '도끼·곡괭이를 Lv.3까지' : '공방을 복구하면 열려요', () => this.game.openUpgrade(), !st.done),
        entry(
          '🛒',
          '리어카 만들기',
          this.game.progress.cartLevel > 0 ? `가방 ${this.game.progress.inventory.slots}칸 사용 중` : `가방 ${BAG.slots}칸 → ${BAG.slots + 8}칸`,
          () => this.game.openCart(),
          !st.done
        ),
        entry(
          '🛡️',
          '방어 제작',
          st.done ? `울타리·포탑·허수아비·경보등 (창고 ${Object.values(this.game.progress.defense.stock).reduce((a, b) => a + b, 0)}개)` : '공방을 복구하면 열려요',
          () => this.game.openDefenseCraft(),
          !st.done
        ),
        entry('🔨', '건물 복구', '섬의 네 곳과 다리를 되살려요', () => this.game.openBuild('workshop'))
      )
    );
    return {
      id: 'workshop_menu',
      title: '🔨 공방',
      subtitle: '재료를 정리하고, 요리하고, 섬을 고치는 곳',
      body,
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }

  /* ── 우체통 ───────────────────────────────────────────── */

  mailbox(letterId) {
    const progress = this.game.progress;
    if (letterId) {
      const letter = LETTERS.find((l) => l.id === letterId);
      if (letter) return this.#letterView(letter, progress);
    }

    const rows = LETTERS.map((letter) => {
      const unread = !progress.isRead(letter.id);
      const claimable = letter.gift && !progress.isClaimed(letter.id);
      return h(
        'button',
        { class: `mail-row ${unread ? 'unread' : ''}`, type: 'button', onclick: () => this.game.openMailbox(letter.id) },
        h('span', { class: 'mail-ico' }, letter.icon),
        h(
          'div',
          { class: 'mail-main' },
          h('div', { class: 'mail-title' }, letter.title),
          h('div', { class: 'mail-from' }, `${letter.from} · ${letter.tag}`)
        ),
        claimable ? h('span', { class: 'mail-gift' }, '🎁') : unread ? h('span', { class: 'mail-dot' }) : null
      );
    });

    const quests = progress.questRows();
    const readyQuest = quests.filter((q) => q.done && !q.claimed).length;

    return {
      id: 'mailbox',
      title: '📬 우체통',
      subtitle: '공지와 편지, 그리고 의뢰와 선물이 있어요',
      body: h(
        'div',
        {},
        h('div', { class: 'section-label' }, `📋 오늘의 의뢰 (Day ${progress.quests.day})${readyQuest ? ` · 보상 ${readyQuest}건` : ''}`),
        this.game.life.questList(),
        h('div', { class: 'section-label' }, '편지'),
        h('div', { class: 'mail-list' }, ...rows)
      ),
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() }],
    };
  }

  #letterView(letter, progress) {
    const claimed = progress.isClaimed(letter.id);
    const giftEl =
      letter.gift &&
      h(
        'div',
        { class: 'gift-box' },
        h('div', { class: 'gift-head' }, claimed ? '🎀 받은 선물' : '🎁 동봉된 선물'),
        h(
          'div',
          { class: 'gift-items' },
          ...Object.entries(letter.gift).map(([id, n]) => h('span', { class: 'gift-chip' }, `${icon(id)} ${name(id)} ${n}`))
        ),
        claimed
          ? h('div', { class: 'hint' }, '가방에 잘 넣어 두었어요.')
          : h('button', { class: 'btn soft wide', type: 'button', onclick: () => this.game.claimGift(letter.id) }, '선물 받기')
      );

    const body = h(
      'div',
      {},
      h('div', { class: 'letter-from' }, `${letter.from} · ${letter.tag}`),
      ...letter.body.map((p) => h('p', { class: 'letter-p' }, p)),
      giftEl
    );

    return {
      id: `mail_${letter.id}`,
      title: `${letter.icon} ${letter.title}`,
      subtitle: '',
      body,
      actions: [
        { label: '← 편지함', kind: 'ghost', onClick: () => this.game.openMailbox() },
        { label: '닫기', kind: 'primary', onClick: () => this.game.modal.close() },
      ],
    };
  }
}
