import LogoSVG from 'public/logo.svg'
import Button from './ui/Button'
export default function Footer({}: {}) {
  return (
    <footer
      id="footer"
      className="relative flex w-full flex-col items-center justify-between gap-6 bg-dark pt-6 pb-8 text-light md:h-[272px]"
    >
      <div className="flex flex-col justify-between gap-6 px-12 md:w-full md:flex-row">
        <LogoSVG className="h-[18px] fill-current stroke-current" />
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-12 ">
          <a href="">Idea Generator</a>
          <a href="">Services</a>
          <a href="">About</a>
          <Button variant="footer" className="px-9 py-2">
            Let&apos;s chat
          </Button>
        </div>
      </div>
      <div className="flex px-12 md:w-full">
        {' '}
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} toona.studio
        </p>
      </div>
    </footer>
  )
}
