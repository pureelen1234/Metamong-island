# 🏝️ 어설픈 메타몽 섬 — Phase 1 (코어 3D & 20분 루프 MVP)

보경 님을 위한 몽글몽글 파스텔 힐링 아일랜드. 기획서 GDD v1.6의 **Phase 1**을 모바일 웹 3D(PWA)로 구현한 빌드입니다.

> **2026-11-20 비주얼 리뉴얼** — 각지고 어두운 로우폴리 톤을 걷어내고, `downloads/metamong_*` 시안의 파스텔 색감으로 전면 교체했습니다. 구체를 겹친 솜사탕 수관, 크림 모래·연두 잔디·에메랄드 바다, 찹쌀떡 치비 주인공·고양이·메타몽, 따뜻한 우드+민트/코랄 오두막, 걷기 스윙·발밑 먼지 애니메이션, 솜사탕 구름 하늘이 들어갔습니다.
>
> **2026-11-20 P0 렌더링 업그레이드** — ① 방향광 그림자 ② 4단 툰 램프 ③ 잉크 헐 외곽선 ④ 후처리(블룸·그레이딩·비네트)를 켜서 "장난감 조립" 화면을 동화책 일러스트 톤으로 바꿨습니다. 상세는 아래 [렌더링 파이프라인](#렌더링-파이프라인-p0) 참고.

## 렌더링 파이프라인 (P0)

| 단계 | 파일 | 핵심 값 |
| --- | --- | --- |
| 그림자 | `world/Game.js`, `world/World.js` | `PCFShadowMap`(r187에서 PCFSoft 제거됨), `mapSize 1024²`, 플레이어 추적 ±30m, `bias -0.0005`, `normalBias 0.02` |
| 툰 램프 | `render/toon.js` | 4단 `DataTexture [140,172,222,255]` + `NearestFilter` → 모든 불투명 재질 `MeshToonMaterial` |
| 외곽선 | `render/toon.js` | `BackSide` 잉크 헐(뷰공간 노멀 오프셋, 두께 0.010~0.024) · 색 `#3b2d38` |
| 후처리 | `render/post.js` | `RenderPass → UnrealBloom(threshold 0.86, strength 0.30, radius 0.40) → OutputPass → Grade(채도 1.07, S커브 0.20, 비네트 0.28)` |
| 안티앨리어싱 | `render/post.js` | HalfFloat + MSAA 4x 렌더타깃(EffectComposer 기본 RT는 AA 없음), `pixelRatio` 상한 2 |
| 조명 균형 | `world/World.js` | 툰은 빛을 그대로 더하므로 `LIGHT_GAIN`(hemi 0.52 / ambient 0.26 / sun 1.25 / fill 0.22)로 세기를 낮추고 색은 팔레트 유지 |

액터·건물·나무기둥·프롭에만 외곽선을 넣고, 풀·잎·꽃·조약돌·물·파티클·발광창·**수관**은 제외했습니다. 수관처럼 구를 여러 개 겹친 지오메트리는 헐 실루엣 안쪽으로 잉크가 새어 검은 덩어리로 보이기 때문입니다. 액터 얼굴(눈·볼터치·입·코)도 별도 메시로 분리해 외곽선을 두르지 않습니다. `blobShadow`는 진짜 그림자 위에 0.05 불투명도로만 남겨 접지감을 보강합니다.

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
| 섬 지형 | `48×48` 그리드 높이맵 → 부드러운 셰이딩 메시, 크림 모래·연두/민트 잔디·둥근 언덕·에메랄드 바다(셰이더 물결) |
| 자연물 | `InstancedMesh` 구름나무 96 · 벚꽃나무 20 · 둥근솔 26 · 덤불 40 · 꽃 170 · 풀포기 330 · 조약돌 150 |
| 랜드마크 | 부두(5일) · 공방(10일) · 고양이 쉼터(17일) · 등대(24일) 복구 예정 부지 + 표식·이름표 |
| 액터 | 주인공(3인칭 팔로우 카메라, 지형 경계·구조물 충돌 클램핑, **팔·다리 교차 스윙 + 통통 바운스 + 발밑 먼지**), 솜이·옹이 고양이 |
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
  render/              toon(4단 램프·잉크 헐) · post(EffectComposer 파이프라인)
  structures/          Structures (4단계 복구 부지)
  actors/              Player · Cat · Ditto
  ui/                  Hud · TitleScreen · Joystick · Modal · Toast · Landmarks · styles.css
  storage/             IndexedDB · SaveStore
  world/               World(씬·조명·날씨) · Game(세션·루프·입력·상호작용) · AmbientSound
```

## 성능 예산 (실측)

390×844 세로 · DPR 2(780×1688 드로잉버퍼) · 헤드리스 Chromium(SwiftShader) 기준 `window.__metamong.stats()` 실측.

| 항목 | P0 이전 | P0 이후 |
| --- | --- | --- |
| 씬 draw call (그림자 패스 포함) | 20 | **29 ~ 61** |
| 씬 삼각형 (그림자 패스 포함) | 99,676 | **238,770 ~ 312,062** |
| 포스트 포함 전체 draw call | 20 | **44 ~ 76** |
| 콘솔 에러·페이지 에러 | 0 | **0** |

- 그림자를 끄고 재면 씬 29 call / 137,990 tri → **그림자 패스가 약 +32 call, +174k tri**를 더 씁니다(섬 전체 48×48m를 60×60m 섀도 카메라가 한 번 더 그리기 때문).
- 삼각형 수는 늘었지만 실제 화면에 그려지는 양은 100k 내외 그대로이고, 추가분은 섀도맵 렌더입니다.
- 30fps 절전 모드·시간 배속 60×·낮/노을/밤 전환 모두에서 에러 0건으로 동작합니다.
- SwiftShader는 CPU 래스터라이저라 fps 수치(이전 340ms/프레임 → 이후 1,040ms/프레임)는 실기기 성능의 지표가 아닙니다. **실제 S26에서 30fps 절전 모드를 켜고 한 번 확인**하는 것을 권합니다.

## Phase 1에서 하지 않은 것 (Phase 2~ 이후)

- 채집·요리·생활 랭크, 첫 3분 온보딩 (Phase 2)
- 도감 40종 전체·3D 프리뷰·건축(BFS 경로 검사)·월간 침공 디펜스 (Phase 3)
- Draco `.glb` 교체·백업 API·`island_config.json` 원격 연동 (Phase 4)
- `secret_dittos`·`mailbox_letters` 라이브 패치, 섬 관리자(기능 미정) (Phase 5)

## 검증 스크린샷

로컬 `screenshots/` 폴더 — 390×844 실측 캡처입니다. 용량 때문에 저장소에는 포함하지 않았습니다(`.gitignore`).
리뉴얼본은 `screenshots/mondeul/`(01_title · 02_play · 03_player_front · 04_cats · 05_ditto_pebble · 06_ditto_boulder · 07_workshop · 08_lighthouse · 09_dock · 10_walking · 12_sunset · 13_night · walk_cycle_0~3)에 있습니다.
P0 전후 비교는 `screenshots/p0_before/`(01_title · 02_play · 03_player_front · 04_cats · 05_ditto_pebble · 06_workshop · 07_sunset · 08_night · 09_hero_closeup)와 `screenshots/p0_after/`(같은 이름 + 10_walking · 11_ditto_discovered · 12_codex · 13~15_phase · 16_settings_30fps · 17_after_fast_cycle)에 같은 구도로 남겼습니다.

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
