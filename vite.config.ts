import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src', // src 디렉토리를 루트로 설정
  build: {
    outDir: '../dist', // 빌드된 파일이 저장될 디렉토리
  },
});
