"use client"

import { useState } from "react"
import { Copy, Download, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { LegalTemplates, LegalNoticeTemplate } from "@/lib/legal-templates"
import { toast } from "react-hot-toast"

export function AutoDrafter() {
    const [selectedTemplate, setSelectedTemplate] = useState<LegalNoticeTemplate | null>(null)
    const [formData, setFormData] = useState<Record<string, string>>({})
    const [generatedDoc, setGeneratedDoc] = useState<string>("")

    const handleGenerate = () => {
        if (!selectedTemplate) return
        const doc = selectedTemplate.generate(formData)
        setGeneratedDoc(doc)
        toast.success("Legal Notice Generated!")
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
            {/* Left Panel: Configuration */}
            <div className="space-y-6 overflow-y-auto pr-2">
                <div className="space-y-2">
                    <Label className="text-white">Select Document Type</Label>
                    <Select onValueChange={(val) => {
                        const t = LegalTemplates.find(t => t.id === val)
                        setSelectedTemplate(t || null)
                        setFormData({})
                        setGeneratedDoc("")
                    }}>
                        <SelectTrigger className="w-full bg-slate-900 border-slate-700 text-white">
                            <SelectValue placeholder="Choose a template..." />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-700 text-white">
                            {LegalTemplates.map(t => (
                                <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {selectedTemplate && (
                        <p className="text-sm text-slate-400">{selectedTemplate.description}</p>
                    )}
                </div>

                {selectedTemplate && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-left-4">
                        <div className="flex items-center gap-2 text-blue-400 font-bold border-b border-blue-900/50 pb-2">
                            <FileText className="w-4 h-4" />
                            Enter Case Details
                        </div>
                        {selectedTemplate.fields.map(field => (
                            <div key={field.key} className="space-y-1">
                                <Label className="text-slate-300 text-xs uppercase tracking-wide">{field.label}</Label>
                                <Input
                                    type={field.type || "text"}
                                    placeholder={field.placeholder}
                                    className="bg-slate-950 border-slate-800 text-white"
                                    value={formData[field.key] || ""}
                                    onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                                />
                            </div>
                        ))}
                        <Button onClick={handleGenerate} className="w-full bg-blue-600 hover:bg-blue-500 font-bold">
                            Generate Document <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                )}
            </div>

            {/* Right Panel: Preview */}
            <Card className="bg-slate-950 border-slate-800 h-full flex flex-col">
                <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-500 uppercase">Document Preview</span>
                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-slate-400 hover:text-white"
                            onClick={() => {
                                navigator.clipboard.writeText(generatedDoc)
                                toast.success("Copied to Clipboard")
                            }}
                            disabled={!generatedDoc}
                        >
                            <Copy className="w-3 h-3 mr-1" /> Copy
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-slate-400 hover:text-white"
                            disabled={!generatedDoc}
                        >
                            <Download className="w-3 h-3 mr-1" /> PDF
                        </Button>
                    </div>
                </div>
                <CardContent className="flex-1 p-0 overflow-hidden relative">
                    {!generatedDoc ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700">
                            <FileText className="w-16 h-16 mb-4 opacity-50" />
                            <p className="text-sm">Select a template to begin drafting.</p>
                        </div>
                    ) : (
                        <textarea
                            className="w-full h-full bg-slate-950 p-6 text-slate-300 font-mono text-sm resize-none focus:outline-none leading-relaxed"
                            readOnly
                            value={generatedDoc}
                        />
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
