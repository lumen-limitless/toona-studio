import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { Viewport } from 'next'
import { Manrope } from 'next/font/google'
import Analytics from './analytics'
import './globals.css'
import { defaultMetadata } from './metadata'

const manrope = Manrope({
  subsets: ['latin'],
})

export const metadata = defaultMetadata

export const viewport: Viewport = {
  themeColor: '#f9f9f9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

      <body className={`${manrope.className}`}>
        <a href="#main" className="sr-only" aria-label="skip">
          skip to main content
        </a>

        <header id="header" className="sticky top-0 z-30">
          <Nav />
        </header>

        <main id="main">{children}</main>
        <footer id="footer">
          <Footer />
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
