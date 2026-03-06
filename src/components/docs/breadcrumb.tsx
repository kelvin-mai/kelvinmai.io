'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

function formatSegment(segment: string): string {
  return segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export const DocsBreadcrumbs: React.FC = () => {
  const pathname = usePathname();
  // Strip the /registry prefix and split into segments
  const segments = pathname
    .replace(/^\/registry\/?/, '')
    .split('/')
    .filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>Registry</BreadcrumbItem>
        <BreadcrumbSeparator />
        {segments.map((segment, i) => (
          <React.Fragment key={segment}>
            <BreadcrumbItem>
              {i === segments.length - 1 ? (
                <BreadcrumbPage>{formatSegment(segment)}</BreadcrumbPage>
              ) : (
                <span>{formatSegment(segment)}</span>
              )}
            </BreadcrumbItem>
            {i < segments.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
