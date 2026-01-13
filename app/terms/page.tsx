import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - Blessing by Flomatix",
  description: "Terms of Service for using Blessing, the personalized blessing video service.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-ms-gray-90 mb-4">Terms of Service</h1>
          <p className="text-ms-gray-130 mb-12">Effective date: January 2026</p>

          <p className="text-ms-gray-130 mb-10">
            Blessing provides a service that allows users to generate and share personalized blessing videos.
            By using the service, you agree to these Terms.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">1. Use of the service</h2>
            <p className="text-ms-gray-130 mb-4">
              You may use Blessing for personal, non-commercial purposes.
            </p>
            <p className="text-ms-gray-130 mb-4">You agree not to:</p>
            <ul className="space-y-2 text-ms-gray-130">
              <li>Upload illegal, abusive, or harmful content</li>
              <li>Use the service to harass or impersonate others</li>
              <li>Attempt to misuse or overload the system</li>
            </ul>
            <p className="text-ms-gray-130 mt-4">
              We may suspend accounts that violate these rules.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">2. Content</h2>
            <p className="text-ms-gray-130 mb-2">You own the text you submit.</p>
            <p className="text-ms-gray-130 mb-4">Blessing owns the software and video generation system.</p>
            <p className="text-ms-gray-130">
              By using the service, you grant us permission to create and display blessing videos based on your input.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">3. No guarantees</h2>
            <p className="text-ms-gray-130 mb-4">
              Blessing provides creative, symbolic, and emotional content.
            </p>
            <p className="text-ms-gray-130 mb-4">We do not provide:</p>
            <ul className="space-y-2 text-ms-gray-130">
              <li>Medical advice</li>
              <li>Mental health services</li>
              <li>Legal or financial advice</li>
            </ul>
            <p className="text-ms-gray-130 mt-4">
              Blessings are meant for inspiration and expression, not professional guidance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">4. Payments and credits</h2>
            <p className="text-ms-gray-130 mb-2">
              Some features may require payment or credits.
            </p>
            <p className="text-ms-gray-130 mb-2">
              All sales are final unless otherwise required by law.
            </p>
            <p className="text-ms-gray-130">
              Credits have no cash value and may expire.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">5. Availability</h2>
            <p className="text-ms-gray-130">
              We may change, suspend, or discontinue parts of the service at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">6. Limitation of liability</h2>
            <p className="text-ms-gray-130 mb-2">Blessing is provided "as is".</p>
            <p className="text-ms-gray-130">
              We are not liable for damages arising from use of the service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">7. Contact</h2>
            <p className="text-ms-gray-130">
              For support or questions, contact:{" "}
              <a href="mailto:support@flomatix.ai" className="text-ms-purple hover:underline">
                support@flomatix.ai
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
