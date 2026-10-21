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
  SidebarRail,
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
  FrameIcon,
  PieChartIcon,
  MapIcon,
  X,
} from "lucide-react"
import { NavUser } from "./nav-user"
import { NavProjects } from "./nav-projects"
import Image from "next/image"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: <GalleryVerticalEndIcon />,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: <AudioLinesIcon />,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: <TerminalIcon />,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      path: "#",
      icon: <TerminalSquareIcon />,
      isActive: true,
      items: [
        {
          title: "History",
          path: "#",
        },
        {
          title: "Starred",
          path: "#",
        },
        {
          title: "Settings",
          path: "#",
        },
      ],
    },
    {
      title: "Models",
      path: "#",
      icon: <BotIcon />,
      items: [
        {
          title: "Genesis",
          path: "#",
        },
        {
          title: "Explorer",
          path: "#",
        },
        {
          title: "Quantum",
          path: "#",
        },
      ],
    },
    {
      title: "Documentation",
      path: "#",
      icon: <BookOpenIcon />,
      items: [
        {
          title: "Introduction",
          path: "#",
        },
        {
          title: "Get Started",
          path: "#",
        },
        {
          title: "Tutorials",
          path: "#",
        },
        {
          title: "Changelog",
          path: "#",
        },
      ],
    },
    {
      title: "Settings",
      path: "#",
      icon: <Settings2Icon />,
      items: [
        {
          title: "General",
          path: "#",
        },
        {
          title: "Team",
          path: "#",
        },
        {
          title: "Billing",
          path: "#",
        },
        {
          title: "Limits",
          path: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      path: "/",
      icon: FrameIcon,
    },
    {
      name: "Sales & Marketing",
      path: "/sale",
      icon: PieChartIcon,
    },
    {
      name: "Travel",
      path: "/travel",
      icon: MapIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpen } = useSidebar()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row items-center justify-between">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
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

      <SidebarContent className="mt-3">
        <NavProjects projects={data.projects} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
