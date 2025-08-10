"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { CircleUserRound, HelpCircle, Home, type LucideIcon, Search, Settings } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

type NavItem = { title: string; to: string; icon: LucideIcon }

const main: NavItem[] = [
  { title: "Dashboard", to: "/app/dashboard", icon: Home },
  { title: "Settings", to: "/app/settings", icon: Settings },
  { title: "Profile", to: "/app/profile", icon: CircleUserRound },
  { title: "Search", to: "/app/search", icon: Search },
  { title: "Help", to: "/app/help", icon: HelpCircle },
]

export default function AppSidebar() {
  const { pathname } = useLocation()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-3 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border flex items-center justify-center text-sm font-semibold">TX</div>
          <span className="font-semibold">Sample</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {main.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild isActive={pathname === item.to}>
                    <Link to={item.to}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/app/user">
                <CircleUserRound />
                <span>User Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
