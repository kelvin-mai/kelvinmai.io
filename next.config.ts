import type { NextConfig } from 'next';

const config: NextConfig = {
  serverExternalPackages: ['@react-pdf/renderer'],
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
      {
        pathname: '/blog/**',
        search: '',
      },
    ],
    remotePatterns: [
      { hostname: 'img.youtube.com' },
      { hostname: 'cdn-images-1.medium.com' },
      { hostname: 'media2.dev.to' },
      { hostname: 'dev-to-uploads.s3.amazonaws.com' },
      { hostname: 'pttjrd5bylwkefgv.public.blob.vercel-storage.com' },
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
