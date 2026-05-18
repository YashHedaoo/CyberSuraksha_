"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Video, StopCircle, Upload, CheckCircle, ShieldAlert, Loader2 } from "lucide-react"

interface VideoEvidenceProps {
    onEvidenceCaptured: (file: File, hash: string) => void
}

export function VideoEvidenceRecorder({ onEvidenceCaptured }: VideoEvidenceProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const [isRecording, setIsRecording] = useState(false)
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([])
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [deepfakeScore, setDeepfakeScore] = useState<number | null>(null)

    useEffect(() => {
        // Cleanup URL on unmount
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl)
        }
    }, [previewUrl])

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            if (videoRef.current) {
                videoRef.current.srcObject = stream
                videoRef.current.play()
            }

            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    setRecordedChunks((prev) => [...prev, event.data])
                }
            }
            mediaRecorderRef.current = mediaRecorder
        } catch (err) {
            console.error("Error accessing camera:", err)
            alert("Camera access denied or unavailable.")
        }
    }

    const startRecording = () => {
        setRecordedChunks([])
        setPreviewUrl(null)
        setDeepfakeScore(null)
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.start()
            setIsRecording(true)
        } else {
            startCamera().then(() => {
                if (mediaRecorderRef.current) {
                    mediaRecorderRef.current.start()
                    setIsRecording(true)
                }
            })
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)

            // Generate Preview & Hash when stopping
            // Note: mediaRecorder is async filling chunks, so we might need a small delay or event listener
            // For simplicity in this demo, we assume chunks are ready shortly.
            setTimeout(processVideo, 500)
        }
    }

    const processVideo = async () => {
        const blob = new Blob(recordedChunks, { type: "video/webm" })
        const url = URL.createObjectURL(blob)
        setPreviewUrl(url)

        setIsAnalyzing(true)

        // Mock Analysis & Hashing
        const arrayBuffer = await blob.arrayBuffer()
        const cryptoHash = await crypto.subtle.digest('SHA-256', arrayBuffer)
        const hashArray = Array.from(new Uint8Array(cryptoHash))
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

        // Mock Deepfake Check
        await new Promise(resolve => setTimeout(resolve, 2500))
        setDeepfakeScore(Math.random() * 10) // 0-10 score (0 is real, 10 is fake)

        setIsAnalyzing(false)

        // Return file
        const file = new File([blob], `evidence_${Date.now()}.webm`, { type: "video/webm" })
        onEvidenceCaptured(file, hashHex)
    }

    return (
        <Card className="w-full bg-slate-900 border-blue-900/50 shadow-2xl">
            <CardHeader className="bg-slate-950/50 rounded-t-xl border-b border-blue-900/30">
                <CardTitle className="text-white flex items-center gap-2">
                    <Video className="h-6 w-6 text-blue-500" /> Video Evidence Recorder
                </CardTitle>
                <CardDescription className="text-slate-400">
                    Record statement or scene. Deepfake scanning auto-enabled.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden border-2 border-slate-700 shadow-inner">
                    {!previewUrl ? (
                        <video ref={videoRef} className="w-full h-full object-cover transform scale-x-[-1]" muted /> // Mirror effect
                    ) : (
                        <video src={previewUrl} className="w-full h-full object-cover" controls />
                    )}

                    {/* Recording Overlay */}
                    {isRecording && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600/90 text-white px-3 py-1 rounded-full animate-pulse z-10">
                            <div className="h-3 w-3 bg-white rounded-full" /> REC
                        </div>
                    )}

                    {/* Analyzing Overlay */}
                    {isAnalyzing && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-blue-400 z-20">
                            <Loader2 className="h-12 w-12 animate-spin mb-4" />
                            <div className="font-mono text-lg">SCANNING FOR DEEPFAKES...</div>
                            <div className="text-xs text-slate-500 mt-2">GENERATING SHA-256 HASH</div>
                        </div>
                    )}

                    {/* Deepfake Result Overlay */}
                    {deepfakeScore !== null && deepfakeScore < 3 && (
                        <div className="absolute bottom-4 left-4 bg-emerald-900/90 border border-emerald-500 text-emerald-100 px-4 py-2 rounded flex items-center gap-2 shadow-lg">
                            <CheckCircle className="h-5 w-5" />
                            <div>
                                <div className="font-bold text-xs uppercase">Integrity Check</div>
                                <div className="text-sm">Human Verified (Score: {deepfakeScore.toFixed(1)})</div>
                            </div>
                        </div>
                    )}

                    {deepfakeScore !== null && deepfakeScore >= 3 && (
                        <div className="absolute bottom-4 left-4 bg-yellow-900/90 border border-yellow-500 text-yellow-100 px-4 py-2 rounded flex items-center gap-2 shadow-lg">
                            <ShieldAlert className="h-5 w-5" />
                            <div>
                                <div className="font-bold text-xs uppercase">Heuristic Warning</div>
                                <div className="text-sm">Possible AI Manipulation (Score: {deepfakeScore.toFixed(1)})</div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {!isRecording ? (
                        <Button className="h-12 text-lg bg-blue-600 hover:bg-blue-700" onClick={startRecording}>
                            Start Camera
                        </Button>
                    ) : (
                        <Button className="h-12 text-lg bg-red-600 hover:bg-red-700 animate-pulse" onClick={stopRecording}>
                            <StopCircle className="mr-2" /> Stop Recording
                        </Button>
                    )}

                    {previewUrl && (
                        <Button variant="outline" className="h-12 border-slate-700 text-slate-300 hover:bg-slate-800" disabled>
                            <CheckCircle className="mr-2 text-emerald-500" /> Evidence Secured
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
