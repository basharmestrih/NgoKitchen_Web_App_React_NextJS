/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mui/material", "@mui/icons-material"],
  },
  images: {
    domains: ["images.pexels.com","images.food52.com"],
  },
};

export default nextConfig;
