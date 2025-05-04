import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import {
  recmaCodeHike,
  remarkCodeHike,
  type CodeHikeConfig,
} from 'codehike/mdx';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink } from '../ui/external-link';
import { rehypeNpmCommand } from '@/lib/rehype';
import {
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  OrderedList,
  P,
  UnorderedList,
} from './typography';
import { Code, InlineCode } from './code';

const chConfig: CodeHikeConfig = {
  components: {
    code: 'Code',
    inlineCode: 'InlineCode',
  },
};

const components: MDXRemoteProps['components'] = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  blockquote: Blockquote,
  ul: UnorderedList,
  ol: OrderedList,
  a: ExternalLink,
  table: Table,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,
  Code,
  InlineCode,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
};

const options: MDXRemoteProps['options'] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, chConfig]],
    rehypePlugins: [rehypeNpmCommand],
    recmaPlugins: [[recmaCodeHike, chConfig]],
  },
};

export function MDX({ raw }: { raw: string }) {
  return <MDXRemote source={raw} components={components} options={options} />;
}
