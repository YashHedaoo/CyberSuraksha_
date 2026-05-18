"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Scale, Sparkles, FileText, BookOpen, Users } from "lucide-react"
import { StatuteCard } from "@/components/legal/statute-card"
import { LawGPT } from "@/components/legal/law-gpt"
import { AutoDrafter } from "@/components/legal/auto-drafter"
import { LawyerDirectory } from "@/components/legal/lawyer-directory"
import { VLKB } from "@/lib/legal-knowledge-base"

export default function LegalPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredStatutes = VLKB.filter(s =>
        s.crimeType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.keywords.some(k => k.includes(searchQuery.toLowerCase()))
    )

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter flex items-center gap-3">
                            <Scale className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                            Cyber Law Nexus
                        </h1>
                        <p className="text-slate-400 font-mono mt-2 max-w-2xl">
                            Advanced Legal Aid System. Access statutes, AI advisory, automated drafting, and verified experts.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <Tabs defaultValue="library" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-900 border border-slate-800 h-auto p-1 lg:h-12">
                        <TabsTrigger value="library" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold h-10">
                            <BookOpen className="w-4 h-4 mr-2" /> Digital Codex
                        </TabsTrigger>
                        <TabsTrigger value="advisor" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white font-bold h-10">
                            <Sparkles className="w-4 h-4 mr-2" /> AI Advisor
                        </TabsTrigger>
                        <TabsTrigger value="drafter" className="data-[state=active]:bg-green-600 data-[state=active]:text-white font-bold h-10">
                            <FileText className="w-4 h-4 mr-2" /> Auto-Drafter
                        </TabsTrigger>
                        <TabsTrigger value="experts" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white font-bold h-10">
                            <Users className="w-4 h-4 mr-2" /> Expert Directory
                        </TabsTrigger>
                    </TabsList>

                    {/* Tab 1: Library */}
                    <TabsContent value="library" className="space-y-6 mt-6 animate-in fade-in slide-in-from-bottom-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                            <Input
                                placeholder="Search the Penal Code (e.g., 'Phishing', 'Stalking')"
                                className="pl-12 h-12 bg-slate-900 border-slate-700 text-lg text-white font-mono"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredStatutes.map(statute => (
                                <StatuteCard key={statute.id} statute={statute} />
                            ))}
                            {filteredStatutes.length === 0 && (
                                <div className="col-span-full text-center py-20 text-slate-500 border border-dashed border-slate-800 rounded-xl">
                                    No statutes found for "{searchQuery}"
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    {/* Tab 2: Advisor */}
                    <TabsContent value="advisor" className="mt-6 animate-in fade-in slide-in-from-bottom-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                                <LawGPT />
                            </div>
                            <div className="md:col-span-1 space-y-4">
                                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                    <h3 className="font-bold text-white mb-2 flex items-center gap-2"><Sparkles className="w-4 h-4 text-purple-400" /> How Law-GPT Works</h3>
                                    <p className="text-sm text-slate-400 mb-4">
                                        Our AI analyzes your natural language input, maps it to specific keywords, and cross-references it with **Bharatiya Nyaya Sanhita (BNS) 2023** and **IT Act 2000**.
                                    </p>
                                    <div className="text-xs text-slate-500 p-2 bg-slate-950 rounded border border-slate-800">
                                        Disclaimer: AI response generated based on BNS 2023. Consult legal counsel for official proceedings.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Tab 3: Drafter */}
                    <TabsContent value="drafter" className="mt-6 animate-in fade-in slide-in-from-bottom-4">
                        <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                <FileText className="w-64 h-64 text-green-500" />
                            </div>
                            <div className="mb-6 relative z-10">
                                <h2 className="text-2xl font-bold text-white">Legal Document Generator</h2>
                                <p className="text-slate-400">Generate professional legal notices for banks and social media platforms in seconds.</p>
                            </div>
                            <div className="relative z-10">
                                <AutoDrafter />
                            </div>
                        </div>
                    </TabsContent>

                    {/* Tab 4: Experts */}
                    <TabsContent value="experts" className="mt-6 animate-in fade-in slide-in-from-bottom-4">
                        <LawyerDirectory />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
