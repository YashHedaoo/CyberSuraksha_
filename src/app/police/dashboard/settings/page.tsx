"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Building2, Save, RotateCcw } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "react-hot-toast"
import { BackupSystemWidget } from "@/components/settings/backup-widget"

interface PoliceSettings {
    stationName: string;
    stationCode: string;
    emergencyContact: string;
    autoAssign: boolean;
    emailNotify: boolean;
    smsAlerts: boolean;
}

const DEFAULT_SETTINGS: PoliceSettings = {
    stationName: "Cyber Cell - Central Division",
    stationCode: "MUM-CYBER-01",
    emergencyContact: "+91 22 2262 0111",
    autoAssign: true,
    emailNotify: true,
    smsAlerts: false
}

export default function SettingsPage() {
    const [settings, setSettings] = useState<PoliceSettings>(DEFAULT_SETTINGS)
    const [isDirty, setIsDirty] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem("cs_police_settings")
        if (stored) {
            setSettings(JSON.parse(stored))
        }
    }, [])

    const handleChange = (field: keyof PoliceSettings, value: string | boolean) => {
        setSettings(prev => ({ ...prev, [field]: value }))
        setIsDirty(true)
    }

    const handleSave = () => {
        localStorage.setItem("cs_police_settings", JSON.stringify(settings))
        setIsDirty(false)
        toast.success("Station Settings Updated")
    }

    const handleReset = () => {
        if (confirm("Reset to default settings?")) {
            setSettings(DEFAULT_SETTINGS)
            setIsDirty(true)
        }
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h1 className="text-3xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                Station Configuration
            </h1>

            <div className="grid gap-6 md:grid-cols-2">

                {/* Jurisdiction Card */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                        Jurisdiction Details
                    </h2>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Station Name</Label>
                            <Input
                                value={settings.stationName}
                                onChange={(e) => handleChange('stationName', e.target.value)}
                                className="bg-slate-50 dark:bg-slate-800"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Station Code</Label>
                            <Input
                                value={settings.stationCode}
                                onChange={(e) => handleChange('stationCode', e.target.value)}
                                className="font-mono bg-slate-50 dark:bg-slate-800"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Emergency Contact Number</Label>
                            <Input
                                value={settings.emergencyContact}
                                onChange={(e) => handleChange('emergencyContact', e.target.value)}
                                className="bg-slate-50 dark:bg-slate-800"
                            />
                        </div>
                    </div>
                </div>

                {/* Preferences Card */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
                        System Preferences
                    </h2>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Auto-Assign Cases</Label>
                                <p className="text-xs text-muted-foreground">Automatically route cases based on available officers.</p>
                            </div>
                            <Switch
                                checked={settings.autoAssign}
                                onCheckedChange={(val) => handleChange('autoAssign', val)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Email Notifications</Label>
                                <p className="text-xs text-muted-foreground">Receive daily digest of active cases.</p>
                            </div>
                            <Switch
                                checked={settings.emailNotify}
                                onCheckedChange={(val) => handleChange('emailNotify', val)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">SMS Alerts</Label>
                                <p className="text-xs text-muted-foreground">Instant SMS for "Critical" priority incidents.</p>
                            </div>
                            <Switch
                                checked={settings.smsAlerts}
                                onCheckedChange={(val) => handleChange('smsAlerts', val)}
                            />
                        </div>
                    </div>
                </div>

                {/* Backup System */}
                <div className="hidden md:block md:col-span-2">
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                        Data Management
                    </h2>
                    <BackupSystemWidget />
                </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-4 pt-4 border-t dark:border-slate-800">
                <Button
                    size="lg"
                    className="gap-2 bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                    onClick={handleSave}
                    disabled={!isDirty}
                >
                    <Save className="h-4 w-4" /> Save Configuration
                </Button>
                <Button variant="ghost" className="gap-2 text-slate-500" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4" /> Reset Defaults
                </Button>
            </div>
        </div>
    )
}
