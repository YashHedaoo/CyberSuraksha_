"use client"

import { useState } from "react"
import { Complaint, InvestigationNote } from "@/lib/types"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { FileText, Send, ShieldAlert, User, MapPin, Calendar, Clock, AlertTriangle, CheckCircle, Smartphone } from "lucide-react"

interface CaseDetailsSheetProps {
    complaint: Complaint | null;
    open: boolean;
    onClose: () => void;
    onUpdateStatus: (id: string, status: string) => void;
}

export function CaseDetailsSheet({ complaint, open, onClose, onUpdateStatus }: CaseDetailsSheetProps) {
    const [noteText, setNoteText] = useState("")
    // Mock local notes state for interaction demo (in real app, this would come from DB)
    const [notes, setNotes] = useState<InvestigationNote[]>([])

    if (!complaint) return null;

    const handleAddNote = () => {
        if (!noteText.trim()) return;

        const newNote: InvestigationNote = {
            id: Date.now().toString(),
            author: "Officer (You)",
            content: noteText,
            timestamp: new Date().toISOString(),
            type: 'general'
        }

        setNotes([newNote, ...notes])
        setNoteText("")
    }

    const getPriorityColor = (urgency: string) => {
        switch (urgency) {
            case 'Emergency': return 'bg-red-500 hover:bg-red-600';
            case 'High': return 'bg-orange-500 hover:bg-orange-600';
            case 'Medium': return 'bg-yellow-500 hover:bg-yellow-600';
            default: return 'bg-blue-500 hover:bg-blue-600';
        }
    }

    return (
        <Sheet open={open} onOpenChange={onClose}>
            <SheetContent side="right" className="w-full sm:w-[540px] bg-slate-950 border-slate-800 text-slate-100 p-0 flex flex-col">
                <SheetHeader className="p-6 bg-slate-900 border-b border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="font-mono text-blue-400 border-blue-900">
                            CASE #{complaint.id.slice(-6)}
                        </Badge>
                        <Badge className={`${getPriorityColor(complaint.urgency)} text-white border-0`}>
                            {complaint.urgency.toUpperCase()} PRIORITY
                        </Badge>
                    </div>
                    <SheetTitle className="text-2xl text-white font-bold">{complaint.title}</SheetTitle>
                    <div className="flex items-center text-xs text-slate-400 gap-4 mt-2 font-mono">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(complaint.createdAt).toLocaleDateString()}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(complaint.createdAt).toLocaleTimeString()}</span>
                    </div>
                </SheetHeader>

                <Tabs defaultValue="overview" className="flex-1 flex flex-col overflow-hidden">
                    <div className="px-6 pt-4 bg-slate-900/50">
                        <TabsList className="bg-slate-800 text-slate-400 w-full grid grid-cols-4">
                            <TabsTrigger value="overview" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">Overview</TabsTrigger>
                            <TabsTrigger value="investigation" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">Notes</TabsTrigger>
                            <TabsTrigger value="evidence" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">Evidence</TabsTrigger>
                            <TabsTrigger value="suspect" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">Suspect</TabsTrigger>
                        </TabsList>
                    </div>

                    {/* OVERVIEW TAB */}
                    <TabsContent value="overview" className="flex-1 overflow-auto p-6 space-y-6 data-[state=active]:block h-full">
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                                <h3 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wide">Incident Description</h3>
                                <p className="text-slate-200 leading-relaxed text-sm">
                                    {complaint.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-slate-900 rounded border border-slate-800 flex items-center gap-3">
                                    <div className="bg-blue-900/20 p-2 rounded text-blue-400"><MapPin className="w-5 h-5" /></div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase">Location</div>
                                        <div className="text-sm font-medium text-white">{complaint.location}</div>
                                    </div>
                                </div>
                                <div className="p-3 bg-slate-900 rounded border border-slate-800 flex items-center gap-3">
                                    <div className="bg-purple-900/20 p-2 rounded text-purple-400"><User className="w-5 h-5" /></div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase">Reported By</div>
                                        <div className="text-sm font-medium text-white">User #{complaint.userId.slice(0, 5)}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-900/10 border border-red-900/30 rounded-lg">
                                <h3 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                                    <ShieldAlert className="w-4 h-4" /> AI Analysis
                                </h3>
                                <div className="space-y-2 text-sm text-red-200/80">
                                    <div className="flex justify-between">
                                        <span>Risk Score:</span>
                                        <span className="font-bold">{complaint.aiPriorityScore || 85}%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Keywords:</span>
                                        <span>{complaint.category}, Fraud, Urgent</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* INVESTIGATION TAB */}
                    <TabsContent value="investigation" className="flex-1 flex flex-col overflow-hidden data-[state=active]:flex h-full">
                        <ScrollArea className="flex-1 p-6">
                            <div className="space-y-6">
                                {notes.length === 0 ? (
                                    <div className="text-center text-slate-500 py-10 italic">
                                        No metrics recorded. Start the investigation timeline.
                                    </div>
                                ) : (
                                    notes.map((note) => (
                                        <div key={note.id} className="flex gap-4 group">
                                            <div className="flex flex-col items-center">
                                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                                <div className="w-px h-full bg-slate-800 group-last:hidden" />
                                            </div>
                                            <div className="pb-6 w-full">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-xs font-bold text-blue-400">{note.author}</span>
                                                    <span className="text-[10px] text-slate-500">{new Date(note.timestamp).toLocaleTimeString()}</span>
                                                </div>
                                                <div className="text-sm text-slate-300 bg-slate-900 p-3 rounded-br-xl rounded-tr-xl rounded-bl-xl border border-slate-800">
                                                    {note.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </ScrollArea>
                        <div className="p-4 bg-slate-900 border-t border-slate-800 mt-auto">
                            <div className="flex gap-2">
                                <Textarea
                                    placeholder="Add investigation note..."
                                    className="resize-none bg-slate-950 border-slate-800 text-slate-200 min-h-[80px]"
                                    value={noteText}
                                    onChange={(e) => setNoteText(e.target.value)}
                                />
                                <Button className="h-[80px] w-[80px] bg-blue-600 hover:bg-blue-700" onClick={handleAddNote}>
                                    <Send className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </TabsContent>

                    {/* EVIDENCE TAB */}
                    <TabsContent value="evidence" className="flex-1 overflow-auto p-6 data-[state=active]:block h-full">
                        <div className="grid grid-cols-2 gap-4">
                            {complaint.evidenceFiles && complaint.evidenceFiles.length > 0 ? (
                                complaint.evidenceFiles.map((file, i) => (
                                    <div key={i} className="aspect-video bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center relative group overflow-hidden cursor-pointer hover:border-blue-500 transition-colors">
                                        <FileText className="w-8 h-8 text-slate-600" />
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-xs text-white font-medium">View File</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-2 text-center py-10 text-slate-500 border-2 border-dashed border-slate-800 rounded-lg">
                                    <AlertTriangle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                    No digital evidence attached.
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    {/* SUSPECT TAB */}
                    <TabsContent value="suspect" className="flex-1 overflow-auto p-6 data-[state=active]:block h-full">
                        <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-center space-y-4">
                            <div className="w-16 h-16 bg-slate-800 rounded-full mx-auto flex items-center justify-center">
                                <Smartphone className="w-8 h-8 text-slate-500" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium">Digital Footprint Analysis</h3>
                                <p className="text-xs text-slate-500 mt-1">Tracing IP and Phone Metadata...</p>
                            </div>
                            <Button variant="outline" className="w-full border-blue-900 text-blue-400 hover:bg-blue-900/20">Initiate Trace</Button>
                        </div>
                    </TabsContent>

                </Tabs>

                <SheetFooter className="p-4 bg-slate-900 border-t border-slate-800 flex sm:justify-between gap-2">
                    <Button variant="destructive" className="flex-1 bg-red-900/50 hover:bg-red-900 border border-red-900 text-red-200" onClick={() => { onUpdateStatus(complaint.id, 'Closed'); onClose(); }}>
                        <ShieldAlert className="w-4 h-4 mr-2" /> Close Case
                    </Button>
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" onClick={() => { onUpdateStatus(complaint.id, 'Resolved'); onClose(); }}>
                        <CheckCircle className="w-4 h-4 mr-2" /> Resolve
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
