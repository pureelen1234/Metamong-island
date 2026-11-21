# 🏝️ 어설픈 메타몽 섬 — Phase 4 (HD-2D 도트 · 72×72 섬 · 20분 루프)

보경 님을 위한 몽글몽글 파스텔 힐링 아일랜드. 기획서 GDD v1.6의 **Phase 1**을 모바일 웹(PWA)로 구현한 빌드입니다.

> **2026-11-20 HD-2D 도트 전환** — 3D 도형 조립식 액터/프롭을 걷어내고, AI로 뽑은 도트 아틀라스(`downloads/metamong_assets/pixel/`)를 **투명 PNG 빌보드 스프라이트**로 얹었습니다. 바닥은 파스텔 2.5D 섬 지형(잔디·모래사장·흙길·반짝이는 바다) 그대로 두고, 그 위에 주인공·고양이·메타몽·건물·자연물이 도트로 서 있습니다. 도트가 뭉개지지 않도록 스프라이트 텍스처는 **전부 `THREE.NearestFilter` + 밉맵 없음**입니다.
>
> 이전 3D 버전은 `projects/metamong-island-3d-backup/`(폴더 통째 백업)과 git 브랜치 **`backup-3d-p0`**(= `9cfd25a`, 원격 푸시됨)으로 남겨 두었습니다.

## 1단계 생활·건설 시스템 (2026-11-21)

GDD의 1단계(생활 기반)를 구현했습니다. 도트 비주얼·카메라·문워크 수정·장조 BGM은 그대로입니다.

| 시스템 | 내용 | 파일 |
| --- | --- | --- |
| 채집·리젠 | 나무 18그루(2~3타) · 바위 8개(2~3타) · 꽃덤불 9곳(1타). 타격 시 흔들림+색 파티클+타격음, 완료 시 **밑동 그루터기+새싹**으로 바뀌고 충돌 반경이 풀린 뒤 60~90초에 다시 자람 | `world/Gathering.js`, `world/Scenery.js` |
| 열매 드롭 | 온전한 나무마다 45~75초에 한 번, 나무당 최대 1개 반짝이는 열매가 떨어짐. 가까이 가면 자동 획득 | `world/Drops.js` |
| 기력 | 100에서 시작. 나무 6 · 바위 7 · 꽃덤불 3 소모, 부족하면 토스트로 안내. 열매를 먹으면 +30, 서 있으면 아주 천천히(10분에 가득) 회복 | `systems/Progress.js` |
| 가방 | 8칸 · 칸당 20개. HUD 배지에 사용 칸 표시, 모달에서 열매 먹기/재료 확인 | `systems/Inventory.js`, `ui/Panels.js` |
| 공방 창고 | 공방 복구 후 사용 가능. 가방↔창고 이동(1개/전체). 넘치면 바닥에 내려놓고 안내 | `ui/Panels.js` |
| 4대 건물 복구 | 부두(통나무6·돌2) · 공방(통나무8·돌6) · 자판기(돌4·꽃잎5·별조각2) · 등대(통나무12·돌10·별조각5). `[재료 투입]` → `[복구 완료!]`, 이름표가 ✨로 바뀌고 등대는 밤에 불이 켜짐 | `ui/Panels.js`, `world/Scenery.js` |
| 우체통 | 공지·웰컴(열매3+별조각1 동봉)·복구 가이드 3통. 안 읽은 편지/미수령 선물을 HUD 빨간 배지로 표시 | `systems/letters.js`, `ui/Panels.js` |

조작: 모바일은 화면 터치 또는 근접 시 뜨는 액션 버튼, PC는 클릭·`Space`·`E`.
저장은 IndexedDB(`slot1`)에 `stamina · bag · storage · buildings · mailbox · nodes`까지 들어가고, 1단계 이전 세이브는 `storage/saveSchema.js`의 `migrateSave()`가 기본값을 병합해 그대로 이어집니다.

```bash
npm run build                       # dist/
python3 tools/qa_phase1.py          # 390×844 실측 QA (서버: vite preview 또는 dist 정적 서버)
```

## HD-2D 렌더링 구조

| 요소 | 구현 |
| --- | --- |
| 바닥 | 기존 `Terrain`(48×48 높이맵, `MeshToonMaterial` + 4단 램프) 유지. 잔디에 밝기만 흔드는 **도트 디테일 텍스처**를 곱해 넓은 들판이 밋밋하지 않게 함 |
| 오솔길 | `world/Path.js` — 부두→광장→공방·자판기·등대를 잇는 Catmull-Rom 리본. 지형 높이를 따라가고, 가장자리는 알파 그라디언트로 잔디에 자연스럽게 녹아듦 |
| 스프라이트 | `sprites/Billboard.js` — `PlaneGeometry` 원점을 **발밑 중앙**으로 옮겨 지형 위에 세우고, 카메라를 향해 **Y축으로만** 회전(눕지 않는 HD-2D 빌보드) |
| 픽셀 선명도 | `sprites/atlas.js` — `magFilter = minFilter = THREE.NearestFilter`, `generateMipmaps = false`, `SRGBColorSpace`. 재질은 `alphaTest 0.45` 컷아웃이라 **흰 사각형 배경이 남지 않음** |
| 그림자 | 캐릭터·소품 발밑에 부드러운 반투명 타원(`blobShadow`), 건물·나무에도 접지 그림자. 지형은 방향광 섀도맵을 그대로 받음 |
| 시간대 | 스프라이트는 조명을 받지 않는 `MeshBasicMaterial`이므로, 낮/노을/밤 팔레트에서 계산한 색을 매 프레임 곱해 준다(`World.spriteLight`) — 밤에는 보랏빛으로 가라앉음 |

