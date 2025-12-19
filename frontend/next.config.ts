import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Optimize production builds
  productionBrowserSourceMaps: false,
  
  // Enable experimental optimizations
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "framer-motion"
    ],
  },
  
  // Preload critical pages
  rewrites: async () => {
    return {
      beforeFiles: [],
    };
  },
};

export default nextConfig;
