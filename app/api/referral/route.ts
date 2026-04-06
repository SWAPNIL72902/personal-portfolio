import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
// For local testing without a key, we avoid crashing on initialization
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("FORM DATA:", body);

    const { name, email, referralEmail, referralLink, message } = body;

    if (!name || !email) {
      return Response.json({ success: false, error: "Missing required fields: name or email" }, { status: 400 });
    }

    if (!resend) {
      console.warn("RESEND_API_KEY is missing. Mocking success for development out of caution.");
      return Response.json({ success: true, warning: "RESEND_API_KEY not set. Mock response." });
    }

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Can be updated to verified domain for prod (e.g. from: "Swapnil <referral@yourdomain.com>")
      to: ["swapnilpahari05@gmail.com"], // Must be a valid email for onboarding testing
      subject: `New Referral from ${name}`,
      html: `
        <h2>New Referral Received</h2>
        <p><b>Referrer Name:</b> ${name}</p>
        <p><b>Referrer Email:</b> ${email}</p>
        <p><b>Hiring Email:</b> ${referralEmail || "-"}</p>
        <p><b>Opportunity Link:</b> ${referralLink || "Not provided"}</p>
        <p><b>Message:</b> ${message || "-"}</p>
      `,
    });

    console.log("EMAIL RESPONSE:", response);

    if (response.error) {
      return Response.json({ success: false, error: response.error.message }, { status: 400 });
    }

    return Response.json({ success: true, data: response });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ success: false, error: "Email failed to send. Check server logs." }, { status: 500 });
  }
}
