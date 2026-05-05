import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Drop Support - Creative Technology LLC",
  description: "Support information for Drop, an app published by Creative Technology LLC.",
}

export default function DropSupportPage() {
  return (
    <main className="min-h-screen bg-white text-ms-black">
      <Navigation />
      <section className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ms-gray-130">Drop</p>
        <h1 className="text-4xl font-semibold text-ms-black">Drop Support</h1>
        <p className="mt-6 leading-7 text-ms-gray-130">
          For help with Drop, email{" "}
          <a className="text-ms-blue hover:underline" href="mailto:admin@flomatix.ai">
            admin@flomatix.ai
          </a>
          .
        </p>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-semibold text-ms-black">Common questions</h2>

          <div className="space-y-3 rounded-lg border border-ms-gray-30 p-6">
            <h3 className="text-lg font-semibold text-ms-black">The app says "no drop available" — what do I do?</h3>
            <p className="leading-7 text-ms-gray-130">
              A new shoot drops every week. If you see this message, the next drop is on its way. Check back soon.
            </p>
          </div>

          <div className="space-y-3 rounded-lg border border-ms-gray-30 p-6">
            <h3 className="text-lg font-semibold text-ms-black">My video didn't save to Photos.</h3>
            <p className="leading-7 text-ms-gray-130">
              Drop needs Photos permission to save your finished video. Check Settings → Drop → Photos and confirm
              access is enabled.
            </p>
          </div>

          <div className="space-y-3 rounded-lg border border-ms-gray-30 p-6">
            <h3 className="text-lg font-semibold text-ms-black">The app can't connect.</h3>
            <p className="leading-7 text-ms-gray-130">
              Drop needs an internet connection to load each week's shoot. Confirm your Wi-Fi or cellular is working and
              try again.
            </p>
          </div>
        </section>

        <p className="mt-10 leading-7 text-ms-gray-130">
          For anything else, email{" "}
          <a className="text-ms-blue hover:underline" href="mailto:admin@flomatix.ai">
            admin@flomatix.ai
          </a>
          .
        </p>
      </section>
      <Footer />
    </main>
  )
}
