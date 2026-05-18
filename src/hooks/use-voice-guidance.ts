"use client"

import { useState, useCallback, useEffect } from "react"

export function useVoiceGuidance() {
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [isEnabled, setIsEnabled] = useState(true) // Default to ON for impact

    const speak = useCallback((text: string, force = false) => {
        if (!isEnabled && !force) return
        if (!window.speechSynthesis) return

        // Cancel existing speech
        window.speechSynthesis.cancel()

        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 1.0
        utterance.pitch = 1.0
        utterance.volume = 1.0

        // Attempt to find a "natural" sounding voice (e.g., Google or Microsoft English)
        const voices = window.speechSynthesis.getVoices()
        const preferredVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Google') || v.name.includes('Neural')))
        if (preferredVoice) utterance.voice = preferredVoice

        utterance.onstart = () => setIsSpeaking(true)
        utterance.onend = () => setIsSpeaking(false)

        window.speechSynthesis.speak(utterance)
    }, [isEnabled])

    const cancel = useCallback(() => {
        window.speechSynthesis.cancel()
        setIsSpeaking(false)
    }, [])

    // Clean up on unmount
    useEffect(() => {
        return () => window.speechSynthesis.cancel()
    }, [])

    return { speak, cancel, isSpeaking, isEnabled, setIsEnabled }
}
