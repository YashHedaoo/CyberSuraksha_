"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/auth-context"
import { useLanguage } from "@/context/language-context"
import { api } from "@/lib/api"
import { Complaint } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Clock, CheckCircle, AlertTriangle, ArrowRight, Plus, Shield } from "lucide-react"
import Link from "next/link"
import PanicButton from "@/components/panic-button"
import { SafetyChecklist } from "@/components/safety-checklist"
import { ZeroFirCard } from "@/components/zero-fir-card"

import { LiveAlertTicker } from "@/components/live-alert-ticker"
import { CyberLicenseWidget } from "@/components/cyber-license-widget"
import { SafetyVault } from "@/components/dashboard/safety-vault"
import { VoiceRecorder } from "@/components/media/voice-recorder"
import { VideoRecorder } from "@/components/media/video-recorder"
import { SilentModeToggle, SilentModeView } from "@/components/dashboard/silent-mode-toggle"
import { AiScannerWidget } from "@/components/dashboard/ai-scanner-widget"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Video, Mic, EyeOff, Bot } from "lucide-react"
import { LegalShortcutsWidget } from "@/components/dashboard/legal-shortcuts"

export default function DashboardPage() {
  const { user } = useAuth()
  const { t } = useLanguage()
  const [stats, setStats] = useState({ total: 0, pending: 0, resolved: 0, inProgress: 0 })
  const [recentComplaints, setRecentComplaints] = useState<Complaint[]>([])

  // Privacy Toggle
  const [privacyMode, setPrivacyMode] = useState(false)

  // AI Tool State
  // const [aiText, setAiText] = useState("") <-- REMOVED: Managed internally by AiScannerWidget
  // const [aiResult, setAiResult] = useState... <-- REMOVED
  // const [analyzing, setAnalyzing] = useState(false) <-- REMOVED

  // SOS State
  const [sosActive, setSosActive] = useState(false)
  const [countdown, setCountdown] = useState(5)

  // Silent Mode State - Merged from User Dashboard
  const [isSilent, setIsSilent] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (sosActive && countdown > 0) {
      interval = setInterval(() => setCountdown(prev => prev - 1), 1000)
    } else if (sosActive && countdown === 0) {
      // Dispatch Alert
      alert("EMERGENCY SIGNAL DISPATCHED TO NEAREST STATION! (Simulated)")
      setSosActive(false)
      setCountdown(5)
    }
    return () => clearInterval(interval)
  }, [sosActive, countdown])

  useEffect(() => {
    if (user) {
      api.getComplaints(user.id, user.role).then((data) => {
        setStats({
          total: data.length,
          pending: data.filter((c) => c.status === "Pending").length,
          resolved: data.filter((c) => c.status === "Resolved").length,
          inProgress: data.filter((c) => c.status === "In Progress").length,
        })
        setRecentComplaints(data.slice(0, 3))
      }).catch(err => {
        console.error("Failed to fetch dashboard data:", err)
      })
    }
  }, [user])

  // handleAnalyze Removed - Logic moved to AiScannerWidget

  const handleSOS = () => {
    setSosActive(true)
    setCountdown(5)
  }

  const cancelSOS = () => {
    setSosActive(false)
    setCountdown(5)
  }

  if (isSilent) {
    return <SilentModeView onExit={() => setIsSilent(false)} />
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 relative">
      {/* SOS Overlay */}
      {sosActive && (
        <div className="fixed inset-0 z-50 bg-red-950/90 flex flex-col items-center justify-center text-white space-y-8 animate-in fade-in zoom-in duration-300">
          <div className="text-6xl font-black animate-pulse">SOS ACTIVATED</div>
          <div className="text-2xl">Dispatching Emergency Services in</div>
          <div className="text-9xl font-bold">{countdown}</div>
          <Button onClick={cancelSOS} variant="secondary" size="lg" className="text-xl px-12 py-8 bg-white text-red-600 hover:bg-gray-100">
            CANCEL
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t.dashboard.title}</h1>
            <p className="text-muted-foreground">{t.common.welcome}, {user?.name?.split(" ")[0] || "User"}. {t.dashboard.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={privacyMode ? "default" : "outline"}
              onClick={() => setPrivacyMode(!privacyMode)}
              title="Toggle Privacy Mode"
            >
              {privacyMode ? <CheckCircle className="h-4 w-4 mr-2" /> : <Shield className="h-4 w-4 mr-2" />}
              {privacyMode ? "On" : "Off"}
            </Button>
            <Button
              variant="destructive"
              className="animate-pulse shadow-lg shadow-red-500/50 hover:bg-red-700 hover:scale-110 transition-transform"
              onClick={handleSOS}
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              {t.dashboard.sos}
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105">
              <Link href="/dashboard/file-complaint">
                <Plus className="mr-2 h-4 w-4" />
                {t.dashboard.newComplaint}
              </Link>
            </Button>
            {/* Silent Mode Toggle from User Dashboard */}
            <SilentModeToggle isSilent={isSilent} onToggle={() => setIsSilent(!isSilent)} />
          </div>
        </div>

        {/* Live Cyber Ticker */}
        <div className="bg-muted/50 border rounded-md p-2 flex items-center gap-3 overflow-hidden">
          <div className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded animate-pulse whitespace-nowrap">
            {t.dashboard.liveAlerts || "LIVE ALERTS"}
          </div>
          <div className="text-sm text-muted-foreground truncate flex-1">
            {t.dashboard.alerts && t.dashboard.alerts.map((alert: string, i: number) => (
              <span key={i} className="mr-8">{alert}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid - Enhanced */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glassy border-l-4 border-l-primary hover:translate-y-[-2px] transition-transform">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.dashboard.totalReports}</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold transition-all duration-300 ${privacyMode ? "blur-md select-none" : ""}`}>{stats.total}</div>
          </CardContent>
        </Card>
        <Card className="glassy border-l-4 border-l-yellow-500 hover:translate-y-[-2px] transition-transform">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.dashboard.pending}</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold transition-all duration-300 ${privacyMode ? "blur-md select-none" : ""}`}>{stats.pending}</div>
          </CardContent>
        </Card>

        {/* Gamification Widget: Cyber License */}
        <CyberLicenseWidget />

        {/* New Widget: Report Download */}
        <Card className="glassy border-l-4 border-l-indigo-500 hover:translate-y-[-2px] transition-transform cursor-pointer hover:bg-accent/50 group" onClick={() => alert("Downloading Monthly Digest...")}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.widgets?.class || "Reports"}</CardTitle>
            <ArrowRight className="h-4 w-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-indigo-600">{t.widgets?.downloadReport || "Download PDF"}</div>
            <p className="text-xs text-muted-foreground mt-1">Monthly Digest</p>
          </CardContent>
        </Card>
      </div>

      {/* NEW SECTION: Digital Forensics & Safety (Merged from User Dashboard) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Safety Vault Card */}
        <Card className="glassy border-l-4 border-l-emerald-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              {(t.widgets as any)?.vault || "Secure Vault"}
            </CardTitle>
            <CardDescription>Encrypted storage for sensitive evidence</CardDescription>
          </CardHeader>
          <CardContent>
            <SafetyVault userId={user?.id} />
          </CardContent>
        </Card>

        {/* Evidence Recorder Card */}
        <Card className="glassy border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-blue-600" />
              Evidence Recorder
            </CardTitle>
            <CardDescription>Record video or audio statements securely</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                    <Video className="h-8 w-8 text-blue-600" />
                    <span>Record Video</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle>Video Evidence Recorder</DialogTitle>
                  </DialogHeader>
                  <VideoRecorder userId={user?.id} />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200 dark:border-red-800">
                    <Mic className="h-8 w-8 text-red-600" />
                    <span>Record Audio</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Voice Statement Recorder</DialogTitle>
                  </DialogHeader>
                  <VoiceRecorder userId={user?.id} />
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              All recordings are locally encrypted and timestamped automatically.
            </p>
          </CardContent>
        </Card>

        {/* Legal Shortcuts Widget */}
        <LegalShortcutsWidget />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-1 lg:col-span-2 shadow-md glassy">
          <CardHeader>
            <CardTitle>{t.dashboard.recentActivity}</CardTitle>
            <CardDescription>{t.dashboard.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            {recentComplaints.length > 0 ? (
              <div className="space-y-6">
                {recentComplaints.map((complaint) => (
                  <div key={complaint.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="space-y-1">
                      <p className={`text-sm font-medium leading-none transition-all duration-300 ${privacyMode ? "blur-sm select-none" : ""}`}>{complaint.title}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{new Date(complaint.createdAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{complaint.category}</span>
                        {/* New Severity Indicator */}
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${complaint.urgency === 'High' || complaint.urgency === 'Emergency' ? 'bg-red-100 text-red-600' : complaint.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                          {complaint.urgency}
                        </span>
                      </div>
                    </div>
                    <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium border
                      ${complaint.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                        complaint.status === 'Resolved' ? 'bg-green-50 text-green-700 border-green-200' :
                          'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {complaint.status}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                {t.dashboard.noActivity}
              </div>
            )}
            <div className="mt-6">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/my-complaints">
                  {t.dashboard.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* RIGHT COLUMN - TOOLS */}
        <div className="space-y-6">

          {/* Panic Button */}
          <PanicButton />

          {/* New Safety Checklist Widget */}
          <SafetyChecklist />

          {/* Zero FIR Rights Card */}
          <ZeroFirCard />

          {/* Quick Tips or Actions */}
          <Card className="glassy">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                {t.dashboard.aiTool || "CyberSuraksha Vision AI"}
              </CardTitle>
              <CardDescription>{t.dashboard.aiDesc || "Analyze suspicions texts or Upload Screenshots (OCR)."}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {/* New AI Scanner Widget */}
              <AiScannerWidget />

              <div className="border rounded-lg p-4 space-y-2 bg-background/50">
                <div className="font-semibold text-sm">{t.dashboard.emergency}</div>
                <div className="text-xs space-y-1 text-muted-foreground">
                  <p>Police: <span className="text-destructive font-bold">100</span></p>
                  <p>Cyber Helpline: <span className="text-primary font-bold">1930</span></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
