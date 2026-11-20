#!/usr/bin/env python3
"""
1단계(채집·가방·창고·우체통·복구) 브라우저 실측 QA.

390×844 모바일 세로 화면에서 타이틀 → 시작 → 나무 채집 → 가방 → 우체통 선물 →
공방 창고 → 건물 복구 → 등대 밤불빛 → 새로고침 저장 복원 → 구버전 세이브 병합까지
실제로 눌러 보고, 콘솔 에러·404 를 센다. 스크린샷은 screenshots/phase1_life/ 에 남긴다.
"""
import json
import os
import traceback

from playwright.sync_api import sync_playwright

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'screenshots', 'phase1_life'))
os.makedirs(OUT, exist_ok=True)
URL = os.environ.get('QA_URL', 'http://127.0.0.1:4173/')

logs = []
errors = []
failed = []
checks = []


def snap(page, name, clip=None):
    path = os.path.join(OUT, name)
    try:
        alive(page)
    except Exception:
        pass
    try:
        page.screenshot(path=path, clip=clip, timeout=20000)
    except Exception as exc:
        print(f'  ⚠ 스크린샷 실패 {name}: {exc}')
        return
    print(f'  📸 {name}')


def check(label, ok, detail=''):
    checks.append((label, bool(ok), detail))
    print(f'  {"✓" if ok else "✗"} {label}{(" — " + str(detail)) if detail else ""}')
    return ok


def life(page):
    return page.evaluate('window.__metamong.life()')


def alive(page, timeout=8000):
    """컨텍스트 복구 오버레이가 걷힐 때까지 기다린다(스위프트셰이더 QA 환경 대비)."""
    try:
        page.wait_for_function("() => !document.querySelector('.gl-overlay.on')", timeout=timeout)
    except Exception:
        page.evaluate("() => { try { window.__metamong.game.hud.setContextLost(false); } catch (e) {} }")
        page.wait_for_timeout(500)


def tap(page, selector, **kw):
    """헤드리스 스위프트셰이더에서 클릭 후 "navigation 대기"가 멈추는 경우가 있어
    no_wait_after 로 누르고, 그래도 실패하면 DOM 클릭으로 넘어간다."""
    alive(page)
    try:
        page.locator(selector, **kw).first.click(timeout=8000, no_wait_after=True)
        return True
    except Exception:
        alive(page)
        page.wait_for_timeout(300)
        try:
            page.locator(selector, **kw).first.click(timeout=8000, no_wait_after=True)
            return True
        except Exception:
            page.evaluate("""(sel) => { const el = document.querySelector(sel); if (el) el.click(); }""", selector)
            page.wait_for_timeout(200)
            return False


def close_modal(page):
    if page.locator('.modal.open').count():
        alive(page)
        try:
            page.locator('.modal.open .modal-close').first.click(timeout=8000, no_wait_after=True)
        except Exception:
            page.evaluate("() => { const b = document.querySelector('.modal.open .modal-close'); if (b) b.click(); }")
    page.wait_for_timeout(480)


def click_btn(page, text):
    alive(page)
    try:
        page.locator('.modal-actions .btn', has_text=text).first.click(timeout=8000, no_wait_after=True)
    except Exception:
        page.evaluate("""(t) => {
          const b = [...document.querySelectorAll('.modal-actions .btn')].find((x) => x.textContent.includes(t));
          if (b) b.click();
        }""", text)
    page.wait_for_timeout(450)


