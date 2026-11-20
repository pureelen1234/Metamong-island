/**
 * post.js — 후처리 체인
 * RenderPass → UnrealBloomPass(은은한 발광) → OutputPass(톤매핑+sRGB) → Grade(채도·S커브·비네트)
 * 모바일 안전선: HalfFloat + MSAA 4x 렌더타깃, pixelRatio 상한 2(호출부에서 설정).
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export const POST = {
  bloomThreshold: 0.86,
  bloomStrength: 0.3,
  bloomRadius: 0.4,
  saturation: 1.07,
  contrast: 0.2,
  vignette: 0.28,
};

/** 마지막 그레이딩 — OutputPass 뒤(디스플레이 공간)에서 채도·대비·비네트를 만진다 */
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uSaturation: { value: POST.saturation },
    uContrast: { value: POST.contrast },
    uVignette: { value: POST.vignette },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uVignette;

    void main() {
      vec4 src = texture2D( tDiffuse, vUv );
      vec3 col = src.rgb;

      // 채도 살짝 올리기
      float l = dot( col, vec3( 0.2126, 0.7152, 0.0722 ) );
      col = mix( vec3( l ), col, uSaturation );

      // 부드러운 S자 커브 (그림자 안 죽이고 하이라이트만 살짝)
      vec3 s = col * col * ( 3.0 - 2.0 * col );
      col = mix( col, s, uContrast );

      // 은은한 비네트
      vec2 d = vUv - 0.5;
      float vig = 1.0 - dot( d, d ) * uVignette * 2.0;
      col *= clamp( vig, 0.0, 1.0 );

      // 아주 옅은 종이 그레인 (밴딩 방지)
      float g = fract( sin( dot( vUv * vec2( 1.0, 1.3 ) + uVignette, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
      col += ( g - 0.5 ) * 0.008;

      gl_FragColor = vec4( col, src.a );
    }
  `,
};

export function createPost(renderer, scene, camera) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  // MSAA 4x — EffectComposer 기본 RT는 안티앨리어싱이 없어 외곽선이 계단처럼 깨진다
  const target = new THREE.WebGLRenderTarget(Math.max(1, size.x), Math.max(1, size.y), {
    type: THREE.HalfFloatType,
    samples: 4,
  });
  target.texture.name = 'MetamongPostRT';

  const composer = new EffectComposer(renderer, target);
  composer.setPixelRatio(renderer.getPixelRatio());
  composer.setSize(window.innerWidth, window.innerHeight);

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    POST.bloomStrength,
    POST.bloomRadius,
    POST.bloomThreshold
  );
  composer.addPass(bloom);

  composer.addPass(new OutputPass());

  const grade = new ShaderPass(GradeShader);
  composer.addPass(grade);

  // 씬(그림자맵 패스 포함)만의 draw call/삼각형 수를 재기 위한 계측
  let sceneStats = { calls: 0, triangles: 0 };
  const origRender = renderPass.render.bind(renderPass);
  renderPass.render = (r, writeBuffer, readBuffer, deltaTime, maskActive) => {
    origRender(r, writeBuffer, readBuffer, deltaTime, maskActive);
    sceneStats = {
      calls: r.info.render.calls,
      triangles: r.info.render.triangles,
    };
  };

  return {
    composer,
    bloom,
    grade,
    renderPass,
    get sceneStats() {
      return sceneStats;
    },
    setSize(w, h) {
      composer.setPixelRatio(renderer.getPixelRatio());
      composer.setSize(w, h);
    },
    render() {
      composer.render();
    },
    dispose() {
      composer.dispose();
      target.dispose();
    },
  };
}
