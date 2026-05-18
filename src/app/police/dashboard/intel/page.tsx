"use client"

import { useState } from "react"
import { Search, ShieldAlert, Fingerprint, Database, AlertTriangle, MapPin, Phone, Share2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CriminalDB, CriminalProfile } from "@/lib/mock-criminal-db"
import { motion, AnimatePresence } from "framer-motion"

export default function IntelPage() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<CriminalProfile[]>([])
    const [isSearching, setIsSearching] = useState(false)
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!query.trim()) return

        setIsSearching(true)
        setHasSearched(true)
        setResults([]) // Clear previous

        try {
            const data = await CriminalDB.search(query)
            setResults(data)
        } finally {
            setIsSearching(false)
        }
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500 max-w-6xl mx-auto">

            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-black text-white uppercase flex items-center gap-3 tracking-tighter">
                    <Database className="w-8 h-8 text-blue-500" />
                    Global Intelligence Database
                </h1>
                <p className="text-slate-400 font-mono text-sm max-w-2xl">
                    RESTRICTED ACCESS. Search across Police Records, Telecom Data, and Financial Watchlists.
                </p>
            </div>

            {/* Search Box */}
            <Card className="bg-slate-900 border-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-8">
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
                            <Input
                                autoFocus
                                placeholder="Enter Suspect Name, Phone Number (+91...), or UPI ID"
                                className="pl-12 h-14 bg-slate-950 border-slate-700 text-lg text-white focus-visible:ring-blue-500/50 focus-visible:border-blue-500 shadow-inner font-mono"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <Button
                            size="lg"
                            className="h-14 px-8 bg-blue-600 hover:bg-blue-500 text-lg font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                            disabled={isSearching}
                        >
                            {isSearching ? <span className="animate-pulse">SCANNING...</span> : "INITIATE SEARCH"}
                        </Button>
                    </form>
                    <div className="flex gap-4 mt-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-1 text-green-500/60"><ShieldAlert className="w-3 h-3" /> Database Online</span>
                        <span className="flex items-center gap-1"><Share2 className="w-3 h-3" /> Inter-Agency Link: Active</span>
                    </div>
                </CardContent>
            </Card>

            {/* Results Area */}
            <div className="space-y-4">
                {isSearching && (
                    <div className="text-center py-20 animate-pulse">
                        <Fingerprint className="w-16 h-16 text-blue-500/20 mx-auto mb-4" />
                        <div className="text-blue-400 font-mono text-lg">CROSS-REFERENCING DATABANKS...</div>
                    </div>
                )}

                {!isSearching && hasSearched && results.length === 0 && (
                    <div className="text-center py-16 border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/50">
                        <AlertTriangle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                        <h3 className="text-slate-300 font-bold text-lg">No Exact Matches Found</h3>
                        <p className="text-slate-500 text-sm mt-1">Subject may be using a clean identity or burner devices.</p>
                    </div>
                )}

                <AnimatePresence>
                    {results.map((profile) => (
                        <motion.div
                            key={profile.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <Card className="bg-slate-900 border-l-4 border-l-red-600 border-slate-800 overflow-hidden relative">
                                {/* Diagonal Danger Stripe */}
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Fingerprint className="w-32 h-32 text-red-500" />
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Avatar / Photo Mock */}
                                        <div className="w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 shadow-xl shrink-0">
                                            <span className="text-3xl">👤</span>
                                        </div>

                                        <div className="flex-1 space-y-4">
                                            <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                                                <div>
                                                    <h2 className="text-2xl font-black text-white flex items-center gap-2">
                                                        {profile.alias}
                                                        <Badge variant="destructive" className="animate-pulse bg-red-600 text-white font-mono">
                                                            {profile.riskLevel} THREAT
                                                        </Badge>
                                                    </h2>
                                                    <div className="text-slate-400 font-mono text-xs mt-1">ID: {profile.id} • STATUS: <span className="text-yellow-500">{profile.status.toUpperCase()}</span></div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/20 p-4 rounded-lg border border-slate-800">
                                                <div className="space-y-1">
                                                    <div className="text-xs text-slate-500 uppercase font-bold">Known Aliases / Offenses</div>
                                                    <div className="flex flex-wrap gap-2 pt-1">
                                                        {profile.knownOffenses.map(off => (
                                                            <Badge key={off} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">{off}</Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-xs text-slate-500 uppercase font-bold">Last Known Digital Footprint</div>
                                                    <div className="flex items-center gap-2 text-slate-300 text-sm mt-1">
                                                        <MapPin className="w-4 h-4 text-blue-400" />
                                                        {profile.lastActiveLocation}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-xs text-slate-500 uppercase mb-1 flex items-center gap-1"><Phone className="w-3 h-3" /> Linked Identifiers</div>
                                                    <ul className="text-sm font-mono text-slate-300 space-y-1">
                                                        {profile.linkedPhones.map(p => <li key={p}>📱 +91 {p}</li>)}
                                                        {profile.linkedUPI.map(u => <li key={u}>💳 {u}</li>)}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-slate-500 uppercase mb-1 flex items-center gap-1"><Share2 className="w-3 h-3" /> Known Associates</div>
                                                    <ul className="text-sm text-slate-300 space-y-1">
                                                        {profile.networkConnections.length > 0 ?
                                                            profile.networkConnections.map(n => <li key={n}>🔗 {n}</li>) :
                                                            <li className="text-slate-600 italic">None identified</li>
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}
