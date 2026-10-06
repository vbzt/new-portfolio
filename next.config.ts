import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/pt", destination: "/", permanent: true },
      { source: "/en", destination: "/", permanent: true },
      { source: "/pt/projects", destination: "/projects", permanent: true },
      { source: "/en/projects", destination: "/projects", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/pt/about", destination: "/#about", permanent: true },
      { source: "/en/about", destination: "/#about", permanent: true },
    ];
  },
};

export default nextConfig;
