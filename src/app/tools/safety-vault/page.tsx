"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Lock, Unlock, FileText, Image as ImageIcon, Music, Trash2, Calculator, ShieldAlert, LogOut } from "lucide-react"

export default function SafetyVaultPage() {
    const [isLocked, setIsLocked] = useState(true)
    const [pin, setPin] = useState("")
    const [mode, setMode] = useState<'locked' | 'vault' | 'duress'>('locked')
    const [files, setFiles] = useState([
        { id: 1, name: "Harassment_Evidence_Chat.pdf", type: "document", date: "2024-12-20" },
        { id: 2, name: "Scammer_Voice_Call.mp3", type: "audio", date: "2024-12-21" },
        { id: 3, name: "Threat_Screenshot.jpg", type: "image", date: "2024-12-22" }
    ])

    // Mock PINs
    const REAL_PIN = "1234"
    const DURESS_PIN = "0000"

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
        } else if (pin === DURESS_PIN) {
            setMode('duress')
            setIsLocked(false)
        } else {
            // Shake effect could go here
            setPin("")
            alert("Incorrect PIN")
        }
    }

    const handleLock = () => {
        setPin("")
        setMode('locked')
        setIsLocked(true)
    }

    // --- SUB-COMPONENT: CALCULATOR (DURESS MODE) ---
    const CalculatorApp = () => {
        const [display, setDisplay] = useState("0")

        return (
            <div className="flex flex-col h-full bg-slate-900 text-white p-4">
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
                                else if (btn === '=') setDisplay(display) // Fake logic
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
                        <div className="mx-auto bg-slate-800 p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center">
                            <Lock className="h-8 w-8 text-slate-400" />
                        </div>
                        <CardTitle className="text-slate-100 text-xl font-light">Enter PIN</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* PIN Dots */}
                        <div className="flex justify-center gap-4 mb-8">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`w-4 h-4 rounded-full border border-slate-600 transition-all ${i < pin.length ? 'bg-slate-100 scale-110' : 'bg-transparent'}`} />
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
                                className="w-full aspect-square rounded-full flex items-center justify-center text-slate-100 hover:text-white active:scale-95"
                                onClick={handleClear}
                            >
                                Delete
                            </button>
                        </div>

                        <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700" onClick={handleUnlock}>
                            Unlock
                        </Button>
                        <p className="text-center text-xs text-slate-600 mt-4">Safe storage for sensitive evidence.</p>
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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4">
            <div className="max-w-md mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <ShieldAlert className="text-blue-600" /> Safety Vault
                        </h1>
                        <p className="text-sm text-muted-foreground">Encrypted Offline Storage</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleLock}>
                        <LogOut className="h-6 w-6" />
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800">
                        <CardContent className="p-4 flex flex-col items-center justify-center gap-2 py-8">
                            <ImageIcon className="h-8 w-8 text-blue-600" />
                            <span className="font-semibold text-blue-700 dark:text-blue-300">Add Photo</span>
                        </CardContent>
                    </Card>
                    <Card className="bg-purple-50 border-purple-100 dark:bg-purple-900/20 dark:border-purple-800">
                        <CardContent className="p-4 flex flex-col items-center justify-center gap-2 py-8">
                            <Music className="h-8 w-8 text-purple-600" />
                            <span className="font-semibold text-purple-700 dark:text-purple-300">Record Audio</span>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <h2 className="font-semibold text-lg">Stored Evidence ({files.length})</h2>
                    {files.map((file) => (
                        <Card key={file.id} className="overflow-hidden">
                            <div className="flex items-center p-4 gap-4">
                                <div className={`p-3 rounded-lg ${file.type === 'document' ? 'bg-orange-100 text-orange-600' :
                                    file.type === 'audio' ? 'bg-purple-100 text-purple-600' :
                                        'bg-blue-100 text-blue-600'
                                    }`}>
                                    {file.type === 'document' && <FileText className="h-5 w-5" />}
                                    {file.type === 'audio' && <Music className="h-5 w-5" />}
                                    {file.type === 'image' && <ImageIcon className="h-5 w-5" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium truncate">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">{file.date} • Encrypted</p>
                                </div>
                                <Button variant="ghost" size="icon" className="text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 text-sm">
                    <p className="font-bold text-yellow-800 dark:text-yellow-500 mb-1">Duress Mode Active</p>
                    <p className="text-yellow-700 dark:text-yellow-400">
                        If forced to open this app, enter PIN <strong>0000</strong> at the lock screen. It will open a fake calculator.
                    </p>
                </div>
            </div>
        </div>
    )
}
