#!/usr/bin/env python3
"""배치 검증 — 평지 섬 안에 들어오는지, 길·건물·메타몽·고양이와 겹치지 않는지 확인한다.
config.js 의 좌표를 바꿀 때마다 돌려 본다. (빌드에는 포함되지 않는 개발 도구)
"""
import math
import sys

HALF = 24.0
LAND = 0.70
SEA = 1.00


def smoothstep(a, b, x):
    if a == b:
        return 0.0 if x < a else 1.0
    t = max(0.0, min(1.0, (x - a) / (b - a)))
    return t * t * (3 - 2 * t)


def island_height(x, z):
    d = math.hypot(x, z * 0.97) / HALF
    edge = smoothstep(0.565, 0.80, d)
    return LAND - (LAND + SEA) * edge


ROUTES = [
    [(0, 15.8), (0, 13.2), (0.2, 10.6), (0, 9.0)],
    [(0, 9.0), (-1.8, 7.8), (-3.8, 6.8), (-5.6, 5.6)],
    [(0.2, 9.0), (2.2, 7.8), (4.0, 6.6), (5.6, 5.2)],
    [(1.0, 8.8), (4.4, 7.4), (7.0, 3.6), (7.4, -1.2), (6.8, -3.6)],
]
PATH_HALF = 0.575
PLAYER_R = 0.36

LANDMARKS = {
    'dock': ((0, 17.0), 0.90),
    'workshop': ((-5.6, 5.6), 1.25),
    'vending': ((5.6, 5.2), 0.55),
    'lighthouse': ((6.8, -3.6), 0.80),
}
DITTOS = {
    'basic': ((-5.2, 11.4), 0.34),
    'pebble': ((-2.8, 12.4), 0.34),
    'mailbox': ((2.6, 11.6), 0.46),
    'flowerpot': ((-1.2, 6.2), 0.36),
    'bench': ((3.6, 9.6), 0.38),
    'mushroom': ((0.8, 6.0), 0.34),
    'signpost': ((-3.6, 9.2), 0.48),
}
CATS = {'somi': ((3.2, 3.4), 0.30), 'ongi': ((5.2, 2.2), 0.30)}
SPAWN = (0.4, 11.8)

NATURE = [
    # ── 광장 둘레 (가까운 소품)
    ('lamp', -1.7, 10.1, 2.0, 0.22),
    ('lamp', 1.9, 10.2, 2.0, 0.22),
    ('lamp', -3.9, 4.3, 2.0, 0.22),
    ('lamp', 7.8, 5.8, 2.0, 0.22),
    ('fence', -2.8, 5.6, 0.66, 0.28),
    ('fence', 2.0, 4.6, 0.66, 0.28),
    ('flowerbush', 1.2, 6.8, 0.60, 0.24),
    ('flowerbush', -4.0, 11.6, 0.56, 0.24),
    ('rock', 4.7, 10.4, 0.50, 0.26),
    ('rock', -6.2, 8.6, 0.46, 0.24),
    # ── 서쪽 (공방 둘레)
    ('cherry2', -9.6, 6.4, 3.4, 0.42),
    ('tree_tall', -7.6, 2.6, 3.2, 0.36),
    ('tree_round', -10.4, 9.4, 2.6, 0.34),
    ('cherry1', -6.8, 12.2, 3.0, 0.38),
    ('flowerbush', -7.8, 7.8, 0.62, 0.25),
    ('rock', -4.2, 3.2, 0.50, 0.26),
    # ── 북쪽 (부두 가는 길 양옆)
    ('tree_round', -2.8, 13.4, 2.6, 0.34),
    ('cherry1', 3.2, 13.6, 3.0, 0.38),
    ('tree_tall', 5.4, 13.0, 3.0, 0.36),
    ('fence', -5.4, 13.8, 0.66, 0.28),
    ('rock', 1.6, 13.9, 0.52, 0.26),
    # ── 동쪽 (자판기·등대 길)
    ('cherry2', 8.6, 7.2, 3.4, 0.42),
    ('tree_tall', 9.4, 3.2, 3.2, 0.36),
    ('tree_round', 8.0, 11.0, 2.6, 0.34),
    ('flowerbush', 5.6, 8.8, 0.58, 0.24),
    ('flowerbush', 9.8, 9.4, 0.60, 0.24),
    ('rock', 6.6, 9.6, 0.50, 0.26),
    # ── 뒤쪽 (등대 너머)
    ('tree_tall', -1.0, -5.2, 2.9, 0.36),
    ('tree_round', 2.6, -4.0, 2.6, 0.34),
    ('cherry2', -4.8, -2.0, 3.4, 0.42),
    ('tree_tall', 5.0, -6.0, 3.0, 0.36),
    ('tree_round', -7.4, -1.6, 2.6, 0.34),
    ('flowerbush', 0.4, -2.2, 0.56, 0.24),
    ('rock', -2.0, 1.4, 0.48, 0.26),
    ('flowerbush', 3.6, 0.8, 0.54, 0.24),
    ('rock', 9.2, -0.6, 0.54, 0.28),
    # ── 해안가 채우기
    ('tree_round', -3.8, 15.0, 2.6, 0.34),
    ('cherry1', 3.4, 15.0, 3.0, 0.38),
    ('flowerbush', -1.6, 13.6, 0.56, 0.24),
    ('rock', 5.0, 11.6, 0.48, 0.26),
    ('cherry2', -8.8, 12.2, 3.4, 0.42),
    ('flowerbush', 8.2, 12.2, 0.58, 0.24),
]


