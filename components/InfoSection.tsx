import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import FlexSection from './FlexSection'
import { cn } from '@/lib/utils'

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
    <FlexSection id={id} className="px-5 md:px-20 xl:px-[269px]">
      <div
        className={cn(
          'mx-auto flex w-full max-w-container flex-col justify-between gap-12',
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        )}
      >
        <div className="flex max-w-[631px] flex-col justify-center gap-6 md:gap-12">
          <h1 className="text-4xl font-kindabold md:text-[64px]/[87px]">
            {title}
          </h1>

          <div>
            {description.map((desc, i) => (
              <div key={i}>
                <p className="text-lg font-kindabold md:text-xl">{desc}</p>
                <br />
              </div>
            ))}
          </div>

          {button && (
            <Link href={button.link} passHref>
              <button className="full hover: h-16 w-full rounded-full text-dark ring-2 ring-dark duration-300 ease-in-out hover:bg-dark hover:text-light md:max-w-[280px]">
                {button.name}
              </button>
            </Link>
          )}
        </div>

        <div className="relative h-[400px] w-full max-w-[631px] shrink-0 rounded-sm md:h-[525px] xl:h-[719px]">
          <Image
            src={image}
            alt=""
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      </div>
    </FlexSection>
  )
}
