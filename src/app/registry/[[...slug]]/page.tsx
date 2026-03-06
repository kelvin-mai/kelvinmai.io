import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx';

import { source } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { TableOfContents } from '@/components/docs';
import { BuyMeCofffeeBanner } from '@/components/common';
import { cn } from '@/lib/utils';
import { SITE_URL } from '@/lib/constants';

const chConfig = {
  components: { code: 'Code', inlineCode: 'InlineCode' },
};

const plug = <T extends unknown[]>(...args: T): T => args;

const mdxOptions = {
  remarkPlugins: [plug(remarkCodeHike, chConfig), remarkGfm],
  rehypePlugins: [rehypeSlug],
  recmaPlugins: [plug(recmaCodeHike, chConfig)],
};

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: 'article',
      title: page.data.title,
      description: page.data.description,
      images: [
        {
          url: `${SITE_URL}/api/og?title=${page.data.title}&description=${page.data.description}`,
          height: 1200,
          width: 630,
          alt: `Preview image for ${page.data.title}`,
        },
      ],
    },
  };
}

export default async function DocsPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return (
    <div
      className={cn(
        !page.data.full && 'flex lg:grid lg:grid-cols-[1fr_300px] lg:gap-4',
      )}
    >
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>{page.data.title}</h1>
        <p className='text-muted-foreground mb-8 text-lg'>
          {page.data.description}
        </p>
        <article>
          <MDXRemote
            source={page.data.body}
            components={getMDXComponents()}
            options={{ mdxOptions, blockJS: false }}
          />
        </article>
        <BuyMeCofffeeBanner />
      </div>
      {!page.data.full && <TableOfContents items={page.data.toc} />}
    </div>
  );
}
