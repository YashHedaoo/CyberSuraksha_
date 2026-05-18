"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, FileText, Sparkles, ChevronRight } from "lucide-react"

export function LegalShortcutsWidget() {
    return (
        <Card className="glassy border-l-4 border-l-purple-500 h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-purple-500" />
                    Legal Action Center
                </CardTitle>
                <CardDescription>Instant legal tools for cyber victims</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-between group hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20" asChild>
                    <Link href="/legal-aid?tab=drafter">
                        <span className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-purple-600" />
                            Draft Legal Notice
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>

                <Button variant="outline" className="w-full justify-between group hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20" asChild>
                    <Link href="/legal-aid?tab=advisor">
                        <span className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-blue-600" />
                            Ask AI Lawyer
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>

                <p className="text-[10px] text-muted-foreground text-center pt-1">
                    Powered by Cyber Law Nexus & BNS 2023
                </p>
            </CardContent>
        </Card>
    )
}
