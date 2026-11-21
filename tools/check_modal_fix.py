#!/usr/bin/env python3
"""
check_modal_fix.py — 390×844 실측: ①심기 모달 행 레이아웃 ②HUD 실제 좌표 클릭 ③부두 복구 상태 변화

한 페이지를 계속 쓰지 않고, 케이스마다 페이지를 새로 열어 짧게 끝낸다(소프트 렌더러 보호).
사용: python3 tools/check_modal_fix.py [case ...]
출력: screenshots/modal-fix/*.png
"""
import json
import os
import sys
import time

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402
from serve_dist import start  # noqa: E402

OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'modal-fix'))
DIST = os.path.abspath(os.path.join(HERE, '..', 'dist'))
os.makedirs(OUT, exist_ok=True)


def boot(browser, url, save=None):
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=1,
                              is_mobile=True, has_touch=True, service_workers='block')
    page = ctx.new_page()
    errs = []
    page.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
    page.on('pageerror', lambda e: errs.append('pageerror: ' + str(e)))
    page.goto(url, wait_until='domcontentloaded')
    page.wait_for_timeout(2400)
    if save is not None:
        page.evaluate("(s) => { window.__metamong.game.progress.applyJSON ? 0 : 0; }", save)
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(2000)
    return ctx, page, errs


MEASURE = r"""
() => {
  const card = document.querySelector('.modal.open .modal-card');
  if (!card) return { open: false };
  const rows = [...card.querySelectorAll('.seed-row, .shop-row, .ach-row, .row, .welcome-row, .menu-entry, .req-row, .goods-row')];
  const out = rows.map((r) => {
    const txt = r.querySelector('.gmain, .amain, .rmain, .wmain, .mmain, .info, .nm');
    const btnEls = [...r.querySelectorAll('button')];
    const btn = btnEls.length ? btnEls.reduce((a, b) => (a.getBoundingClientRect().width >= b.getBoundingClientRect().width ? a : b)) : null;
    const tr = txt ? txt.getBoundingClientRect() : null;
    const br = btn ? btn.getBoundingClientRect() : null;
    return {
      cls: r.className, text: ((txt ? txt.innerText : r.innerText) || '').replace(/\s+/g, ' ').slice(0, 44),
      rowW: Math.round(r.getBoundingClientRect().width),
      textW: tr ? Math.round(tr.width) : null, textH: tr ? Math.round(tr.height) : null,
      btnW: br ? Math.round(br.width) : null,
    };
  });
  const bad = out.filter((r) => r.textW !== null && r.textW < 24 && (r.text || '').trim().length > 6);
  return {
    open: true,
    title: (card.querySelector('.modal-title') || {}).textContent || '',
    cardW: Math.round(card.getBoundingClientRect().width),
    rows: out, bad: bad.map((b) => b.cls + ' :: ' + b.text),
    overflowX: card.scrollWidth > card.clientWidth + 1,
  };
}
"""

PREP = """() => {
  const g = window.__metamong.game;
  const p = g.progress;
  p.supplies['seed_strawberry'] = 2;
  p.supplies['seed_carrot'] = 0;
  p.supplies['seed_cabbage'] = 1;
  p.supplies['seed_rice'] = 1;
  p.coins = 420;
}"""


def report(name, m, errs, extra=None):
    print(f"\n=== {name}  [{m.get('title', '')}] cardW={m.get('cardW')} overflowX={m.get('overflowX')}")
    for r in m.get('rows') or []:
        flag = ' ⚠️' if (r['textW'] is not None and r['textW'] < 24 and (r['text'] or '').strip()) else ''
        print(f"   {r['cls'][:26]:26} row={r['rowW']:>3} text={str(r['textW']):>4} btn={str(r['btnW']):>3} {r['text'][:36]}{flag}")
    if m.get('bad'):
        print('   ❗세로 찌그러짐:', m['bad'])
    else:
        print('   ✅세로 찌그러짐 없음')
    if extra:
        print('   ·', extra)
    if errs:
        print('   console:', errs[:3])


