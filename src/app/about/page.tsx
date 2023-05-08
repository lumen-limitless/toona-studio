import { Metadata } from 'next'
import AboutPage from './about-page'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return <AboutPage />
}
