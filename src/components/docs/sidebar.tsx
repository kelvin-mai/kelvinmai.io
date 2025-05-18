'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siGithub } from 'simple-icons';
import { Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { ThemeSwitch } from '@/registry/default/ui/theme-switch';
import { ExternalLink, SimpleIcon } from '../common';

export type NavItem = {
  name: string;
  url: string;
  children?: NavItem[];
};

const DocsSidebarItems: React.FC<{ item: NavItem }> = ({ item }) => {
  const pathname = usePathname();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={pathname === item.url}>
        <Link href={item.url}>{item.name}</Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const DocsSidebarCategories: React.FC<{ item: NavItem }> = ({ item }) => {
  const pathname = usePathname();
  const categoryIsActive = item.children?.map((i) => i.url).includes(pathname);
  return (
    <SidebarGroup>
      <SidebarMenu>
        <Collapsible defaultOpen className='group/collapsible'>
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton isActive={categoryIsActive}>
                {item.name}{' '}
                <Plus className='ml-auto group-data-[state=open]/collapsible:hidden' />
                <Minus className='ml-auto group-data-[state=closed]/collapsible:hidden' />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.children?.map((i) => (
                  <SidebarMenuSubItem key={i.name}>
                    <SidebarMenuSubButton asChild isActive={pathname === i.url}>
                      <Link href={i.url}>{i.name}</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
};

type DocsSidebarProps = React.ComponentProps<typeof Sidebar> & {
  items: NavItem[];
};

export const DocsSidebar: React.FC<DocsSidebarProps> = ({
  items,
  ...props
}) => {
  return (
    <Sidebar variant='inset' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuButton size='lg' asChild>
            <Link href='/registry'>
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
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items
              .filter((item) => !item.children || item.children?.length < 1)
              .map((item) => (
                <DocsSidebarItems key={item.name} item={item} />
              ))}
          </SidebarMenu>
        </SidebarGroup>
        {items
          .filter((item) => item.children?.length)
          .map((item) => (
            <DocsSidebarCategories key={item.name} item={item} />
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
