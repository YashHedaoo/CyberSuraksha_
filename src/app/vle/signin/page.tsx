"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Loader2, Landmark } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"

export default function VLESignInPage() {
    const { login } = useAuth()
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Pass role 'vle' to auth context
        await login("vle" as any, email, password)
        setLoading(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-950 dark:to-orange-950/20 px-4">
            <Card className="w-full max-w-md shadow-2xl glassy border-t-4 border-t-orange-500 animate-in fade-in zoom-in-95 duration-500">
                <CardHeader className="space-y-1 text-center">
                    <div className="mx-auto bg-orange-100 p-4 rounded-full w-fit mb-2">
                        <Landmark className="h-10 w-10 text-orange-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-orange-700 dark:text-orange-400">Gram Panchayat Login</CardTitle>
                    <CardDescription>
                        Secure access for Sarpanch & VLE Officers
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Official ID / Email</Label>
                            <Input
                                id="email"
                                placeholder="sarpanch@panchayat.gov.in"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-11 text-lg font-medium bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/25 transition-all"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Verifying Credentials...
                                </>
                            ) : (
                                "Access Dashboard"
                            )}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-2">
                            Official Use Only: <span className="font-mono bg-muted px-1 rounded">sarpanch@vle.gov</span> / <span className="font-mono bg-muted px-1 rounded">pass</span>
                        </p>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 text-center text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900/50 p-6 rounded-b-xl border-t">
                    <Link href="/signin" className="hover:text-foreground flex items-center gap-2">
                        <Lock className="h-4 w-4" /> Back to Citizen Login
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
