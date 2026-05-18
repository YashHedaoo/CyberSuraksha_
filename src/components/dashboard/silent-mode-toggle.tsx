"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Newspaper } from "lucide-react"

interface SilentModeToggleProps {
    isSilent: boolean
    onToggle: () => void
}

export function SilentModeToggle({ isSilent, onToggle }: SilentModeToggleProps) {
    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className={`transition-all ${isSilent ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'text-slate-500 hover:text-slate-900'}`}
            title={isSilent ? "Disable Silent Mode" : "Enable Silent Mode (Stealth)"}
        >
            {isSilent ? <Newspaper className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
            <span className="sr-only">Toggle Silent Mode</span>
        </Button>
    )
}

interface SilentModeViewProps {
    onExit: () => void
}

export function SilentModeView({ onExit }: SilentModeViewProps) {
    // Fake News Feed
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8 animate-in fade-in duration-500 relative">
            {/* Secret Exit Button (Top Right, Invisible by default) */}
            <div className="absolute top-4 right-4">
                <Button onClick={onExit} variant="ghost" className="opacity-0 hover:opacity-100 text-xs text-muted-foreground">
                    Exit Mode
                </Button>
            </div>

            <header className="border-b pb-4 mb-6">
                <h1 className="text-3xl font-serif font-bold text-slate-900">The Daily Chronicle</h1>
                <p className="text-slate-500 italic">Tuesday, December 31, 2025</p>
            </header>

            <article className="prose lg:prose-xl">
                <h2 className="text-2xl font-bold mb-2">Local Community Market Raises Funds for School</h2>
                <div className="h-48 bg-slate-200 rounded-lg mb-4 w-full" />
                <p className="text-slate-700">
                    The annual community market held this weekend was a resounding success, raising over ₹50,000 for the local primary school.
                    Residents gathered to sell handmade crafts, home-baked goods, and organic produce.
                </p>
                <p className="text-slate-700 mt-4">
                    "It's wonderful to see everyone come together," said Mrs. Sharma, the organizer. "The weather was perfect, and the turnkey for the new library is now secured."
                </p>
            </article>

            <div className="grid md:grid-cols-2 gap-8">
                <article>
                    <h3 className="text-xl font-bold mb-2">Top 10 Gardening Tips for Winter</h3>
                    <p className="text-slate-600 text-sm">Prepare your soil now for a bountiful spring harvest. Experts recommend...</p>
                </article>
                <article>
                    <h3 className="text-xl font-bold mb-2">New Metro Line Inaugurated</h3>
                    <p className="text-slate-600 text-sm">The new Blue Line extension will reduce commute times by 40% for suburban residents...</p>
                </article>
            </div>
        </div>
    )
}
