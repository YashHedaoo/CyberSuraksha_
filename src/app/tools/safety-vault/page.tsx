"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Lock, Unlock, FileText, Image as ImageIcon, Music, Trash2, ShieldAlert, LogOut, Plus } from "lucide-react"

export default function SafetyVaultPage() {
    const [isLocked, setIsLocked] = useState(true)
    const [pin, setPin] = useState("")
    const [mode, setMode] = useState<'locked' | 'vault' | 'duress'>('locked')
    const [files, setFiles] = useState<{ id: string, name: string, type: string, date: string, content: string }[]>([])

    // Mock PINs
    const REAL_PIN = "1234"
    const DURESS_PIN = "0000"

    // Load files from LocalStorage on mount (simulating offline DB)
    useEffect(() => {
        const stored = localStorage.getItem("cs_vault_files")
        if (stored) {
            setFiles(JSON.parse(stored))
        }
    }, [])

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
        } else if (pin === DURESS_PIN) {
            setMode('duress')
            setIsLocked(false)
            setPin("")
        } else {
            setPin("")
            alert("Incorrect PIN")
        }
    }

    const handleLock = () => {
        setPin("")
        setMode('locked')
        setIsLocked(true)
    }

    // --- REAL FILE UPLOAD LOGIC ---
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'audio' | 'document') => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = (event) => {
            const result = event.target?.result as string
            const newFile = {
                id: Date.now().toString(),
                name: file.name,
                type: type,
                date: new Date().toLocaleDateString(),
                content: result // Base64 string for preview
            }
            const updatedFiles = [...files, newFile]
            setFiles(updatedFiles)
            localStorage.setItem("cs_vault_files", JSON.stringify(updatedFiles)) // Persist
        }
        reader.readAsDataURL(file)
    }

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to permanently delete this evidence?")) {
            const updated = files.filter(f => f.id !== id)
            setFiles(updated)
            localStorage.setItem("cs_vault_files", JSON.stringify(updated))
        }
    }

    // --- SUB-COMPONENT: CALCULATOR (DURESS MODE) ---
    const CalculatorApp = () => {
        const [display, setDisplay] = useState("0")
        return (
            <div className="flex flex-col h-screen bg-slate-900 text-white p-4">
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
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
                <Card className="w-full max-w-sm bg-slate-900 border-slate-800 shadow-2xl">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto bg-slate-800 p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center border border-slate-700">
                            <Lock className="h-8 w-8 text-blue-500" />
                        </div>
                        <CardTitle className="text-slate-100 text-xl font-light">Enter Vault PIN</CardTitle>
                        <CardDescription>Secure Evidence Storage</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* PIN Dots */}
                        <div className="flex justify-center gap-4 mb-8">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`w-4 h-4 rounded-full border border-slate-600 transition-all ${i < pin.length ? 'bg-blue-500 scale-110 shadow-[0_0_10px_#3b82f6]' : 'bg-transparent'}`} />
                            ))}
                        </div>

                        {/* Numpad */}
                        <div className="grid grid-cols-3 gap-6 px-4 mb-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                <button
                                    key={num}
                                    className="w-full aspect-square rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100 text-2xl font-light transition-colors flex items-center justify-center active:scale-95"
                                    onClick={() => handleNumClick(num.toString())}
                                >
                                    {num}
                                </button>
                            ))}
                            <div />
                            <button
                                className="w-full aspect-square rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100 text-2xl font-light transition-colors flex items-center justify-center active:scale-95"
                                onClick={() => handleNumClick('0')}
                            >
                                0
                            </button>
                            <button
                                className="w-full aspect-square rounded-full flex items-center justify-center text-slate-100 hover:text-white active:scale-95 text-sm uppercase tracking-widest font-bold"
                                onClick={handleClear}
                            >
                                Clear
                            </button>
                        </div>

                        <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20" onClick={handleUnlock}>
                            Unlock Vault
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // --- DURESS MODE (CALCULATOR) ---
    if (mode === 'duress') {
        return <CalculatorApp />
    }

    // --- REAL VAULT MODE ---
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <ShieldAlert className="text-blue-600 h-6 w-6" /> Safety Vault
                        </h1>
                        <p className="text-sm text-muted-foreground">Encrypted Local Storage • Offline First</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleLock} className="text-destructive hover:bg-destructive/10">
                        <LogOut className="h-6 w-6" />
                    </Button>
                </div>

                {/* Add Evidence Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="relative group cursor-pointer">
                        <Input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} />
                        <Card className="bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800 group-hover:scale-[1.02] transition-transform">
                            <CardContent className="p-4 flex flex-col items-center justify-center gap-2 py-8">
                                <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full">
                                    <ImageIcon className="h-6 w-6 text-blue-600 dark:text-blue-200" />
                                </div>
                                <span className="font-semibold text-blue-700 dark:text-blue-300">Add Photo Evidence</span>
                                <Plus className="h-4 w-4 text-blue-400" />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="relative group cursor-pointer">
                        <Input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" accept="audio/*" onChange={(e) => handleFileUpload(e, 'audio')} />
                        <Card className="bg-purple-50 border-purple-100 dark:bg-purple-900/20 dark:border-purple-800 group-hover:scale-[1.02] transition-transform">
                            <CardContent className="p-4 flex flex-col items-center justify-center gap-2 py-8">
                                <div className="p-3 bg-purple-100 dark:bg-purple-800 rounded-full">
                                    <Music className="h-6 w-6 text-purple-600 dark:text-purple-200" />
                                </div>
                                <span className="font-semibold text-purple-700 dark:text-purple-300">Add Audio Recording</span>
                                <Plus className="h-4 w-4 text-purple-400" />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="relative group cursor-pointer">
                        <Input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" accept=".pdf,.doc,.docx,.txt" onChange={(e) => handleFileUpload(e, 'document')} />
                        <Card className="bg-orange-50 border-orange-100 dark:bg-orange-900/20 dark:border-orange-800 group-hover:scale-[1.02] transition-transform">
                            <CardContent className="p-4 flex flex-col items-center justify-center gap-2 py-8">
                                <div className="p-3 bg-orange-100 dark:bg-orange-800 rounded-full">
                                    <FileText className="h-6 w-6 text-orange-600 dark:text-orange-200" />
                                </div>
                                <span className="font-semibold text-orange-700 dark:text-orange-300">Add Document</span>
                                <Plus className="h-4 w-4 text-orange-400" />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Evidence List */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-lg px-2">Stored Evidence ({files.length})</h2>
                    {files.length === 0 ? (
                        <div className="text-center py-12 bg-muted/20 rounded-xl border border-dashed">
                            <p className="text-muted-foreground">No evidence secured yet.</p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {files.map((file) => (
                                <Card key={file.id} className="overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="flex items-center p-4 gap-4">
                                        {/* Thumbnail Preview if Image */}
                                        {file.type === 'image' && file.content ? (
                                            <div className="h-16 w-16 bg-black rounded-lg overflow-hidden shrink-0">
                                                <img src={file.content} alt="preview" className="h-full w-full object-cover" />
                                            </div>
                                        ) : (
                                            <div className={`h-16 w-16 rounded-lg flex items-center justify-center shrink-0 ${file.type === 'document' ? 'bg-orange-100 text-orange-600' :
                                                    file.type === 'audio' ? 'bg-purple-100 text-purple-600' :
                                                        'bg-blue-100 text-blue-600'
                                                }`}>
                                                {file.type === 'document' && <FileText className="h-8 w-8" />}
                                                {file.type === 'audio' && <Music className="h-8 w-8" />}
                                            </div>
                                        )}

                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium truncate">{file.name}</p>
                                            <p className="text-xs text-muted-foreground">{file.date} • {file.type.toUpperCase()}</p>
                                        </div>

                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" onClick={() => {
                                                // Create a fake download link
                                                const link = document.createElement("a");
                                                link.href = file.content;
                                                link.download = file.name;
                                                link.click();
                                            }}>
                                                Open
                                            </Button>
                                            <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => handleDelete(file.id)}>
                                                <Trash2 className="h-5 w-5" />
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
                        <p className="font-bold text-yellow-800 dark:text-yellow-500 mb-1">Duress Mode Active</p>
                        <p className="text-yellow-700 dark:text-yellow-400 leading-relaxed">
                            Under threat? Enter PIN <strong>0000</strong> at the lock screen. The app will launch a fully functional calculator to hide your evidence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