def case_modals(browser, url):
    names = [
        ('01_farm_seed', "g.openSeedPicker(2)"),
        ('02_paddy_seed', "g.openPaddySeedPicker(0)"),
        ('03_farm', "g.openFarm()"),
        ('04_paddy', "g.openPaddy()"),
        ('05_vending', "g.openVending()"),
        ('06_workshop', "g.openWorkshop()"),
        ('07_cooking', "g.openCooking()"),
        ('08_upgrade', "g.openUpgrade()"),
        ('09_achievements', "g.openAchievements()"),
        ('10_quest', "g.openQuest()"),
        ('11_cart', "g.openCart()"),
        ('12_welcome', "g.openWelcome()"),
    ]
    # 한 번만 부팅하고 모달만 갈아 끼운다(소프트 렌더러에서 부팅이 19초라 케이스마다 하면 너무 느리다)
    ctx, page, errs = boot(browser, url)
    page.evaluate(PREP)
    bad_all = {}
    for name, js in names:
        page.evaluate(f"() => {{ const g = window.__metamong.game; {js}; }}")
        page.wait_for_timeout(380)
        m = page.evaluate(MEASURE)
        page.screenshot(path=os.path.join(OUT, name + '.png'))
        report(name, m, errs)
        bad_all[name] = m.get('bad') or []
        page.evaluate("() => window.__metamong.game.modal.close()")
        page.wait_for_timeout(180)
    ctx.close()
    print('\n=== 요약')
    for k, v in bad_all.items():
        print(('❌ ' if v else '✅ ') + k, v if v else '')
    return bad_all


def case_hud(browser, url):
    """실제 좌표 클릭(터치 포인터)으로 우체통·의뢰·웰컴 배너가 눌리는지"""
    ctx, page, errs = boot(browser, url)
    page.wait_for_timeout(600)
    results = {}
    for sel, want in [('.mail-btn', '우편함|편지|우체통'), ('.quest-btn', '의뢰'), ('.welcome-chip', '첫걸음')]:
        info = page.evaluate(
            """(sel) => {
                const el = document.querySelector(sel);
                if (!el) return { found: false };
                const r = el.getBoundingClientRect();
                const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
                const hit = document.elementFromPoint(cx, cy);
                return {
                    found: true, x: cx, y: cy, w: Math.round(r.width), h: Math.round(r.height),
                    pe: getComputedStyle(el).pointerEvents,
                    hitTag: hit ? hit.tagName + '.' + (hit.className || '') : null,
                    hitIsSelf: !!(hit && (hit === el || el.contains(hit))),
                };
            }""",
            sel,
        )
        if not info.get('found'):
            results[sel] = {'clicked': False, 'note': '버튼 없음'}
            continue
        page.mouse.click(info['x'], info['y'])  # 실제 좌표 클릭
        page.wait_for_timeout(600)
        opened = page.evaluate("() => { const c = document.querySelector('.modal.open .modal-card'); return c ? (c.querySelector('.modal-title')||{}).textContent : ''; }")
        page.screenshot(path=os.path.join(OUT, f'20_hud{sel.replace(".", "_")}.png'))
        results[sel] = {'hit': info['hitTag'], 'hitIsSelf': info['hitIsSelf'], 'pe': info['pe'],
                        'opened': opened, 'clicked': bool(opened)}
        # 다음 버튼을 누르기 전 모달을 닫고 페이드아웃까지 기다린다
        if opened:
            page.evaluate("() => window.__metamong.game.modal.close()")
            page.wait_for_timeout(800)
    print('\n=== HUD 실제 좌표 클릭')
    for k, v in results.items():
        print('  ', k, json.dumps(v, ensure_ascii=False))
    if errs:
        print('   console:', errs[:3])
    ctx.close()
    return results


