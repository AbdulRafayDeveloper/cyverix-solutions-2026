import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, service, budget, message } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Company
    const mailToCompany = {
      from: `"${fullName}" <${email}>`,
      to: process.env.COMPANY_EMAIL || 'hello@cyverix.com',
      subject: `New Lead: ${service} - from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // Auto-reply to Client
    const mailToClient = {
      from: `"Cyverix Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for reaching out to Cyverix Solutions!",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Hi ${fullName},</h2>
          <p>Thank you for contacting Cyverix Solutions. We've received your inquiry about <strong>${service}</strong>.</p>
          <p>Our team will review your requirements and get back to you within 24 hours.</p>
          <p>Best Regards,<br/><strong>Team Cyverix Solutions</strong></p>
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
