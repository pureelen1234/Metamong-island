/**
 * tutorialData.js — 7단계 튜토리얼(단계별 안내) + 도움말(실제 수치)의 단일 원천
 *
 * 원칙: 화면에 적히는 수치는 전부 게임 코드의 상수를 그대로 읽어 만든다.
 *   · 나무·바위 리젠 60~90초, 새 채집지 리젠은 GATHER_TYPES.respawn
 *   · 작물 성장 시간은 CROPS[].grow
 *   · 설비 체력·공격력은 STRUCTURES
 *   · 불청객 주기 3일(DEFENSE.periodDays) · 웨이브 길이(WAVE.duration) · 편성 수(wavePlan)
 *   · 낚시 입질 창(FISHING.biteWindow) 등
 * 그래서 밸런스를 고치면 안내 문구도 같이 따라간다 — 하드코딩으로 어긋날 일이 없다.
 */
import { DAY_SECONDS, DEFENSE, GATHER_TYPES, PHASES, PLAYER, WELCOME } from '../config.js';
import { HARVEST, STAMINA } from './items.js';
import { CROPS, FARMING } from './farmData.js';
import { FISH, FISHING, SHOP, TOOLS } from './lifeData.js';
import { STRUCTURES, STRUCTURE_ORDER, WAVE, WEAPONS, wavePlan } from './defenseData.js';
import { EXPEDITION, EXPEDITION_ORDER, EXPEDITION_RESOURCES, EXPEDITION_SITES, SITE_ORDER } from './expeditionData.js';
import { FURNITURE, FURNITURE_ORDER, ROOM, WALL_FURNITURE } from './homeData.js';

const sec = (n) => `${Math.round(n * 10) / 10}초`;
const days = (n) => `${n}일`;

/* ── 튜토리얼 단계 ────────────────────────────────────────── */

/**
 * 각 단계: 실제 행동을 하면 다음으로 넘어간다(check). 건너뛰기·다시 보기 가능.
 * body 는 함수 — 게임 상수를 읽어 그때그때 문구를 만든다.
 */
