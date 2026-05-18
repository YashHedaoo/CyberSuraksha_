"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send, ShieldCheck, ShieldAlert, MessageCircle, Image as ImageIcon, Loader2 } from "lucide-react"
import Tesseract from 'tesseract.js';

export function WhatsAppBot() {
    const [messages, setMessages] = useState<{ id: number, text?: string, image?: string, sender: 'user' | 'bot', isDanger?: boolean }[]>([
        { id: 1, text: "👋 Hi! I am CyberSuraksha Bot. Forward any suspicious message details or Upload a Screenshot here to check.", sender: 'bot' }
    ])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleSend = () => {
        if (!input.trim()) return

        const userMsg = { id: Date.now(), text: input, sender: 'user' as const }
        setMessages(prev => [...prev, userMsg])
        setInput("")
        setMessages(prev => [...prev, userMsg])
        setInput("")
        analyzeContent(input, false)
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const url = URL.createObjectURL(file)
        const userMsg = { id: Date.now(), image: url, sender: 'user' as const }
        setMessages(prev => [...prev, userMsg])
        setMessages(prev => [...prev, userMsg])
        analyzeContent("", true, url) // True for image
    }

    const analyzeContent = async (text: string, isImage: boolean, imageUrl?: string) => {
        setLoading(true)

        let analysisText = text;

        if (isImage && imageUrl) {
            try {
                const { data: { text: extractedText } } = await Tesseract.recognize(
                    imageUrl,
                    'eng',
                    { logger: m => console.log(m) }
                );
                analysisText = extractedText;
            } catch (err) {
                console.error("OCR Error", err);
                setMessages(prev => [...prev, { id: Date.now(), text: "❌ Failed to read image. Please try again or type text.", sender: 'bot' }]);
                setLoading(false);
                return;
            }
        }

        // Delay for simulation feeling (even after OCR)
        setTimeout(() => {
            let isUnsafe = false
            let replyText = ""
            const lower = analysisText.toLowerCase()

            // Keywords Analysis
            const dangerKeywords = ["lottery", "winner", "won", "prize", "congratulations", "urgent", "kyc", "block", "suspend", "expire", "delivery", "customs", "irs", "tax", "refund", "password", "pin", "otp", "bank"];

            const foundKeywords = dangerKeywords.filter(k => lower.includes(k));

            if (foundKeywords.length > 0 || lower.includes("http")) {
                isUnsafe = true
                replyText = `🚨 UNSAFE DETECTED!\n\n${isImage ? `📝 Extracted Text Snippet: "${analysisText.slice(0, 50)}..."\n\n` : ''}Found suspicious keywords: ${foundKeywords.join(", ").toUpperCase()}. \n\nThis looks like a Scam. Do not click links or share details.`
            } else {
                replyText = `✅ SEEMS SAFE.\n\n${isImage ? `📝 Extracted Text Snippet: "${analysisText.slice(0, 50)}..."\n\n` : ''}No malicious keywords found. However, always verify with the official source.`
            }

            const botReply = {
                id: Date.now() + 1,
                text: replyText,
                sender: 'bot' as const,
                isDanger: isUnsafe
            }

            setMessages(prev => [...prev, botReply])
            setLoading(false)
        }, 1000)
    }

    return (
        <Card className="w-full max-w-md mx-auto border-none shadow-2xl overflow-hidden bg-[#e5ddd5] dark:bg-slate-900 h-[600px] flex flex-col font-sans">
            {/* Header */}
            <div className="bg-[#075e54] p-4 flex items-center gap-3 text-white shadow-md">
                <div className="bg-white/20 p-2 rounded-full relative">
                    <MessageCircle className="h-6 w-6" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-[#075e54]"></span>
                </div>
                <div>
                    <h3 className="font-bold">CyberGuard Bot</h3>
                    <p className="text-xs text-white/80">Verified Business • Online</p>
                </div>
                <ShieldCheck className="ml-auto h-5 w-5 text-green-300" />
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#e5ddd5] dark:bg-slate-900">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm relative ${msg.sender === 'user'
                            ? 'bg-[#dcf8c6] text-black rounded-tr-none'
                            : 'bg-white text-black rounded-tl-none'
                            }`}>

                            {msg.image && (
                                <img src={msg.image} alt="Uploaded" className="rounded-lg mb-2 max-h-40 object-cover" />
                            )}

                            {msg.text && <div className="whitespace-pre-wrap">{msg.text}</div>}

                            {/* @ts-ignore */}
                            {msg.isDanger && (
                                <div className="mt-2 pt-2 border-t border-red-100 flex gap-2">
                                    <ShieldAlert className="h-4 w-4 text-red-500" />
                                    <span className="text-xs font-bold text-red-500">Threat Detected</span>
                                </div>
                            )}

                            <span className="text-[10px] text-gray-400 absolute bottom-1 right-2 block min-w-[30px] text-right">
                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                            <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#f0f0f0] dark:bg-slate-900 flex gap-2 items-center">
                <Input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                />

                <Button size="icon" variant="ghost" className="text-gray-500" onClick={() => fileInputRef.current?.click()}>
                    <ImageIcon className="h-5 w-5" />
                </Button>

                <Input
                    className="bg-white dark:bg-slate-800 border-none focus-visible:ring-0 rounded-full px-4"
                    placeholder="Type message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button size="icon" className="rounded-full bg-[#075e54] hover:bg-[#128c7e]" onClick={handleSend}>
                    <Send className="h-4 w-4" />
                </Button>
            </div>
        </Card>
    )
}
