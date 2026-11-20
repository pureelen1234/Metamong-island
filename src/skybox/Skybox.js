/**
 * Skybox.js — 하늘 그라디언트 + 해/달 + 별 (1 Draw Call)
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
  uniform float uNight;
  uniform float uTime;
  varying vec3 vDir;

  float hash13(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;

    vec3 col = mix(uBottom, uTop, smoothstep(-0.05, 0.42, h));

    // 지평선 쪽 따뜻한 번짐
    col += uBottom * 0.07 * (1.0 - smoothstep(0.0, 0.12, abs(h)));

    // 해 / 달
    vec3 discDir = normalize(uDiscDir);
    float sd = max(dot(dir, discDir), 0.0);
    float core = pow(sd, uNight > 0.5 ? 900.0 : 320.0);
    col += uDisc * core * 1.35;
    col += uDisc * pow(sd, 6.0) * 0.12 * (1.0 - uNight * 0.5);

    // 별 (밤에만)
    if (uNight > 0.02) {
      vec3 g = floor(dir * 190.0);
      float n = hash13(g);
      float star = step(0.9965, n) * uNight * smoothstep(0.0, 0.10, h);
      float twinkle = 0.6 + 0.4 * sin(uTime * 1.7 + n * 90.0);
      col += vec3(1.0, 0.98, 0.93) * star * twinkle;
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
        uTop: { value: new THREE.Color('#9bd3f2') },
        uBottom: { value: new THREE.Color('#ffedd6') },
        uDisc: { value: new THREE.Color('#ffe0b4') },
        uDiscDir: { value: new THREE.Vector3(0.2, 0.6, -0.6) },
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
    u.uNight.value = night;
    u.uTime.value = elapsed;
    if (discDir) u.uDiscDir.value.copy(discDir);
  }
}
