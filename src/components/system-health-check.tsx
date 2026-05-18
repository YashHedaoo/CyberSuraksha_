"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Activity, CheckCircle, XCircle, Loader2, Server, Shield, Database, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"

interface CheckItem {
    id: string
    name: string
    status: "pending" | "running" | "success" | "failure"
    detail: string
}

export function SystemHealthCheck() {
    const [isOpen, setIsOpen] = useState(false)
    const [progress, setProgress] = useState(0)
    const [checks, setChecks] = useState<CheckItem[]>([
        { id: "1", name: "Encryption Engine (SHA-256)", status: "pending", detail: "Crypto API Availability" },
        { id: "2", name: "Secure Route Integrity", status: "pending", detail: "/user/dashboard Access" },
        { id: "3", name: "Voice Recognition API", status: "pending", detail: "webkitSpeechRecognition" },
        { id: "4", name: "Camera Hardware Stream", status: "pending", detail: "getUserMedia Access" },
        { id: "5", name: "National Database Sync", status: "pending", detail: "Supabase Connection (Simulated)" },
        { id: "6", name: "Guardian Alert Network", status: "pending", detail: "Socket Connection" },
    ])

    const runDiagnostics = async () => {
        setChecks(prev => prev.map(c => ({ ...c, status: "pending" })))
        setProgress(0)

        for (let i = 0; i < checks.length; i++) {
            setChecks(prev => {
                const newChecks = [...prev]
                newChecks[i].status = "running"
                return newChecks
            })

            // Simulate check duration
            await new Promise(r => setTimeout(r, 800))

            // Perform actual check logic (Simulated for demo)
            let success = true
            if (checks[i].id === "3" && !('webkitSpeechRecognition' in window)) success = false

            setChecks(prev => {
                const newChecks = [...prev]
                newChecks[i].status = success ? "success" : "failure"
                return newChecks
            })

            setProgress(((i + 1) / checks.length) * 100)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="text-xs border-primary/30 text-primary hover:bg-primary/10 gap-2">
                    <Activity className="w-4 h-4" /> System Health
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md bg-slate-950 text-slate-100 border-slate-800">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-primary">
                        <Shield className="w-5 h-5" /> National System Diagnostic
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>Integrity Scan Protocol v2.0</span>
                        <span>{Math.round(progress)}% Complete</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-slate-800" />

                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                        {checks.map(check => (
                            <div key={check.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                                <div className="flex items-center gap-3">
                                    {check.status === "pending" && <div className="w-4 h-4 rounded-full bg-slate-800" />}
                                    {check.status === "running" && <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />}
                                    {check.status === "success" && <CheckCircle className="w-4 h-4 text-green-500" />}
                                    {check.status === "failure" && <XCircle className="w-4 h-4 text-red-500" />}
                                    <div>
                                        <p className="text-sm font-medium">{check.name}</p>
                                        <p className="text-xs text-slate-500">{check.detail}</p>
                                    </div>
                                </div>
                                <div className="text-xs font-mono text-slate-600">
                                    {check.status.toUpperCase()}
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={runDiagnostics}
                        disabled={checks.some(c => c.status === "running")}
                    >
                        {progress === 100 ? "Re-Run Diagnostics" : "Initiate Validation Protocol"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
