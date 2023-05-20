'use client'
import FlexSection from '@/components/FlexSection'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useSessionStorage } from 'react-use'

const IdeaGeneratorPage: NextPage = () => {
  const [tech, setTech] = useSessionStorage('tech', 'app')
  const [topic1, setTopic1] = useSessionStorage('topic-1', 'lemons')
  const [topic2, setTopic2] = useSessionStorage('topic-2', 'machine-learning')
  const [demographic, setDemographic] = useSessionStorage(
    'demographic',
    'the elderly'
  )

  const handleGenerate = async () => {
    const res = await fetch('/api/idea', {
      method: 'GET',
      cache: 'no-cache',
    })

    const data = await res.json()
    console.debug(data)
    setTech(data.message[0])
    setTopic1(data.message[1])
    setTopic2(data.message[2])
    setDemographic(data.message[3])
  }
  return (
    <FlexSection centered col className="px-6 ">
      <div className="max-w-container space-y-6">
        <div>
          <span className="text-3xl lg:text-7xl/relaxed">I Want to make </span>
          <input
            className="rounded-full border-4 border-indigo bg-light p-3 text-center text-2xl text-indigo lg:p-6 lg:text-4xl"
            value={tech}
          ></input>
        </div>

        <div>
          <span className="text-3xl lg:text-7xl/relaxed">about </span>
          <input
            className="rounded-full border-4 border-indigo bg-light p-3 text-center text-2xl text-indigo lg:p-6 lg:text-4xl"
            value={topic1}
          ></input>{' '}
          <span className="text-3xl lg:text-7xl/relaxed">&</span>{' '}
          <input
            className="rounded-full border-4 border-indigo bg-light p-3 text-center text-2xl text-indigo lg:p-6 lg:text-4xl"
            value={topic2}
          ></input>
        </div>
        <div>
          <span className="text-3xl lg:text-7xl/relaxed">for </span>
          <input
            className="rounded-full border-4 border-indigo bg-light p-3 text-center text-2xl text-indigo lg:p-6 lg:text-4xl"
            value={demographic}
          ></input>
        </div>
      </div>

      {/* <div className="flex gap-3 lg:p-6">
        <button>+ Device</button>
        <button>+ Budget</button>
      </div> */}

      <div className="my-12 flex w-full flex-col items-center justify-center gap-3 lg:flex-row lg:p-6 ">
        <button
          onClick={handleGenerate}
          className="h-[64px] w-full bg-indigo text-light transition-colors ease-out hover:bg-indigo-600 lg:w-[280px]"
        >
          Regenerate
        </button>

        <Link
          href="contact"
          className="full inline-flex h-16 w-full items-center justify-center rounded-full text-indigo ring-2 ring-indigo duration-300 ease-in-out hover:bg-indigo-600/10 hover:text-indigo lg:w-[280px]"
        >
          Let&apos; create it
        </Link>
      </div>
    </FlexSection>
  )
}
export default IdeaGeneratorPage
