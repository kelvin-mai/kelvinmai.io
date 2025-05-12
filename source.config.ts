import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx';

const chConfig = {
  components: {
    code: 'Code',
    inlineCode: 'InlineCode',
  },
};

export const docs = defineDocs({
  dir: 'src/content/docs',
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    remarkPlugins: (v) => [[remarkCodeHike, chConfig], ...v],
    recmaPlugins: [[recmaCodeHike, chConfig]],
  },
});
