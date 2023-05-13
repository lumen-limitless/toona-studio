import './globals.css'
import { Manrope } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Analytics from './Analytics'
import { Metadata } from 'next'
import { defaultMetadata } from './DefaultMetadata'

const manrope = Manrope({
  subsets: ['latin'],
})

export const metadata: Metadata = defaultMetadata

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

        <header className={' top-0 z-20 block w-full '}>
          <Nav />
        </header>

        <main id="main" className="flex h-full w-full flex-grow flex-col">
          {children}
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </body>
      <Analytics />
    </html>
  )
}
