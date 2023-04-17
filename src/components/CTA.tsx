import Link from 'next/link'
import Section from './Section'

export default function CTA() {
  return (
    <>
      <Section
        id="CTA"
        className="flex flex-col items-center gap-12 bg-indigo-500 px-5 py-20 text-white md:h-[501px]"
      >
        <h1 className="text-center text-4xl/[49px] font-kindabold md:text-6xl/[87px]">
          Get Connected
        </h1>
        <p className="text-center text-xl font-kindabold md:text-2xl/[33px]">
          Do you have a project idea or want to keep in touch?
        </p>
        <Link
          href="/contact"
          className="inline-flex h-16 w-full max-w-[280px] items-center justify-center rounded-full text-xl font-kindabold ring-2 ring-white"
        >
          Let&apos;s chat
        </Link>
      </Section>
    </>
  )
}