"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from "react-hot-toast"
import { Radio, ShieldCheck, MapPin, Navigation } from "lucide-react"

interface Point {
    x: number;
    y: number;
}

interface Unit extends Point {
    id: string;
    status: 'idle' | 'moving' | 'busy';
    target?: Point;
}

interface Incident extends Point {
    id: string;
    type: string;
    active: boolean;
}

export function CrimeHeatmap() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [units, setUnits] = useState<Unit[]>([])
    const [incidents, setIncidents] = useState<Incident[]>([])
    const [selectedUnit, setSelectedUnit] = useState<string | null>(null)

    // Initialize Simulation Data
    useEffect(() => {
        // Init 5 Units
        setUnits(Array.from({ length: 5 }).map((_, i) => ({
            id: `U-${i + 1}`,
            x: 100 + Math.random() * 600,
            y: 100 + Math.random() * 200,
            status: 'idle'
        })))

        // Init Incidents
        setIncidents(Array.from({ length: 3 }).map((_, i) => ({
            id: `INC-${i + 1}`,
            x: Math.random() * 800,
            y: Math.random() * 400,
            type: ['DDoS', 'Fraud', 'Phishing'][i % 3],
            active: true
        })))
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number;

        const render = () => {
            canvas.width = canvas.parentElement?.clientWidth || 800
            canvas.height = 400

            // 1. Draw Dark Map Background (Grid Style)
            ctx.fillStyle = "#0f172a" // slate-950
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Grid Lines
            ctx.strokeStyle = "#1e293b" // slate-800
            ctx.lineWidth = 1
            for (let x = 0; x < canvas.width; x += 40) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += 40) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
            }

            // 2. Draw Incidents (Pulsing Red)
            const time = Date.now() / 1000
            incidents.forEach(inc => {
                if (!inc.active) return

                // Pulse Effect
                const radius = 10 + Math.sin(time * 5) * 5

                ctx.beginPath()
                ctx.arc(inc.x, inc.y, radius, 0, Math.PI * 2)
                ctx.fillStyle = "rgba(239, 68, 68, 0.4)" // Red-500 alpha
                ctx.fill()

                ctx.beginPath()
                ctx.arc(inc.x, inc.y, 6, 0, Math.PI * 2)
                ctx.fillStyle = "#ef4444" // Red-500
                ctx.fill()

                // Label
                ctx.fillStyle = "white"
                ctx.font = "10px monospace"
                ctx.fillText(inc.type, inc.x + 10, inc.y + 4)
            })

            // 3. Draw Units (Blue Dots) & Movement Logic
            units.forEach(unit => {
                // Move towards target if active
                if (unit.status === 'moving' && unit.target) {
                    const dx = unit.target.x - unit.x
                    const dy = unit.target.y - unit.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 2) {
                        unit.status = 'busy' // Arrived
                    } else {
                        unit.x += (dx / dist) * 1.5 // Speed
                        unit.y += (dy / dist) * 1.5
                    }
                }

                // Draw Link Line if moving
                if (unit.status === 'moving' && unit.target) {
                    ctx.beginPath()
                    ctx.moveTo(unit.x, unit.y)
                    ctx.lineTo(unit.target.x, unit.target.y)
                    ctx.strokeStyle = "rgba(59, 130, 246, 0.5)" // Blue
                    ctx.setLineDash([5, 5])
                    ctx.stroke()
                    ctx.setLineDash([])
                }

                // Draw Unit
                ctx.beginPath()
                ctx.arc(unit.x, unit.y, 8, 0, Math.PI * 2)
                ctx.fillStyle = selectedUnit === unit.id ? "#ffffff" : "#3b82f6" // White if selected, else Blue
                ctx.fill()

                // Ring for 'Busy'
                if (unit.status === 'busy') {
                    ctx.strokeStyle = "#22c55e" // Green
                    ctx.lineWidth = 2
                    ctx.stroke()
                }

                // ID Label
                ctx.fillStyle = "#94a3b8"
                ctx.fillText(unit.id, unit.x - 10, unit.y - 12)
            })

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => cancelAnimationFrame(animationFrameId)
    }, [units, incidents, selectedUnit])

    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const rect = canvasRef.current?.getBoundingClientRect()
        if (!rect) return
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Check if clicked an Incident
        const clickedIncident = incidents.find(i => Math.hypot(i.x - x, i.y - y) < 20)

        if (clickedIncident && selectedUnit) {
            // Dispatch Logic
            setUnits(prev => prev.map(u => {
                if (u.id === selectedUnit) {
                    return { ...u, status: 'moving', target: { x: clickedIncident.x, y: clickedIncident.y } }
                }
                return u
            }))
            toast.custom((t) => (
                <div className="bg-slate-900 border border-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-xl">
                    <Navigation className="w-4 h-4 text-blue-400" />
                    <div>
                        <div className="font-bold text-sm">Unit {selectedUnit} Dispatched</div>
                        <div className="text-xs text-slate-400">En route to {clickedIncident.id}</div>
                    </div>
                </div>
            ))
            setSelectedUnit(null) // Deselect
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    {units.map(u => (
                        <Badge
                            key={u.id}
                            onClick={() => setSelectedUnit(u.id)}
                            variant="outline"
                            className={`cursor-pointer transition-all ${selectedUnit === u.id ? 'bg-blue-600 text-white border-blue-500' :
                                    u.status === 'busy' ? 'bg-green-900/30 text-green-400 border-green-800' :
                                        'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                }`}
                        >
                            {u.status === 'moving' && <Navigation className="w-3 h-3 mr-1 animate-pulse" />}
                            {u.status === 'busy' && <ShieldCheck className="w-3 h-3 mr-1" />}
                            {u.id}
                        </Badge>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> PATROL</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> THREAT</span>
                </div>
            </div>

            <div className="relative w-full h-[400px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl group cursor-crosshair">
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur px-3 py-1 rounded-md text-xs text-blue-400 font-mono border border-blue-500/30 flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> TACTICAL OPS VIEW
                </div>
                {selectedUnit && (
                    <div className="absolute top-4 right-4 z-10 bg-blue-600 px-3 py-1 rounded-full text-xs text-white font-bold animate-pulse shadow-lg shadow-blue-500/50">
                        SELECT TARGET ON MAP
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    onClick={handleCanvasClick}
                />
            </div>
        </div>
    )
}

