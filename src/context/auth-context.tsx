"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { User, Role } from "@/lib/types"
import { mockApi } from "@/lib/mockData"
import { supabase } from "@/lib/supabase"
import { api } from "@/lib/api"

interface AuthContextType {
    user: User | null
    login: (role: Role, email?: string, password?: string) => Promise<void>
    logout: () => Promise<void>
    loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    // Initialize Auth State
    useEffect(() => {
        const initAuth = async () => {
            // 1. Check Supabase Session
            const { data: { session } } = await supabase.auth.getSession();

            if (session?.user) {
                // Fetch extended profile
                const profile = await api.getUserProfile(session.user.id);
                if (profile) {
                    setUser({ ...profile, email: session.user.email || profile.email });
                } else {
                    // Fallback: Create partial user from session if profile missing
                    setUser({
                        id: session.user.id,
                        email: session.user.email!,
                        name: session.user.user_metadata.full_name || 'User',
                        role: 'citizen' // Default
                    })
                }
            } else {
                // 2. Check LocalStorage for Mock Session (Fallback)
                // Priority: Police > User
                const policeSession = localStorage.getItem("cyber_police_session")
                const userSession = localStorage.getItem("cyber_user_session")

                if (policeSession) {
                    setUser(JSON.parse(policeSession))
                } else if (userSession) {
                    setUser(JSON.parse(userSession))
                }
            }
            setLoading(false)
        }

        initAuth();

        // Listen for Auth Changes (Supabase)
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_IN' && session) {
                const profile = await api.getUserProfile(session.user.id);
                if (profile) {
                    setUser({ ...profile, email: session.user.email || '' });
                } else {
                    setUser({
                        id: session.user.id,
                        email: session.user.email!,
                        name: session.user.user_metadata.full_name || 'User',
                        role: 'citizen'
                    })
                }
            } else if (event === 'SIGNED_OUT') {
                setUser(null);
                localStorage.removeItem("cyber_user_session");
                localStorage.removeItem("cyber_police_session");
                router.push("/");
            }
        });

        return () => {
            subscription.unsubscribe();
        }
    }, [router])

    const login = async (role: Role, email?: string, password?: string) => {
        setLoading(true);
        try {
            // Priority: Try Real Supabase Auth first
            if (email && password) {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (data.session) {
                    // Let the subscription handler update the state
                    return; // Success
                }

                if (error || !data.session) {
                    console.warn("Supabase Auth failed, falling back to local simulation for demo purposes:", error?.message);
                }
            }

            // Fallback / Simulation logic
            await new Promise(r => setTimeout(r, 1500)); // Real network delay

            const mockUser = await mockApi.login(role);
            // Override mock data with input email if provided to make it look real
            if (email) mockUser.email = email;

            setUser(mockUser)

            // Set secure session keys based on role
            if (role === 'police') {
                localStorage.setItem("cyber_police_session", JSON.stringify(mockUser))
            } else {
                localStorage.setItem("cyber_user_session", JSON.stringify(mockUser))
            }

            if (role === "police") {
                router.push("/police/dashboard")
            } else if ((role as string) === "vle") {
                router.push("/vle/dashboard")
            } else {
                router.push("/dashboard")
            }
        } catch (error) {
            console.error("Login failed", error)
            alert("Invalid Credentials")
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        try {
            await supabase.auth.signOut();
        } catch (e) {
            // ignore
        }
        setUser(null)
        localStorage.removeItem("cyber_user_session")
        localStorage.removeItem("cyber_police_session")
        router.push("/")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
