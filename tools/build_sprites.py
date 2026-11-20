#!/usr/bin/env python3
"""
build_sprites.py — downloads/metamong_assets/pixel/sliced_test 의 프레임을 게임용 시트로 정규화

  · 주인공 r4c3 결함 프레임 복원(4행 2열 '손 흔들기'를 좌우 반전한 반대손 흔들기)
  · 주인공 발밑에 구워진 회색 그림자 제거(게임에서 자체 블롭 그림자를 깐다)
  · 세트별로 셀 크기를 통일하고 '바닥 정렬 + 가로 중심'으로 다시 붙여 걷기 애니메이션 흔들림 제거

출력:
  public/sprites/<set>_sheet.png   (균일 셀 아틀라스)
  public/sprites/<set>.json        (셀 크기·프레임 이름 매니페스트)
  public/sprites/raw/<set>/...     (원본 프레임·아틀라스 사본은 copy_raw.py 담당)
"""
import json
import os
import shutil
import sys

from PIL import Image

SRC = os.path.join(os.path.dirname(__file__), '..', '..', '..', 'downloads', 'metamong_assets', 'pixel', 'sliced_test')
SRC = os.path.abspath(SRC)
OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'sprites'))

PAD = 2

SETS = {
    'protagonist': {
        'file': 'protagonist',
        'grid': (4, 4),
        'rows': [
            ['front1', 'front2', 'front3', 'front4'],
            ['back1', 'back2', 'back3', 'back4'],
            ['side1', 'side2', 'side3', 'side4'],
            ['idle', 'wave', 'wave_alt', 'cheer'],
        ],
    },
    'somi': {
        'file': 'somi',
        'grid': (4, 5),
        'rows': [
            ['front1', 'front2', 'front3', 'front4'],
            ['back1', 'back2', 'back3', 'back4'],
            ['left1', 'left2', 'left3', 'left4'],
            ['right1', 'right2', 'right3', 'right4'],
            ['sit', 'loaf', 'groom', 'happy'],
        ],
    },
    'ongi': {
        'file': 'ongi',
        'grid': (4, 5),
        'rows': [
            ['front1', 'front2', 'front3', 'front4'],
            ['back1', 'back2', 'back3', 'back4'],
            ['left1', 'left2', 'left3', 'left4'],
            ['right1', 'right2', 'right3', 'right4'],
            ['sit', 'loaf', 'groom', 'happy'],
        ],
    },
    'ditto_basic': {
        'file': 'ditto_basic',
        'grid': (4, 4),
        'rows': [
            ['idle1', 'idle2', 'idle3', 'idle4'],
            ['smile1', 'smile2', 'smile3', 'smile4'],
            ['flat', 'melt', 'tall', 'surprise'],
            ['joy1', 'joy2', 'joy3', 'joy4'],
        ],
    },
    'disguises': {
        'file': 'disguises',
        'grid': (3, 2),
        'rows': [
            ['pebble', 'mailbox', 'flowerpot'],
            ['bench', 'mushroom', 'signpost'],
        ],
    },
    'buildings': {
        'file': 'buildings',
        'grid': (2, 2),
        'rows': [
            ['workshop', 'lighthouse'],
            ['vending', 'dock'],
        ],
    },
    'nature': {
        'file': 'nature',
        'grid': (4, 2),
        'rows': [
            ['cherry1', 'cherry2', 'tree_round', 'tree_tall'],
            ['flowerbush', 'rock', 'fence', 'lamp'],
        ],
    },
}


