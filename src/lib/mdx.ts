import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx';

const chConfig = { components: { code: 'Code', inlineCode: 'InlineCode' } };
const plug = <T extends unknown[]>(...args: T): T => args;

export const mdxOptions = {
  remarkPlugins: [plug(remarkCodeHike, chConfig), remarkGfm],
  rehypePlugins: [rehypeSlug],
  recmaPlugins: [plug(recmaCodeHike, chConfig)],
};
