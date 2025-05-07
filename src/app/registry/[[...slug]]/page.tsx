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

type RegistryPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function RegistryPage({ params }: RegistryPageProps) {
  const { slug } = await params;
  const doc = getContentBySlugParam(slug);
  if (!doc) {
    notFound();
  }

  return (
    <>
      <header className='flex h-16 shrink-0 items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{doc.metadata.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <main className='mx-4 mb-6'>
        <div className='space-y-2'>
          <h1 className='scroll-m-20 text-3xl font-bold tracking-tight'>
            {doc.metadata.title}
          </h1>
          <p className='text-muted-foreground text-base'>
            {doc.metadata.description}
          </p>
        </div>
        <div className='mb-12'>
          <MDX raw={doc.content} />
        </div>
        <BuyMeCofffeeBanner />
      </main>
    </>
  );
}
