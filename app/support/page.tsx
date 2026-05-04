import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export const metadata = {
  title: "Support - Creative Technology LLC",
  description: "Support resources for apps published by Creative Technology LLC.",
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white text-ms-black">
      <Navigation />
      <section className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ms-gray-130">
          Creative Technology LLC
        </p>
        <h1 className="text-4xl font-semibold text-ms-black">Support</h1>
        <p className="mt-6 leading-7 text-ms-gray-130">
          For general support, contact{" "}
          <a className="text-ms-blue hover:underline" href="mailto:support@flomatix.ai">
            support@flomatix.ai
          </a>
          .
        </p>

        <div className="mt-10 rounded-lg border border-ms-gray-30 p-6">
          <h2 className="text-2xl font-semibold text-ms-black">Drop</h2>
          <Link className="mt-5 inline-block text-ms-blue hover:underline" href="/apps/drop/support">
            View Drop Support
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
