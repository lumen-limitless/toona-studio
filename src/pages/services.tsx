import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import InfoSection from '../components/InfoSection'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import creativityImg from '../../public//creativity.jpeg'
import collaborationImg from '../../public/collaboration.jpeg'
import growthImg from '../../public/growth.jpeg'
import ServicesComponent from '../components/ServicesComponent'
import MagicSVG from 'public/magic.svg'
import RepeatSVG from 'public/repeat.svg'
import CTA from '../components/CTA'
import CirclesLeftSVG from 'public/circles-left.svg'
import CirclesRightSVG from 'public/circles-right.svg'

const info = [
  {
    id: 'creativity',
    title: 'Creativity & Planning',
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
        fullscreen
        centered
        col
        className="gap-12 px-[12%]"
      >
        <CirclesLeftSVG className="absolute -top-32 right-0 h-[640px]" />
        <CirclesRightSVG className="absolute -bottom-32 left-0 h-[640px]" />

        <h1 className="text-center">
          We build catered experiences to grow your business
        </h1>
        <Button variant="primary" size="main">
          Let&apos;s make some magic <MagicSVG className="ml-1 h-5 w-5" />
        </Button>
      </Section>
      {info.map((info) => (
        <div key={info.id}>
          <InfoSection {...info} />
        </div>
      ))}
      <Section>
        <RepeatSVG className="inset-0" />
      </Section>
      <ServicesComponent />
      <Section col centered>
        <h1>Where We Can Help</h1>
        <p></p>
      </Section>
      <CTA />
    </>
  )
}
export default ServicesPage
