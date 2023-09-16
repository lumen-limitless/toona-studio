'use client'
import FlexSection from '@/components/FlexSection'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'
import CirclesLeftSVG from 'public/about-circles-left.svg'
import CirclesRightSVG from 'public/about-circles-right.svg'
import MagicSVG from 'public/magic.svg'
import Star23SVG from 'public/star-23.svg'
import Star24SVG from 'public/star-24.svg'
import Star25SVG from 'public/star-25.svg'

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
        url: 'https://www.instagram.com/toona.studio/',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/christoona/',
      },
      {
        name: 'Website',
        url: 'https://christoona.com/',
      },
    ],
  },
  {
    name: 'Zach Lippa',
    role: 'Lead Developer',
    description: [
      'An impassioned Full-Stack Developer, Zach specializes in utilizing TypeScript, Rust, and Solidity to architect, build, and enhance dynamic, user-focused websites and applications. With a particular interest in fostering the growth of small businesses and startups, Zach applies his expertise in blockchain technologies and modern web development to optimize their online presence.',
      'Through innovative solutions and keen understanding of industry trends, Zach enables businesses to streamline operations, increase engagement, and expand their digital footprint. As a technophile, Zach strives to be at the cutting edge, exploring new programming paradigms and tools to offer unique, transformative digital experiences to his clients.',
    ],
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/zachary-lippa-2b04a6285/',
      },
      {
        name: 'Website',
        url: 'https://zachlippa.dev/',
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
        className="min-h-[660px] overflow-clip bg-indigo-600 px-[47.5]  text-light md:py-0"
      >
        <CirclesRightSVG className="pointer-events-none absolute -right-[15%] -top-[20%] h-[335px] stroke-light md:h-[640px] md:w-[630px]" />
        <CirclesLeftSVG className="pointer-events-none absolute -left-[15%] top-[50%] h-[335px]  stroke-light md:top-[20%]  md:h-[640px] md:w-[630px]" />
        <div id="star-container" className="relative">
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Star23SVG className="absolute -left-16 -top-8 h-10 w-10 md:-left-24" />
          </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Star24SVG className="absolute -bottom-0 -right-16 h-10 w-10 md:-right-24" />
          </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Star25SVG className="absolute -bottom-16 -right-6 h-[28px] md:-right-12" />
          </motion.div>
          <motion.h1
            className="text-center text-4xl font-kindabold md:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            Small teams, <br /> big dreams.
          </motion.h1>
        </div>
      </FlexSection>
      <FlexSection
        col
        centered
        id="team"
        className=" mt-20 gap-20 px-5 md:px-20 lg:mt-[120px] lg:px-16 xl:px-[269px]"
      >
        {aboutInfo.map((info, i) => (
          <motion.div
            className="max-w-[538px]"
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h1 className="pb-6 text-4xl font-kindabold">{info.name}</h1>
            <h2 className="pb-6 text-xl font-kindabold text-indigo/50">
              {info.role}
            </h2>
            <div className="mb-3">
              {info.description.map((desc, i) => (
                <div key={i}>
                  <p className="text-base/[22px]">{desc}</p>
                  <br />
                </div>
              ))}
            </div>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
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
            </motion.div>
          </motion.div>
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
