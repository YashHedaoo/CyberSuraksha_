"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, Info, RefreshCw, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

// --- EXTENSIVE QUESTION BANK (20 Real-World Scenarios) ---
const QUESTIONS = [
    {
        id: 1,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=SMS:+Your+SBI+Account+Blocked!+Update+KYC+at+http://sbi-kyc-update.com",
        text: "You receive an SMS claiming your SBI account is blocked. The link says 'sbi-kyc-update.com'.",
        explanation: "Banks never ask for KYC updates via SMS links. The URL 'sbi-kyc-update.com' is fake; the official site is 'sbi.co.in'.",
        difficulty: "Easy"
    },
    {
        id: 2,
        type: "safe",
        image: "https://placehold.co/600x400/png?text=Email+from+no-reply@amazon.in+Order+Confirmation",
        text: "An email from 'no-reply@amazon.in' confirming your recent order. You can view it in 'Your Orders' on the app.",
        explanation: "This is likely safe. The domain is correct (@amazon.in) and it directs you to check the official app rather than clicking a suspicious link.",
        difficulty: "Easy"
    },
    {
        id: 3,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=WhatsApp:+Part-time+Job+Offer+Rs+5000/day",
        text: "A WhatsApp message from an unknown number offering a 'Part-time Job' liking YouTube videos for ₹5,000/day.",
        explanation: "This is a classic 'Task Scam'. No legitimate company pays huge sums for liking videos via casual WhatsApp messages.",
        difficulty: "Medium"
    },
    {
        id: 4,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=PhonePe+Cashback+Rs+2000+Enter+PIN+to+Receive",
        text: "A notification says 'You received ₹2,000 Cashback!'. When you tap, it asks for your UPI PIN to 'Receive' the money.",
        explanation: "You NEVER need to enter a UPI PIN to RECEIVE money. PIN is only for SENDING money. This is a scam.",
        difficulty: "Medium"
    },
    {
        id: 5,
        type: "safe",
        image: "https://placehold.co/600x400/png?text=IT+Dept+SMS:+Filing+Deadline+Reminder",
        text: "An SMS from 'BP-ITDEPT' reminding you of the tax filing deadline. No links, just a reminder.",
        explanation: "Government alerts often come from header IDs (like BP-ITDEPT). Since it has no malicious link and asks for nothing, it's a safe informational alert.",
        difficulty: "Hard"
    },
    {
        id: 6,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=Customs+Official:+Your+Parcel+Stuck+Pay+Fine",
        text: "A call from a 'Customs Officer' claiming illegal drugs were found in a parcel addressed to you. They demand a Skype call.",
        explanation: "This is the 'Digital Arrest' scam. Real police/customs never conduct investigations over Skype video calls.",
        difficulty: "Hard"
    },
    {
        id: 7,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=Electricity+Bill+Unpaid+Power+Cut+Tonight",
        text: "SMS: 'Dear User, your electricity will be cut at 9:30 PM due to unpaid bill update. Call 98XXX-XXXXX immediately.'",
        explanation: "Electricity boards do not send threats from personal mobile numbers. They would send a formal notice.",
        difficulty: "Easy"
    },
    {
        id: 8,
        type: "safe",
        image: "https://placehold.co/600x400/png?text=Google+Alert:+New+Sign-in+from+Windows",
        text: "Google Security Alert email: 'New sign-in on Windows'. You just logged in on a new PC.",
        explanation: "This is a legitimate security feature from Google triggered by your action.",
        difficulty: "Easy"
    },
    {
        id: 9,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=Instagram+DM:+Vote+for+me+in+contest",
        text: "A friend DMs you on Instagram: 'Hey, I'm stuck out of my account. Can you receive a link for me and screenshot it?'",
        explanation: "This is an Account Takeover scam. The link is actually a 'Password Reset' link for YOUR account.",
        difficulty: "Medium"
    },
    {
        id: 10,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=OLX+Buyer:+I+will+send+QR+code+scan+to+get+money",
        text: "You are selling a sofa on OLX. The buyer sends a QR code and says 'Scan this to receive payment'.",
        explanation: "Scanning a QR code sends money OUT of your account. You never scan a QR to receive money.",
        difficulty: "Medium"
    },
    {
        id: 11,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=URL:www.netflix-subscription-renew.com",
        text: "Email: 'Your Netflix Membership is on hold'. Link: www.netflix-subscription-renew.com",
        explanation: "Fake domain. Official Netflix domain is just 'netflix.com'.",
        difficulty: "Easy"
    },
    {
        id: 12,
        type: "safe",
        image: "https://placehold.co/600x400/png?text=WhatsApp+Security+Code+Changed",
        text: "WhatsApp chat notification: 'Security code with Rahul changed'.",
        explanation: "This happens automatically when a contact reinstalls WhatsApp or changes phones. Safe.",
        difficulty: "Medium"
    },
    {
        id: 13,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=Telegram+Investment+Group+Double+Money",
        text: "Added to a Telegram group 'Crypto Whale Pumps'. Admin claims 'Invest ₹10k, get ₹30k in 2 hours'.",
        explanation: "Classic 'Pig Butchering' or Investment Scam. Unrealistic returns are always a red flag.",
        difficulty: "Medium"
    },
    {
        id: 14,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=Facebook+Ad:+Ratan+Tata+giving+free+cars",
        text: "Facebook Ad: 'Ratan Tata Foundation giving free Tata Nexon to first 500 clickers. Register now for ₹99.'",
        explanation: "Fake giveaway scam using a celebrity's name. They steal the registration fee and data.",
        difficulty: "Easy"
    },
    {
        id: 15,
        type: "safe",
        image: "https://placehold.co/600x400/png?text=DigiLocker+OTP+SMS",
        text: "SMS with OTP from 'AD-DIGILK' while you are trying to download your Driving License.",
        explanation: "Legit OTP triggered by your user action.",
        difficulty: "Easy"
    },
    {
        id: 16,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=MacOS+Popup:+Virus+Detected+Call+Support",
        text: "A loud popup on your browser: 'YOUR COMPUTER IS INFECTED! Call Microsoft Support immediately at +1-800-XXX.'",
        explanation: "Tech Support Scam. Microsoft does not send browser popups asking you to call them.",
        difficulty: "Medium"
    },
    {
        id: 17,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=Dating+App:+Send+nudes+or+I+leak+chat",
        text: "Person from Dating App moves to video call, records you, then demands money to not 'upload video to Facebook'.",
        explanation: "Sextortion scam. Do not pay. Report immediately.",
        difficulty: "Hard"
    },
    {
        id: 18,
        type: "safe",
        image: "https://placehold.co/600x400/png?text=Uber+Ride+Safety+PIN",
        text: "Uber app notification: 'Your safety PIN for this ride is 4455'.",
        explanation: "Standard safety feature.",
        difficulty: "Easy"
    },
    {
        id: 19,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=Credit+Card+Limit+Increase+Call",
        text: "Caller: 'We are increasing your credit limit to 5 Lakhs. Just give card number and expiry to verify.'",
        explanation: "Bank officials never ask for full card details or CVV to increase limits.",
        difficulty: "Easy"
    },
    {
        id: 20,
        type: "scam",
        image: "https://placehold.co/600x400/png?text=T-Mobile+SIM+Swap+Alert",
        text: "You suddenly lose network signal. Then get an email that 'SIM card updated successfully'. You didn't request this.",
        explanation: "SIM Swap attack. Hackers have stolen your number to bypass OTPs.",
        difficulty: "Hard"
    }
];

