'use client'
import type { NextPage } from 'next'
import Link from 'next/link'
import creativityImg from 'public/creativity.jpg'
import collaborationImg from 'public/collaboration.jpg'
import growthImg from 'public/growth.jpg'
import MagicSVG from 'public/magic.svg'
import RepeatSVG from 'public/repeat.svg'
import ServicesSection from '@/components/ServicesSection'
import InfoSection from '@/components/InfoSection'
import CTA from '@/components/CTA'
import FlexSection from '@/components/FlexSection'
import CirclesStarRightSVG from 'public/circles-star-right.svg'
import CirclesStarLeftSVG from 'public/circles-star-left.svg'
import { motion } from 'framer-motion'

const info = [
  {
    id: 'creativity',
    title: 'Creativity and Planning',
    description: [
      'We help you bring your creative vision to life by providing expert planning and consulting services. Our team will work with you to propose innovative ideas, estimate project budgets, and plan realistic timelines. With our strategic insights and proven planning methods, we can help turn your concepts into successful realities.',
    ],
    image: creativityImg,
    reverse: false,
  },

  {
    id: 'collaboration',
    title: 'Collaboration',
    description: [
      'We work closely with you to ensure that your project is a success. We will work with you to develop a project plan, set realistic timelines, and provide regular updates on the progress of your project. We will also provide you with a dedicated project manager who will be your point of contact throughout the project.',
    ],
    image: collaborationImg,
    reverse: true,
  },
  {
    id: 'growth',
    title: 'Growth',
    description: [
      'We help you grow your business by providing expert marketing and branding services. Our team will work with you to develop a marketing strategy that will help you reach your target audience and increase your sales. We will also help you create a brand identity that will help you stand out from your competitors.',
    ],
    image: growthImg,
    reverse: false,
  },
]

const ServicesPage: NextPage = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 inset-y-20 lg:inset-y-0">
        <CirclesStarRightSVG className="pointer-events-none absolute -top-24 right-0 z-0 h-[335px]  stroke-dark md:h-[642px]" />
        <CirclesStarLeftSVG className="pointer-events-none absolute -bottom-36 left-0 z-0 h-[335px]  stroke-dark md:h-[642px]" />
      </div>
      <FlexSection
        id="services"
        col
        centered
        className="z-20 min-h-[calc(100lvh-100px)] gap-12 px-5 py-32"
      >
        <motion.h1
          className="text-center text-4xl font-kindabold md:text-7xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          We build catered <br className="md:hidden" /> experiences to <br />{' '}
          grow your <br className="md:hidden" /> business.
        </motion.h1>

        <Link href="/contact" legacyBehavior passHref>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="full z-10 inline-flex h-16 w-full max-w-[306px]
                  items-center justify-center rounded-full bg-indigo-500 text-lg
                  text-white transition-colors ease-out hover:bg-indigo-600"
          >
            Let&apos;s make some magic <MagicSVG className="ml-1 h-5 w-5" />
          </motion.a>
        </Link>
      </FlexSection>

      <div className="flex flex-col gap-20 pt-40">
        {info.map((info) => (
          <div className="" key={info.id}>
            <InfoSection {...info} />
          </div>
        ))}
      </div>

      <FlexSection
        col
        className="mb-[128px] px-5 pt-[120px] md:px-20 xl:px-[269px]"
      >
        <motion.h1
          className="mb-20 text-center text-4xl font-kindabold  md:text-7xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          Customize your workflow
        </motion.h1>

        <motion.div
          className="mx-auto flex max-w-container flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-2xl/[49px] font-kindabold">Plan</h2>
            <p>
              We work with you to understand your business goals and objectives.
              We&apos;ll create a clear roadmap for your project, outlining the
              scope of work, timeline, and budget.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-2xl/[49px] font-kindabold">Design</h2>
            <p>
              We&apos;ll create wireframes, mockups, and prototypes to bring
              your vision to life. We&apos;ll work with you to establish a
              visual identity and design an intuitive user interface for your
              audience.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-2xl/[49px] font-kindabold">Develop</h2>
            <p>
              We will build your product using the latest technologies and best
              practices. We use agile development methodologies to ensure your
              project is completed on time and within budget.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-2xl/[49px] font-kindabold">Test</h2>
            <p>
              Once the product is developed, we will conduct extensive testing
              to ensure it meets our high performance, usability, and security
              standards. Guided by user feedback, analytics, and more.
            </p>
          </div>
        </motion.div>

        <h2 className="absolute -bottom-12 hidden text-center text-2xl font-kindabold xl:block">
          Repeat
        </h2>
        <RepeatSVG className="absolute inset-x-32 -bottom-12 mx-auto hidden max-w-[1800px] xl:block" />
      </FlexSection>

      <ServicesSection />

      <FlexSection col className="px-5 pb-60 md:px-20 xl:px-[269px]">
        <motion.h1
          className="text-center text-4xl font-kindabold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          Where We Can <br className="md:hidden" /> Help
        </motion.h1>
        <motion.div
          className="mx-auto mt-12 flex max-w-container flex-col justify-evenly gap-6 md:mt-16 lg:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex w-full flex-col gap-6 ">
            <h2 className="text-2xl font-kindabold">Startups</h2>
            <p>
              Need help bringing your idea to life? Our data-driven design
              principles ensure that your product is effective and
              user-friendly. We can streamline the process by creating your
              designs and pitch deck simultaneously, and turning around a demo
              or prototype within weeks.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-2xl font-kindabold">Small & Medium Business</h2>
            <p>
              Looking to address new needs? Our focus on goal-oriented design
              and engineering helps us revamp existing products to achieve
              specific objectives such as increasing conversions, daily active
              users, and visitors.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-2xl font-kindabold">Global Brands</h2>
            <p>
              Launching a new product or campaign? We&apos;ll ensure a smooth
              and efficient launch while staying within your brand guidelines.
              With experience working with top global enterprises, we&apos;ll
              help you convince stakeholders and deliver products that reflect
              your ecosystem.{' '}
            </p>
          </div>
        </motion.div>
      </FlexSection>
      <CTA />
    </>
  )
}
export default ServicesPage
