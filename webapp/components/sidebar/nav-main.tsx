"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { ChevronRightIcon, LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.url
          return (
            <Link
              key={item.title}
              href={item.url}
              className={`flex items-center gap-3 rounded-lg p-3 transition-colors ${
                isActive
                  ? "bg-sidebar-primary font-medium text-white"
                  : "hover:bg-accent"
              }`}
            >
              <Collapsible
                className="group/collapsible"
                render={<SidebarMenuItem />}
              >
                <CollapsibleTrigger
                  render={<SidebarMenuButton tooltip={item.title} />}
                >
                  <Icon />
                  <span>{item.title}</span>
                </CollapsibleTrigger>
              </Collapsible>
            </Link>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
