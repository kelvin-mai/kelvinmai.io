import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getFilepathsRecursively = (dir: string): string[] => {
  const files = fs.readdirSync(dir);
  return files.flatMap((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      return getFilepathsRecursively(filepath);
    } else if (path.extname(file) === '.mdx') {
      return [filepath];
    } else {
      return [];
    }
  });
};

export const getContent = (dir = 'docs') => {
  const contentDir = path.join(process.cwd(), 'src', 'content', dir);
  const filepaths = getFilepathsRecursively(contentDir);
  return filepaths.map((filepath) => {
    const file = fs.readFileSync(filepath, 'utf-8');
    const { data, content } = matter(file);
    const relativePath = path.relative(contentDir, filepath);
    const slug = relativePath.replace(path.extname(relativePath), '');
    const slugAsParams = slug.split(path.sep);
    return { slug, slugAsParams, metadata: data, content };
  });
};

export const getContentBySlugParam = (slugParam: string[]) => {
  const all = getContent();
  const slug = slugParam.join('/');
  return all.find((doc) => doc.slug === slug) || null;
};

export type NavItem = {
  title: string;
  url: string;
  items?: NavItem[];
};

export const getNav = ({
  dir = 'docs',
  docsUrl = '/registry',
  rootTitle = 'Getting Started',
}: {
  dir?: string;
  docsUrl?: string;
  rootTitle?: string;
}): NavItem[] => {
  const docs = getContent(dir);
  const subItems = docs
    .filter((d) => d.slugAsParams.length > 1)
    .map(({ content, ...rest }) => ({ ...rest }))
    .reduce((acc: any, curr) => {
      const k = curr.slugAsParams[0];
      if (k) {
        acc[k] = acc[k] ? [...acc[k], curr] : [curr];
      }
      return acc;
    }, {});
  return [
    {
      title: rootTitle,
      url: '#',
      items: docs
        .filter((d) => d.slugAsParams.length === 1)
        .map(({ metadata, slug }) => ({
          title: metadata.title,
          url: `${docsUrl}/${slug}`,
        })),
    },
    ...Object.keys(subItems).map((k) => ({
      title: k.charAt(0).toUpperCase() + k.slice(1),
      url: '#',
      items: subItems[k].map((i: any) => ({
        title: i.metadata.title,
        url: `${docsUrl}/${i.slug}`,
      })),
    })),
  ];
};
