"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Shield, Radio, ArrowLeft, Plus, CheckCircle, BellRing, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/context/language-context"

function CheckBadge() {
    return <div className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full shrink-0"><Shield className="h-3 w-3 text-blue-600 dark:text-blue-300" /></div>
}

export default function CommunityPage() {
    const { t } = useLanguage()
    const [familyMembers, setFamilyMembers] = useState<{ name: string, phone: string }[]>([
        { name: "Mom", phone: "98765*****" }
    ])

    const [newMember, setNewMember] = useState({ name: "", phone: "" })
    const [openAdd, setOpenAdd] = useState(false)

    const handleAddMember = () => {
        if (newMember.name && newMember.phone) {
            setFamilyMembers([...familyMembers, newMember])
            setNewMember({ name: "", phone: "" })
            setOpenAdd(false)
            alert("Family Member Added & Invitation Sent!")
        }
    }

    const handleBuyInsurance = () => {
        alert("Redirecting to Secure Payment Gateway for 'CyberShield Micro-Insurance'...")
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <header className="bg-white dark:bg-slate-900 border-b p-4 sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" asChild size="icon">
                            <Link href="/"><ArrowLeft className="h-5 w-5" /></Link>
                        </Button>
                        <h1 className="text-xl font-bold">{t.community.title}</h1>
                    </div>
                    <div className="flex gap-2">
                        <Badge variant="outline" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 border-green-200">24k {t.community.guardians}</Badge>
                    </div>
                </div>
            </header>

            <main className="container mx-auto p-4 py-8 space-y-8 max-w-5xl">

                {/* Feature 1: Family Link - Suraksha Bandhan */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Heart className="text-red-500 h-6 w-6" />
                        <h2 className="text-2xl font-bold">{t.community.family.title}</h2>
                    </div>
                    <Card className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-950/20 dark:to-red-950/20 border-pink-200 dark:border-pink-900">
                        <CardContent className="p-6">
                            <div className="md:flex items-center justify-between gap-6 mb-6">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">{t.community.family.protect}</h3>
                                    <p className="text-pink-700 dark:text-pink-300 max-w-xl">
                                        {t.community.family.protectDesc}
                                    </p>
                                </div>
                                <Dialog open={openAdd} onOpenChange={setOpenAdd}>
                                    <DialogTrigger asChild>
                                        <Button className="mt-4 md:mt-0 bg-pink-600 hover:bg-pink-700 text-white min-w-[200px] shadow-lg shadow-pink-500/20">
                                            <Plus className="mr-2 h-4 w-4" /> {t.community.family.addBtn}
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>{t.community.family.addBtn}</DialogTitle>
                                            <DialogDescription>
                                                {t.community.family.protectDesc}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4 py-4">
                                            <div className="space-y-2">
                                                <Label>{t.community.family.nickname}</Label>
                                                <Input placeholder="e.g. Dad" value={newMember.name} onChange={e => setNewMember({ ...newMember, name: e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>{t.community.family.phone}</Label>
                                                <Input placeholder="+91 98xxx xxxxx" value={newMember.phone} onChange={e => setNewMember({ ...newMember, phone: e.target.value })} />
                                            </div>
                                            <Button className="w-full bg-pink-600 hover:bg-pink-700" onClick={handleAddMember}>{t.community.family.sendInvite}</Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            {/* List of members */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {familyMembers.map((m, i) => (
                                    <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-lg flex items-center justify-between shadow-sm border border-pink-100 dark:border-pink-900">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 font-bold">
                                                {m.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">{m.name}</p>
                                                <p className="text-xs text-muted-foreground">{m.phone}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost" className="h-8 w-8 text-green-600" title="Safety Status: OK">
                                                <CheckCircle className="h-4 w-4" />
                                            </Button>
                                            <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600" title="Alert">
                                                <BellRing className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Feature 2: Insurance */}
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="text-blue-500 h-6 w-6" />
                            <h2 className="text-2xl font-bold">{t.community.insurance.title}</h2>
                        </div>
                        <Card className="h-full border-blue-200 dark:border-blue-900 shadow-md transition-shadow hover:shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Partnered with SBI General</div>
                            <CardHeader>
                                <CardTitle className="text-3xl font-black text-blue-600">{t.community.insurance.price}</CardTitle>
                                <CardDescription>{t.community.insurance.coverage}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <ul className="space-y-3">
                                    {t.community.insurance.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm"><CheckBadge /> {feature}</li>
                                    ))}
                                </ul>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20" onClick={handleBuyInsurance}>
                                    {t.community.insurance.buy}
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">T&C Apply. IRDAI Reg No. 123</p>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Feature 3: Hyperlocal Feed */}
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <Radio className="text-orange-500 h-6 w-6 animate-pulse" />
                            <h2 className="text-2xl font-bold">{t.community.feed.title}</h2>
                        </div>
                        <Card className="h-full border-orange-200 dark:border-orange-900">
                            <CardContent className="p-0">
                                <div className="divide-y max-h-[350px] overflow-y-auto">
                                    {[
                                        { loc: "Andheri, Mumbai", msg: "Electricity Bill Scam reported by 3 users. Don't click SMS links.", time: "10m ago", verified: true },
                                        { loc: "Pune Cantt", msg: "Fake Army Olx Scam active. Requesting cheap vehicle deposit.", time: "1h ago", verified: true },
                                        { loc: "Thane", msg: "WhatsApp 'Pink Look' link virus spreading.", time: "3h ago", verified: false },
                                        { loc: "Nashik", msg: "Fake Job Offer letters sent to students via Telegram.", time: "5h ago", verified: true },
                                        { loc: "Nagpur", msg: "Digital Arrest scam call received from +92 number.", time: "6h ago", verified: true },
                                    ].map((news, i) => (
                                        <div key={i} className="p-4 hover:bg-muted/50 transition-colors">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="font-bold text-sm text-foreground flex items-center gap-1">
                                                    {news.loc}
                                                    {news.verified && <CheckCircle className="h-3 w-3 text-blue-500" />}
                                                </span>
                                                <span className="text-xs text-muted-foreground">{news.time}</span>
                                            </div>
                                            <p className="text-sm text-foreground/90">{news.msg}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-2 border-t bg-muted/20 text-center">
                                    <Button variant="link" className="text-xs h-auto p-0 text-orange-600">{t.community.feed.report}</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </main>
        </div>
    )
}
