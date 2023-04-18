// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { ContactForm } from '../contact'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message }: ContactForm = req.body

    // Validate the form data
    if (!name || !email || !message) {
      res.status(422).json({ message: 'One or more fields are missing.' })
      return
    }

    // Configure the email transport using the SMTP server of your choice
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Configure the email data
    const mailData = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    }

    try {
      // Send the email
      await transporter.sendMail(mailData)
      res.status(200).json({ message: 'Email sent successfully.' })
    } catch (error) {
      res.status(500).json({
        message: 'Failed to send the email.',
        error: (error as Error).message,
      })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default handler
