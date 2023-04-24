import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import CirclesStarRightLightSVG from 'public/circles-star-right-light.svg'
import CirclesStarLeftLightSVG from 'public/circles-star-left-light.svg'
import MagicSVG from 'public/magic.svg'
import Link from 'next/link'
import FlexSection from '@/components/FlexSection'
import { INSTAGRAM_URL, LINKEDIN_URL, WEBSITE_URL } from '@/constants'

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo />
      <FlexSection
        centered
        col
        className="min-h-[calc(60vh-100px)] overflow-clip bg-indigo-600 px-[47.5] py-64 text-light md:py-0"
      >
        <CirclesStarRightLightSVG className="pointer-events-none absolute -top-12 right-0 h-[335px] stroke-light md:top-0 md:h-[630px]" />
        <CirclesStarLeftLightSVG className="pointer-events-none absolute -bottom-12 left-0 h-[335px] stroke-light  md:bottom-0 md:h-[630px]" />

        <h1 className="text-center text-4xl/[49px] md:text-[80px]/[109px] ">
          Small teams, <br /> big dreams.
        </h1>
      </FlexSection>
      <FlexSection
        col
        centered
        id="team"
        className="px-5 pt-20  md:px-20 lg:px-16 lg:pb-20 lg:pt-[120px] xl:px-[269px]"
      >
        <div className="max-w-[538px] space-y-6 pb-20">
          <h1 className="text-4xl/[49px] ">Christina Ho</h1>
          <h2 className="text-xl/[33px] text-indigo/50">
            Founder - Lead Designer
          </h2>
          <p className="text-base/[22px]">
            Christina is a multidisciplinary design consultant specializing in
            UX/UI, Visual, and Interactive design. She has launched over 30+
            products for enterprise and startup companies worldwide, with
            insights into industries like tech, finance, mining, oil,
            e-commerce, sports, gaming, Web3, and retail. She leads a design
            team with the same goal-oriented design philosophy that she found
            success with in her past products.
          </p>
          <br />
          <p className="text-base/[22px]">
            In her free time she enjoys watching horror movies, Rupaul&apos;s
            Drag Race, playing FPS games, building her artisan board game
            collection and eating chicken.{' '}
          </p>
          <div className="flex gap-3">
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noreferrer"
              className="full inline-flex h-10 w-full items-center justify-center rounded-full text-indigo ring-2 ring-indigo"
            >
              Website
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="full inline-flex h-10 w-full items-center justify-center rounded-full text-indigo ring-2 ring-indigo"
            >
              LinkedIn
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="full inline-flex h-10 w-full items-center justify-center rounded-full text-indigo ring-2 ring-indigo"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="max-w-[538px] space-y-6 pb-20">
          <h1 className="text-4xl/[49px] font-kindabold">Zach Lippa</h1>
          <h2 className="text-xl/[33px] text-indigo/50">Lead Developer</h2>
          <p className="text-base/[22px]">
            He is a Blockchain Engineer and Full Stack Developer based in
            Rochester, NY. Since he was young, he has always been fascinated
            with technology. At age six, he disassembled his family&apos;s
            vacuum cleaner, much to his parent&apos;s dismay. At age 12, he
            began writing basic scripts in C++, programming simple command line
            games and mouse-jiggling pranks.
          </p>
          <br />
          <p className="text-base/[22px]">
            {' '}
            Today, he uses his skills in Typescript, Solidity, NextJS, EthersJS,
            and much more to create thrilling products with the cutting-edge
            technology. His background is in frontend and backend development
            and creating smart contracts for various projects and organizations.{' '}
          </p>
          <div className="flex gap-3">
            <button className="full inline-flex h-10 w-full items-center justify-center rounded-full text-indigo ring-2 ring-indigo">
              Website
            </button>
            <button className="full inline-flex h-10 w-full items-center justify-center rounded-full text-indigo ring-2 ring-indigo">
              LinkedIn
            </button>
            <button className="full inline-flex h-10 w-full items-center justify-center rounded-full text-indigo ring-2 ring-indigo">
              Instagram
            </button>
          </div>
        </div>
      </FlexSection>
      <FlexSection centered className="pb-20 lg:pb-[120px]">
        <Link
          href="contact"
          className=" inline-flex h-16 w-[306px] items-center justify-center gap-1 rounded-full bg-indigo text-lg/[24px] font-kindabold text-light"
        >
          Let&apos;s make some magic <MagicSVG className="h-[19.94px]" />
        </Link>
      </FlexSection>
    </>
  )
}
export default AboutPage