### 액터 애니메이션

| 액터 | 아틀라스 | 사용 프레임 |
| --- | --- | --- |
| 주인공 | `protagonist` 4×4 | 1행 정면 걷기 4 · 2행 뒷면 걷기 4 · 3행 옆모습 걷기 4(오른쪽 이동은 좌우 반전) · 4행 대기/손흔들기/반대손 흔들기/점프 |
| 솜이 · 옹이 | `somi` · `ongi` 4×5 | 정면·뒷면·왼쪽·오른쪽 걷기 각 4 + 앉기·식빵·그루밍·신남 |
| 기본 메타몽 | `ditto_basic` 4×4 | 숨쉬기 4 · 웃기 4 · 찌부/녹기/늘어나기/당황 · 좋아서 방방 4 |
| 위장 메타몽 6종 | `disguises` 3×2 | 조약돌 · 우체통 · 화분 · 벤치 · 버섯 · 이정표 |
| 건물 4종 | `buildings` 2×2 | 공방 · 등대 · 메타몽 자판기 · 부두 |
| 자연물 8종 | `nature` 4×2 | 벚꽃나무 2 · 둥근나무 · 키큰나무 · 꽃덤불 · 바위 · 울타리 · 가로등 |

고양이는 자기 자리 주변을 어슬렁거리다 앉기·식빵·그루밍으로 포즈를 바꾸고, 쓰다듬으면 폴짝 뛰며 하트를 띄웁니다. 메타몽은 가까이 가면 반짝 링이 번지고, 살펴보면 통통 튀며 하트를 띄우고 도감에 등록됩니다.

## 스프라이트 파이프라인

원본은 `downloads/metamong_assets/pixel/sliced_test/`(7세트 · 프레임 PNG + 아틀라스 JSON)이고, 게임은 `public/sprites/`의 정규화된 시트를 씁니다.

```bash
python3 tools/build_sprites.py     # public/sprites/<set>_sheet.png + <set>.json 재생성
```

`tools/build_sprites.py`가 하는 일:

1. **주인공 r4c3 결함 보수** — 원본 4행 3열은 주먹 조각만 남아 있어서, 4행 2열(손 흔들기)을 좌우 반전해 **반대손 흔들기** 프레임으로 복원했습니다. 결과물은 `downloads/metamong_assets/pixel/sliced_test/protagonist/frames_fixed/protagonist_r4c3_fixed.png`에도 저장(원본 프레임은 보존).
2. **발밑 회색 그림자 제거** — 주인공 프레임 아래에 구워져 있던 회색 타원(불투명 픽셀)을 지워, 게임에서 까는 반투명 블롭 그림자와 겹치지 않게 했습니다.
3. **셀 정규화** — 세트별 셀 크기를 통일하고 프레임을 **바닥 정렬 + 가로 중심**으로 다시 붙여 걸을 때 위아래로 떨리지 않게 했습니다.
4. `public/sprites/raw/<set>/`에 원본 프레임·아틀라스·매니페스트 사본도 함께 보관합니다.

## 실행

```bash
cd projects/metamong-island
npm install
npm run dev        # 개발 서버 (http://127.0.0.1:5173)
npm run build      # 프로덕션 빌드 → dist/
npm run preview    # 빌드 결과 미리보기 (http://127.0.0.1:4173)
```

`dist/` 폴더를 정적 호스팅에 그대로 올리면 됩니다(상대 경로 `base: './'`). 라이브: <https://pureelen1234.github.io/Metamong-island/>

## Phase 1 구현 범위

| 항목 | 구현 |
| --- | --- |
| 모바일 세로 화면 | `100dvh`, `touch-action: none`, `overscroll-behavior: none`, `manifest.json` `portrait` |
| WebGL 안전 처리 | `webglcontextlost`(preventDefault) → 복구 안내 오버레이, `webglcontextrestored` → 후처리 렌더타깃·섀도맵·툰 램프 텍스처를 새로 만들어 재개 |
| 타이틀 | 실시간 섬 프리뷰(카메라 자동 회전) + `[이어하기]/[새로 시작]` |
| 섬 지형 | `48×48` 그리드 높이맵, 크림 모래·연두/민트 잔디·둥근 언덕·에메랄드 바다(셰이더 물결) + 도트 디테일 텍스처 + 오솔길 |
| 랜드마크 | 부두(5일) · 공방(10일) · 메타몽 자판기(17일) · 등대(24일) |
| 액터 | 주인공(4방향 걷기·방향별 프레임·발밑 먼지), 솜이·옹이(자유 산책 + 포즈 전환) |
| 맛보기 | 기본 메타몽 1 + 위장 메타몽 6(조약돌·우체통·화분·벤치·버섯·이정표) — 반응 후 도감 등록(총 7칸) |
| 도감 UI | 발견한 메타몽은 **아틀라스에서 잘라낸 도트 썸네일**로 표시, 미발견은 `· ? ·` |
| 조작 | Floating 가상 조이스틱(터치·마우스) + WASD/방향키 + `E`/`Space` 액션 |
| HUD (5위젯) | 상태 필(시간대·날씨·Day N·시각) / 음소거·일시정지 / 조이스틱 / 상황 액션 / 4칸 퀵메뉴 |
| 20분 루프 | 아침 5분 · 낮 7분 · 노을 4분 · 밤 4분, 하늘·태양/달·조명·스프라이트 틴트 연속 보간 |
| Pause on Blur | `visibilitychange` 시 시간 정지·자동 저장 |
| 저장 | `IndexedDB`(실패 시 localStorage 폴백): `day`, `elapsedSeconds`, `playerPos`, `discoveredDittos`, `settings` |
| 설정 | 음소거 · 시간 배속 `1×/10×/60×` · 30fps 절전 · 자동 저장 상태 표시 |

