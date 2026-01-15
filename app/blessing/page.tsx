"use client"

import { useState, useRef } from "react"
import Link from "next/link"

export default function BlessingPage() {
  const [showNameInput, setShowNameInput] = useState(false)
  const [recipientName, setRecipientName] = useState("")
  const [audioUnlocked, setAudioUnlocked] = useState(false)
  const [keyboardOpen, setKeyboardOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleTapToListen = () => {
    if (videoRef.current && !audioUnlocked) {
      videoRef.current.muted = false
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setAudioUnlocked(true)
    }
  }

  const handleMakePersonal = () => {
    inputRef.current?.focus()
    setShowNameInput(true)
  }

  const handleInputFocus = () => {
    setKeyboardOpen(true)
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 150)
  }

  const handleInputBlur = () => {
    setKeyboardOpen(false)
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
          <div className="w-full max-w-[320px] sm:max-w-[360px]">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-lg"
              style={{ aspectRatio: "9/16" }}
              role="region"
              aria-label="Blessing video"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/assets/sample-blessing.mp4?v=3"
                autoPlay
                muted
                playsInline
                loop
                poster="/assets/blessing-poster.jpg"
              />

              {/* Tap to listen overlay - top right corner */}
              {!audioUnlocked && (
                <button
                  onClick={handleTapToListen}
                  className="absolute inset-0 cursor-pointer"
                  aria-label="Tap to listen with sound"
                >
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white/90"
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
                    <span className="text-[12px] text-white/90 font-medium">
                      Tap to listen
                    </span>
                  </div>
                </button>
              )}
            </div>

            {/* Copy - directly below video */}
            <div className="text-center mt-4 mb-4">
              <h1 className="text-[20px] sm:text-[22px] font-semibold text-gray-900 tracking-[-0.01em] leading-tight mb-1.5">
                Send a tiny moment of calm
              </h1>
              <p className="text-[14px] text-gray-500">
                Lume will create a gentle 8-second message for someone you care about
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
                onClick={!showNameInput ? handleMakePersonal : undefined}
                disabled={showNameInput && !isValidName}
                className={`w-full h-[46px] rounded-xl font-medium text-[15px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 ${
                  showNameInput && !isValidName
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-900 text-white shadow-sm hover:bg-gray-800 active:scale-[0.98]"
                }`}
              >
                {showNameInput ? "Continue" : "Make it personal"}
              </button>
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
