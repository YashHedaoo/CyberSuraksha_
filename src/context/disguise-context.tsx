"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface DisguiseContextType {
    isDisguised: boolean;
    toggleDisguise: (value?: boolean) => void;
    checkPin: (input: string) => boolean;
}

const DisguiseContext = createContext<DisguiseContextType | undefined>(undefined)

const PIN_CODE = "100" // Simple pin for demo: 100 + =

export function DisguiseProvider({ children }: { children: React.ReactNode }) {
    const [isDisguised, setIsDisguised] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // Check local storage for persistence
        const saved = localStorage.getItem("disguise_mode")
        if (saved === "true") setIsDisguised(true)
    }, [])

    const toggleDisguise = (value?: boolean) => {
        const nextState = value !== undefined ? value : !isDisguised
        setIsDisguised(nextState)
        localStorage.setItem("disguise_mode", String(nextState))
        if (nextState) {
            // Force reload to ensure layout catches it immediately if router push is not enough
            window.location.href = "/"
        }
    }

    const checkPin = (input: string) => {
        if (input === PIN_CODE) {
            toggleDisguise(false) // Unlock
            return true
        }
        return false
    }

    return (
        <DisguiseContext.Provider value={{ isDisguised, toggleDisguise, checkPin }}>
            {children}
        </DisguiseContext.Provider>
    )
}

export const useDisguise = () => {
    const context = useContext(DisguiseContext)
    if (context === undefined) {
        throw new Error("useDisguise must be used within a DisguiseProvider")
    }
    return context
}