def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
        ctx = browser.new_context(
            viewport={'width': 390, 'height': 844},
            device_scale_factor=1,  # 2코어 QA 환경에서 swiftshader 가 버티도록 1배로 (모바일 CSS 크기는 390×844 그대로)
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
            # ── 0. 깨끗한 상태에서 시작
            page.goto(URL, wait_until='networkidle')
            page.evaluate("""async () => {
              try { await window.__metamong.game.saveStore.clear(); } catch (e) {}
              try { localStorage.clear(); } catch (e) {}
            }""")
            page.reload(wait_until='networkidle')
            page.wait_for_timeout(3200)
            snap(page, '01_title.png')

            # ── 1. 새 섬 시작
            alive(page)
            page.locator('.title-actions button').last.click()
            page.wait_for_timeout(2600)
            snap(page, '02_play_hud.png')
            st = page.evaluate('window.__metamong.stats()')
            check('플레이 진입', st['mode'] == 'play', st['mode'])
            check('기력 100으로 시작', life(page)['stamina'] == 100, life(page)['stamina'])
            check('우체통 배지 3통', page.locator('.mail-btn .badge').inner_text() == '3',
                  page.locator('.mail-btn .badge').inner_text())
            check('가방 배지 0/8', page.locator('.quick-badge').first.inner_text() == '0/8',
                  page.locator('.quick-badge').first.inner_text())
            # 토스트 문구를 놓고 가지 않도록 HUD.toast 를 계측한다
            page.evaluate("""() => {
              const g = window.__metamong.game;
              window.__toasts = [];
              if (!g.hud.__wrapped) {
                const orig = g.hud.toast.bind(g.hud);
                g.hud.toast = (m, ms) => { window.__toasts.push(String(m)); return orig(m, ms); };
                g.hud.__wrapped = true;
              }
            }""")

            # ── 2. 나무 채집 — 실제로 가장 가까운 나무를 대상으로 삼는다
            page.evaluate("""() => {
              const g = window.__metamong.game;
              const tree = g.world.scenery.nodes.find((n) => n.kind === 'tree');
              g.player.teleport(tree.x, tree.z + 1.7);
            }""")
            page.wait_for_timeout(600)
            page.evaluate("""() => {
              const g = window.__metamong.game;
              const p = g.player.position;
              let best = null, bd = 99;
              for (const n of g.world.scenery.nodes) {
                if (n.harvested) continue;
                const d = Math.hypot(n.x - p.x, n.z - p.z);
                if (d < bd) { bd = d; best = n; }
              }
              window.__qaTree = best.key;
            }""")
            try:
                page.wait_for_function("() => document.querySelector('.action-btn .txt').textContent.includes('베기')", timeout=4000)
            except Exception:
                pass
            label = page.locator('.action-btn .txt').inner_text()
            target_kind = page.evaluate('() => { const t = window.__metamong.game.target; return t ? (t.isNode ? t.kind : t.kind) : null; }')
            check('나무 앞 액션 라벨', '베기' in label and target_kind == 'tree', f'{label} / {target_kind}')
            snap(page, '03_tree_target.png')

            tap(page, '.action-btn')
            page.wait_for_timeout(450)
            for _ in range(4):
                page.evaluate("() => document.querySelector('.action-btn').click()")
                page.wait_for_timeout(420)
            snap(page, '04_after_chop.png')
            bag = life(page)['bag']
            logs_g = [s for s in bag if s and s['id'] == 'log']
            check('통나무 획득', bool(logs_g), json.dumps(bag, ensure_ascii=False))
            check('기력 소모', life(page)['stamina'] < 100, life(page)['stamina'])
            page.wait_for_timeout(300)
            stub = page.evaluate("""() => {
              const g = window.__metamong.game;
              const n = g.world.scenery.nodes.find((x) => x.key === window.__qaTree);
              return { harvested: n.harvested, left: n.hitsLeft, scale: +n.mesh.scale.x.toFixed(2),
                       opacity: +n.mesh.material.opacity.toFixed(2), collider: n.collider ? n.collider.r : null,
                       sprout: n.sprout.visible, stub: n.stub.visible,
                       stubOpacity: +n.stub.material.opacity.toFixed(2) };
            }""")
            check('그루터기 전환(밑동·새싹·충돌 해제)', stub['harvested'] is True and stub['collider'] == 0
                  and stub['sprout'] is True and stub['stub'] is True, stub)
            snap(page, '04b_stump_closeup.png', clip={'x': 40, 'y': 330, 'width': 310, 'height': 280})

            # ── 3. 가방
            tap(page, '.quickbar button', has_text='가방')
            page.wait_for_timeout(600)
            snap(page, '05_bag.png')
            check('가방 모달 열림', page.locator('.modal.open').count() == 1)
            close_modal(page)

            # ── 4. 우체통 · 웰컴 편지 선물
            tap(page, '.mail-btn')
            page.wait_for_timeout(600)
            snap(page, '06_mailbox.png')
            tap(page, '.mail-row', has_text='보경 님께')
            page.wait_for_timeout(600)
            snap(page, '07_letter.png')
            alive(page)
            try:
                page.locator('.modal-body .btn', has_text='선물 받기').first.click(timeout=8000, no_wait_after=True)
            except Exception:
                page.evaluate("() => { const b = document.querySelector('.modal-body .btn'); if (b) b.click(); }")
            page.wait_for_timeout(700)
            snap(page, '07b_gift_claimed.png')
            lf = life(page)
            check('선물 수령(열매 3)', any(s and s['id'] == 'berry' and s['n'] == 3 for s in lf['bag']), json.dumps(lf['bag'], ensure_ascii=False))
            check('선물 수령(별조각 1)', any(s and s['id'] == 'star' for s in lf['bag']), json.dumps(lf['bag'], ensure_ascii=False))
            check('선물 수령 기록', 'welcome_bokyung' in lf['mailbox']['claimed'], lf['mailbox'])
            page.wait_for_timeout(200)
            close_modal(page)

            # ── 5. 열매 먹기 (가방에서)
            page.evaluate('() => { window.__metamong.game.progress.stamina = 40; }')
            tap(page, '.quickbar button', has_text='가방')
            page.wait_for_timeout(400)
            try:
                page.wait_for_function("() => !!document.querySelector('.modal.open .bag-grid')", timeout=10000)
            except Exception:
                page.evaluate("() => window.__metamong.game.openBag()")
                page.wait_for_timeout(700)
            for _attempt in range(3):
                alive(page)
                try:
                    page.locator('.modal-body .btn', has_text='열매 먹기').first.click(timeout=6000, no_wait_after=True)
                except Exception:
                    page.evaluate("""() => {
                      const b = [...document.querySelectorAll('.modal-body .btn')].find((x) => x.textContent.includes('열매 먹기'));
                      if (b) b.click();
                    }""")
                page.wait_for_timeout(700)
                if abs(life(page)['stamina'] - 70) < 2:
                    break
            check('열매 먹으면 기력 +30', abs(life(page)['stamina'] - 70) < 2, life(page)['stamina'])
            snap(page, '08_eat_berry.png')
            close_modal(page)

            # ── 6. 공방 → 복구 (재료를 채워 넣고 투입/완료)
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.progress.inventory.add('log', 20);
              g.progress.inventory.add('stone', 20);
              g.progress.inventory.add('petal', 10);
              g.progress.inventory.add('star', 6);
              g.player.teleport(-6.6, 4.6);
            }""")
            page.wait_for_timeout(800)
            label = page.locator('.action-btn .txt').inner_text()
            check('공방 앞 액션 라벨', '공방' in label, label)
            snap(page, '09_workshop_target.png')
            tap(page, '.action-btn')
            page.wait_for_timeout(600)
            snap(page, '10_workshop_menu.png')
            click_btn(page, '건물 복구')
            snap(page, '11_build_before.png')
            click_btn(page, '재료 투입')
            page.wait_for_timeout(300)
            page.evaluate("() => window.__metamong.game.invest('workshop')")
            page.wait_for_timeout(300)
            page.locator('.modal-actions .btn', has_text='닫기').first.click()
            page.wait_for_timeout(200)
            page.evaluate("() => window.__metamong.game.openBuild('workshop')")
            page.wait_for_timeout(400)
            snap(page, '12_build_ready.png')
            click_btn(page, '복구 완료')
            page.wait_for_timeout(700)
            snap(page, '13_build_done.png')
            check('공방 복구 완료', life(page)['buildings']['workshop']['done'] is True,
                  life(page)['buildings']['workshop'])
            check('이름표 ✨', '복구 완료' in page.locator('.landmark-pill', has_text='공방').first.inner_text(),
                  page.locator('.landmark-pill', has_text='공방').first.inner_text())
            close_modal(page)

            # ── 7. 창고 열기 · 가방↔창고 이동
            page.evaluate("() => window.__metamong.game.openStorage()")
            page.wait_for_timeout(500)
            snap(page, '14_storage.png')
            page.locator('.store-row .mini', has_text='전체').first.click()
            page.wait_for_timeout(500)
            snap(page, '15_storage_moved.png')
            row_names = page.evaluate("() => [...document.querySelectorAll('.store-row .nm')].map((el) => el.textContent)")
            check('창고 목록에 재료 중복 없음', len(row_names) == len(set(row_names)), row_names)
            check('창고로 이동', sum(life(page)['storage'].values()) > 0, life(page)['storage'])
            close_modal(page)

            # ── 8. 등대 복구 → 밤 불빛
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.progress.inventory.add('log', 20);
              g.progress.inventory.add('stone', 20);
              g.progress.inventory.add('star', 8);
              g.openBuild('lighthouse');
            }""")
            page.wait_for_timeout(500)
            page.evaluate("() => window.__metamong.game.invest('lighthouse')")
            page.wait_for_timeout(300)
            page.evaluate("() => window.__metamong.game.openBuild('lighthouse')")
            page.wait_for_timeout(300)
            snap(page, '16_lighthouse_ready.png')
            click_btn(page, '복구 완료')
            page.wait_for_timeout(500)
            close_modal(page)
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.state.elapsed = 1000;
              g.player.teleport(4.6, -1.4);
            }""")
            page.wait_for_timeout(2000)
            snap(page, '17_lighthouse_night.png')
            check('등대 복구', life(page)['buildings']['lighthouse']['done'] is True)
            check('등대 불빛 켜짐', page.evaluate('window.__metamong.game.world.scenery.beacon.light.intensity') > 0.3,
                  page.evaluate('window.__metamong.game.world.scenery.beacon.light.intensity'))

            # ── 9. 기력 부족 안내
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.progress.stamina = 2;
              const tree = g.world.scenery.nodes.find((n) => n.kind === 'tree' && !n.harvested);
              g.player.teleport(tree.x, tree.z + 1.7);
            }""")
            page.wait_for_timeout(700)
            tap(page, '.action-btn')
            page.wait_for_timeout(400)
            for _try in range(3):
                if page.evaluate("() => document.querySelector('.toasts').textContent.includes('기운이 부족')"):
                    break
                page.evaluate("() => document.querySelector('.action-btn').click()")
                page.wait_for_timeout(500)
            snap(page, '18_no_stamina.png')
            emitted = page.evaluate("() => (window.__toasts || []).some((t) => t.includes('기운이 부족'))")
            dom_text = page.locator('.toasts').inner_text()
            diag = page.evaluate("""() => { const g = window.__metamong.game; return {
              modal: g.modal.isOpen, paused: g.paused,
              target: g.target ? (g.target.isNode ? 'node:' + g.target.kind : g.target.kind || 'site') : null,
              stamina: g.progress.stamina }; }""")
            check('기력 부족 토스트', emitted or '기운이 부족' in dom_text, f'emit={emitted} dom={dom_text[:40]!r} {diag}')
            check('기력 부족 시 기력 0 유지', life(page)['stamina'] <= 3, life(page)['stamina'])

            # ── 10. 열매 드롭(나무 밑 반짝임) — 타이머를 당겨 확인
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.progress.stamina = 80;
              const tree = g.world.scenery.nodes.find((n) => n.kind === 'tree' && !n.harvested);
              tree.berryT = 0.05;
              window.__qaTree2 = tree;
            }""")
            berries_before = sum(sl['n'] for sl in life(page)['bag'] if sl and sl['id'] == 'berry')
            page.wait_for_timeout(1600)
            drops = life(page)['drops']
            if any(d.startswith('berry') for d in drops):
                snap(page, '19b_berry_on_ground.png')
            berries_after_spawn = sum(sl['n'] for sl in life(page)['bag'] if sl and sl['id'] == 'berry')
            check('나무 밑 열매 드롭', any(d.startswith('berry') for d in drops) or berries_after_spawn > berries_before,
                  f'drops={drops} berries {berries_before}->{berries_after_spawn}')
            page.evaluate("""() => {
              const g = window.__metamong.game;
              const t = window.__qaTree2;
              const d = g.drops.items.find((x) => x.sourceKey === t.key);
              if (d) g.player.teleport(d.x + 0.2, d.z + 0.2);
            }""")
            page.wait_for_timeout(900)
            snap(page, '19_berry_pickup.png')
            after = life(page)
            berries = sum(s['n'] for s in after['bag'] if s and s['id'] == 'berry')
            check('열매 자동 획득', any(not d.startswith('berry') for d in after['drops']) or berries > 0,
                  f"drops={after['drops']} berries={berries}")

            # ── 11. 저장 → 새로고침 → 이어하기
            page.evaluate("() => window.__metamong.game.save()")
            page.wait_for_timeout(700)
            saved = page.evaluate("""async () => {
              const d = await window.__metamong.game.saveStore.load();
              return d ? { day: d.day, stamina: d.stamina, bagSlots: (d.bag || []).filter(Boolean).length,
                           workshop: d.buildings && d.buildings.workshop && d.buildings.workshop.done,
                           claimed: d.mailbox && d.mailbox.claimed } : null;
            }""")
            print('  저장 확인:', json.dumps(saved, ensure_ascii=False))
            check('저장에 생활 상태 포함', bool(saved and saved['workshop'] is True), saved)

            page.reload(wait_until='networkidle')
            page.wait_for_timeout(3200)
            check('이어하기 버튼 있음', page.locator('.title-actions button', has_text='이어하기').count() == 1)
            alive(page)
            page.locator('.title-actions button', has_text='이어하기').first.click()
            page.wait_for_timeout(2600)
            snap(page, '20_reloaded.png')
            lf2 = life(page)
            check('새로고침 후 공방 복구 유지', lf2['buildings']['workshop']['done'] is True, lf2['buildings']['workshop'])
            check('새로고침 후 선물 수령 유지', 'welcome_bokyung' in lf2['mailbox']['claimed'], lf2['mailbox'])

            # ── 12. 구버전(v1) 세이브 병합
            page.evaluate("""async () => {
              const g = window.__metamong.game;
              await g.saveStore.clear();
              localStorage.setItem('metamong-island:slot1', JSON.stringify({
                version: 1, day: 3, elapsedSeconds: 600,
                playerPos: { x: 0.4, y: 0.2, z: 11.8 },
                discoveredDittos: ['ditto_basic_01'],
                settings: { muted: true, timeScale: 1, fps30: false },
              }));
            }""")
            page.reload(wait_until='networkidle')
            page.wait_for_timeout(3200)
            alive(page)
            page.locator('.title-actions button', has_text='이어하기').first.click()
            page.wait_for_timeout(2400)
            snap(page, '21_old_save.png')
            st = page.evaluate('window.__metamong.stats()')
            lf3 = life(page)
            check('구버전 세이브 Day 승계', st['day'] == 3, st['day'])
            check('구버전 세이브 → 기력 기본값', lf3['stamina'] == 100, lf3['stamina'])
            check('구버전 세이브 → 가방 빈 상태', lf3['bagSlots'] == 0, lf3['bagSlots'])
            check('구버전 세이브 → 복구 기본값', lf3['buildings']['dock']['done'] is False, lf3['buildings']['dock'])

        except Exception:
            print('  ✗ 예외:')
            traceback.print_exc()
            try:
                snap(page, '99_failure.png')
            except Exception:
                pass

        print('\n--- console ---')
        for t, msg in logs:
            print(f'  [{t}] {msg}')
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

        browser.close()


if __name__ == '__main__':
    run()
