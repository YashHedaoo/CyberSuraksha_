"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldAlert, FileText, Smartphone, Users, Search, Phone, Video, Lock, GraduationCap, HardDrive } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export default function ToolsIndexPage() {
    const { t } = useLanguage()

    const tools = [
        {
            title: t.toolsIndex.phishingTitle,
            desc: t.toolsIndex.phishingDesc,
            href: "/tools/phishing-dojo",
            icon: GraduationCap,
            color: "text-yellow-600 bg-yellow-100"
        },
        {
            title: t.toolsIndex.whatsappTitle,
            desc: t.toolsIndex.whatsappDesc,
            href: "/tools/whatsapp-bot",
            icon: ShieldAlert,
            color: "text-green-600 bg-green-100"
        },
        {
            title: t.toolsIndex.firTitle,
            desc: t.toolsIndex.firDesc,
            href: "/tools/fir-drafter",
            icon: FileText,
            color: "text-blue-600 bg-blue-100"
        },
        {
            title: t.toolsIndex.digitalArrestTitle,
            desc: t.toolsIndex.digitalArrestDesc,
            href: "/tools/digital-arrest",
            icon: Video,
            color: "text-red-600 bg-red-100"
        },
        {
            title: t.toolsIndex.fakePaymentTitle,
            desc: t.toolsIndex.fakePaymentDesc,
            href: "/tools/fake-payment",
            icon: Smartphone,
            color: "text-purple-600 bg-purple-100"
        },
        {
            title: t.toolsIndex.muleTitle,
            desc: t.toolsIndex.muleDesc,
            href: "/tools/mule-search",
            icon: Search,
            color: "text-orange-600 bg-orange-100"
        },
        {
            title: t.toolsIndex.apkTitle,
            desc: t.toolsIndex.apkDesc,
            href: "/tools/apk-scanner",
            icon: Lock,
            color: "text-indigo-600 bg-indigo-100"
        },
        {
            title: t.toolsIndex.smsTitle,
            desc: t.toolsIndex.smsDesc,
            href: "/tools/sms-tracker",
            icon: Phone,
            color: "text-slate-600 bg-slate-100"
        },
        {
            title: t.toolsIndex.communityTitle,
            desc: t.toolsIndex.communityDesc,
            href: "/community",
            icon: Users,
            color: "text-pink-600 bg-pink-100"
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
            <div className="container mx-auto py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">{t.toolsIndex.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.toolsIndex.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tools.map((tool, i) => (
                        <Link href={tool.href} key={i}>
                            <Card className="h-full hover:shadow-xl transition-all hover:scale-105 border-0 shadow-md">
                                <CardHeader>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${tool.color}`}>
                                        <tool.icon className="h-7 w-7" />
                                    </div>
                                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                                    <CardDescription>{tool.desc}</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
