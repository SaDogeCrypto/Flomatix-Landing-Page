import { NextResponse } from "next/server"
import { EmailClient } from "@azure/communication-email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, category, message } = body

    console.log("[v0] Support form submission:", { name, email, subject, category })

    // Validate required fields
    if (!name || !email || !subject || !category || !message) {
      console.log("[v0] Validation failed - missing fields")
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!process.env.AZURE_COMMUNICATION_CONNECTION_STRING) {
      console.error("[v0] AZURE_COMMUNICATION_CONNECTION_STRING is not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    if (!process.env.AZURE_SENDER_EMAIL) {
      console.error("[v0] AZURE_SENDER_EMAIL is not configured")
      return NextResponse.json({ error: "Sender email not configured" }, { status: 500 })
    }

    console.log("[v0] Creating Azure Email Client...")
    let emailClient
    try {
      emailClient = new EmailClient(process.env.AZURE_COMMUNICATION_CONNECTION_STRING)
      console.log("[v0] Email client created successfully")
    } catch (clientError) {
      console.error("[v0] Failed to create email client:", clientError)
      throw new Error(
        `Email client creation failed: ${clientError instanceof Error ? clientError.message : "Unknown error"}`,
      )
    }

    console.log("[v0] Preparing email message...")
    const emailMessage = {
      senderAddress: process.env.AZURE_SENDER_EMAIL,
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

    console.log("[v0] Sending email via Azure Communication Services...")
    console.log("[v0] Sender:", process.env.AZURE_SENDER_EMAIL)
    console.log("[v0] Recipient: support@flomatix.ai")

    try {
      const poller = await emailClient.beginSend(emailMessage)
      console.log("[v0] Poller created, waiting for completion...")
      const result = await poller.pollUntilDone()
      console.log("[v0] Azure email sent successfully:", result)
    } catch (sendError) {
      console.error("[v0] Failed to send email:", sendError)
      throw new Error(`Email sending failed: ${sendError instanceof Error ? sendError.message : "Unknown error"}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Support form error:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again."
    console.error("[v0] Error details:", errorMessage)
    return NextResponse.json(
      {
        error: errorMessage,
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
