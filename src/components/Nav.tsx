import Button from './ui/Button'
import Link from 'next/link'
import LogoDarkSVG from 'public/logo-dark.svg'
import LogoLightSVG from 'public/logo-light.svg'

export default function Nav() {
  return (
    <>
      <nav className="flex h-[100px] w-full items-center justify-between px-6  md:px-16">
        <div>
          <Link href="/">
            <LogoDarkSVG className="h-[18px]" />
          </Link>
        </div>
        <div className=" hidden items-center gap-12 md:flex">
          <Link href="idea-generator">Idea Generator</Link>
          <Link href="services">Services</Link>
          <Link href="about">About</Link>
          <Link href="contact" passHref>
            <Button className="px-9 py-2">Let&apos;s chat</Button>
          </Link>
        </div>
      </nav>
    </>
  )
}
