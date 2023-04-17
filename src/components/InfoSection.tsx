import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Section from './Section'
import clsx from 'clsx'
export default function InfoSection({
  id,
  title,
  description,
  image,
  button,
  reverse,
}: {
  id: string
  title: string
  description: string[]
  image: StaticImageData
  button?: { name: string; link: string }
  reverse?: boolean
}) {
  return (
    <>
      <Section
        id={id}
        centered
        className={clsx(
          ' flex flex-col gap-[120px] px-5 py-32',
          reverse ? 'mid:flex-row-reverse' : 'mid:flex-row'
        )}
      >
        <div className="flex max-w-[480px] flex-col justify-center gap-12">
          <h1 className=" text-4xl/[49px] font-kindabold mid:text-[64px]/[87px]">
            {title}
          </h1>
          {description.map((desc, i) => (
            <p
              className="text-lg/[25px] font-kindabold mid:text-[20px]/[27px]"
              key={i}
            >
              {desc}
            </p>
          ))}
          {button && (
            <Link href={button.link} passHref>
              <button className="full h-16 w-full rounded-full text-black ring-2 ring-black">
                {button.name}
              </button>
            </Link>
          )}
        </div>
        <Image src={image} alt="" />
      </Section>
    </>
  )
}
