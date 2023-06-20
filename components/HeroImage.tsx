'use client'
import Image from 'next/image'
import heroPhoto from 'public/hero.png'
import { motion } from 'framer-motion'

export const HeroImage: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-[567px] items-center justify-center lg:mx-0">
      <motion.div
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0 }}
        className="relative flex h-[399.57px] w-[209px] items-center justify-center rounded-b-[400px] rounded-t-[400px] md:h-[558.5px] md:w-[292.13px] xl:h-[759px] xl:w-[397px]"
      >
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
          className="absolute top-10 -mr-[6px] w-[380px] md:top-14 md:w-[540px] xl:top-[113.5px] xl:w-[750px]"
        />
      </motion.div>
    </div>
  )
}
