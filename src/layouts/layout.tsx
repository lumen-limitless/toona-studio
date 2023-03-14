import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only" aria-label="skip">
        skip to main content
      </a>
      <header className={'relative block  w-full lg:hidden'}>
        <Nav />
      </header>
      <header className={'top-0 z-20 hidden w-full lg:absolute lg:block'}>
        <Nav />
      </header>

      <main id="main" className=" flex h-full w-full flex-grow flex-col">
        {children}
      </main>
      <Footer />
    </>
  )
}