def case_dock(browser, url):
    """부두 복구 전 → 복구 → 외형(색·기울기)·이름표·액션 라벨 변화 + 저장/리로드 유지"""
    ctx, page, errs = boot(browser, url)
    st = """() => {
        const g = window.__metamong.game;
        const site = g.world.scenery.sites.find(s => s.id === 'dock');
        const lab = g.landmarkLabels.items.find(i => i.site.id === 'dock');
        const bb = site.billboard;
        return {
          built: g.progress.building('dock').done,
          siteBuilt: site.built,
          tint: '#' + site.tint.getHexString(),
          color: '#' + bb.material.color.getHexString(),
          scaleY: +bb.mesh.scale.y.toFixed(3),
          leanZ: +(bb.mesh.rotation.z || 0).toFixed(3),
          label: lab.dayEl.textContent,
          labelDone: lab.el.classList.contains('done'),
        };
    }"""
    # 부두 근처로 순간이동해 상황 액션 라벨을 읽는다 (카메라도 따라오게 잠깐 기다린다)
    act = """() => {
        const g = window.__metamong.game;
        const site = g.world.scenery.sites.find(s => s.id === 'dock');
        g.player.teleport(site.x, site.z + 2.6);
        return 1;
    }"""
    page.evaluate(act)
    page.wait_for_timeout(1400)
    before = page.evaluate(st)
    action_before = page.evaluate("() => document.querySelector('.action-btn .txt').textContent")
    page.screenshot(path=os.path.join(OUT, '30_dock_before.png'))

    # 재료를 채우고 복구 (실제 버튼 경로: 재료 투입 → 복구 완료)
    page.evaluate("""() => {
        const g = window.__metamong.game;
        const st = g.progress.building('dock');
        st.invested['log'] = 3;
        st.invested['stone'] = 2;
        g.progress.inventory.bag['log'] = (g.progress.inventory.bag['log'] || 0) + 3;
        g.progress.inventory.bag['stone'] = (g.progress.inventory.bag['stone'] || 0) + 2;
        g.openBuild('dock');
    }""")
    page.wait_for_timeout(450)
    page.screenshot(path=os.path.join(OUT, '31_dock_buildpanel.png'))
    # [복구 완료!] 버튼을 실제 좌표로 클릭
    btn = page.evaluate("""() => {
        const b = [...document.querySelectorAll('.modal.open .modal-actions button')].find(x => x.textContent.includes('복구 완료'));
        if (!b) return null;
        const r = b.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2, disabled: b.disabled };
    }""")
    print('  복구 완료 버튼:', btn)
    if btn and not btn['disabled']:
        page.mouse.click(btn['x'], btn['y'])
        page.wait_for_timeout(1200)
    page.evaluate("() => window.__metamong.game.modal.close()")
    page.wait_for_timeout(900)
    after = page.evaluate(st)
    page.evaluate(act)
    page.wait_for_timeout(600)
    action_after = page.evaluate("() => document.querySelector('.action-btn .txt').textContent")
    page.screenshot(path=os.path.join(OUT, '32_dock_after.png'))

    print('\n=== 부두 복구')
    print('  전 :', json.dumps(before, ensure_ascii=False))
    print('  후 :', json.dumps(after, ensure_ascii=False))
    print('  액션 라벨:', action_before, '→', action_after)

    # 저장 후 새로고침 → 유지 확인
    page.evaluate("() => window.__metamong.game.save()")
    page.wait_for_timeout(900)
    page.reload(wait_until='domcontentloaded')
    page.wait_for_timeout(2600)
    page.locator('.title-actions button').first.click()   # [이어하기]
    page.wait_for_timeout(2400)
    reload = page.evaluate(st)
    print('  리로드 후:', json.dumps(reload, ensure_ascii=False))
    page.screenshot(path=os.path.join(OUT, '33_dock_reload.png'))
    if errs:
        print('   console:', errs[:5])
    ctx.close()
    return {'before': before, 'after': after, 'action_before': action_before,
            'action_after': action_after, 'reload': reload}


