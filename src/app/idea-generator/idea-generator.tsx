'use client'
import FlexSection from '@/components/FlexSection'
import type { NextPage } from 'next'

const IdeaGeneratorPage: NextPage = () => {
  return (
    <FlexSection centered col className="px-6 md:px-12 lg:px-[269px]">
      <div>
        <span className="text-7xl/relaxed">I Want to make </span>
        <input
          className="rounded-full border-2 border-dark p-6 text-center text-4xl"
          value={'an app'}
        ></input>
        <br />
        <span className="text-7xl/relaxed">about </span>
        <input
          className="rounded-full border-2 border-dark p-6 text-center text-4xl"
          value={'lemons'}
        ></input>{' '}
        <span className="text-7xl/relaxed">&</span>
        <input
          className="rounded-full border-2 border-dark p-6 text-center text-4xl"
          value={'machine learning'}
        ></input>
        <br />
        <span className="text-7xl/relaxed">for </span>
        <input
          className="rounded-full border-2 border-dark p-6 text-center text-4xl"
          value={'the elderly'}
        ></input>
      </div>
      <div className="flex gap-6">
        <button>+ Device</button>
        <button>+ Budget</button>
      </div>
      <div className="flex gap-6">
        <button>Generate</button>
        <button>Let&apos; create it</button>
      </div>
    </FlexSection>
  )
}
export default IdeaGeneratorPage
