"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Download, Printer, Shield } from "lucide-react"

import { useLanguage } from "@/context/language-context"
import { VoiceInput } from "@/components/voice-input"

export default function FIRDrafterPage() {
    const { t } = useLanguage()
    const [generating, setGenerating] = useState(false)
    const [generated, setGenerated] = useState(false)

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        incidentDate: "",
        incidentTime: "",
        type: "financial",
        amount: "",
        suspect: "",
        desc: ""
    })

    const handleGenerate = () => {
        setGenerating(true)
        setTimeout(() => {
            setGenerating(false)
            setGenerated(true)
        }, 2000)
    }

    return (
        <div className="container mx-auto py-10 max-w-4xl">
            <div className="mb-8 text-center space-y-4">
                <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
                    <FileText className="h-10 w-10 text-primary" /> {t.firDrafter.title}
                </h1>
                <p className="text-muted-foreground text-lg">
                    {t.firDrafter.subtitle}
                </p>
            </div>

            {!generated ? (
                <Card className="border-2">
                    <CardHeader>
                        <CardTitle>{t.firDrafter.form.personalTitle}</CardTitle>
                        <CardDescription>{t.firDrafter.form.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Personal Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>{t.firDrafter.form.name}</Label>
                                <Input
                                    placeholder="Amit Kumar"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>{t.firDrafter.form.address}</Label>
                                <Input
                                    placeholder="Sector 4, Rohini, Delhi"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Incident Info */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label>{t.firDrafter.form.date}</Label>
                                <Input
                                    type="date"
                                    value={formData.incidentDate}
                                    onChange={(e) => setFormData({ ...formData, incidentDate: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>{t.firDrafter.form.time}</Label>
                                <Input
                                    type="time"
                                    value={formData.incidentTime}
                                    onChange={(e) => setFormData({ ...formData, incidentTime: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>{t.firDrafter.form.city}</Label>
                                <Input
                                    placeholder="Mumbai"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Cyber Specifics */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>{t.firDrafter.form.type}</Label>
                                <Select onValueChange={(v) => setFormData({ ...formData, type: v })}>
                                    <SelectTrigger><SelectValue placeholder={t.firDrafter.form.type} /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="financial">{t.firDrafter.types.financial}</SelectItem>
                                        <SelectItem value="stalking">{t.firDrafter.types.stalking}</SelectItem>
                                        <SelectItem value="job">{t.firDrafter.types.job}</SelectItem>
                                        <SelectItem value="sextortion">{t.firDrafter.types.sextortion}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>{t.firDrafter.form.amount}</Label>
                                <Input
                                    placeholder="5000"
                                    value={formData.amount}
                                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>{t.firDrafter.form.suspect}</Label>
                            <Input
                                placeholder="+91 98XXX..."
                                value={formData.suspect}
                                onChange={(e) => setFormData({ ...formData, suspect: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label>{t.firDrafter.form.desc}</Label>
                                <VoiceInput
                                    onResult={(text) => setFormData(prev => ({ ...prev, desc: prev.desc + (prev.desc ? ' ' : '') + text }))}
                                    className="h-8 w-8"
                                />
                            </div>
                            <Textarea
                                placeholder="..."
                                className="min-h-[100px]"
                                value={formData.desc}
                                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                            />
                        </div>

                        <Button className="w-full h-12 text-lg font-bold" onClick={handleGenerate} disabled={generating}>
                            {generating ? t.firDrafter.buttons.drafting : t.firDrafter.buttons.generate}
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">
                    <Card className="border-green-500 bg-green-50/50 dark:bg-green-900/10">
                        <CardContent className="p-6 text-center text-green-800 dark:text-green-400">
                            <Shield className="h-12 w-12 mx-auto text-green-600 mb-2" />
                            <h3 className="text-xl font-bold">{t.firDrafter.preview.ready}</h3>
                            <p className="text-sm font-bold">{t.firDrafter.preview.legalCite}</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-2xl">
                        <CardHeader className="bg-slate-100 dark:bg-slate-800 flex flex-row justify-between items-center">
                            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground flex gap-2 items-center">
                                <FileText className="h-4 w-4" /> Legal Preview
                            </CardTitle>
                            <Button variant="outline" size="sm" onClick={() => setGenerated(false)}>Edit</Button>
                        </CardHeader>
                        <CardContent className="p-12 bg-white text-slate-900 font-serif text-sm leading-relaxed min-h-[500px] shadow-inner">
                            <div className="max-w-2xl mx-auto space-y-6">
                                <p className="font-bold text-center text-xl underline mb-8">{t.firDrafter.preview.header}</p>

                                <div>
                                    <p>{t.firDrafter.preview.to}</p>
                                    <p>{t.firDrafter.preview.sho}</p>
                                    <p>Cyber Crime Police Station,</p>
                                    <p>{formData.city || "[City]"}</p>
                                </div>

                                <p><strong>{t.firDrafter.preview.subject}</strong></p>

                                <p>Respected Sir/Madam,</p>

                                <div className="space-y-1">
                                    <p><strong>{t.firDrafter.form.personalTitle}:</strong></p>
                                    <p>{t.firDrafter.form.name}: {formData.name}</p>
                                    <p>{t.firDrafter.form.address}: {formData.address}</p>
                                </div>

                                <p>{t.firDrafter.preview.bodyStart}</p>

                                <div className="space-y-1">
                                    <p><strong>{t.firDrafter.form.incidentTitle}:</strong></p>
                                    <p>{t.firDrafter.form.date}: {formData.incidentDate}</p>
                                    <p>{t.firDrafter.form.time}: {formData.incidentTime}</p>
                                    <p>{t.firDrafter.form.amount}: {formData.amount}</p>
                                    <p>{t.firDrafter.form.type}: {t.firDrafter.types[formData.type as keyof typeof t.firDrafter.types]}</p>
                                    <p>{t.firDrafter.form.suspect}: {formData.suspect}</p>
                                </div>

                                <p className="mt-4">
                                    <strong>{t.firDrafter.form.desc}:</strong><br />
                                    {formData.desc}
                                </p>

                                <div className="bg-slate-50 border-l-4 border-slate-900 p-4 my-6 italic">
                                    {t.firDrafter.preview.legalCite}
                                </div>

                                <p>{t.firDrafter.preview.request}</p>

                                <div className="mt-12">
                                    <p>Sincerely,</p>
                                    <br />
                                    <p className="font-bold">{formData.name || "[Signature]"}</p>
                                    <p>Date: {new Date().toLocaleDateString()}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-16" onClick={() => window.print()}>
                            <Printer className="mr-2" /> {t.firDrafter.buttons.print}
                        </Button>
                        <Button className="h-16 bg-blue-600 hover:bg-blue-700">
                            <Download className="mr-2" /> {t.firDrafter.buttons.download}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
