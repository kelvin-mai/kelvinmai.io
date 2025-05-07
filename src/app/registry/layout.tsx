import { DocsSidebar } from '@/components/docs/sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { getNav } from '@/content';

export default function RegistryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nav = getNav({});
  return (
    <SidebarProvider
      style={{ '--sidebar-width': '19rem' } as React.CSSProperties}
    >
      <DocsSidebar items={nav} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
