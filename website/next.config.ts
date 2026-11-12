import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(process.cwd()),
  async redirects() {
    return [
      // One address for the site: www.pravnya.com → pravnya.com (canonical links already use pravnya.com).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pravnya.com" }],
        destination: "https://pravnya.com/:path*",
        permanent: true,
      },
      { source: "/ask-pravnya", destination: "/ask-pravnya-ai", permanent: true },
      // "Why Pravnya" was merged into About.
      { source: "/why-pravnya", destination: "/about", permanent: true },
      // The Journey timeline is no longer part of the Pravnya app.
      { source: "/journey", destination: "/features", permanent: true },
    ];
  },
};

export default nextConfig;
