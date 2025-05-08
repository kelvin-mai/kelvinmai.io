import { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/constants';
import { getContent } from '@/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs = getContent().map((d) => ({
    url: `${siteConfig.url}/registry/${d.slug}`,
    lastModified: new Date(),
  }));
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/resume`,
      lastModified: new Date(),
    },
    ...docs,
  ];
}
