"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { findLegalProvision } from "@/lib/legal-knowledge-base"

interface Message {
    id: string;
    role: 'user' | 'bot';
    content: string;
    statuteId?: string;
}

export function LawGPT() {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'bot', content: "Namaste! I am your AI Legal General Intelligence.\n\nI can assist you with ANY legal matter under Indian Law, including:\n- **BNS 2023** (Murder, Theft, Rape)\n- **Cyber Crime** (Fraud, Sextortion)\n- **Special Acts** (Drugs, Traffic, Corruption)\n\nExplain your situation clearly." }
    ])
    const [input, setInput] = useState("")
    const [isThinking, setIsThinking] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages, isThinking])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input }
        setMessages(prev => [...prev, userMsg])
        setInput("")
        setIsThinking(true)

        // Simulate AI Processing & Legal Search
        setTimeout(() => {
            const statute = findLegalProvision(userMsg.content)
            let botResponse = ""

            if (statute) {
                botResponse = `Based on your description, this appears to be **${statute.crimeType}**.\n\n` +
                    `${statute.severity === 'Critical' ? '🚨 **CRITICAL ALERT** 🚨\n' : ''}` +
                    `🛑 **IMMEDIATE ACTION:** ${statute.immediateAction}\n\n` +
                    `⚖️ **Legal Provisions:**\n` +
                    `- **BNS 2023:** ${statute.bnsSection}\n` +
                    `${statute.specialAct ? `- **Special Act:** ${statute.specialAct}\n` : ''}\n` +
                    `🚓 **Punishment:** ${statute.punishment}\n` +
                    `💡 **Status:** ${statute.cognizable ? "Cognizable (Police MUST register FIR)" : "Non-Cognizable"} & ${statute.bailable ? "Bailable" : "Non-Bailable"}.`
                // Simulated Generative Fallback
                const generalKeywords = [
                    { k: ['divorce', 'custody', 'wife', 'husband', 'marriage'], resp: "This falls under **Family Law** (Hindu Marriage Act / Special Marriage Act). You should consult a Family Court lawyer for divorce or custody matters." },
                    { k: ['property', 'land', 'tenant', 'rent', 'flat'], resp: "Property disputes are generally **Civil Matters**. However, if documents were forged, it becomes a criminal offense under **BNS Section 318 (Cheating)**." },
                    { k: ['job', 'salary', 'fired', 'boss'], resp: "Employment disputes are covered under **Labour Laws**. You can approach the Labour Commissioner or Industrial Tribunal." },
                    { k: ['consumer', 'refund', 'hotel', 'flight', 'food'], resp: "This is a **Consumer Rights** issue. You can file a complaint with the National Consumer Helpline (1915) or Consumer Court." }
                ];

                const fallback = generalKeywords.find(g => g.k.some(key => userMsg.content.toLowerCase().includes(key)));

                if (fallback) {
                    botResponse = `I couldn't find a specific criminal section, but this appears to be a **Civil/Family** matter.\n\n💡 **General Advice:** ${fallback.resp}`;
                } else {
                    botResponse = "I couldn't find a specific section for this exact phrasing.\n\nHowever, I am trained on **ALL Indian Laws** (BNS, Civil, Family, Corporate).\n\nCould you try describing it differently?\n- 'Cheque bounced' (NI Act)\n- 'Neighbor blocked my way' (Wrongful Restraint)\n- 'Wife filed false case' (498A)"
                }
            }

            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                content: botResponse,
                statuteId: statute?.id
            }])
            setIsThinking(false)
        }, 1500)
    }

    return (
        <div className="flex flex-col h-[600px] border border-slate-800 rounded-xl bg-slate-950 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-white">Law-GPT</h3>
                    <p className="text-xs text-slate-400">Powered by Bharatiya Nyaya Sanhita</p>
                </div>
            </div>

            {/* Chat Area */}
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-blue-900'}`}>
                                {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-blue-300" />}
                            </div>
                            <div className={`rounded-lg p-3 max-w-[80%] text-sm whitespace-pre-line ${msg.role === 'user'
                                ? 'bg-slate-800 text-white'
                                : 'bg-blue-950/50 text-slate-200 border border-blue-900/50'
                                }`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isThinking && (
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-blue-300 animate-pulse" />
                            </div>
                            <div className="flex items-center gap-1 bg-blue-950/30 rounded-lg px-4 border border-blue-900/30">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    )}
                    <div ref={scrollRef} />
                </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2">
                <Input
                    placeholder="Describe the cyber crime..."
                    className="bg-slate-950 border-slate-700 text-white focus-visible:ring-blue-500"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-500">
                    <Send className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
