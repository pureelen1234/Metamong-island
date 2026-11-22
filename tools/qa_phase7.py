#!/usr/bin/env python3
"""
7단계(하우징 · 원정 · 상위 포탑 · 튜토리얼/도움말 · 세이브 v8) 브라우저 실측 QA
390×844 모바일 세로 화면에서 실제로 눌러 본다.

QA_PART=housing|expedition|turret|tutorial|save|all (기본 all)

스크린샷: screenshots/phase7/qa_*.png
"""
import json
import os
import sys
import traceback

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402
from serve_dist import start  # noqa: E402

ROOT = os.path.dirname(HERE)
DIST = os.path.join(ROOT, 'dist')
OUT = os.path.join(ROOT, 'screenshots', 'phase7')
os.makedirs(OUT, exist_ok=True)
PART = os.environ.get('QA_PART', 'all')

logs, errors, failed, checks = [], [], [], []


def want(part):
    return PART in ('all', part)


def check(label, ok, detail=''):
    checks.append((label, bool(ok), detail))
    print(f'  {"✓" if ok else "✗"} {label}{(" — " + str(detail)) if detail != "" else ""}')
    return ok


def alive(page, timeout=9000):
    try:
        page.wait_for_function("() => !document.querySelector('.gl-overlay.on')", timeout=timeout)
    except Exception:
        page.evaluate("() => { try { window.__metamong.game.hud.setContextLost(false); } catch (e) {} }")
        page.wait_for_timeout(400)


def snap(page, name):
    try:
        alive(page)
        page.evaluate("() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(1))))")
        page.wait_for_timeout(320)
        page.screenshot(path=os.path.join(OUT, name), timeout=30000)
        print(f'  📸 {name}')
    except Exception as exc:
        print(f'  ⚠ 스크린샷 실패 {name}: {exc}')


def js(page, expr, arg=None):
    return page.evaluate(expr, arg) if arg is not None else page.evaluate(expr)


def life(page):
    return page.evaluate('window.__metamong.life()')


def stats(page):
    return page.evaluate('window.__metamong.stats()')


def close_modal(page):
    if page.locator('.modal.open').count():
        alive(page)
        try:
            page.locator('.modal.open .modal-close').first.click(timeout=8000, no_wait_after=True)
        except Exception:
            page.evaluate("() => { const b = document.querySelector('.modal.open .modal-close'); if (b) b.click(); }")
        page.wait_for_timeout(350)


def modal_title(page):
    return page.locator('.modal-title').first.inner_text() if page.locator('.modal-title').count() else ''


def action_label(page):
    return page.locator('.action-btn .txt').inner_text() if page.locator('.action-btn .txt').count() else ''


def teleport(page, x, z, yaw=None, settle=700):
    page.evaluate("([x, z, yaw]) => { const g = window.__metamong.game; g.player.teleport(x, z); if (yaw !== null) g.player.setYaw(yaw); }", [x, z, yaw])
    page.wait_for_timeout(settle)


def click_row(page, name, btn_text):
    page.evaluate(
        """([name, btn]) => {
          const row = [...document.querySelectorAll('.modal.open .furn-row')].find((r) => r.textContent.includes(name));
          if (!row) return;
          const b = [...row.querySelectorAll('button')].find((x) => x.textContent.includes(btn) && !x.disabled);
          if (b) b.click();
        }""",
        [name, btn_text],
    )
    page.wait_for_timeout(500)


def click_text(page, selector, text, scope_all=True):
    page.evaluate(
        """([sel, t]) => { const list=[...document.querySelectorAll(sel)].filter(x=>!x.disabled && x.textContent.includes(t)); if (list.length) list[list.length-1].click(); }""",
        [selector, text],
    )
    page.wait_for_timeout(450)


def fresh(page, url):
    page.goto(url, wait_until='networkidle')
    page.evaluate("""async () => { try { await window.__metamong.game.saveStore.clear(); } catch (e) {} try { localStorage.clear(); } catch (e) {} }""")
    page.reload(wait_until='networkidle')
    page.wait_for_timeout(3000)
    alive(page)


def new_island(page):
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(2400)


def cont(page):
    page.locator('.title-actions button').first.click(no_wait_after=True)
    page.wait_for_timeout(2600)


