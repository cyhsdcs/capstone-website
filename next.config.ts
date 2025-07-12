import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.helloimg.com',
        port: '',
        pathname: '/i/**',
      },
    ],
  },
};

export default nextConfig;
