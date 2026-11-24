/**
 * Water.js — 부드러운 물결 바다 (커스텀 셰이더 1 Draw Call)
 */
import * as THREE from 'three';
import { WATER_LEVEL, HALF } from '../config.js';

const vertexShader = /* glsl */ `
  uniform float uTime;
  varying vec3 vWorldPos;
  varying float vWave;
  varying vec3 vViewDir;
  #include <common>
  #include <fog_pars_vertex>

  void main() {
    vec3 p = position;
    float w =
      sin(p.x * 0.52 + uTime * 0.55) * 0.055 +
      sin(p.z * 0.41 - uTime * 0.47) * 0.045 +
      sin((p.x + p.z) * 0.23 + uTime * 0.31) * 0.03;
    p.y += w;

    vec4 worldPosition = modelMatrix * vec4(p, 1.0);
    vWorldPos = worldPosition.xyz;
    vWave = w;
    vViewDir = normalize(cameraPosition - worldPosition.xyz);

    vec4 mvPosition = viewMatrix * worldPosition;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform vec3 uSkyColor;
  uniform vec3 uSunColor;
  uniform float uNight;
  varying vec3 vWorldPos;
  varying float vWave;
  varying vec3 vViewDir;
  #include <common>
  #include <fog_pars_fragment>

  void main() {
    float fres = pow(1.0 - clamp(abs(vViewDir.y), 0.0, 1.0), 2.3);
    float shimmer = smoothstep(0.025, 0.105, vWave);

    // 해안선 근처 에메랄드/터콰이즈 얕은 물 + 잔잔한 물거품 하이라이트
    vec2 absP = abs(vWorldPos.xz);
    float coastDist = max(absP.x, absP.y);
    float shallowBand = 1.0 - smoothstep(28.5, 43.0, coastDist);
    float shoreRing = smoothstep(29.5, 32.8, coastDist) * (1.0 - smoothstep(32.8, 36.2, coastDist));
    float foamWave = sin(coastDist * 2.1 - uTime * 1.9 + sin(vWorldPos.x * 0.35 + vWorldPos.z * 0.35) * 1.6);
    float foam = smoothstep(0.72, 0.94, foamWave) * shoreRing * 0.55;

    float sparkleRaw = sin(vWorldPos.x * 1.9 + uTime * 1.4) * cos(vWorldPos.z * 1.7 - uTime * 1.1);
    float sparkle = smoothstep(0.86, 0.98, sparkleRaw) * (0.45 + shallowBand * 0.55);

    vec3 col = mix(uDeep, uShallow, clamp(0.28 + shallowBand * 0.56 + shimmer * 0.28, 0.0, 1.0));
    col = mix(col, uSkyColor, fres * 0.3);
    col = mix(col, vec3(0.96, 1.0, 1.0), foam * (1.0 - uNight * 0.55));
    col += uSunColor * (shimmer * 0.08 + sparkle * 0.22) * (1.0 - uNight * 0.72);
    gl_FragColor = vec4(col, 0.91);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;

export class Water {
  constructor() {
    const size = HALF * 8;
    const geo = new THREE.PlaneGeometry(size, size, 72, 72);
    geo.rotateX(-Math.PI / 2);

    this.material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.fog,
        {
          uTime: { value: 0 },
          uShallow: { value: new THREE.Color('#5CE1D6') },
          uDeep: { value: new THREE.Color('#38BDF8') },
          uSkyColor: { value: new THREE.Color('#e8fcff') },
          uSunColor: { value: new THREE.Color('#fffbe6') },
          uNight: { value: 0 },
        },
      ]),
      vertexShader,
      fragmentShader,
      transparent: true,
      fog: true,
      depthWrite: true,
    });

    this._shallowTint = new THREE.Color('#5CE1D6');
    this._deepTint = new THREE.Color('#38BDF8');

    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.name = 'Water';
    this.mesh.position.y = WATER_LEVEL;
    this.mesh.renderOrder = 1;
  }

  update(elapsed, palette) {
    this.material.uniforms.uTime.value = elapsed;
    if (!palette) return;
    const dayWeight = 1 - (palette.night || 0) * 0.75;
    this.material.uniforms.uShallow.value.copy(palette.waterShallow).lerp(this._shallowTint, 0.45 * dayWeight);
    this.material.uniforms.uDeep.value.copy(palette.waterDeep).lerp(this._deepTint, 0.4 * dayWeight);
    this.material.uniforms.uSkyColor.value.copy(palette.skyBottom);
    this.material.uniforms.uSunColor.value.copy(palette.sun);
    this.material.uniforms.uNight.value = palette.night;
  }
}
