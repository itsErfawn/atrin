import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["d1.siteroze.ir", "www.sarabara.com", "infinitycolor.co"],
  },
  experimental:{
    viewTransition:true
  }
};

export default nextConfig;
