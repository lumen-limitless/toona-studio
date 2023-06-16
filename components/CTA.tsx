'use client'
import Link from 'next/link'
import FlexSection from './FlexSection'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <FlexSection
      id="CTA"
      col
      className="items-center gap-12 bg-indigo-500 px-5 py-20 text-white md:h-[501px]"
    >
      <motion.h1
        className="text-center text-4xl font-kindabold md:text-6xl"
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
      >
        Get Connected
      </motion.h1>
      <motion.p
        className="pb-6 text-center text-xl font-kindabold md:text-2xl"
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
      >
        Do you have a project idea or want to keep in touch?
      </motion.p>
      <Link href="/contact" legacyBehavior passHref>
        <motion.a
          className="inline-flex h-16 w-full max-w-[280px] items-center justify-center rounded-full text-xl font-kindabold ring-2 ring-white duration-300 ease-in-out hover:bg-light/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
        >
          Let&apos;s chat
        </motion.a>
      </Link>
    </FlexSection>
  )
}
