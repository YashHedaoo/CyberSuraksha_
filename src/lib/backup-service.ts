"use client"

import { toast } from "react-hot-toast"

/**
 * CyberSuraksha Backup System
 * Allows users to export their "Digital Soul" (Local Data) and restore it securely.
 */

const STORAGE_KEYS = [
    'cyber_user_session',
    'cyber_police_session',
    'cyber_mock_db',
    'police_settings',
    'cyber_theme'
]

export const DataBackupService = {
    /**
     * Creates a downloadable JSON file of all critical local storage data.
     */
    createBackup: () => {
        try {
            const backupData: Record<string, any> = {
                timestamp: new Date().toISOString(),
                version: '3.2',
                data: {}
            }

            let hasData = false;

            STORAGE_KEYS.forEach(key => {
                const item = localStorage.getItem(key)
                if (item) {
                    try {
                        backupData.data[key] = JSON.parse(item)
                        hasData = true
                    } catch (e) {
                        console.warn(`Failed to parse key: ${key}`)
                    }
                }
            })

            if (!hasData) {
                toast.error("No data found to backup!")
                return
            }

            // Create Blob and Download
            const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `cybersuraksha_backup_${new Date().toISOString().slice(0, 10)}.cyb` // Custom extension .cyb
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)

            toast.success("Secure Backup Downloaded!")
        } catch (error) {
            console.error("Backup failed", error)
            toast.error("Backup generation failed.")
        }
    },

    /**
     * restores data from an uploaded JSON file.
     */
    restoreBackup: async (file: File) => {
        return new Promise<void>((resolve, reject) => {
            const reader = new FileReader()

            reader.onload = (e) => {
                try {
                    const content = e.target?.result as string
                    const parsed = JSON.parse(content)

                    if (!parsed.data || !parsed.version) {
                        throw new Error("Invalid Backup File Format")
                    }

                    // Restore Keys
                    Object.entries(parsed.data).forEach(([key, value]) => {
                        if (STORAGE_KEYS.includes(key)) {
                            localStorage.setItem(key, JSON.stringify(value))
                        }
                    })

                    toast.success("System Restored Successfully! Reloading...")
                    setTimeout(() => window.location.reload(), 1500)
                    resolve()

                } catch (error) {
                    console.error("Restore failed", error)
                    toast.error("Invalid or Corrupted Backup File.")
                    reject(error)
                }
            }

            reader.readAsText(file)
        })
    }
}
