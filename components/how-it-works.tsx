const steps = [
  {
    number: 1,
    title: "Add Buzz to Teams",
    description: "Install from the Teams app store in seconds. Works immediately.",
  },
  {
    number: 2,
    title: "Send a Buzz",
    description: "Type: SEND @Sarah A BUZZ tomorrow ABOUT the quarterly report",
  },
  {
    number: 3,
    title: "They respond in one tap",
    description: "Sarah gets the reminder and taps Done, Snooze, or Reschedule. You're notified.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-ms-gray-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-ms-black mb-4">Three steps. That's it.</h2>
          <p className="text-lg text-ms-gray-130 max-w-[600px] mx-auto">
            No setup, no configuration, no learning curve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-gradient-to-r from-ms-blue to-teams-purple" />

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="w-20 h-20 bg-white border-[3px] border-ms-blue rounded-full flex items-center justify-center text-3xl font-bold text-ms-blue mx-auto mb-6 relative z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-ms-black mb-3">{step.title}</h3>
              <p className="text-[15px] text-ms-gray-130 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
