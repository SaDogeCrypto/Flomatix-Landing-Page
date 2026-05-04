import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Drop Terms of Service - Creative Technology LLC",
  description: "Terms of service for Drop, an app published by Creative Technology LLC.",
}

export default function DropTermsPage() {
  return (
    <main className="min-h-screen bg-white text-ms-black">
      <Navigation />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ms-gray-130">Drop</p>
        <h1 className="text-4xl font-semibold text-ms-black">Terms of Service</h1>
        <p className="mt-4 text-ms-gray-130">Effective date: May 4, 2026</p>

        <section className="mt-10 space-y-4 leading-7 text-ms-gray-130">
          <p>
            Drop is published by Creative Technology LLC. By using Drop, you agree to use the app lawfully and
            responsibly.
          </p>
          <p>
            You are responsible for the content you create, upload, submit, share, or route through Drop. You may not
            use Drop to violate laws, infringe rights, harass others, impersonate others, or interfere with the service.
          </p>
          <p>
            Drop may connect with third-party platforms such as Apple or TikTok. Those platforms may apply their own
            terms, policies, review requirements, and technical limits.
          </p>
          <p>
            We may update, suspend, or discontinue parts of Drop at any time. Drop is provided as-is to the extent
            permitted by law.
          </p>
          <p>
            Questions about these terms can be sent to{" "}
            <a className="text-ms-blue hover:underline" href="mailto:support@flomatix.ai">
              support@flomatix.ai
            </a>
            .
          </p>
        </section>
      </article>
      <Footer />
    </main>
  )
}
