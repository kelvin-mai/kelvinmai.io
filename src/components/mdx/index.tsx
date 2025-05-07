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
import { ExternalLink } from '@/components/ui/external-link';
import { cn } from '@/lib/utils';
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
import { Step, Steps } from './steps';
import {
  Code,
  InlineCode,
  NpmCommand,
  ComponentPreview,
  ComponentSource,
} from './code';
import { References } from './references';

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
  a: ({ className, ...props }) => (
    <ExternalLink className='underline underline-offset-4' {...props} />
  ),
  table: Table,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,
  ComponentPreview,
  ComponentSource,
  Code,
  InlineCode,
  NpmCommand,
  Step,
  Steps,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Tabs: ({ className, ...props }) => (
    <Tabs className={cn('relative my-6 w-full', className)} {...props} />
  ),
  TabsList,
  TabsTrigger,
  TabsContent,
  References,
};

const options: MDXRemoteProps['options'] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
  },
};

export function MDX({ raw }: { raw: string }) {
  return <MDXRemote source={raw} components={components} options={options} />;
}
