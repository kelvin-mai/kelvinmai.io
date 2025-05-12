import { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/utils';
import { source } from '@/lib/source';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string) => new URL(path, getBaseUrl()).toString();
  return [
    {
      url: url('/'),
      lastModified: new Date(),
    },
    {
      url: url('/resume'),
      lastModified: new Date(),
    },
    ...source.getPages().map((page) => ({
      url: url(page.url),
      lastModified: page.data.lastModified
        ? new Date(page.data.lastModified)
        : new Date(),
    })),
  ];
}
