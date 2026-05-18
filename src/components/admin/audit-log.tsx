"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

const logs = [
    { id: 1, action: "VIEW_EVIDENCE", user: "Officer R. Singh", time: "10:42 AM", ip: "10.0.0.12", resource: "CASE-992" },
    { id: 2, action: "UPDATE_STATUS", user: "Officer M. Khan", time: "10:30 AM", ip: "10.0.0.15", resource: "CASE-988" },
    { id: 3, action: "LOGIN_SUCCESS", user: "Admin", time: "09:00 AM", ip: "192.168.1.1", resource: "System" },
    { id: 4, action: "EXPORT_PDF", user: "Officer R. Singh", time: "Yesterday", ip: "10.0.0.12", resource: "REPORT-DAILY" },
]

export function AuditLog() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h3 className="text-slate-400 text-sm font-bold mb-4 uppercase tracking-wider">Immutable Audit Log</h3>
            <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                    {logs.map(log => (
                        <div key={log.id} className="flex items-center justify-between text-xs p-2 hover:bg-slate-800 rounded border-b border-slate-800/50">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-blue-400">{log.time}</span>
                                <span className="font-bold text-slate-200">{log.action}</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-500">
                                <span>{log.user}</span>
                                <span className="font-mono">{log.ip}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}
