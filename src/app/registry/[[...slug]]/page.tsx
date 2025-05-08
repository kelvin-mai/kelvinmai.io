import * as React from 'react';
import { notFound } from 'next/navigation';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { getContentBySlugParam } from '@/content';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { MDX } from '@/components/mdx';
import { BuyMeCofffeeBanner } from '@/components/buy-me-coffee-banner';
import { TableOfContents } from '@/components/docs/table-of-contents';
import { buildToc } from '@/components/docs/toc';

type RegistryPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateMetadata({ params }: RegistryPageProps) {
  const { slug } = await params;
  const doc = getContentBySlugParam(slug);
  if (!doc) {
    return {};
  }

  return {
    title: doc.metadata.title,
    description: doc.metadata.description,
  };
}

export default async function RegistryPage({ params }: RegistryPageProps) {
  const { slug } = await params;
  const doc = getContentBySlugParam(slug);
  if (!doc) {
    notFound();
  }

  const toc = buildToc(doc.content);

  return (
    <>
      <main className='container font-sans'>
        <aside className='mt-4 flex h-8 shrink-0 items-center gap-2 px-4'>
          <SidebarTrigger className='-ml-4' />
          <Separator orientation='vertical' className='mr-2' />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <span className='text-muted-foreground capitalize'>
                  {slug.length > 1 ? slug[0] : 'Getting Started'}
                </span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{doc.metadata.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </aside>
        <div className='flex py-6 md:grid md:grid-cols-[1fr_300px] md:gap-4 md:py-8'>
          <div className='space-y-2'>
            <h1 className='scroll-m-20 text-3xl font-bold tracking-tight'>
              {doc.metadata.title}
            </h1>
            <p className='text-muted-foreground text-base'>
              {doc.metadata.description}
            </p>
            <div className='mb-12'>
              <MDX raw={doc.content} />
            </div>
            <BuyMeCofffeeBanner />
          </div>
          <TableOfContents
            className='hidden shrink-0 md:sticky md:top-16 md:block md:self-start'
            items={toc}
          />
        </div>
      </main>
    </>
  );
}
