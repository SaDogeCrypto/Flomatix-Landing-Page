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
        <h1 className="text-4xl font-semibold text-ms-black">Drop Terms of Service</h1>
        <p className="mt-4 text-ms-gray-130">Last updated: May 5, 2026</p>

        <section className="mt-10 space-y-5 leading-7 text-ms-gray-130">
          <p>
            These Terms of Service govern your use of Drop, a directed photo session app published by Creative
            Technology LLC. By using Drop, you agree to these terms.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Use of Drop</h2>
            <p>
              Drop helps you capture and compose guided photo and video sessions on your device. You may use Drop for
              personal, lawful purposes.
            </p>
            <p>You agree not to use Drop to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Violate any law or regulation</li>
              <li>Harass, abuse, threaten, impersonate, or harm another person</li>
              <li>Create, save, or share unlawful, infringing, or harmful content</li>
              <li>Interfere with Drop, its configuration feed, or related services</li>
              <li>Attempt to reverse engineer, abuse, or disrupt the app</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Your content</h2>
            <p>
              You are responsible for the photos, videos, and other content you create with Drop. Drop processes and
              renders your captured content locally on your device.
            </p>
            <p>
              Creative Technology LLC does not claim ownership of the photos or videos you create with Drop.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Saving and sharing</h2>
            <p>
              If you choose to save a completed shoot, Drop writes the final composed video to your Photos library. You
              are responsible for deciding what to save, delete, or share.
            </p>
            <p>
              If you share content from Drop to another app, such as TikTok, that app's own terms and policies govern
              what happens after the content is handed off through iOS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Third-party platforms</h2>
            <p>
              Drop may interact with Apple, TikTok, or other third-party platform features. Those platforms are not
              controlled by Creative Technology LLC and may have their own terms, policies, technical limits, and review
              requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Availability and changes</h2>
            <p>
              Drop may change over time. Features, guided shoots, configuration files, suggested songs, and platform
              integrations may be updated, paused, or discontinued at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">No warranties</h2>
            <p>
              Drop is provided as-is and as available. To the fullest extent permitted by law, Creative Technology LLC
              disclaims warranties of any kind, including implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Creative Technology LLC will not be liable for indirect,
              incidental, special, consequential, or punitive damages, or for loss of data, content, profits, or goodwill
              arising from your use of Drop.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. If these terms change, the "Last updated" date above will be
              updated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-ms-black">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a className="text-ms-blue hover:underline" href="mailto:admin@flomatix.ai">
                admin@flomatix.ai
              </a>
              .
            </p>
          </section>
        </section>
      </article>
      <Footer />
    </main>
  )
}
