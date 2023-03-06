import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only" aria-label="skip">
        skip to main content
      </a>
      <header className={'z-20 w-full  md:absolute md:top-0'}>
        <Nav />
      </header>
      <main id="main" className="flex h-full w-full flex-grow flex-col">
        {children}
      </main>
      <Footer />
    </>
  )
}
