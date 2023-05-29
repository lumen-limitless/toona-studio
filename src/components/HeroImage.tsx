'use client'
import Image from 'next/image'
import heroPhoto from 'public/hero.png'

export const HeroImage = () => {
  return (
    <div className="mx-auto flex w-full max-w-[567px] items-center justify-center lg:mx-0">
      <div className="relative flex h-[400px] w-[209px] items-center justify-center rounded-b-[400px] rounded-t-[400px] md:h-[559px] md:w-[292px] xl:h-[759px] xl:w-[388px]">
        <Image
          src={heroPhoto}
          alt=""
          priority
          quality={100}
          fill
          className="object-contain object-center"
        />
        <object
          type="image/svg+xml"
          data="/orbit.svg"
          className="absolute -inset-x-[88px] top-[50px] -mr-2 md:-inset-x-[123px] md:top-[66px] xl:-inset-x-[165px] xl:top-[100px] xl:-mr-3"
        />
      </div>
    </div>
  )
}
