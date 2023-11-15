'use client'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useWindowScroll } from 'react-use'
import Nav from './Nav'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { y } = useWindowScroll()
  const pathname = usePathname()
  return (
    <>
      <header
        id="header"
        className={cn(
          'sticky top-0 z-30 bg-light bg-opacity-0 text-dark',
          pathname === '/about' ? ' md:bg-indigo-600 md:text-light' : '',
          y > 10 && 'bg-opacity-100',
        )}
      >
        <Nav />
      </header>
    </>
  )
}

export default Header
