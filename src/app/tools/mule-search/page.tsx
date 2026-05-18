"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Search, AlertOctagon, ShieldCheck, ArrowLeft, Flag, Loader2 } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { useLevel } from "@/context/level-context"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { VoiceInput } from "@/components/voice-input"

type ReportData = {
    count: number
    reasons: string[]
}

export default function MuleSearchPage() {
    const { t } = useLanguage()
    const { addXp } = useLevel()
    const [query, setQuery] = useState("")
    const [result, setResult] = useState<'safe' | 'risky' | null>(null)
    const [loading, setLoading] = useState(false)
    const [reports, setReports] = useState<Record<string, ReportData>>({})
    const [currentReport, setCurrentReport] = useState<{ count: number, reasons: string[] } | null>(null)

    // Reporting Form State
    const [reportReason, setReportReason] = useState("")
    const [reportDialogOpen, setReportDialogOpen] = useState(false)

    // Load mock database from local storage on mount
    useEffect(() => {
        const stored = localStorage.getItem('mule_reports')
        if (stored) {
            setReports(JSON.parse(stored))
        }
    }, [])

    const saveReport = () => {
        if (!query || !reportReason) return

        const updatedReports = { ...reports }
        const existing = updatedReports[query] || { count: 0, reasons: [] }

        existing.count += 1
        existing.reasons.push(reportReason)
        updatedReports[query] = existing

        setReports(updatedReports)
        setReports(updatedReports)
        localStorage.setItem('mule_reports', JSON.stringify(updatedReports))
        addXp(50, `Reported Mule Account: ${query}`)

        setReportReason("")
        setReportDialogOpen(false)
        handleSearch() // Re-run search to show new status
    }

    const handleSearch = () => {
        if (!query) return
        setResult(null)
        setLoading(true)
        setCurrentReport(null)

        setTimeout(() => {
            // Priority 1: Check Local Storage ("Community Database")
            const localRecord = reports[query.trim()]

            if (localRecord) {
                setResult('risky')
                setCurrentReport(localRecord)
            } else {
                // Priority 2: Fallback Mock Logic
                const isRisky = ['0', '5', '9'].includes(query.trim().slice(-1))
                setResult(isRisky ? 'risky' : 'safe')
                if (isRisky) {
                    setCurrentReport({ count: 12, reasons: ["Database Hit (CyberCell_BL_2024)", "Sextortion demand"] })
                }
            }
            setLoading(false)
        }, 800)
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white p-6 flex flex-col items-center">
            <div className="max-w-2xl w-full">
                <Button variant="ghost" asChild className="mb-6 text-slate-300">
                    <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> {t.muleSearch.back}</Link>
                </Button>

                <div className="text-center mb-10 space-y-4">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                        {t.muleSearch.title}
                    </h1>
                    <p className="text-slate-400 text-lg">
                        {t.muleSearch.subtitle}
                    </p>
                </div>

                <div className="flex gap-2 mb-8">
                    <Input
                        id="mule-input"
                        placeholder={t.muleSearch.placeholder}
                        className="h-14 text-lg bg-slate-900 border-slate-700"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Button className="h-14 w-32 text-lg bg-red-600 hover:bg-red-700" onClick={handleSearch} disabled={loading}>
                        {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <><Search className="mr-2 h-5 w-5" /> {t.muleSearch.checkBtn}</>}
                    </Button>
                </div>

                {result === 'risky' && (
                    <Card className="bg-red-950/50 border-red-800 animate-in zoom-in">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-500 text-2xl">
                                <AlertOctagon className="h-8 w-8" /> {t.muleSearch.highRisk}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-xl text-red-100">
                                {t.muleSearch.reports} <strong>{currentReport?.count || 1}</strong>
                            </p>
                            <div className="bg-black/30 p-4 rounded text-sm text-red-300 space-y-2">
                                <strong>Latest Reasons:</strong>
                                <ul className="list-disc list-inside">
                                    {(currentReport?.reasons || []).slice(-3).map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                            </div>
                            <Button className="w-full bg-red-600 hover:bg-red-700 font-bold h-12 text-lg">{t.muleSearch.doNotPay}</Button>
                        </CardContent>
                    </Card>
                )}

                {result === 'safe' && (
                    <div className="space-y-6">
                        <Card className="bg-green-950/50 border-green-800 animate-in zoom-in">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-green-500 text-2xl">
                                    <ShieldCheck className="h-8 w-8" /> {t.muleSearch.safe}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-green-100">
                                    {t.muleSearch.safeDesc}
                                </p>
                            </CardContent>
                        </Card>

                        <div className="text-center">
                            <p className="text-slate-400 mb-2 text-sm">Were you actually scammed by this number?</p>
                            <Dialog open={reportDialogOpen} onOpenChange={setReportDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="border-red-900 text-red-500 hover:bg-red-900/20 hover:text-red-400">
                                        <Flag className="mr-2 h-4 w-4" /> Report as Fraud
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-slate-900 text-white border-slate-800">
                                    <DialogHeader>
                                        <DialogTitle className="text-red-500">Report Fraud Account</DialogTitle>
                                        <DialogDescription>
                                            Adding <strong>{query}</strong> to the community blacklist.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <Label>What happened?</Label>
                                                <VoiceInput onResult={(text) => setReportReason(prev => prev + (prev ? " " : "") + text)} />
                                            </div>
                                            <Textarea
                                                placeholder="e.g. They asked for money for a job offer..."
                                                value={reportReason}
                                                onChange={(e) => setReportReason(e.target.value)}
                                                className="bg-slate-950 border-slate-700 text-white"
                                            />
                                        </div>
                                        <Button className="w-full bg-red-600 hover:bg-red-700" onClick={saveReport}>
                                            Submit Report
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
