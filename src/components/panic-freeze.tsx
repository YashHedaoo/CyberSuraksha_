"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ShieldAlert, Lock, CreditCard, Ban } from "lucide-react"
import { useState } from "react"
import { toast } from "react-hot-toast"

export function PanicFreeze() {
    const [isOpen, setIsOpen] = useState(false)

    // Simulate freezing action
    const handleFreeze = (bank: string) => {
        toast.loading(`Contacting ${bank} Gateway...`, { duration: 2000 })
        setTimeout(() => {
            toast.success(`${bank} Accounts Temporarily Locked. SMS sent to your registered mobile.`, { duration: 5000 })
        }, 2000)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive" className="gap-2 font-bold shadow-red-500/20 shadow-lg animate-pulse hover:animate-none">
                    <ShieldAlert className="h-5 w-5" />
                    PANIC FREEZE
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md border-red-500 border-2">
                <DialogHeader>
                    <DialogTitle className="text-red-600 flex items-center gap-2 text-2xl">
                        <ShieldAlert className="h-8 w-8" />
                        DIGITAL FIRST AID
                    </DialogTitle>
                    <DialogDescription className="font-semibold text-gray-700 dark:text-gray-300">
                        Use this ONLY if you have just been scammed. This acts as an emergency kill-switch.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                            <CreditCard className="h-4 w-4" /> Stop Money Leaks
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" className="border-red-200 hover:bg-red-100 dark:hover:bg-red-900" onClick={() => handleFreeze("UPI")}>
                                Freeze UPI
                            </Button>
                            <Button variant="outline" className="border-red-200 hover:bg-red-100 dark:hover:bg-red-900" onClick={() => handleFreeze("All Bank")}>
                                Lock Bank A/Cs
                            </Button>
                        </div>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-2 flex items-center gap-2">
                            <Lock className="h-4 w-4" /> Account Security
                        </h3>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" onClick={() => toast.success("Logout command sent to Facebook/Instagram servers.")}>
                            Force Logout All Socials
                        </Button>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                            <Ban className="h-4 w-4" /> Cyber Bullying / Sextortion
                        </h3>
                        <Button variant="secondary" className="w-full" onClick={() => window.open('https://cybercrime.gov.in', '_blank')}>
                            Report to National Portal
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
