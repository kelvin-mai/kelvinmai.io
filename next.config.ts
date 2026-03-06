import type { NextConfig } from 'next';

const config: NextConfig = {
  serverExternalPackages: ['@react-pdf/renderer'],
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/registry',
        destination: '/registry/introduction',
        permanent: true,
      },
    ];
  },
};

export default config;
