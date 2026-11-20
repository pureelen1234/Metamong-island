import { defineConfig } from 'vite';

export default defineConfig({
  // 상대 경로 base — 정적 호스팅(서브패스 포함) 어디에 올려도 동작
  base: './',
  build: {
    target: 'es2020',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1200,
  },
  server: { host: '127.0.0.1', port: 5173 },
  preview: { host: '127.0.0.1', port: 4173 },
});
