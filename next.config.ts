import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 정적 파일 내보내기 활성화
  basePath: "/soohyeon-won.github.io", // GitHub Pages 경로
  assetPrefix: "/soohyeon-won.github.io/", // 정적 자원 경로 (끝에 / 포함)
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

export default nextConfig;
