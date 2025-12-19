import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - Buzz by Flomatix",
  description: "Terms of Service for using Buzz, the Microsoft Teams messaging app.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-ms-gray-90 mb-4">Terms of Service</h1>
          <p className="text-ms-gray-130 mb-12">Last updated: December 2024</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Acceptance of Terms</h2>
            <p className="text-ms-gray-130">By installing and using Buzz, you agree to these Terms of Service.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Description of Service</h2>
            <p className="text-ms-gray-130">
              Buzz is a Microsoft Teams application that allows users to schedule follow-up reminder messages ("buzzes")
              to be delivered to teammates at a specified time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Acceptable Use</h2>
            <p className="text-ms-gray-130 mb-4">You agree to use Buzz only for:</p>
            <ul className="space-y-2 text-ms-gray-130">
              <li>Legitimate workplace communication and follow-ups</li>
              <li>Sending messages to colleagues within your organization</li>
              <li>Professional and respectful communication</li>
            </ul>
            <p className="text-ms-gray-130 mb-4 mt-6">You agree NOT to use Buzz for:</p>
            <ul className="space-y-2 text-ms-gray-130">
              <li>Harassment, spam, or unwanted repeated messages</li>
              <li>Sending inappropriate, offensive, or harmful content</li>
              <li>Any activity that violates your organization's policies</li>
              <li>Any illegal activities</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">User Responsibilities</h2>
            <ul className="space-y-2 text-ms-gray-130">
              <li>You are responsible for the content of buzzes you send</li>
              <li>You must comply with your organization's communication policies</li>
              <li>You must have a legitimate workplace reason to contact recipients</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Service Availability</h2>
            <ul className="space-y-2 text-ms-gray-130">
              <li>We strive for high availability but do not guarantee uninterrupted service</li>
              <li>Buzz delivery depends on Microsoft Teams and Azure services availability</li>
              <li>Scheduled buzzes may be delayed if recipients have not installed the app</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Limitations of Liability</h2>
            <p className="text-ms-gray-130 mb-4">
              The app is provided "as is" without warranties. We are not liable for:
            </p>
            <ul className="space-y-2 text-ms-gray-130">
              <li>Failed or delayed message delivery</li>
              <li>Any damages arising from use of the app</li>
              <li>Content of messages sent through the app</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Data and Privacy</h2>
            <p className="text-ms-gray-130">Your use of Buzz is governed by our Privacy Policy.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Modifications</h2>
            <p className="text-ms-gray-130">
              We may modify these terms at any time. Continued use constitutes acceptance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Contact</h2>
            <p className="text-ms-gray-130">
              For questions, contact{" "}
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
