"use client"

import { Layers } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 bg-gradient-to-b from-ms-gray-10 to-white relative overflow-hidden">
      <div className="absolute top-0 -right-52 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,120,212,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-ms-gray-30 rounded-full text-sm text-ms-gray-130 mb-6 shadow-sm">
            <Layers className="w-4 h-4" />
            Built for Microsoft Teams
          </div>

          <h1 className="text-4xl md:text-[52px] font-semibold leading-tight text-ms-black mb-5">
            One-touch follow-ups —{" "}
            <span className="bg-gradient-to-r from-ms-blue to-teams-purple bg-clip-text text-transparent">
              without the overhead
            </span>
          </h1>

          <p className="text-lg text-ms-gray-130 mb-8 max-w-md leading-relaxed">
            Schedule gentle reminders to check in with your team. Recipients can respond with one tap — Done, Snooze, or Reschedule. No task boards, no complexity.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teams-purple text-white rounded font-semibold text-sm hover:bg-[#4b4c8c] transition-colors"
            >
              <TeamsIcon />
              Add to Teams
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-ms-blue text-ms-blue rounded font-semibold text-sm hover:bg-ms-gray-10 transition-colors"
            >
              See examples
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="w-full rounded-xl shadow-2xl bg-white overflow-hidden">
            <TeamsMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.625 6.375h-3v-3a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5v3h-3a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h3v3a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-3h3a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-1.5-1.5z" />
    </svg>
  )
}

function TeamsMockup() {
  return (
    <div className="w-full bg-white p-6 space-y-4">
      {/* Outgoing Message - Setting up the reminder (right side) */}
      <div className="flex justify-end gap-2">
        <div className="bg-teams-purple/10 rounded-lg p-4 border border-teams-purple/20 max-w-[75%]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-600">Remind</span>
            <span className="text-sm font-semibold text-teams-purple">Alex Johnson</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-gray-600">about</span>
            <span className="text-sm text-gray-800">"Q1 presentation for the migration project"</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button className="px-2.5 py-1.5 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 flex items-center gap-1">
              <span>⚡</span> Now
            </button>
            <button className="px-2.5 py-1.5 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 flex items-center gap-1">
              <span>🕐</span> Later today
            </button>
            <button className="px-2.5 py-1.5 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 flex items-center gap-1">
              <span>☁️</span> Tomorrow
            </button>
            <button className="px-2.5 py-1.5 bg-teams-purple border-2 border-teams-purple rounded text-xs font-semibold text-white flex items-center gap-1">
              <span>📅</span> Later this week
            </button>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 text-white text-xs font-semibold flex-shrink-0">
          SC
        </div>
      </div>

      {/* Incoming Message - Buzz notification (left side) */}
      <div className="flex justify-start gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-semibold flex-shrink-0">
          AJ
        </div>
        <div className="max-w-[75%]">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-1.5 mb-2">
             
              <span className="text-xs font-semibold text-gray-800">Sarah Chen is checking in</span>
            </div>
            <div className="text-xs text-gray-600 mb-3">About: "Q1 presentation for the migration project"</div>
            <div className="flex flex-wrap gap-1.5">
              <button className="px-2.5 py-1.5 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                <span>✅</span> Done
              </button>
              <button className="px-2.5 py-1.5 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                <span>😴</span> Snooze 1h
              </button>
              <button className="px-2.5 py-1.5 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                <span>☁️</span> Tomorrow
              </button>
              <button className="px-2.5 py-1.5 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                <span>📅</span> Next week
              </button>
              <button className="px-2.5 py-1.5 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                <span>🔕</span> No more buzzes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChatMessage({
  avatar,
  message,
  isMini,
  delay,
}: {
  avatar: string
  message: string
  isMini?: boolean
  delay: number
}) {
  return (
    <div
      className="flex gap-2.5 animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay * 0.3 + 0.3}s`, animationFillMode: "forwards" }}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
          isMini ? "bg-gradient-to-br from-ms-blue to-teams-purple text-white" : "bg-ms-blue text-white"
        }`}
      >
        {avatar}
      </div>
      <div
        className={`px-3.5 py-2.5 rounded-[4px_12px_12px_12px] text-sm text-ms-gray-90 max-w-[280px] ${
          isMini
            ? "bg-gradient-to-br from-ms-blue/10 to-teams-purple/10 border-l-[3px] border-ms-blue"
            : "bg-white shadow-sm"
        }`}
      >
        {message}
      </div>
    </div>
  )
}
