import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { ModeToggle } from "@/components/ui/mode-toggle"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="floating" />

      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background/95 backdrop-blur transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-5 data-vertical:self-auto"
            />
          </div>
          <div className="mr-3">
            <ModeToggle />
          </div>
        </header>

        <main className="min-w-0 flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
