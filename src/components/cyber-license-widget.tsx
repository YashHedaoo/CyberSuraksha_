"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award, ChevronRight, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CyberLicenseWidget() {
    // In a real app, fetch this from a database or context
    // For now, we simulate reading from the "Phishing Dojo" local state or defaults
    const [level, setLevel] = useState("Rookie")
    const [xp, setXp] = useState(0)
    const [needed, setNeeded] = useState(500)

    useEffect(() => {
        // Mock persistence check
        const storedScore = localStorage.getItem("dojo_score")
        if (storedScore) {
            const score = parseInt(storedScore)
            setXp(score)
            if (score > 1000) {
                setLevel("Cyber Guardian")
                setNeeded(2000)
            } else if (score > 500) {
                setLevel("Vigilante")
                setNeeded(1000)
            }
        }
    }, [])

    const progress = Math.min((xp / needed) * 100, 100)

    return (
        <Card className="glassy border-l-4 border-l-yellow-500 bg-yellow-500/5 hover:translate-y-[-2px] transition-transform">
            <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                        <Award className="h-5 w-5" /> Cyber License
                    </span>
                    <span className="text-xs font-bold px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full">
                        Lvl {level === 'Rookie' ? 1 : level === 'Vigilante' ? 2 : 3}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>XP: {xp} / {needed}</span>
                        <span>{Math.round(progress)}% to next level</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-yellow-200 dark:bg-yellow-900" />

                    <div className="pt-2">
                        <Button variant="outline" size="sm" className="w-full text-xs h-8" asChild>
                            <Link href="/tools/phishing-dojo">
                                Train Now <ChevronRight className="ml-1 h-3 w-3" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
