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
  console.log(doc);
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
      <main>
        <MDX raw={doc.content} />
      </main>
    </>
  );
}
