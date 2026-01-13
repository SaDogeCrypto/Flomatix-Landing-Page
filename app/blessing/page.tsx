"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { RitualNamePad } from "@/components/ritual-name-pad"

export default function BlessingPage() {
  const [showNameInput, setShowNameInput] = useState(false)
  const [recipientName, setRecipientName] = useState("")
  const [nameConfirmed, setNameConfirmed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoPlay = () => setIsPlaying(true)
  const handleVideoPause = () => setIsPlaying(false)

  const handleNameComplete = (name: string) => {
    setRecipientName(name)
    setNameConfirmed(true)
  }

  return (
    <main className="min-h-screen min-h-dvh bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F4] flex flex-col">
      {/* Main content - centered with flex grow */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-10 sm:py-16">
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
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              poster="/assets/blessing-poster.jpg"
            />
            {/* Play button overlay */}
            <button
              onClick={handlePlayClick}
              className={`absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300 ${
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl ring-1 ring-black/[0.03] transition-transform duration-200 hover:scale-105 active:scale-95">
                {isPlaying ? (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>
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
            {!showNameInput && !nameConfirmed && (
              <button
                onClick={() => setShowNameInput(true)}
                className="w-full h-[52px] bg-gray-900 text-white rounded-xl font-medium text-[15px] sm:text-base shadow-[0_2px_8px_-2px_rgba(0,0,0,0.2)] hover:bg-gray-800 hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.25)] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              >
                Make it personal
              </button>
            )}

            {showNameInput && !nameConfirmed && (
              <div className="animate-fade-in-up">
                <RitualNamePad onComplete={handleNameComplete} />
              </div>
            )}

            {nameConfirmed && (
              <div className="space-y-4 animate-fade-in-up">
                {/* Name confirmation pill */}
                <div className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-[15px] text-gray-500">Creating blessing for</span>
                  <span className="text-[17px] font-serif text-gray-900 tracking-wide">
                    {recipientName}
                  </span>
                </div>

                <p className="text-center text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
                  Your blessing will include their name.
                </p>

                <button
                  disabled
                  className="w-full h-[52px] bg-gray-200 text-gray-400 rounded-xl font-medium text-[15px] sm:text-base cursor-not-allowed"
                >
                  Create my blessing
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Minimal footer - breathing room from bottom */}
      <footer className="py-6 pb-8 px-5">
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
