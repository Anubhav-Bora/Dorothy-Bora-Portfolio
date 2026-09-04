import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: ".next-build",
  agentRules: false,
};

export default nextConfig;
