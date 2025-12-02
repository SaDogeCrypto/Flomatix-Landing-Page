import { Star } from "lucide-react"

const testimonials = [
  {
    text: "Finally, status updates that don't feel like pulling teeth. My team actually responds to Mini because it feels like chatting with a colleague.",
    author: "Jessica Martinez",
    role: "Engineering Manager",
    initials: "JM",
  },
  {
    text: "We eliminated our Monday status meetings. Mini keeps everyone informed async, and I get 2 hours of my week back.",
    author: "David Kim",
    role: "Product Lead, Series B Startup",
    initials: "DK",
  },
  {
    text: "The blocker detection is a game-changer. I find out about issues immediately instead of at Friday's standup when it's too late.",
    author: "Rachel Patel",
    role: "Director of Operations",
    initials: "RP",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-ms-black mb-4">Loved by teams everywhere</h2>
          <p className="text-lg text-ms-gray-130 max-w-[600px] mx-auto">
            See what project managers and team leads are saying about Mini.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-8 bg-white border border-ms-gray-30 rounded-lg transition-all hover:shadow-lg"
            >
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-[15px] text-ms-gray-90 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-ms-blue to-teams-purple text-white flex items-center justify-center font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ms-black">{testimonial.author}</h4>
                  <p className="text-sm text-ms-gray-130">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
