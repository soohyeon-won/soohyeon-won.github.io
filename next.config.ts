import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 정적 파일 내보내기 활성화
  assetPrefix: '.',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

export default nextConfig;
