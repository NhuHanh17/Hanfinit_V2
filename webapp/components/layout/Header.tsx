import { SidebarTrigger } from "../ui/sidebar"
import { ModeToggle } from "../ui/mode-toggle"
import { Separator } from "../ui/separator"
import { DynamicBreadcrumb } from "../breadcrumb/dynamic-breadcrumb"

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-5 data-vertical:self-auto"
        />
        <DynamicBreadcrumb />
      </div>
      <div className="mr-5">
        <ModeToggle />
      </div>
    </header>
  )
}
