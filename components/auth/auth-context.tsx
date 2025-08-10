"use client"

import React from "react"

type AuthContextType = {
  isAuthenticated: boolean
  login: (email: string) => void
  logout: () => void
  userEmail?: string | null
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [userEmail, setUserEmail] = React.useState<string | null>(null)

  React.useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("demo-auth") : null
    const email = typeof window !== "undefined" ? localStorage.getItem("demo-email") : null
    if (token) {
      setIsAuthenticated(true)
      setUserEmail(email)
    }
  }, [])

  const login = React.useCallback((email: string) => {
    localStorage.setItem("demo-auth", "true")
    localStorage.setItem("demo-email", email)
    setUserEmail(email)
    setIsAuthenticated(true)
  }, [])

  const logout = React.useCallback(() => {
    localStorage.removeItem("demo-auth")
    localStorage.removeItem("demo-email")
    setIsAuthenticated(false)
    setUserEmail(null)
  }, [])

  return <AuthContext.Provider value={{ isAuthenticated, login, logout, userEmail }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = React.useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
