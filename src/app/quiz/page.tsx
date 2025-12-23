"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Award, Download, RefreshCcw, Loader2 } from "lucide-react"
import { jsPDF } from "jspdf"
import { Header } from "@/components/header"

// Enhanced Question Bank (20 Questions as requested)
const QUESTIONS = [
    {
        id: 1,
        question: "You receive an SMS: 'Electricity Bill Unpaid. Power will be cut tonight. Call 98xxx'. What do you do?",
        options: [
            { id: "a", text: "Call the number immediately in panic.", isCorrect: false },
            { id: "b", text: "Ignore the SMS. Check exact status on official Electricity Board App/Website.", isCorrect: true },
            { id: "c", text: "Forward it to family members to warn them.", isCorrect: false }
        ]
    },
    {
        id: 2,
        question: "A 'Police Officer' video calls you on WhatsApp saying you are under 'Digital Arrest' for a package containing drugs.",
        options: [
            { id: "a", text: "Disconnect immediately. Police never conduct official interrogations via WhatsApp Video.", isCorrect: true },
            { id: "b", text: "Apologize and ask how to pay the 'bail money' to avoid arrest.", isCorrect: false },
            { id: "c", text: "Download the 'Skype' app as they request to continue the investigation.", isCorrect: false }
        ]
    },
    {
        id: 3,
        question: "Which of these is the Strongest Password?",
        options: [
            { id: "a", text: "Password@123", isCorrect: false },
            { id: "b", text: "Rahul1990", isCorrect: false },
            { id: "c", text: "T#runc@te!77$PlAn", isCorrect: true }
        ]
    },
    {
        id: 4,
        question: "You are selling a sofa on OLX. The buyer sends a QR code saying 'Scan to receive payment'.",
        options: [
            { id: "a", text: "Scan it quickly to get the money.", isCorrect: false },
            { id: "b", text: "Refuse. QR codes are ONLY for SENDING money, never for receiving.", isCorrect: true },
            { id: "c", text: "Ask them to send a screenshot of the QR code.", isCorrect: false }
        ]
    },
    {
        id: 5,
        question: "A friend on Instagram asks for 'Urgent help' and requests you to receive a link/OTP for them.",
        options: [
            { id: "a", text: "Help them out, they are a close friend.", isCorrect: false },
            { id: "b", text: "Call them on their phone number to verify if their account was hacked.", isCorrect: true },
            { id: "c", text: "Send the OTP but tell them to be careful.", isCorrect: false }
        ]
    },
    {
        id: 6,
        question: "You win a 'Lottery' of ₹5 Crores but need to pay ₹15,000 as 'Processing Fee' first.",
        options: [
            { id: "a", text: "Pay the fee, ₹15k is small compared to 5 Crores.", isCorrect: false },
            { id: "b", text: "Ignore. Legitimate lotteries never ask for fees upfront.", isCorrect: true },
            { id: "c", text: "Ask if they can deduct the fee from the winnings.", isCorrect: false } // Still risky to engage
        ]
    },
    {
        id: 7,
        question: "Which URL looks safe for SBI Bank?",
        options: [
            { id: "a", text: "http://sbi-kyc-verify.com", isCorrect: false },
            { id: "b", text: "https://www.onlinesbi.sbi", isCorrect: true },
            { id: "c", text: "http://192.168.1.1/sbi", isCorrect: false }
        ]
    },
    {
        id: 8,
        question: "What is Two-Factor Authentication (2FA)?",
        options: [
            { id: "a", text: "Using two different passwords for the same account.", isCorrect: false },
            { id: "b", text: "An extra layer of security (like OTP) beyond just a password.", isCorrect: true },
            { id: "c", text: "Logging in from two devices at once.", isCorrect: false }
        ]
    },
    {
        id: 9,
        question: "Your laptop screen shows a popup: 'VIRUS DETECTED! Call Microsoft Support'.",
        options: [
            { id: "a", text: "Call the number immediately to save your data.", isCorrect: false },
            { id: "b", text: "Force close the browser (Alt+F4). It is a fake Tech Support scam.", isCorrect: true },
            { id: "c", text: "Download the 'Antivirus' linked in the popup.", isCorrect: false }
        ]
    },
    {
        id: 10,
        question: "An unknown number adds you to a WhatsApp Group regarding 'Stock Tips' with 500% returns.",
        options: [
            { id: "a", text: "Invest a small amount to test it.", isCorrect: false },
            { id: "b", text: "Leave the group and Report it. High returns are a red flag for Investment Fraud.", isCorrect: true },
            { id: "c", text: "Observe for a few months.", isCorrect: false }
        ]
    },
    {
        id: 11,
        question: "Someone offers you a 'Part-time Job' liking YouTube videos for ₹5000/day.",
        options: [
            { id: "a", text: "Accept it, it's easy money.", isCorrect: false },
            { id: "b", text: "Block them. It's a 'Task Scam' designed to steal your money later.", isCorrect: true },
            { id: "c", text: "Give them your bank details for salary.", isCorrect: false }
        ]
    },
    {
        id: 12,
        question: "How can you verify if a UPI ID is correct?",
        options: [
            { id: "a", text: "Just send the money, it usually goes to the right person.", isCorrect: false },
            { id: "b", text: "Send ₹1 first to test, and verify the name shown by the app.", isCorrect: true },
            { id: "c", text: "Trust the name the other person told you over call.", isCorrect: false }
        ]
    },
    {
        id: 13,
        question: "Your child is playing a game and asks to buy a 'Skin' for ₹99.",
        options: [
            { id: "a", text: "Give them the credit card to enter details freely.", isCorrect: false },
            { id: "b", text: "Use Google Play parent controls/password to authorize only that specific purchase.", isCorrect: true },
            { id: "c", text: "Tell them to figure it out.", isCorrect: false }
        ]
    },
    {
        id: 14,
        question: "An email from 'Netflix' says 'Payment Failed, click here to update card'.",
        options: [
            { id: "a", text: "Hover over the link to see the real URL. If suspicious, go to Netflix app manually.", isCorrect: true },
            { id: "b", text: "Click quickly to avoid losing your subscription.", isCorrect: false },
            { id: "c", text: "Reply to the email with your card details.", isCorrect: false }
        ]
    },
    {
        id: 15,
        question: "What is 'Juice Jacking'?",
        options: [
            { id: "a", text: "Stealing fruit juice.", isCorrect: false },
            { id: "b", text: "Stealing data from your phone when you charge it at a public USB station.", isCorrect: true },
            { id: "c", text: "Overcharging a battery.", isCorrect: false }
        ]
    },
    {
        id: 16,
        question: "Govt officials (Income Tax, Police) communicate primarily via...",
        options: [
            { id: "a", text: "WhatsApp and Telegram.", isCorrect: false },
            { id: "b", text: "Official Post or Emails from .gov.in domains.", isCorrect: true },
            { id: "c", text: "Personal Gmail accounts.", isCorrect: false }
        ]
    },
    {
        id: 17,
        question: "You want to download the Aadhaar App (mAadhaar). Where do you get it?",
        options: [
            { id: "a", text: "Search on Google and click the first ad.", isCorrect: false },
            { id: "b", text: "Official Google Play Store / Apple App Store, checking publisher is UIDAI.", isCorrect: true },
            { id: "c", text: "A link sent by a friend on SMS.", isCorrect: false }
        ]
    },
    {
        id: 18,
        question: "Is it safe to save your Debit Card CVV on merchant websites?",
        options: [
            { id: "a", text: "Yes, it saves time.", isCorrect: false },
            { id: "b", text: "No. Never save CVV. It is the final key to your funds.", isCorrect: true },
            { id: "c", text: "Only on international sites.", isCorrect: false }
        ]
    },
    {
        id: 19,
        question: "Someone claiming to be from 'Tech Support' asks you to install 'AnyDesk' or 'TeamViewer'.",
        options: [
            { id: "a", text: "Install it so they can fix your problem.", isCorrect: false },
            { id: "b", text: "Refuse. Remote access apps give them full control of your device to steal money.", isCorrect: true },
            { id: "c", text: "Install but hide your banking apps.", isCorrect: false }
        ]
    },
    {
        id: 20,
        question: "Your bank sends an OTP for a transaction you didn't initiate.",
        options: [
            { id: "a", text: "Share it with the person calling you just in case.", isCorrect: false },
            { id: "b", text: "Do nothing and ignore it.", isCorrect: false },
            { id: "c", text: "Immediately block your card via Net Banking and report to the bank.", isCorrect: true }
        ]
    }
]