def case_all_buildings(browser, url):
    """네 건물 전부: 복구 전(회색·🚧·복구 전) → 복구(제 색·✨) + 세이브 유지"""
    ctx, page, errs = boot(browser, url)
    st = """() => {
        const g = window.__metamong.game;
        return g.world.scenery.sites.map((s) => {
          const lab = g.landmarkLabels.items.find((i) => i.site.id === s.id);
          return {
            id: s.id, built: !!s.built, tint: '#' + s.tint.getHexString(),
            scaleY: +s.billboard.mesh.scale.y.toFixed(2),
            marker: s.marker ? s.marker.visible : null,
            label: lab ? lab.dayEl.textContent : '(없음)',
          };
        });
    }"""
    before = page.evaluate(st)
    page.evaluate("""() => {
        const g = window.__metamong.game;
        for (const id of ['workshop', 'vending', 'dock', 'lighthouse']) {
          const st = g.progress.building(id);
          if (id === 'workshop') { st.invested['log'] = 4; st.invested['stone'] = 3; }
          if (id === 'vending') { st.invested['log'] = 4; st.invested['stone'] = 4; }
          if (id === 'dock') { st.invested['log'] = 3; st.invested['stone'] = 2; }
          if (id === 'lighthouse') { st.invested['log'] = 6; st.invested['stone'] = 5; }
          g.completeBuild(id);
        }
        g.modal.close();
    }""")
    page.wait_for_timeout(1600)
    after = page.evaluate(st)
    print('\n=== 네 건물 복구')
    for b, a in zip(before, after):
        print(f"  {b['id']:10} {b['tint']}→{a['tint']}  scaleY {b['scaleY']}→{a['scaleY']}  "
              f"🚧{b['marker']}→{a['marker']}  {b['label']} → {a['label']}  "
              f"built {b['built']}→{a['built']}")
    # 광장(공방·자판기) 쪽 모습
    page.evaluate("() => { const g = window.__metamong.game; g.player.teleport(-2, 12); }")
    page.wait_for_timeout(1400)
    page.screenshot(path=os.path.join(OUT, '40_buildings_done.png'))

    page.evaluate("() => window.__metamong.game.save()")
    page.wait_for_timeout(900)
    page.reload(wait_until='domcontentloaded')
    page.wait_for_timeout(2600)
    page.locator('.title-actions button').first.click()
    page.wait_for_timeout(2200)
    reload = page.evaluate(st)
    print('  리로드 후:', json.dumps([{k: r[k] for k in ('id', 'built', 'tint', 'scaleY', 'marker', 'label')} for r in reload], ensure_ascii=False))
    page.screenshot(path=os.path.join(OUT, '41_buildings_reload.png'))
    if errs:
        print('   console:', errs[:5])
    ctx.close()
    return {'before': before, 'after': after, 'reload': reload}


GENERIC = r"""
() => {
  const card = document.querySelector('.modal.open .modal-card');
  if (!card) return { open: false };
  const bad = [];
  card.querySelectorAll('*').forEach((el) => {
    const cs = getComputedStyle(el);
    if (!cs.display.includes('flex') && cs.display !== 'grid') return;
    for (const ch of el.children) {
      const c2 = getComputedStyle(ch);
      if (c2.display === 'none' || c2.position === 'absolute') continue;
      const r = ch.getBoundingClientRect();
      const txt = (ch.innerText || '').trim();
      // 글자가 6자 넘는데 폭이 22px 미만 = 세로 1글자 찌그러짐
      if (txt.length > 6 && r.width > 0 && r.width < 22) {
        bad.push({ parent: String(el.className).slice(0, 34), child: String(ch.className).slice(0, 24), w: Math.round(r.width), text: txt.replace(/\s+/g, ' ').slice(0, 34) });
      }
    }
  });
  return {
    open: true,
    title: (card.querySelector('.modal-title') || {}).textContent || '',
    bad,
    overflowX: card.scrollWidth > card.clientWidth + 2,
    cardW: Math.round(card.getBoundingClientRect().width),
  };
}
"""

