"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Shield, Phone } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/context/language-context"

import { useSeniorMode } from "@/context/senior-mode-context"
import { Accessibility, Trophy } from "lucide-react"
import { useLevel } from "@/context/level-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { isSeniorMode, toggleSeniorMode } = useSeniorMode()
  const { t } = useLanguage()
  const { rank, level, xp, nextLevelXp } = useLevel()

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: "🛡️ Toolkit", href: "/tools" }, // New consolidated link
    { name: t.nav.verify, href: "/verify" },
    { name: t.nav.legalAid, href: "/legal-aid" },
    { name: t.nav.quiz, href: "/quiz" },
    { name: t.nav.safety, href: "/safety-resources" },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isSeniorMode ? 'bg-[#fff] border-b-4 border-black' : 'bg-background/95'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Shield className={`text-primary ${isSeniorMode ? 'h-10 w-10' : 'h-8 w-8'}`} />
            <span className={`font-bold text-foreground ${isSeniorMode ? 'text-3xl' : 'text-xl'}`}>CyberSuraksha</span>
          </Link>

          {/* Desktop Navigation */}
          {isSeniorMode ? (
            <nav className="hidden md:flex items-center">
              <Link
                href="/"
                className="bg-primary text-white px-6 py-2 rounded-lg text-xl font-bold hover:bg-primary/90 shadow-md flex items-center gap-2"
              >
                <span>🏠</span> {t.nav.home}
              </Link>
            </nav>
          ) : (
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/profile"
                className="text-sm font-medium text-yellow-500 hover:text-yellow-400 transition-colors animate-pulse"
              >
                My Profile
              </Link>

            </nav>
          )}

          {/* Emergency Button & Auth */}
          <div className="flex items-center space-x-4">

            {/* Notification Bell Removed */}

            <Button
              onClick={toggleSeniorMode}
              variant="ghost"
              size="sm"
              className={isSeniorMode ? "bg-black text-white hover:bg-black/90 text-lg font-bold px-4 py-2" : "text-muted-foreground"}
              title="Senior Citizen Mode"
            >
              <Accessibility className="h-5 w-5 mr-2" />
              {isSeniorMode ? "Exit Senior Mode" : "Senior Mode"}
            </Button>

            {!isSeniorMode && <div className="hidden sm:block"><LanguageToggle /></div>}

            {!isSeniorMode && (
              <div className="hidden lg:flex flex-col items-end mr-4">
                <div className="text-xs font-bold text-yellow-500 flex items-center gap-1 uppercase tracking-wider">
                  <Trophy className="h-3 w-3" /> {rank} <span className="text-[10px] text-muted-foreground">(Lvl {level})</span>
                </div>
                <div className="w-24 h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-yellow-400" style={{ width: `${(xp / nextLevelXp) * 100}%` }} />
                </div>
              </div>
            )}

            {/* Emergency Button Removed */}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex justify-between items-center px-2">
                    <span className="font-semibold">Language</span>
                    <LanguageToggle />
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors px-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t px-2">
                    <Button
                      className="w-full bg-emergency hover:bg-emergency/90 text-emergency-foreground"
                      onClick={() => (window.location.href = "tel:100")}
                    >
                      Emergency: 100
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
