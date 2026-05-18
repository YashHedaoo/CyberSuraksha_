"use client"

import { useState } from "react"
import { useDisguise } from "@/context/disguise-context"
import { Button } from "@/components/ui/button"
import { Delete, History, Calculator as CalcIcon } from "lucide-react"

export function CalculatorDisguise() {
    const [display, setDisplay] = useState("0")
    const { checkPin } = useDisguise()

    const handlePress = (val: string) => {
        if (display === "0") setDisplay(val)
        else setDisplay(display + val)
    }

    const handleClear = () => setDisplay("0")

    const handleEqual = () => {
        // Silent FIR Trigger Code: 100100 (Indian Police Standard)
        if (display === "100100") {
            // Trigger Silent Logic
            alert("SILENT FIR INITIATED: Location Being Tracked. Audio Recording Started.")
            // In a real app, this would make a background API call
            setDisplay("0")
            return
        }

        // Here is the magic: check if the 'calculation' is actually the PIN
        if (checkPin(display)) {
            // Unlock happens via context
        } else {
            // Fake calculation logic for realism
            try {
                // eslint-disable-next-line no-eval
                setDisplay(String(eval(display)))
            } catch {
                setDisplay("Error")
            }
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-xs bg-black rounded-3xl p-6 shadow-2xl border border-gray-800">
                {/* Real-looking calculator display */}
                <div className="mb-6 bg-gray-800/50 rounded-xl p-4 text-right h-24 flex items-end justify-end">
                    <span className="text-4xl font-mono text-white tracking-widest">{display}</span>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <Button variant="secondary" className="h-14 w-14 rounded-full text-xl bg-gray-300 text-black hover:bg-gray-200" onClick={handleClear}>C</Button>
                    <Button variant="secondary" className="h-14 w-14 rounded-full text-xl bg-gray-300 text-black hover:bg-gray-200" onClick={() => setDisplay(display.slice(0, -1))}><Delete className="h-5 w-5" /></Button>
                    <Button variant="secondary" className="h-14 w-14 rounded-full text-xl bg-gray-300 text-black hover:bg-gray-200" onClick={() => handlePress("%")}>%</Button>
                    <Button className="h-14 w-14 rounded-full text-xl bg-orange-500 hover:bg-orange-400 text-white" onClick={() => handlePress("/")}>/</Button>

                    {[7, 8, 9].map(n => (
                        <Button key={n} className="h-14 w-14 rounded-full text-2xl bg-gray-700 hover:bg-gray-600 border-0" onClick={() => handlePress(String(n))}>{n}</Button>
                    ))}
                    <Button className="h-14 w-14 rounded-full text-xl bg-orange-500 hover:bg-orange-400 text-white" onClick={() => handlePress("*")}>×</Button>

                    {[4, 5, 6].map(n => (
                        <Button key={n} className="h-14 w-14 rounded-full text-2xl bg-gray-700 hover:bg-gray-600 border-0" onClick={() => handlePress(String(n))}>{n}</Button>
                    ))}
                    <Button className="h-14 w-14 rounded-full text-xl bg-orange-500 hover:bg-orange-400 text-white" onClick={() => handlePress("-")}>-</Button>

                    {[1, 2, 3].map(n => (
                        <Button key={n} className="h-14 w-14 rounded-full text-2xl bg-gray-700 hover:bg-gray-600 border-0" onClick={() => handlePress(String(n))}>{n}</Button>
                    ))}
                    <Button className="h-14 w-14 rounded-full text-xl bg-orange-500 hover:bg-orange-400 text-white" onClick={() => handlePress("+")}>+</Button>

                    <Button className="h-14 w-28 col-span-2 rounded-full text-2xl bg-gray-700 hover:bg-gray-600 border-0" onClick={() => handlePress("0")}>0</Button>
                    <Button className="h-14 w-14 rounded-full text-2xl bg-gray-700 hover:bg-gray-600 border-0" onClick={() => handlePress(".")}>.</Button>
                    <Button className="h-14 w-14 rounded-full text-xl bg-orange-500 hover:bg-orange-400 text-white" onClick={handleEqual}>=</Button>
                </div>

                <div className="mt-8 text-center text-gray-600 text-xs">
                    Standard Calc v1.2
                </div>
            </div>
        </div>
    )
}
