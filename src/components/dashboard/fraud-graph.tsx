"use client"

import { motion } from "framer-motion"

export function FraudGraph() {
    // Mock Nodes and Linkages
    const nodes = [
        { id: 1, x: 50, y: 50, type: "Mule" },
        { id: 2, x: 200, y: 100, type: "Attacker" },
        { id: 3, x: 100, y: 250, type: "Victim" },
        { id: 4, x: 300, y: 200, type: "Mule" },
    ]

    return (
        <div className="relative w-full h-[300px] bg-slate-950 rounded-xl border border-blue-900/50 p-4 overflow-hidden">
            <h3 className="text-blue-400 text-sm font-bold mb-4">MULE ACCOUNT NETWORK</h3>

            {/* Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.4" />
            </svg>

            {/* Nodes */}
            <div className="relative w-full h-full">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-[20%] left-[15%] w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-600 z-10"
                >
                    <span className="text-[10px] text-slate-300">MULE</span>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-[40%] left-[45%] w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center border-2 border-red-500 z-10 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                >
                    <span className="text-xs font-bold text-red-200">KINGPIN</span>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-[30%] right-[15%] w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-600 z-10"
                >
                    <span className="text-[10px] text-slate-300">MULE</span>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-[10%] left-[25%] w-10 h-10 bg-green-900/20 rounded-full flex items-center justify-center border border-green-500/50 z-10"
                >
                    <span className="text-[8px] text-green-400">Victim</span>
                </motion.div>
            </div>

        </div>
    )
}
