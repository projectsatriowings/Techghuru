import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const experience = formData.get("experience") as string;
    const linkedin = formData.get("linkedin") as string;
    const portfolio = formData.get("portfolio") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!fullName || !email || !phone || !resumeFile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
    
    // Create the transporter using the provided credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "info@techghuru.com",
        pass: "ddtv-xfsp-x1ek-jxqe",
      },
    });

    // 1. Send Email to the Applicant
    await transporter.sendMail({
      from: '"Tech Ghuru Careers" <info@techghuru.com>',
      to: email,
      subject: `Application Received: ${jobTitle} at Tech Ghuru`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #1a1a1a;">
          <img src="cid:techghurulogo" alt="Tech Ghuru Logo" style="width: 150px; margin-bottom: 20px;" />
          <h2 style="color: #eb5d1e;">Your application is under review!</h2>
          <p>Hi ${fullName},</p>
          <p>Thank you for applying for the <strong>${jobTitle}</strong> position at Tech Ghuru.</p>
          <p>This email is to confirm that we have successfully received your application and resume. Our team will review your profile carefully, and if your qualifications match our current needs, we will reach out to you with next steps.</p>
          <p>We appreciate your interest in joining our expedition to build the future of enterprise tech!</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The Tech Ghuru Hiring Team</strong></p>
        </div>
      `,
      attachments: [
        {
          filename: "tech-ghuru-logo.png",
          path: path.join(process.cwd(), "public", "tech-ghuru-logo.png"),
          cid: "techghurulogo" // same cid value as in the html img src
        }
      ]
    });

    // 2. Send Email to Info (Admin)
    await transporter.sendMail({
      from: '"Tech Ghuru Careers Portal" <info@techghuru.com>',
      to: "info@techghuru.com",
      subject: `New Application: ${fullName} for ${jobTitle}`,
      html: `
        <div style="font-family: sans-serif; color: #1a1a1a;">
          <h2>New Job Application Received</h2>
          <table border="1" cellPadding="10" style="border-collapse: collapse; width: 100%; max-w: 600px;">
            <tr>
              <td style="font-weight: bold; width: 150px;">Job Role</td>
              <td>${jobTitle}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Applicant Name</td>
              <td>${fullName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Email Address</td>
              <td><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Phone Number</td>
              <td>${phone}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Experience</td>
              <td>${experience}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">LinkedIn</td>
              <td><a href="${linkedin}">${linkedin}</a></td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Portfolio/Website</td>
              <td>${portfolio ? '<a href="' + portfolio + '">' + portfolio + '</a>' : "N/A"}</td>
            </tr>
          </table>
          <h3 style="margin-top: 30px;">Cover Letter</h3>
          <div style="background: #f8f6f0; padding: 15px; border: 1px solid #eaeaea; white-space: pre-wrap;">${coverLetter}</div>
          <p style="margin-top: 20px;"><em>The applicant's resume is attached to this email.</em></p>
        </div>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: resumeBuffer
        }
      ]
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
