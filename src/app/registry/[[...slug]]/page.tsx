import { notFound } from 'next/navigation';
import { AnchorProvider } from 'fumadocs-core/toc';

import { source } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { TableOfContents } from '@/components/docs';
import { BuyMeCofffeeBanner } from '@/components/common';
import { cn } from '@/lib/utils';

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
  };
}

export default async function DocsPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <AnchorProvider toc={page.data.toc} single={false}>
      <div
        className={cn(
          'flex py-6',
          page.data.full || 'lg:grid lg:grid-cols-[1fr_300px] lg:gap-4',
        )}
      >
        <div>
          <h1 className='text-4xl font-bold tracking-tight'>
            {page.data.title}
          </h1>
          <p className='text-muted-foreground mb-8 text-lg'>
            {page.data.description}
          </p>
          <article>
            <MDX components={getMDXComponents()} />
          </article>
          <BuyMeCofffeeBanner />
        </div>
        {!page.data.full && <TableOfContents items={page.data.toc} />}
      </div>
    </AnchorProvider>
  );
}
