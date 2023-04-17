import Link from 'next/link'
import LogoSVG from 'public/logo.svg'
import DiscordSVG from 'public/discord.svg'
import LinkedInSVG from 'public/linkedin.svg'
import InstaSVG from 'public/insta.svg'
import BehanceSVG from 'public/behance.svg'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative flex w-full flex-col items-center justify-between gap-6 bg-dark pb-8 pt-16 text-light"
    >
      <div className="flex flex-col justify-between gap-6 px-12 md:w-full md:flex-row">
        <LogoSVG className="h-[18px] fill-current stroke-current" />
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-12 ">
          <a href="">Idea Generator</a>
          <a href="">Services</a>
          <a href="">About</a>
          <Link
            href="/contact"
            className="rounded-full bg-light px-9 py-2 text-[15px]/[24px] font-kindabold text-dark"
          >
            Let&apos;s chat
          </Link>
        </div>
      </div>

      <div className="mx-auto flex gap-[43px]">
        <DiscordSVG className="h-8 fill-light stroke-light" />
        <InstaSVG className="h-8 fill-light stroke-light" />
        <LinkedInSVG className="h-8 fill-light stroke-light" />
        <BehanceSVG className="h-8 fill-light stroke-light" />
      </div>
      <div className="mx-auto flex px-12 md:mx-0 md:w-full">
        <p className=" text-sm/[18px] text-light opacity-75">
          &copy; {new Date().getFullYear()} toona.studio
        </p>
      </div>
    </footer>
  )
}