## 폴더 구조 (GDD v1.5/v1.6 용어 준수)

```
src/
  config.js            상수·팔레트·배치 데이터 (LANDMARKS·DITTOS·CATS·NATURE)
  main.js              엔트리 (Game 부팅)
  terrain/             Noise · Heightmap · Terrain(도트 디테일 텍스처) · Water
  skybox/              Skybox (그라디언트·해/달·별)
  sprites/             atlas(NearestFilter 로더) · Billboard(발밑 빌보드·블롭 그림자·하트)
  render/              toon(4단 램프·잉크 헐) · post(EffectComposer 파이프라인)
  actors/              Player · Cat · Ditto (모두 빌보드 기반)
  ui/                  Hud · TitleScreen · Joystick · Modal · Toast · Landmarks · styles.css
  storage/             IndexedDB · SaveStore
  world/               World(씬·조명·날씨) · Scenery(건물·자연물) · Path(오솔길) · Game(세션·루프·입력·상호작용) · AmbientSound
tools/
  build_sprites.py     프레임 정규화 · r4c3 보수 · 그림자 제거 → public/sprites/
  qa_hd2d.py           브라우저 실측 QA (390×844, 콘솔/네트워크 에러 수집)
  shots_final.py       최종 스크린샷 세트
  shots_split.py       장면별 세션 분할 스크린샷
```

## 성능 예산 (실측)

390×844 세로 · DPR 2(780×1688 드로잉버퍼) · 헤드리스 Chromium(SwiftShader) 기준 `window.__metamong.stats()` 실측.

| 항목 | HD-2D 전환 후 |
| --- | --- |
| 씬 draw call (그림자 패스 포함) | **23 ~ 45** |
| 씬 삼각형 (그림자 패스 포함) | **약 17,4 ~ 18,2k** |
| 포스트 포함 전체 draw call | **38 ~ 82** |
| 콘솔 에러·페이지 에러·실패 요청 | **0** |

3D 도형 조립식 모델(수만 개 삼각형)이 전부 사라져 삼각형 수가 **약 24만 → 1.8만**으로 줄었습니다. 대신 도트 시트 텍스처가 메모리를 씁니다(7세트 · 시트 합계 약 6.5MB, 텍스처 클론은 GPU 메모리를 공유).
SwiftShader는 CPU 래스터라이저라 fps 수치는 실기기 성능의 지표가 아닙니다. **실제 S26에서 한 번 확인**하는 것을 권합니다.

## Phase 1에서 하지 않은 것 (Phase 2~ 이후)

- 요리·생활 랭크는 **2단계에서 구현 완료 ✓** (아래 「2단계 생활 콘텐츠」), 첫 3분 온보딩은 아직
- 도감 40종 전체·도트 프리뷰·건축(BFS 경로 검사)·월간 침공 디펜스 (Phase 3)
- Draco `.glb` 교체·백업 API·`island_config.json` 원격 연동 (Phase 4)
- `secret_dittos`·`mailbox_letters` 라이브 패치, 섬 관리자(기능 미정) (Phase 5)

## 검증 스크린샷

390×844 실측 캡처는 `screenshots/hd2d/`(비주얼)와 `screenshots/phase1_life/`(1단계 생활 시스템)에 있습니다. 용량 때문에 저장소에는 포함하지 않았습니다(`.gitignore`).

| 파일 | 내용 |
| --- | --- |
| `phase1_life/02_play_hud.png` | 기력 게이지 + 우체통 배지가 붙은 HUD |
| `phase1_life/03_tree_target.png` / `04_after_chop.png` | 나무 앞 액션 라벨 · 타격 연출 |
| `phase1_life/04b_stump_closeup.png` | 채집 후 밑동 그루터기와 새싹 |
| `phase1_life/05_bag.png` | 가방 8칸 |
| `phase1_life/06_mailbox.png` / `07_letter.png` | 우체통 목록 · 웰컴 편지와 동봉 선물 |
| `phase1_life/11_build_before.png` / `13_build_done.png` | 복구 재료 투입 · 복구 완료 |
| `phase1_life/14_storage.png` | 공방 창고(가방↔창고 이동) |
| `phase1_life/17_lighthouse_night.png` | 복구한 등대의 밤 불빛 |
| `phase1_life/19b_berry_on_ground.png` | 나무 밑에 떨어진 열매 |

| 파일 | 내용 |
| --- | --- |
| `01_title.png` | 타이틀 + 실시간 섬 프리뷰 |
| `02_play_morning.png` | 아침 시작 화면 (광장) |
| `03_walking.png` | 북쪽으로 걷기 (뒷면 프레임 + 먼지) |
| `04_cats.png` | 솜이·옹이 (자유 산책·앉기) |
| `05_hero_closeup.png` | 주인공 클로즈업 (복원된 도트 확인) |
| `06_ditto_near.png` / `07_ditto_found.png` | 조약돌 메타몽 접근 → 발견 |
| `08_codex.png` | 도감 (발견 1/7, 도트 썸네일) |
| `09_workshop.png` | 공방 + 벚꽃나무 |
| `10_sunset.png` / `11_night.png` | 노을 · 밤 (스프라이트 틴트) |
| `12_dock.png` | 부두와 바다 |