AUDIT_MODALS = [
    ('a01_farm_seed', "g.openSeedPicker(0)"),
    ('a02_paddy_seed', "g.openPaddySeedPicker(0)"),
    ('a03_farm', "g.openFarm()"),
    ('a04_paddy', "g.openPaddy()"),
    ('a05_vending', "g.openVending()"),
    ('a06_vending_sell', "g.openVending()"),
    ('a07_workshop', "g.openWorkshop()"),
    ('a08_cooking', "g.openCooking()"),
    ('a09_upgrade', "g.openUpgrade()"),
    ('a10_achievements', "g.openAchievements()"),
    ('a11_quest', "g.openQuest()"),
    ('a12_cart', "g.openCart()"),
    ('a13_bag', "g.openBag()"),
    ('a14_storage', "g.openStorage()"),
    ('a15_codex', "g.openCodex()"),
    ('a16_rank', "g.openRank()"),
    ('a17_mailbox', "g.openMailbox()"),
    ('a18_cat', "g.openCat('somi')"),
    ('a19_fish', "g.openFishSpot()"),
    ('a20_minimap', "g.openMinimap()"),
    ('a21_welcome', "g.openWelcome()"),
    # 5단계: 방어전 화면
    ('a22_defense', "g.openDefense()"),
    ('a23_defense_slot', "g.openDefenseSlot(0)"),
    ('a24_defense_craft', "g.openDefenseCraft()"),
    ('a25_defense_result', "g.paused = true; g.modal.open(g.phase5.result(g.defense && g.defense.lastResult ? g.defense.lastResult : { victory: false, day: 6, total: 7, down: 3, stolen: 12, turretHits: 4, somiHits: 1, ongiHits: 2, reward: null }))"),
]

BUILD_ALL = """() => {
  const g = window.__metamong.game;
  const set = { workshop: { log: 4, stone: 3 }, vending: { log: 4, stone: 4 }, dock: { log: 3, stone: 2 }, lighthouse: { log: 6, stone: 5 } };
  for (const [id, r] of Object.entries(set)) {
    const s = g.progress.building(id);
    for (const [k, v] of Object.entries(r)) s.invested[k] = v;
    g.completeBuild(id);
  }
  const p = g.progress;
  p.supplies['seed_strawberry'] = 2;
  p.supplies['seed_rice'] = 1;
  p.coins = 420;
  g.modal.close();
}"""


def case_audit(browser, url):
    """공유 카드 스타일을 쓰는 모든 모달을 일반 규칙으로 전수 검사"""
    ctx, page, errs = boot(browser, url)
    page.evaluate(BUILD_ALL)
    page.wait_for_timeout(1200)
    problems = {}
    for name, js in AUDIT_MODALS:
        page.evaluate(f"() => {{ const g = window.__metamong.game; {js}; }}")
        page.wait_for_timeout(360)
        m = page.evaluate(GENERIC)
        page.screenshot(path=os.path.join(OUT, name + '.png'))
        bad = m.get('bad') or []
        problems[name] = bad
        print(f"\n=== {name} [{m.get('title','')}] cardW={m.get('cardW')} overflowX={m.get('overflowX')} "
              + ('✅' if not bad else f'❗{len(bad)}'))
        for b in bad:
            print('    ', b)
        page.evaluate("() => window.__metamong.game.modal.close()")
        page.wait_for_timeout(320)
    ctx.close()
    print('\n=== 전수 요약')
    for k, v in problems.items():
        print(('❌ ' if v else '✅ ') + k, v if v else '')
    if errs:
        print('console:', errs[:5])
    return problems


def main():
    cases = sys.argv[1:] or ['modals', 'hud', 'dock']
    httpd, port = start(DIST)
    url = f'http://127.0.0.1:{port}/'
    t0 = time.time()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
            if 'modals' in cases:
                case_modals(browser, url)
            if 'hud' in cases:
                case_hud(browser, url)
            if 'dock' in cases:
                case_dock(browser, url)
            if 'buildings' in cases:
                case_all_buildings(browser, url)
            if 'audit' in cases:
                case_audit(browser, url)
            browser.close()
    finally:
        httpd.shutdown()
    print(f'\n완료 {time.time() - t0:.0f}s')


if __name__ == '__main__':
    main()
