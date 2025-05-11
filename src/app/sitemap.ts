import { MetadataRoute } from "next";

import { getBaseUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
    },
    {
      url: `${getBaseUrl()}/resume`,
      lastModified: new Date(),
    },
  ];
}
