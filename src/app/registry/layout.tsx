import { DocsSidebar } from '@/components/docs/sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function RegistryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider
      style={{ '--sidebar-width': '19rem' } as React.CSSProperties}
    >
      <DocsSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
