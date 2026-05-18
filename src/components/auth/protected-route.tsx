"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { ShieldAlert } from "lucide-react"

/**
 * ProtectedRoute Wrapper
 * Ensures that only authenticated users can access specific pages.
 * Simulates a "Route Guard" for the demo.
 */

interface ProtectedRouteProps {
    children: React.ReactNode
    role?: 'user' | 'police' | 'admin'
}

export function ProtectedRoute({ children, role = 'user' }: ProtectedRouteProps) {
    const router = useRouter()
    const pathname = usePathname()
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isChecking, setIsChecking] = useState(true)

    useEffect(() => {
        // Check local session (Simulation)
        // In a real app, this would verify a JWT token
        const userSession = localStorage.getItem("cyber_user_session")
        const policeSession = localStorage.getItem("cyber_police_session")

        // 1. Police Routes
        if (pathname.startsWith('/police')) {
            if (policeSession) {
                setIsAuthorized(true)
            } else {
                // Redirect to Police Login
                // For demo, we might not have a dedicated police login page, so redirect to generic or show error
                // Assuming '/signin' handles both or user needs select
                router.push('/signin?redirect=' + pathname)
            }
        }
        // 2. User Dashboard Routes
        else if (pathname.startsWith('/dashboard') || pathname.startsWith('/profile')) {
            if (userSession) {
                setIsAuthorized(true)
            } else {
                router.push('/signin?redirect=' + pathname)
            }
        }
        // 3. Public Routes
        else {
            setIsAuthorized(true)
        }

        setIsChecking(false)
    }, [pathname, router])

    if (isChecking) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-slate-950">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    if (!isAuthorized) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-950 text-white gap-4 p-4 text-center">
                <ShieldAlert className="w-16 h-16 text-red-500 animate-pulse" />
                <h1 className="text-2xl font-bold">Access Denied</h1>
                <p className="text-slate-400">Restricted Area. Encryption Protocols Active.</p>
                {/* Fallback button if redirect fails */}
                <button
                    onClick={() => router.push('/signin')}
                    className="text-blue-400 hover:underline"
                >
                    Return to Login Portal
                </button>
            </div>
        )
    }

    return <>{children}</>
}
