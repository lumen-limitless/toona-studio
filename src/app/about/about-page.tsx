'use client'

import type { NextPage } from 'next'
import CirclesLeftSVG from 'public/about-circles-left.svg'
import CirclesRightSVG from 'public/about-circles-right.svg'
import Star23SVG from 'public/star-23.svg'
import Star24SVG from 'public/star-24.svg'
import Star25SVG from 'public/star-25.svg'
import MagicSVG from 'public/magic.svg'
import Link from 'next/link'
import FlexSection from '@/components/FlexSection'
import { INSTAGRAM_URL, LINKEDIN_URL, WEBSITE_URL } from '@/constants'

const aboutInfo = [
  {
    name: 'Christina Ho',
    role: 'Founder - Lead Designer',
    description: [
      `Christina is a multidisciplinary design consultant specializing in
UX/UI, Visual, and Interactive design. She has launched over 30+
products for enterprise and startup companies worldwide, with
insights into industries like tech, finance, mining, oil,
e-commerce, sports, gaming, Web3, and retail. She leads a design
team with the same goal-oriented design philosophy that she found
success with in her past products.`,
      `In her free time she enjoys watching horror movies, Rupaul's
Drag Race, playing FPS games, building her artisan board game
collection and eating chicken.`,
    ],
    socials: [
      {
        name: 'Instagram',
        url: INSTAGRAM_URL,
      },
      {
        name: 'LinkedIn',
        url: LINKEDIN_URL,
      },
      {
        name: 'Website',
        url: WEBSITE_URL,
      },
    ],
  },
  {
    name: 'Zach Lippa',
    role: 'Lead Developer',
    description: [
      'Zach is a full-stack developer who loves to build and design websites. He is passionate about helping small businesses and startups grow their online presence.',
    ],
    socials: [
      {
        name: 'Instagram',
        url: INSTAGRAM_URL,
      },
      {
        name: 'LinkedIn',
        url: LINKEDIN_URL,
      },
      {
        name: 'Website',
        url: WEBSITE_URL,
      },
    ],
  },
]

const AboutPage: NextPage = () => {
  return (
    <>
      <FlexSection
        centered
        col
        className="min-h-[calc(60vh-100px)] overflow-clip bg-indigo-600 px-[47.5] py-64 text-light md:py-0"
      >
        <CirclesRightSVG className="pointer-events-none absolute -right-12 -top-12 h-[335px] stroke-light md:top-0 md:h-[630px]" />
        <CirclesLeftSVG className="pointer-events-none absolute -bottom-0 -left-44 h-[335px] stroke-light md:-left-12  md:h-[630px]" />
        <div id="star-container" className="relative">
          <Star23SVG className="absolute -left-16 -top-8 h-10 w-10 md:-left-24" />
          <Star24SVG className="absolute -bottom-0 -right-16 h-10 w-10 md:-right-24" />
          <Star25SVG className="absolute -bottom-16 -right-6 h-[28px] md:-right-12" />
          <h1 className="text-center text-4xl md:text-7xl ">
            Small teams, <br /> big dreams.
          </h1>
        </div>
      </FlexSection>
      <FlexSection
        col
        centered
        id="team"
        className=" mt-20 gap-20 px-5 md:px-20 lg:mt-[120px] lg:px-16 xl:px-[269px]"
      >
        {aboutInfo.map((info, i) => (
          <div className="max-w-[538px]" key={i}>
            <h1 className="pb-6 text-4xl">{info.name}</h1>
            <h2 className="pb-6 text-xl text-indigo/50">{info.role}</h2>
            <div className="pb-9">
              {info.description.map((desc, i) => (
                <>
                  <p key={i} className="text-base/[22px]">
                    {desc}
                  </p>
                  <br />
                </>
              ))}
            </div>

            <div className="flex gap-3">
              {info.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="full inline-flex h-10 w-full items-center justify-center rounded-full text-indigo ring-2 ring-indigo duration-300 ease-in-out hover:bg-indigo-500/30"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </FlexSection>
      <FlexSection centered className="my-20">
        <Link
          href="contact"
          className=" inline-flex h-16 w-[306px] items-center justify-center gap-1 rounded-full bg-indigo text-lg/[24px] font-kindabold text-light duration-300 ease-in-out hover:bg-indigo-600"
        >
          Let&apos;s make some magic <MagicSVG className="h-[19.94px]" />
        </Link>
      </FlexSection>
    </>
  )
}
export default AboutPage
