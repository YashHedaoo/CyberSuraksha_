"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { Trophy, Star, Shield } from "lucide-react"

type Rank = "Cyber Cadet" | "Digital Guardian" | "Cyber Defender" | "State Protector"

interface LevelContextType {
    xp: number
    level: number
    rank: Rank
    nextLevelXp: number
    addXp: (amount: number, reason: string) => void
    history: { reason: string, amount: number, timestamp: number }[]
}

const LevelContext = createContext<LevelContextType | undefined>(undefined)

const RANKS: { minLevel: number, name: Rank }[] = [
    { minLevel: 1, name: "Cyber Cadet" },
    { minLevel: 5, name: "Digital Guardian" },
    { minLevel: 10, name: "Cyber Defender" },
    { minLevel: 20, name: "State Protector" }
]

export function LevelProvider({ children }: { children: React.ReactNode }) {
    const [xp, setXp] = useState(0)
    const [level, setLevel] = useState(1)
    const [history, setHistory] = useState<{ reason: string, amount: number, timestamp: number }[]>([])
    const [showLevelUp, setShowLevelUp] = useState(false)

    // Load from LocalStorage
    useEffect(() => {
        const stored = localStorage.getItem('cyber_level')
        if (stored) {
            const data = JSON.parse(stored)
            setXp(data.xp || 0)
            setLevel(data.level || 1)
            setHistory(data.history || [])
        }
    }, [])

    // Persistence
    useEffect(() => {
        localStorage.setItem('cyber_level', JSON.stringify({ xp, level, history }))
    }, [xp, level, history])

    const getRank = (lvl: number): Rank => {
        const rank = RANKS.slice().reverse().find(r => lvl >= r.minLevel)
        return rank ? rank.name : "Cyber Cadet"
    }

    const nextLevelXp = level * 100

    const addXp = (amount: number, reason: string) => {
        setXp(prev => {
            const newXp = prev + amount
            if (newXp >= nextLevelXp) {
                setLevel(l => l + 1)
                setShowLevelUp(true)
                setTimeout(() => setShowLevelUp(false), 3000)
                return newXp - nextLevelXp // Rollover XP? Or simplified just cumulative. Let's do cumulative for simpler display, but here we reset for levels.
                // Actually, standard RPG style: XP accumulates, levels thresholds. 
                // Let's keep it simple: Level = floor(totalXP / 100)
                // But let's stick to the state implementation provided.
            }
            return newXp
        })

        // Check for level up manually based on new total if not resetting
        // Let's simplify: simple state increment
        const isLevelUp = (xp + amount) >= (level * 100)
        if (isLevelUp) {
            setLevel(l => l + 1)
            setXp(x => x + amount - (level * 100))
            setShowLevelUp(true)
            setTimeout(() => setShowLevelUp(false), 3000)
        }

        setHistory(prev => [{ reason, amount, timestamp: Date.now() }, ...prev])
    }

    return (
        <LevelContext.Provider value={{
            xp,
            level,
            rank: getRank(level),
            nextLevelXp: level * 100,
            addXp,
            history
        }}>
            {children}

            {/* Level Up Overlay */}
            {showLevelUp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-in fade-in duration-300">
                    <div className="bg-gradient-to-b from-yellow-400 to-orange-500 p-1 rounded-2xl animate-in zoom-in-50 duration-500">
                        <div className="bg-slate-900 border-4 border-yellow-300 p-8 rounded-xl text-center space-y-4 shadow-[0_0_50px_rgba(234,179,8,0.5)]">
                            <Trophy className="h-24 w-24 text-yellow-400 mx-auto animate-bounce" />
                            <h2 className="text-4xl font-black text-white uppercase tracking-wider">Level Up!</h2>
                            <p className="text-yellow-200 text-xl font-bold">You are now Level {level} {getRank(level)}</p>
                            <div className="flex justify-center gap-2">
                                <Star className="text-yellow-400 fill-current" />
                                <Star className="text-yellow-400 fill-current" />
                                <Star className="text-yellow-400 fill-current" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </LevelContext.Provider>
    )
}

export function useLevel() {
    const context = useContext(LevelContext)
    if (context === undefined) {
        throw new Error("useLevel must be used within a LevelProvider")
    }
    return context
}
