"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mic, MicOff, FileText, Globe, Loader2, Play, Pause } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface VoiceFIRProps {
    onComplaintGenerated: (data: any) => void
}


export function VoiceFIRRecorder({ onComplaintGenerated }: VoiceFIRProps) {
    const [isRecording, setIsRecording] = useState(false)
    const [transcript, setTranscript] = useState("")
    const [language, setLanguage] = useState("hi-IN") // Default to Hindi as per request for translation demo
    const [isProcessing, setIsProcessing] = useState(false)
    const recognitionRef = useRef<any>(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition()
                recognition.continuous = true
                recognition.interimResults = true
                recognition.lang = language

                recognition.onresult = (event: any) => {
                    let interimTranscript = ''
                    let finalTranscript = ''

                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            finalTranscript += event.results[i][0].transcript
                        } else {
                            interimTranscript += event.results[i][0].transcript
                        }
                    }

                    // Append new final results to existing transcript logic could be improved, 
                    // but for now we just update the display.
                    if (finalTranscript) {
                        setTranscript(prev => prev + " " + finalTranscript)
                    }
                }

                recognition.onerror = (event: any) => {
                    console.error("Speech recognition error", event.error)
                    setIsRecording(false)
                }

                recognitionRef.current = recognition
            }
        }
    }, [language])

    const toggleRecording = () => {
        if (!recognitionRef.current) {
            alert("Speech recognition not supported in this browser.")
            return
        }

        if (isRecording) {
            recognitionRef.current.stop()
            setIsRecording(false)
        } else {
            recognitionRef.current.start()
            setIsRecording(true)
        }
    }

    const generateFIR = async () => {
        setIsProcessing(true)

        // SIMULATION: In a real backend, this would hit an LLM API to translate & extract entities.
        // We will simulate the "Intelligence" here.

        await new Promise(resolve => setTimeout(resolve, 2000)) // Mock processing delay

        const mockTranslation = `[TRANSLATED FROM ${language}]: ${transcript}`

        // Basic keywords to categorize
        let category = "General"
        if (transcript.includes("paisa") || transcript.includes("money") || transcript.includes("bank")) category = "Financial Fraud"
        if (transcript.includes("call") || transcript.includes("phone")) category = "Vishing / Fake Call"

        const firData = {
            source: "VOICE_FIR_ENGINE",
            originalAudioTranscript: transcript,
            translatedText: mockTranslation, // In real app, this would be actual English text
            category: category,
            timestamp: new Date().toISOString(),
            status: "DRAFT_FIR_GENERATED",
            evidenceHash: "PENDING_SHA_256"
        }

        setIsProcessing(false)
        onComplaintGenerated(firData)
    }

    return (
        <Card className="w-full bg-slate-900 border-blue-900/50 shadow-2xl">
            <CardHeader className="bg-slate-950/50 rounded-t-xl border-b border-blue-900/30">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Mic className={`h-6 w-6 ${isRecording ? "text-red-500 animate-pulse" : "text-blue-500"}`} />
                        <CardTitle className="text-white">Voice FIR Engine</CardTitle>
                    </div>
                    <select
                        className="bg-slate-800 text-white text-sm p-1 rounded border border-slate-700"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="en-US">English</option>
                        <option value="hi-IN">Hindi (हिंदी)</option>
                        <option value="mr-IN">Marathi (मराठी)</option>
                        <option value="ta-IN">Tamil (தமிழ்)</option>
                        <option value="te-IN">Telugu (తెలుగు)</option>
                    </select>
                </div>
                <CardDescription className="text-slate-400">
                    Real-time multilingual speech-to-text & FIR Auto-Generation.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">

                {/* Visualizer Mock */}
                <div className="h-16 bg-black rounded-lg flex items-center justify-center gap-1 overflow-hidden border border-slate-800">
                    {isRecording ? (
                        Array.from({ length: 40 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-blue-500 rounded-full animate-bounce"
                                style={{
                                    height: `${Math.random() * 100}%`,
                                    animationDelay: `${i * 0.05}s`
                                }}
                            />
                        ))
                    ) : (
                        <span className="text-slate-600 text-sm font-mono">WAITING FOR AUDIO INPUT...</span>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-blue-400 font-bold uppercase tracking-wider">Live Transcript</label>
                    <div className="min-h-[100px] p-4 bg-slate-800/50 rounded-lg border border-slate-700 text-slate-200 font-mono text-sm whitespace-pre-wrap">
                        {transcript || "Speak clearly into the microphone..."}
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button
                        size="lg"
                        variant={isRecording ? "destructive" : "default"}
                        className={`flex-1 h-14 text-lg font-bold ${isRecording ? "animate-pulse" : "bg-blue-600 hover:bg-blue-700"}`}
                        onClick={toggleRecording}
                    >
                        {isRecording ? <><MicOff className="mr-2" /> Stop Recording</> : <><Play className="mr-2" /> Start Recording</>}
                    </Button>

                    <Button
                        size="lg"
                        variant="secondary"
                        className="flex-1 h-14 bg-emerald-600 hover:bg-emerald-700 text-white border-none"
                        disabled={!transcript || isRecording}
                        onClick={generateFIR}
                    >
                        {isProcessing ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <FileText className="mr-2 h-5 w-5" />}
                        Generate FIR
                    </Button>
                </div>

            </CardContent>
        </Card>
    )
}
