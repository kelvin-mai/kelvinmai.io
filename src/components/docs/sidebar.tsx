'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siGithub } from 'simple-icons';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import type { NavItem } from '@/content';
import { ExternalLink, SimpleIcon } from '../common';
import { ThemeSwitch } from '@/registry/default/ui/theme-switch';
import { Button } from '../ui';
import { ChevronRight } from 'lucide-react';

export const DocsSidebar: React.FC<
  React.ComponentProps<typeof Sidebar> & { items: NavItem[] }
> = ({ items, ...props }) => {
  const pathname = usePathname();
  return (
    <Sidebar
      variant='floating'
      className='h-[100svh-var(--spacing(8))]'
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='/'>
                <Image
                  className='size-10 overflow-hidden rounded-full'
                  alt='profile'
                  src='/images/me.jpg'
                  height={40}
                  width={40}
                />
                <div className='flex flex-col gap-1 leading-none'>
                  <span className='font-semibold'>Component Registry</span>
                  <span className='text-muted-foreground'>
                    kelvinmai.io/registry
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className='group/collapsible'
          >
            <SidebarGroup key={item.title} className='p-0 px-2'>
              <SidebarGroupLabel className='text-sm font-semibold' asChild>
                <CollapsibleTrigger>
                  {item.title}{' '}
                  <ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                {item.items && item.items.length > 0 && (
                  <SidebarGroupContent className='pl-2'>
                    <SidebarMenu>
                      {item.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === item.url}
                          >
                            <Link href={item.url}>{item.title}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                )}
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className='flex items-center justify-between'>
          <Button
            size='icon'
            variant='ghost'
            className='rounded-full border'
            asChild
          >
            <ExternalLink href='https://github.com/kelvin-mai/kelvinmai.io'>
              <SimpleIcon icon={siGithub} />
            </ExternalLink>
          </Button>
          <ThemeSwitch />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
