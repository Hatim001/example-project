"use client"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider, useAuth } from "@/components/auth/auth-context"
import LoginPage from "@/components/pages/login-page"
import AppShell from "@/components/layout/app-shell"
import DashboardHome from "@/components/pages/dashboard-home"
import SimplePage from "@/components/pages/simple-page"

export default function Page() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* Authenticated app lives under /app and keeps the sidebar mounted once */}
          <Route element={<ProtectedLayout />}>
            <Route path="/app">
              <Route index element={<Navigate to="/app/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardHome />} />
              <Route path="settings" element={<SimplePage title="Settings" />} />
              <Route path="profile" element={<SimplePage title="Profile" />} />
              <Route path="search" element={<SimplePage title="Search" />} />
              <Route path="help" element={<SimplePage title="Help" />} />
              <Route path="user" element={<SimplePage title="User Profile" />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </AuthProvider>
  )
}

function ProtectedLayout() {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate to="/" replace />
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}
