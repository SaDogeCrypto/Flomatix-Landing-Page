import { MessageSquare, Clock, Globe, Zap, LayoutGrid, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "One-touch responses",
    description: "Recipients tap Done, Snooze, or Reschedule — no typing required. Follow-ups resolve in seconds.",
  },
  {
    icon: MessageSquare,
    title: "Natural language commands",
    description: "Type 'SEND @Sarah A BUZZ tomorrow ABOUT the report' — Buzz handles the rest. No forms, no menus.",
  },
  {
    icon: Clock,
    title: "Thread-based follow-ups",
    description: "Chain multiple check-ins in a conversation. Keep related follow-ups organized and contextual.",
  },
  {
    icon: Shield,
    title: "Privacy-first",
    description: "Data auto-deleted after 90 days. Minimal collection, encrypted storage. Your conversations stay yours.",
  },
  {
    icon: Globe,
    title: "Enterprise-ready",
    description: "Multi-tenant support, rate limiting, and Azure infrastructure. Built for teams of any size.",
  },
  {
    icon: LayoutGrid,
    title: "Teams-native",
    description: "Lives in chat. No context switching, no separate app to check. Works where you already work.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-ms-black mb-4">Follow-ups that actually get done</h2>
          <p className="text-lg text-ms-gray-130 max-w-[600px] mx-auto">
            Gentle reminders with one-tap responses. No task boards, no complexity — just simple check-ins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 bg-ms-gray-10 rounded-lg border border-ms-gray-30 transition-all hover:border-ms-blue hover:shadow-lg hover:shadow-ms-blue/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ms-blue to-teams-purple rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-ms-black mb-3">{feature.title}</h3>
              <p className="text-[15px] text-ms-gray-130 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
