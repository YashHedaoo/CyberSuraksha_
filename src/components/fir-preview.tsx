"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Eraser, PenTool } from "lucide-react"

interface FIRPreviewProps {
    data: {
        title: string
        description: string
        category: string
        location: string
        date: string
    }
    onSigned: (signatureData: string) => void
    onCancel: () => void
}

export function FIRPreview({ data, onSigned, onCancel }: FIRPreviewProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isSigned, setIsSigned] = useState(false)

    const startDrawing = (e: any) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        ctx.beginPath()
        ctx.moveTo(x, y)

        const moveHandler = (moveEvent: any) => {
            const moveX = moveEvent.clientX - rect.left
            const moveY = moveEvent.clientY - rect.top
            ctx.lineTo(moveX, moveY)
            ctx.stroke()
        }

        const upHandler = () => {
            document.removeEventListener("mousemove", moveHandler)
            document.removeEventListener("mouseup", upHandler)
            setIsSigned(true)
        }

        document.addEventListener("mousemove", moveHandler)
        document.addEventListener("mouseup", upHandler)
    }

    const clearSignature = () => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        setIsSigned(false)
    }

    const handleConfirm = () => {
        if (!isSigned) return
        const canvas = canvasRef.current
        const signatureData = canvas?.toDataURL() || ""
        onSigned(signatureData)
    }

    return (
        <div className="space-y-6 max-h-[70vh] overflow-y-auto p-4 border rounded-xl bg-white text-black">
            <div className="text-center border-b-2 border-black pb-4 mb-4">
                <h2 className="text-2xl font-black uppercase tracking-widest">First Information Report</h2>
                <p className="text-sm font-bold">(Under Section 154 Cr.P.C)</p>
                <div className="flex justify-between mt-2 text-xs font-mono">
                    <span>FORM I (Integrated)</span>
                    <span>POLICE STATION: CYBER CELL HQ</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm font-serif">
                <div className="border border-black p-2">
                    <span className="block font-bold bg-gray-200 px-1">Category of Offence</span>
                    <span className="block p-1">{data.category}</span>
                </div>
                <div className="border border-black p-2">
                    <span className="block font-bold bg-gray-200 px-1">Date & Time</span>
                    <span className="block p-1">{data.date} (Reported Now)</span>
                </div>
                <div className="col-span-2 border border-black p-2">
                    <span className="block font-bold bg-gray-200 px-1">Complainant Subject</span>
                    <span className="block p-1">{data.title}</span>
                </div>
                <div className="col-span-2 border border-black p-2 h-32 overflow-hidden">
                    <span className="block font-bold bg-gray-200 px-1">Description of Incident</span>
                    <p className="p-1 text-sm whitespace-pre-wrap">{data.description}</p>
                </div>
                <div className="col-span-2 border border-black p-2">
                    <span className="block font-bold bg-gray-200 px-1">Location / URL</span>
                    <p className="p-1">{data.location}</p>
                </div>
            </div>

            <div className="space-y-2 mt-6">
                <h3 className="font-bold border-b border-gray-400">Declaration & Signature</h3>
                <p className="text-xs text-gray-600">
                    I hereby declare that the information provided above is true to the best of my knowledge.
                    I understand that filing a false report is a punishable offence.
                </p>

                <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 bg-gray-50 flex flex-col items-center">
                    <canvas
                        ref={canvasRef}
                        width={400}
                        height={150}
                        className="bg-white border border-gray-300 cursor-crosshair touch-none"
                        onMouseDown={startDrawing}
                    />
                    <p className="text-xs text-gray-500 mt-1">Sign above using your mouse or finger (Aadhaar e-Sign Mock)</p>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={clearSignature} className="text-red-500 hover:text-red-700">
                        <Eraser className="w-4 h-4 mr-1" /> Clear
                    </Button>
                </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-black">
                <Button variant="outline" onClick={onCancel} className="flex-1 border-black text-black hover:bg-gray-100">
                    Edit Details
                </Button>
                <Button
                    onClick={handleConfirm}
                    disabled={!isSigned}
                    className="flex-1 bg-black text-white hover:bg-gray-800 disabled:opacity-50"
                >
                    <PenTool className="mr-2 h-4 w-4" /> e-Sign & Submit FIR
                </Button>
            </div>
        </div>
    )
}
