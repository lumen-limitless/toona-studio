import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import InfoSection from '../components/InfoSection'
import Section from '../components/Section'
import creativityImg from '../../public//creativity.jpeg'
import collaborationImg from '../../public/collaboration.jpeg'
import growthImg from '../../public/growth.jpeg'
import ServicesComponent from '../components/Features'
import MagicSVG from 'public/magic.svg'
import RepeatSVG from 'public/repeat.svg'
import CTA from '../components/CTA'
import Container from '../components/Container'
import CirclesStarRightSVG from 'public/circles-star-right.svg'
import CirclesStarLeftSVG from 'public/circles-star-left.svg'

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
      <NextSeo />
      <Section
        id="services"
        centered
        col
        className="gap-12 px-[12%] py-32 mid:h-screen"
      >
        <CirclesStarRightSVG className="pointer-events-none absolute -top-28 right-0 z-0 h-[335px] stroke-dark mid:h-[642px]" />
        <CirclesStarLeftSVG className="pointer-events-none absolute -bottom-28 left-0 z-0 h-[335px] stroke-dark mid:h-[642px]" />

        <h1 className="text-center text-4xl/[49px] font-kindabold mid:text-[72px]/[98px]">
          We build catered <br /> experiences to <br /> grow your <br />{' '}
          business.
        </h1>
        <button className="full z-10 inline-flex h-16 w-full max-w-[306px] items-center justify-center rounded-full bg-indigo-500 text-lg/[24px] text-white">
          Let&apos;s make some magic <MagicSVG className="ml-1 h-5 w-5" />
        </button>
      </Section>
      {info.map((info) => (
        <div key={info.id}>
          <InfoSection {...info} />
        </div>
      ))}
      <Section col className="py-4">
        <h1 className="text-center text-4xl/[49px] font-kindabold mid:text-[72px]/[98px]">
          Customize your workflow
        </h1>
        <div className="relative flex justify-evenly">
          <div>
            <h2 className="text-2xl font-bold">Test</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam praesentium pariatur animi sed libero vero doloribus esse
              eos velit, sequi labore accusantium eveniet, aut excepturi beatae
              doloremque cum maiores.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">test</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam praesentium pariatur animi sed libero vero doloribus esse
              eos velit, sequi labore accusantium eveniet, aut excepturi beatae
              doloremque cum maiores.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">test</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam praesentium pariatur animi sed libero vero doloribus esse
              eos velit, sequi labore accusantium eveniet, aut excepturi beatae
              doloremque cum maiores.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">test</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam praesentium pariatur animi sed libero vero doloribus esse
              eos velit, sequi labore accusantium eveniet, aut excepturi beatae
              doloremque cum maiores.
            </p>
          </div>
          <RepeatSVG className=" absolute  w-full" />
        </div>
      </Section>
      <ServicesComponent />
      <Section>
        <Container>
          <h1 className="text-center text-4xl/[49px]">
            Where We Can <br className="mid:hidden" /> Help
          </h1>
          <div className="mt-12 flex flex-col gap-6 mid:flex-row">
            <div className="flex w-full flex-col gap-6">
              <h2 className="text-2xl/[33px]">Startups</h2>
              <p className="text-base/[22px] font-normal">
                Need help bringing your idea to life? Our data-driven design
                principles ensure that your product is effective and
                user-friendly. We can streamline the process by creating your
                designs and pitch deck simultaneously, and turning around a demo
                or prototype within weeks.
              </p>
            </div>
            <div className="flex w-full flex-col gap-6">
              <h2 className="text-2xl/[33px]">Small & Medium Business</h2>
              <p className="text-base/[22px] font-normal">
                Looking to address new needs? Our focus on goal-oriented design
                and engineering helps us revamp existing products to achieve
                specific objectives such as increasing conversions, daily active
                users, and visitors.
              </p>
            </div>
            <div className="flex w-full flex-col gap-6">
              <h2 className="text-2xl/[33px]">Global Brands</h2>
              <p className="text-base/[22px] font-normal">
                Launching a new product or campaign? We&apos;ll ensure a smooth
                and efficient launch while staying within your brand guidelines.
                With experience working with top global enterprises, we&apos;ll
                help you convince stakeholders and deliver products that reflect
                your ecosystem.{' '}
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTA />
    </>
  )
}
export default ServicesPage