---

# 2단계 생활 콘텐츠 — 낚시 · 고양이 · 요리 · 상점 · 랭크 (2026-11-21)

1단계(채집·리젠·열매·기력·가방/창고·우체통·4대 건물 복구) 위에 **생활 콘텐츠 5개 시스템**을 얹고 세이브를 v3로 올렸습니다.
1단계 기능과 v1/v2 세이브는 그대로 살아 있습니다(로드 시 v3 필드가 기본값으로 병합).

## 1. 부두 낚시 — `src/world/Fishing.js`

- 부두(`dock`) 복구 후 부두 끝 물가(`x 0 · z 16.2`, 반경 3.0)에서 `[낚시하기]`. 복구 전에는 `[부두 복구 필요]` → 복구 모달로 이어집니다.
- 찌를 0.55초 포물선으로 던지고 → **1.5~3.5초** 둥실둥실(동심원 물결 3겹) → 입질: `!` 배지 + 찌 흔들림 + 물 튀김 소리 → **1.4초** 안에 화면/액션 버튼 탭 → 성공.
- 기력 5 소모, 성공 +14 EXP · 놓침 +4 EXP. 낚시 중 플레이어가 6.5m 이상 벗어나면 줄을 회수합니다.
- 어종 6종(은멸치·통통도미·벚꽃송사리·별빛해파리·황금잉어 + 별조각). **별빛 미끼**를 쓰면 희귀 확률이 올라갑니다(가중치 표는 `lifeData.js`).
- 물고기는 **낚시 바구니(`progress.fish`)** 에 쌓여 가방 8칸을 잡아먹지 않습니다. 별조각만 가방 재료로 들어갑니다.

| 어종 | 확률(기본) | 가격 | 크기 |
| --- | --- | --- | --- |
| 은멸치 | 34 | 🪙9 | 6~15cm |
| 통통도미 | 26 | 🪙15 | 18~33cm |
| 벚꽃송사리 | 22 | 🪙24 | 4~10cm |
| 별빛해파리 | 11 | 🪙45 | 10~21cm |
| 황금잉어 | 5 | 🪙110 | 30~56cm |
| 별조각 | 2 | — | 가방 재료 |

## 2. 솜이 · 옹이 돌보기 — `src/ui/LifePanels.js` + `src/actors/Cat.js`

- 고양이 근처에서 `[돌보기]` → 돌보기 패널: 쓰다듬기(하트 파티클·야옹·기력 +3·호감도 +4·쿨 6초), 간식(열매 +6 / 은멸치 +8 / 츄르 +14).
- 호감도 문턱 `18 · 40 · 68 · 100` → Lv.1~5, 레벨마다 대사가 바뀝니다. Lv.2 별조각 1, Lv.3 꽃잎 3, Lv.4 별조각 2, Lv.5 꽃잎 5 + 별조각 3 보답 선물.
- **Lv.3부터 `[따라오기]`** 토글 — 플레이어 뒤 1.45m를 부드럽게 따라옵니다(모달·일시정지 중 정지).

## 3. 공방 요리 · 도구 강화 — `src/systems/Cooking.js`

공방 복구 후 `[창고] · [요리하기] · [도구 강화]` 메뉴가 열립니다.

| 요리 | 재료 | 기력 | 비고 |
| --- | --- | --- | --- |
| 🍵 꽃잎 허브차 | 꽃잎2 + 열매1 | +45 | |
| 🍢 은멸치 구이 | 은멸치2 + 통나무1 | +60 | |
| 🐠 도미 버터구이 | 도미1 + 열매1 | +90 | |
| 🍱 황금 정식 | 황금잉어1 + 꽃잎2 + 열매2 | +100 | 60초 버프(채집 기력 ×0.6 · 이동 ×1.18) |

- 도끼·곡괭이 Lv.1→3: Lv.2 = 통나무4/돌3(4)/🪙40, Lv.3 = 통나무8/돌6(8)/별조각2/🪙120.
- 레벨마다 해당 자원 기력 소모 ×0.85 → ×0.7, Lv.3은 타격 +1(한 번에 두 칸).

## 4. 자판기 상점 · 섬 코인 · 일일 의뢰 — `src/systems/Shop.js` · `lifeData.rollDailyQuests`

- HUD에 `🪙 섬 코인` · `📋 의뢰`(받을 보상 배지) · `✨ 버프` 칩.
- 자판기 복구 → `[자판기 열기]`: **팔기**(가방 재료 + 낚시 바구니, 개당 가격 표) / **사기**(고양이 츄르 🪙25 · 반짝 에이드 🪙30[기력+40] · 별빛 미끼 🪙45).
- **일일 의뢰 2건**이 `Day` 가 바뀔 때 자동 생성(나무 베기·바위 캐기·물고기·간식·쓰다듬기·요리·팔기·꽃잎). 달성하면 우체통/의뢰 모달에서 `[보상 받기]` → 코인 + 별조각.

## 5. 도감 4탭 · 생활 랭크 — `src/systems/Skills.js`

- 도감: `메타몽` · `물고기` · `요리` · `고양이` 탭(미등록은 잠금 카드).
- 랭크: **채집 · 낚시 · 요리 · 돌보기** 4스킬 EXP·랭크(연습→F→E→D→C→B→A→S→SS→SSS)와 EXP 합계 종합 칭호(섬의 새내기 → 섬의 별).
- 경험치: 채집 +6 · 낚시 성공 +14 · 요리 +30 · 쓰다듬기 +10 · 간식 +12.

