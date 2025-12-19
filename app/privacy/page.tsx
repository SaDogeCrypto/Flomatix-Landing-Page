import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Buzz by Flomatix",
  description: "Learn how Buzz collects, uses, and protects your data.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-ms-gray-90 mb-4">Privacy Policy</h1>
          <p className="text-ms-gray-130 mb-12">Last updated: December 2024</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Overview</h2>
            <p className="text-ms-gray-130">
              Buzz ("we", "our", or "the app") is a Microsoft Teams application that helps users schedule follow-up
              reminders with teammates.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Information We Collect</h2>
            <ul className="space-y-2 text-ms-gray-130">
              <li>
                <strong>User identifiers:</strong> Microsoft Entra ID user IDs to identify senders and recipients
              </li>
              <li>
                <strong>Display names:</strong> User display names to show who sent or will receive a buzz
              </li>
              <li>
                <strong>Buzz content:</strong> The message text you enter when creating a buzz
              </li>
              <li>
                <strong>Scheduling data:</strong> When you want your buzz to be delivered
              </li>
              <li>
                <strong>Conversation references:</strong> Technical data needed to deliver messages in Teams
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">How We Use Your Information</h2>
            <ul className="space-y-2 text-ms-gray-130">
              <li>Deliver scheduled buzzes to the intended recipients</li>
              <li>Display your sent and received buzzes within the app</li>
              <li>Notify you about delivery status of your buzzes</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Data Storage and Retention</h2>
            <ul className="space-y-2 text-ms-gray-130">
              <li>Data is stored in Azure SQL Database within your organization's tenant region</li>
              <li>Buzz data is automatically deleted after 90 days</li>
              <li>Data is encrypted at rest using Azure's encryption</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Data Sharing</h2>
            <p className="text-ms-gray-130 mb-4">
              We do not sell, trade, or share your personal information with third parties. Data is only accessed:
            </p>
            <ul className="space-y-2 text-ms-gray-130">
              <li>By the Microsoft Graph API to look up user information within your organization</li>
              <li>By Azure services to store and process data</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Your Rights</h2>
            <ul className="space-y-2 text-ms-gray-130">
              <li>View all buzzes you've sent or received within the app</li>
              <li>Cancel scheduled buzzes before they are delivered</li>
              <li>Request deletion of your data by contacting your IT administrator</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Security</h2>
            <ul className="space-y-2 text-ms-gray-130">
              <li>OAuth 2.0 authentication via Microsoft identity platform</li>
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Encrypted data storage</li>
              <li>Tenant isolation for multi-tenant deployments</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ms-gray-90 mb-4">Contact</h2>
            <p className="text-ms-gray-130">
              For privacy-related questions, contact{" "}
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
