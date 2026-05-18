"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Video, Square, Play, RefreshCw, Download, Camera } from "lucide-react"

export function VideoRecorder({ userId }: { userId?: string }) {
    const [isRecording, setIsRecording] = useState(false)
    const [videoURL, setVideoURL] = useState<string | null>(null)
    const [recordingTime, setRecordingTime] = useState(0)
    const [stream, setStream] = useState<MediaStream | null>(null)

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const chunksRef = useRef<Blob[]>([])
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    // Start camera preview on mount
    useEffect(() => {
        startCamera()
        return () => stopCamera()
    }, [])

    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            setStream(mediaStream)
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream
            }
        } catch (err) {
            console.error("Camera access error:", err)
        }
    }

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop())
            setStream(null)
        }
    }

    const startRecording = () => {
        if (!stream) return

        mediaRecorderRef.current = new MediaRecorder(stream)
        chunksRef.current = []

        mediaRecorderRef.current.ondataavailable = (e) => {
            chunksRef.current.push(e.data)
        }

        mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: 'video/webm' })
            const url = URL.createObjectURL(blob)
            setVideoURL(url)
            stopCamera() // Stop camera after recording to save resources
        }

        mediaRecorderRef.current.start()
        setIsRecording(true)
        setRecordingTime(0)
        timerRef.current = setInterval(() => {
            setRecordingTime(prev => prev + 1)
        }, 1000)
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)
            if (timerRef.current) clearInterval(timerRef.current)

            // Auto-Save to Vault
            setTimeout(() => {
                if (chunksRef.current.length > 0) {
                    const blob = new Blob(chunksRef.current, { type: 'video/webm' })
                    const reader = new FileReader()
                    reader.onloadend = () => {
                        const base64data = reader.result as string
                        const STORAGE_KEY = `cs_vault_${userId || 'user_default'}_files`
                        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
                        const newFile = {
                            id: Date.now().toString(),
                            name: `Video Evidence ${new Date().toLocaleTimeString()}`,
                            type: 'video', // Note: SafetyVault needs to handle 'video' type now or treat as doc
                            date: new Date().toLocaleDateString(),
                            content: base64data
                        }
                        localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, newFile]))
                        // alert("Evidence Secured in Safety Vault!") // Optional feedback
                    }
                    reader.readAsDataURL(blob)
                }
            }, 500)
        }
    }

    const reset = () => {
        setVideoURL(null)
        setRecordingTime(0)
        startCamera()
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="flex flex-col items-center space-y-4 w-full">
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-slate-700">
                {!videoURL ? (
                    <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
                ) : (
                    <video src={videoURL} controls className="w-full h-full object-contain" />
                )}

                {isRecording && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full text-white text-sm font-bold animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        REC {formatTime(recordingTime)}
                    </div>
                )}
            </div>

            <div className="flex gap-4">
                {!videoURL ? (
                    <Button
                        size="lg"
                        className={`rounded-full px-8 ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                        onClick={isRecording ? stopRecording : startRecording}
                    >
                        {isRecording ? (
                            <><Square className="mr-2 h-5 w-5 fill-current" /> Stop Recording</>
                        ) : (
                            <><Camera className="mr-2 h-5 w-5" /> Start Record</>
                        )}
                    </Button>
                ) : (
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={reset}>
                            <RefreshCw className="mr-2 h-4 w-4" /> Retake
                        </Button>
                        <a href={videoURL} download={`video-fir-${Date.now()}.webm`}>
                            <Button>
                                <Download className="mr-2 h-4 w-4" /> Download Evidence
                            </Button>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
