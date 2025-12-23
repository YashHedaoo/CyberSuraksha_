"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ShieldCheck, Smartphone, Info, Lock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const PERMISSIONS = [
    { id: "camera", label: "Camera", risk: 5, desc: "Can take photos/videos without you knowing" },
    { id: "mic", label: "Microphone", risk: 5, desc: "Can record audio in background" },
    { id: "location", label: "Precise Location", risk: 4, desc: "Tracks your exact movements" },
    { id: "contacts", label: "Read Contacts", risk: 4, desc: "Uploads your friend list to servers" },
    { id: "sms", label: "Read SMS", risk: 5, desc: "Can read OTPs and banking messages" },
    { id: "storage", label: "Storage (Photos/Files)", risk: 3, desc: "Access to private photos" },
    { id: "phone", label: "Phone State/Call Log", risk: 3, desc: "Can see who you call" },
    { id: "overlay", label: "Display Over Apps", risk: 5, desc: "Can draw fake login screens over banks" },
    { id: "accessibility", label: "Accessibility Services", risk: 10, desc: "Full control of device (DANGEROUS)" },
]

export default function AppRiskScanner() {
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>([])
    const [analyzing, setAnalyzing] = useState(false)
    const [result, setResult] = useState<{ score: number, level: string, advice: string[] } | null>(null)

    const togglePermission = (id: string) => {
        setSelectedPermissions(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        )
    }

    const analyzeRisk = () => {
        setAnalyzing(true)
        setTimeout(() => {
            let totalRisk = 0
            const advice: string[] = []

            selectedPermissions.forEach(pid => {
                const p = PERMISSIONS.find(x => x.id === pid)
                if (p) totalRisk += p.risk
            })

            // Logic for combinations
            if (selectedPermissions.includes("sms") && selectedPermissions.includes("overlay")) {
                totalRisk += 10
                advice.push("CRITICAL: SMS + Overlay permission is the #1 indicator of banking trojans.")
            }
            if (selectedPermissions.includes("accessibility")) {
                advice.push("HIGH ALERT: Accessibility permissions should ONLY be given to trusted apps for disabled users. Never give this to a loan app or game.")
            }
            if (selectedPermissions.includes("contacts") && selectedPermissions.includes("storage")) {
                advice.push("Predatory Loan Apps often demand Contacts + Storage to blackmail users.")
            }

            let level = "Low Risk"
            if (totalRisk > 25) level = "CRITICAL MALWARE RISK"
            else if (totalRisk > 15) level = "High Risk"
            else if (totalRisk > 5) level = "Moderate Risk"

            setResult({ score: totalRisk, level, advice })
            setAnalyzing(false)
        }, 1500)
    }

    return (
        <div className="container mx-auto p-4 max-w-4xl space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold flex items-center gap-2">
                    <Smartphone className="h-8 w-8 text-blue-600" /> App Risk Calculator
                </h1>
                <p className="text-muted-foreground">
                    Web Browsers cannot directly scan installed apps for privacy reasons.
                    <br />Use this tool to manually audit suspicious apps asking for permissions.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* INPUT SECTION */}
                <Card>
                    <CardHeader>
                        <CardTitle>Select Requested Permissions</CardTitle>
                        <CardDescription>Check the boxes that the app is asking for</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {PERMISSIONS.map((perm) => (
                                <div key={perm.id} className="flex items-start space-x-2 border p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                    <Checkbox
                                        id={perm.id}
                                        checked={selectedPermissions.includes(perm.id)}
                                        onCheckedChange={() => togglePermission(perm.id)}
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <Label htmlFor={perm.id} className="font-semibold cursor-pointer">
                                            {perm.label}
                                        </Label>
                                        <p className="text-xs text-muted-foreground">
                                            {perm.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button
                            className="w-full mt-6 h-12 text-lg"
                            onClick={analyzeRisk}
                            disabled={analyzing || selectedPermissions.length === 0}
                        >
                            {analyzing ? "Analyzing Patterns..." : "Calculate Risk Score"}
                        </Button>
                    </CardContent>
                </Card>

                {/* RESULT SECTION */}
                <div className="space-y-6">
                    {result ? (
                        <Card className={`border-l-8 ${result.level.includes("CRITICAL") ? "border-l-red-600 bg-red-50 dark:bg-red-900/20" : result.level.includes("High") ? "border-l-orange-500" : "border-l-green-500"}`}>
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center">
                                    Risk Level
                                    <Badge variant={result.level.includes("Low") ? "outline" : "destructive"} className="text-lg px-3 py-1">
                                        {result.level}
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="text-4xl font-black">{Math.min(result.score * 2, 100)}/100 <span className="text-sm font-normal text-muted-foreground">Threat Score</span></div>

                                {result.advice.length > 0 && (
                                    <div className="bg-white dark:bg-black/20 p-4 rounded-lg border">
                                        <h4 className="font-bold flex items-center gap-2 mb-2">
                                            <ShieldCheck className="h-4 w-4" /> AI Analysis:
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-2 text-sm">
                                            {result.advice.map((adv, i) => (
                                                <li key={i}>{adv}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {result.level.includes("Safe") || result.score < 10 ? (
                                    <p className="text-sm text-green-700 dark:text-green-400">
                                        This app appears to be asking for minimal permissions. However, always verify the developer.
                                    </p>
                                ) : (
                                    <div className="space-y-2">
                                        <p className="font-bold text-red-600">Recommendation:</p>
                                        <p className="text-sm">Do not install this app / Uninstall immediately if installed. It is requesting a dangerous combination of access rights typical of spyware.</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center p-8 text-center text-muted-foreground border-2 border-dashed rounded-xl">
                            <Lock className="h-16 w-16 mb-4 opacity-20" />
                            <h3 className="text-lg font-semibold">Waiting for input...</h3>
                            <p className="max-w-xs mx-auto">Select permissions on the left to see how dangerous an app might be.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
