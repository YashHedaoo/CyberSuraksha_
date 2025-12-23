"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Video, Square, Loader2, Camera } from "lucide-react"
import { Card } from "@/components/ui/card"

interface VoiceInputProps {
    onTranscript: (text: string) => void
    isListening?: boolean
    variant?: 'compact' | 'full'
}

export function VoiceInput({ onTranscript, variant = 'full' }: VoiceInputProps) {
    const [mode, setMode] = useState<'voice' | 'video'>('video')
    const [recording, setRecording] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Compact Mode (Original Mic Button)
    if (variant === 'compact') {
        const toggleCompactRecording = () => {
            if (recording) {
                setRecording(false)
                // Simulate stop
            } else {
                setRecording(true)
                setTimeout(() => {
                    onTranscript("I need help with a cybercrime issue.")
                    setRecording(false)
                }, 2000)
            }
        }

        return (
            <Button
                variant={recording ? "destructive" : "secondary"}
                size="icon"
                className={`rounded-full h-10 w-10 shadow-sm transition-all ${recording ? "animate-pulse scale-110" : "hover:scale-105"}`}
                onClick={toggleCompactRecording}
                title="Voice Input"
            >
                {recording ? <Square className="h-4 w-4 fill-current" /> : <Mic className="h-4 w-4" />}
            </Button>
        )
    }

    // Full Mode (Video Statement Logic)
    useEffect(() => {
        if (mode === 'video' && !recording) {
            // Request camera permission mock
            startCamera()
        }
    }, [mode, recording])

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true })
            if (videoRef.current) videoRef.current.srcObject = stream
        } catch (e) {
            console.error("Camera denied or not available", e)
        }
    }

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream
            stream.getTracks().forEach(t => t.stop())
        }
    }

    const toggleRecording = () => {
        if (recording) {
            setRecording(false)
            stopCamera()
            // Simulate AI Processing
            onTranscript("AI Analysis (Video): Victim states they received a phishing link via WhatsApp at 10 PM. The potential suspect number is visible in the screenshot evidence.")
        } else {
            setRecording(true)
            startCamera()
            // In a real app, MediaRecorder would start here
        }
    }

    return (
        <Card className="p-4 border-dashed border-2 flex flex-col items-center gap-4 bg-slate-50 dark:bg-slate-900 w-full">
            <div className="flex gap-4 mb-2">
                <Button
                    variant={mode === 'voice' ? 'default' : 'outline'}
                    onClick={() => { setMode('voice'); stopCamera(); }}
                    size="sm"
                >
                    <Mic className="mr-2 h-4 w-4" /> Audio Only
                </Button>
                <Button
                    variant={mode === 'video' ? 'default' : 'outline'}
                    onClick={() => setMode('video')}
                    size="sm"
                >
                    <Video className="mr-2 h-4 w-4" /> Video Statement
                </Button>
            </div>

            {mode === 'video' && (
                <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
                    {!recording ? (
                        <div className="text-white/50 flex flex-col items-center">
                            <Camera className="h-12 w-12 mb-2" />
                            <p className="text-sm">Camera Preview</p>
                        </div>
                    ) : (
                        <video ref={videoRef} autoPlay muted className="w-full h-full object-cover" />
                    )}

                    {recording && (
                        <div className="absolute top-4 right-4 animate-pulse">
                            <div className="h-3 w-3 bg-red-600 rounded-full" />
                        </div>
                    )}
                </div>
            )}

            <div className="text-center space-y-2">
                <Button
                    variant={recording ? "destructive" : "default"}
                    size="lg"
                    className={`rounded-full h-16 w-16 shadow-xl transition-all ${recording ? "ring-4 ring-red-300 ring-offset-2" : "hover:scale-105"}`}
                    onClick={toggleRecording}
                >
                    {recording ? <Square className="h-6 w-6 fill-current" /> : (mode === 'video' ? <Video className="h-8 w-8" /> : <Mic className="h-8 w-8" />)}
                </Button>
                <p className="text-xs font-medium text-muted-foreground">
                    {recording ? "Recording... Tap to Finish" : `Tap to Record ${mode === 'video' ? 'Video' : 'Voice'} Statement`}
                </p>
                <p className="text-[10px] text-muted-foreground/60 max-w-xs mx-auto">
                    AI will automatically transcribe your statement into the official FIR format.
                </p>
            </div>
        </Card>
    )
}
