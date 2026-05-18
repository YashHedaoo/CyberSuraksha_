import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gavel, AlertTriangle, CheckCircle2, XCircle } from "lucide-react"
import { LegalStatute } from "@/lib/legal-knowledge-base"

interface StatuteCardProps {
    statute: LegalStatute
    onClick?: () => void
}

export function StatuteCard({ statute, onClick }: StatuteCardProps) {
    return (
        <Card
            className="hover:border-blue-500 transition-all cursor-pointer group bg-slate-900 border-slate-800"
            onClick={onClick}
        >
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-slate-100 group-hover:text-blue-400 transition-colors">
                        {statute.crimeType}
                    </CardTitle>
                    <Gavel className="w-5 h-5 text-slate-600 group-hover:text-blue-500" />
                </div>
                <div className="flex gap-2 mt-1">
                    <Badge variant="outline" className="text-slate-400 border-slate-700 bg-slate-950">
                        {statute.bnsSection}
                    </Badge>
                    {statute.specialAct && (
                        <Badge variant="outline" className="text-slate-400 border-slate-700 bg-slate-950">
                            {statute.specialAct}
                        </Badge>
                    )}
                    {statute.severity === 'Critical' && (
                        <Badge variant="destructive" className="animate-pulse">
                            CRITICAL
                        </Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                    {statute.description}
                </p>
                <div className="flex items-center gap-3 text-xs font-mono">
                    <div className={`flex items-center gap-1 ${statute.cognizable ? "text-red-400" : "text-yellow-400"}`}>
                        <AlertTriangle className="w-3 h-3" />
                        {statute.cognizable ? "COGNIZABLE" : "NON-COG"}
                    </div>
                    <div className={`flex items-center gap-1 ${statute.bailable ? "text-green-400" : "text-red-400"}`}>
                        {statute.bailable ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                        {statute.bailable ? "BAILABLE" : "NON-BAILABLE"}
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}
