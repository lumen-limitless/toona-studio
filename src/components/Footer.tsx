import Link from 'next/link'
import LogoSVG from 'public/logo.svg'
import DiscordSVG from 'public/discord.svg'
import LinkedInSVG from 'public/linkedin.svg'
import InstaSVG from 'public/insta.svg'
import BehanceSVG from 'public/behance.svg'
import { DISCORD_URL, INSTAGRAM_URL, LINKEDIN_URL } from '../constants'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative flex w-full flex-col items-center justify-between gap-6 bg-dark  py-9 text-light md:gap-[75px] md:py-[68px]"
    >
      <div className="flex w-full flex-col items-center justify-between gap-6 px-12 md:items-start md:gap-[75px] lg:flex-row lg:items-center">
        <LogoSVG className="h-[18px] fill-current stroke-current" />
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-12 ">
          <a href="">Idea Generator</a>
          <a href="">Services</a>
          <a href="">About</a>
          <Link
            href="/contact"
            className="rounded-full bg-light px-9 py-2 text-[15px]/[24px] font-kindabold text-dark duration-300 ease-in-out hover:bg-opacity-60 "
          >
            Let&apos;s chat
          </Link>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-6 md:flex-row-reverse md:justify-end">
        <div className=" flex w-full items-center justify-center gap-[43px] md:absolute">
          <a href={DISCORD_URL} target="_blank">
            <DiscordSVG className="h-8 fill-light stroke-light" />
          </a>
          <a href={INSTAGRAM_URL} target="_blank">
            <InstaSVG className="h-8 fill-light stroke-light" />
          </a>
          <a href={LINKEDIN_URL} target="_blank">
            <LinkedInSVG className="h-8 fill-light stroke-light" />
          </a>
          <a href={''} target="_blank">
            <BehanceSVG className="h-8 fill-light stroke-light" />
          </a>
        </div>
        <div className="flex px-12 md:mx-0">
          <p className=" text-sm/[18px] text-light opacity-75">
            &copy; {new Date().getFullYear()} toona.studio
          </p>
        </div>
      </div>
    </footer>
  )
}
