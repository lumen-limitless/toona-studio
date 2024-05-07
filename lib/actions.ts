'use server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(2),
  work: z.string().min(2),
});
export async function contactFormAction(
  formData: FormData,
): Promise<{ success: boolean }> {
  try {
    const { name, email, message, work } = schema.parse(
      Object.fromEntries(formData),
    );
    console.log('name:', name);
    console.log('email:', email);
    console.log('message:', message);
    console.log('work:', work);

    // Configure the email transport using the SMTP server of your choice
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `${work} request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Send a confirmation email to the user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting us',
      text: `Thank you for reaching out to us. We will get back to you as soon as possible.`,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
