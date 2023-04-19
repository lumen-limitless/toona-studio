// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import emailjs from '@emailjs/browser'
import { ContactForm } from '../contact'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message }: ContactForm = req.body

    // Validate the form data
    if (!name || !email || !message) {
      res.status(422).json({ message: 'One or more fields are missing.' })
      return
    }

    // Configure the email data
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    }

    try {
      // Send the email
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.EMAILJS_USER_ID!
      )
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
