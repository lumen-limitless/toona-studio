import { Metadata } from 'next'
import ContactPage from './contact-page'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return <ContactPage />
}
