"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Users, MapPin, Radio, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface Contact {
    id: string
    name: string
    phone: string
    relation: string
}

export function GuardianAlerts() {
    const [contacts, setContacts] = useState<Contact[]>([
        { id: "1", name: "Dad", phone: "+91-9876543210", relation: "Parent" },
        { id: "2", name: "Brother", phone: "+91-9876543211", relation: "Sibling" }
    ])
    const [newContact, setNewContact] = useState({ name: "", phone: "", relation: "" })
    const [isBroadcasting, setIsBroadcasting] = useState(false)

    const addContact = () => {
        if (newContact.name && newContact.phone) {
            setContacts([...contacts, { ...newContact, id: crypto.randomUUID() }])
            setNewContact({ name: "", phone: "", relation: "" })
        }
    }

    const triggerBroadcast = () => {
        setIsBroadcasting(true)
        // Mock SOS Effect
        setTimeout(() => setIsBroadcasting(false), 5000)
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-red-500 flex items-center gap-2">
                    <ShieldAlert className="w-6 h-6 animate-pulse" /> Guardian Net
                </h2>
                <Button
                    variant={isBroadcasting ? "destructive" : "outline"}
                    className={`border-red-500 text-red-500 hover:bg-red-500 hover:text-white ${isBroadcasting ? 'animate-bounce' : ''}`}
                    onClick={triggerBroadcast}
                >
                    <Radio className="w-4 h-4 mr-2" />
                    {isBroadcasting ? "BROADCASTING SOS..." : "Test Emergency Broadcast"}
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Trusted Contacts */}
                <Card className="p-6 bg-slate-900 border-slate-800">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Users className="w-5 h-5 mr-2" /> Trusted Contacts
                    </h3>
                    <div className="space-y-4">
                        {contacts.map(contact => (
                            <div key={contact.id} className="flex justify-between items-center bg-slate-800 p-3 rounded-lg">
                                <div>
                                    <p className="font-medium">{contact.name}</p>
                                    <p className="text-xs text-muted-foreground">{contact.phone} • {contact.relation}</p>
                                </div>
                                <Badge variant="outline" className="border-green-500 text-green-500">Active</Badge>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-700 space-y-3">
                        <p className="text-xs text-muted-foreground">Add New Guardian</p>
                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                placeholder="Name"
                                value={newContact.name}
                                onChange={e => setNewContact({ ...newContact, name: e.target.value })}
                                className="bg-slate-800 border-slate-700"
                            />
                            <Input
                                placeholder="Phone"
                                value={newContact.phone}
                                onChange={e => setNewContact({ ...newContact, phone: e.target.value })}
                                className="bg-slate-800 border-slate-700"
                            />
                        </div>
                        <Button onClick={addContact} className="w-full bg-slate-700 hover:bg-slate-600">Add Guardian</Button>
                    </div>
                </Card>

                {/* Live Alert Status */}
                <Card className="p-6 bg-slate-900 border-slate-800 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <MapPin className="w-5 h-5 mr-2" /> Regional Status
                        </h3>
                        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl mb-4 text-red-400">
                            <p className="font-bold flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                                High Alert Zone
                            </p>
                            <p className="text-sm mt-1">
                                Recent phishing wave reported in your pincode (400001).
                                3 FIRs filed in last 24hrs.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Community Watch</span>
                            <span className="text-green-500 font-bold">1,204 Active</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Police Response Time</span>
                            <span className="text-orange-500 font-bold">~12 Mins</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