export default function PhishingDojoPage() {
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [streak, setStreak] = useState(0)
    const [lives, setLives] = useState(3)
    const [gameState, setGameState] = useState<'intro' | 'playing' | 'gameover' | 'victory'>('intro')
    const [feedback, setFeedback] = useState<{ result: 'correct' | 'wrong', message: string } | null>(null)

    const { width, height } = useWindowSize()

    const currentQ = QUESTIONS[index]
    const progress = ((index) / QUESTIONS.length) * 100

    const handleDecision = (decision: 'safe' | 'scam') => {
        const isCorrect = decision === currentQ.type

        if (isCorrect) {
            setScore(s => s + 100 + (streak * 10))
            setStreak(s => s + 1)
            setFeedback({ result: 'correct', message: "Good eye! " + currentQ.explanation })
        } else {
            setStreak(0)
            setLives(l => l - 1)
            setFeedback({ result: 'wrong', message: "Oops! " + currentQ.explanation })
        }
    }

    const nextQuestion = () => {
        setFeedback(null)
        if (lives <= 0) {
            setGameState('gameover')
            updateGlobalScore(score)
        } else if (index + 1 >= QUESTIONS.length) {
            setGameState('victory')
            updateGlobalScore(score + 1000) // Bonus
        } else {
            setIndex(prev => prev + 1)
        }
    }

    const updateGlobalScore = (newScore: number) => {
        // Persist score for dashboard widget
        const currentMax = parseInt(localStorage.getItem("dojo_score") || "0")
        if (newScore > currentMax) {
            localStorage.setItem("dojo_score", newScore.toString())
        }
    }

    const restart = () => {
        setIndex(0)
        setScore(0)
        setStreak(0)
        setLives(3)
        setFeedback(null)
        setGameState('playing')
    }

    // --- RENDER STATES ---

    if (gameState === 'intro') {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 text-white">
                <Card className="max-w-md w-full bg-slate-900 border-slate-800 text-center p-6 space-y-6">
                    <div className="text-6xl mb-4">🥋</div>
                    <h1 className="text-3xl font-black text-yellow-500">PHISHING DOJO</h1>
                    <p className="text-slate-400">Master the art of spotting scams.<br />Swipe LEFT for SCAM, RIGHT for SAFE.</p>

                    <div className="grid grid-cols-2 gap-4 text-sm font-mono text-slate-300">
                        <div className="bg-slate-800 p-3 rounded">20 Scenarios</div>
                        <div className="bg-slate-800 p-3 rounded">Real World</div>
                    </div>

                    <Button onClick={() => setGameState('playing')} className="w-full h-12 text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black">
                        ENTER DOJO
                    </Button>
                </Card>
            </div>
        )
    }

    if (gameState === 'gameover' || gameState === 'victory') {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 text-white relative overflow-hidden">
                {gameState === 'victory' && <Confetti width={width} height={height} numberOfPieces={200} />}

                <Card className="max-w-md w-full bg-slate-900 border-slate-800 text-center p-8 space-y-6 relative z-10">
                    <div className="text-6xl animate-bounce">
                        {gameState === 'victory' ? '🏆' : '💀'}
                    </div>
                    <h1 className="text-3xl font-black">
                        {gameState === 'victory' ? "CYBER MASTER!" : "SCAMMED!"}
                    </h1>
                    <div className="space-y-2">
                        <p className="text-sm text-slate-400">Final Score</p>
                        <p className="text-5xl font-mono text-blue-400">{score}</p>
                    </div>

                    <Button onClick={restart} variant="outline" className="w-full h-12 text-lg border-slate-700 hover:bg-slate-800">
                        <RefreshCw className="mr-2 h-5 w-5" /> Try Again
                    </Button>

                    <Button variant="ghost" className="w-full" asChild>
                        <a href="/dashboard">Back to Dashboard</a>
                    </Button>
                </Card>
            </div>
        )
    }

    // --- GAMEPLAY UI ---
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col p-4 max-w-lg mx-auto h-screen">
            {/* Header Stats */}
            <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm mb-4 border dark:border-slate-800">
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-bold uppercase">Score</span>
                    <span className="text-2xl font-mono font-bold text-blue-600">{score}</span>
                </div>
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <span key={i} className={`text-2xl transition-all ${i < lives ? 'opacity-100 scale-100' : 'opacity-20 grayscale scale-75'}`}>❤️</span>
                    ))}
                </div>
            </div>

            <Progress value={progress} className="h-2 mb-4" />

            {/* Main Card Area */}
            <div className="flex-1 relative perspective-1000 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {!feedback ? (
                        <motion.div
                            key={currentQ.id}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="w-full"
                        >
                            <Card className="overflow-hidden shadow-2xl border-2 dark:border-slate-700 h-full max-h-[60vh] flex flex-col">
                                <div className="bg-slate-200 dark:bg-slate-800 h-40 flex items-center justify-center shrink-0 relative overflow-hidden group">
                                    <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs z-10">Scenario {index + 1}/{QUESTIONS.length}</div>
                                    {/* Placeholder for complex image */}
                                    <div className="text-center p-4">
                                        <div className="bg-white dark:bg-black p-4 rounded shadow-inner font-mono text-xs text-left w-64 mx-auto break-all">
                                            {currentQ.text.substring(0, 80)}...
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6 flex-1 flex flex-col justify-center text-center space-y-4">
                                    <h3 className="text-xl font-bold leading-snug">{currentQ.text}</h3>
                                    <p className="text-sm text-muted-foreground bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                                        <Info className="inline h-4 w-4 mr-1 text-blue-500 mb-0.5" />
                                        Analyze the text/link closely.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`p-6 rounded-xl border-2 text-center shadow-xl ${feedback.result === 'correct' ? 'bg-green-50 border-green-500 text-green-900' : 'bg-red-50 border-red-500 text-red-900'}`}
                        >
                            <div className="text-6xl mb-4">{feedback.result === 'correct' ? '✅' : '❌'}</div>
                            <h2 className="text-2xl font-bold mb-2">{feedback.result === 'correct' ? 'CORRECT!' : 'WRONG!'}</h2>
                            <p className="text-lg leading-relaxed">{feedback.message}</p>

                            <Button onClick={nextQuestion} size="lg" className={`mt-8 w-full font-bold text-lg ${feedback.result === 'correct' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700 text-white'}`}>
                                {index + 1 >= QUESTIONS.length ? 'Finish Training' : 'Next Scenario'}
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Controls */}
            {!feedback && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <Button
                        variant="outline"
                        className="h-16 text-xl border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 bg-white dark:bg-slate-900 shadow-sm"
                        onClick={() => handleDecision('scam')}
                    >
                        <X className="mr-2 h-6 w-6" /> SCAM
                    </Button>
                    <Button
                        variant="outline"
                        className="h-16 text-xl border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 bg-white dark:bg-slate-900 shadow-sm"
                        onClick={() => handleDecision('safe')}
                    >
                        <Check className="mr-2 h-6 w-6" /> SAFE
                    </Button>
                </div>
            )}
        </div>
    )
}
