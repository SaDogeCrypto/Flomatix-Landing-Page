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
        <h1 className="text-4xl font-semibold text-ms-black">Support</h1>
        <p className="mt-6 leading-7 text-ms-gray-130">
          For help with Drop, contact Creative Technology LLC at{" "}
          <a className="text-ms-blue hover:underline" href="mailto:support@flomatix.ai">
            support@flomatix.ai
          </a>
          .
        </p>
      </section>
      <Footer />
    </main>
  )
}
