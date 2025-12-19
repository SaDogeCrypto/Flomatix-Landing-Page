import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, category, message } = body

    // Validate required fields
    if (!name || !email || !subject || !category || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Buzz Support <support@flomatix.ai>",
        to: "support@flomatix.ai",
        reply_to: email,
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
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Support form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
