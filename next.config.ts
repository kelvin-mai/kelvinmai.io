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
};

export default withMDX(config);
