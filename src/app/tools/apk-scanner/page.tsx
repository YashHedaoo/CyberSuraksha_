"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ShieldCheck, Smartphone, Info, Lock, Zap, Skull } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/components/lib/utils"
import { useLanguage } from "@/context/language-context"

export default function AppRiskScanner() {
    const { t } = useLanguage()
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>([])
    const [analyzing, setAnalyzing] = useState(false)
    const [result, setResult] = useState<{ score: number, level: string, advice: string[] } | null>(null)
    const [panicMode, setPanicMode] = useState(false)

    // Move constants inside to access translations
    const PERMISSIONS = [
        { id: "camera", label: t.apkScanner.perms.camera, risk: 5 },
        { id: "mic", label: t.apkScanner.perms.mic, risk: 5 },
        { id: "location", label: t.apkScanner.perms.location, risk: 4 },
        { id: "contacts", label: t.apkScanner.perms.contacts, risk: 5 },
        { id: "sms", label: t.apkScanner.perms.sms, risk: 10 },
        { id: "storage", label: t.apkScanner.perms.storage, risk: 3 },
        { id: "phone", label: t.apkScanner.perms.phone, risk: 3 },
        { id: "overlay", label: t.apkScanner.perms.overlay, risk: 10 },
        { id: "accessibility", label: t.apkScanner.perms.accessibility, risk: 15 },
    ]

    const PRESETS = [
        { name: t.apkScanner.presets.loan, perms: ["contacts", "storage", "camera", "location"], icon: "💸" },
        { name: t.apkScanner.presets.betting, perms: ["overlay", "sms", "phone"], icon: "🎲" },
        { name: t.apkScanner.presets.dating, perms: ["camera", "mic", "location", "storage"], icon: "💘" },
        { name: t.apkScanner.presets.fakeKyc, perms: ["sms", "overlay", "accessibility", "contacts"], icon: "🏦" },
        { name: t.apkScanner.presets.flashlight, perms: [], icon: "🔦" },
    ]

    const togglePermission = (id: string) => {
        setResult(null)
        setPanicMode(false)
        setSelectedPermissions(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        )
    }

    const applyPreset = (perms: string[]) => {
        setSelectedPermissions(perms)
        setResult(null)
        setPanicMode(false)
    }

    const analyzeRisk = () => {
        setAnalyzing(true)
        setPanicMode(false)

        // Simulate deeper analysis
        setTimeout(() => {
            let totalRisk = 0
            const advice: string[] = []

            selectedPermissions.forEach(pid => {
                const p = PERMISSIONS.find(x => x.id === pid)
                if (p) totalRisk += p.risk
            })

            // Logic for combinations
            let isDeadly = false
            if (selectedPermissions.includes("sms") && selectedPermissions.includes("overlay")) {
                totalRisk += 20
                advice.push(t.apkScanner.advice.smsOverlay)
                isDeadly = true
            }
            if (selectedPermissions.includes("accessibility")) {
                totalRisk += 30
                advice.push(t.apkScanner.advice.accessibility)
                isDeadly = true
            }
            if (selectedPermissions.includes("contacts") && selectedPermissions.includes("storage")) {
                advice.push(t.apkScanner.advice.extortion)
            }

            let level = t.apkScanner.safe // Default
            if (totalRisk > 35) {
                level = t.apkScanner.critical
                if (isDeadly) setPanicMode(true)
            }
            else if (totalRisk > 15) level = t.apkScanner.high
            else if (totalRisk > 5) level = t.apkScanner.moderate

            setResult({ score: totalRisk, level, advice })
            setAnalyzing(false)
        }, 1200)
    }

    return (
        <div className={cn("min-h-screen transition-colors duration-500 p-6", panicMode ? "bg-red-950/30" : "")}>
            <div className="container mx-auto max-w-5xl space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black flex items-center gap-3">
                            {panicMode ? <Skull className="h-10 w-10 text-red-600 animate-pulse" /> : <Smartphone className="h-10 w-10 text-blue-600" />}
                            {t.apkScanner.title}
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            {t.apkScanner.subtitle}
                        </p>
                    </div>
                </div>

                {panicMode && (
                    <div className="bg-red-600 text-white p-4 rounded-xl font-bold text-center animate-bounce shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                        {t.apkScanner.dangerAlert}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* LEFT COL: CONTROLS */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* PRESETS */}
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border shadow-sm space-y-3">
                            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                <Zap className="h-4 w-4" /> {t.apkScanner.quickScenarios}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {PRESETS.map(preset => (
                                    <Button
                                        key={preset.name}
                                        variant="outline"
                                        size="sm"
                                        onClick={() => applyPreset(preset.perms)}
                                        className="hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/30"
                                    >
                                        <span className="mr-2">{preset.icon}</span> {preset.name}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* INPUTS */}
                        <Card className="border-2">
                            <CardHeader>
                                <CardTitle>{t.apkScanner.permissionsTitle}</CardTitle>
                                <CardDescription>{t.apkScanner.permissionsDesc}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {PERMISSIONS.map((perm) => (
                                        <div
                                            key={perm.id}
                                            className={cn(
                                                "flex items-start space-x-3 border p-3 rounded-lg transition-colors cursor-pointer",
                                                selectedPermissions.includes(perm.id) ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20" : "hover:bg-slate-50 dark:hover:bg-slate-800",
                                                panicMode && selectedPermissions.includes(perm.id) && perm.risk >= 10 ? "bg-red-100 border-red-500 animate-pulse" : ""
                                            )}
                                            onClick={() => togglePermission(perm.id)}
                                        >
                                            <Checkbox
                                                id={perm.id}
                                                checked={selectedPermissions.includes(perm.id)}
                                                onCheckedChange={() => { }}
                                                className="mt-1"
                                            />
                                            <div className="grid gap-1">
                                                <Label htmlFor={perm.id} className="font-bold cursor-pointer text-base">
                                                    {perm.label}
                                                </Label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    className={cn("w-full mt-8 h-14 text-xl font-bold shadow-lg transition-all", panicMode ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700")}
                                    onClick={analyzeRisk}
                                    disabled={analyzing || selectedPermissions.length === 0}
                                >
                                    {analyzing ? t.apkScanner.scanning : t.apkScanner.analyzeBtn}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* RIGHT COL: RESULTS */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className={cn(
                            "h-full border-4 border-dashed rounded-xl flex flex-col items-center justify-center p-8 transition-all duration-500",
                            result ? "bg-white dark:bg-slate-900 border-solid border-transparent shadow-2xl" : "border-slate-300 dark:border-slate-800 opacity-60",
                            panicMode ? "shadow-[0_0_50px_rgba(220,38,38,0.5)] scale-105" : ""
                        )}>
                            {result ? (
                                <div className="w-full space-y-6 text-center animate-in zoom-in-95 duration-300">
                                    <div className="relative inline-block">
                                        <div className={cn("text-6xl font-black font-mono", panicMode ? "text-red-600" : "text-slate-900 dark:text-white")}>
                                            {Math.min(result.score * 2, 100)}
                                        </div>
                                        <span className="absolute -top-4 -right-8 bg-slate-900 text-white text-[10px] px-2 py-1 rounded">{t.apkScanner.riskScore}</span>
                                    </div>

                                    <div className="space-y-2">
                                        <h2 className={cn("text-2xl font-bold uppercase tracking-widest",
                                            result.level.includes("CRITICAL") ? "text-red-600" : result.level.includes("High") ? "text-orange-500" : "text-green-500"
                                        )}>
                                            {result.level}
                                        </h2>
                                        <p className="text-slate-500">{t.apkScanner.threatAssess}</p>
                                    </div>

                                    {result.advice.length > 0 && (
                                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl text-left text-sm space-y-3 border">
                                            {result.advice.map((line, i) => (
                                                <div key={i} className="flex gap-2 items-start text-slate-700 dark:text-slate-300">
                                                    <ShieldCheck className="h-5 w-5 shrink-0 text-blue-500" />
                                                    <span>{line}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {panicMode ? (
                                        <Button variant="destructive" className="w-full text-lg animate-pulse" asChild>
                                            <a href="/dashboard">{t.apkScanner.report}</a>
                                        </Button>
                                    ) : (
                                        <Button variant="secondary" className="w-full" onClick={() => { setSelectedPermissions([]); setResult(null); }}>
                                            {t.apkScanner.scanAnother}
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <div className="bg-slate-100 p-6 rounded-full mb-4 dark:bg-slate-800">
                                        <Lock className="h-12 w-12 text-slate-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">{t.toolsIndex?.apkTitle || "Ready to Scan"}</h3>
                                    <p className="text-sm text-center mt-2 max-w-xs">
                                        {t.apkScanner?.subtitle || "Select permissions to start."}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
