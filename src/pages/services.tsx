import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Circles from '../components/Circles'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'

const ServicesPage: NextPage = () => {
  return (
    <>
      <NextSeo />
      <Section id="services" fullscreen centered col>
        <Circles />

        <h1 className="text-center">
          We build catered experiences to <br /> grow your business
        </h1>
        <Button variant="primary" className="p-3">
          Let&apos;s make some magic{' '}
        </Button>
      </Section>
    </>
  )
}
export default ServicesPage
