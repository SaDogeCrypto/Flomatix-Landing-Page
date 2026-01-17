"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { BlessingEvents } from "@/components/analytics"

export default function BlessingPage() {
  const [showNameInput, setShowNameInput] = useState(false)
  const [recipientName, setRecipientName] = useState("")
  const [keyboardOpen, setKeyboardOpen] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [audioUnlocked, setAudioUnlocked] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Track page view on mount
  useEffect(() => {
    BlessingEvents.pageView()
  }, [])

  // Track video events
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => BlessingEvents.videoPlayed()
    const handleEnded = () => BlessingEvents.videoEnded()

    video.addEventListener("play", handlePlay)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  // Try to autoplay with low volume after 500ms
  useEffect(() => {
    const video = videoRef.current
    if (!video || audioUnlocked) return

    const timer = setTimeout(() => {
      video.volume = 0.25
      video.muted = false
      video.play().then(() => {
        setAudioUnlocked(true)
        BlessingEvents.tapToListen()
      }).catch(() => {
        // Autoplay with audio blocked - keep muted
        video.muted = true
        video.volume = 1
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [videoLoaded, audioUnlocked])

  const handleTapToListen = () => {
    if (videoRef.current && !audioUnlocked) {
      videoRef.current.muted = false
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setAudioUnlocked(true)
      BlessingEvents.tapToListen()
    }
  }

  const handleMakePersonal = () => {
    inputRef.current?.focus()
    setShowNameInput(true)
    BlessingEvents.beginClicked()
  }

  const handleInputFocus = () => {
    setKeyboardOpen(true)
    BlessingEvents.nameInputFocused()
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 150)
  }

  const handleInputBlur = () => {
    setKeyboardOpen(false)
    if (recipientName.trim().length > 0) {
      BlessingEvents.nameEntered(recipientName.trim().length)
    }
  }

  const isValidName = recipientName.trim().length >= 2

  return (
    <main className="min-h-screen min-h-dvh bg-[#FAFAFA] flex flex-col overflow-x-hidden">
      {/* Scrollable content */}
      <div
        className={`flex-1 overflow-y-auto overflow-x-hidden transition-[padding] duration-200 ${
          keyboardOpen ? "pb-[320px]" : "pb-0"
        }`}
      >
        <div className="flex flex-col items-center px-4 pt-3 pb-4 sm:pt-6 sm:pb-6">
          {/* Video container - 9:16 portrait, no wrapper card */}
          <div className="w-full max-w-[220px] sm:max-w-[280px]">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-cover bg-center cursor-pointer"
              style={{
                aspectRatio: "9/16",
                backgroundImage: "url('https://blessingappvideos.blob.core.windows.net/videos/lume_idle_poster.jpg')"
              }}
              role="region"
              aria-label="Blessing video"
              onClick={handleTapToListen}
            >
              <video
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                src="https://blessingappvideos.blob.core.windows.net/videos/lume_validation_voiceover.mp4"
                autoPlay
                muted
                playsInline
                loop
                poster="https://blessingappvideos.blob.core.windows.net/videos/lume_idle_poster.jpg"
                onCanPlay={() => setVideoLoaded(true)}
              />
              {/* Value banner - always visible on video */}
              <div className="absolute bottom-[33%] left-0 right-0 px-3">
                <p className="text-white text-center text-[13px] font-medium leading-tight drop-shadow-lg" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                  A short spoken message — made just for them
                </p>
              </div>
              {/* Tap to listen overlay */}
              {!audioUnlocked && videoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-900 shadow-lg">
                    Tap to listen
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Copy and CTA - wider than video */}
          <div className="w-full max-w-[280px] sm:max-w-[340px]">
            {/* Copy - directly below video */}
            <div className="text-center mt-4 mb-4">
              <h1 className="text-[20px] sm:text-[22px] font-semibold text-gray-900 tracking-[-0.01em] leading-tight mb-2">
                Create a short, spoken message — just for them
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Lume creates an 8-second video message, personalized with a name and intention, that you can send to someone who needs it.
              </p>
            </div>

            {/* CTA section */}
            <div className="space-y-3">
              {/* Input */}
              <input
                ref={inputRef}
                type="text"
                id="recipientName"
                name="recipientName"
                placeholder="Who should Lume speak to?"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                autoComplete="name"
                autoCapitalize="words"
                spellCheck={false}
                maxLength={32}
                aria-label="Recipient name"
                className={`w-full h-[46px] px-4 bg-white border border-gray-200 rounded-xl text-gray-900 text-[16px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 ${
                  showNameInput ? "" : "sr-only"
                }`}
                tabIndex={showNameInput ? 0 : -1}
              />

              {/* Primary button */}
              <button
                onClick={
                  !showNameInput
                    ? handleMakePersonal
                    : isValidName
                      ? () => BlessingEvents.continueClicked(recipientName.trim())
                      : undefined
                }
                disabled={showNameInput && !isValidName}
                className={`w-full h-[46px] rounded-xl font-medium text-[15px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 ${
                  showNameInput && !isValidName
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-900 text-white shadow-sm hover:bg-gray-800 active:scale-[0.98]"
                }`}
              >
                {showNameInput ? "Continue" : "Create a personal message"}
              </button>

              {/* Micro-copy */}
              {!showNameInput && (
                <p className="text-center text-[12px] text-gray-400">
                  Takes about 10 seconds
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-3 px-4"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="flex justify-center items-center gap-4 text-[11px] text-gray-400">
          <Link
            href="/privacy"
            className="hover:text-gray-600 hover:underline underline-offset-2 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-300" aria-hidden="true">•</span>
          <Link
            href="/terms"
            className="hover:text-gray-600 hover:underline underline-offset-2 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  )
}
