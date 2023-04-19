import Link from 'next/link'
import LogoSVG from 'public/logo.svg'
import { useRouter } from 'next/router'
import BurgerSVG from 'public/burger.svg'
import CloseSVG from 'public/close.svg'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { useBoolean, useLockBodyScroll } from 'react-use'

const links = [
  { href: '/idea-generator', label: 'Idea Generator' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const { pathname } = useRouter()
  const [popoverOpen, togglePopoverOpen] = useBoolean(false)
  useLockBodyScroll(popoverOpen)
  return (
    <nav
      className={clsx(
        'relative flex h-[70px] w-full items-center justify-between md:h-[100px]',
        pathname === '/about'
          ? 'bg-light text-dark md:bg-transparent md:text-light'
          : ' text-dark'
      )}
    >
      <Link
        href="/"
        className="absolute inset-y-auto left-6 z-30 md:left-12"
        onClick={() => {
          togglePopoverOpen(false)
        }}
      >
        <LogoSVG
          className={clsx(
            'h-[18px]',
            popoverOpen
              ? 'fill-light stroke-light'
              : 'fill-current stroke-current'
          )}
        />
      </Link>

      <div className=" absolute inset-y-auto right-6 hidden items-center gap-12 md:right-12 md:flex lg:right-16 ">
        {links.map(({ href, label }) => (
          <Link
            href={href}
            key={href}
            className={clsx(pathname === '/about' ? 'text-light' : 'text-dark')}
          >
            {label}
          </Link>
        ))}
        <Link
          href="contact"
          className={clsx(
            'inline-flex h-10 min-w-[141px] items-center justify-center  rounded-full text-[15px]/[24px] font-kindabold transition-colors ease-out',
            pathname === '/about'
              ? 'bg-light text-dark'
              : 'bg-indigo text-light hover:bg-indigo-600'
          )}
        >
          Let&apos;s chat
        </Link>
      </div>
      <Popover as={Fragment}>
        {({ open, close }) => (
          <>
            <Popover.Button
              onClick={togglePopoverOpen}
              className={
                ' absolute inset-y-auto right-6 z-30  rounded-lg bg-[#a5a4ff] bg-opacity-[15%] p-[10px] md:hidden '
              }
            >
              {open ? (
                <CloseSVG className=" h-6 w-6 fill-white stroke-white" />
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
                onClick={() => {
                  close()
                  togglePopoverOpen(false)
                }}
                className="w-full text-left text-[32px]/[44px] font-bold tracking-[0.1em]"
              >
                Idea Generator ✦
              </Link>

              <Link
                href="services"
                onClick={() => {
                  close()
                  togglePopoverOpen(false)
                }}
                className="w-full text-left text-[32px]/[44px] font-bold tracking-[0.1em]"
              >
                Services
              </Link>
              <Link
                href="about"
                onClick={() => {
                  close()
                  togglePopoverOpen(false)
                }}
                className="w-full text-[32px]/[44px] font-bold tracking-[0.1em]"
              >
                About
              </Link>
              <Link
                href="contact"
                passHref
                onClick={() => {
                  close()
                  togglePopoverOpen(false)
                }}
                className="w-full"
              >
                <button
                  className={'h-16 w-full rounded-full bg-light text-dark'}
                >
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
