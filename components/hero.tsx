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
            Send a message later —{" "}
            <span className="bg-gradient-to-r from-ms-blue to-teams-purple bg-clip-text text-transparent">
              without creating a task
            </span>
          </h1>

          <p className="text-lg text-ms-gray-130 mb-8 max-w-md leading-relaxed">
            Tell Buzz who to nudge and when. It delivers the message at the right moment — quietly and reliably — right
            in Microsoft Teams.
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
          <div className="w-full rounded-xl shadow-2xl bg-ms-gray-20 aspect-[16/10] overflow-hidden">
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
    <div className="w-full h-full bg-gradient-to-b from-[#f5f5f5] to-[#ebebeb] flex flex-col">
      {/* Header */}
      <div className="h-12 bg-teams-purple flex items-center px-4 gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-white/30" />
          <span className="w-3 h-3 rounded-full bg-white/30" />
          <span className="w-3 h-3 rounded-full bg-white/30" />
        </div>
        <div className="text-white text-sm font-semibold mx-auto">Mini • Project Assistant</div>
      </div>

      {/* Body */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-[68px] bg-[#ebebeb] border-r border-[#ddd] flex flex-col items-center py-3 gap-2">
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-lg">📊</div>
          <div className="w-10 h-10 rounded-lg bg-teams-purple text-white flex items-center justify-center text-lg">
            💬
          </div>
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-lg">📁</div>
        </div>

        {/* Chat */}
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          <ChatMessage
            avatar="S"
            message="Buzz @Alex tomorrow 9am: Did you have a chance to review the deck?"
            delay={0}
          />
          <ChatMessage avatar="M" isMini message="✅ I'll message Alex tomorrow at 9:00 AM" delay={1} />
          <ChatMessage avatar="S" message="Buzz me Friday 4pm: Follow up with vendor on contract redlines" delay={2} />
          <ChatMessage avatar="M" isMini message="✅ I'll remind you Friday at 4:00 PM" delay={3} />
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
