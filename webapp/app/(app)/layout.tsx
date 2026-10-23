import Header from "@/components/layout/Header"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="border border-e-border">
        <Header />
        <main className="min-w-0 flex-1 rounded-lg p-5">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
