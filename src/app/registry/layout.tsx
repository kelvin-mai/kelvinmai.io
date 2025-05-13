import { DocsSidebar, NavItem } from '@/components/docs/sidebar';
import { Footer } from '@/components/layout';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui';
import { source } from '@/lib/source';

export default function RegistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nav = source.getPageTree();
  return (
    <SidebarProvider>
      <DocsSidebar items={nav.children as NavItem[]} />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
          </div>
        </header>
        <main className='container pb-4'>{children}</main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
