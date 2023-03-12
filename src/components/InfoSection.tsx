import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Button from './ui/Button'
import Container from './ui/Container'
import Section from './ui/Section'
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
        className={clsx(
          'flex flex-col gap-[120px] py-32 px-5  lg:px-[12%]',
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        )}
      >
        <div className="flex  max-w-[631px] flex-col justify-center gap-12">
          <h1 className="whitespace-nowrap">{title}</h1>
          {description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
          {button && (
            <Link href={button.link} passHref>
              <Button variant="secondary" size="main">
                {button.name}
              </Button>
            </Link>
          )}
        </div>
        <Image src={image} alt="" />
      </Section>
    </>
  )
}
