"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function BlessingPage() {
  const [showNameInput, setShowNameInput] = useState(false)
  const [recipientName, setRecipientName] = useState("")
  const [audioUnlocked, setAudioUnlocked] = useState(false)
  const [keyboardOpen, setKeyboardOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleTapToListen = () => {
    if (videoRef.current && !audioUnlocked) {
      // Unmute, restart from beginning, and play
      videoRef.current.muted = false
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setAudioUnlocked(true)
    }
  }

  const handleMakePersonal = () => {
    // Focus input FIRST (synchronously) to satisfy iOS gesture requirement
    inputRef.current?.focus()
    // Then reveal the UI
    setShowNameInput(true)
  }

  const handleInputFocus = () => {
    setKeyboardOpen(true)
    // Scroll input into view after keyboard appears
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 150)
  }

  const handleInputBlur = () => {
    setKeyboardOpen(false)
  }

  const isValidName = recipientName.trim().length >= 2

  return (
    <main className="min-h-screen min-h-dvh bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F4] flex flex-col">
      {/* Scrollable content area */}
      <div
        ref={scrollContainerRef}
        className={`flex-1 overflow-y-auto overscroll-contain transition-[padding] duration-200 ${
          keyboardOpen ? "pb-[320px]" : "pb-0"
        }`}
      >
        <div className="min-h-full flex flex-col items-center justify-center px-5 py-10 sm:py-16">
          {/* Card container */}
          <div className="w-full max-w-[560px] mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] border border-black/[0.04] p-5 sm:p-8">
            {/* Video section */}
            <div
              className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_24px_-6px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.03]"
              role="region"
              aria-label="Blessing video"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/assets/sample-blessing.mp4"
                autoPlay
                muted
                playsInline
                loop
                poster="/assets/blessing-poster.jpg"
              />

              {/* Tap to listen overlay - shown until audio is unlocked */}
              {!audioUnlocked && (
                <button
                  onClick={handleTapToListen}
                  className="absolute inset-0 flex items-center justify-center bg-black/5 transition-opacity duration-300 cursor-pointer"
                  aria-label="Tap to listen with sound"
                >
                  {/* Subtle hint at bottom */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 px-3 py-2 bg-black/40 backdrop-blur-sm rounded-full">
                    {/* Speaker icon */}
                    <svg
                      className="w-4 h-4 text-white/90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                    </svg>
                    <span className="text-[13px] text-white/90 font-medium">
                      Tap to listen
                    </span>
                  </div>
                </button>
              )}
            </div>

            {/* Copy - increased spacing */}
            <div className="text-center mt-7 sm:mt-9 mb-8 sm:mb-10">
              <h1 className="text-[26px] sm:text-[32px] font-semibold text-gray-900 tracking-[-0.02em] leading-tight mb-3">
                A short blessing for you.
              </h1>
              <p className="text-[15px] sm:text-base text-gray-500 leading-relaxed">
                Someone shared this with you.
              </p>
            </div>

            {/* CTA section */}
            <div className="space-y-4">
              {/* Hidden input - always in DOM so we can focus synchronously on iOS */}
              <input
                ref={inputRef}
                type="text"
                id="recipientName"
                name="recipientName"
                placeholder="Enter their name"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                autoComplete="name"
                autoCapitalize="words"
                spellCheck={false}
                maxLength={32}
                aria-label="Recipient name"
                className={`w-full h-[52px] px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-[16px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white transition-all duration-200 ${
                  showNameInput ? "" : "sr-only"
                }`}
                tabIndex={showNameInput ? 0 : -1}
              />

              {/* Primary action button - always in same position */}
              <button
                onClick={!showNameInput ? handleMakePersonal : undefined}
                disabled={showNameInput && !isValidName}
                className={`w-full h-[52px] rounded-xl font-medium text-[15px] sm:text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 ${
                  showNameInput && !isValidName
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-900 text-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.2)] hover:bg-gray-800 hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.25)] active:scale-[0.98]"
                }`}
              >
                {!showNameInput
                  ? "Make it personal"
                  : isValidName
                  ? "Continue"
                  : "Enter a name"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal footer - breathing room from bottom */}
      <footer
        className="py-6 px-5 bg-gradient-to-b from-[#F5F5F4] to-[#F5F5F4]"
        style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
      >
        <div className="flex justify-center items-center gap-4 text-[13px] text-gray-400">
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
