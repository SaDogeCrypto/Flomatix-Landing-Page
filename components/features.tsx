import { MessageSquare, Clock, Wrench, Users, LayoutGrid, Shield } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Conversational Updates",
    description:
      "Team members chat with Mini naturally. No forms, no portals — just a quick conversation to share progress.",
  },
  {
    icon: Clock,
    title: "Smart Reminders",
    description:
      "Mini reaches out at the right time. Gentle nudges before deadlines, follow-ups when updates are overdue.",
  },
  {
    icon: Wrench,
    title: "Blocker Detection",
    description: "When someone's stuck, Mini flags it immediately. No more surprises at the status meeting.",
  },
  {
    icon: Users,
    title: "Team Dashboard",
    description: "See all your projects, milestones, and team progress in one place. Always know where things stand.",
  },
  {
    icon: LayoutGrid,
    title: "Native Teams Integration",
    description: "Lives right where your team already works. No new app to learn, no context switching.",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "SOC 2 compliant. Your data stays in your tenant. Built with enterprise security from day one.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-ms-black mb-4">Everything you need to stay in sync</h2>
          <p className="text-lg text-ms-gray-130 max-w-[600px] mx-auto">
            Mini handles the busywork of project management so you can focus on what matters.
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
