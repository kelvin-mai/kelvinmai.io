import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['@react-pdf/renderer'],
  transpilePackages: ['next-mdx-remote'],
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
  },
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
