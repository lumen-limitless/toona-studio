'use client'
import { cn } from '@/lib/utils'
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BurgerSVG from 'public/burger.svg'
import CloseSVG from 'public/close.svg'
import LogoSVG from 'public/logo.svg'
import { Fragment, useEffect } from 'react'
import { useBoolean, useLockBodyScroll } from 'react-use'
const links = [
  // { href: '/idea-generator', label: 'Idea Generator' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  const [popoverOpen, togglePopoverOpen] = useBoolean(false)
  useLockBodyScroll(popoverOpen)

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]')
    if (popoverOpen) {
      metaTag?.setAttribute('content', 'rgb(105 120 255)')
    } else {
      metaTag?.setAttribute('content', '#f9f9f9')
    }
  })

  return (
    <nav
      className={cn(
        'relative flex h-[100px] w-full items-center justify-between',
        pathname === '/about'
          ? 'bg-light text-dark md:bg-indigo-600 md:text-light'
          : ' text-dark',
      )}
    >
      <Link
        href="/"
        className="absolute inset-y-auto left-6 z-50 md:left-12"
        onClick={() => {
          togglePopoverOpen(false)
        }}
      >
        <span className="sr-only">Home</span>
        <LogoSVG
          className={cn(
            'h-[18px]',
            popoverOpen
              ? 'fill-light stroke-light'
              : 'fill-current stroke-current',
          )}
        />
      </Link>

      <div className=" absolute inset-y-auto right-6 hidden items-center gap-12 md:right-12 md:flex lg:right-16 ">
        {links.map(({ href, label }) => (
          <Link
            href={href}
            key={href}
            className={cn(
              'nav-link relative font-kindabold',
              pathname === '/about' ? 'text-light' : 'text-dark',
            )}
          >
            {label}
            <span
              className={cn(
                'nav-underline absolute -bottom-2 left-1/2 block -translate-x-1/2 transform',
                pathname === '/about' ? 'bg-light' : 'bg-indigo-500',
                pathname === href ? 'w-full' : '',
              )}
            ></span>
          </Link>
        ))}
        <Link
          href="contact"
          className={cn(
            'inline-flex h-10 min-w-[141px] items-center justify-center rounded-full text-[15px]/[24px] font-kindabold transition-colors duration-300 ease-in-out',
            pathname === '/about'
              ? 'bg-light text-dark hover:bg-opacity-60'
              : 'bg-indigo text-light hover:bg-indigo-600',
          )}
        >
          Let&apos;s chat
        </Link>
      </div>
      <Popover as={Fragment}>
        {({ open, close }) => (
          <>
            <Popover.Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'auto' })
                togglePopoverOpen()
              }}
              className={
                'absolute inset-y-auto right-6 z-50 rounded-lg bg-[#a5a4ff] bg-opacity-[15%] p-[10px] md:hidden'
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
              className="fixed inset-0 z-40 flex w-full flex-col items-center justify-start gap-6 bg-indigo-500 px-6 pt-[100px] text-white"
            >
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => {
                    close()
                    togglePopoverOpen(false)
                  }}
                  className="mt-3 w-full text-left text-[32px]/[44px] font-bold tracking-[0.5%]"
                >
                  {label}
                </Link>
              ))}

              <Link
                href="contact"
                passHref
                onClick={() => {
                  close()
                  togglePopoverOpen(false)
                }}
                className="mt-3 w-full"
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
