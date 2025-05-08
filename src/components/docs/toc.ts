export type TOCItemType = {
  title: React.ReactNode;
  url: string;
  depth: number;
};

export const buildToc = (content: string): TOCItemType[] => {
  const matches = content.matchAll(/^(#{1,6})\s+(.+)$/gm);
  return Array.from(matches).map((match) => {
    const depth = match[1]!.length;
    const title = match[2]!.trim();
    const url = title
      ?.toLocaleLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    return { title, depth, url: `#${url}` };
  });
};
