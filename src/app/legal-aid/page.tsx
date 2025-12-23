"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Scale, Phone, Globe, User, MapPin, Info, BookOpen } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"

// REALISTIC BNS (Bharatiya Nyaya Sanhita) DATA MOCK
const BNS_LAWS = {
    financial: [
        { section: "BNS Section 318(4)", desc: "Cheating and dishonestly inducing delivery of property.", penalty: "Imprisonment up to 7 years + Fine" },
        { section: "IT Act Section 66D", desc: "Cheating by personation by using computer resource.", penalty: "Imprisonment up to 3 years + Fine ₹1 Lakh" }
    ],
    harassment: [
        { section: "BNS Section 79", desc: "Act intended to insult the modesty of a woman (Virtual/Physical).", penalty: "Imprisonment up to 3 years" },
        { section: "IT Act Section 67", desc: "Publishing or transmitting obscene material in electronic form.", penalty: "Imprisonment up to 5 years + Fine ₹10 Lakh" }
    ],
    identity: [
        { section: "BNS Section 319", desc: "Cheating by personation (Identity Theft).", penalty: "Imprisonment up to 5 years" },
        { section: "IT Act Section 66C", desc: "Identity Theft (Using password/signature of others).", penalty: "Imprisonment up to 3 years + Fine ₹1 Lakh" }
    ]
}

export default function LegalAidPage() {
    const { t } = useLanguage()
    const [category, setCategory] = useState("")

    const getLawyers = () => {
        if (category === "financial") {
            return [
                { name: "Adv. Rahul Sharma", spec: "Financial Fraud", exp: "12 Yrs", verified: true, loc: "Delhi High Court" },
                { name: "Legal Aid Clinic Delhi", spec: "Pro Bono (Free)", exp: "N/A", verified: true, loc: "Tis Hazari Courts" },
                { name: "Adv. Meera Desai", spec: "Cyber Banking Specialist", exp: "15 Yrs", verified: true, loc: "Mumbai" }
            ]
        }
        if (category === "harassment") {
            return [
                { name: "Adv. Priya Singh", spec: "Women's Safety", exp: "8 Yrs", verified: true, loc: "Bangalore" },
                { name: "NGO Shakti", spec: "Support & Counseling", exp: "20 Yrs", verified: true, loc: "National" }
            ]
        }
        if (category === "identity" || category === "crypto") {
            return [
                { name: "Adv. Vikram Malhotra", spec: "Data Privacy & Crypto", exp: "10 Yrs", verified: true, loc: "Gurgaon" }
            ]
        }
        return []
    }

    const laws = category ? (BNS_LAWS as any)[category] : []

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                    <Scale className="text-primary h-8 w-8" /> {t.tools.legalTitle}
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t.tools.legalDesc}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-200">
                    <Info className="h-4 w-4" /> Disclaimer: Information is for educational purposes. Consult a verified lawyer.
                </div>
            </div>

            <div className="max-w-xl mx-auto mb-12 space-y-6">
                <Card className="shadow-lg border-2 border-primary/10">
                    <CardContent className="pt-6">
                        <Label className="mb-2 block font-semibold">{t.tools.incidentType}</Label>
                        <Select onValueChange={setCategory}>
                            <SelectTrigger className="h-12 text-lg">
                                <SelectValue placeholder="Select Incident Type..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="financial">Financial Fraud / Bank Scam</SelectItem>
                                <SelectItem value="harassment">Harassment / Stalking</SelectItem>
                                <SelectItem value="identity">Identity Theft / Fake Profile</SelectItem>
                                <SelectItem value="crypto">Crypto & Investment Scam</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>

                <Card className="border-green-400 bg-green-50 dark:bg-green-900/10 dark:border-green-800 animate-pulse cursor-pointer hover:scale-[1.02] transition-transform">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="h-3 w-3 rounded-full bg-green-500 animate-ping absolute top-0 left-0"></div>
                                <div className="h-3 w-3 rounded-full bg-green-500 relative"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-green-800 dark:text-green-400">Instant Student Volunteer</h3>
                                <p className="text-xs text-green-700 dark:text-green-500">3 Law Students are online to help you (Pro Bono)</p>
                            </div>
                        </div>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white shadow-md">Connect Now</Button>
                    </CardContent>
                </Card>
            </div>

            {category && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* LEFT COLUMN: LAWS */}
                    <div className="lg:col-span-1 space-y-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <BookOpen className="text-blue-600 h-5 w-5" /> Relevant BNS Laws
                        </h2>
                        {laws && laws.length > 0 ? laws.map((law: any, i: number) => (
                            <Card key={i} className="bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between">
                                        <CardTitle className="text-base font-bold text-blue-700 dark:text-blue-400">{law.section}</CardTitle>
                                    </div>
                                    <CardDescription className="font-medium text-foreground">{law.desc}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Penalty: {law.penalty}</Badge>
                                </CardContent>
                            </Card>
                        )) : (
                            <p className="text-muted-foreground text-sm">Select a category to see laws.</p>
                        )}
                    </div>

                    {/* RIGHT COLUMN: LAWYERS */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <User className="text-blue-600 h-5 w-5" /> Verified Legal Experts
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {getLawyers().map((l, i) => (
                                <Card key={i} className="hover:shadow-lg transition-all border-primary/20 group">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                                {l.name[0]}
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg">{l.name}</CardTitle>
                                                <CardDescription className="text-xs uppercase font-semibold tracking-wider">{l.spec}</CardDescription>
                                            </div>
                                        </div>
                                        {l.verified && <Badge variant="secondary" className="bg-blue-100 text-blue-700">✓ BED</Badge>}
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col gap-1 text-sm mb-4 text-muted-foreground">
                                            <span>Experience: <span className="text-foreground font-medium">{l.exp}</span></span>
                                            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {l.loc}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button className="flex-1 bg-slate-900 text-white hover:bg-slate-800">
                                                <Phone className="h-3 w-3 mr-2" /> Contact
                                            </Button>
                                            <Button variant="outline" className="flex-1">
                                                Profile
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {getLawyers().length === 0 && (
                            <div className="text-center py-10 text-muted-foreground bg-muted/20 rounded-xl border border-dashed">
                                No specific experts found for this category yet. Please call 1930.
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!category && (
                <div className="text-center opacity-30 mt-12">
                    <Scale className="h-32 w-32 mx-auto mb-4" />
                    <p className="text-xl font-light">Select a category above to load the Legal Knowledge Graph.</p>
                </div>
            )}
        </div>
    )
}