## 세이브 v3

`saveSchema.SAVE_VERSION = 3`. 추가 필드: `coins · skills · fish · supplies · tools · cats · cooked · quests · buff · fishing`.
v1(코어만)·v2(1단계 생활) 세이브는 로드 시 새 필드를 0/기본값으로 채우고, **Day는 그대로 승계**합니다. `public/sw.js` 캐시는 `metamong-island-phase2-v1`.

## 검증 — `tools/qa_phase2.py`

390×844 모바일 뷰포트에서 실제로 눌러 보는 QA. 캡처 한 장이 2초쯤 걸리는 SwiftShader 환경 때문에 파트를 나눠 돌립니다(합계 **108 체크**).

```bash
npm run build
QA_PART=main python3 tools/qa_phase2.py   # 1단계 회귀 + 낚시 + 고양이 + 요리/강화 (59 체크)
QA_PART=shop python3 tools/qa_phase2.py   # 자판기 + 의뢰 + 도감 + 랭크 (24 체크)
QA_PART=save python3 tools/qa_phase2.py   # v3 저장/복원 + v1·v2 병합 (25 체크)
```

- `serve_dist.py` 가 `dist/` 를 thread 로 서빙합니다(vite preview 프로세스를 유지할 수 없는 환경 대응).
- 결과: **108/108 통과 · 콘솔 에러 0 · 404/실패 요청 0**.
- 캡처: `screenshots/phase2_life/` (01_title ~ 34_v2_migrated).

| 파일 | 내용 |
| --- | --- |
| `02_hud_new_day.png` | 코인·의뢰 버튼이 붙은 HUD |
| `04_mailbox_quests.png` | 우체통 안의 오늘의 의뢰 + 편지 |
| `05_fishing_modal.png` · `06_bobber_wait.png` | 낚시 시작 모달 · 찌와 물결 |
| `07_bite_popup.png` | 입질 `!` 배지 + 물결 + `입질! 지금 탭!` |
| `08_catch_result.png` | 낚은 물고기 획득 문구·토스트 |
| `10_cat_panel.png` · `12_cat_follow_ready.png` · `13_cat_following.png` | 돌보기 패널 · 따라오기 · 따라오는 솜이 |
| `14_workshop_menu.png` · `15_cooking.png` · `17_golden_buff.png` · `18_tool_upgrade.png` | 공방 메뉴 · 요리 · 황금 버프 · 도구 강화 |
| `19_vending_sell.png` · `20_vending_buy.png` | 자판기 팔기/사기 |
| `22_quests_ready.png` · `23_quest_claimed.png` | 의뢰 보상 |
| `24~28_codex_*.png` · `28_rank.png` | 도감 4탭 · 생활 랭크 |
| `32_reloaded.png` · `33_v1_migrated.png` · `34_v2_migrated.png` | v3 복원 · v1/v2 병합 |

---

# 3단계 — 사각 섬 · 텃밭 농사 · 미니맵 · 업적 (2026-11-21)

## 1. 사각 섬 리모델링 — `src/terrain/Heightmap.js` · `src/world/Path.js` · `src/config.js`

- 원형 거리(`Math.hypot`) 대신 **둥근 모서리 사각 거리 함수**(rounded-box SDF)로 해안선을 만듭니다.
  `LAND_BOARD = 17.6`(평지 반폭) · `LAND_CORNER = 4.6`(모서리 둥글림) · `COAST_WIDTH = 4.2`(해안 경사 폭).
- 48×48 그리드의 네 귀퉁이까지 육지가 펴져 **북서 텃밭 · 북동 과수원 · 남서 꽃밭 · 남쪽 해변** 네 구역이 생겼습니다.
- 남쪽(+z)은 해안 경사를 1.62배로 넓혀(`coastWidthAt`) 모래 해변이 다른 쪽보다 2배쯤 넓습니다. 유기적 흔들림(`fbm × 0.85`)은 약하게만.
- 부두를 `z = 20.3`(지형 높이 ≈ 0.08, 물가)으로, 낚시 자리를 `z = 19.4`, 찌 착수점을 `z = 22.2`(수심 −0.52)로 재정렬했습니다.
- 길은 부두→광장 4개 노선에 **텃밭 · 과수원 · 꽃밭** 노선을 더해 7개(`ROUTES` export — 미니맵이 같이 그립니다).
- 배치 검증: `node tools/check_layout.mjs` — 배치물 85 · 충돌물 85 · 텃밭 9칸 · 길 샘플 172개에 대해
  ① 육지 위인가 ② 텃밭·길·건물과 겹치지 않는가 ③ 배치물끼리 파고들지 않는가 ④ 부두·찌가 물가/물 위인가를 확인합니다.

## 2. 텃밭 농사 — `src/systems/farmData.js` · `src/world/Farming.js` · `src/sprites/farmArt.js`

| 작물 | 씨앗 | 성장 | 수확 | 판매 |
| --- | --- | --- | --- | --- |
| 🍓 딸기 | 🪙15 | 27초 | 2~3개 | 개당 🪙18 |
| 🥬 달달무 | 🪙25 | 42초 | 1~2개 | 개당 🪙38 |
| 🎃 황금호박 | 🪙50 | 60초 | 1~2개 | 개당 🪙75 |

