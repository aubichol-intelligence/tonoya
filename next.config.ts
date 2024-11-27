import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_ROOT_URL: process.env.NEXT_PUBLIC_ROOT_URL || "http://localhost:3000",
  },
}

export default nextConfig;
