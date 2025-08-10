"use client"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layout/app-sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Menu } from "lucide-react"
import { useAuth } from "@/components/auth/auth-context"

export default function AppShell() {
  const { logout, userEmail } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const seg = location.pathname.replace(/^\/app\/?/, "") || "dashboard"

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
          <Separator orientation="vertical" className="h-5" />
          <div className="text-sm text-muted-foreground capitalize">{seg.replaceAll("-", " ")}</div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:inline-block">{userEmail}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                logout()
                navigate("/", { replace: true })
              }}
            >
              Logout
            </Button>
          </div>
        </header>
        <main className="flex-1 p-3 md:p-4">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
