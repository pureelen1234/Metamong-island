# 🏝️ 어설픈 메타몽 섬 — Phase 1 (코어 3D & 20분 루프 MVP)

보경 님을 위한 파스텔 로우폴리 힐링 아일랜드. 기획서 GDD v1.6의 **Phase 1**을 모바일 웹 3D(PWA)로 구현한 빌드입니다.

## 실행

```bash
cd projects/metamong-island
npm install
npm run dev        # 개발 서버 (http://127.0.0.1:5173)
npm run build      # 프로덕션 빌드 → dist/
npm run preview    # 빌드 결과 미리보기 (http://127.0.0.1:4173)
```

`dist/` 폴더를 정적 호스팅에 그대로 올리면 됩니다(상대 경로 `base: './'`).

## Phase 1 구현 범위

| 항목 | 구현 |
| --- | --- |
| 모바일 세로 화면 | `100dvh`, `touch-action: none`, `overscroll-behavior: none`, `color-scheme: light`, `manifest.json` `portrait` |
| WebGL 안전 처리 | `webglcontextlost`(preventDefault) → 복구 안내 오버레이, `webglcontextrestored` → 자동 재개 |
| 타이틀 | 실시간 섬 3D 프리뷰(카메라 자동 회전) + `[이어하기]/[새로 시작]` (저장 없으면 새로 시작만) |
| 섬 지형 | `48×48` 그리드 높이맵 → 평면 셰이딩 메시, 모래·잔디·언덕·바다(셰이더 물결) |
| 자연물 | `InstancedMesh` 나무 118 · 소나무 34 · 덤불 64 · 꽃 300 · 조약돌 170 |
| 랜드마크 | 부두(5일) · 공방(10일) · 고양이 쉼터(17일) · 등대(24일) 복구 예정 부지 + 표식·이름표 |
| 액터 | 주인공(3인칭 팔로우 카메라, 지형 경계·구조물 충돌 클램핑), 솜이·옹이 고양이 |
| 맛보기 | 점 눈(`· ‿ ·`) 위장 돌멩이 메타몽 2마리 — 다가가 액션/터치 시 흔들리며 도감 등록 |
| 조작 | Floating 가상 조이스틱(터치·마우스) + WASD/방향키 + `E`/`Space` 액션 |
| HUD (5위젯) | 상태 필(시간대·날씨·Day N·시각) / 음소거·일시정지 / 조이스틱 / 상황 액션 / 4칸 퀵메뉴 |
| 20분 루프 | 아침 5분 · 낮 7분 · 노을 4분 · 밤 4분, 하늘·태양/달·조명 색온도 연속 보간 |
| Pause on Blur | `visibilitychange` 시 시간 정지·자동 저장 |
| 저장 | `IndexedDB`(실패 시 localStorage 폴백): `day`, `elapsedSeconds`, `playerPos`, `discoveredDittos`, `settings` |
| 설정 | 음소거 · 시간 배속 `1×/10×/60×` · 30fps 절전 · 자동 저장 상태 표시 |

## 폴더 구조 (GDD v1.5/v1.6 용어 준수)

```
src/
  config.js            상수·팔레트·배치 데이터
  main.js              엔트리 (Game 부팅)
  terrain/             Noise · Heightmap · Terrain · Water
  skybox/              Skybox (그라디언트·해/달·별)
  foliage/             Foliage (InstancedMesh 자연물)
  props/               Props(우체통·표지판·캠프파이어·밥그릇) · parts(색 구운 메시 병합 헬퍼)
  structures/          Structures (4단계 복구 부지)
  actors/              Player · Cat · Ditto
  ui/                  Hud · TitleScreen · Joystick · Modal · Toast · Landmarks · styles.css
  storage/             IndexedDB · SaveStore
  world/               World(씬·조명·날씨) · Game(세션·루프·입력·상호작용) · AmbientSound
```

## 성능 예산 (실측)

- Draw Call: **17 ~ 30** (GDD 목표 평상시 40~70 이하)
- 삼각형: **약 32,600 ~ 36,950** (GDD 예산 50,000~80,000 / 하드캡 100,000)
- JS 로직 1프레임: **0.02ms** (씬 업데이트 전체)

## Phase 1에서 하지 않은 것 (Phase 2~ 이후)

- 채집·요리·생활 랭크, 첫 3분 온보딩 (Phase 2)
- 도감 40종 전체·3D 프리뷰·건축(BFS 경로 검사)·월간 침공 디펜스 (Phase 3)
- Draco `.glb` 교체·백업 API·`island_config.json` 원격 연동 (Phase 4)
- `secret_dittos`·`mailbox_letters` 라이브 패치, 섬 관리자(기능 미정) (Phase 5)

## 검증 스크린샷

로컬 `screenshots/` 폴더 — 390×844(DPR 3) 실측 캡처입니다. 용량(약 5.6MB) 때문에 저장소에는 포함하지 않았습니다(`.gitignore`).

| 파일 | 내용 |
| --- | --- |
| `01_title.png` | 타이틀 + 실시간 섬 프리뷰 |
| `02_spawn_morning.png` | 아침 시작 화면 |
| `03_day.png` / `07_sunset.png` / `08_night.png` | 낮·노을·밤 |
| `04_ditto.png` / `05_ditto_discovered.png` | 위장 메타몽 발견 |
| `06_cats.png` | 솜이·옹이와 고양이 쉼터 |
| `09_codex.png` | 도감 모달 |
| `10_pause.png` | 일시정지·설정 |
| `11_context_lost.png` / `12_after_restore.png` | WebGL 컨텍스트 로스트/복구 |
