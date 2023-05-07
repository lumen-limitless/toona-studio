import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import FlexSection from './FlexSection'

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
    <FlexSection
      id={id}
      centered
      className={clsx(
        'flex-col gap-12 px-5 py-20 md:px-20 lg:gap-[120px] xl:px-[269px]',
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      )}
    >
      <div className="flex flex-col justify-center gap-6 md:gap-12">
        <h1 className="text-4xl font-kindabold md:text-[64px]/[87px]">
          {title}
        </h1>

        <div className="lg:max-w-[639px]">
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

      <div className="relative h-[400px] w-full shrink-0 md:h-[525px] lg:max-w-[480px] xl:h-[719px] xl:max-w-[631px]">
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
    </FlexSection>
  )
}
