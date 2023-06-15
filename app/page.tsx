import Link from 'next/link'
import whoImg from 'public/who.jpg'
import whatImg from 'public/what.jpg'
import whyImg from 'public/why.jpg'
import CTA from '@/components/CTA'
import InfoSection from '@/components/InfoSection'
import FlexSection from '@/components/FlexSection'
import ServicesSection from '@/components/ServicesSection'
import MarqueeComponent from '@/components/MarqueeComponent'
import { HeroImage } from '@/components/HeroImage'

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

export default function Page() {
  return (
    <>
      <FlexSection
        id="landing"
        className="min-h-[calc(100vh-100px)] gap-6 px-5 pb-12 md:px-20 xl:px-[269px]"
      >
        <div className="mx-auto flex w-full max-w-container flex-col-reverse justify-between gap-6 lg:flex-row lg:items-center lg:gap-0">
          <div className="flex flex-col justify-center gap-12">
            <h1 className="text-4xl font-kindabold md:text-[52px]/[71px] lg:text-7xl">
              Crafting joy <br className="md:hidden" /> through{' '}
              <br className="hidden md:block" /> digital{' '}
              <br className="md:hidden" /> experiences.
            </h1>
            <p className="text-lg font-kindabold lg:text-2xl">
              We are a digital product studio based in Rochester, NY{' '}
              <br className="hidden lg:inline-block" /> that designs & develops
              innovative and human-centered <br className="hidden md:block" />{' '}
              experiences to enrich your business.
            </p>
            <Link
              href="/contact"
              className="mx-auto inline-flex h-16 w-full items-center justify-center rounded-full bg-indigo-500 text-xl font-kindabold text-light transition-colors duration-300 ease-in-out hover:bg-indigo-600 md:mx-0 md:max-w-[280px]"
            >
              Let&apos;s chat
            </Link>
          </div>

          <HeroImage />
        </div>
      </FlexSection>

      <MarqueeComponent />

      <div className="flex flex-col gap-20 pt-40">
        {info.map((info) => (
          <div key={info.id}>
            <InfoSection {...info} />
          </div>
        ))}
      </div>

      <ServicesSection />

      <CTA />
    </>
  )
}