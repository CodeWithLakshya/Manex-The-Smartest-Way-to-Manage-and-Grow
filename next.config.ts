import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export", // generates static HTML for GitHub Pages
  images: {
    unoptimized: true, // disable Next.js image optimization
  },
  basePath: "/Manex-The-Smartest-Way-to-Manage-and-Grow", // important for GitHub Pages
  /* config options here */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
