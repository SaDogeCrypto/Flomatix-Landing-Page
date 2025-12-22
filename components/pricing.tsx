import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    price: "Free",
    description: "For individuals and small teams",
    features: [
      "Up to 10 buzzes/month",
      "Natural language commands",
      "One-touch responses",
      "Delivery confirmations",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$8",
    priceSuffix: "/ user / month",
    description: "For growing teams",
    features: [
      "Unlimited buzzes",
      "Thread-based follow-ups",
      "Time zone awareness",
      "Team analytics",
      "Priority support",
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-ms-gray-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-ms-black mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-ms-gray-130 max-w-[600px] mx-auto">
            Start free, upgrade when you're ready. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl p-10 relative transition-all hover:shadow-xl ${
                plan.featured ? "border-2 border-ms-blue" : "border border-ms-gray-30"
              }`}
            >
              <h3 className="text-2xl font-semibold text-ms-black mb-2">{plan.name}</h3>
              <div className="text-5xl font-bold text-ms-blue mb-2">
                {plan.price}
                {plan.priceSuffix && <span className="text-base font-normal text-ms-gray-130">{plan.priceSuffix}</span>}
              </div>
              <p className="text-sm text-ms-gray-130 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[15px] text-ms-gray-90">
                    <Check className="w-5 h-5 text-ms-teal flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`w-full flex items-center justify-center px-5 py-2.5 rounded font-semibold text-sm transition-colors ${
                  plan.featured
                    ? "bg-ms-blue text-white hover:bg-ms-blue-dark"
                    : "border border-ms-blue text-ms-blue hover:bg-ms-gray-10"
                }`}
              >
                {plan.featured ? "Start Free Trial" : "Get Started Free"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
