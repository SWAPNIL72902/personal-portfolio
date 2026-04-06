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

    // ✅ Validation
    if (!name || !email) {
      return Response.json({
        success: false,
        error: "Name and Email are required",
      });
    }

    // ✅ Send Email
    await resend.emails.send({
      from: "onboarding@resend.dev", // keep this for now
      to: ["swapnilpahari05@gmail.com"], // 🔥 YOUR EMAIL (DO NOT CHANGE)
      reply_to: email, // allows you to reply directly to user
      subject: `🚀 New Referral from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px;">
          <h2>New Referral Received 🚀</h2>

          <p><strong>Referrer Name:</strong> ${name}</p>
          <p><strong>Referrer Email:</strong> ${email}</p>

          <hr/>

          <p><strong>Hiring Manager Email:</strong> ${referralEmail || "Not provided"}</p>
          <p><strong>Opportunity Link:</strong> ${referralLink
          ? `<a href="${referralLink}" target="_blank">${referralLink}</a>`
          : "Not provided"
        }</p>

          <hr/>

          <p><strong>Message:</strong></p>
          <p>${message || "-"}</p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("REFERRAL ERROR:", error);

    return Response.json({
      success: false,
      error: "Failed to send email",
    });
  }
}