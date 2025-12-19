import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SupportForm } from "@/components/support-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-ms-gray-90 mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">How do I send a buzz?</AccordionTrigger>
                <AccordionContent className="text-ms-gray-130">
                  Open Buzz in Teams and use the composer card to select a recipient, write your message, and choose
                  when to deliver it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Can the recipient see who sent the buzz?</AccordionTrigger>
                <AccordionContent className="text-ms-gray-130">
                  Yes, the buzz includes your name so the recipient knows who's checking in.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What happens if the recipient doesn't have Buzz installed?
                </AccordionTrigger>
                <AccordionContent className="text-ms-gray-130">
                  Buzz will attempt to install itself for the recipient (if your IT admin has enabled this). Otherwise,
                  you'll be notified that the buzz couldn't be delivered.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Is there a limit to how many buzzes I can send?
                </AccordionTrigger>
                <AccordionContent className="text-ms-gray-130">
                  To ensure fair usage, there's a limit of 50 buzzes per hour per user.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">How do I cancel a scheduled buzz?</AccordionTrigger>
                <AccordionContent className="text-ms-gray-130">
                  Currently, scheduled buzzes cannot be cancelled after creation. We recommend double-checking
                  recipients and timing before sending.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <SupportForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
