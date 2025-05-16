'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { useBreadcrumb } from 'fumadocs-core/breadcrumb';
import type { PageTree } from 'fumadocs-core/server';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type DocsBreadcrumbsProps = {
  nav: PageTree.Root;
};

export const DocsBreadcrumbs: React.FC<DocsBreadcrumbsProps> = ({ nav }) => {
  const pathname = usePathname();
  const items = useBreadcrumb(pathname, nav);

  if (items.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>Registry</BreadcrumbItem>
        <BreadcrumbSeparator />
        {items.length === 1 ? (
          <BreadcrumbItem>
            <BreadcrumbPage>{items[0]!.name}</BreadcrumbPage>
          </BreadcrumbItem>
        ) : (
          items.map((item, i) => (
            <React.Fragment key={i}>
              <BreadcrumbItem>
                {item.url && i === items.length - 1 ? (
                  <BreadcrumbPage>{item.name}</BreadcrumbPage>
                ) : (
                  <span>{item.name}</span>
                )}
              </BreadcrumbItem>
              {i <= items.length - 2 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
