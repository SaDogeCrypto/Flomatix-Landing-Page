"use client"

import { useState, useRef, useCallback, useEffect } from "react"

interface RitualNamePadProps {
  onComplete: (name: string) => void
  onCancel?: () => void
}

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
]

const MAX_LENGTH = 32

export function RitualNamePad({ onComplete, onCancel }: RitualNamePadProps) {
  const [name, setName] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const backspaceIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const backspaceTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Sync hidden input value
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = name
    }
  }, [name])

  // Prevent keyboard from appearing if input somehow gets focus
  useEffect(() => {
    const input = inputRef.current
    if (!input) return

    const handleFocus = () => {
      input.blur()
    }

    input.addEventListener("focus", handleFocus)
    return () => input.removeEventListener("focus", handleFocus)
  }, [])

  const addChar = useCallback((char: string) => {
    setName((prev) => {
      // Prevent double spaces
      if (char === " " && prev.endsWith(" ")) return prev
      // Trim leading spaces
      if (char === " " && prev.length === 0) return prev
      // Max length
      if (prev.length >= MAX_LENGTH) return prev
      return prev + char
    })
  }, [])

  const removeChar = useCallback(() => {
    setName((prev) => prev.slice(0, -1))
  }, [])

  const clearAll = useCallback(() => {
    setName("")
  }, [])

  const handleKeyPress = useCallback(
    (key: string) => {
      if (key === "BACKSPACE") {
        removeChar()
      } else if (key === "CLEAR") {
        clearAll()
      } else if (key === "SPACE") {
        addChar(" ")
      } else {
        addChar(key)
      }
    },
    [addChar, removeChar, clearAll]
  )

  // Long-press backspace support
  const startBackspaceRepeat = useCallback(() => {
    // Start repeating after 400ms hold
    backspaceTimeoutRef.current = setTimeout(() => {
      backspaceIntervalRef.current = setInterval(() => {
        removeChar()
      }, 75)
    }, 400)
  }, [removeChar])

  const stopBackspaceRepeat = useCallback(() => {
    if (backspaceTimeoutRef.current) {
      clearTimeout(backspaceTimeoutRef.current)
      backspaceTimeoutRef.current = null
    }
    if (backspaceIntervalRef.current) {
      clearInterval(backspaceIntervalRef.current)
      backspaceIntervalRef.current = null
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopBackspaceRepeat()
    }
  }, [stopBackspaceRepeat])

  const handleContinue = () => {
    const trimmedName = name.trim()
    if (trimmedName.length >= 2) {
      onComplete(trimmedName)
    }
  }

  const isValidName = name.trim().length >= 2

  return (
    <div className="space-y-5">
      {/* Hidden accessible input */}
      <input
        ref={inputRef}
        type="text"
        aria-label="Name"
        className="sr-only"
        tabIndex={-1}
        readOnly
        style={{ pointerEvents: "none" }}
      />

      {/* Name display pill */}
      <div className="relative">
        <div
          className="w-full min-h-[56px] px-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center"
          role="status"
          aria-live="polite"
          aria-label={name ? `Entered name: ${name}` : "Enter a name"}
        >
          {name ? (
            <span className="text-[18px] sm:text-[20px] text-gray-900 font-serif tracking-wide">
              {name}
              <span className="animate-pulse text-gray-400 ml-0.5">|</span>
            </span>
          ) : (
            <span className="text-[16px] text-gray-400">Enter a name</span>
          )}
        </div>

        {/* Backspace button */}
        <button
          type="button"
          onClick={() => handleKeyPress("BACKSPACE")}
          onMouseDown={startBackspaceRepeat}
          onMouseUp={stopBackspaceRepeat}
          onMouseLeave={stopBackspaceRepeat}
          onTouchStart={startBackspaceRepeat}
          onTouchEnd={stopBackspaceRepeat}
          onTouchCancel={stopBackspaceRepeat}
          disabled={name.length === 0}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-lg hover:bg-gray-100 active:bg-gray-200"
          aria-label="Delete last character"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414-6.414a2 2 0 011.414-.586H19a2 2 0 012 2v10a2 2 0 01-2 2h-8.172a2 2 0 01-1.414-.586L3 12z"
            />
          </svg>
        </button>
      </div>

      {/* Custom keypad */}
      <div
        className="bg-gray-100/80 rounded-2xl p-3 sm:p-4 space-y-2"
        role="group"
        aria-label="Name keypad"
      >
        {/* Letter rows */}
        {KEYBOARD_ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-[5px] sm:gap-1.5"
            style={{
              paddingLeft: rowIndex === 1 ? "4%" : rowIndex === 2 ? "10%" : 0,
              paddingRight: rowIndex === 1 ? "4%" : rowIndex === 2 ? "10%" : 0,
            }}
          >
            {row.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => handleKeyPress(key)}
                className="flex-1 max-w-[36px] sm:max-w-[42px] h-[44px] sm:h-[48px] bg-white rounded-lg sm:rounded-xl text-[15px] sm:text-[16px] font-medium text-gray-800 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-gray-50 active:bg-gray-100 active:shadow-none active:translate-y-[1px] transition-all duration-100 select-none"
                aria-label={key}
              >
                {key}
              </button>
            ))}
          </div>
        ))}

        {/* Utility row */}
        <div className="flex justify-center gap-[5px] sm:gap-1.5 pt-1">
          <button
            type="button"
            onClick={() => handleKeyPress("SPACE")}
            className="flex-[2] max-w-[100px] h-[44px] sm:h-[48px] bg-white rounded-lg sm:rounded-xl text-[13px] sm:text-[14px] font-medium text-gray-600 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-gray-50 active:bg-gray-100 active:shadow-none active:translate-y-[1px] transition-all duration-100 select-none"
            aria-label="Space"
          >
            space
          </button>
          <button
            type="button"
            onClick={() => handleKeyPress("-")}
            className="w-[44px] sm:w-[48px] h-[44px] sm:h-[48px] bg-white rounded-lg sm:rounded-xl text-[18px] font-medium text-gray-800 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-gray-50 active:bg-gray-100 active:shadow-none active:translate-y-[1px] transition-all duration-100 select-none"
            aria-label="Hyphen"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => handleKeyPress("'")}
            className="w-[44px] sm:w-[48px] h-[44px] sm:h-[48px] bg-white rounded-lg sm:rounded-xl text-[18px] font-medium text-gray-800 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-gray-50 active:bg-gray-100 active:shadow-none active:translate-y-[1px] transition-all duration-100 select-none"
            aria-label="Apostrophe"
          >
            '
          </button>
          <button
            type="button"
            onClick={() => handleKeyPress("CLEAR")}
            disabled={name.length === 0}
            className="flex-[1.5] max-w-[80px] h-[44px] sm:h-[48px] bg-white rounded-lg sm:rounded-xl text-[13px] sm:text-[14px] font-medium text-gray-600 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:bg-gray-50 active:bg-gray-100 active:shadow-none active:translate-y-[1px] transition-all duration-100 select-none disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Clear all"
          >
            clear
          </button>
        </div>
      </div>

      {/* Continue button */}
      <button
        type="button"
        onClick={handleContinue}
        disabled={!isValidName}
        className="w-full h-[52px] bg-gray-900 text-white rounded-xl font-medium text-[15px] sm:text-base shadow-[0_2px_8px_-2px_rgba(0,0,0,0.2)] hover:bg-gray-800 hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.25)] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed disabled:active:scale-100"
      >
        Continue
      </button>
    </div>
  )
}