- 북서쪽 3×3 경작지(`FARM`, 타일 간격 1.9 · 크기 1.62). 흙 타일은 **마른 밭 / 물 준 밭(촉촉한 색 + 물방울)** 두 상태,
  작물은 **씨앗 → 새싹 → 자라는 중 → 수확 가능(반짝이는 별)** 네 단계 도트(캔버스 픽셀아트, `farmArt.js`).
- **물주기 1회 = 남은 시간 50% 단축**(작물당 2회까지, 칸당 기력 2). 물뿌리개 레벨로 한 번에 **1칸 → 십자 5칸 → 3×3 9칸**.
- 수확물은 가방 8칸이 아니라 **별도 바구니 `progress.crops`** 에 담깁니다(낚시 바구니 `progress.fish` 와 같은 방식).
- 자판기 **사기** 탭에 씨앗 3종(`progress.supplies`), **팔기** 탭에 수확물 3종 — 재료·물고기·작물을 한 팔기 목록에서 정리합니다.
- 우체통 **텃밭 개설 편지**(`guide_farm`)에 딸기 씨앗 2개 동봉 — 새 섬과 v3 세이브 모두 바로 농사를 시작할 수 있어요.
- 공방 요리 **딸기 스무디**(딸기2+열매1, 기력+75) · **황금 호박 수프**(호박1, 기력+95), 도구 강화 **물뿌리개 Lv.1~3**,
  5번째 생활 스킬 **농사**(심기 +6 · 물주기 +3 · 수확 +16), 도감 **농사 탭**, 일일 의뢰 풀에 **씨앗 심기 · 작물 수확**.

## 3. 실시간 미니맵 — `src/ui/Minimap.js`

- HUD 우측 상단 104px 사각 지도(390×844에서 조이스틱·액션 버튼·퀵바·토스트와 겹치지 않는 자리). 지도를 톡 누르면 **확대 지도 + 범례** 모달.
- 정적 레이어(물·모래·잔디·길·텃밭 3×3·과수원/꽃밭·4대 건물·우체통)는 한 번만 그려 캐시하고, 매 프레임은 **내 위치 화살표와 솜이·옹이**만 다시 그립니다.

## 4. 섬 업적 — `src/systems/achievementsData.js`

12종(채집 2 · 낚시 2 · 요리 2 · 농사 2 · 섬 생활 4). 조건 달성 시 토스트 + `랭크 → 🏆 업적`(또는 생활 랭크 모달의 `🏆 업적` 버튼, 퀵바 랭크 배지)에서 `[보상 받기]`로 코인·별조각 지급.
업적 카운터는 `progress.counters`(chop·tree·rock·flower·fish·cook·sell·pet·treat·petal·plant·water·crop)에 누적되고,
고양이 호감도·도감 발견 수·건물 복구는 상태에서 바로 계산합니다(v3 세이브는 로드 시 이미 채운 업적이 소급 달성됩니다).

## 세이브 v4

`saveSchema.SAVE_VERSION = 4`. 추가 필드: `crops · farmPlots · counters · achievements`.
v1(코어)·v2(1단계)·v3(2단계) 세이브는 로드 시 새 필드를 기본값으로 채우고 **Day·코인·물고기·스킬·도구·고양이·요리를 그대로 승계**합니다.
`public/sw.js` 캐시는 `metamong-island-phase3-v1`.

## 검증 — `tools/qa_phase3.py`

390×844 모바일 뷰포트 실측(사각 지형 → 농사 루프 → 미니맵 → 업적 → 저장/마이그레이션).

```bash
npm run build
node tools/check_layout.mjs                 # 배치 데이터 검증 (브라우저 없이)
QA_PART=farm python3 tools/qa_phase3.py     # 사각 지형 + 1·2단계 회귀 + 농사 + 미니맵 + 업적 (70 체크)
QA_PART=save python3 tools/qa_phase3.py     # v4 저장/복원 + v3/v2/v1 → v4 마이그레이션 (26 체크)
python3 tools/qa_live.py                    # 배포된 GitHub Pages 부팅 확인
```

결과: **96/96 통과 · 콘솔 에러 0 · 404/실패 요청 0**. 캡처: `screenshots/phase3/`.

| 파일 | 내용 |
| --- | --- |
| `00_live_deployed.png` | 배포된 사이트의 텃밭 (실서버) |
| `02_new_island.png` | 사각 섬 + 미니맵이 붙은 HUD |
| `05_farm_panel.png` · `16_farm_panel_filled.png` | 텃밭 패널(빈 밭 / 자라는 밭) |
| `05_farm_watered.png` · `08_farm_ripe.png` | 물 준 흙 · 다 자란 밭(반짝임) |
| `10_vending_sell_crops.png` | 자판기 팔기 탭의 수확물 |
| `11_map_modal.png` | 확대 지도 + 범례 |
| `11a_cooking_crops.png` · `11b_upgrade_water.png` · `11c_codex_farm.png` | 농작물 요리 · 물뿌리개 강화 · 도감 농사 탭 |
| `13_achievements.png` · `14_achievement_claimed.png` | 업적 목록 · 보상 수령 |
| `18_v3_title.png` · `19_v3_migrated.png` · `20_farm_letter.png` | v3 세이브 마이그레이션 · 텃밭 편지 |

---

# 4단계 — 72×72 맵 확장 · 중앙 강/다리 · 숲/채석장/논 · 리어카 · 초반 재미 (2026-11-21)

## 1. 맵 확장 + 중앙 강/개울 — `src/config.js` · `src/terrain/Heightmap.js` · `src/world/Path.js`

