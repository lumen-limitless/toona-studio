import Container from './Container'
import Section from './Section'

export default function CTA() {
  return (
    <>
      <Section
        id="CTA"
        className="flex flex-col items-center gap-12 bg-indigo-500 px-5 py-20 text-white mid:h-[501px]"
      >
        <h1 className="text-center text-4xl/[49px] font-kindabold mid:text-6xl/[87px]">
          Get Connected
        </h1>
        <p className="text-center text-xl font-kindabold mid:text-2xl/[33px]">
          Do you have a project idea or want to keep in touch?
        </p>
        <button className="h-16 w-full max-w-[280px] rounded-full text-xl ring-2 ring-white">
          Let&apos;s chat
        </button>
      </Section>
    </>
  )
}
