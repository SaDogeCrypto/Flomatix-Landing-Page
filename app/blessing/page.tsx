"use client"

import { useState, useRef } from "react"
import Link from "next/link"

export default function BlessingPage() {
  const [showNameInput, setShowNameInput] = useState(false)
  const [recipientName, setRecipientName] = useState("")
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

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Main content - centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg mx-auto">
          {/* Video section */}
          <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden mb-6 shadow-sm">
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
              className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity ${
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                {isPlaying ? (
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-800 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {/* Copy */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              A short blessing for you.
            </h1>
            <p className="text-gray-600 text-lg">
              Someone wanted you to receive this.
            </p>
          </div>

          {/* CTA section */}
          <div className="space-y-4">
            {!showNameInput ? (
              <button
                onClick={() => setShowNameInput(true)}
                className="w-full py-3 px-6 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Make it personal
              </button>
            ) : (
              <div className="space-y-4 animate-fade-in-up">
                <div>
                  <label htmlFor="recipientName" className="sr-only">
                    Recipient name
                  </label>
                  <input
                    type="text"
                    id="recipientName"
                    placeholder="Enter their name"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    autoComplete="off"
                  />
                </div>

                {recipientName.trim() && (
                  <div className="space-y-3 animate-fade-in-up">
                    <p className="text-center text-gray-600">
                      Your blessing will include their name.
                    </p>
                    <button
                      disabled
                      className="w-full py-3 px-6 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed"
                    >
                      Create my blessing
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Minimal footer with legal links */}
      <footer className="py-6 px-4 border-t border-gray-100">
        <div className="max-w-lg mx-auto flex justify-center items-center gap-6 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-gray-700 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/terms" className="hover:text-gray-700 transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  )
}
