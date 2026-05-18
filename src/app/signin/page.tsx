"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { useLanguage } from "@/context/language-context"

export default function SignInPage() {
  const { login } = useAuth()
  const { t } = useLanguage()
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await login("citizen", email, password)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/50 via-white to-blue-100/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-4">
      <Card className="w-full max-w-md shadow-2xl glassy border-t-4 border-t-primary animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-2">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">{t.auth.citizenTitle}</CardTitle>
          <CardDescription>
            {t.auth.citizenSubtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.auth.email}</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t.auth.password}</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 text-lg font-medium shadow-lg hover:shadow-primary/25 transition-all"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.auth.authenticating}
                </>
              ) : (
                t.auth.loginCitizen
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-2">
              {/* Demo Credentials Removed for Production Polish */}
            </p>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900/50 p-6 rounded-b-xl border-t">
          <div className="w-full space-y-3">
            <div className="flex justify-between items-center text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              <span>Other Access</span>
              <span className="h-px bg-border flex-1 ml-4"></span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" asChild className="h-10 border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-900 dark:hover:bg-blue-900/20">
                <Link href="/police/signin">
                  <Shield className="mr-2 h-4 w-4" /> Police Login
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-10 border-orange-200 hover:bg-orange-50 hover:text-orange-700 dark:border-orange-900 dark:hover:bg-orange-900/20">
                <Link href="/vle/signin">
                  <Lock className="mr-2 h-4 w-4" /> VLE / Sarpanch
                </Link>
              </Button>
            </div>
          </div>

          <div className="pt-2 text-xs">
            {t.auth.notAccount}{" "}
            <Link href="/signup" className="text-primary hover:underline font-bold">
              {t.auth.register}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
