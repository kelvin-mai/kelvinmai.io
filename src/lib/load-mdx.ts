import fs from "fs";
import path from "path";
import matter from "gray-matter";

const parseFrontmatter = (raw: string) => {
  const file = matter(raw);
  return {
    metadata: file.data,
    content: file.content,
  };
};

const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
};

const readMDXFile = (filepath: string) => {
  const raw = fs.readFileSync(filepath, "utf-8");
  return parseFrontmatter(raw);
};

const getMDXData = (dir: string) => {
  const files = getMDXFiles(dir);
  return files.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
};

export const getAllMDXData = () => {
  return getMDXData(path.join(process.cwd(), "src", "content"));
};
