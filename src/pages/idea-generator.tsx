import type { NextPage } from 'next'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'

const IdeaGeneratorPage: NextPage = () => {
  return (
    <>
      <Section col className="py-32 px-56">
        <div className=" w-full text-[80px] font-kindabold ">
          I want to make{' '}
          <span className="border-b-4 border-indigo pb-1  text-indigo ">
            an app
          </span>
          <br />
          about{' '}
          <span className="border-b-4 border-indigo pb-1 text-indigo">
            lemons
          </span>{' '}
          &{' '}
          <span className="border-b-4 border-indigo pb-1 text-indigo">
            machine-learning
          </span>
          <br />
          for
          <span className="border-b-4 border-indigo pb-1 text-indigo">
            {' '}
            the elderly
          </span>
        </div>
        <div className="mt-12 flex  w-full justify-start gap-6 ">
          <Button variant="secondary" size="compact">
            + Device
          </Button>
          <Button size="compact" variant="secondary">
            + Budget
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 py-6 md:flex-row">
          <Button variant="primary" size="main">
            Regenerate
          </Button>
          <Button variant="secondary" size="main">
            Let&apos;s create it
          </Button>
        </div>
      </Section>
    </>
  )
}
export default IdeaGeneratorPage
