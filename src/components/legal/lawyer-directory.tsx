"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, MapPin, Phone, Award } from "lucide-react"

export function LawyerDirectory() {
    const [category, setCategory] = useState("all")

    const lawyers = [
        { name: "Adv. Rahul Sharma", spec: "Financial Fraud", exp: "12 Yrs", verified: true, loc: "Delhi High Court", contact: "+91 98XXX XXXXX", type: "financial" },
        { name: "Legal Aid Clinic Delhi", spec: "Pro Bono (Free)", exp: "N/A", verified: true, loc: "Tis Hazari Courts", contact: "011-23XXXXXX", type: "financial" },
        { name: "Adv. Meera Desai", spec: "Cyber Banking Specialist", exp: "15 Yrs", verified: true, loc: "Mumbai", contact: "+91 99XXX XXXXX", type: "financial" },
        { name: "Adv. Priya Singh", spec: "Women's Safety", exp: "8 Yrs", verified: true, loc: "Bangalore", contact: "+91 88XXX XXXXX", type: "harassment" },
        { name: "NGO Shakti", spec: "Support & Counseling", exp: "20 Yrs", verified: true, loc: "National", contact: "1800-XXXX-XXXX", type: "harassment" },
        { name: "Adv. Vikram Malhotra", spec: "Data Privacy & Crypto", exp: "10 Yrs", verified: true, loc: "Gurgaon", contact: "+91 77XXX XXXXX", type: "identity" }
    ]

    const filteredLawyers = category === "all" ? lawyers : lawyers.filter(l => l.type === category)

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Verified Cyber Experts</h2>
                <Select onValueChange={setCategory} defaultValue="all">
                    <SelectTrigger className="w-[200px] bg-slate-900 border-slate-700 text-white">
                        <SelectValue placeholder="Filter by Specialization" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700 text-white">
                        <SelectItem value="all">All Experts</SelectItem>
                        <SelectItem value="financial">Financial Fraud</SelectItem>
                        <SelectItem value="harassment">Harassment / Safety</SelectItem>
                        <SelectItem value="identity">Identity / Crypto</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLawyers.map((l, i) => (
                    <Card key={i} className="hover:shadow-xl transition-all border-slate-800 bg-slate-900 group">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-400 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-500/20">
                                    {l.name[0]}
                                </div>
                                <div>
                                    <CardTitle className="text-lg text-slate-100">{l.name}</CardTitle>
                                    <CardDescription className="text-xs uppercase font-semibold tracking-wider text-slate-500">{l.spec}</CardDescription>
                                </div>
                            </div>
                            {l.verified && <Badge variant="secondary" className="bg-blue-900/50 text-blue-400 border-blue-800">✓ VERIFIED</Badge>}
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-2 text-sm mb-4 text-slate-400">
                                <span className="flex items-center gap-2"><Award className="h-4 w-4 text-yellow-500" /> Experience: <span className="text-slate-200">{l.exp}</span></span>
                                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-red-400" /> {l.loc}</span>
                            </div>
                            <div className="flex gap-2">
                                <Button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold">
                                    <Phone className="h-3 w-3 mr-2" /> Connect
                                </Button>
                                <Button variant="outline" className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                                    View Profile
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