export default function CyberLicenseQuiz() {
    const [current, setCurrent] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [score, setScore] = useState<number | null>(null)
    const [showCertificate, setShowCertificate] = useState(false)
    const [generating, setGenerating] = useState(false)
    const [name, setName] = useState("")

    const handleAnswer = (val: string) => {
        setAnswers({ ...answers, [QUESTIONS[current].id]: val })
    }

    const next = () => {
        if (current < QUESTIONS.length - 1) setCurrent(current + 1)
        else calculateScore()
    }

    const calculateScore = () => {
        let correct = 0
        const questionsMap = QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: q }), {} as any)

        QUESTIONS.forEach(q => {
            if (questionsMap[q.id].options.find((o: { id: string, isCorrect: boolean }) => o.id === answers[q.id])?.isCorrect) {
                correct++
            }
        })
        setScore(correct)
        if (correct >= 15) setShowCertificate(true) // Pass mark 15/20
    }

    const downloadCertificate = async () => {
        setGenerating(true)
        // Wait a bit for "Processing" effect
        await new Promise(r => setTimeout(r, 1000));

        const doc = new jsPDF({
            orientation: "landscape"
        })

        // Standard Certificate Design
        doc.setFillColor(255, 255, 255)
        doc.rect(0, 0, 297, 210, "F")

        // Border
        doc.setLineWidth(2)
        doc.setDrawColor(20, 83, 45) // Green-900
        doc.rect(10, 10, 277, 190)

        // Title
        doc.setFont("helvetica", "bold")
        doc.setFontSize(36)
        doc.setTextColor(22, 101, 52) // Green-700
        doc.text("CYBER LICENSE CERTIFICATE", 148, 50, { align: "center" })

        // Body
        doc.setFont("helvetica", "normal")
        doc.setFontSize(18)
        doc.setTextColor(60, 60, 60)
        doc.text("This official document certifies that", 148, 80, { align: "center" })

        doc.setFont("times", "bolditalic")
        doc.setFontSize(32)
        doc.setTextColor(0, 0, 0)
        doc.text(name || "Responsible Citizen", 148, 105, { align: "center" })

        doc.setLineWidth(0.5)
        doc.line(70, 108, 226, 108) // Underline name

        doc.setFont("helvetica", "normal")
        doc.setFontSize(18)
        doc.setTextColor(60, 60, 60)
        doc.text(`Has passed the Cyber Safety Exam with a score of ${score}/${QUESTIONS.length}`, 148, 130, { align: "center" })

        // Footer
        doc.setFontSize(14)
        doc.setTextColor(100, 100, 100)
        doc.text(`Issued On: ${new Date().toLocaleDateString()}`, 60, 170)
        doc.text("CyberSuraksha Authority", 220, 170, { align: "right" })

        // Seal attempt (simple circle)
        doc.setDrawColor(180, 83, 9) // Orange
        doc.setLineWidth(2)
        doc.circle(148, 165, 15)
        doc.setFontSize(8)
        doc.setTextColor(180, 83, 9)
        doc.text("VERIFIED", 148, 166, { align: "center" })
        doc.text("SECURE", 148, 172, { align: "center" })

        doc.save("CyberLicense.pdf")
        setGenerating(false)
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-3xl">
                {!showCertificate && score === null ? (
                    // QUIZ MODE
                    <Card className="glassy border-t-4 border-t-primary shadow-xl">
                        <CardHeader className="bg-slate-100 dark:bg-slate-900 rounded-t-lg">
                            <CardTitle className="flex justify-between items-center text-xl">
                                <span>🛡️ Cyber License Exam</span>
                                <span className="bg-primary px-3 py-1 rounded-full text-white text-sm">
                                    Q {current + 1} / {QUESTIONS.length}
                                </span>
                            </CardTitle>
                            <CardDescription>
                                Answer at least 15 correct to earn your certificate.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8 p-6">
                            <div className="text-xl font-medium leading-relaxed">
                                {QUESTIONS[current].question}
                            </div>
                            <RadioGroup value={answers[QUESTIONS[current].id]} onValueChange={handleAnswer} className="space-y-4">
                                {QUESTIONS[current].options.map(opt => (
                                    <div key={opt.id} className={`flex items-start space-x-3 border-2 p-4 rounded-xl transition-all cursor-pointer ${answers[QUESTIONS[current].id] === opt.id
                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                            : 'border-transparent bg-white dark:bg-slate-800 hover:border-slate-300'
                                        }`}>
                                        <RadioGroupItem value={opt.id} id={opt.id} className="mt-1" />
                                        <Label htmlFor={opt.id} className="flex-1 cursor-pointer font-normal text-base leading-snug">
                                            {opt.text}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </CardContent>
                        <CardFooter className="flex justify-between bg-slate-50 dark:bg-slate-900/50 p-6 rounded-b-lg border-t">
                            {current > 0 ? (
                                <Button variant="outline" onClick={() => setCurrent(c => c - 1)}>Previous</Button>
                            ) : <div></div>}
                            <Button className="pl-8 pr-8 text-lg" onClick={next} disabled={!answers[QUESTIONS[current].id]}>
                                {current === QUESTIONS.length - 1 ? "Submit Exam" : "Next Question"}
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                    // RESULT MODE
                    <Card className={`glassy border-t-8 shadow-2xl ${score! >= 15 ? 'border-t-green-500' : 'border-t-red-500'}`}>
                        <CardHeader className="text-center pb-2">
                            <div className={`mx-auto p-6 rounded-full w-24 h-24 flex items-center justify-center mb-6 shadow-inner ${score! >= 15 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                {score! >= 15 ? <Award className="h-12 w-12" /> : <RefreshCcw className="h-12 w-12" />}
                            </div>
                            <CardTitle className="text-3xl font-black mb-2">
                                {score! >= 15 ? "YOU PASSED!" : "EXAM FAILED"}
                            </CardTitle>
                            <CardDescription className="text-lg">
                                You scored <span className="font-bold text-foreground">{score}</span> out of {QUESTIONS.length}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6 max-w-md mx-auto">
                            {score! >= 15 ? (
                                <div className="space-y-4">
                                    <p className="text-center text-muted-foreground">
                                        Congratulations! You have demonstrated excellent knowledge of cyber safety. Enter your name below to generate your official license.
                                    </p>
                                    <div className="space-y-2">
                                        <Label>Full Name for Certificate</Label>
                                        <input
                                            className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-lg font-bold shadow-sm transition-colors placeholder:font-normal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                            placeholder="e.g. Rahul Sharma"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <p className="text-center text-muted-foreground">
                                    You need at least 15 correct answers to pass. Please review the Safety Materials and try again.
                                </p>
                            )}
                        </CardContent>

                        <CardFooter className="flex justify-center gap-4 pb-8">
                            <Button onClick={() => window.location.reload()} variant="outline" size="lg">
                                <RefreshCcw className="mr-2 h-4 w-4" /> Retake Exam
                            </Button>

                            {score! >= 15 && (
                                <Button
                                    onClick={downloadCertificate}
                                    size="lg"
                                    disabled={!name || generating}
                                    className="bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-500/30"
                                >
                                    {generating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                                    Download License
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                )}
            </main>
        </div>
    )
}
