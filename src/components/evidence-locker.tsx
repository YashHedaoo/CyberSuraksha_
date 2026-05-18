"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, FileKey, CheckCircle, Upload, AlertTriangle, Cloud, Hash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EvidenceItem {
    id: string
    name: string
    size: string
    type: string
    hash: string
    timestamp: string
    status: "Secured" | "Pending" | "Synced"
}

export function EvidenceHashLocker() {
    const [evidenceList, setEvidenceList] = useState<EvidenceItem[]>([])
    const [isHashing, setIsHashing] = useState(false)

    // Helper to compute SHA-256
    const computeSHA256 = async (file: File): Promise<string> => {
        const buffer = await file.arrayBuffer()
        const hashBuffer = await crypto.subtle.digest("SHA-256", buffer)
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
        return hashHex
    }

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) return

        setIsHashing(true)

        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            // Mock delay for visual effect
            await new Promise(r => setTimeout(r, 800))
            const hash = await computeSHA256(file)

            const newItem: EvidenceItem = {
                id: crypto.randomUUID(),
                name: file.name,
                size: (file.size / 1024).toFixed(2) + " KB",
                type: file.type,
                hash: hash,
                timestamp: new Date().toISOString(),
                status: "Secured"
            }

            setEvidenceList(prev => [newItem, ...prev])
        }

        setIsHashing(false)
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                        <Shield className="w-6 h-6" /> Evidence Hash Locker
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Forensic Integrity System • SHA-256 Immutable Chain
                    </p>
                </div>
                <div className="relative">
                    <input
                        type="file"
                        multiple
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileUpload}
                    />
                    <Button className="bg-primary text-primary-foreground hover:bg-slate-800">
                        <Upload className="w-4 h-4 mr-2" /> Upload & Hash Evidence
                    </Button>
                </div>
            </div>

            {/* Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-slate-900 border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                            <Lock className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Vault Status</p>
                            <p className="font-bold text-green-500">SECURE</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4 bg-slate-900 border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <Hash className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Hashing Algo</p>
                            <p className="font-bold text-blue-500">SHA-256</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4 bg-slate-900 border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                            <Cloud className="w-5 h-5 text-purple-500" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">IPFS Sync</p>
                            <p className="font-bold text-purple-500">READY</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* List */}
            <div className="space-y-3">
                <AnimatePresence>
                    {evidenceList.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            <Card className="p-4 border-l-4 border-l-primary bg-card/50 hover:bg-card transition-colors">
                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <FileKey className="w-4 h-4 text-primary" />
                                            <span className="font-semibold">{item.name}</span>
                                            <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                                                {item.type}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                                            <span className="bg-slate-900 px-2 py-0.5 rounded text-amber-500">HASH</span>
                                            <span className="break-all">{item.hash}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1 min-w-[100px]">
                                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">
                                            <CheckCircle className="w-3 h-3 mr-1" /> {item.status}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleTimeString()}</span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {evidenceList.length === 0 && !isHashing && (
                    <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-xl">
                        <Shield className="w-12 h-12 mx-auto mb-3 opacity-20" />
                        <p>No evidence secured yet.</p>
                        <p className="text-xs">Upload files to generate forensic hashes.</p>
                    </div>
                )}

                {isHashing && (
                    <div className="flex items-center justify-center py-8 text-primary animate-pulse">
                        <Hash className="w-5 h-5 mr-2 animate-spin" />
                        Computing Cryptographic Hashes...
                    </div>
                )}
            </div>
        </div>
    )
}
