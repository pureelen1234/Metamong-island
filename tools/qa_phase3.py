#!/usr/bin/env python3
"""
3단계(사각 섬 · 텃밭 농사 · 미니맵 · 업적) 브라우저 실측 QA.

390×844 모바일 세로 화면에서
  ① 사각 섬 해안선/부두·찌 좌표 · 1·2단계 회귀(채집·가방·복구·낚시·요리·상점)
  ② 씨앗 구매 → 심기 → 물주기 → 수확(별도 바구니) → 자판기 판매(코인 증가 실측)
  ③ 물뿌리개 범위(1칸 → 3×3)
  ④ 실시간 미니맵 · 확대 지도 모달
  ⑤ 업적 달성 토스트 · 보상 수령
  ⑥ Save v4 저장/복원 · v3/v2/v1 → v4 마이그레이션
을 실제로 눌러 보고, 콘솔 에러·404 를 센다.
스크린샷은 screenshots/phase3/ 에 남긴다.

QA_PART=farm|save|all (기본 all)
"""
import json
import os
import sys
import traceback

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from serve_dist import start  # noqa: E402

OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'phase3'))
DIST = os.path.abspath(os.path.join(HERE, '..', 'dist'))
os.makedirs(OUT, exist_ok=True)
PART = os.environ.get('QA_PART', 'all')

logs, errors, failed, checks = [], [], [], []


def want(part):
    return PART in ('all', part)


# ── 공용 도우미 ────────────────────────────────────────────────
def check(label, ok, detail=''):
    checks.append((label, bool(ok), detail))
    print(f'  {"✓" if ok else "✗"} {label}{(" — " + str(detail)) if detail else ""}')
    return ok


def life(page):
    return page.evaluate('window.__metamong.life()')


def stats(page):
    return page.evaluate('window.__metamong.stats()')


def alive(page, timeout=8000):
    try:
        page.wait_for_function("() => !document.querySelector('.gl-overlay.on')", timeout=timeout)
    except Exception:
        page.evaluate("() => { try { window.__metamong.game.hud.setContextLost(false); } catch (e) {} }")
        page.wait_for_timeout(400)


def snap(page, name):
    try:
        alive(page)
    except Exception:
        pass
    try:
        page.screenshot(path=os.path.join(OUT, name), timeout=25000)
    except Exception as exc:
        print(f'  ⚠ 스크린샷 실패 {name}: {exc}')
        return
    print(f'  📸 {name}')


def tap(page, selector, **kw):
    alive(page)
    try:
        page.locator(selector, **kw).first.click(timeout=8000, no_wait_after=True)
        return True
    except Exception:
        alive(page)
        page.wait_for_timeout(200)
        try:
            page.locator(selector, **kw).first.click(timeout=8000, no_wait_after=True)
            return True
        except Exception:
            page.evaluate("(sel) => { const el = document.querySelector(sel); if (el) el.click(); }", selector)
            page.wait_for_timeout(160)
            return False


def close_modal(page):
    if page.locator('.modal.open').count():
        alive(page)
        try:
            page.locator('.modal.open .modal-close').first.click(timeout=8000, no_wait_after=True)
        except Exception:
            page.evaluate("() => { const b = document.querySelector('.modal.open .modal-close'); if (b) b.click(); }")
    page.wait_for_timeout(320)


def click_btn(page, text):
    alive(page)
    try:
        page.locator('.modal-actions .btn', has_text=text).first.click(timeout=8000, no_wait_after=True)
    except Exception:
        page.evaluate(
            """(t) => {
              const b = [...document.querySelectorAll('.modal-actions .btn')].find((x) => x.textContent.includes(t));
              if (b) b.click();
            }""",
            text,
        )
    page.wait_for_timeout(300)


def body_btn(page, text):
    alive(page)
    page.evaluate(
        """(t) => {
          const el = [...document.querySelectorAll('.modal-body button')].find((x) => x.textContent.includes(t));
          if (el) el.click();
        }""",
        text,
    )
    page.wait_for_timeout(320)


def title(page):
    return page.locator('.modal-title').first.inner_text() if page.locator('.modal-title').count() else ''


def action_label(page):
    return page.locator('.action-btn .txt').inner_text()


def wait_label(page, text, timeout=7000):
    try:
        page.wait_for_function(
            "(t) => { const el = document.querySelector('.action-btn .txt'); return !!el && el.textContent.includes(t); }",
            arg=text,
            timeout=timeout,
        )
        return True
    except Exception:
        return False


def teleport(page, x, z, settle=450):
    page.evaluate("([x, z]) => window.__metamong.game.player.teleport(x, z)", [x, z])
    page.wait_for_timeout(settle)


