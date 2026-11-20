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
    float fres = pow(1.0 - clamp(abs(vViewDir.y), 0.0, 1.0), 2.4);
    float shimmer = smoothstep(0.03, 0.11, vWave);
    vec3 col = mix(uDeep, uShallow, 0.32 + shimmer * 0.42);
    col = mix(col, uSkyColor, fres * 0.34);
    col += uSunColor * shimmer * 0.06 * (1.0 - uNight * 0.75);
    gl_FragColor = vec4(col, 0.93);
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
          uShallow: { value: new THREE.Color('#8ff0e0') },
          uDeep: { value: new THREE.Color('#2fc4cd') },
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

    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.name = 'Water';
    this.mesh.position.y = WATER_LEVEL;
    this.mesh.renderOrder = 1;
  }

  update(elapsed, palette) {
    this.material.uniforms.uTime.value = elapsed;
    if (!palette) return;
    this.material.uniforms.uShallow.value.copy(palette.waterShallow);
    this.material.uniforms.uDeep.value.copy(palette.waterDeep);
    this.material.uniforms.uSkyColor.value.copy(palette.skyBottom);
    this.material.uniforms.uSunColor.value.copy(palette.sun);
    this.material.uniforms.uNight.value = palette.night;
  }
}
