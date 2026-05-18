"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Crosshair, AlertTriangle, ShieldAlert, Wifi } from "lucide-react"

type Threat = {
    id: number
    type: string
    distance: number // km
    angle: number // degrees (0-360) for visual placement
    severity: 'high' | 'medium' | 'low'
    time: string
}

export function LiveThreatMap() {
    const [location, setLocation] = useState<{ lat: number, lng: number } | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [threats, setThreats] = useState<Threat[]>([])
    const [scanning, setScanning] = useState(true)

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                    generateLocalThreats()
                },
                (err) => {
                    console.error("Geo Error:", err)
                    setError("Location access denied. Using triangulated estimate.")
                    // Fallback Location (Center of India / Default)
                    setLocation({ lat: 20.5937, lng: 78.9629 })
                    generateLocalThreats()
                }
            )
        } else {
            setError("Geolocation not supported.")
        }
    }, [])

    const generateLocalThreats = () => {
        // Simulate threats found nearby
        const types = ["UPI Fraud", "Fake KYC", "Phishing SMS", "Part-time Job Scam", "Digital Arrest Call"]
        const newThreats: Threat[] = []
        for (let i = 0; i < 6; i++) {
            newThreats.push({
                id: i,
                type: types[Math.floor(Math.random() * types.length)],
                distance: parseFloat((Math.random() * 5).toFixed(1)), // 0-5 km
                angle: Math.random() * 360,
                severity: Math.random() > 0.7 ? 'high' : 'medium',
                time: `${Math.floor(Math.random() * 59)}m ago`
            })
        }
        setThreats(newThreats)
    }

    return (
        <Card className="bg-slate-950 text-green-500 border-green-900/50 shadow-2xl relative overflow-hidden min-h-[500px]">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <CardContent className="p-6 relative z-10 h-full flex flex-col items-center justify-center">

                {/* HUD Header */}
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 animate-pulse" />
                        <span className="text-xs font-mono tracking-widest uppercase">LIVE_FEED // ENCRYPTED</span>
                    </div>
                    {location && (
                        <div className="text-[10px] font-mono text-green-400/70">
                            LAT: {location.lat.toFixed(4)} <br />
                            LNG: {location.lng.toFixed(4)}
                        </div>
                    )}
                </div>

                <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="border-green-500 text-green-500 bg-green-950/30 animate-pulse">
                        {scanning ? "SCANNING SECTOR..." : "SECTOR SECURE"}
                    </Badge>
                </div>

                {/* Radar Circle */}
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-2 border-green-800 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                    {/* Inner Circles */}
                    <div className="absolute w-[66%] h-[66%] border border-green-900 rounded-full" />
                    <div className="absolute w-[33%] h-[33%] border border-green-900 rounded-full" />

                    {/* Crosshairs */}
                    <div className="absolute w-full h-[1px] bg-green-900" />
                    <div className="absolute h-full w-[1px] bg-green-900" />

                    {/* Sweep Animation */}
                    <div className="absolute w-1/2 h-1/2 bg-gradient-to-tr from-transparent to-green-500/20 top-0 right-0 origin-bottom-left animate-[spin_4s_linear_infinite] rounded-tr-full"
                        style={{ borderLeft: '1px solid transparent', borderBottom: '1px solid transparent' }} />

                    {/* User Center */}
                    <div className="z-20 bg-green-500 h-3 w-3 rounded-full shadow-[0_0_10px_#22c55e]" />

                    {/* Threat Blips */}
                    {threats.map((threat) => {
                        // Calculate position based on distance (radius) and angle
                        // Map distance 0-5km to 0-50% of container width
                        const listSize = 5;
                        const radiusPercent = (threat.distance / listSize) * 45; // Max 45% to stay inside border
                        const x = 50 + radiusPercent * Math.cos(threat.angle * (Math.PI / 180));
                        const y = 50 + radiusPercent * Math.sin(threat.angle * (Math.PI / 180));

                        return (
                            <div
                                key={threat.id}
                                className="absolute group"
                                style={{ top: `${y}%`, left: `${x}%` }}
                            >
                                <div className={`h-3 w-3 rounded-full animate-ping absolute ${threat.severity === 'high' ? 'bg-red-500' : 'bg-orange-500'}`} />
                                <div className={`h-2 w-2 rounded-full relative z-10 cursor-pointer ${threat.severity === 'high' ? 'bg-red-500 shadow-[0_0_10px_red]' : 'bg-orange-500'}`} />

                                {/* Tooltip */}
                                <div className="hidden group-hover:block absolute bottom-4 left-1/2 -translate-x-1/2 w-48 bg-black/90 border border-green-500 p-2 text-xs text-green-400 z-50 pointer-events-none">
                                    <div className="font-bold text-white mb-1 uppercase bg-green-900/50 px-1">{threat.type}</div>
                                    <div>Distance: {threat.distance} km</div>
                                    <div>Time: {threat.time}</div>
                                    <div className={`font-bold mt-1 ${threat.severity === 'high' ? 'text-red-500' : 'text-orange-400'}`}>
                                        SEVERITY: {threat.severity.toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Footer Legend */}
                <div className="absolute bottom-4 w-full px-8 flex justify-between text-xs text-green-600 font-mono">
                    <div>[RANGE: 5KM]</div>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500" /> HIGH THREAT</span>
                        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-500" /> MED THREAT</span>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}
