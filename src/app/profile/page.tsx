"use client"

import { useLevel } from "@/context/level-context"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Share2, Download, User, QrCode } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
    const { rank, level, xp, nextLevelXp, history } = useLevel()
    const { t } = useLanguage()

    const progressPercent = Math.min((xp / nextLevelXp) * 100, 100)

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 flex flex-col items-center">

            <div className="max-w-4xl w-full space-y-8">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Digital Guardian Profile
                        </h1>
                        <p className="text-slate-400">Official Cyber Defense Record</p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/">Back to HQ</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* ID Card Display */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-[400px] aspect-[1.586] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2 border-slate-600 shadow-2xl overflow-hidden print:border-black print:shadow-none transition-transform hover:scale-[1.02] duration-300">

                            {/* Holographic Overlay Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.1)_25%,transparent_30%)] pointer-events-none" />

                            {/* Header Stripe */}
                            <div className="h-[25%] bg-[#1a237e] flex items-center px-6 gap-4 border-b-4 border-yellow-500">
                                <Shield className="h-12 w-12 text-yellow-400 fill-yellow-400/20" />
                                <div>
                                    <h2 className="text-lg font-black uppercase tracking-widest text-white">CyberSuraksha</h2>
                                    <p className="text-[10px] text-blue-200 uppercase tracking-widest">Ministry of Digital Defense</p>
                                </div>
                                <div className="ml-auto">
                                    <QrCode className="h-10 w-10 text-white opacity-80" />
                                </div>
                            </div>

                            {/* ID Content */}
                            <div className="p-6 relative">
                                <div className="flex gap-4">
                                    {/* Photo Placeholder */}
                                    <div className="h-28 w-28 bg-slate-700 border-2 border-slate-500 rounded flex items-center justify-center relative overflow-hidden">
                                        <User className="h-16 w-16 text-slate-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-1 flex-1">
                                        <div className="text-[10px] text-slate-400 uppercase">Rank Designation</div>
                                        <div className="text-xl font-black text-yellow-500 uppercase leading-none mb-2">{rank}</div>

                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <span className="text-[9px] text-slate-400 block">CLEARANCE</span>
                                                <span className="font-mono text-white">LEVEL {level}</span>
                                            </div>
                                            <div>
                                                <span className="text-[9px] text-slate-400 block">ID NUMBER</span>
                                                <span className="font-mono text-white">CS-{Date.now().toString().slice(-6)}</span>
                                            </div>
                                            <div className="col-span-2">
                                                <span className="text-[9px] text-slate-400 block">STATUS</span>
                                                <Badge className="bg-green-600 text-white hover:bg-green-600">ACTIVE SERVICE</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Bar */}
                                {/* Footer Bar - Removed QR from here to avoid overlap */}
                                <div className="absolute bottom-4 right-6 text-right">
                                    <div className="text-[8px] text-slate-400 uppercase tracking-widest mb-1">Authenticated By</div>
                                    <div className="h-8 w-24 bg-white/10 border border-white/20 rounded flex items-center justify-center">
                                        <span className="font-dancing-script text-yellow-400 text-xs italic">Director General</span>
                                    </div>
                                </div>
                            </div>

                            {/* Watermark */}
                            <div className="absolute bottom-2 left-6 text-[8px] text-slate-600 font-mono">
                                AUTHORIZED PERSONNEL ONLY • GOVERNMENT OF INDIA
                            </div>
                        </div>
                    </div>

                    {/* Stats & History */}
                    <div className="space-y-6">
                        <Card className="bg-slate-900 border-slate-800">
                            <CardContent className="p-6 space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-400">Progress to Next Promotion</span>
                                        <span className="text-yellow-500 font-mono">{xp} / {nextLevelXp} XP</span>
                                    </div>
                                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                                        <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-1000" style={{ width: `${progressPercent}%` }} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => window.print()}>
                                        <Download className="mr-2 h-4 w-4" /> Print ID Card
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        <Share2 className="mr-2 h-4 w-4" /> Share Profile
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-slate-800 flex-1">
                            <div className="p-4 border-b border-slate-800 font-bold text-slate-300">
                                Service History
                            </div>
                            <div className="p-0 max-h-[300px] overflow-y-auto">
                                {history.length === 0 ? (
                                    <div className="p-8 text-center text-slate-500 text-sm">
                                        No missions completed yet. Start by using Tools!
                                    </div>
                                ) : (
                                    <div className="divide-y divide-slate-800">
                                        {history.map((h, i) => (
                                            <div key={i} className="p-4 flex justify-between items-center hover:bg-white/5">
                                                <div>
                                                    <p className="font-medium text-slate-200">{h.reason}</p>
                                                    <p className="text-xs text-slate-500">{new Date(h.timestamp).toLocaleDateString()}</p>
                                                </div>
                                                <Badge variant="outline" className="text-yellow-500 border-yellow-900 bg-yellow-900/10">
                                                    +{h.amount} XP
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}