- 그리드 `48 → 72`(`GRID = 72`, `HALF = 36`). 평지 반폭 `LAND_BOARD = 28.8`, 모서리 둥글림 6.8, 해안 경사 3.6(남쪽 ×1.75).
- 섬 가운데를 가로지르는 **완만한 곡선의 강/개울**: 중심선 `riverCenterZ(x) = -9 + 2.4·sin(0.11x + 0.35) + 0.9·sin(0.24x − 1.1)`,
  물길 반폭 1.5 · 둑 경사 2.4 · 깊이 1.25. 물 높이(0)보다 바닥이 낮아 **걷기 불가** → 남쪽 생활권 / 북쪽 개척권이 갈립니다.
- 물길은 동서로 섬 밖까지 이어져 **돌아갈 길이 없습니다.** 유일한 통로가 다리입니다.
- 길(`ROUTES`)은 11개 노선: 남쪽(부두·공방·자판기·등대·텃밭·꽃밭·과수원·다리 남단) + 북쪽(다리 북단 → 논·숲·채석장).
  길은 강을 건너지 않고 양쪽 강둑에서 끊깁니다(다리 데크는 다리 메시가 담당).

## 2. 다리 건축 — `src/config.js`(`BRIDGE`) · `src/world/Bridge.js` · `Heightmap.isWalkableAt`

- 강 중앙 길목 `x = 0, z = -9`, 데크 폭 2.9(x) · 길이 8.0(z) · 높이 0.68.
- **미완성**: 강 양쪽에 박아 둔 말뚝 4개 + 삐뚤빼뚤한 널 3장 + 안내판 + 은은한 빛(찾기 쉽게).
- 강가에서 `[다리 놓기]` → 재료 **통나무 6 · 돌 4**(Day 제한 없음) → `[재료 투입]` → `[다리 놓기]` → 데크가 아래에서 올라오며 완성.
- 걷기: `isWalkableAt` 이 완성된 다리의 데크 사각형만 예외로 열고(`setBridgeBuilt`), `Terrain.groundY` 가 데크 높이를 돌려줍니다.
  세이브에 다리 위에서 저장해도 로드 시 먼저 다리 상태를 반영해 같은 자리에 섭니다. 업적 **🌉 강을 건너서** 추가.

## 3. 북쪽 개척권 — 숲 · 채석장 · 논

| 구역 | 자리 | 내용 |
| --- | --- | --- |
| 🌲 빼곡한 숲 | 서북 ~ 중앙북 (x −23~−7, z −16~−25) | 나무 21그루 군락 — 통나무·꽃잎 수급 |
| 🪨 채석장 | 동북 (x 8~21, z −13~−23) | 바위 28개 군락 — 돌(+별조각 드롭) 수급 |
| 🌾 논 | 중앙북 (x −5.4~−1.4, z −20~−18) | 물 잠긴 **3×2** 논 타일 — 볍씨(🪙20) → 45초 → 쌀 2~3개 → 개당 🪙28 |

- 논은 `src/world/Paddy.js` + `progress.paddyPlots`. 흙이 물에 잠긴 타일 + 얇은 물판 + 논두렁 테두리, 벼는 **씨앗 → 새싹 → 자라는 중 → 황금 이삭** 4단계 도트(`farmArt.cropTexture('rice', stage)`).
- 물주기는 텃밭과 같은 규칙(남은 시간 50%, 작물당 2회)이고 물뿌리개 레벨로 **1칸 → 한 줄 3칸 → 6칸**.
- 텃밭 3×3 에는 볍씨를 심을 수 없고(`CROPS.rice.paddyOnly`), 논에는 다른 작물을 심을 수 없습니다(`plantIn(..., paddy)`).
- 공방 요리 **🍙 고소한 주먹밥**(쌀2 + 열매1, 기력 +80) 추가.
- **메타몽 분산 배치** — 남쪽 4마리(광장·꽃밭·과수원), 북쪽 3마리(숲·채석장·논 둑). 스폰 한 화면에 몰리지 않습니다.

## 4. 🛒 리어카 — `src/systems/items.js`(`CART`) · `Inventory.capacity` · `Progress.cartLevel`

- 공방 → `🛒 리어카 만들기`. 재료 **통나무 8 · 돌 5 · 코인 60**(공방 복구 필요).
- 완성하면 **가방 8칸 → 16칸**(`Inventory.setCapacity`). HUD 가방 배지가 `0/16` 으로, 통계 줄에 `🛒 16칸` 칩이 붙고,
  3D 로 플레이어 뒤를 작은 손수레(도트 스프라이트)가 따라옵니다. 업적 **🛒 손수레의 날** 추가.

## 5. 초반 재미 4종

1. **첫 1분 웰컴 3단 미션** — 상단 HUD 아래 작은 칩. `① 우체통 선물 챙기기 → ② 메타몽 2마리 찾기 → ③ 첫 나무 베기`,
   단계마다 **코인 +15** 와 축하 토스트, 모두 끝나면 배너가 사라집니다(`progress.welcome.step`, `Hud.setWelcome`).
2. **Day 잠금 제거** — 부두 통나무3+돌2 · 공방 4+3 · 자판기 4+4 · 등대 6+5. 이름표의 `5일차 복구` 문구를 `복구 전` 으로,
   타이틀은 `PHASE 4 · HD-2D 도트 / GDD v1.7 · Phase 4 · 72×72 섬`.
3. **채집 타격감 & 럭키 드롭** — 한 번 두드릴 때마다 **기본 재료 1개**(통나무/돌/꽃잎)가 바로 들어오고 `+1 통나무` 가 둥둥 뜹니다.
   파편 파티클은 9 → 11개, 흔들림은 기존 `Scenery.pop`. **9% 확률 럭키 드롭** — 숨은 섬 코인 +5 또는 황금 열매(열매+1, 금빛 파티클).
