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
        'flex h-[114px] w-full items-center justify-between px-6',
        pathname === '/about'
          ? 'bg-light text-dark mid:bg-transparent mid:text-light'
          : ' text-dark'
      )}
    >
      {pathname === '/about' ? (
        <Dark pathname={pathname} />
      ) : (
        <Light pathname={pathname} />
      )}
      <Popover className="mid:hidden">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={
                ' z-30 rounded-lg bg-[#a5a4ff]  bg-opacity-[15%] p-[10px]'
              }
            >
              {open ? (
                <CloseSVG className=" h-6 w-6 fill-current stroke-current" />
              ) : (
                <BurgerSVG className="h-6 w-6 fill-current stroke-current" />
              )}
            </Popover.Button>
            <Popover.Panel
              as={'div'}
              className="fixed inset-0 z-20 flex w-full flex-col items-center justify-center gap-6 bg-indigo px-6 text-left text-white"
            >
              <Link
                href=""
                onClick={close}
                className="w-full text-left text-[32px]/[44px] font-bold tracking-[0.1em]"
              >
                Idea Generator ✦
              </Link>

              <Link
                href="services"
                onClick={close}
                className="w-full text-left text-[32px]/[44px] font-bold tracking-[0.1em]"
              >
                Services
              </Link>
              <Link
                href="about"
                onClick={close}
                className="w-full text-[32px]/[44px] font-bold tracking-[0.1em]"
              >
                About
              </Link>
              <Link href="contact" passHref onClick={close} className="w-full">
                <button className="h-16 w-full rounded-full bg-light text-dark ">
                  Let&apos;s chat
                </button>
              </Link>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </nav>
  )
}

const Light = ({ pathname }: { pathname: string }) => {
  return (
    <>
      <div>
        <Link href="/">
          <LogoSVG className="h-[18px] fill-current stroke-current" />
        </Link>
      </div>
      <div className="hidden items-center gap-12  mid:flex">
        <Link
          href="idea-generator"
          className={
            pathname === '/idea-generator'
              ? 'border-b-2 border-indigo pb-1'
              : ''
          }
        >
          Idea Generator
        </Link>
        <Link
          href="services"
          className={
            pathname === '/services' ? 'border-b-2 border-indigo pb-1' : ''
          }
        >
          Services
        </Link>
        <Link
          href="about"
          className={
            pathname === '/about' ? 'border-b-2 border-indigo pb-1' : ''
          }
        >
          About
        </Link>
        <Link href="contact" passHref>
          <button className="px-9 py-2">Let&apos;s chat</button>
        </Link>
      </div>
    </>
  )
}

const Dark = ({ pathname }: { pathname: string }) => {
  return (
    <>
      <div>
        <Link href="/">
          <LogoSVG className="h-[18px] fill-current stroke-current" />
        </Link>
      </div>
      <div className=" hidden items-center gap-12  mid:flex ">
        <Link
          href=""
          className={
            pathname === '/idea-generator' ? 'border-b-2 border-light pb-1' : ''
          }
        >
          Idea Generator
        </Link>
        <Link
          href="services"
          className={
            pathname === '/services' ? 'border-b-2 border-light pb-1' : ''
          }
        >
          Services
        </Link>
        <Link
          href="about"
          className={
            pathname === '/about' ? 'border-b-2 border-light pb-1' : ''
          }
        >
          About
        </Link>
        <Link href="contact" passHref>
          <button className="min-w-[141px]">Let&apos;s chat</button>
        </Link>
      </div>
    </>
  )
}
