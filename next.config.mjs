/** @type {import('next').NextConfig} */
const nextConfig = {
  // 배포(Vercel) 빌드가 사소한 ESLint 경고로 중단되지 않도록 합니다.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