def unlock(page):
    page.evaluate(
        """() => {
          const g = window.__metamong.game;
          for (const id of ['workshop', 'dock', 'vending', 'lighthouse']) { g.progress.building(id).done = true; g.world.scenery.setBuilt(id, true, true); }
          g.progress.addCoins(900);
          for (const [id, n] of Object.entries({ log: 30, stone: 30, petal: 30, star: 8, berry: 12 })) {
            const left = g.progress.inventory.add(id, n);
            if (left) g.progress.inventory.storage[id] = (g.progress.inventory.storage[id] || 0) + left;
          }
          for (const id of ['copper', 'crystal', 'driftwood', 'honey']) g.progress.addForage(id, 8);
          g.progress.restStamina(100);
        }"""
    )
    page.wait_for_timeout(300)


def modal_metrics(page):
    return page.evaluate(
        """() => {
          const c = document.querySelector('.modal.open .modal-card');
          const t = document.querySelector('.modal.open .modal-title');
          if (!c || !t) return null;
          const cr = c.getBoundingClientRect();
          const tr = t.getBoundingClientRect();
          return { cardH: Math.round(cr.height), cardW: Math.round(cr.width), titleH: Math.round(tr.height), vh: window.innerHeight,
                   overflowX: c.scrollWidth > c.clientWidth + 1 };
        }"""
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
        page.set_default_timeout(20000)
        page.on('console', lambda m: logs.append((m.type, m.text)))
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('requestfailed', lambda r: failed.append(f'{r.url} :: {r.failure}'))
        page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)

        try:
            # ═══════════════════════════════════════════════════════
            if want('housing'):
                fresh(page, url)
                check('타이틀이 Phase 7', 'PHASE 7' in page.locator('.title-badge').inner_text(), page.locator('.title-badge').inner_text())
                snap(page, 'qa_01_title.png')
                new_island(page)
                lf = life(page)
                check('새 섬 — 시작 가구(의자·러그)', lf['home']['owned'].get('chair') == 1 and lf['home']['owned'].get('rug') == 1, lf['home']['owned'])
                check('새 섬 — 튜토리얼 카드 1단계', stats(page)['tutorialCard'] is True and lf['tutorial']['step'] == 0, lf['tutorial'])
                check('세이브 v8 스냅샷', page.evaluate("() => window.__metamong.game.snapshot().version") == 8)

                unlock(page)
                teleport(page, 3.2, 10.6, 3.14159)
                check('집 문 앞 [집에 들어가기]', '집에 들어가기' in action_label(page), action_label(page))
                snap(page, 'qa_02_home_door.png')
                page.locator('.action-btn').click()
                page.wait_for_timeout(1200)
                check('실내 진입', stats(page)['indoor'] is True, stats(page)['indoor'])
                check('실내 씬으로 렌더 교체', page.evaluate("() => { const g = window.__metamong.game; return g.post.renderPass.scene === g.home.room && g.post.renderPass.camera === g.home.camera; }"))
                check('실내 조작 바 표시', page.locator('.home-hud:not(.hidden)').count() == 1)
                snap(page, 'qa_03_interior_empty.png')

                # 가구 목록 — 12종
                page.locator('.home-hud .hm-btn', has_text='가구').first.click()
                page.wait_for_timeout(800)
                check('가구 모달 열림', '가구 고르기' in modal_title(page), modal_title(page))
                rows = page.locator('.modal.open .furn-row').count()
                craft_rows = page.evaluate("() => [...document.querySelectorAll('.modal.open .furn-row')].filter((r) => r.textContent.includes('· 보유')).length")
                check('가구 12종 목록', craft_rows == 12, (rows, craft_rows))
                m = modal_metrics(page)
                check('가구 모달 레이아웃(가로 넘침 없음)', m and not m['overflowX'] and m['titleH'] < 90, m)
                snap(page, 'qa_04_furniture_list.png')

                # 제작 — 책상
                before = life(page)
                click_row(page, '작은 책상', '제작')
                after = life(page)
                check('가구 제작(책상) — 보유↑ 재료↓', after['home']['owned'].get('desk', 0) == before['home']['owned'].get('desk', 0) + 1 and after['materials']['log'] < before['materials']['log'], (before['home']['owned'], after['home']['owned'], before['materials']['log'], after['materials']['log']))

                # 보유 가구 놓기 — 유령 → 탭 위치 → 회전 45° → 확정
                click_row(page, '작은 책상', '놓기')
                page.wait_for_timeout(700)
                g0 = life(page)['home']['ghost']
                check('유령 가구 생성(책상)', g0 is not None and g0['id'] == 'desk', g0)
                page.evaluate("() => window.__metamong.game.home.moveGhostTo(-1.1, -0.4)")
                page.wait_for_timeout(300)
                ghost = life(page)['home']['ghost']
                check('격자 스냅(0.2 단위)', abs(ghost['x'] / 0.2 - round(ghost['x'] / 0.2)) < 1e-6 and abs(ghost['z'] / 0.2 - round(ghost['z'] / 0.2)) < 1e-6, ghost)
                rot0 = ghost['rot']
                page.locator('.home-hud .hm-btn', has_text='회전').first.click()
                page.wait_for_timeout(400)
                rot1 = life(page)['home']['ghost']['rot']
                check('회전 버튼 45°', abs((rot1 - rot0) - 0.7854) < 0.02, (rot0, rot1))
                snap(page, 'qa_05_ghost_rotate.png')
                page.locator('.home-hud .hm-btn', has_text='놓기').first.click()
                page.wait_for_timeout(800)
                hp = life(page)['home']
                check('가구 놓기 확정', hp['placedCount'] == 1 and hp['ghost'] is None, (hp['placedCount'], hp['ghost']))
                check('놓인 가구 회전 저장(45°)', abs(hp['placed'][0]['rot'] - 0.7854) < 0.02, hp['placed'][0])

                # 벽면 가구 — 액자
                page.evaluate("() => window.__metamong.game.home.addOwned('picture', 1)")
                page.evaluate("() => window.__metamong.game.placeFurniture('picture')")
                page.wait_for_timeout(600)
                page.evaluate("() => window.__metamong.game.home.moveGhostTo(0.2, -3.2)")
                page.wait_for_timeout(400)
                wg = life(page)['home']['ghost']
                check('벽 가까이 놓으면 벽면 부착(뒤쪽 벽)', wg and wg['wall'] == 'back', wg)
                page.locator('.home-hud .hm-btn', has_text='회전').first.click()
                page.wait_for_timeout(400)
                wg2 = life(page)['home']['ghost']
                check('벽면 가구 회전 → 다른 벽으로', wg2 and wg2['wall'] in ('left', 'right') and wg2['wall'] != wg['wall'], (wg['wall'], wg2 and wg2['wall']))
                snap(page, 'qa_06_wall_attach.png')
                page.locator('.home-hud .hm-btn', has_text='놓기').first.click()
                page.wait_for_timeout(800)
                hp = life(page)['home']
                placed_wall = [d for d in hp['placed'] if d['id'] == 'picture']
                check('벽면 가구 배치 저장', len(placed_wall) == 1 and placed_wall[0]['wall'] in ('left', 'right'), placed_wall)

                # 벽에서 먼 곳에 벽면 가구 → 붙지 않음
                page.evaluate("() => window.__metamong.game.home.addOwned('shelf', 1)")
                page.evaluate("() => window.__metamong.game.placeFurniture('shelf')")
                page.wait_for_timeout(500)
                moved = page.evaluate("() => { const h = window.__metamong.game.home; return h.moveGhostTo(0, 1.2); }")
                check('벽에서 먼 곳에는 벽면 가구가 붙지 않음', moved is None, moved)
                page.evaluate("() => window.__metamong.game.home.cancelPlace()")
                page.wait_for_timeout(300)

                # 놓인 가구 탭 → 선택 → 치우기
                sel = page.evaluate("() => { const h = window.__metamong.game.home; h.select(0); return h.selected; }")
                check('놓인 가구 선택', sel == 0, sel)
                page.locator('.home-hud .hm-btn', has_text='치우기').first.click()
                page.wait_for_timeout(600)
                hp = life(page)['home']
                check('가구 치우기 — 방에서 빠지고 보유로 복귀', hp['placedCount'] == 1 and hp['owned'].get('desk', 0) >= 1, (hp['placedCount'], hp['owned']))

                # 나가기
                page.locator('.home-hud .hm-btn', has_text='나가기').first.click()
                page.wait_for_timeout(1000)
                check('실내 퇴장', stats(page)['indoor'] is False)
                check('월드 씬으로 복귀', page.evaluate("() => { const g = window.__metamong.game; return g.post.renderPass.scene === g.scene; }"))
                check('문 앞으로 복귀', abs(stats(page)['player']['x'] - 3.2) < 1.6 and abs(stats(page)['player']['z'] - 10.8) < 2.4, stats(page)['player'])
                snap(page, 'qa_07_home_exit.png')

                # 세이브 복원
                page.evaluate("() => window.__metamong.game.save()")
                page.wait_for_timeout(1200)
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                cont(page)
                hp = life(page)['home']
                check('새로고침 후 가구 배치 복원', hp['placedCount'] == 1 and hp['placed'][0]['id'] == 'picture' and hp['placed'][0]['wall'] in ('left', 'right'), hp['placed'])
                teleport(page, 3.2, 10.6, 3.14159)
                page.locator('.action-btn').click()
                page.wait_for_timeout(1200)
                check('복원된 가구가 실내에 보임', page.evaluate("() => window.__metamong.game.home.placed.length") == 1)
                snap(page, 'qa_08_home_restored.png')

                # 방어전 시작 시 실내에서 자동 퇴장
                page.evaluate("() => window.__metamong.game.startDefenseNow()")
                page.wait_for_timeout(1200)
                st = stats(page)
                check('방어전 시작 시 실내에서 자동 퇴장', st['indoor'] is False and st['defense']['wave'] is not None, (st['indoor'], bool(st['defense']['wave'])))
                page.evaluate("() => window.__metamong.game.defense.stopWave()")
                page.wait_for_timeout(900)
                close_modal(page)

            # ═══════════════════════════════════════════════════════
            if want('expedition'):
                fresh(page, url)
                new_island(page)
                unlock(page)
                page.locator('.icon-btn.exp-btn').click()
                page.wait_for_timeout(800)
                check('원정 의뢰판 열림(🧭 버튼)', '원정' in modal_title(page), modal_title(page))
                sites = page.locator('.modal.open .exp-site').count()
                check('원정지 3곳', sites == 3, sites)
                m = modal_metrics(page)
                check('원정 모달 레이아웃', m and not m['overflowX'], m)
                snap(page, 'qa_09_expedition_board.png')

                before = life(page)
                page.locator('.modal.open .exp-site .mini').first.click()
                page.wait_for_timeout(1500)
                run = life(page)['expedition']
                check('원정 출발(안개 군도)', run['active'] is True and run['run']['site'] == 'mist', (run['active'], run['run']['site'] if run['run'] else None))
                check('제한 시간 75초부터', 0 < run['run']['timer'] <= 75, run['run']['timer'])
                check('원정지 전용 자원 자리 10곳', len(run['run']['nodes']) == 10, len(run['run']['nodes']))
                check('출발 기력 소모', life(page)['stamina'] <= before['stamina'] - 9, (before['stamina'], life(page)['stamina']))
                check('원정 HUD 표시', page.locator('.expedition-hud:not(.hidden)').count() == 1)
                snap(page, 'qa_10_expedition_map.png')

                # 자원을 탭해 걸어가서 캐기 (헤드리스가 느려 update 를 직접 몇 초 진행시킨다)
                page.evaluate("""() => { const e = window.__metamong.game.expedition; const n = e.nodes.find((x) => !x.taken); e.walkTo(n.x, n.z, n); }""")
                got = False
                for _ in range(12):
                    page.wait_for_timeout(250)
                    page.evaluate("() => { const e = window.__metamong.game.expedition; for (let i = 0; i < 12; i++) e.update(0.06); }")
                    r = life(page)['expedition']['run']
                    if r['harvested'] >= 1:
                        got = True
                        break
                check('자원 자리로 걸어가 캐기', got, life(page)['expedition']['run']['collected'])
                check('원정 바구니에 담김', life(page)['expedition']['run']['collectedTotal'] >= 1, life(page)['expedition']['run']['collected'])
                check('캔 자리는 사라짐', life(page)['expedition']['run']['left'] < 10, life(page)['expedition']['run']['left'])
                snap(page, 'qa_11_expedition_harvest.png')

                # 귀환
                page.locator('.ex-return').click()
                page.wait_for_timeout(1200)
                lf = life(page)
                check('귀환 → 결과 화면', '원정 귀환' in modal_title(page), modal_title(page))
                check('귀환 후 원정 비활성', lf['expedition']['active'] is False)
                check('원정 바구니 누적', lf['expedition']['total'] >= 1, lf['expedition']['basket'])
                check('오늘 원정 기록(Day·횟수)', lf['expedition']['lastDay'] == stats(page)['day'] and lf['expedition']['runs'] >= 1, (lf['expedition']['lastDay'], lf['expedition']['runs']))
                bag_ids = [slot['id'] for slot in lf['bag'] if slot]
                check('원정 자원은 가방 칸을 차지하지 않음', not any(i in bag_ids for i in ['volcano_heart', 'ice_crystal', 'ancient_gear', 'deep_pearl', 'meteor_shard', 'mist_mushroom']), bag_ids)
                snap(page, 'qa_12_expedition_result.png')
                close_modal(page)

                # 하루 1회 제한
                page.locator('.icon-btn.exp-btn').click()
                page.wait_for_timeout(700)
                disabled = page.evaluate("() => [...document.querySelectorAll('.modal.open .exp-site .mini')].every((b) => b.disabled)")
                check('같은 Day 재출발 막힘(하루 1회)', disabled is True, disabled)
                check('출발 시도도 거부', page.evaluate("() => window.__metamong.game.startExpedition('ice')") is False)
                snap(page, 'qa_13_expedition_limited.png')
                close_modal(page)

                # 다음 날 → 다시 가능
                page.evaluate("() => { window.__metamong.game.state.day += 1; }")
                page.wait_for_timeout(400)
                check('다음 Day 에는 다시 출발', page.evaluate("() => window.__metamong.game.startExpedition('ice')") is True)
                page.wait_for_timeout(1200)
                # 제한 시간 종료 → 자동 귀환
                page.evaluate("() => { window.__metamong.game.expedition.timer = 0.15; }")
                page.wait_for_timeout(1600)
                check('제한 시간 종료 시 자동 귀환', life(page)['expedition']['active'] is False and '원정 귀환' in modal_title(page), modal_title(page))
                close_modal(page)

                # 도감 원정 탭
                page.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'expedition'; g.openCodex(); }")
                page.wait_for_timeout(800)
                txt = page.locator('.modal.open .modal-body').inner_text()
                exp_cards = page.locator('.modal.open .recipe-card').count()
                check('도감 원정 탭 — 6종', '/ 6종' in txt and exp_cards == 6, (exp_cards, txt[:70]))
                snap(page, 'qa_14_codex_expedition.png')
                close_modal(page)

            # ═══════════════════════════════════════════════════════
            if want('turret'):
                fresh(page, url)
                new_island(page)
                unlock(page)
                page.evaluate("""() => { const g = window.__metamong.game; for (const [id, n] of Object.entries({ volcano_heart: 3, meteor_shard: 3, ice_crystal: 3, ancient_gear: 3, copper: 5, crystal: 5, stone: 20 })) g.progress.addExpedition(id, n); }""")
                page.wait_for_timeout(300)
                page.evaluate("() => window.__metamong.game.openDefenseCraft()")
                page.wait_for_timeout(1200)
                if '방어 제작' not in modal_title(page):
                    page.evaluate("() => window.__metamong.game.openDefenseCraft()")
                    page.wait_for_timeout(1200)
                craft_txt = page.locator('.modal.open .modal-body').inner_text()
                check('방어 제작에 화염·얼음 포탑', '화염 포탑' in craft_txt and '얼음 포탑' in craft_txt, (modal_title(page), craft_txt[:80]))
                snap(page, 'qa_15_craft_turrets.png')
                before = life(page)
                page.evaluate("() => window.__metamong.game.craftStructure('flame_turret')")
                page.wait_for_timeout(600)
                after = life(page)
                check('화염 포탑 제작 — 창고↑ 원정 자원↓', after['defense']['stock'].get('flame_turret') == 1 and after['expedition']['basket'].get('volcano_heart', 0) < before['expedition']['basket'].get('volcano_heart', 0), (after['defense']['stock'], after['expedition']['basket']))
                page.evaluate("() => window.__metamong.game.craftStructure('ice_turret')")
                page.wait_for_timeout(500)
                check('얼음 포탑 제작', life(page)['defense']['stock'].get('ice_turret') == 1, life(page)['defense']['stock'])
                close_modal(page)

                # 슬롯 설치 — 상륙 지점과 가까운 1번 슬롯에 화염, 2번에 얼음
                page.evaluate("() => window.__metamong.game.installStructure(0, 'flame_turret')")
                page.wait_for_timeout(500)
                page.evaluate("() => window.__metamong.game.installStructure(1, 'ice_turret')")
                page.wait_for_timeout(500)
                lf = life(page)
                check('화염·얼음 포탑 슬롯 설치', lf['defense']['slots'][0] and lf['defense']['slots'][0]['kind'] == 'flame_turret' and lf['defense']['slots'][1]['kind'] == 'ice_turret', lf['defense']['slots'])
                check('3D 설치물 반영', page.evaluate("() => window.__metamong.game.defense.installed().length") == 2)
                teleport(page, 0.6, 24.0, 3.14159)
                snap(page, 'qa_16_turrets_installed.png')

                # 웨이브 — 포탑이 실제로 쏘는가
                page.evaluate("() => window.__metamong.game.startDefenseNow()")
                fired = False
                for _ in range(12):
                    page.wait_for_timeout(300)
                    page.evaluate("() => { const g = window.__metamong.game; for (let i = 0; i < 10; i++) g.defense.update(0.08, true); }")
                    w = stats(page)['defense']['wave']
                    if w and w['turretHits'] > 0:
                        fired = True
                        break
                w = stats(page)['defense']['wave']
                check('웨이브 중 상위 포탑 사격(명중 기록)', fired, w)
                snap(page, 'qa_17_turret_fire.png')
                # 불청객이 실제로 쓰러지는가
                downed = False
                for _ in range(12):
                    page.wait_for_timeout(250)
                    page.evaluate("() => { const g = window.__metamong.game; for (let i = 0; i < 10; i++) g.defense.update(0.08, true); }")
                    w = stats(page)['defense']['wave']
                    if not w:
                        break
                    if w['down'] > 0:
                        downed = True
                        break
                check('포탑으로 불청객 쓰러뜨림', downed or w is None, w)
                snap(page, 'qa_18_turret_battle.png')
                page.evaluate("() => { const d = window.__metamong.game.defense; if (d.waveActive) d.stopWave(); }")
                page.wait_for_timeout(900)
                close_modal(page)
                # 물풍선 포탑(9)보다 확실히 강한지 — 제작 화면의 실수치로 확인
                page.evaluate("() => window.__metamong.game.openDefenseCraft()")
                page.wait_for_timeout(700)
                craft_txt = page.locator('.modal.open .modal-body').inner_text()
                check('상위 포탑 수치가 물풍선보다 강함(공격 26·20 > 9)', '공격 26' in craft_txt and '공격 20' in craft_txt and '공격 9' in craft_txt, craft_txt[:120])
                snap(page, 'qa_18b_turret_stats.png')
                close_modal(page)

            # ═══════════════════════════════════════════════════════
            if want('tutorial'):
                fresh(page, url)
                new_island(page)
                lf = life(page)
                card = page.locator('.tutorial-card:not(.hidden)')
                check('첫 접속 튜토리얼 카드', card.count() == 1 and lf['tutorial']['step'] == 0, lf['tutorial'])
                body = card.inner_text()
                check('튜토리얼 본문에 실제 수치(코인 +15)', '+15' in body, body[:80])
                snap(page, 'qa_19_tutorial_step1.png')

                # [다음] 으로 단계 진행
                card.locator('.tu-btn', has_text='다음').first.click()
                page.wait_for_timeout(600)
                check('[다음] 으로 2단계 진행', life(page)['tutorial']['step'] == 1, life(page)['tutorial'])
                body2 = page.locator('.tutorial-card').inner_text()
                check('2단계 본문에 나무 타격·리젠 수치', '2~3' in body2 and '60' in body2 and '90' in body2, body2[:100])
                snap(page, 'qa_20_tutorial_step2.png')

                # 실제 행동으로 단계 통과 — 나무 베기
                page.evaluate("""() => {
                  const g = window.__metamong.game;
                  const n = g.world.scenery.nodes.find((x) => x.kind === 'tree');
                  for (let a = 0; a < 20; a++) {
                    const ang = (a / 20) * Math.PI * 2;
                    const x = n.x + Math.cos(ang) * 1.2, z = n.z + Math.sin(ang) * 1.2;
                    if (g.world.terrain.isWalkable(x, z)) { g.player.teleport(x, z); break; }
                  }
                  g.progress.restStamina(100);
                }""")
                page.wait_for_timeout(900)
                for _ in range(12):
                    page.evaluate("() => { const g = window.__metamong.game; g.progress.restStamina(100); if (g.target && g.target.isNode) g.interact(); }")
                    page.wait_for_timeout(280)
                page.wait_for_timeout(900)
                check('행동(나무 베기)으로 다음 단계 자동 진행', life(page)['tutorial']['step'] >= 2, (life(page)['tutorial'], life(page)['counters'].get('tree')))

                # 건너뛰기
                if page.locator('.tutorial-card:not(.hidden)').count():
                    page.locator('.tutorial-card .tu-btn', has_text='건너뛰기').first.click()
                    page.wait_for_timeout(600)
                check('건너뛰기 — 카드 닫힘', page.locator('.tutorial-card:not(.hidden)').count() == 0 and life(page)['tutorial']['skipped'] is True, life(page)['tutorial'])

                # 도움말 다시 열람 + 수치 일치
                page.locator('.icon-btn[aria-label="도움말 열기"]').click()
                page.wait_for_timeout(900)
                check('도움말 화면 열림(❓)', '게임 도움말' in modal_title(page), modal_title(page))
                help_txt = page.locator('.modal.open .modal-body').inner_text()
                check('도움말 — 하루 길이·기력', '20분' in help_txt and '기력' in help_txt, help_txt[:90])
                page.locator('.modal.open .help-tabs .tab', has_text='채집').first.click()
                page.wait_for_timeout(700)
                gather_txt = page.locator('.modal.open .modal-body').inner_text()
                check('도움말 채집 — 리젠 수치(60초~90초)·특산 8종', '60초~90초' in gather_txt and '조개' in gather_txt and '수정' in gather_txt, gather_txt[:100])
                snap(page, 'qa_21b_help_gather.png')

                tabs = page.locator('.modal.open .help-tabs .tab').count()
                check('도움말 탭 7개', tabs == 7, tabs)
                snap(page, 'qa_21_help_basic.png')
                # 방어 탭 — 실제 설비 수치
                page.locator('.modal.open .help-tabs .tab', has_text='방어전').first.click()
                page.wait_for_timeout(700)
                defend_txt = page.locator('.modal.open .modal-body').inner_text()
                check('도움말 방어 — 웨이브 44초·3일 주기', '44초' in defend_txt and '3일' in defend_txt, defend_txt[:100])
                check('도움말 방어 — 화염 포탑 공격 26', '26' in defend_txt, '')
                snap(page, 'qa_22_help_defense.png')
                # 원정 탭 — 75초
                page.locator('.modal.open .help-tabs .tab', has_text='원정').first.click()
                page.wait_for_timeout(700)
                exp_txt = page.locator('.modal.open .modal-body').inner_text()
                check('도움말 원정 — 75초·6종 자원', '75초' in exp_txt and '화산 심장석' in exp_txt, exp_txt[:100])
                snap(page, 'qa_23_help_expedition.png')

                # 처음부터 다시 보기
                page.locator('.modal.open .btn', has_text='처음부터 다시 보기').first.click()
                page.wait_for_timeout(900)
                check('튜토리얼 다시 보기 — 1단계부터', life(page)['tutorial']['step'] == 0 and page.locator('.tutorial-card:not(.hidden)').count() == 1, life(page)['tutorial'])
                snap(page, 'qa_24_tutorial_replay.png')

            # ═══════════════════════════════════════════════════════
            if want('save'):
                fresh(page, url)
                new_island(page)
                unlock(page)
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.home.addOwned('bed', 1); g.home.addOwned('window', 1);
                      g.home.beginPlace('bed'); g.home.moveGhostTo(-1.2, -1.0); g.home.rotate(); g.home.confirmPlace();
                      g.home.beginPlace('window'); g.home.moveGhostTo(0, -3.2); g.home.rotate(); g.home.confirmPlace();
                      g.progress.addExpedition('volcano_heart', 4);
                      g.progress.addExpedition('ice_crystal', 2);
                      g.progress.expedition.lastDay = 3; g.progress.expedition.runs = 2; g.progress.expedition.lastSite = 'volcano';
                      g.progress.tutorial.step = 4; g.progress.tutorial.skipped = false;
                      g.progress.defense.stock.flame_turret = 2;
                      g.progress.defense.slots[0] = { kind: 'flame_turret', hp: 90 };
                      g.defense.sync();
                      g.save();
                    }"""
                )
                page.wait_for_timeout(1400)
                ver = page.evaluate("() => window.__metamong.game.snapshot().version")
                check('스냅샷 버전 8', ver == 8, ver)
                stored = page.evaluate(
                    """async () => { const s = await window.__metamong.game.saveStore.load();
                      return { v: s.version, home: s.home, exp: s.expedition, tut: s.tutorial, stock: s.defense.stock, slot0: s.defense.slots[0] }; }"""
                )
                check('세이브에 하우징(가구 2개)', len(stored['home']['placed']) == 2, stored['home']['placed'])
                check('세이브에 원정 바구니·기록', stored['exp']['basket'].get('volcano_heart') == 4 and stored['exp']['lastDay'] == 3, stored['exp'])
                check('세이브에 튜토리얼 단계', stored['tut']['step'] == 4, stored['tut'])
                check('세이브에 화염 포탑(창고·슬롯)', stored['stock']['flame_turret'] == 2 and stored['slot0']['kind'] == 'flame_turret', stored['slot0'])

                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                cont(page)
                lf = life(page)
                check('새로고침 후 하우징 복원', lf['home']['placedCount'] == 2, lf['home']['placed'])
                check('새로고침 후 원정 바구니', lf['expedition']['basket'].get('volcano_heart') == 4 and lf['expedition']['lastDay'] == 3, lf['expedition'])
                check('새로고침 후 튜토리얼 4단계', lf['tutorial']['step'] == 4, lf['tutorial'])
                check('새로고침 후 화염 포탑 슬롯', lf['defense']['slots'][0]['kind'] == 'flame_turret', lf['defense']['slots'][0])
                snap(page, 'qa_25_reload_v8.png')

                # ── v7 세이브 → v8
                page.evaluate(
                    """async () => {
                      const g = window.__metamong.game;
                      await g.saveStore.clear();
                      await g.saveStore.save({
                        version: 7, savedAt: Date.now(), day: 5, elapsed: 300, coins: 321, stamina: 66,
                        discovered: ['ditto_basic_01'],
                        farmPlots: [{ crop: 'tomato', remain: 10, total: 30, watered: 1, wet: 2 }],
                        paddyPlots: [{ crop: 'rice', remain: 20, total: 45, watered: 0, wet: 0 }],
                        forage: { shell: 3 },
                        defense: { wins: 3, stock: { fence: 2 }, slots: [{ kind: 'turret', hp: 40 }] },
                        cats: { somi: { aff: 50, gifts: [2], follow: true } },
                        bridge: { built: true, invested: {} }, bridgeBuilt: true,
                        cartLevel: 1, welcome: { step: 3 },
                      });
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                cont(page)
                lf = life(page)
                check('v7 → v8 (Day·코인·특산 승계)', stats(page)['day'] == 5 and lf['coins'] == 321 and lf['forage'].get('shell') == 3, (stats(page)['day'], lf['coins']))
                check('v7 세이브 하우징 기본값', lf['home']['placedCount'] == 0 and len(lf['home']['owned']) == 0, lf['home']['owned'])
                check('v7 세이브 원정 바구니 기본값', lf['expedition']['total'] == 0 and lf['expedition']['lastDay'] == 0, lf['expedition'])
                check('v7 세이브 방어전 승계 + 새 포탑 키', lf['defense']['wins'] == 3 and lf['defense']['stock'].get('flame_turret') == 0 and lf['defense']['slots'][0]['kind'] == 'turret', (lf['defense']['wins'], lf['defense']['stock']))
                check('v7 세이브 튜토리얼 기본(처음부터)', lf['tutorial']['step'] == 0 and lf['tutorial']['done'] is False, lf['tutorial'])
                snap(page, 'qa_26_v7_migrated.png')

                # ── v1 세이브 → v8
                page.evaluate(
                    """async () => {
                      const g = window.__metamong.game;
                      await g.saveStore.clear();
                      await g.saveStore.save({ version: 1, savedAt: Date.now(), day: 2, elapsed: 500, discoveredDittos: ['ditto_mailbox_03'], playerPos: { x: 0.4, z: 17.4 }, settings: { muted: true, timeScale: 10, fps30: false } });
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                cont(page)
                lf = life(page)
                check('v1 → v8 (Day·설정)', stats(page)['day'] == 2 and stats(page)['settings']['timeScale'] == 10, stats(page)['settings'])
                check('v1 세이브 하우징·원정·튜토리얼 기본값', lf['home']['placedCount'] == 0 and lf['expedition']['total'] == 0 and lf['tutorial']['step'] == 0, (lf['home'], lf['expedition']['total']))
                snap(page, 'qa_27_v1_migrated.png')

        except Exception:
            traceback.print_exc()
            errors.append('QA script exception')
        finally:
            bad_logs = [(t, m) for (t, m) in logs if t == 'error']
            allowed = ('Service Worker registration blocked', 'GPU stall due to ReadPixels')
            bad_failed = [f for f in failed if not any(a in f for a in allowed)]
            print('\n── 콘솔 error ──')
            for t, m in bad_logs[:10]:
                print(' ', m[:200])
            print('── 페이지 error ──')
            for e in errors[:10]:
                print(' ', e[:300])
            print('── 실패 요청 ──')
            for f in bad_failed[:10]:
                print(' ', f[:200])
            check('콘솔 에러 0', len(bad_logs) == 0, len(bad_logs))
            check('페이지 에러 0', len(errors) == 0, len(errors))
            check('404·실패 요청 0', len(bad_failed) == 0, len(bad_failed))
            browser.close()
            httpd.shutdown()

    ok = sum(1 for c in checks if c[1])
    print(f'\n{ok}/{len(checks)} 통과')
    for label, good, detail in checks:
        if not good:
            print(f'  ✗ {label} — {detail}')
    sys.exit(0 if ok == len(checks) else 1)


if __name__ == '__main__':
    run()
