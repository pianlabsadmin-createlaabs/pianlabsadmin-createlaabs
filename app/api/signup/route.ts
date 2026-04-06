import { NextResponse } from "next/server";

// The destination email is PRANLabsAdmin@gmail.com
// To actually send email, add your email service credentials (e.g. SendGrid, Resend, Nodemailer)
// in environment variables and replace the stub below.
const DESTINATION_EMAIL = "PRANLabsAdmin@gmail.com";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic but strict email regex match for security filter
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email address provided." }, { status: 400 });
    }

    // ---- Email sending scaffold ----
    // Example using Resend (npm install resend):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@pianlabs.com",
    //   to: DESTINATION_EMAIL,
    //   subject: "New Signup from PIAN Landing Page",
    //   html: `<p>New signup: <strong>${email}</strong></p>`,
    // });

    console.log(`[Signup] Email submitted: ${email} → forwarding to ${DESTINATION_EMAIL}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Signup] Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
