import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(process.cwd()),
  async redirects() {
    return [
      // The Journey timeline is no longer part of the Pravnya app.
      { source: "/journey", destination: "/features", permanent: true },
    ];
  },
};

export default nextConfig;
