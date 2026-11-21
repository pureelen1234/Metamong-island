#!/usr/bin/env python3
"""
build_raider_sprites.py — 불청객(수집단) HD-2D 도트 아틀라스를 게임 형식으로 만든다.

2026-11-21 제보("약탈자가 로봇 같아") 대응 — 32×32 픽셀 캔버스 대신,
컨셉 시안(downloads/metamong_concept_intruder.png)을 기준으로 뽑은
고해상도 도트 시트(2행×4열 = 정면 걷기 4 + 뒷면 걷기 4)를 게임 아틀라스로 변환한다.

입력 (slice_sprites.py 가 만들어 둔 것):
  downloads/raider_gen/sliced/<set>/<set>_atlas_4x2.png   균일 셀 · 하단 기준선 정렬
  downloads/raider_gen/sliced/<set>/<set>_atlas_native_4x2.png  (네이티브 픽셀 ×1/2)
  downloads/raider_gen/sliced/<set>/<set>_atlas.json      셀 크기 · 프레임 bbox

출력 (atlas.js 가 읽는 형식):
  public/sprites/<set>_sheet.png
  public/sprites/<set>.json   { set, cell:[w,h], grid:[4,2], sheet, frames:[{name,row,col,w,h}], notes }

    python3 tools/build_raider_sprites.py
"""
import json
import os
import shutil

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..'))
SRC = os.path.join(ROOT, '..', '..', 'downloads', 'raider_gen', 'sliced')
OUT = os.path.join(ROOT, 'public', 'sprites')

ROWS = [['front1', 'front2', 'front3', 'front4'], ['back1', 'back2', 'back3', 'back4']]

SETS = {
    'raider': '회색 망토 수집단 (기본)',
    'raider_big': '덩치 망토 수집단 (넓은 어깨·긴 망토)',
    'raider_runner': '발빠른 수집단 (가는 몸·펄럭이는 스카프)',
}


def main():
    os.makedirs(OUT, exist_ok=True)
    for set_key, label in SETS.items():
        base = os.path.join(SRC, set_key)
        atlas_png = os.path.join(base, f'{set_key}_atlas_4x2.png')
        native_png = os.path.join(base, f'{set_key}_atlas_native_4x2.png')
        atlas_json = os.path.join(base, f'{set_key}_atlas.json')
        if not (os.path.exists(atlas_png) and os.path.exists(atlas_json)):
            raise SystemExit(f'슬라이스 결과가 없습니다: {base} — slice_sprites.py 를 먼저 실행하세요')

        man = json.load(open(atlas_json))
        # 다른 캐릭터 시트와 같은 픽셀 밀도로 — 시트가 2배로 뽑혔으면 네이티브(1/2)를 쓴다
        scale = int(man.get('pixel_scale') or 1)
        use_native = scale > 1 and os.path.exists(native_png)
        div = scale if use_native else 1
        src_png = native_png if use_native else atlas_png
        cell = [max(1, man['cell'][0] // div), max(1, man['cell'][1] // div)]
        by_rc = {(c['row'], c['col']): c for c in man['frames'] if not c.get('empty')}

        frames = []
        for r, names in enumerate(ROWS, start=1):
            for c, name in enumerate(names, start=1):
                f = by_rc.get((r, c))
                if not f:
                    raise SystemExit(f'{set_key}: r{r}c{c} 프레임이 비었습니다')
                frames.append({'name': name, 'row': r, 'col': c, 'w': max(1, f['w'] // div), 'h': max(1, f['h'] // div)})

        shutil.copyfile(src_png, os.path.join(OUT, f'{set_key}_sheet.png'))
        manifest = {
            'set': set_key,
            'cell': cell,
            'grid': [4, 2],
            'sheet': f'{set_key}_sheet.png',
            'frames': frames,
            'notes': [
                f'{label} — 컨셉 시안(downloads/metamong_concept_intruder.png) 기반 HD-2D 도트',
                '1행 정면 걷기 4프레임 · 2행 뒷면 걷기 4프레임 (남쪽으로 갈 때 정면, 북쪽으로 갈 때 뒷면)',
                f'셀 {cell[0]}×{cell[1]} · 시트 {man["size"][0] // div}×{man["size"][1] // div} (네이티브 ×1/{div})',
            ],
        }
        with open(os.path.join(OUT, f'{set_key}.json'), 'w') as f:
            json.dump(manifest, f, ensure_ascii=False, indent=1)
        print(f'{set_key:14s} cell={cell[0]}x{cell[1]} frames={len(frames)} -> public/sprites/{set_key}_sheet.png')


main()
