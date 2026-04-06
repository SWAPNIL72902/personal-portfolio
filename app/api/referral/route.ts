import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      referralEmail,
      referralLink,
      message,
    } = body;

    if (!name || !email) {
      return Response.json({
        success: false,
        error: "Name and Email are required",
      });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["swapnilpahari05@gmail.com"],
      replyTo: email, // ✅ FIXED HERE
      subject: `🚀 New Referral from ${name}`,
      html: `
        <h2>New Referral Received 🚀</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Hiring Email:</b> ${referralEmail || "Not provided"}</p>
        <p><b>Link:</b> ${referralLink || "Not provided"}</p>
        <p><b>Message:</b> ${message || "-"}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("ERROR:", error);
    return Response.json({ success: false });
  }
}