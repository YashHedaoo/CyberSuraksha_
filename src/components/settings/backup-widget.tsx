"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Upload, ShieldCheck, Database } from "lucide-react"
import { DataBackupService } from "@/lib/backup-service"
import { useRef } from "react"
import { toast } from "react-hot-toast"

export function BackupSystemWidget() {
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (!file.name.endsWith('.cyb') && !file.name.endsWith('.json')) {
            toast.error("Invalid file type. Please upload a .cyb file.")
            return
        }

        await DataBackupService.restoreBackup(file)
        if (fileInputRef.current) fileInputRef.current.value = ""
    }

    return (
        <Card className="glassy border-l-4 border-l-emerald-500">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-emerald-500" />
                    System Backup & Restore
                </CardTitle>
                <CardDescription>
                    Securely export your data or restore from a previous checkpoint.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        onClick={DataBackupService.createBackup}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Download Backup (.cyb)
                    </Button>

                    <Button
                        variant="outline"
                        className="flex-1 border-slate-700 hover:bg-slate-800"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Upload className="w-4 h-4 mr-2" />
                        Restore Data
                    </Button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept=".cyb,.json"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-slate-900/50 p-3 rounded-md">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Your data is encrypted locally. Never share your backup file with anyone.</span>
                </div>
            </CardContent>
        </Card>
    )
}
