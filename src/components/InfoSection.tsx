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
      className={clsx(
        'flex-col justify-evenly gap-12 px-4 py-20 md:px-[12%] lg:gap-20',
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      )}
    >
      <div className="flex flex-col justify-center gap-12 lg:max-w-[480px] ">
        <h1 className=" text-4xl/[49px] font-kindabold md:text-[64px]/[87px]">
          {title}
        </h1>

        <div>
          {description.map((desc, i) => (
            <>
              <p
                className="text-lg/[25px] font-kindabold md:text-[20px]/[27px]"
                key={i}
              >
                {desc}
              </p>
              <br />
            </>
          ))}
        </div>

        {button && (
          <Link href={button.link} passHref>
            <button className="full h-16 w-full rounded-full text-black ring-2 ring-black md:max-w-[280px]">
              {button.name}
            </button>
          </Link>
        )}
      </div>
      <div className="relative h-[400px] w-full md:h-[525px] lg:max-w-[480px] xl:h-[719px] xl:max-w-[631px]">
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
