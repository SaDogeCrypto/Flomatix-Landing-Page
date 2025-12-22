const { EmailClient } = require("@azure/communication-email");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};

module.exports = async function (context, req) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    context.res = {
      status: 204,
      headers: corsHeaders,
      body: ""
    };
    return;
  }

  // Handle GET requests for health check
  if (req.method === "GET") {
    context.res = {
      status: 200,
      headers: corsHeaders,
      body: JSON.stringify({ status: "ok", message: "Support API is running" })
    };
    return;
  }

  context.log("Support form submission received");

  try {
    const { name, email, subject, category, message } = req.body;

    context.log("Support form data:", { name, email, subject, category });

    // Validate required fields
    if (!name || !email || !subject || !category || !message) {
      context.log("Validation failed - missing fields");
      context.res = {
        status: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: "All fields are required" })
      };
      return;
    }

    const connectionString = process.env.AZURE_COMMUNICATION_CONNECTION_STRING;
    const senderEmail = process.env.AZURE_SENDER_EMAIL;

    if (!connectionString) {
      context.log.error("AZURE_COMMUNICATION_CONNECTION_STRING is not configured");
      context.res = {
        status: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: "Email service not configured" })
      };
      return;
    }

    if (!senderEmail) {
      context.log.error("AZURE_SENDER_EMAIL is not configured");
      context.res = {
        status: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: "Sender email not configured" })
      };
      return;
    }

    context.log("Creating Azure Email Client...");
    const emailClient = new EmailClient(connectionString);

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
    };

    context.log("Sending email via Azure Communication Services...");
    const poller = await emailClient.beginSend(emailMessage);
    const result = await poller.pollUntilDone();
    context.log("Email sent successfully:", result);

    context.res = {
      status: 200,
      headers: corsHeaders,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    context.log.error("Support form error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again.";
    context.res = {
      status: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: errorMessage,
        details: error instanceof Error ? error.stack : undefined
      })
    };
  }
};
