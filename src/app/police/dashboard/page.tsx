"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/auth-context"
import { useLanguage } from "@/context/language-context"
import { api } from "@/lib/api"
import { Complaint } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Siren, TrendingUp, TrendingDown, Radio, Activity, Users, ShieldAlert } from "lucide-react"
import { CrimeTrendChart } from "@/components/crime-trend-chart"
import { CrimeHeatmap } from "@/components/maps/crime-heatmap"
import { FraudGraph } from "@/components/dashboard/fraud-graph"
import { AuditLog } from "@/components/admin/audit-log"
import { motion } from "framer-motion"

import { CaseDetailsSheet } from "@/components/dashboard/case-details-sheet"

export default function PoliceDashboardPage() {
  const { user } = useAuth()
  const { t } = useLanguage()
  const [complaints, setComplaints] = useState<Complaint[]>([])
  const [filter, setFilter] = useState("all")
  const [selectedCase, setSelectedCase] = useState<Complaint | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // ... (existing state and useEffects)

  // Real-time ticker state
  const TickerItems = [
    "🚨 NEW REPORT: Phishing via SMS detected in Sector 4",
    "⚠️ ALERT: Spike in 'Loan App' frauds observed near University Area",
    "👮 DISPATCH: Unit 4 responding to ATM skimming incident",
    "✅ SUCCESS: Mule Account Network #442 dismantled by Cyber Cell",
    "📡 INTEL: New malware signature 'DarkGate' identified"
  ]
  const [tickerIndex, setTickerIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % TickerItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const loadData = () => {
    if (user) {
      api.getComplaints(undefined, "police").then(setComplaints)
    }
  }

  useEffect(() => {
    loadData()
  }, [user])

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    await api.updateStatus(id, newStatus)
    loadData() // Refresh

    // Also update selected case if open
    if (selectedCase && selectedCase.id === id) {
      setSelectedCase(prev => prev ? { ...prev, status: newStatus as any } : null)
    }
  }

  const openCase = (c: Complaint) => {
    setSelectedCase(c)
    setIsSheetOpen(true)
  }

  const filteredComplaints = complaints.filter(c => {
    if (filter === "all") return true
    return c.status.toLowerCase() === filter.toLowerCase()
  })

  // Group stats
  const pendingCount = complaints.filter(c => c.status === "Pending").length
  const activeCount = complaints.filter(c => c.status === "In Progress").length
  const resolvedCount = complaints.filter(c => c.status === "Resolved").length

  return (
    <div className="space-y-6 animate-in fade-in duration-500 text-slate-100 bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-2xl">

      <CaseDetailsSheet
        complaint={selectedCase}
        open={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        onUpdateStatus={handleStatusUpdate}
      />

      {/* HEADER: COMMAND CENTER */}
      {/* ... (Existing Header and Ticker) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
            <Siren className="h-8 w-8 text-blue-400 animate-pulse" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white uppercase drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              Cyber Command Center
            </h1>
            <p className="text-blue-400 font-mono text-sm tracking-widest">{user?.jurisdiction?.toUpperCase() || "MAHARASHTRA CYBER CELL"} • ACTIVE MONITORING</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300"><Filter className="mr-2 h-4 w-4" /> Filter Views</Button>
          <Button className="bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400/50">Export Intel Report</Button>
        </div>
      </div>

      {/* LIVE TICKER */}
      <div className="bg-slate-900 border border-slate-700 rounded-md p-2 flex items-center gap-3 overflow-hidden shadow-inner font-mono text-sm">
        <div className="bg-red-900/20 text-red-500 text-xs font-bold px-3 py-1 rounded border border-red-500/30 animate-pulse whitespace-nowrap flex items-center gap-2">
          <Radio className="h-3 w-3" /> LIVE FEED
        </div>
        <div key={tickerIndex} className="text-blue-300 truncate flex-1 animate-in slide-in-from-bottom-2">
          {TickerItems[tickerIndex]}
        </div>
      </div>

      {/* Stats Overview - COMMAND STYLE */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-l-4 border-l-blue-500 border-t-0 border-r-0 border-b-0 border-slate-800 shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase mb-1">Total Incidents</p>
                <div className="text-3xl font-black text-white">{complaints.length}</div>
              </div>
              <Activity className="h-5 w-5 text-blue-500 opacity-50" />
            </div>
            <div className="mt-2 text-[10px] text-green-400 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +12% vs last week
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-l-4 border-l-yellow-500 border-t-0 border-r-0 border-b-0 border-slate-800 shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-mono text-yellow-400 uppercase mb-1">{t.dashboard.pending}</p>
                <div className="text-3xl font-black text-white">{pendingCount}</div>
              </div>
              <ShieldAlert className="h-5 w-5 text-yellow-500 opacity-50" />
            </div>
            <div className="mt-2 text-[10px] text-red-400 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +5 Critical
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-l-4 border-l-blue-400 border-t-0 border-r-0 border-b-0 border-slate-800 shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-mono text-blue-300 uppercase mb-1">Investigating</p>
                <div className="text-3xl font-black text-white">{activeCount}</div>
              </div>
              <Users className="h-5 w-5 text-blue-400 opacity-50" />
            </div>
            <div className="mt-2 text-[10px] text-slate-500">
              High Activity Sector
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-l-4 border-l-green-500 border-t-0 border-r-0 border-b-0 border-slate-800 shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-mono text-green-400 uppercase mb-1">{t.dashboard.resolved}</p>
                <div className="text-3xl font-black text-white">{resolvedCount}</div>
              </div>
              <TrendingDown className="h-5 w-5 text-green-500 opacity-50" />
            </div>
            <div className="mt-2 text-[10px] text-green-400">
              98% Accuracy Rate
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">Crime Trend Analysis <Badge variant="outline" className="text-blue-400 border-blue-900">AI FORECAST</Badge></CardTitle>
          </CardHeader>
          <CardContent>
            <CrimeTrendChart />
          </CardContent>
        </Card>
        <div className="h-[400px] bg-slate-900 rounded-xl border border-slate-800 p-4 relative overflow-hidden">
          <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-2 py-1 rounded border border-white/10">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">🔴 Live Threat Map</h3>
          </div>
          <CrimeHeatmap />
        </div>
      </div>

      {/* Intelligence Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">Mule Account Neural Network</CardTitle>
            <CardDescription className="text-slate-400">AI-detected links between reported phone numbers and bank accounts.</CardDescription>
          </CardHeader>
          <CardContent>
            <FraudGraph />
          </CardContent>
        </Card>
        <div>
          <AuditLog />
        </div>
      </div>


      {/* Main Case Table */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="px-6 py-4 border-b border-slate-800">
          <Tabs defaultValue="all" onValueChange={setFilter} className="w-full">
            <TabsList className="bg-slate-800 text-slate-400">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">All Cases</TabsTrigger>
              <TabsTrigger value="pending" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-white">{t.dashboard.pending}</TabsTrigger>
              <TabsTrigger value="in progress" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Active Ops</TabsTrigger>
              <TabsTrigger value="resolved" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Closed</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-950">
              <TableRow className="hover:bg-slate-900 border-slate-800">
                <TableHead className="text-slate-400">CASE ID</TableHead>
                <TableHead className="text-slate-400">AI PRIORITY</TableHead>
                <TableHead className="text-slate-400">DETAILS</TableHead>
                <TableHead className="text-slate-400">SLA STATUS</TableHead>
                <TableHead className="text-slate-400">OFFICER</TableHead>
                <TableHead className="text-slate-400">STATUS</TableHead>
                <TableHead className="text-right text-slate-400">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-slate-200">
              {filteredComplaints.map((item) => {
                const aiScore = item.aiPriorityScore || (item.urgency === 'Emergency' ? 95 : item.urgency === 'High' ? 88 : item.urgency === 'Medium' ? 60 : 35);
                const hoursElapsed = Math.floor((new Date().getTime() - new Date(item.createdAt).getTime()) / (1000 * 60 * 60));
                const slaLimit = 24; const isOverdue = hoursElapsed > slaLimit;

                return (
                  <TableRow
                    key={item.id}
                    className="hover:bg-blue-900/10 border-slate-800 transition-colors cursor-pointer group"
                    onClick={() => openCase(item)}
                  >
                    <TableCell className="font-mono text-xs text-blue-400 max-w-[80px] truncate group-hover:underline" title={item.id}>#{item.id.slice(-6)}</TableCell>

                    <TableCell>
                      <Badge variant="outline" className={`
                            ${aiScore >= 90 ? 'bg-red-900/20 text-red-400 border-red-800' :
                          aiScore >= 60 ? 'bg-yellow-900/20 text-yellow-400 border-yellow-800' : 'bg-green-900/20 text-green-400 border-green-800'}
                        `}>
                        {aiScore >= 90 ? 'CRITICAL' : aiScore >= 60 ? 'MEDIUM' : 'LOW'} ({aiScore}%)
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <div className="font-bold text-sm text-white group-hover:text-blue-200 transition-colors">{item.title}</div>
                      <div className="text-xs text-slate-500">{item.category}</div>
                    </TableCell>

                    <TableCell>
                      <div className="text-xs">
                        <span className={`font-mono font-bold ${isOverdue ? 'text-red-500 animate-pulse' : 'text-slate-400'}`}>
                          {hoursElapsed}h / 24h
                        </span>
                        {isOverdue && <div className="text-[10px] text-red-400 uppercase">SLA Breach</div>}
                      </div>
                    </TableCell>

                    <TableCell>
                      {item.assignedOfficer ? (
                        <div className="flex items-center gap-2 text-xs">
                          <div className="h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">👮</div>
                          <span>{item.assignedOfficer}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-600 italic">-- Unassigned --</span>
                      )}
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          item.status === 'Resolved' ? 'bg-green-900/20 text-green-400' :
                            item.status === 'In Progress' ? 'bg-blue-900/20 text-blue-400' :
                              'bg-yellow-900/20 text-yellow-400'
                        }
                      >
                        {item.status.toUpperCase()}
                      </Badge>
                    </TableCell>

                    <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                      <Select onValueChange={(val) => handleStatusUpdate(item.id, val)}>
                        <SelectTrigger className="w-[110px] ml-auto h-7 text-xs bg-slate-800 border-slate-700 text-slate-300">
                          <SelectValue placeholder="Update" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-700 text-slate-300">
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="In Progress">Investigate</SelectItem>
                          <SelectItem value="Resolved">Resolve</SelectItem>
                          <SelectItem value="Closed">Close Case</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div >
  )
}
