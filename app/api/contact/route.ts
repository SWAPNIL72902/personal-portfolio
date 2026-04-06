import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("BODY:", body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    if (!resend) {
      console.warn("RESEND_API_KEY missing. Mocking contact response.");
      return Response.json({ success: true, warning: "Mock" });
    }

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Replace with "Swapnil <referral@yourdomain.com>" when domain verified
      to: ["swapnilpahari05@gmail.com"],
      subject: `New Contact from ${name}`,
      html: `
        <h2>Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    if (response.error) {
      return Response.json({ success: false, error: response.error.message }, { status: 400 });
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return Response.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}
