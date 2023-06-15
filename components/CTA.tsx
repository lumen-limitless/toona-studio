import Link from 'next/link'
import FlexSection from './FlexSection'

export default function CTA() {
  return (
    <>
      <FlexSection
        id="CTA"
        col
        className="items-center gap-12 bg-indigo-500 px-5 py-20 text-white md:h-[501px]"
      >
        <h1 className="text-center text-4xl font-kindabold md:text-6xl">
          Get Connected
        </h1>
        <p className="pb-6 text-center text-xl font-kindabold md:text-2xl">
          Do you have a project idea or want to keep in touch?
        </p>
        <Link
          href="/contact"
          className="inline-flex h-16 w-full max-w-[280px] items-center justify-center rounded-full text-xl font-kindabold ring-2 ring-white duration-300 ease-in-out hover:bg-light/30"
        >
          Let&apos;s chat
        </Link>
      </FlexSection>
    </>
  )
}
