"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Award, Download, RefreshCcw } from "lucide-react"
import { jsPDF } from "jspdf"
import { Header } from "@/components/header"

const QUESTIONS = [
    {
        id: 1,
        question: "You receive an SMS: 'Electricity Bill Unpaid. Power will be cut tonight. Call 98xxx'. What do you do?",
        options: [
            { id: "a", text: "Call the number immediately in panic.", isCorrect: false },
            { id: "b", text: "Ignore the SMS and check exact Status on official Electricity Board App.", isCorrect: true },
            { id: "c", text: "Forward it to family members.", isCorrect: false }
        ]
    },
    {
        id: 2,
        question: "A 'Police Officer' video calls you on WhatsApp saying you are under 'Digital Arrest'.",
        options: [
            { id: "a", text: "Disconnect immediately. Police never do official inquiry via WhatsApp Video.", isCorrect: true },
            { id: "b", text: "Apologize and pay the 'bail money' they ask for.", isCorrect: false },
            { id: "c", text: "Show them your Aadhaar card to prove innocence.", isCorrect: false }
        ]
    },
    {
        id: 3,
        question: "Which of these is the safest password?",
        options: [
            { id: "a", text: "Password@123", isCorrect: false },
            { id: "b", text: "Rahul1990", isCorrect: false },
            { id: "c", text: "T#runc@te!77$PlAn", isCorrect: true }
        ]
    }
]

export default function CyberLicenseQuiz() {
    const [current, setCurrent] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [score, setScore] = useState<number | null>(null)
    const [showCertificate, setShowCertificate] = useState(false)

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
        if (correct === QUESTIONS.length) setShowCertificate(true)
    }

    const downloadCertificate = () => {
        const doc = new jsPDF({
            orientation: "landscape"
        })

        // Simple Certificate Design
        doc.setFillColor(240, 240, 240)
        doc.rect(0, 0, 297, 210, "F")

        doc.setLineWidth(5)
        doc.setDrawColor(37, 99, 235) // Blue border
        doc.rect(10, 10, 277, 190)

        doc.setFontSize(40)
        doc.setTextColor(37, 99, 235)
        doc.text("CERTIFICATE OF ACHIEVEMENT", 148, 50, { align: "center" })

        doc.setFontSize(20)
        doc.setTextColor(50, 50, 50)
        doc.text("This certifies that", 148, 80, { align: "center" })

        doc.setFontSize(30)
        doc.setFont("helvetica", "bold")
        doc.text("Responsible Citizen", 148, 100, { align: "center" }) // Ideally User Name

        doc.setFontSize(20)
        doc.setFont("helvetica", "normal")
        doc.text("Has successfully completed the", 148, 120, { align: "center" })
        doc.text("CyberSuraksha Digital Literacy Module", 148, 135, { align: "center" })

        doc.setFontSize(15)
        doc.text(`Issued: ${new Date().toLocaleDateString()}`, 148, 160, { align: "center" })
        doc.text("Authorized by CyberSuraksha Initiative", 148, 170, { align: "center" })

        doc.save("CyberSuraksha_Certificate.pdf")
    }

    // Helper to access options easier
    const questionsMap = QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: q }), {} as any)

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Header />
            <main className="container mx-auto px-4 py-10 max-w-2xl">
                {!showCertificate ? (
                    <Card className="glassy border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                <span>Cyber License Exam</span>
                                <span className="text-sm font-normal text-muted-foreground">Q {current + 1} / {QUESTIONS.length}</span>
                            </CardTitle>
                            <CardDescription>Score 100% to earn your Verified Citizen Badge.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-lg font-medium">{QUESTIONS[current].question}</div>
                            <RadioGroup value={answers[QUESTIONS[current].id]} onValueChange={handleAnswer}>
                                {QUESTIONS[current].options.map(opt => (
                                    <div key={opt.id} className="flex items-center space-x-2 border p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                        <RadioGroupItem value={opt.id} id={opt.id} />
                                        <Label htmlFor={opt.id} className="flex-1 cursor-pointer">{opt.text}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button onClick={next} disabled={!answers[QUESTIONS[current].id]}>
                                {current === QUESTIONS.length - 1 ? "Finish Exam" : "Next Question"}
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <Card className="glassy border-t-4 border-t-green-500 bg-green-50/50 dark:bg-green-900/10">
                        <CardHeader className="text-center">
                            <div className="mx-auto bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                                <Award className="h-10 w-10 text-green-600" />
                            </div>
                            <CardTitle className="text-3xl text-green-700 dark:text-green-400">Congratulations!</CardTitle>
                            <CardDescription>You are now a Certified Cyber Safe Citizen.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <p className="text-lg">You scored {score}/{QUESTIONS.length}!</p>
                            <div className="p-8 border-4 border-double border-orange-300 rounded-lg bg-white dark:bg-slate-900 shadow-xl max-w-sm mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-2">Official Credential</div>
                                <div className="font-serif text-2xl font-bold mb-1">Cyber License</div>
                                <div className="text-sm text-muted-foreground mb-4">CyberSuraksha Authority</div>
                                <Award className="h-16 w-16 text-orange-400 mx-auto opacity-50" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center gap-4">
                            <Button onClick={() => window.location.reload()} variant="outline">
                                <RefreshCcw className="mr-2 h-4 w-4" /> Retry
                            </Button>
                            <Button onClick={downloadCertificate} className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/20">
                                <Download className="mr-2 h-4 w-4" /> Download PDF
                            </Button>
                        </CardFooter>
                    </Card>
                )}
            </main>
        </div>
    )
}