export const TUTORIAL_STEPS = [
  {
    id: 'mail',
    icon: '📬',
    title: '우체통부터 열어 봐요',
    body: () =>
      `우체통에는 섬에 도착한 편지와 선물이 있어요. 선물을 받으면 첫 코인이 생겨요. 첫 3단 미션(웰컴)은 단계마다 코인 +${WELCOME.reward} 를 줍니다.`,
    hint: '📬 우체통 → 편지의 [선물 받기]',
    check: (g) => g.progress.mailbox.claimed.length > 0,
  },
  {
    id: 'chop',
    icon: '🪓',
    title: '나무를 두드려 통나무 모으기',
    body: () =>
      `나무 한 그루는 ${HARVEST.tree.hits[0]}~${HARVEST.tree.hits[1]}번 두드리면 쓰러져요. 한 번에 기력 ${STAMINA.hitTree} 이 들고, 통나무가 1~3개 나옵니다. 쓰러진 나무는 ${sec(60)}~${sec(90)} 뒤에 다시 자라요. 바위는 ${HARVEST.rock.hits[0]}~${HARVEST.rock.hits[1]}번, 기력 ${STAMINA.hitRock} — 돌 1~3개와 가끔 별조각이 나옵니다.`,
    hint: '나무 앞에서 [베기] — 기력이 떨어지면 열매를 먹어요',
    check: (g) => g.progress.count('tree') >= 1 || g.progress.count('chop') >= 2,
  },
  {
    id: 'ditto',
    icon: '🔍',
    title: '어설픈 메타몽 찾기',
    body: () =>
      '섬 곳곳에 변신에 실패한 메타몽 7마리가 숨어 있어요. 가까이 다가가 [살펴보기] 로 도감에 등록하면, 방어전에서 응원 버프(+5%)와 분신·탄약 보조를 받아요.',
    hint: '광장·꽃밭·과수원에서 2마리만 찾아보세요 (도감 📔)',
    check: (g) => g.state.discovered.length >= 2,
  },
  {
    id: 'workshop',
    icon: '🔨',
    title: '공방 복구하기',
    body: () =>
      '공방은 통나무 4 · 돌 3 이면 Day 1에도 바로 복구돼요. 복구하면 창고·요리·도구 강화가 열리고, 그다음부터 모든 제작이 여기서 시작됩니다.',
    hint: '지도 🏗️ 건축 → 공방 → [재료 넣기] → [복구]',
    check: (g) => !!(g.progress.building('workshop') && g.progress.building('workshop').done),
  },
  {
    id: 'farm',
    icon: '🌱',
    title: '씨앗 심고 물 주기',
    body: () => {
      const strawberry = CROPS.strawberry;
      return `자판기에서 씨앗을 사서 텃밭 4×4(16칸)에 심어요. 딸기는 ${sec(strawberry.grow)}, 방울토마토는 ${sec(CROPS.tomato.grow)}, 황금호박은 ${sec(CROPS.pumpkin.grow)} 만에 익어요. 물을 한 번 줄 때마다 남은 시간이 절반(${FARMING.waterHalve * 100}%)으로 줄고, 한 칸에 ${FARMING.maxWater}번까지 줄 수 있어요.`;
    },
    hint: '🌱 텃밭 → 빈 칸 [심기] → [물주기]',
    check: (g) => g.progress.count('plant') >= 1 && g.progress.count('water') >= 1,
  },
  {
    id: 'fish',
    icon: '🎣',
    title: '낚시 한 번',
    body: () =>
      `부두(바다)나 강가(민물)에서 찌를 던져요. 1회에 기력 ${FISHING.stamina} 이 들고, 입질이 오면 ${FISHING.biteWindow}초 안에 화면을 탭해야 잡혀요. 물고기는 ${Object.keys(FISH).length - 1}종 + 별조각 1종 — 아침·낮·노을·밤에 따라 물리는 종이 달라집니다.`,
    hint: '부두를 복구하고 [낚시하기] → 입질 순간 탭!',
    check: (g) => (g.progress.fishing.catches || 0) >= 1,
  },
  {
    id: 'bridge',
    icon: '🌉',
    title: '다리를 놓아 북쪽으로',
    body: () =>
      '중앙 강이 섬을 가르고 있어요. 통나무 6 · 돌 4 를 모아 다리를 놓으면 북쪽 개척권(숲·채석장·논)으로 걸어서 건널 수 있어요. 논에서는 볍씨를 심고 쌀을 거둬요.',
    hint: '강 중앙 다리 앞에서 [다리 놓기]',
    check: (g) => g.progress.bridgeBuilt,
  },
  {
    id: 'home',
    icon: '🏠',
    title: '내 집에 들어가 꾸미기',
    body: () =>
      `광장 북동쪽 집 문 앞에서 [들어가기]. 가구는 ${FURNITURE_ORDER.length}종이고, 바닥 가구는 [회전] 한 번에 ${Math.round((ROOM.rotateStep * 180) / Math.PI)}°씩 돌아가요. 벽면 가구(${WALL_FURNITURE.length}종 — 액자·선반·창문·벽등)는 벽 가까이 놓으면 벽에 붙고, [회전] 으로 왼쪽 벽·뒤쪽 벽·오른쪽 벽을 옮겨 다녀요.`,
    hint: '🏠 집 안 → [🛋️ 가구] → 가구 고르기 → 화면 탭 → [놓기]',
    check: (g) => g.progress.home && g.progress.home.placed && g.progress.home.placed.length >= 1,
  },
  {
    id: 'expedition',
    icon: '🧭',
    title: '원정 다녀오기',
    body: () =>
      `하루 한 번(게임 Day 기준) 원정지 ${SITE_ORDER.length}곳 중 한 곳에 다녀올 수 있어요. 출발에 기력 ${EXPEDITION.entryStamina}, 한 자리 캐기에 ${EXPEDITION.harvestStamina}, 제한 시간 ${EXPEDITION.duration}초. 원정 전용 자원 ${EXPEDITION_ORDER.length}종은 본섬에서는 절대 나오지 않아요.`,
    hint: '🧭 원정 → 원정지 고르기 → [출발] → 자원 탭 → [귀환]',
    check: (g) => (g.progress.expedition && g.progress.expedition.runs >= 1) || false,
  },
  {
    id: 'defense',
    icon: '🛡️',
    title: '방어 준비와 상위 포탑',
    body: () =>
      `${days(DEFENSE.periodDays)}마다 밤, 부두로 회색 망토 수집단이 옵니다. 웨이브는 ${WAVE.duration}초 동안 ${wavePlan(1).length}명에서 시작해 날이 갈수록 최대 ${wavePlan(30).length}명까지 늘어요. 물풍선 포탑(공격 ${STRUCTURES.turret.damage} · ${STRUCTURES.turret.cooldown}초)보다 강한 화염 포탑(공격 ${STRUCTURES.flame_turret.damage} · ${STRUCTURES.flame_turret.cooldown}초)과 얼음 포탑(공격 ${STRUCTURES.ice_turret.damage} · 둔화)은 원정 자원으로만 만들 수 있어요.`,
    hint: '🛡️ 방어 → [방어 제작] → 슬롯 5곳에 [설치]',
    check: (g) => !!(g.progress.defense && g.progress.defense.slots && g.progress.defense.slots.some(Boolean)),
  },
];

