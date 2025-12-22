import { Users, TrendingUp, Calendar, Bell } from "lucide-react"

const useCases = [
  { icon: Users, label: "Project Managers", description: "Check in on action items" },
  { icon: TrendingUp, label: "Sales Teams", description: "Follow up on prospects" },
  { icon: Calendar, label: "HR & Finance", description: "Deadline reminders" },
  { icon: Bell, label: "Anyone", description: "Self-reminders" },
]

export function TrustedBy() {
  return (
    <section className="py-12 px-6 bg-white border-y border-ms-gray-30">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-xs uppercase tracking-wider text-ms-gray-130 mb-6">Perfect for</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {useCases.map((useCase) => (
            <div key={useCase.label} className="flex items-center gap-3 text-ms-gray-130">
              <useCase.icon className="w-5 h-5 text-ms-blue" />
              <div className="text-left">
                <span className="text-sm font-semibold block">{useCase.label}</span>
                <span className="text-xs text-ms-gray-90">{useCase.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
