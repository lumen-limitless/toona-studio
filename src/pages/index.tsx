import type { NextPage } from 'next'
import Image from 'next/image'
import Section from '../components/ui/Section'
import heroPhoto from '../../public/hero-photo-w-assets.png'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import Services from '../components/landing/Features'
import About from '../components/landing/Info'
import CTA from '../components/landing/CTA'
import { NextSeo } from 'next-seo'

const headings = [
  'strategy',
  '✦',
  'cx design',
  '✦',
  'social media',
  '✦',
  'prototyping',
  '✦',
  'consulting',
  '✦',
  'quality assurance',
  '✦',
]

const Home: NextPage = () => {
  return (
    <>
      <NextSeo />
      <Section fullscreen className="" id="landing">
        <Container className="flex flex-col-reverse md:flex-row">
          {' '}
          <div className=" flex flex-grow flex-col justify-center gap-12  text-dark">
            <h1 className="whitespace-nowrap">
              Crafting joy through <br /> digital experiences.
            </h1>
            <p>
              We are a digital product studio that designs & develops innovative{' '}
              <br /> and human-centered experiences to enrich your business.{' '}
            </p>
            <Button className="h-16 w-full md:w-72">Let&apos;s chat</Button>
          </div>
          <Image src={heroPhoto} alt="" priority />
        </Container>
      </Section>
      <Section id="banner">
        <div className=" flex h-[120px] w-full min-w-max items-center justify-evenly gap-12 overflow-x-clip bg-dark py-3 text-2xl uppercase text-white">
          {headings.map((heading, i) => (
            <span key={i}>{heading}</span>
          ))}
        </div>
      </Section>
      <About />
      <Services />
      <CTA />
    </>
  )
}

export default Home
