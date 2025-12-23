"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Check, X, ShieldCheck, AlertTriangle, Trophy, RotateCcw, ChevronRight } from "lucide-react"

// --- GAME DATA ---
const SCENARIOS = [
    {
        id: 1,
        text: "Your SBI account is blocked! Click here to update KYC immediately: http://bit.ly/sbi-kyc-update",
        type: "scam",
        explanation: "Banks never send shortened links (bit.ly) for KYC. Always visit the official branch or website.",
        sender: "SMS: +91 98765..."
    },
    {
        id: 2,
        text: "Dear Customer, your ₹5,000 transaction at Amazon was successful. If not done by you, call 1800-123-4567.",
        type: "safe",
        explanation: "This is a legitimate transaction alert. It provides a toll-free number but NO suspicious links.",
        sender: "SMS: AX-HDFCBK"
    },
    {
        id: 3,
        text: "Congratulations! You won a iPhone 15 in the Jio Lucky Draw. Pay ₹999 tax to claim.",
        type: "scam",
        explanation: "You never have to pay money to receive a prize. This fits the 'Advance Fee Fraud' pattern.",
        sender: "WhatsApp: Unknown"
    },
    {
        id: 4,
        text: "Police Notice: You have been caught watching illegal content. Your device is locked. Pay fine.",
        type: "scam",
        explanation: "This is a 'Pop-up Scam'. Police do not lock browsers or ask for online fines via pop-ups.",
        sender: "Browser Pop-up"
    },
    {
        id: 5,
        text: "OTP for your Aadhaar verification is 4532. Do not share this with anyone.",
        type: "safe",
        explanation: "Standard OTP message. It explicitly warns you NOT to share it.",
        sender: "SMS: AD-UIDAI"
    }
]

export default function PhishingDojoPage() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [streak, setStreak] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

    // Framer Motion Values for Swipe
    const x = useMotionValue(0)
    const rotate = useTransform(x, [-200, 200], [-30, 30])
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

    // Background color change based on swipe direction
    const bg = useTransform(x, [-200, 0, 200], ["rgba(239, 68, 68, 0.2)", "rgba(0,0,0,0)", "rgba(34, 197, 94, 0.2)"])

    const handleSwipe = (direction: 'left' | 'right') => {
        const currentCard = SCENARIOS[currentIndex]
        const isSafe = currentCard.type === 'safe'

        // Right = "Trust/Safe", Left = "Distrust/Scam"
        const userChoice = direction === 'right' ? 'safe' : 'scam'
        const isCorrect = userChoice === currentCard.type

        if (isCorrect) {
            setScore(prev => prev + 100)
            setStreak(prev => prev + 1)
            setFeedback('correct')
        } else {
            setStreak(0)
            setFeedback('wrong')
        }

        setTimeout(() => {
            if (currentIndex + 1 >= SCENARIOS.length) {
                setGameOver(true)
            } else {
                setCurrentIndex(prev => prev + 1)
                setFeedback(null)
                x.set(0)
            }
        }, 1000)
    }

    const resetGame = () => {
        setCurrentIndex(0)
        setScore(0)
        setStreak(0)
        setGameOver(false)
        setFeedback(null)
    }

    // --- GAME OVER SCREEN ---
    if (gameOver) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
                <Card className="w-full max-w-md bg-slate-800 border-slate-700 text-center p-8 animate-in zoom-in">
                    <div className="mx-auto bg-yellow-500/20 p-6 rounded-full w-32 h-32 flex items-center justify-center mb-6">
                        <Trophy className="h-16 w-16 text-yellow-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Training Complete!</h1>
                    <p className="text-slate-400 mb-6">You earned a new badge.</p>

                    <div className="space-y-4 mb-8">
                        <div className="bg-slate-700 p-4 rounded-lg flex justify-between items-center">
                            <span className="text-slate-300">Final Score</span>
                            <span className="text-2xl font-bold text-white">{score} XP</span>
                        </div>
                        <div className="bg-slate-700 p-4 rounded-lg flex justify-between items-center">
                            <span className="text-slate-300">Accuracy</span>
                            <span className="text-2xl font-bold text-green-400">
                                {Math.round((score / (SCENARIOS.length * 100)) * 100)}%
                            </span>
                        </div>
                    </div>

                    <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 gap-2" onClick={resetGame}>
                        <RotateCcw className="h-5 w-5" /> Play Again
                    </Button>
                </Card>
            </div>
        )
    }

    // --- GAME SCREEN ---
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 overflow-hidden relative">
            <motion.div style={{ backgroundColor: bg }} className="absolute inset-0 z-0" />

            {/* Header */}
            <div className="w-full max-w-md flex justify-between items-center mb-8 z-10 glass-nav p-4 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800">
                <div className="flex flex-col">
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Cyber License</span>
                    <span className="text-xl font-bold text-white">Lvl 1 Rookie</span>
                </div>
                <div className="text-right">
                    <span className="block text-2xl font-mono font-bold text-yellow-500">{score}</span>
                    <span className="text-xs text-slate-400">XP Points</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md mb-6 z-10">
                <Progress value={(currentIndex / SCENARIOS.length) * 100} className="h-2 bg-slate-800" />
            </div>

            {/* Card Area */}
            <div className="relative w-full max-w-md h-[400px] z-10">
                <AnimatePresence>
                    {!feedback ? (
                        <motion.div
                            key={currentIndex}
                            style={{ x, rotate, opacity }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (offset.x > 100) handleSwipe('right')
                                else if (offset.x < -100) handleSwipe('left')
                            }}
                            className="absolute inset-0 cursor-grab active:cursor-grabbing"
                        >
                            <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-2xl overflow-hidden flex flex-col">
                                <div className="h-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
                                <CardContent className="flex-1 p-6 flex flex-col justify-center text-center space-y-6">
                                    <Badge variant="outline" className="w-fit mx-auto">{SCENARIOS[currentIndex].sender}</Badge>
                                    <p className="text-xl font-medium leading-relaxed">
                                        "{SCENARIOS[currentIndex].text}"
                                    </p>
                                    <p className="text-sm text-muted-foreground animate-pulse">Is this Safe or a Scam?</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`absolute inset-0 rounded-2xl flex items-center justify-center p-6 text-center ${feedback === 'correct' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                }`}
                        >
                            <div>
                                {feedback === 'correct' ? <Check className="h-20 w-20 mx-auto mb-4" /> : <X className="h-20 w-20 mx-auto mb-4" />}
                                <h2 className="text-3xl font-bold mb-2">{feedback === 'correct' ? 'Correct!' : 'Wrong!'}</h2>
                                <p className="opacity-90">{SCENARIOS[currentIndex].explanation}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="w-full max-w-md grid grid-cols-2 gap-4 mt-8 z-10">
                <Button
                    variant="outline"
                    className="h-16 text-lg border-red-500/50 text-red-500 hover:bg-red-950 hover:text-red-400 gap-2"
                    onClick={() => handleSwipe('left')}
                    disabled={!!feedback}
                >
                    <AlertTriangle /> Scam
                </Button>
                <Button
                    variant="outline"
                    className="h-16 text-lg border-green-500/50 text-green-500 hover:bg-green-950 hover:text-green-400 gap-2"
                    onClick={() => handleSwipe('right')}
                    disabled={!!feedback}
                >
                    Safe <ShieldCheck />
                </Button>
            </div>

            <p className="mt-6 text-sm text-slate-500 z-10 flex items-center gap-1">
                <ChevronRight className="h-4 w-4" /> Swipe Cards or use Buttons
            </p>
        </div>
    )
}
