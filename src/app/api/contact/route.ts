import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, service, message } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Company (Admin)
    const mailToCompany = {
      from: `"Lead: ${fullName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.COMPANY_EMAIL || 'hello@cyverix.com',
      subject: `🚀 New Inquiry: ${service} | ${fullName}`,
      html: `
        <div style="background-color: #0A0A0F; color: #F0F0FF; font-family: 'Inter', Helvetica, Arial, sans-serif; padding: 40px; border-radius: 24px; max-width: 600px; margin: auto; border: 1px solid #1E1E2E;">
          <div style="border-bottom: 1px solid #1E1E2E; padding-bottom: 24px; margin-bottom: 32px;">
            <h1 style="color: #00FFB2; font-size: 24px; font-weight: 800; character-spacing: -0.5px; margin: 0;">NEW LEAD CAPTURED</h1>
          </div>
          
          <div style="margin-bottom: 32px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #8888AA; margin-bottom: 8px;">Client Details</h2>
            <div style="background: #12121A; border: 1px solid #1E1E2E; padding: 24px; border-radius: 16px;">
              <p style="margin: 0 0 12px 0;"><strong style="color: #00FFB2;">Name:</strong> ${fullName}</p>
              <p style="margin: 0 0 12px 0;"><strong style="color: #00FFB2;">Email:</strong> ${email}</p>
              <p style="margin: 0;"><strong style="color: #00FFB2;">Service:</strong> ${service}</p>
            </div>
          </div>

          <div style="margin-bottom: 32px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #8888AA; margin-bottom: 8px;">Project Vision</h2>
            <div style="background: #12121A; border: 1px solid #1E1E2E; padding: 24px; border-radius: 16px;">
              <p style="margin: 0; line-height: 1.6; color: #F0F0FF;">${message}</p>
            </div>
          </div>

          <div style="text-align: center; border-top: 1px solid #1E1E2E; padding-top: 24px;">
            <p style="color: #8888AA; font-size: 12px;">© 2024 Cyverix Solutions. Engineered for Excellence.</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to Client
    const mailToClient = {
      from: `"Cyverix Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've Received Your Vision | Cyverix Solutions",
      html: `
        <div style="background-color: #0A0A0F; color: #F0F0FF; font-family: 'Inter', Helvetica, Arial, sans-serif; padding: 40px; border-radius: 24px; max-width: 600px; margin: auto; border: 1px solid #1E1E2E;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="color: #00FFB2; font-size: 28px; font-weight: 800; character-spacing: -1px; margin: 0;">CYVERIX</h1>
            <p style="color: #8888AA; font-size: 10px; text-transform: uppercase; letter-spacing: 4px; margin: 4px 0 0 0;">SOLUTIONS</p>
          </div>

          <div style="margin-bottom: 40px;">
            <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">Hello ${fullName},</h2>
            <p style="color: #8888AA; line-height: 1.8; font-size: 16px;">
              Thank you for reaching out. We have successfully received your inquiry regarding <strong style="color: #F0F0FF;">${service}</strong>. 
              Our engineering team is currently reviewing your project details.
            </p>
            <p style="color: #8888AA; line-height: 1.8; font-size: 16px;">
              Expect a detailed response or a scheduling request within the next <strong style="color: #00FFB2;">24 business hours</strong>.
            </p>
          </div>

          <div style="text-align: center; margin-bottom: 40px;">
            <a href="https://cyverix.com" style="display: inline-block; background: linear-gradient(135deg, #00FFB2 0%, #00C8FF 100%); color: #0A0A0F; padding: 16px 32px; border-radius: 12px; font-weight: 800; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; font-size: 14px;">Visit Our Site</a>
          </div>

          <div style="border-top: 1px solid #1E1E2E; padding-top: 24px; text-align: center;">
            <p style="color: #8888AA; font-size: 14px; margin-bottom: 16px;">Follow our journey</p>
            <div style="margin-bottom: 24px;">
              <a href="https://linkedin.com/company/cyverix-solutions" style="color: #00FFB2; text-decoration: none; margin: 0 10px; font-size: 12px; font-weight: 700;">LINKEDIN</a>
              <a href="#" style="color: #00FFB2; text-decoration: none; margin: 0 10px; font-size: 12px; font-weight: 700;">FACEBOOK</a>
              <a href="#" style="color: #00FFB2; text-decoration: none; margin: 0 10px; font-size: 12px; font-weight: 700;">INSTAGRAM</a>
            </div>
            <p style="color: #444455; font-size: 11px;">
              © 2024 Cyverix Solutions <br/>
              Faisalabad, PK
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(mailToClient);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
