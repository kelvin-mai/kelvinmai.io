import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const config: NextConfig = {
  serverExternalPackages: ["@react-pdf/renderer"],
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },
  experimental: {
    esmExternals: "loose",
  },
  async redirects() {
    return [
      {
        source: "/registry",
        destination: "/registry/introduction",
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
