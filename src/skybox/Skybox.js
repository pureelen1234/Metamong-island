/**
 * Skybox.js — 하늘 그라디언트 + 솜사탕 구름 + 해/달 + 별 (1 Draw Call)
 * 카메라를 따라다니며, 시간대 팔레트에 따라 부드럽게 색이 바뀐다.
 */
import * as THREE from 'three';

const vertexShader = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uTop;
  uniform vec3 uBottom;
  uniform vec3 uDisc;
  uniform vec3 uDiscDir;
  uniform vec3 uCloud;
  uniform float uNight;
  uniform float uTime;
  varying vec3 vDir;

  float hash12(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash12(i);
    float b = hash12(i + vec2(1.0, 0.0));
    float c = hash12(i + vec2(0.0, 1.0));
    float d = hash12(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * vnoise(p);
      p = p * 2.03 + vec2(3.1, 1.7);
      a *= 0.5;
    }
    return v;
  }

  float hash13(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;

    vec3 col = mix(uBottom, uTop, smoothstep(-0.05, 0.45, h));

    // 지평선 쪽 따뜻한 번짐
    col += uBottom * 0.08 * (1.0 - smoothstep(0.0, 0.14, abs(h)));

    // ── 포근한 동화풍 적운 구름 (낮에 몽글몽글 따뜻하게)
    if (h > 0.012) {
      vec2 uv = dir.xz / (h + 0.78);
      uv = uv * 1.45 + vec2(uTime * 0.0036, uTime * 0.0012);
      float n = fbm(uv * 1.05 + vec2(11.0, 4.0));
      float n2 = fbm(uv * 2.15 - vec2(6.0, 8.0));
      float puff = n * 0.68 + n2 * 0.42;
      float shape = smoothstep(0.45, 0.62, puff);
      float crest = smoothstep(0.54, 0.72, puff);
      float band = smoothstep(0.03, 0.2, h) * (1.0 - smoothstep(0.54, 0.98, h) * 0.55);
      float cloudA = shape * band * (1.0 - uNight * 0.85);
      vec3 warmCream = mix(vec3(1.0, 0.99, 0.96), uDisc, 0.16);
      vec3 cloudCol = mix(uCloud, warmCream, 0.55 + crest * 0.45);
      cloudCol = mix(cloudCol, uBottom, 0.08 * (1.0 - crest));
      col = mix(col, cloudCol, cloudA * 0.96);
    }

    // 해 / 달
    vec3 discDir = normalize(uDiscDir);
    float sd = max(dot(dir, discDir), 0.0);
    float core = pow(sd, uNight > 0.5 ? 900.0 : 320.0);
    col += uDisc * core * 1.3;
    col += uDisc * pow(sd, 6.0) * 0.1 * (1.0 - uNight * 0.5);

    // 별 (밤에만)
    if (uNight > 0.02) {
      vec3 g = floor(dir * 190.0);
      float n = hash13(g);
      float star = step(0.9965, n) * uNight * smoothstep(0.0, 0.1, h);
      float twinkle = 0.6 + 0.4 * sin(uTime * 1.7 + n * 90.0);
      col += vec3(1.0, 0.98, 0.95) * star * twinkle;
    }

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export class Skybox {
  constructor() {
    const geo = new THREE.SphereGeometry(500, 32, 20);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTop: { value: new THREE.Color('#8ed7f6') },
        uBottom: { value: new THREE.Color('#f1fcf4') },
        uDisc: { value: new THREE.Color('#fff2cf') },
        uDiscDir: { value: new THREE.Vector3(0.2, 0.6, -0.6) },
        uCloud: { value: new THREE.Color('#ffffff') },
        uNight: { value: 0 },
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });

    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.name = 'Skybox';
    this.mesh.renderOrder = -10;
    this.mesh.frustumCulled = false;
  }

  update(cameraPosition) {
    this.mesh.position.copy(cameraPosition);
  }

  setPalette({ skyTop, skyBottom, sun, night, discDir, elapsed }) {
    const u = this.material.uniforms;
    u.uTop.value.copy(skyTop);
    u.uBottom.value.copy(skyBottom);
    u.uDisc.value.copy(sun);
    u.uCloud.value.copy(skyBottom).lerp(sun, 0.35);
    u.uNight.value = night;
    u.uTime.value = elapsed;
    if (discDir) u.uDiscDir.value.copy(discDir);
  }
}
