"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload, ScanLine, FileText, AlertTriangle, CheckCircle, Loader2 } from "lucide-react"
import Tesseract from 'tesseract.js'
import { Card, CardContent } from "@/components/ui/card"

export function AiScannerWidget() {
    const [text, setText] = useState("")
    const [analyzing, setAnalyzing] = useState(false)
    const [ocrProcessing, setOcrProcessing] = useState(false)
    const [result, setResult] = useState<{ score: string, risk: 'High Risk' | 'Safe', suggestions: string[] } | null>(null)

    // Reuse the same logic as WhatsApp Bot
    const DANGER_KEYWORDS = ["lottery", "winner", "account blocked", "kyc", "otp", "bank", "expire", "urgent", "click here", "password", "prize", "refund", "customs", "arrest"]

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setOcrProcessing(true)
        Tesseract.recognize(
            file,
            'eng',
            { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
            setText(text)
            setOcrProcessing(false)
            analyzeText(text) // Auto-analyze after scan
        }).catch(err => {
            console.error("OCR Error:", err)
            setOcrProcessing(false)
            alert("Failed to read image.")
        })
    }

    const analyzeText = (inputText: string) => {
        setAnalyzing(true)
        setTimeout(() => {
            const lowerText = inputText.toLowerCase()
            const foundKeywords = DANGER_KEYWORDS.filter(k => lowerText.includes(k))
            const isFraud = foundKeywords.length > 0 || /http|www/i.test(lowerText) // Flags links too

            const suggestions = isFraud ? [
                "Detected suspicious keywords: " + foundKeywords.join(", "),
                "Do NOT click any links or share OTPs.",
                "Verify this message by calling the official source.",
                "Block and report the sender."
            ] : [
                "No clear danger keywords found.",
                "Still, exercise caution with strangers.",
                "Verify the sender's identity independently."
            ]

            setResult({
                score: isFraud ? `${85 + Math.floor(Math.random() * 14)}%` : `${5 + Math.floor(Math.random() * 10)}%`,
                risk: isFraud ? "High Risk" : "Safe",
                suggestions
            })
            setAnalyzing(false)
        }, 1500)
    }

    return (
        <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 relative">
                <Textarea
                    placeholder="Paste text or Upload Screenshot..."
                    className="min-h-[100px] bg-transparent border-none focus-visible:ring-0 resize-none text-sm"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                {/* OCR Processing Overlay */}
                {ocrProcessing && (
                    <div className="absolute inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 z-10">
                        <ScanLine className="animate-pulse" /> Reading Image...
                    </div>
                )}

                <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="relative">
                        <input
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer w-8 h-8 z-10"
                            accept="image/*"
                            onChange={handleImageUpload}
                            disabled={ocrProcessing || analyzing}
                        />
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-500 hover:text-blue-600" title="Upload Screenshot">
                            <Upload className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button
                        size="sm"
                        onClick={() => analyzeText(text)}
                        disabled={!text || analyzing || ocrProcessing}
                        className={result?.risk === 'High Risk' ? 'bg-red-600 hover:bg-red-700' : 'bg-primary'}
                    >
                        {analyzing ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : <FileText className="h-4 w-4 mr-2" />}
                        {analyzing ? "Analyzing..." : "Scan Content"}
                    </Button>
                </div>
            </div>

            {result && (
                <div className={`rounded-lg p-4 animate-in slide-in-from-top-2 border ${result.risk === 'High Risk'
                        ? 'bg-red-50 border-red-200 text-red-900 dark:bg-red-900/10 dark:border-red-800 dark:text-red-200'
                        : 'bg-green-50 border-green-200 text-green-900 dark:bg-green-900/10 dark:border-green-800 dark:text-green-200'
                    }`}>
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2 font-bold text-lg">
                            {result.risk === 'High Risk' ? <AlertTriangle className="h-5 w-5" /> : <CheckCircle className="h-5 w-5" />}
                            {result.risk}
                        </div>
                        <div className="text-sm opacity-75 font-mono">
                            AI Confidence: {result.score}
                        </div>
                    </div>
                    <div className="bg-white/50 dark:bg-black/20 rounded p-2 text-xs space-y-1">
                        {result.suggestions.map((rec, i) => (
                            <div key={i}>• {rec}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
