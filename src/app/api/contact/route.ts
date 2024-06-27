import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { env } from "process";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: env.CONTACT_RECEIVE_EMAIL,
    to: env.CONTACT_RECEIVE_EMAIL,
    subject: `【お問い合わせ】${name}様より`,
    text: message + " | Sent from: " + email,
    html: `
    <p>【お名前】</p>
    <p>${name}</p>
    <p>【お問い合わせ内容】</p>
    <p>${message}</p>
    <p>【メールアドレス】</p>
    <p>${email}</p>
  `,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Success!", status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 });
  }
}
