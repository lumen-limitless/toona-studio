import type { NextPage } from 'next'
import Image from 'next/image'
import heroPhoto from '../../public/hero-photo-w-assets.png'
import CTA from '../components/CTA'
import { NextSeo } from 'next-seo'
import whoImg from '../../public/who.jpg'
import whatImg from '../../public/what.jpg'
import whyImg from '../../public/why.jpg'
import InfoSection from '../components/InfoSection'
import Link from 'next/link'
import FlexSection from '../components/FlexSection'
import ServicesSection from '../components/ServicesSection'
import Marquee from 'react-fast-marquee'

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
]

const info = [
  {
    id: 'who',
    title: 'Who we are',
    description: [
      'Our digital product studio creates long-lasting digital solutions like apps, websites, and platforms designed with user behavior in mind.',
      'We aim to help your business grow by solving real problems. As a hybrid of a creative agency, engineering firm, and consultancy, we bring a unique blend of creativity, technical skill, and strategic insight to every project.',
    ],
    image: whoImg,
    button: {
      name: 'About us',
      link: '/about',
    },
    reverse: false,
  },
  {
    id: 'what',
    title: 'What we do',
    description: [
      'We help businesses create exceptional digital experiences that engage and delight their users. Our end-to-end consulting services are tailored to your needs and goals, from strategy and planning to design and development.',
      'Whether launching a new product, revamping an existing platform, or developing custom software, we will help you bring your vision to life with expertise and personalized solutions.',
    ],
    image: whatImg,
    button: {
      name: 'Our services',
      link: '/services',
    },
    reverse: true,
  },
  {
    id: 'why',
    title: 'Spread the joy',
    description: [
      'We understand that your digital presence is critical to your success, and we are dedicated to helping you achieve your goals. Our team of experts brings a passion for innovation to every project, delivering creative and practical solutions to enhance joyful experiences.',
    ],
    image: whyImg,
    reverse: false,
  },
]

const Home: NextPage = () => {
  return (
    <>
      <NextSeo />
      <FlexSection
        id="landing"
        className=" flex-col-reverse  gap-6 px-4 py-24 md:px-[12%] lg:h-screen lg:flex-row lg:items-center lg:justify-between lg:gap-0"
      >
        <div className="flex flex-col justify-center gap-6">
          <h1 className="whitespace-nowrap text-4xl/[49px] md:text-[52px]/[71px] lg:text-7xl/[98px]">
            Crafting joy <br className="md:hidden" /> through{' '}
            <br className="hidden md:block" /> digital{' '}
            <br className="md:hidden" /> experiences.
          </h1>
          <p className="text-lg/[25px] font-kindabold lg:text-2xl/[33px]">
            We are a digital product studio that designs & develops innovative{' '}
            and human-centered experiences to enrich your business.{' '}
          </p>
          <Link
            href="/contact"
            className="mx-auto inline-flex h-16 w-full items-center justify-center rounded-full bg-indigo-500 text-xl font-kindabold text-light transition-colors ease-out hover:bg-indigo-600 md:mx-0 md:max-w-[280px]"
          >
            Let&apos;s chat
          </Link>
        </div>
        <Image
          src={heroPhoto}
          alt=""
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw"
        />
      </FlexSection>

      <Marquee
        className="desktop:text-2xl flex h-[120px] w-full overflow-hidden bg-dark py-3 text-xl uppercase text-light"
        gradient={false}
      >
        {headings.map((heading, i) => (
          <span className="mx-3" key={i}>
            {heading}
          </span>
        ))}
      </Marquee>

      {info.map((info) => (
        <InfoSection key={info.id} {...info} />
      ))}
      <ServicesSection />
      <CTA />
    </>
  )
}

export default Home
