"use client"

import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    label: string
    path: string
    icon: LucideIcon
  }[]
}) {
  const { openMobile, open } = useSidebar()
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarMenu className="gap-2">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path
          return (
            <Link
              key={item.label}
              href={item.path}
              className={`flex items-center gap-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-sidebar-primary font-medium text-white"
                  : "hover:bg-accent"
              } ${(open || openMobile) && "p-2"}`}
            >
              <Collapsible
                className="group/collapsible"
                render={<SidebarMenuItem />}
              >
                <CollapsibleTrigger
                  render={<SidebarMenuButton tooltip={item.label} />}
                >
                  <Icon />
                  <span className="font-medium">{item.label}</span>
                </CollapsibleTrigger>
              </Collapsible>
            </Link>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
