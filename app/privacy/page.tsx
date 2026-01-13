import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Blessing by Flomatix",
  description: "Learn how Blessing collects, uses, and protects your data.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-ms-gray-90 mb-4">Privacy Policy</h1>
          <p className="text-ms-gray-130 mb-12">Effective date: January 2026</p>

          <p className="text-ms-gray-130 mb-8">
            Blessing ("we", "our", "us") provides a web and mobile service that allows users to generate and share
            short personalized blessing videos.
          </p>
          <p className="text-ms-gray-130 mb-10">
            We respect your privacy and are committed to handling your information responsibly.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">1. Information we collect</h2>
            <p className="text-ms-gray-130 mb-4">We collect only the information needed to provide the service:</p>
            <ul className="space-y-2 text-ms-gray-130">
              <li>Names or short text you enter when creating a blessing</li>
              <li>The generated blessing video</li>
              <li>Basic technical information (such as IP address, browser type, and device)</li>
              <li>Payment information, if you choose to purchase credits or features (processed by third-party payment providers)</li>
            </ul>
            <p className="text-ms-gray-130 mt-4">
              We do not collect sensitive personal data such as health, financial, or government information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">2. How we use your information</h2>
            <p className="text-ms-gray-130 mb-4">We use your information to:</p>
            <ul className="space-y-2 text-ms-gray-130">
              <li>Generate and deliver blessing videos</li>
              <li>Display your past blessings inside the app</li>
              <li>Process payments</li>
              <li>Improve and maintain the service</li>
              <li>Prevent abuse or misuse</li>
            </ul>
            <p className="text-ms-gray-130 mt-4 font-medium">We do not sell your personal data.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">3. Video & content storage</h2>
            <p className="text-ms-gray-130 mb-2">
              Blessing videos may be stored so that you can view, download, or resend them.
            </p>
            <p className="text-ms-gray-130">
              You may delete your blessings at any time from the app or by contacting us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">4. Payments</h2>
            <p className="text-ms-gray-130">
              Payments are processed by third-party providers such as Apple, Google, or Stripe.
              We do not store your full payment card details.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">5. Sharing</h2>
            <p className="text-ms-gray-130 mb-2">
              If you choose to share a blessing, it may be accessible to anyone with the link.
            </p>
            <p className="text-ms-gray-130">
              Please do not include private or sensitive information in blessings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">6. Data retention</h2>
            <p className="text-ms-gray-130 mb-2">
              We keep your data only as long as needed to provide the service or as required by law.
            </p>
            <p className="text-ms-gray-130">You may request deletion at any time.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">7. Contact</h2>
            <p className="text-ms-gray-130">
              If you have any questions or requests about your data, contact us at:{" "}
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
