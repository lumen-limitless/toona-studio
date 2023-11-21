import { APP_DESCRIPTION } from '@/lib/constants'
import { type Metadata } from 'next'

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Toona Studio'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
  : process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'

export const defaultMetadata: Metadata = {
  title: {
    absolute: APP_NAME,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL(baseUrl),
  generator: 'Next.js',
  keywords: [
    'studio',
    'web development',
    'web design',
    'web developer',
    'UX design',
    'UI design',
    'web development company',
    'web design company',
    'web developer company',
    'UX design company',
    'UI design company',
    'web development agency',
    'software development',
    'software development company',
    'software development agency',
    'Next.js',
    'Next.js development',
    'Next.js development company',
    'react',
    'react development',
    'react js',
  ],
  manifest: null,

  openGraph: {
    type: 'website',
    url: baseUrl,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    locale: 'en_US',
  },

  twitter: {
    title: APP_NAME,
    site: baseUrl,
    creator: '@LumenLimitless',
    description: APP_DESCRIPTION,
    card: 'summary_large_image',
  },

  appleWebApp: {
    statusBarStyle: 'default',
    title: APP_NAME,
    capable: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}
