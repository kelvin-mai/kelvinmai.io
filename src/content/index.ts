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

export const getContent = () => {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'docs');
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

// pnpm run temp
// console.log(getContentBySlugParam(['nested', 'test', 'x']));
