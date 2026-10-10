import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const domain = formData.get("domain") as string;
    const brief = formData.get("brief") as string;

    if (!fullName || !email || !domain || !brief) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create the transporter using the provided credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "info@techghuru.com",
        pass: "ddtv-xfsp-x1ek-jxqe",
      },
    });

    // Send Email to Info (Admin)
    await transporter.sendMail({
      from: '"Tech Ghuru Contact Portal" <info@techghuru.com>',
      to: "info@techghuru.com",
      subject: `New Technical Consultation Inquiry: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; color: #1a1a1a;">
          <h2>New Technical Consultation Inquiry</h2>
          <table border="1" cellPadding="10" style="border-collapse: collapse; width: 100%; max-w: 600px;">
            <tr>
              <td style="font-weight: bold; width: 150px;">Applicant Name</td>
              <td>${fullName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Corporate Email</td>
              <td><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Project Domain</td>
              <td>${domain}</td>
            </tr>
          </table>
          <h3 style="margin-top: 30px;">Project Brief</h3>
          <div style="background: #f8f6f0; padding: 15px; border: 1px solid #eaeaea; white-space: pre-wrap;">${brief}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
