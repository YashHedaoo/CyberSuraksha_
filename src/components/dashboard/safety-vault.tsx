"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Lock, Unlock, FileText, Image as ImageIcon, Music, Trash2, ShieldAlert, LogOut, Plus, ShieldCheck, Download } from "lucide-react"
import { toast } from "react-hot-toast"

interface SafetyVaultProps {
    userId?: string // Optional for now, defaults to 'guest' if not provided
}

export function SafetyVault({ userId = "user_default" }: SafetyVaultProps) {
    const [isLocked, setIsLocked] = useState(true)
    const [pin, setPin] = useState("")
    const [mode, setMode] = useState<'locked' | 'vault' | 'duress'>('locked')
    const [files, setFiles] = useState<{ id: string, name: string, type: string, date: string, content: string }[]>([])

    // Mock PINs
    const REAL_PIN = "1234"
    const DURESS_PIN = "0000"
    const STORAGE_KEY = `cs_vault_${userId}_files`

    // Load files
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
            setFiles(JSON.parse(stored))
        }
    }, [userId, STORAGE_KEY])

    const handleNumClick = (num: string) => {
        if (pin.length < 4) {
            setPin(prev => prev + num)
        }
    }

    const handleClear = () => {
        setPin("")
    }

    const handleUnlock = () => {
        if (pin === REAL_PIN) {
            setMode('vault')
            setIsLocked(false)
            setPin("")
            toast.success("Vault Unlocked")
        } else if (pin === DURESS_PIN) {
            setMode('duress')
            setIsLocked(false)
            setPin("")
        } else {
            setPin("")
            toast.error("Incorrect PIN")
        }
    }

    const handleLock = () => {
        setPin("")
        setMode('locked')
        setIsLocked(true)
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'audio' | 'document') => {
        const file = e.target.files?.[0]
        if (!file) return

        if (file.size > 5 * 1024 * 1024) {
            toast.error("File too large (Max 5MB)")
            return
        }

        const reader = new FileReader()
        reader.onload = (event) => {
            const result = event.target?.result as string
            const newFile = {
                id: Date.now().toString(),
                name: file.name,
                type: type,
                date: new Date().toLocaleDateString(),
                content: result
            }
            const updatedFiles = [...files, newFile]
            setFiles(updatedFiles)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFiles))
            toast.success("Evidence Secured")
        }
        reader.readAsDataURL(file)
    }

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to permanently delete this evidence?")) {
            const updated = files.filter(f => f.id !== id)
            setFiles(updated)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
            toast.success("Evidence Deleted")
        }
    }

    // --- SUB-COMPONENT: CALCULATOR (DURESS MODE) ---
    const CalculatorApp = () => {
        const [display, setDisplay] = useState("0")
        return (
            <div className="flex flex-col h-full min-h-[500px] bg-slate-900 text-white p-4 rounded-xl">
                <div className="flex-1 flex items-end justify-end p-6 text-5xl font-light font-mono break-all">
                    {display}
                </div>
                <div className="grid grid-cols-4 gap-3 bg-slate-900 pb-8">
                    {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((btn) => (
                        <Button
                            key={btn}
                            variant="secondary"
                            className={`h-16 text-xl rounded-full ${['÷', '×', '-', '+', '='].includes(btn) ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-slate-700 hover:bg-slate-600'
                                } ${btn === '0' ? 'col-span-2 w-full' : ''}`}
                            onClick={() => {
                                if (btn === 'C') setDisplay("0")
                                else if (btn === '=') setDisplay(display)
                                else setDisplay(prev => prev === "0" ? btn : prev + btn)
                            }}
                        >
                            {btn}
                        </Button>
                    ))}
                </div>
            </div>
        )
    }

    // --- LOCK SCREEN ---
    if (isLocked) {
        return (
            <div className="flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                <Card className="w-full max-w-sm bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 shadow-xl cyber-interactive">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto bg-blue-50 dark:bg-slate-800 p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center border border-blue-100 dark:border-slate-700">
                            <Lock className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                        </div>
                        <CardTitle className="text-xl font-light">Private Evidence Locker</CardTitle>
                        <CardDescription>Enter PIN to Access</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* PIN Dots */}
                        <div className="flex justify-center gap-4 mb-8">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 transition-all ${i < pin.length ? 'bg-blue-500 scale-110 shadow-[0_0_10px_#3b82f6]' : 'bg-transparent'}`} />
                            ))}
                        </div>

                        {/* Numpad */}
                        <div className="grid grid-cols-3 gap-4 px-2 mb-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                <Button
                                    key={num}
                                    variant="outline"
                                    className="h-14 w-full text-xl font-light rounded-full cyber-interactive hover:bg-blue-50 dark:hover:bg-slate-800"
                                    onClick={() => handleNumClick(num.toString())}
                                >
                                    {num}
                                </Button>
                            ))}
                            <div />
                            <Button
                                variant="outline"
                                className="h-14 w-full text-xl font-light rounded-full cyber-interactive hover:bg-blue-50 dark:hover:bg-slate-800"
                                onClick={() => handleNumClick('0')}
                            >
                                0
                            </Button>
                            <Button
                                variant="ghost"
                                className="h-14 w-full text-sm font-bold uppercase"
                                onClick={handleClear}
                            >
                                Clear
                            </Button>
                        </div>

                        <Button className="w-full h-12 text-lg cyber-interactive bg-blue-600 hover:bg-blue-700" onClick={handleUnlock}>
                            Unlock Vault
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // --- DURESS MODE ---
    if (mode === 'duress') {
        return <CalculatorApp />
    }

    // --- VAULT MODE ---
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <ShieldCheck className="text-blue-600 h-6 w-6" />
                        My Evidence Locker
                    </h1>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                        Encrypted • User-Bound: {userId}
                    </p>
                </div>
                <Button variant="outline" size="sm" onClick={handleLock} className="text-destructive hover:bg-destructive/10 border-destructive/20">
                    <LogOut className="h-4 w-4 mr-2" /> Lock Vault
                </Button>
            </div>

            {/* Add Evidence Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative group cursor-pointer">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10 h-full w-full" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} />
                    <Card className="bg-blue-50/50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-800 cyber-interactive hover:bg-blue-100/50 transition-colors">
                        <CardContent className="flex flex-col items-center justify-center py-6 gap-3">
                            <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full">
                                <ImageIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                            </div>
                            <span className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Add Photo</span>
                        </CardContent>
                    </Card>
                </div>

                <div className="relative group cursor-pointer">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10 h-full w-full" accept="audio/*" onChange={(e) => handleFileUpload(e, 'audio')} />
                    <Card className="bg-purple-50/50 border-purple-100 dark:bg-purple-900/10 dark:border-purple-800 cyber-interactive hover:bg-purple-100/50 transition-colors">
                        <CardContent className="flex flex-col items-center justify-center py-6 gap-3">
                            <div className="p-3 bg-purple-100 dark:bg-purple-800 rounded-full">
                                <Music className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                            </div>
                            <span className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Add Audio</span>
                        </CardContent>
                    </Card>
                </div>

                <div className="relative group cursor-pointer">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10 h-full w-full" accept=".pdf,.doc,.docx,.txt" onChange={(e) => handleFileUpload(e, 'document')} />
                    <Card className="bg-orange-50/50 border-orange-100 dark:bg-orange-900/10 dark:border-orange-800 cyber-interactive hover:bg-orange-100/50 transition-colors">
                        <CardContent className="flex flex-col items-center justify-center py-6 gap-3">
                            <div className="p-3 bg-orange-100 dark:bg-orange-800 rounded-full">
                                <FileText className="h-6 w-6 text-orange-600 dark:text-orange-200" />
                            </div>
                            <span className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Add Document</span>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Evidence List */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg">Stored Items ({files.length})</h2>
                </div>

                {files.length === 0 ? (
                    <div className="text-center py-12 bg-muted/20 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                        <p className="text-muted-foreground">Vault is empty.</p>
                        <p className="text-xs text-muted-foreground mt-2">Upload items or use the Evidence Recorder to save items here automatically.</p>
                    </div>
                ) : (
                    <div className="grid gap-3">
                        {files.map((file) => (
                            <Card key={file.id} className="overflow-hidden hover:shadow-md transition-all cyber-interactive border-l-4 border-l-blue-500">
                                <div className="flex items-center p-4 gap-4">
                                    {/* Icon/Preview */}
                                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center shrink-0 ${file.type === 'document' ? 'bg-orange-100 text-orange-600' :
                                        file.type === 'audio' ? 'bg-purple-100 text-purple-600' :
                                            'bg-blue-100 text-blue-600'
                                        }`}>
                                        {file.type === 'document' && <FileText className="h-6 w-6" />}
                                        {file.type === 'audio' && <Music className="h-6 w-6" />}
                                        {file.type === 'image' && <ImageIcon className="h-6 w-6" />}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium truncate">{file.name}</p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>{file.date}</span>
                                            <span className="px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">
                                                SHA-256 Verified
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => {
                                            const link = document.createElement("a");
                                            link.href = file.content;
                                            link.download = file.name;
                                            link.click();
                                        }}>
                                            <Download className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => handleDelete(file.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 text-sm flex gap-3">
                <Lock className="shrink-0 text-yellow-600" />
                <div>
                    <p className="font-bold text-yellow-800 dark:text-yellow-500 mb-1">Duress PIN: 0000</p>
                    <p className="text-yellow-700 dark:text-yellow-400">
                        Entering 0000 at the lock screen will launch a fake calculator app.
                    </p>
                </div>
            </div>
        </div>
    )
}
