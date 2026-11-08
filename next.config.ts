import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/pocetna", destination: "/", permanent: true }];
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