def seg_dist(p, a, b):
    px, pz = p
    ax, az = a
    bx, bz = b
    dx, dz = bx - ax, bz - az
    L = dx * dx + dz * dz
    if L == 0:
        return math.hypot(px - ax, pz - az)
    t = max(0, min(1, ((px - ax) * dx + (pz - az) * dz) / L))
    return math.hypot(px - (ax + dx * t), pz - (az + dz * t))


def path_dist(p):
    best = 1e9
    for route in ROUTES:
        for i in range(len(route) - 1):
            best = min(best, seg_dist(p, route[i], route[i + 1]))
    return best


def main():
    problems = []
    for name, (pos, r) in {**LANDMARKS, **DITTOS, **CATS}.items():
        if name == 'dock':
            continue
        h = island_height(*pos)
        if h < 0.20:
            problems.append(f'{name} 물가에 걸림 h={h:.2f} at {pos}')
        pd = path_dist(pos)
        if name not in LANDMARKS and pd < PATH_HALF + r + 0.15:
            problems.append(f'{name} 길 위에 있음 path={pd:.2f} at {pos}')

    for i, (frame, x, z, h, c) in enumerate(NATURE):
        p = (x, z)
        if island_height(x, z) < 0.22:
            problems.append(f'#{i} {frame} 물가/바다 h={island_height(x, z):.2f} at {p}')
        pd = path_dist(p)
        if pd < PATH_HALF + c + 0.18:
            problems.append(f'#{i} {frame} 길 막음 path={pd:.2f} at {p}')
        for name, (lp, lr) in {**LANDMARKS, **DITTOS, **CATS}.items():
            d = math.hypot(x - lp[0], z - lp[1])
            if d < lr + c + 0.25:
                problems.append(f'#{i} {frame} {name} 겹침 d={d:.2f} at {p}')
        for j, (f2, x2, z2, h2, c2) in enumerate(NATURE):
            if j <= i:
                continue
            d = math.hypot(x - x2, z - z2)
            if d < c + c2 + 0.55:
                problems.append(f'#{i}/{j} {frame}↔{f2} 간격 {d:.2f} at {p}/{(x2, z2)}')
        if math.hypot(x - SPAWN[0], z - SPAWN[1]) < c + 0.8:
            problems.append(f'#{i} {frame} 스폰 막음 at {p}')

    names = list(DITTOS.items()) + list(CATS.items())
    for i in range(len(names)):
        for j in range(i + 1, len(names)):
            a, b = names[i], names[j]
            d = math.hypot(a[1][0][0] - b[1][0][0], a[1][0][1] - b[1][0][1])
            if d < 2.0:
                problems.append(f'{a[0]}↔{b[0]} 너무 가까움 {d:.2f}')
            if d < a[1][1] + b[1][1] + PLAYER_R * 2:
                problems.append(f'{a[0]}↔{b[0]} 사이로 못 지나감 {d:.2f}')

    print(f'자연물 {len(NATURE)}개')
    if problems:
        print(f'⚠️  문제 {len(problems)}건')
        for p in problems:
            print('  -', p)
    else:
        print('✅ 충돌·범위 문제 없음')

    pts = [v[0] for v in LANDMARKS.values()] + [v[0] for v in DITTOS.values()] + [v[0] for v in CATS.values()]
    far, pair = 0, None
    for i in range(len(pts)):
        for j in range(i + 1, len(pts)):
            d = math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1])
            if d > far:
                far, pair = d, (pts[i], pts[j])
    print(f'가장 먼 두 대상 {far:.1f} 유닛 → 도보 {far / 4.3:.1f}초 {pair}')
    xs = [n[1] for n in NATURE] + [v[0][0] for v in LANDMARKS.values()]
    zs = [n[2] for n in NATURE] + [v[0][1] for v in LANDMARKS.values()]
    print(f'에셋 범위 x [{min(xs):.1f}, {max(xs):.1f}] z [{min(zs):.1f}, {max(zs):.1f}]')
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(main())
