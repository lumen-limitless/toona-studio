'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FlexSection from './FlexSection'
import { HeroImage } from './HeroImage'

export default function Landing() {
  return (
    <FlexSection
      id="landing"
      className="min-h-[calc(100vh-100px)] overflow-x-hidden px-5 pb-12 md:px-20 xl:px-[269px]"
    >
      <div className="mx-auto flex w-full max-w-container flex-col-reverse gap-12 lg:flex-row">
        <div className="flex flex-col justify-center gap-12">
          <motion.h1
            className="text-4xl font-kindabold md:text-[52px]/[71px] lg:text-7xl"
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            Crafting joy <br className="md:hidden" /> through{' '}
            <br className="hidden md:block" /> digital{' '}
            <br className="md:hidden" /> experiences.
          </motion.h1>
          <motion.p
            className="text-lg font-kindabold lg:text-2xl"
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
          >
            We are a digital product studio based in Rochester, NY{' '}
            <br className="hidden lg:inline-block" /> that designs & develops
            innovative and human-centered <br className="hidden md:block" />{' '}
            experiences to enrich your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="mx-auto inline-flex h-16 w-full items-center justify-center rounded-full bg-indigo-500 text-xl font-kindabold text-light transition-colors duration-300 ease-in-out hover:bg-indigo-600 md:mx-0 md:max-w-[280px]"
            >
              Let&apos;s chat
            </Link>
          </motion.div>
        </div>

        <HeroImage />
      </div>
    </FlexSection>
  )
}
