'use client'

import Link from 'next/link'
import FlexSection from './FlexSection'
import { HeroImage } from './HeroImage'
import { motion } from 'framer-motion'

export default function Landing() {
  return (
    <FlexSection
      id="landing"
      className="min-h-[calc(100vh-100px)] gap-6 overflow-x-hidden px-5 pb-12 md:px-20 xl:px-[269px]"
    >
      <div className="mx-auto flex w-full max-w-container flex-col-reverse gap-12 lg:flex-row lg:gap-0">
        <motion.div
          className="flex flex-col justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h1 className="text-4xl font-kindabold md:text-[52px]/[71px] lg:text-7xl">
            Crafting joy <br className="md:hidden" /> through{' '}
            <br className="hidden md:block" /> digital{' '}
            <br className="md:hidden" /> experiences.
          </h1>
          <p className="text-lg font-kindabold lg:text-2xl">
            We are a digital product studio based in Rochester, NY{' '}
            <br className="hidden lg:inline-block" /> that designs & develops
            innovative and human-centered <br className="hidden md:block" />{' '}
            experiences to enrich your business.
          </p>
          <Link
            href="/contact"
            className="mx-auto inline-flex h-16 w-full items-center justify-center rounded-full bg-indigo-500 text-xl font-kindabold text-light transition-colors duration-300 ease-in-out hover:bg-indigo-600 md:mx-0 md:max-w-[280px]"
          >
            Let&apos;s chat
          </Link>
        </motion.div>

        <HeroImage />
      </div>
    </FlexSection>
  )
}
