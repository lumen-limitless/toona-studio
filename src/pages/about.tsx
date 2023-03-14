import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import CirclesSVG from 'public/circles.svg'
import MagicSVG from 'public/magic.svg'
import Link from 'next/link'

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo />
      <Section
        centered
        col
        className="overflow-clip bg-indigo-600 py-56 text-light"
      >
        <CirclesSVG className="absolute -top-1/4 right-0 h-[340px] stroke-light lg:-top-16  lg:h-[640px]" />
        <CirclesSVG className="absolute -bottom-1/4 left-0 h-[340px] rotate-180 stroke-light  lg:-bottom-16 lg:h-[640px]" />

        <h1 className="text-center">
          Small teams, <br /> big dreams.
        </h1>
      </Section>
      <Section col centered id="team" className="py-32">
        <Container className="flex flex-col">
          <div className="space-y-6 pb-20">
            <h1>Christina Ho</h1>
            <h2 className="text-indigo/50">Founder - Lead Designer</h2>
            <p>
              Christina is a multidisciplinary design consultant specializing in
              UX/UI, Visual, and Interactive design. She has launched over 30+
              products for enterprise and startup companies worldwide, with
              insights into industries like tech, finance, mining, oil,
              e-commerce, sports, gaming, Web3, and retail. She leads a design
              team with the same goal-oriented design philosophy that she found
              success with in her past products.
            </p>
            <br />
            <p>
              In her free time she enjoys watching horror movies, Rupaul&apos;s
              Drag Race, playing FPS games, building her artisan board game
              collection and eating chicken.{' '}
            </p>
            <div className="flex gap-3">
              <Button variant="tertiary" className=" h-10 w-full lg:h-16">
                Website
              </Button>
              <Button variant="tertiary" className=" h-10 w-full lg:h-16">
                LinkedIn
              </Button>
              <Button variant="tertiary" className=" h-10 w-full lg:h-16">
                Instagram
              </Button>
            </div>
          </div>
          <div className="space-y-6 pb-20">
            <h1>Zach Lippa</h1>
            <h2 className="text-indigo/50">Lead Developer</h2>
            <p>
              He is a Blockchain Engineer and Full Stack Developer based in
              Rochester, NY. Since he was young, he has always been fascinated
              with technology. At age six, he disassembled his family&apos;s
              vacuum cleaner, much to his parent&apos;s dismay. At age 12, he
              began writing basic scripts in C++, programming simple command
              line games and mouse-jiggling pranks.
            </p>
            <br />
            <p>
              {' '}
              Today, he uses his skills in Typescript, Solidity, NextJS,
              EthersJS, and much more to create thrilling products with the
              cutting-edge technology. His background is in frontend and backend
              development and creating smart contracts for various projects and
              organizations.{' '}
            </p>
            <div className="flex gap-3">
              <Button variant="tertiary" className=" h-10 w-full lg:h-16">
                Website
              </Button>
              <Button variant="tertiary" className=" h-10 w-full lg:h-16">
                LinkedIn
              </Button>
              <Button variant="tertiary" className=" h-10 w-full lg:h-16">
                Instagram
              </Button>
            </div>
          </div>
        </Container>
        <Link href="contact" passHref>
          <Button variant="primary" className="max-w-[294px] p-3">
            Let&apos;s make some magic <MagicSVG className="h-5" />
          </Button>
        </Link>
      </Section>
    </>
  )
}
export default AboutPage
