import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions"
import { EmailClient } from "@azure/communication-email"

interface SupportRequest {
  name: string
  email: string
  subject: string
  category: string
  message: string
}

export async function support(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log("Support form submission received")

  try {
    const body = await request.json() as SupportRequest
    const { name, email, subject, category, message } = body

    context.log("Support form data:", { name, email, subject, category })

    // Validate required fields
    if (!name || !email || !subject || !category || !message) {
      context.log("Validation failed - missing fields")
      return {
        status: 400,
        jsonBody: { error: "All fields are required" }
      }
    }

    const connectionString = process.env.AZURE_COMMUNICATION_CONNECTION_STRING
    const senderEmail = process.env.AZURE_SENDER_EMAIL

    if (!connectionString) {
      context.error("AZURE_COMMUNICATION_CONNECTION_STRING is not configured")
      return {
        status: 500,
        jsonBody: { error: "Email service not configured" }
      }
    }

    if (!senderEmail) {
      context.error("AZURE_SENDER_EMAIL is not configured")
      return {
        status: 500,
        jsonBody: { error: "Sender email not configured" }
      }
    }

    context.log("Creating Azure Email Client...")
    const emailClient = new EmailClient(connectionString)

    const emailMessage = {
      senderAddress: senderEmail,
      content: {
        subject: `[${category}] ${subject}`,
        html: `
          <h2>New Support Inquiry</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      },
      recipients: {
        to: [{ address: "support@flomatix.ai" }],
      },
      replyTo: [{ address: email }],
    }

    context.log("Sending email via Azure Communication Services...")
    const poller = await emailClient.beginSend(emailMessage)
    const result = await poller.pollUntilDone()
    context.log("Email sent successfully:", result)

    return {
      status: 200,
      jsonBody: { success: true }
    }
  } catch (error) {
    context.error("Support form error:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again."
    return {
      status: 500,
      jsonBody: {
        error: errorMessage,
        details: error instanceof Error ? error.stack : undefined
      }
    }
  }
}

app.http("support", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "support",
  handler: support,
})