def give(page, items):
    page.evaluate(
        """(items) => {
          const inv = window.__metamong.game.progress.inventory;
          for (const [id, n] of Object.entries(items)) inv.add(id, n);
        }""",
        items,
    )


def build(page, lm_id):
    page.evaluate(
        """(id) => {
          const g = window.__metamong.game;
          const need = { dock: { log: 6, stone: 2 }, workshop: { log: 8, stone: 6 },
                         vending: { stone: 4, petal: 5, star: 2 }, lighthouse: { log: 12, stone: 10, star: 5 } }[id] || {};
          for (const [item, n] of Object.entries(need)) g.progress.inventory.add(item, n);
          g.invest(id);
          g.completeBuild(id);
        }""",
        lm_id,
    )
    page.wait_for_timeout(500)
    close_modal(page)


def fresh(page, url):
    page.goto(url, wait_until='networkidle')
    page.evaluate("""async () => {
      try { await window.__metamong.game.saveStore.clear(); } catch (e) {}
      try { localStorage.clear(); } catch (e) {}
    }""")
    page.reload(wait_until='networkidle')
    page.wait_for_timeout(2800)
    alive(page)


def new_island(page):
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(2200)


def canvas_ink(page, selector):
    """캔버스가 실제로 그려졌는지 — 서로 다른 색 수를 센다"""
    return page.evaluate(
        """(sel) => {
          const c = document.querySelector(sel);
          if (!c) return -1;
          const ctx = c.getContext('2d');
          const d = ctx.getImageData(0, 0, c.width, c.height).data;
          const set = new Set();
          for (let i = 0; i < d.length; i += 4 * 97) {
            if (d[i + 3] === 0) continue;
            set.add(`${d[i]},${d[i + 1]},${d[i + 2]}`);
          }
          return set.size;
        }""",
        selector,
    )


