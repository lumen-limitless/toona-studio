'use client'
import { cn } from '@/lib/utils'
import LogoSVG from '@/public/logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useBoolean, useLockBodyScroll } from 'react-use'

const routes = [
  // { href: '/idea-generator', label: 'Idea Generator' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  const [opened, toggleOpened] = useBoolean(false)
  useLockBodyScroll(opened)

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]')
    if (opened) {
      metaTag?.setAttribute('content', '#8198E9')
    } else {
      metaTag?.setAttribute('content', '#f9f9f9')
    }
  }, [opened])

  return (
    <>
      <nav
        className="relative flex h-[100px] w-full items-center justify-between"
        aria-label="navigation bar"
        id="navigation"
      >
        <Link
          href="/"
          className="absolute inset-y-auto left-6 z-50 md:left-12"
          onClick={() => {
            toggleOpened(false)
          }}
        >
          <span className="sr-only">Toona Studio Home</span>
          <LogoSVG
            className={cn(
              'h-[18px]',
              opened
                ? 'fill-light stroke-light'
                : 'fill-current stroke-current',
            )}
          />
        </Link>

        <div className="absolute inset-y-auto right-6 hidden items-center gap-12 md:right-12 md:flex lg:right-16">
          {routes.map(({ href, label }) => (
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

        <button
          onClick={toggleOpened}
          aria-label="Open Mobile Menu"
          aria-expanded={opened}
          className={cn(
            opened && 'opened text-white',
            'absolute inset-y-auto right-6 z-50 rounded-lg bg-[#a5a4ff]/[15%] p-[10px] md:hidden',
          )}
        >
          <svg width="24" height="24" viewBox="0 0 100 100">
            <path
              className={cn('line line1', opened && 'opened')}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path
              className={cn('line line2', opened && 'opened')}
              d="M 20,50 H 80"
            />
            <path
              className={cn('line line3', opened && 'opened')}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
          <span className="sr-only">Open Mobile Menu</span>
        </button>
      </nav>
      <nav
        id="mobile-nav"
        className={cn(
          'fixed inset-0 z-40 flex w-full flex-col items-center justify-start gap-6 bg-indigo-500 bg-[url(/nav.webp)] bg-cover bg-center px-6 pt-[100px] text-white transition-opacity duration-300 ease-in-out md:hidden',
          opened ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="mt-3 w-full text-left text-[32px]/[44px] font-semibold tracking-[0.32px]"
            onClick={toggleOpened}
          >
            {route.label}
          </Link>
        ))}
        <Link
          href="contact"
          passHref
          onClick={() => {
            toggleOpened(false)
          }}
          className="mt-3 w-full"
        >
          <button className={'h-16 w-full rounded-full bg-light text-dark'}>
            Let&apos;s chat
          </button>
        </Link>
      </nav>
    </>
  )
}
