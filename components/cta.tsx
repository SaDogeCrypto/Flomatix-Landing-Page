import Link from "next/link"

export function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-ms-blue to-teams-purple text-center">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Never drop the ball on follow-ups again</h2>
        <p className="text-lg text-white/90 mb-8">
          Join teams using Buzz to stay on top of check-ins without the overhead.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-ms-blue rounded font-semibold text-base hover:bg-ms-gray-10 transition-colors"
        >
          Get Buzz for Teams — It's Free
        </Link>
      </div>
    </section>
  )
}
