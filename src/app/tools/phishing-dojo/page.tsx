"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Send, ShieldAlert, ShieldCheck, Trophy, Volume2, VolumeX, AlertTriangle, User, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"
import Link from "next/link"
import { useLevel } from "@/context/level-context"
import { Progress } from "@/components/ui/progress"

// --- SCENARIO DATA ---
import { SCENARIO_BANK, Scenario } from "@/lib/dojo-scenarios"

export default function PhishingDojoPage() {
    const { addXp } = useLevel()
    const { width, height } = useWindowSize()
    const [gameState, setGameState] = useState<'intro' | 'playing' | 'gameover' | 'victory' | 'batch_complete'>('intro')
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0) // Global Index
    const [batchIndex, setBatchIndex] = useState(0) // Current batch (0-4)
    const [walletBalance, setWalletBalance] = useState(50000)
    const [messages, setMessages] = useState<{ id: number, text: string, sender: 'bot' | 'user' }[]>([])
    const [feedback, setFeedback] = useState<{ type: 'win' | 'loss', message: string, cost?: number } | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isTyping, setIsTyping] = useState(false)

    const BATCH_SIZE = 5
    const scenarios = SCENARIO_BANK
    const currentScenario = scenarios[currentScenarioIndex]
    const currentBatchStart = Math.floor(currentScenarioIndex / BATCH_SIZE) * BATCH_SIZE
    const currentBatchProgress = currentScenarioIndex - currentBatchStart

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages, isTyping])

    // Load initial scenario message
    useEffect(() => {
        if (gameState === 'playing' && !feedback && currentScenario) { // Added currentScenario check
            setIsTyping(true)
            const timeout = setTimeout(() => {
                setIsTyping(false)
                setMessages([{
                    id: Date.now(),
                    text: currentScenario.initialMessage,
                    sender: 'bot'
                }])
            }, 1000)
            return () => clearTimeout(timeout)
        }
    }, [gameState, currentScenarioIndex, feedback, currentScenario]) // Added currentScenario to dependencies

    const handleOptionSelect = (option: typeof SCENARIO_BANK[0]['options'][0]) => { // Changed type to SCENARIO_BANK
        // 1. Add User Message
        setMessages(prev => [...prev, { id: Date.now(), text: option.text, sender: 'user' }])

        // 2. Process Outcome
        if (option.outcome === 'safe') {
            setTimeout(() => {
                setFeedback({ type: 'win', message: option.feedback })
                addXp(20, `Dojo: ${currentScenario.sender.role} Scenario Passed`)
            }, 500)
        } else {
            setTimeout(() => {
                const lostAmount = option.cost || 1000
                setWalletBalance(prev => Math.max(0, prev - lostAmount))
                setFeedback({ type: 'loss', message: option.feedback, cost: lostAmount })
            }, 500)
        }
    }

    const nextScenario = () => {
        setFeedback(null)
        setMessages([])

        if (walletBalance <= 0) {
            setGameState('gameover')
            return
        }

        if (currentScenarioIndex + 1 >= scenarios.length) {
            setGameState('victory')
            addXp(200, "Dojo Grandmaster")
        } else if ((currentScenarioIndex + 1) % BATCH_SIZE === 0) {
            setGameState('batch_complete')
            addXp(50, `Completed Batch ${Math.floor(currentScenarioIndex / BATCH_SIZE) + 1}`)
        } else {
            setCurrentScenarioIndex(prev => prev + 1)
        }
    }

    const startNextBatch = () => {
        setCurrentScenarioIndex(prev => prev + 1)
        setFeedback(null)
        setMessages([])
        setGameState('playing')
    }

    const restartGame = () => {
        setWalletBalance(50000)
        setCurrentScenarioIndex(0)
        setBatchIndex(0) // Reset batch index on restart
        setFeedback(null)
        setMessages([])
        setGameState('playing')
    }

    if (gameState === 'intro') {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed text-white">
                <Card className="max-w-md w-full bg-slate-900 border-slate-700 shadow-2xl overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                        <div className="text-6xl animate-bounce">🥋</div>
                    </div>
                    <CardContent className="p-8 text-center space-y-6">
                        <h1 className="text-3xl font-black tracking-tight text-white">PHISHING DOJO 2.0</h1>
                        <p className="text-slate-300">
                            Enter the Cyber Defense Training to sharpen your instincts. <br />
                            You have <span className="text-green-400 font-bold">₹50,000</span> in your virtual wallet.
                            Defend your assets against live scam attempts.
                        </p>
                        <Button size="lg" className="w-full text-lg font-bold bg-purple-600 hover:bg-purple-700" onClick={() => setGameState('playing')}>
                            START DEFENSE TRAINING
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (gameState === 'gameover') {
        return (
            <div className="min-h-screen bg-red-950 flex items-center justify-center p-4 text-white text-center">
                <div className="space-y-6 animate-in zoom-in duration-300">
                    <div className="text-8xl">💸</div>
                    <h1 className="text-5xl font-black">BANKRUPT!</h1>
                    <p className="text-xl">You lost all your money to scammers.</p>
                    <Button variant="secondary" size="lg" onClick={restartGame}>Try Again</Button>
                    <div className="pt-4">
                        <Button variant="link" className="text-white/50" asChild><Link href="/">Exit to Safety</Link></Button>
                    </div>
                </div>
            </div>
        )
    }

    if (gameState === 'batch_complete') {
        return (
            <div className="min-h-screen bg-indigo-950 flex items-center justify-center p-4 text-white text-center">
                <Confetti width={width} height={height} numberOfPieces={100} recycle={false} />
                <div className="space-y-6 animate-in zoom-in duration-300">
                    <Trophy className="h-24 w-24 text-yellow-400 mx-auto" />
                    <h1 className="text-4xl font-black text-yellow-400">BATCH CLEARED!</h1>
                    <p className="text-xl">Wallet Balance: <span className="font-mono font-bold text-green-400">₹{walletBalance.toLocaleString('en-IN')}</span></p>
                    <p className="text-indigo-200">Get ready for the next wave of scammers.</p>
                    <Button className="bg-white text-indigo-900 hover:bg-slate-200 font-bold text-lg px-8" onClick={startNextBatch}>
                        Start Wave {Math.floor(currentScenarioIndex / BATCH_SIZE) + 1}
                    </Button>
                </div>
            </div>
        )
    }

    if (gameState === 'victory') {
        return (
            <div className="min-h-screen bg-green-950 flex items-center justify-center p-4 text-white text-center">
                <Confetti width={width} height={height} numberOfPieces={300} recycle={false} />
                <div className="space-y-6 animate-in zoom-in duration-300">
                    <Trophy className="h-32 w-32 text-yellow-400 mx-auto" />
                    <h1 className="text-5xl font-black text-yellow-400">MISSION SURVIVED!</h1>
                    <p className="text-2xl">Wallet Balance: <span className="font-mono font-bold">₹{walletBalance.toLocaleString('en-IN')}</span></p>
                    <p className="text-green-200">You spotted every scam correctly.</p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8" asChild>
                        <Link href="/profile">View Profile Badge</Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-md mx-auto h-screen bg-slate-100 flex flex-col relative shadow-2xl">
            {/* Header */}
            <div className="bg-slate-900 p-4 text-white flex items-center justify-between shadow-lg z-10">
                <div className="flex items-center gap-3">
                    <Link href="/"><ArrowLeft className="text-slate-400 hover:text-white" /></Link>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Avatar>
                                <AvatarImage src={currentScenario.sender.avatar} />
                                <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                            {currentScenario.sender.online && <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>}
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">{currentScenario.sender.name}</h3>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">{currentScenario.sender.role}</p>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase">Wallet</div>
                    <div className={`font-mono font-bold ${walletBalance < 20000 ? 'text-red-500 animate-pulse' : 'text-green-400'}`}>
                        ₹{walletBalance.toLocaleString('en-IN')}
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#e5ddd5] p-4 overflow-y-auto space-y-4 pb-32">
                {messages.map(msg => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] p-3 rounded-xl text-sm shadow-sm relative ${msg.sender === 'user'
                            ? 'bg-[#dcf8c6] text-black rounded-tr-none'
                            : 'bg-white text-black rounded-tl-none'
                            }`}>
                            {msg.text}
                            <span className="text-[10px] text-gray-400 block text-right mt-1">
                                {new Date(msg.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                        <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm flex gap-1">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </motion.div>
                )}
                <div ref={scrollRef} />
            </div>

            {/* Controls / Options */}
            <div className="bg-slate-50 border-t p-4 absolute bottom-0 w-full z-20">
                {!feedback ? (
                    <div className="grid grid-cols-1 gap-3">
                        {currentScenario.options.map((opt, i) => (
                            <Button
                                key={i}
                                variant="outline"
                                className="h-auto py-3 px-4 text-left justify-start whitespace-normal border-slate-300 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all font-medium"
                                onClick={() => handleOptionSelect(opt)}
                                disabled={isTyping}
                            >
                                <span className="mr-3 font-bold text-slate-400">{String.fromCharCode(65 + i)}</span>
                                {opt.text}
                            </Button>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={`p-4 rounded-xl text-center space-y-3 shadow-lg ${feedback.type === 'win' ? 'bg-green-100 border-2 border-green-500 text-green-900' : 'bg-red-100 border-2 border-red-500 text-red-900'}`}
                    >
                        <div className="font-black text-2xl uppercase flex items-center justify-center gap-2">
                            {feedback.type === 'win' ? <><ShieldCheck /> SCAM BLOCKED</> : <><AlertTriangle /> SCAMMED!</>}
                        </div>
                        <p className="font-medium text-sm">{feedback.message}</p>
                        {feedback.cost && (
                            <div className="text-xl font-bold text-red-600">
                                - ₹{feedback.cost.toLocaleString('en-IN')}
                            </div>
                        )}
                        <Button className={`w-full font-bold ${feedback.type === 'win' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`} onClick={nextScenario}>
                            Next Scenario
                        </Button>
                    </motion.div>
                )}
            </div>

            {/* Progress Bar Top */}
            <div className="absolute top-[72px] left-0 w-full h-1 bg-slate-200">
                <motion.div
                    className="h-full bg-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentBatchProgress) / BATCH_SIZE) * 100}%` }}
                />
            </div>
        </div>
    )
}

