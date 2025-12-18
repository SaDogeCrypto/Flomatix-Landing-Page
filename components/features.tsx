import { MessageSquare, Clock, Globe, Users, LayoutGrid, Shield } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Natural language scheduling",
    description: "Just say who, what, and when. No forms, no complex syntax — Buzz understands plain English.",
  },
  {
    icon: Users,
    title: "Human-tone delivery",
    description:
      "Messages feel like you sent them yourself. No robotic 'reminder from bot' — just your words, delivered.",
  },
  {
    icon: Shield,
    title: "Quiet confirmations",
    description: "You get a simple receipt so you trust it worked. No noise, no unnecessary notifications.",
  },
  {
    icon: Globe,
    title: "Time zone aware",
    description: "Delivered in the recipient's local time automatically. Works seamlessly across distributed teams.",
  },
  {
    icon: Clock,
    title: "No task system",
    description: "No projects, no boards, no overhead. Just send a message later. That's it.",
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
          <h2 className="text-3xl md:text-4xl font-semibold text-ms-black mb-4">Time-shifted messaging, simplified</h2>
          <p className="text-lg text-ms-gray-130 max-w-[600px] mx-auto">
            All the features you need to send messages later, without the complexity of task management.
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
