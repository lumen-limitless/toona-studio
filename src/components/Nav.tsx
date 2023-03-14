import Button from './ui/Button'
import Link from 'next/link'
import LogoSVG from 'public/logo.svg'
import { useRouter } from 'next/router'
import BurgerSVG from 'public/burger.svg'
import CloseSVG from 'public/close.svg'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'

export default function Nav() {
  const { pathname } = useRouter()

  return (
    <nav
      className={clsx(
        'flex h-[100px] w-full items-center justify-between px-6 md:px-16',
        pathname === '/about' ? 'text-dark lg:text-light' : 'text-dark'
      )}
    >
      {pathname === '/about' ? <Dark /> : <Light />}
      <Popover className="md:hidden">
        {({ open }) => (
          <>
            <Popover.Button className={''}>
              {open ? (
                <CloseSVG className=" h-6 w-6 fill-current stroke-current" />
              ) : (
                <BurgerSVG className="h-6 w-6 fill-current stroke-current" />
              )}
            </Popover.Button>
            <Popover.Panel
              as={'div'}
              className="fixed inset-0 z-30 flex w-full flex-col items-center justify-center gap-6 bg-indigo text-light"
            >
              <Link href="idea-generator">
                <h1>Idea Generator ✦</h1>
              </Link>
              <Link href="services">
                <h1>Services</h1>
              </Link>
              <Link href="about">
                <h1>About</h1>
              </Link>
              <Link href="contact" passHref>
                <Button variant="mono" className="w-full ">
                  Let&apos;s chat
                </Button>
              </Link>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </nav>
  )
}

const Light = () => {
  return (
    <>
      <div>
        <Link href="/">
          <LogoSVG className="h-[18px] fill-current stroke-current" />
        </Link>
      </div>
      <div className=" hidden items-center gap-12  md:flex">
        <Link href="idea-generator">Idea Generator</Link>
        <Link href="services">Services</Link>
        <Link href="about">About</Link>
        <Link href="contact" passHref>
          <Button className="px-9 py-2">Let&apos;s chat</Button>
        </Link>
      </div>
    </>
  )
}

const Dark = () => {
  return (
    <>
      <div>
        <Link href="/">
          <LogoSVG className="h-[18px] fill-current stroke-current" />
        </Link>
      </div>
      <div className=" hidden items-center gap-12  md:flex ">
        <Link href="idea-generator">Idea Generator</Link>
        <Link href="services">Services</Link>
        <Link href="about">About</Link>
        <Link href="contact" passHref>
          <Button size="md" variant="mono" className="min-w-[141px]">
            Let&apos;s chat
          </Button>
        </Link>
      </div>
    </>
  )
}