export const TUTORIAL_TOTAL = TUTORIAL_STEPS.length;

/* ── 도움말(게임 정보) 화면 ──────────────────────────────── */

/** 행 하나: { k: 항목, v: 값 } */
const row = (k, v) => ({ k, v });

/**
 * 도움말 탭 — 모든 값은 위 상수에서 계산한다.
 * 화면(Phase7Panels.help)은 이 배열을 그대로 그린다.
 */
export function helpSections() {
  const phaseRows = PHASES.map((p) => `${p.label} ${sec(p.end - p.start)}`).join(' · ');
  const defendRows = STRUCTURE_ORDER.map((id) => {
    const s = STRUCTURES[id];
    return row(
      `${s.icon} ${s.name}`,
      `체력 ${s.hp}${s.damage ? ` · 공격 ${s.damage} · 사거리 ${s.range} · ${s.cooldown}초` : s.boost ? ` · 포탑 가속 ×${s.boost} · 사거리 ${s.range}` : s.taunt ? ` · 어그로 반경 ${s.taunt}` : ' · 진격 차단'}`
    );
  });

  return [
    {
      id: 'basic',
      icon: '🌿',
      title: '기본',
      rows: [
        row('하루 길이', `${Math.round(DAY_SECONDS / 60)}분 실시간 (${phaseRows})`),
        row('이동 속도', `${PLAYER.speed} /초 · 조이스틱 또는 WASD`),
        row('기력', `최대 ${STAMINA.max} · ${Math.round(1 / STAMINA.regenPerSecond)}초마다 1씩 회복 · 열매 +${STAMINA.eat}`),
        row('저장', '5초마다 자동 저장 (IndexedDB · 세이브 v8)'),
      ],
    },
    {
      id: 'gather',
      icon: '🪓',
      title: '채집·리젠',
      rows: [
        row('나무', `${HARVEST.tree.hits[0]}~${HARVEST.tree.hits[1]}회 · 기력 ${STAMINA.hitTree}/회 · 통나무 1~3 · ${sec(60)}~${sec(90)} 뒤 리젠`),
        row('바위', `${HARVEST.rock.hits[0]}~${HARVEST.rock.hits[1]}회 · 기력 ${STAMINA.hitRock}/회 · 돌 1~3 · 별조각 14% · ${sec(60)}~${sec(90)} 뒤 리젠`),
        row('꽃덤불', `${HARVEST.flower.hits[0]}회 · 기력 ${STAMINA.hitFlower} · 꽃잎 1~2 · ${sec(60)}~${sec(90)} 뒤 리젠`),
        ...Object.entries(GATHER_TYPES).map(([id, t]) =>
          row(`${t.icon} ${t.name}`, `${t.respawn[0]}~${t.respawn[1]}초 뒤 리젠 · ${t.loot.n[0]}~${t.loot.n[1]}개 (${t.kind === 'beach' ? '해변' : t.kind === 'forest' ? '숲' : '광맥'})`)
        ),
        row('나무 열매', '나무 밑에 45~75초마다 떨어져요 — 먹으면 기력 +30'),
      ],
    },
    {
      id: 'farm',
      icon: '🌱',
      title: '농사',
      rows: [
        row('텃밭', `4×4 = 16칸 · 물주기 1회당 남은 시간 ×${FARMING.waterHalve} · 최대 ${FARMING.maxWater}회`),
        row('논', '4×2 = 8칸 · 볍씨 전용 (물이 잠긴 논)'),
        ...Object.values(CROPS).map((c) =>
          row(`${c.icon} ${c.name}`, `${sec(c.grow)} 성장 · 수확 ${c.yield[0]}~${c.yield[1]}개 · 씨앗 ${c.seedPrice}코인 · 개당 ${c.price}코인${c.paddyOnly ? ' · 논 전용' : ''}`)
        ),
        row('성장 비료', `${FARMING.fertilizer.price}코인 · 한 칸에 ${FARMING.fertilizer.maxPerPlot}번 · 성장 단계 하나 건너뛰기`),
      ],
    },
    {
      id: 'fish',
      icon: '🎣',
      title: '낚시',
      rows: [
        row('낚시 1회', `기력 ${FISHING.stamina} · 대기 ${FISHING.waitMin}~${FISHING.waitMax}초 · 입질 창 ${FISHING.biteWindow}초`),
        row('어종', `${Object.keys(FISH).length - 1}종 + 별조각 (바다·민물 / 아침·낮·노을·밤)`),
        row('도구', Object.values(TOOLS).map((t) => `${t.icon} ${t.name} Lv.1~${t.max}`).join(' · ')),
      ],
    },
    {
      id: 'defense',
      icon: '🛡️',
      title: '방어전',
      rows: [
        row('상륙 주기', `${days(DEFENSE.periodDays)}마다 밤 (Day ${DEFENSE.periodDays}·${DEFENSE.periodDays * 2}·${DEFENSE.periodDays * 3}…)`),
        row('웨이브', `${WAVE.duration}초 · ${wavePlan(1).length}명 시작 → 최대 ${wavePlan(30).length}명 · 슬롯 ${DEFENSE.slots.length}곳`),
        row('무기', `${WEAPONS.sling.icon} 새총 공격 ${WEAPONS.sling.damage}/${WEAPONS.sling.cooldown}초(무제한) · ${WEAPONS.balloon.icon} 물풍선 공격 ${WEAPONS.balloon.damage} (꽃잎 1 → ${WEAPONS.balloon.shots}발)`),
        ...defendRows,
      ],
    },
    {
      id: 'home',
      icon: '🏠',
      title: '하우징',
      rows: [
        row('실내 크기', `${ROOM.width}×${ROOM.depth} · 벽 높이 ${ROOM.wallHeight} · 최대 ${ROOM.maxPlaced}개`),
        row('회전', `바닥 가구 ${Math.round((ROOM.rotateStep * 180) / Math.PI)}°씩 · 벽면 가구는 왼쪽/뒤/오른쪽 벽으로`),
        ...FURNITURE_ORDER.map((id) => {
          const f = FURNITURE[id];
          const cost = Object.entries(f.cost).map(([k, v]) => `${k === 'coin' ? '🪙' : ''}${k === 'coin' ? v : `${k} ${v}`}`).join(' · ');
          return row(`${f.icon} ${f.name}`, `${f.kind === 'wall' ? '벽면' : f.flat ? '바닥(눕는)' : '바닥'} · ${cost}`);
        }),
      ],
    },
    {
      id: 'expedition',
      icon: '🧭',
      title: '원정',
      rows: [
        row('규칙', `하루 ${EXPEDITION.perDay}회 · 제한 시간 ${EXPEDITION.duration}초 · 출발 기력 ${EXPEDITION.entryStamina} · 캐기 ${EXPEDITION.harvestStamina}`),
        ...SITE_ORDER.map((id) => {
          const s = EXPEDITION_SITES[id];
          return row(`${s.icon} ${s.name}`, `${s.nodes.length}자리 · ${s.resourceIds.map((r) => EXPEDITION_RESOURCES[r].icon + ' ' + EXPEDITION_RESOURCES[r].name).join(' · ')}`);
        }),
        ...EXPEDITION_ORDER.map((id) => row(`${EXPEDITION_RESOURCES[id].icon} ${EXPEDITION_RESOURCES[id].name}`, EXPEDITION_RESOURCES[id].desc)),
        row('상위 포탑', `🔥 화염 포탑 · 🧊 얼음 포탑 — 공방 [방어 제작] 에서 원정 자원으로 제작`),
      ],
    },
  ];
}