4. **미니맵 연동** — 72×72 지형 + 강(안쪽 물은 강빛) + 강 중심선 + **다리(미완성 점선 ↔ 완성 널빤지)** + 숲/채석장/논 구역.
   확대 지도 범례에 다리·논·숲·채석장이 추가되고, 눌러서 상태를 바로 확인할 수 있습니다.

## 6. 세이브 v5 · 검증 · 배포

`saveSchema.SAVE_VERSION = 5`. 추가 필드 `bridge · bridgeBuilt · cartLevel · bagCapacity · paddyPlots · welcome`.
v1~v4 세이브는 로드 시 새 필드를 기본값(다리 없음·리어카 없음·빈 논 6칸)으로 채우고 기존 진행을 그대로 승계합니다.
(이미 조건을 채운 v4 세이브는 웰컴 단계가 소급 통과하며 코인 +15×n 이 한 번 붙습니다.)

```bash
npm run build
node tools/check_layout.mjs                  # 배치 + 강/다리 + 개척권 분산 검증 (브라우저 없이)
QA_PART=content python3 tools/qa_phase4.py   # 맵·웰컴·타격감·즉시 복구·다리·숲/채석장·논·리어카 (60 체크)
QA_PART=regress python3 tools/qa_phase4.py   # 1·2·3단계 회귀 + 지도 + 업적 (14 체크)
QA_PART=save    python3 tools/qa_phase4.py   # v5 저장/복원 + v4·v3 → v5 (23 체크)
python3 tools/qa_live.py                     # 배포된 GitHub Pages 부팅 확인
```

결과: **97/97 통과 · 콘솔 에러 0 · 404/실패 요청 0**. 캡처: `screenshots/phase4/`.

> 3단계 이전 QA 스크립트(`tools/qa_phase3.py`, `qa_phase2.py`)는 48×48 좌표·옛 복구 레시피 기준이라 4단계 이후에는 실행하지 않습니다.
> 1·2·3단계 회귀는 `qa_phase4.py` 의 `regress` 파트가 담당합니다.

| 파일 | 내용 |
| --- | --- |
| `01_title.png` · `02_new_island.png` | Phase 4 타이틀 · 72×72 새 섬 + 웰컴 배너 |
| `05_lucky_hit.png` | 타격 `+1 통나무` · `🪙 +5 숨은 동전` 플로팅 |
| `06_bridge_panel.png` · `07_bridge_built.png` | 다리 건축 패널 · 완성된 널빤지 데크 |
| `08_crossed_bridge.png` | 다리를 걸어 북쪽 개척권 진입 |
| `09_north_forest.png` · `10_quarry.png` | 빼곡한 숲 · 채석장 군락 |
| `11_paddy_seed_picker.png` · `12_paddy_watered.png` · `13_paddy_harvested.png` | 논 볍씨 심기 · 물주기 · 수확 |
| `14_riceball.png` | 고소한 주먹밥 요리 |
| `15_cart_panel.png` · `16_cart_equipped.png` | 리어카 제작 · 가방 16칸 + 따라오는 손수레 |
| `18_map_modal.png` | 72×72 확대 지도(강·다리·숲·채석장·논) |
| `19_achievements.png` · `20_reloaded.png` | 업적 14종 · v5 복원 |
| `21_v4_title.png` · `22_v4_migrated.png` · `23_v3_migrated.png` | v4/v3 → v5 마이그레이션 |

### 대표 캡처 (세션 새로 열어 촬영)

소프트웨어 렌더러 특성상 한 세션에서 오래 조작하면 GPU 프로세스가 죽어 캔버스가 검게 남습니다(3단계 캡처에서도 동일).
그래서 대표 컷은 `tools/shots_phase4.py` 로 **세션마다 새로 열어** 찍었습니다 — `screenshots/phase4/final_*.png`.

| 파일 | 내용 |
| --- | --- |
| `final_01_title.png` · `final_02_spawn_welcome.png` | Phase 4 타이틀 · 새 섬 + 웰컴 배너 |
| `final_03_bridge_site.png` · `final_04_map_unbuilt.png` | 다리 건축 전(말뚝) · 지도에 점선 다리 |
| `final_05_bridge_built.png` · `final_06_north_view.png` · `final_07_map_built.png` | 완성된 데크 · 건넌 뒤 · 지도에 널빤지 다리 |
| `final_08_forest.png` · `final_09_quarry.png` · `final_10_paddy.png` · `final_11_paddy_panel.png` | 숲 · 채석장 · 논 3단계 · 논 패널 |
| `final_12_workshop_cart.png` · `final_13_cart_panel.png` · `final_14_cart_equipped.png` · `final_15_bag_16.png` | 공방 메뉴 · 리어카 패널 · 16칸 + 따라오는 손수레 · 가방 패널 |
| `final_16_achievements.png` | 업적 14종 |

### QA 환경 메모

이 작업 환경의 헤드리스 크로미움은 접근성 라이브러리(`libatk-1.0` · `libatk-bridge-2.0` · `libatspi`)가 없어 뜨지 않습니다.
`tools/atk_stub/` 에 최소 스텁 `.so` 를 두고 `tools/browser_env.py` 가 `LD_LIBRARY_PATH` 로 먼저 찾게 합니다(헤드리스는 ATK 를 호출하지 않음).
