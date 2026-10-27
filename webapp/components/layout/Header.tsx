import { SidebarTrigger } from "../ui/sidebar"
import { ModeToggle } from "../ui/mode-toggle"
import { Separator } from "../ui/separator"
import { DynamicBreadcrumb } from "../breadcrumb/DynamicBreadcrumb"
import { Bell } from "lucide-react"
import { Button } from "../ui/button"

export default function Header() {
  return (
    <header className="flex h-15 shrink-0 items-center justify-between gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-5 data-vertical:self-auto"
        />
        <DynamicBreadcrumb />
      </div>
      <div className="mr-10 flex items-center lg:gap-10">
        <Button variant={"ghost"}>
          <Bell className="h-4 w-4" />
        </Button>
        <ModeToggle />
      </div>
    </header>
  )
}