def shadow_mask(im, band_frac=0.13):
    """발밑에 구워진 회색 그림자 픽셀을 찾는다 (바닥 띠 안에서만, 저채도·고휘도)."""
    w, h = im.size
    px = im.load()
    y0 = int(h * (1 - band_frac))
    hits = []
    for y in range(y0, h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            mx, mn = max(r, g, b), min(r, g, b)
            bri = (r + g + b) / 3
            if (bri > 150 and (mx - mn) < 46) or (bri > 224 and (mx - mn) < 18):
                hits.append((x, y))
    return hits


def strip_shadow(im):
    im = im.convert('RGBA')
    px = im.load()
    hits = shadow_mask(im)
    for x, y in hits:
        r, g, b, _ = px[x, y]
        px[x, y] = (r, g, b, 0)
    # 그림자 끝자락의 반투명 잔여물(1px 테두리)도 지운다
    for x, y in hits:
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < im.size[0] and 0 <= ny < im.size[1]:
                r, g, b, a = px[nx, ny]
                if a and max(r, g, b) - min(r, g, b) < 46 and (r + g + b) / 3 > 150:
                    px[nx, ny] = (r, g, b, 0)
    return im


def load_frames(set_key, spec):
    base = os.path.join(SRC, spec['file'])
    with open(os.path.join(base, f"{set_key}_atlas.json"), encoding='utf-8') as f:
        atlas = json.load(f)
    by_rc = {(fr['row'], fr['col']): fr for fr in atlas['frames']}
    out = {}
    cols, rows = spec['grid']
    for r in range(1, rows + 1):
        for c in range(1, cols + 1):
            fr = by_rc[(r, c)]
            im = Image.open(os.path.join(base, 'frames', fr['file'])).convert('RGBA')
            out[(r, c)] = im
    return out


def main():
    os.makedirs(OUT, exist_ok=True)
    report = {}

    for set_key, spec in SETS.items():
        frames = load_frames(set_key, spec)
        cols, rows = spec['grid']

        note = []
        if set_key == 'protagonist':
            cleaned = 0
            for key, im in list(frames.items()):
                before = im.copy()
                after = strip_shadow(im)
                if before.tobytes() != after.tobytes():
                    cleaned += 1
                frames[key] = after
            note.append(f'그림자 제거 {cleaned}/{len(frames)} 프레임')

            # 4행 3열 결함(주먹 조각) → 4행 2열 손 흔들기를 좌우 반전해 자연스러운 반대손 흔들기로 복원
            wave = frames[(4, 2)]
            fixed = wave.transpose(Image.FLIP_LEFT_RIGHT)
            frames[(4, 3)] = fixed
            fixed_dir = os.path.join(SRC, 'protagonist', 'frames_fixed')
            os.makedirs(fixed_dir, exist_ok=True)
            fixed.save(os.path.join(fixed_dir, 'protagonist_r4c3_fixed.png'))
            note.append('r4c3 복원 → frames_fixed/protagonist_r4c3_fixed.png')

        cell_w = max(im.size[0] for im in frames.values()) + PAD * 2
        cell_h = max(im.size[1] for im in frames.values()) + PAD * 2
        sheet = Image.new('RGBA', (cell_w * cols, cell_h * rows), (0, 0, 0, 0))

        frames_meta = []
        for r in range(1, rows + 1):
            for c in range(1, cols + 1):
                im = frames[(r, c)]
                w, h = im.size
                # 가로: 실루엣 중심, 세로: 바닥 정렬(발이 같은 높이에 닿게)
                x0 = (c - 1) * cell_w + (cell_w - w) // 2
                y0 = (r - 1) * cell_h + (cell_h - PAD - h)
                sheet.alpha_composite(im, (x0, y0))
                name = spec['rows'][r - 1][c - 1]
                frames_meta.append({'name': name, 'row': r, 'col': c, 'w': w, 'h': h})

        sheet_path = os.path.join(OUT, f'{set_key}_sheet.png')
        sheet.save(sheet_path)
        manifest = {
            'set': set_key,
            'cell': [cell_w, cell_h],
            'grid': [cols, rows],
            'sheet': f'{set_key}_sheet.png',
            'frames': frames_meta,
            'notes': note,
        }
        with open(os.path.join(OUT, f'{set_key}.json'), 'w', encoding='utf-8') as f:
            json.dump(manifest, f, ensure_ascii=False, indent=1)
        report[set_key] = (sheet.size, cell_w, cell_h, note)

    for k, v in report.items():
        print(f'{k:14s} sheet={v[0]} cell={v[1]}x{v[2]} {v[3]}')


if __name__ == '__main__':
    main()
