import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // ✅ Tắt kiểm tra ESLint khi build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Nếu repo không ở root, thêm assetPrefix nếu cần:
  // assetPrefix: '/ui',
};

export default nextConfig;
