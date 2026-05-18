import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, ShieldCheck, TrendingUp } from "lucide-react"

export default function CSRPortal() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <header className="py-20 px-6 text-center bg-gradient-to-b from-blue-900/20 to-transparent">
                <h1 className="text-5xl font-bold mb-6">Corporate Social Responsibility</h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Partner with CyberSuraksha to build a digitally safe nation. Your CSR funds directly support cyber literacy and victim rehabilitation.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Partner With Us</Button>
                    <Button size="lg" variant="outline">Download Brochure</Button>
                </div>
            </header>

            <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <Card className="bg-slate-900 border-slate-800 p-8">
                    <Heart className="h-12 w-12 text-pink-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Victim Support Fund</h3>
                    <p className="text-slate-400">Directly aid financial fraud victims who cannot recover their lost savings.</p>
                </Card>
                <Card className="bg-slate-900 border-slate-800 p-8">
                    <ShieldCheck className="h-12 w-12 text-blue-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Cyber Labs</h3>
                    <p className="text-slate-400">Sponsor state-of-the-art forensic labs for rural police stations.</p>
                </Card>
                <Card className="bg-slate-900 border-slate-800 p-8">
                    <TrendingUp className="h-12 w-12 text-green-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Awareness Drives</h3>
                    <p className="text-slate-400">Fund mass awareness campaigns in schools and colleges across India.</p>
                </Card>
            </section>
        </div>
    )
}
