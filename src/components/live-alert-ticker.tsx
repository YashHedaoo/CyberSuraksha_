"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, X } from "lucide-react"

const ALERTS = [
    "🚨 CYBER ALERT: New 'Electricity Bill' SMS Scam affecting Mumbai & Pune. DM 'STOP' to verify.",
    "⚠️ IMPERSONATION: Fake Police Video Calls reported in Delhi NCR. Do not share OTPs.",
    "🛡️ SAFETY TIP: Update Chrome Browser immediately to patch new security vulnerability.",
    "🚨 SCAM ALERT: 'Work from Home' Telegram groups asking for deposits are fraudulent."
]

export function LiveAlertTicker() {
    const [index, setIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % ALERTS.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="bg-red-600 text-white overflow-hidden relative shadow-md z-40">
            <div className="container mx-auto flex items-center h-10 px-4">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider bg-red-800 px-2 py-1 rounded mr-4 min-w-fit">
                    <AlertTriangle className="h-3 w-3 animate-pulse" />
                    Live Threats
                </div>

                <div className="flex-1 relative h-full flex items-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-medium truncate"
                        >
                            {ALERTS[index]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="ml-4 hover:bg-red-700 p-1 rounded-full transition-colors"
                >
                    <X className="h-4 w-4 opacity-80" />
                </button>
            </div>
        </div>
    )
}
