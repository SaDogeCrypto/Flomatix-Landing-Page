import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SupportForm } from "@/components/support-form"

export const metadata = {
  title: "Support - Buzz by Flomatix",
  description: "Get help with Buzz. Contact our support team for assistance.",
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ms-gray-90 mb-4">How can we help?</h1>
            <p className="text-lg text-ms-gray-130">
              Our support team is here to assist you. Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <SupportForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