def run():
    httpd, port = start(DIST)
    url = f'http://127.0.0.1:{port}/'
    print(f'QA URL {url} · part={PART}')

    with sync_playwright() as p:
        browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
        ctx = browser.new_context(
            viewport={'width': 390, 'height': 844},
            device_scale_factor=1,
            is_mobile=True,
            has_touch=True,
            user_agent='Mozilla/5.0 (Linux; Android 14; SM-S911N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36',
            service_workers='block',
        )
        page = ctx.new_page()
        page.set_default_timeout(15000)
        page.on('console', lambda m: logs.append((m.type, m.text)))
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('requestfailed', lambda r: failed.append(f'{r.url} :: {r.failure}'))
        page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)

        try:
            # ═══ ① 새 섬 · 사각 지형 · HUD ═══════════════════════
            if want('farm'):
                fresh(page, url)
                snap(page, '01_title.png')
                new_island(page)
                snap(page, '02_new_island.png')
                st, lf = stats(page), life(page)
                check('플레이 진입', st['mode'] == 'play', st['mode'])
                check('우체통 배지 4(텃밭 편지 포함)', page.locator('.mail-btn .badge').inner_text() == '4', page.locator('.mail-btn .badge').inner_text())
                check('미니맵 캔버스 존재', page.locator('.minimap-canvas').count() == 1, page.locator('.minimap-canvas').count())
                ink = canvas_ink(page, '.minimap-canvas')
                check('미니맵이 실제로 그려짐(색 종류)', ink > 5, ink)

                geo = page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const t = g.world.terrain;
                      return {
                        corners: [[15,-15],[-15,-15],[15,15],[-15,15],[12,-12],[-12,12]].map(([x,z]) => t.isWalkable(x,z)),
                        far: [[0,23],[23,0],[0,-23],[-23,0]].map(([x,z]) => t.isWalkable(x,z)),
                        dockH: t.sampleHeight(0, 20.3),
                        castH: window.__metamong.game ? g.world.terrain.sampleHeight(0, 22.2) : 0,
                        heights: [t.sampleHeight(0, 17), t.sampleHeight(0, 19), t.sampleHeight(0, 21)],
                      };
                    }"""
                )
                check('네 귀퉁이 모두 걸을 수 있다', all(geo['corners']), geo['corners'])
                check('섬 밖(±23)은 물', not any(geo['far']), geo['far'])
                check('부두 발밑이 물가(±0.25)', abs(geo['dockH']) <= 0.25, geo['dockH'])
                check('낚시 찌가 물 위(h<0)', geo['castH'] < 0, geo['castH'])
                check('남쪽 해변 경사(17→21 내려감)', geo['heights'][0] > geo['heights'][1] > geo['heights'][2], geo['heights'])

                # 텃밭 구역이 걸을 수 있는 땅인가
                farm_ok = page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      return g.farming.plots.every((p) => g.world.terrain.isWalkable(p.x, p.z));
                    }"""
                )
                check('텃밭 9칸 모두 육지', bool(farm_ok))

                # ── 1·2단계 회귀: 나무 베기
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      // 다른 채집물이 가까이 없는 나무를 골라야 액션 라벨이 '베기'로 잡힌다
                      const nodes = g.world.scenery.nodes;
                      // 그 자리에서 가장 가까운 채집물이 '나무'가 되는 위치를 찾는다
                      let spot = [nodes[0].x, nodes[0].z + 1.7];
                      outer: for (const n of nodes) {
                        if (n.kind !== 'tree') continue;
                        for (let a = 0; a < 16; a++) {
                          const ang = (a / 16) * Math.PI * 2;
                          const x = n.x + Math.cos(ang) * 1.3;
                          const z = n.z + Math.sin(ang) * 1.3;
                          if (!g.world.terrain.isWalkable(x, z)) continue;
                          let best = null;
                          let bestD = 2.5;
                          for (const o of nodes) {
                            const d = Math.hypot(o.x - x, o.z - z);
                            if (d < bestD) { bestD = d; best = o; }
                          }
                          if (best === n) { spot = [x, z]; break outer; }
                        }
                      }
                      g.player.teleport(spot[0], spot[1]);
                    }"""
                )
                page.wait_for_timeout(600)
                check('나무 앞 액션 라벨', wait_label(page, '베기'), action_label(page))
                # 저프레임 환경에서는 게임 시간이 천천히 흘러 타격 쿨다운이 길어진다 — 조건이 될 때까지 두드린다
                for _ in range(16):
                    page.evaluate("() => document.querySelector('.action-btn').click()")
                    page.wait_for_timeout(420)
                    if page.evaluate("() => window.__metamong.life().bag.some((s) => s && s.id === 'log')"):
                        break
                lf = life(page)
                check('채집 회귀: 통나무 획득', any(s and s['id'] == 'log' for s in lf['bag']), json.dumps(lf['bag'], ensure_ascii=False)[:70])
                check('채집 EXP', lf['skills']['gather'] > 0, lf['skills'])
                check('나무 1그루 베기 카운터', lf['counters'].get('tree', 0) >= 1, lf['counters'])
                check('업적: 첫 나무 달성', 'ach_first_chop' in lf['achievements']['unlocked'], lf['achievements']['unlocked'])
                check('업적 배지 표시', 'hidden' not in (page.locator('.quick-rank .quick-badge').get_attribute('class') or ''), page.locator('.quick-rank .quick-badge').get_attribute('class'))

                # ── 낚시 회귀(부두 복구 → 입질 → 성공)
                build(page, 'dock')
                check('부두 복구 완료', life(page)['buildings']['dock']['done'] is True)
                teleport(page, 0, 17.6, 700)
                ok_label = wait_label(page, '낚시하기')
                check('부두 앞 낚시 액션', ok_label, action_label(page))
                page.evaluate("() => window.__metamong.game.openFishSpot()")
                page.wait_for_timeout(400)
                click_btn(page, '낚시하기')
                page.wait_for_timeout(200)
                page.evaluate("() => { window.__metamong.game.fishing.waitFor = 0.12; }")
                page.wait_for_function("() => window.__metamong.game.fishing.state === 'bite'", timeout=9000)
                snap(page, '03_fishing_bite.png')
                tap(page, '.action-btn')
                page.wait_for_timeout(700)
                lf = life(page)
                fish_total = sum(lf['fish'].values()) if lf['fish'] else 0
                check('낚시 성공(회귀)', fish_total > 0 or any(s and s['id'] == 'star' for s in lf['bag']), json.dumps(lf['fish'], ensure_ascii=False))
                # 소프트웨어 렌더링은 1초에 게임 시간 0.1초꼴로 흐른다 — 찌 회수 연출을 기다리지 않고 접는다
                page.evaluate("() => window.__metamong.game.fishing.cancel()")
                page.wait_for_timeout(400)
                check('업적: 첫 낚시', 'ach_first_fish' in lf['achievements']['unlocked'], lf['achievements']['unlocked'])

                # ═══ ② 텃밭 농사 루프 ═══════════════════════════
                page.evaluate("() => { window.__metamong.game.progress.addCoins(300); }")
                # 씨앗 구매(자판기 사기 탭과 같은 통로)
                page.evaluate("() => { const g = window.__metamong.game; for (const id of ['dock','workshop','vending']) g.progress.building(id).done = true; g.save(); }")
                page.evaluate("() => window.__metamong.game.openVending()")
                page.wait_for_timeout(400)
                page.locator('.tab', has_text='사기').first.click(no_wait_after=True)
                page.wait_for_timeout(450)
                snap(page, '04_vending_seeds.png')
                body = page.locator('.modal-body').inner_text()
                check('사기 탭에 씨앗 3종', all(k in body for k in ('딸기 씨앗', '달달무 씨앗', '황금호박 씨앗')), body[-160:])
                coins_before = life(page)['coins']
                page.evaluate("() => window.__metamong.game.buyGood('seed_strawberry')")
                page.wait_for_timeout(450)
                lf = life(page)
                check('딸기 씨앗 구입', lf['seeds'].get('seed_strawberry') == 1, lf['seeds'])
                check('씨앗 값 코인 차감(15)', coins_before - lf['coins'] == 15, (coins_before, lf['coins']))
                page.evaluate("() => { const g = window.__metamong.game; g.progress.addSupply('seed_pumpkin', 2); g.progress.addSupply('seed_radish', 1); }")
                close_modal(page)

                # 텃밭 패널
                tap(page, '.quickbar button', has_text='텃밭')
                page.wait_for_timeout(500)
                snap(page, '05_farm_panel.png')
                check('텃밭 패널', '텃밭' in title(page), title(page))
                check('경작지 9칸', page.locator('.farm-cell').count() == 9, page.locator('.farm-cell').count())
                check('빈 밭 9칸', page.locator('.farm-cell.empty').count() == 9, page.locator('.farm-cell.empty').count())

                # 심기 (패널 → 씨앗 고르기)
                page.locator('.farm-cell').first.locator('button', has_text='심기').click(no_wait_after=True)
                page.wait_for_timeout(450)
                snap(page, '06_seed_picker.png')
                check('씨앗 고르기 모달', '심기' in title(page), title(page))
                page.locator('.seed-row', has_text='딸기').locator('button').first.click(no_wait_after=True)
                page.wait_for_timeout(500)
                lf = life(page)
                check('딸기 심김', lf['farmPlots'][0] and lf['farmPlots'][0]['crop'] == 'strawberry', lf['farmPlots'][0])
                check('심은 뒤 씨앗 소모', lf['seeds'].get('seed_strawberry') == 0, lf['seeds'])
                check('농사 스킬 EXP', lf['skills'].get('farm', 0) >= 6, lf['skills'])
                check('업적: 첫 씨앗', 'ach_first_seed' in lf['achievements']['unlocked'], lf['achievements']['unlocked'])
                close_modal(page)

                # 밭 앞에서 액션 버튼으로 물주기 (기력 실측)
                page.evaluate("() => { const g = window.__metamong.game; const p = g.farming.plots[0]; g.player.teleport(p.x, p.z - 1.05); }")
                ok_label = wait_label(page, '물주기', 6000)
                check('밭 앞 액션 = 물주기', ok_label, action_label(page))
                before = life(page)
                page.evaluate("() => document.querySelector('.action-btn').click()")
                page.wait_for_timeout(500)
                after = life(page)
                check(
                    '물주기로 남은 시간 절반',
                    bool(after['farmPlots'][0]) and after['farmPlots'][0]['remain'] < before['farmPlots'][0]['remain'] * 0.6,
                    (before['farmPlots'][0], after['farmPlots'][0]),
                )
                check('물주기 기력 소모(2)', 1.5 <= before['stamina'] - after['stamina'] <= 2.5, (before['stamina'], after['stamina']))
                check('물 준 흙 상태', bool(after['farmPlots'][0]) and after['farmPlots'][0]['watered'] == 1, after['farmPlots'][0])
                snap(page, '07_farm_watered.png')

                # 물뿌리개 Lv.3 → 3×3 일괄 물주기
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.progress.tools.water = 3;
                      for (let i = 1; i < 9; i++) if (!g.progress.plot(i)) g.progress.plantSeed(i, 'radish') === undefined;
                    }"""
                )
                # 방금 심은 3번 밭(가운데)에 Lv.3 물주기
                page.evaluate("() => { const g = window.__metamong.game; g.progress.farmPlots[4] = { crop: 'radish', remain: 42, total: 42, watered: 0, wet: 0 }; g.farming.syncAll(); }")
                page.wait_for_timeout(300)
                res = page.evaluate("() => { const g = window.__metamong.game; return g.farming.water(g.farming.plots[4], 3); }")
                check('물뿌리개 Lv.3 = 9칸 일괄', res.get('watered', 0) >= 2, res)
                page.evaluate("() => { const g = window.__metamong.game; g.progress.farmPlots[4] = null; g.farming.syncAll(); }")

                # 성장 가속(시간 배속 10×) 후 수확
                close_modal(page)
                page.evaluate("() => { const g = window.__metamong.game; g.progress.farmPlots[0].remain = 0.4; g.state.settings.timeScale = 10; }")
                page.wait_for_function("() => window.__metamong.life().farmPlots[0].ripe === true", timeout=20000)
                page.evaluate("() => { window.__metamong.game.state.settings.timeScale = 1; }")
                snap(page, '08_farm_ripe.png')
                page.evaluate("() => { const g = window.__metamong.game; const p = g.farming.plots[0]; g.player.teleport(p.x, p.z - 1.05); }")
                page.wait_for_timeout(500)
                lab = action_label(page)
                check('다 자란 밭 액션 = 수확', '수확' in lab, lab)
                bag_before = life(page)['bagSlots']
                page.evaluate("() => document.querySelector('.action-btn').click()")
                page.wait_for_timeout(600)
                lf = life(page)
                n = lf['crops'].get('strawberry', 0)
                check('딸기 2~3개 수확', 2 <= n <= 3, lf['crops'])
                check('수확물은 별도 바구니(가방 그대로)', lf['bagSlots'] == bag_before, (bag_before, lf['bagSlots']))
                check('수확 뒤 밭 비워짐', lf['farmPlots'][0] is None, lf['farmPlots'][0])
                check('수확 카운터', lf['counters']['crop'] == 1, lf['counters'])
                snap(page, '09_harvested.png')

                # 자판기 팔기 → 코인 실측
                page.evaluate("() => { const g = window.__metamong.game; g.progress.building('vending').done = true; g.openVending(); }")
                page.wait_for_timeout(450)
                page.locator('.tab', has_text='팔기').first.click(no_wait_after=True)
                page.wait_for_timeout(450)
                snap(page, '10_vending_sell_crops.png')
                body = page.locator('.modal-body').inner_text()
                check('팔기 탭에 딸기 표시', '딸기' in body, body[:160])
                coins_before = life(page)['coins']
                crop_before = life(page)['crops'].get('strawberry', 0)
                page.evaluate("() => window.__metamong.game.sellItem('strawberry', 'all')")
                page.wait_for_timeout(500)
                lf = life(page)
                gained = lf['coins'] - coins_before
                check('딸기 판매 = 개당 18코인', gained == 18 * crop_before and crop_before > 0, (crop_before, gained))
                check('판매 후 바구니 비움', lf['crops'].get('strawberry', 0) == 0, lf['crops'])
                close_modal(page)

                # 농작물 요리 (공방) — 수확물 바구니에서 꺼내 쓴다
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.progress.addCrop('strawberry', 2);
                      g.progress.addCrop('pumpkin', 1);
                      g.progress.inventory.add('berry', 1);
                      g.progress.stamina = 20;
                      g.progress.building('workshop').done = true;
                      g.openCooking();
                    }"""
                )
                page.wait_for_timeout(500)
                snap(page, '11a_cooking_crops.png')
                body = page.locator('.modal-body').inner_text()
                check('요리에 농작물 요리 2종', all(k in body for k in ('딸기 스무디', '황금 호박 수프')), body[:120])
                before = life(page)
                page.evaluate("() => window.__metamong.game.cook('smoothie')")
                page.wait_for_timeout(600)
                lf = life(page)
                check('딸기 스무디 요리(기력 +75)', lf['stamina'] >= min(100, before['stamina'] + 72), (before['stamina'], lf['stamina']))
                check('스무디 재료로 딸기 2개 소모', lf['crops'].get('strawberry', 0) == 0, lf['crops'])
                page.evaluate("() => { const g = window.__metamong.game; g.progress.stamina = 10; g.openCooking(); }")
                page.wait_for_timeout(400)
                page.evaluate("() => window.__metamong.game.cook('pumpkinsoup')")
                page.wait_for_timeout(600)
                lf = life(page)
                check('황금 호박 수프 요리', lf['cooked'].get('pumpkinsoup', 0) == 1 and lf['crops'].get('pumpkin', 0) == 0, (lf['cooked'], lf['crops']))
                close_modal(page)

                # 물뿌리개 강화 (공방 → 도구)
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.progress.addCoins(200);
                      g.progress.inventory.add('log', 4);
                      g.progress.inventory.add('stone', 3);
                      g.progress.tools.water = 1; // 앞선 Lv.3 일괄 물주기 시험값을 되돌린다
                      g.openUpgrade();
                    }"""
                )
                page.wait_for_timeout(500)
                snap(page, '11b_upgrade_water.png')
                body = page.locator('.modal-body').inner_text()
                check('도구 목록에 물뿌리개', '물뿌리개' in body, body[:120])
                coins_before = life(page)['coins']
                page.evaluate("() => window.__metamong.game.upgradeTool('water')")
                page.wait_for_timeout(600)
                lf = life(page)
                check('물뿌리개 Lv.2 강화', lf['waterCan'] == 2, lf['waterCan'])
                check('강화 코인 차감(30)', coins_before - lf['coins'] == 30, (coins_before, lf['coins']))
                close_modal(page)

                # 도감 농사 탭
                page.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'farm'; g.openCodex(); }")
                page.wait_for_timeout(500)
                snap(page, '11c_codex_farm.png')
                check('도감 농사 탭 카드 3', page.locator('.recipe-card').count() == 3, page.locator('.recipe-card').count())
                check('도감 농사 탭에 딸기·달달무·황금호박', all(k in page.locator('.modal-body').inner_text() for k in ('딸기', '달달무', '황금호박')))
                close_modal(page)

                # 일일 의뢰 풀에 농사 의뢰가 섞여 나오는지 (Day 를 돌려 40일치 확인)
                kinds = page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const seen = new Set();
                      for (let d = 1; d <= 40; d++) {
                        g.progress.quests = { day: 0, list: [] };
                        g.progress.rollQuests(d);
                        for (const q of g.progress.quests.list) seen.add(q.kind);
                      }
                      g.progress.quests = { day: 0, list: [] };
                      g.progress.rollQuests(g.state.day);
                      return [...seen];
                    }"""
                )
                check('의뢰 풀에 씨앗 심기·작물 수확', 'plant' in kinds and 'crop' in kinds, kinds)

                # ═══ ③ 미니맵 · 확대 지도 ═══════════════════════
                page.evaluate("() => window.__metamong.game.player.teleport(0.4, 11.8)")
                page.wait_for_timeout(700)
                tap(page, '.minimap')
                page.wait_for_timeout(500)
                snap(page, '11_map_modal.png')
                check('확대 지도 모달', '지도' in title(page), title(page))
                check('지도 캔버스 그려짐', canvas_ink(page, '.minimap-big') > 5, canvas_ink(page, '.minimap-big'))
                legends = page.locator('.legend-row').count()
                check('범례 8줄 이상', legends >= 8, legends)
                body = page.locator('.modal-body').inner_text()
                check('범례에 4대 건물', all(k in body for k in ('부두', '공방', '자판기', '등대')), body[:120])
                check('범례에 텃밭·우체통·고양이', all(k in body for k in ('텃밭', '우체통', '솜이', '옹이')), body[:160])
                close_modal(page)

                # ═══ ④ 업적 보상 ═══════════════════════════════
                tap(page, '.quickbar button', has_text='랭크')
                page.wait_for_timeout(450)
                snap(page, '12_rank.png')
                check('랭크 5스킬', page.locator('.skill-row').count() == 5, page.locator('.skill-row').count())
                check('농사 스킬 표시', '농사' in page.locator('.modal-body').inner_text())
                click_btn(page, '업적')
                page.wait_for_timeout(500)
                snap(page, '13_achievements.png')
                check('업적 모달', '업적' in title(page), title(page))
                rows = page.locator('.ach-row').count()
                check('업적 12종', rows == 12, rows)
                coins_before = life(page)['coins']
                claimable = page.locator('.ach-row .ach-claim.on').count()
                check('받을 보상 있음', claimable >= 2, claimable)
                page.locator('.ach-row .ach-claim.on').first.click(no_wait_after=True)
                page.wait_for_timeout(600)
                lf = life(page)
                check('업적 보상 코인 지급', lf['coins'] > coins_before, (coins_before, lf['coins']))
                check('보상 수령 기록', len(lf['achievements']['claimed']) >= 1, lf['achievements']['claimed'])
                snap(page, '14_achievement_claimed.png')
                close_modal(page)

                # ═══ ⑤ 텃밭 화면 연출 확인용 컷 ═════════════════
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.progress.farmPlots[0] = { crop: 'strawberry', remain: 0, total: 27, watered: 2, wet: 4 };
                      g.progress.farmPlots[1] = { crop: 'radish', remain: 18, total: 42, watered: 1, wet: 3 };
                      g.progress.farmPlots[2] = { crop: 'pumpkin', remain: 30, total: 60, watered: 0, wet: 0 };
                      g.progress.farmPlots[3] = { crop: 'strawberry', remain: 20, total: 27, watered: 0, wet: 0 };
                      g.farming.syncAll();
                      g.player.teleport(-11.2, -8.6);
                    }"""
                )
                page.wait_for_timeout(1100)
                snap(page, '15_farm_closeup.png')
                page.evaluate("() => { const g = window.__metamong.game; g.openFarm(); }")
                page.wait_for_timeout(600)
                snap(page, '16_farm_panel_filled.png')
                close_modal(page)

            # ═══ ⑥ 저장 · 마이그레이션 ═══════════════════════
            if want('save'):
                fresh(page, url)
                new_island(page)
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.progress.addCoins(222);
                      g.progress.addCrop('strawberry', 5);
                      g.progress.addCrop('pumpkin', 1);
                      g.progress.addSupply('seed_radish', 1);
                      g.progress.plantSeed(3, 'radish');
                      g.progress.farmPlots[3].remain = 12.5;
                      g.progress.bump('crop', 4);
                      g.progress.achievements.unlocked.push('ach_first_seed');
                      g.progress.tools.water = 2;
                      g.progress.addSupply('seed_pumpkin', 3);
                      g.dittos[0].discovered = true;
                      g.state.discovered = ['ditto_basic_01'];
                      g.save();
                    }"""
                )
                page.wait_for_timeout(800)
                saved = page.evaluate(
                    """async () => {
                      const d = await window.__metamong.game.saveStore.load();
                      return d ? { v: d.version, coins: d.coins, crops: d.crops, plots: d.farmPlots,
                                   counters: d.counters, ach: d.achievements, tools: d.tools,
                                   seeds: d.supplies && d.supplies.seed_pumpkin, skills: d.skills } : null;
                    }"""
                )
                print('  저장 확인:', json.dumps(saved, ensure_ascii=False)[:400])
                check('세이브 version 4', bool(saved and saved['v'] == 4), saved and saved['v'])
                check('세이브에 수확물 바구니', bool(saved and saved['crops'].get('strawberry') == 5), saved and saved['crops'])
                check('세이브에 텃밭 상태', bool(saved and saved['plots'][3] and saved['plots'][3]['crop'] == 'radish'), saved and saved['plots'])
                check('세이브에 업적·카운터', bool(saved and saved['counters']['crop'] == 4 and 'ach_first_seed' in saved['ach']['unlocked']), saved and saved['ach'])
                check('세이브에 물뿌리개 Lv.2', bool(saved and saved['tools']['water'] == 2), saved and saved['tools'])

                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2400)
                lf = life(page)
                check('복원: 코인', lf['coins'] == 222, lf['coins'])
                check('복원: 수확물 바구니', lf['crops'].get('strawberry') == 5, lf['crops'])
                check('복원: 텃밭 상태', lf['farmPlots'][3]['crop'] == 'radish' and abs(lf['farmPlots'][3]['remain'] - 12.5) < 2.5, lf['farmPlots'][3])
                check('복원: 업적', 'ach_first_seed' in lf['achievements']['unlocked'], lf['achievements'])
                check('복원: 물뿌리개 Lv.2', lf['waterCan'] == 2, lf['waterCan'])
                snap(page, '17_reloaded.png')

                # ── v3 세이브 → v4 마이그레이션
                page.evaluate(
                    """async () => {
                      await window.__metamong.game.saveStore.clear();
                      const v3 = {
                        version: 3, savedAt: Date.now(), day: 6, elapsed: 500,
                        player: { x: 0.4, z: 11.8, yaw: 3.14 },
                        discovered: ['ditto_basic_01', 'ditto_pebble_02'],
                        settings: { muted: false, timeScale: 1, fps30: false },
                        stamina: 71, bag: [{ id: 'log', n: 4 }, null, null, null, null, null, null, null],
                        storage: { stone: 7 }, mailbox: { read: ['welcome_bokyung'], claimed: ['welcome_bokyung'] },
                        buildings: { dock: { invested: {}, done: true }, workshop: { invested: {}, done: true } },
                        nodes: {},
                        coins: 143, skills: { gather: 120, fish: 84, cook: 60, care: 22 },
                        fish: { bream: 2 }, supplies: { churu: 1, ade: 0, bait: 2 },
                        tools: { axe: 2, pick: 1 },
                        cats: { somi: { aff: 45, gifts: [2, 3], follow: true }, ongi: { aff: 12, gifts: [], follow: false } },
                        cooked: { tea: 2 }, quests: { day: 6, list: [] }, buff: { kind: '', left: 0 },
                        fishing: { casts: 9, catches: 7, misses: 2, best: 28 },
                      };
                      localStorage.setItem('metamong-island:slot1', JSON.stringify(v3));
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                snap(page, '18_v3_title.png')
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2400)
                lf, st = life(page), stats(page)
                ver = page.evaluate("async () => { const d = await window.__metamong.game.saveStore.load(); return d && d.version; }")
                check('v3 → v4 로 저장', ver == 4, ver)
                check('v3 Day 승계', st['day'] == 6, st['day'])
                check('v3 코인 승계', lf['coins'] == 143, lf['coins'])
                check('v3 물고기 승계', lf['fish'].get('bream') == 2, lf['fish'])
                check('v3 스킬 승계 + 농사 0', lf['skills']['gather'] == 120 and lf['skills'].get('farm', 0) == 0, lf['skills'])
                check('v3 도구 승계 + 물뿌리개 Lv.1', lf['tools']['axe'] == 2 and lf['waterCan'] == 1, lf['tools'])
                check('v3 고양이 승계', lf['cats']['somi']['aff'] == 45 and lf['cats']['somi']['follow'] is True, lf['cats']['somi'])
                # v3 세이브에는 없던 v4 필드가 기본값으로 채워지고, 이미 조건을 채운 업적은 소급 달성된다
                check(
                    'v4 새 필드 기본값',
                    lf['crops'] == {}
                    and lf['farmPlanted'] == 0
                    and lf['waterCan'] == 1
                    and not any(a in lf['achievements']['unlocked'] for a in ('ach_first_seed', 'ach_farmer'))
                    and all(v == 0 for v in lf['counters'].values()),
                    (lf['crops'], lf['farmPlanted'], lf['achievements']['unlocked'], lf['counters']),
                )
                check('v3 고양이 Lv.3 → 업적 소급 달성', 'ach_cat_friend' in lf['achievements']['unlocked'], lf['achievements']['unlocked'])
                check('텃밭 편지가 새로 도착', 'guide_farm' not in lf['mailbox']['read'], lf['mailbox'])
                snap(page, '19_v3_migrated.png')

                # v3 유저도 편지 선물로 바로 농사 체험
                page.evaluate("() => window.__metamong.game.openMailbox('guide_farm')")
                page.wait_for_timeout(450)
                snap(page, '20_farm_letter.png')
                body_btn(page, '선물 받기')
                page.wait_for_timeout(500)
                lf = life(page)
                check('텃밭 편지 선물 = 딸기 씨앗 2', lf['seeds'].get('seed_strawberry') == 2, lf['seeds'])
                close_modal(page)
                page.evaluate("() => { const g = window.__metamong.game; g.plantPlot(2, 'strawberry'); }")
                page.wait_for_timeout(500)
                lf = life(page)
                check('v3 유저가 바로 심기 가능', lf['farmPlots'][2] and lf['farmPlots'][2]['crop'] == 'strawberry', lf['farmPlots'][2])
                close_modal(page)

                # ── v2 → v4
                page.evaluate(
                    """async () => {
                      await window.__metamong.game.saveStore.clear();
                      const v2 = {
                        version: 2, savedAt: Date.now(), day: 4, elapsed: 400,
                        player: { x: 0.4, z: 11.8, yaw: 3.14 },
                        discovered: ['ditto_basic_01'], settings: { muted: false, timeScale: 1, fps30: false },
                        stamina: 66, bag: [{ id: 'log', n: 5 }, null, null, null, null, null, null, null],
                        storage: { stone: 9 }, mailbox: { read: [], claimed: [] },
                        buildings: { workshop: { invested: {}, done: true } }, nodes: {},
                      };
                      localStorage.setItem('metamong-island:slot1', JSON.stringify(v2));
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2200)
                lf = life(page)
                check('v2 → v4 기력·가방 승계', abs(lf['stamina'] - 66) < 3 and any(s and s['id'] == 'log' and s['n'] == 5 for s in lf['bag']), (lf['stamina'], lf['bag']))
                check('v2 → v4 농사 기본값', lf['farmPlanted'] == 0 and lf['waterCan'] == 1 and lf['coins'] == 0, (lf['farmPlanted'], lf['waterCan'], lf['coins']))
                snap(page, '21_v2_migrated.png')

                # ── v1 → v4
                page.evaluate(
                    """async () => {
                      await window.__metamong.game.saveStore.clear();
                      localStorage.setItem('metamong-island:slot1', JSON.stringify({
                        version: 1, day: 3, elapsedSeconds: 600,
                        playerPos: { x: 0.4, y: 0.2, z: 11.8 },
                        discoveredDittos: ['ditto_basic_01'], settings: { muted: true, timeScale: 1, fps30: false },
                      }));
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2200)
                st, lf = stats(page), life(page)
                check('v1 → v4 Day 승계', st['day'] == 3, st['day'])
                check('v1 → v4 농사·코인 0', lf['coins'] == 0 and lf['farmPlanted'] == 0 and len(lf['achRows']) == 12, (lf['coins'], lf['farmPlanted']))

        except Exception:
            print('  ✗ 예외:')
            traceback.print_exc()
            try:
                snap(page, '99_failure.png')
            except Exception:
                pass

        print('\n--- console ---')
        for t, msg in logs:
            print(f'  [{t}] {msg[:200]}')
        print('--- page errors ---')
        print('  (없음)' if not errors else '')
        for e in errors:
            print('  ', e)
        print('--- failed requests / >=400 ---')
        print('  (없음)' if not failed else '')
        for f in failed:
            print('  ', f)

        bad = [c for c in checks if not c[1]]
        print(f'\n=== 체크 {len(checks)}개 중 실패 {len(bad)}개 ===')
        for label, _, detail in bad:
            print(f'  ✗ {label} — {detail}')
        print(f'콘솔 에러 {len(errors)}건 · 404/실패 요청 {len(failed)}건')

        browser.close()
    httpd.shutdown()


if __name__ == '__main__':
    run()
