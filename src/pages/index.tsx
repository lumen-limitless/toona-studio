import type { NextPage } from 'next'
import Image from 'next/image'
import Section from '../components/ui/Section'
import heroPhoto from '../../public/hero-photo-w-assets.png'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import Services from '../components/ServicesComponent'
import CTA from '../components/CTA'
import { NextSeo } from 'next-seo'
import whoImg from '../../public/who.jpg'
import whatImg from '../../public/what.jpg'
import whyImg from '../../public/why.jpg'
import InfoSection from '../components/InfoSection'

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
      'Whether launching a new product, revamping an existing platform, or developing custom software, we&apos;ll help you bring your vision to life with expertise and personalized solutions.',
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
      'We understand that your digital presence is critical to your success, and we&apos;re dedicated to helping you achieve your goals. Our team of experts brings a passion for innovation to every project, delivering creative and practical solutions to enhance joyful experiences.',
    ],
    image: whyImg,
    reverse: false,
  },
]
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
      <Section fullscreen id="landing">
        <Container className="flex flex-col-reverse lg:flex-row">
          {' '}
          <div className=" flex flex-grow flex-col justify-center gap-12  text-dark">
            <h1 className="whitespace-nowrap">
              Crafting joy through <br /> digital experiences.
            </h1>
            <p>
              We are a digital product studio that designs & develops innovative{' '}
              <br /> and human-centered experiences to enrich your business.{' '}
            </p>
            <Button size="main">Let&apos;s chat</Button>
          </div>
          <Image src={heroPhoto} alt="" priority />
        </Container>
      </Section>
      <Section id="banner">
        <div className=" flex h-[120px] w-full min-w-max items-center justify-evenly gap-12 overflow-x-clip bg-dark py-3 text-xl uppercase text-white lg:text-2xl">
          {headings.map((heading, i) => (
            <span key={i}>{heading}</span>
          ))}
        </div>
      </Section>
      {info.map((info) => (
        <div key={info.id}>
          <InfoSection {...info} />
        </div>
      ))}
      <Services />
      <CTA />
    </>
  )
}

export default Home
