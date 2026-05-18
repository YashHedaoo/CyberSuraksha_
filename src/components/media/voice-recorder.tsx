"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Square, Play, RefreshCw, Save, Download } from "lucide-react"

export function VoiceRecorder({ userId }: { userId?: string }) {
    const [isRecording, setIsRecording] = useState(false)
    const [audioURL, setAudioURL] = useState<string | null>(null)
    const [recordingTime, setRecordingTime] = useState(0)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const chunksRef = useRef<Blob[]>([])
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [])

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            mediaRecorderRef.current = new MediaRecorder(stream)
            chunksRef.current = []

            mediaRecorderRef.current.ondataavailable = (e) => {
                chunksRef.current.push(e.data)
            }

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
                const url = URL.createObjectURL(blob)
                setAudioURL(url)
            }

            mediaRecorderRef.current.start()
            setIsRecording(true)
            setRecordingTime(0)
            timerRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1)
            }, 1000)

        } catch (err) {
            console.error("Error accessing microphone:", err)
            alert("Could not access microphone. Please check permissions.")
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
            setIsRecording(false)
            if (timerRef.current) clearInterval(timerRef.current)

            // Auto-Save to Vault
            setTimeout(() => {
                if (chunksRef.current.length > 0) {
                    const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
                    const reader = new FileReader()
                    reader.onloadend = () => {
                        const base64data = reader.result as string
                        const STORAGE_KEY = `cs_vault_${userId || 'user_default'}_files`
                        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
                        const newFile = {
                            id: Date.now().toString(),
                            name: `Audio Statement ${new Date().toLocaleTimeString()}`,
                            type: 'audio',
                            date: new Date().toLocaleDateString(),
                            content: base64data
                        }
                        localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, newFile]))
                    }
                    reader.readAsDataURL(blob)
                }
            }, 500)
        }
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-6 p-6">
            <div className={`relative flex items-center justify-center w-32 h-32 rounded-full border-4 transition-all duration-300 ${isRecording ? 'border-red-500 bg-red-50 animate-pulse' : 'border-slate-200 bg-slate-50'}`}>
                {isRecording ? (
                    <Mic className="h-12 w-12 text-red-500 animate-bounce" />
                ) : (
                    <Mic className="h-12 w-12 text-slate-400" />
                )}
            </div>

            <div className="text-2xl font-mono font-bold">
                {formatTime(recordingTime)}
            </div>

            {!audioURL ? (
                <Button
                    size="lg"
                    className={`w-40 h-12 rounded-full text-lg ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                    onClick={isRecording ? stopRecording : startRecording}
                >
                    {isRecording ? (
                        <> <Square className="mr-2 h-5 w-5 fill-current" /> Stop </>
                    ) : (
                        <> <Play className="mr-2 h-5 w-5 fill-current" /> Record </>
                    )}
                </Button>
            ) : (
                <div className="flex flex-col items-center gap-4 w-full">
                    <audio src={audioURL} controls className="w-full" />
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={() => { setAudioURL(null); setRecordingTime(0); }}>
                            <RefreshCw className="mr-2 h-4 w-4" /> Retake
                        </Button>
                        <a href={audioURL} download={`voice-fir-${Date.now()}.webm`}>
                            <Button>
                                <Download className="mr-2 h-4 w-4" /> Download Evidence
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}
