import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/pt", permanent: true },
      { source: "/projects", destination: "/pt/projects", permanent: true },
      { source: "/about", destination: "/pt/about", permanent: true },
    ];
  },
};

export default nextConfig;
