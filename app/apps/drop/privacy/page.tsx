import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Drop Privacy Policy - Creative Technology LLC",
  description: "Privacy policy for Drop, an app published by Creative Technology LLC.",
}

export default function DropPrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-ms-black">
      <Navigation />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ms-gray-130">Drop</p>
        <h1 className="text-4xl font-semibold text-ms-black">Privacy Policy</h1>
        <p className="mt-4 text-ms-gray-130">Effective date: May 4, 2026</p>

        <section className="mt-10 space-y-4 leading-7 text-ms-gray-130">
          <p>
            Drop is published by Creative Technology LLC. This policy explains how we handle information related to
            Drop.
          </p>
          <p>
            We collect only the information needed to operate, support, secure, and improve the app. This may include
            information you provide in the app, basic account or contact information, device and diagnostic data, and
            platform data needed for sharing, redirects, or app links.
          </p>
          <p>
            We do not sell personal information. We may use trusted service providers to host, analyze, secure, or
            support the app, and those providers may process information on our behalf.
          </p>
          <p>
            If Drop uses Apple, TikTok, or other third-party platform features, your use of those features may also be
            governed by the platform provider's own terms and privacy practices.
          </p>
          <p>
            To request help, deletion, or more information, contact{" "}
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
