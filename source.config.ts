import { z } from 'zod';
import {
  defineDocs,
  defineConfig,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx';

const chConfig = {
  components: {
    code: 'Code',
    inlineCode: 'InlineCode',
  },
};

export const docs = defineDocs({
  dir: 'src/content/docs',
  docs: {
    schema: frontmatterSchema.extend({
      full: z.boolean().default(false),
    }),
  },
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    remarkPlugins: (v) => [[remarkCodeHike, chConfig], ...v],
    recmaPlugins: [[recmaCodeHike, chConfig]],
  },
});
