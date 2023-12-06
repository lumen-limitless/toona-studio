'use client'

import dynamic from 'next/dynamic'

const VercelAnalytics = dynamic(() =>
  import('@vercel/analytics/react').then((mod) => mod.Analytics),
)

const GoogleAnalytics = dynamic(() =>
  import('nextjs-google-analytics').then((mod) => mod.GoogleAnalytics),
)

export default function Analytics() {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <VercelAnalytics />
    </>
  )
}
