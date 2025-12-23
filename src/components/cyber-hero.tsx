"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, AlertOctagon, Activity } from "lucide-react"
import { PanicFreeze } from "@/components/panic-freeze"

export function CyberHero({ children }: { children?: React.ReactNode }) {
    const [threatLevel, setThreatLevel] = useState("Low")

    useEffect(() => {
        const interval = setInterval(() => {
            const h = new Date().getHours()
            // Mock threat level changes based on time
            if (h >= 22 || h <= 4) setThreatLevel("High")
            else setThreatLevel("Low")
        }, 60000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background Animation Layer */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px]"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 mx-auto max-w-3xl glassy rounded-3xl p-10 text-center space-y-8 border-t border-white/20 shadow-2xl">

                {/* Panic Button Floating */}
                <div className="absolute top-4 right-4 z-50">
                    <PanicFreeze />
                </div>

                {/* Status Pill */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/10 dark:bg-slate-100/10 border border-slate-500/20 backdrop-blur-md text-sm font-mono text-slate-600 dark:text-slate-300 mb-6"
                >
                    <Activity className="h-4 w-4 animate-pulse text-green-500" />
                    <span>SYSTEM ONLINE</span>
                    <span className="w-1 h-4 bg-slate-300/20 mx-1"></span>
                    <span>THREAT LEVEL: <span className={threatLevel === 'High' ? 'text-red-500 font-bold' : 'text-green-500 font-bold'}>{threatLevel.toUpperCase()}</span></span>
                </motion.div>

                <div className="space-y-8">
                    {children}
                </div>

                {/* Cyber Decorative Elements */}
                <div className="flex justify-center gap-8 text-xs font-mono text-muted-foreground opacity-60 pt-4">
                    <div className="flex items-center gap-1">
                        <ShieldCheck className="h-4 w-4" /> E2E ENCRYPTED
                    </div>
                    <div className="flex items-center gap-1">
                        <AlertOctagon className="h-4 w-4" /> INSTANT AI ANALYSIS
                    </div>
                </div>
            </div>
        </div>
    )
}
