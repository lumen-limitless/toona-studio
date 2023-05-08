import { Metadata } from 'next'
import ServicesPage from './services-page'

export const metadata: Metadata = {
  title: 'Services',
}

export default function Services() {
  return <ServicesPage />
}
