"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar"

import {
  GalleryVerticalEndIcon,
  AudioLinesIcon,
  TerminalIcon,
  TerminalSquareIcon,
  BotIcon,
  BookOpenIcon,
  Settings2Icon,
  X,
} from "lucide-react"

import { NavUser } from "./nav-user"
import Image from "next/image"
import { NavMain } from "./nav-main"
import { SIDEBAR_MENU } from "./sidebar-menu"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpen } = useSidebar()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row items-center justify-between">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="/" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-green-700">
                <Image
                  src={"/logo.png"}
                  alt="Hanfinit logo"
                  width={30}
                  height={30}
                />
              </div>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate text-xl font-bold text-primary">
                  Hanfinit
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  Quản lý tài chính cá nhân
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenuSubButton onClick={() => setOpen(false)}>
          <X />
        </SidebarMenuSubButton>
      </SidebarHeader>

      <SidebarContent className="mt-4">
        <NavMain items={SIDEBAR_MENU} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
