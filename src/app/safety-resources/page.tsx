"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Shield, Lock, Smartphone, CreditCard, Globe, ExternalLink, Play, FileText, AlertTriangle } from "lucide-react"

// HARDCODED FALLBACK CONTENT (Since Translation Dict might be small)
const EXTENDED_ARTICLES = [
  { title: "UPI Payment Safety", desc: "How to avoid QR code scams and secure your PIN.", category: "Banking", tips: ["Never scan QR to receive money", "Use defined limits", "Check receiver name"] },
  { title: "Social Media Privacy", desc: "Locking down your Facebook and Instagram profiles.", category: "Privacy", tips: ["Turn on 2FA", "Set profile to private", "Hide friend list"] },
  { title: "Fake Job Offers", desc: "Identifying fraudulent 'Work from Home' schemes.", category: "Scams", tips: ["No money for joining", "Check company email", "Verify on Linkedin"] },
  { title: "Investment Scams", desc: "Avoiding 'Double your money' schemes on Telegram.", category: "Finance", tips: ["High returns = Scams", "Check SEBI registration", "Don't trust screenshots"] },
  { title: "Digital Arrest Fraud", desc: "Police never arrest you via Skype/WhatsApp video call.", category: "Critical", tips: ["Don't panic", "Verify with local station", "Don't transfer 'bail' money"] },
  { title: "Password Management", desc: "Creating unbreakable passwords.", category: "Security", tips: ["Use 12+ chars", "Mix symbols", "Use a manager"] },
  { title: "Phishing Emails", desc: "How to spot fake IRS/Tax refund emails.", category: "Scams", tips: ["Check sender email", "Hover links", "Don't download attachments"] },
  { title: "SIM Swap Attacks", desc: "Protecting your mobile number from theft.", category: "Mobile", tips: ["Set SIM PIN", "Monitor signals", "Link email alerts"] },
  { title: "Child Safety Online", desc: "Parental controls and monitoring for kids.", category: "Family", tips: ["Use YouTube Kids", "Set screened time", "Talk about strangers"] },
  { title: "Online Dating Safety", desc: "Avoiding 'Honey trap' and blackmail.", category: "Social", tips: ["Video call verified", "Meet in public", "Don't send nudes"] },
  { title: "Juice Jacking", desc: "Risks of public USB charging ports.", category: "Hardware", tips: ["Use own adapter", "Use data blocker", "Charge from power bank"] },
  { title: "Gaming Fraud", desc: "Protecting in-game items and currency.", category: "Gaming", tips: ["Don't share login", "Official stores only", "Enable 2FA"] },
  { title: "Fake Delivery SMS", desc: "'Your package is pending' scams.", category: "Shopping", tips: ["Track on official app", "Don't pay small fees", "Ignore random links"] },
  { title: "Remote Access Scams", desc: "Dangers of AnyDesk/TeamViewer sharing.", category: "Critical", tips: ["Never install for support", "Keep screen private", "Disconnect immediately"] },
  { title: "Aadhaar Locking", desc: "How to biometrically lock your Aadhaar.", category: "Govt", tips: ["Use mAadhaar app", "Unlock only when needed", "Prevents unauthorized KYC"] },
]

export default function SafetyPage() {
  const { t } = useLanguage()
  const [search, setSearch] = useState("")

  // Merge translation articles with our extended list if needed, or just use extended list for "Real" feel
  // We prefer the EXTENDED list because the user explicitly asked for 10-15 "Working" items.
  const resources = EXTENDED_ARTICLES

  const getIcon = (category: string) => {
    switch (category) {
      case 'Banking': return CreditCard;
      case 'Mobile': return Smartphone;
      case 'Scams': return AlertTriangle;
      case 'Critical': return Shield;
      default: return Lock;
    }
  }

  const filtered = resources.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.desc.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Awareness Hub
        </h1>
        <p className="text-muted-foreground">
          Access curated guides, video simulations, and checklists to stay ahead of cyber criminals.
        </p>

        <div className="relative max-w-md mx-auto mt-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search guides (e.g., 'UPI', 'Password')..."
            className="pl-10 h-10 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => {
          const Icon = getIcon(item.category)
          return (
            <Card key={idx} className="glassy hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-lg ${item.category === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-primary/10 text-primary'} group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant={item.category === 'Critical' ? 'destructive' : 'outline'}>{item.category}</Badge>
                </div>
                <CardTitle className="mt-4 leading-tight">{item.title}</CardTitle>
                <CardDescription className="line-clamp-2">{item.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-2 mb-6">
                  {item.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    variant="default"
                    size="sm"
                    onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + " scam explanation")}`, '_blank')}
                  >
                    <Play className="mr-2 h-3 w-3" /> Watch Video
                  </Button>
                  <Button
                    className="flex-1"
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(item.title + " safety guide india")}`, '_blank')}
                  >
                    details <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 text-muted-foreground">
          No guides found matching &quot;{search}&quot;. Try searching for &quot;Bank&quot; or &quot;Social&quot;.
        </div>
      )}
    </div>
  )
}
