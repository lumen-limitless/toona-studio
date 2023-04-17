import React from 'react'
import { motion } from 'framer-motion'

const Carousel = () => {
  const headings = [
    'strategy',
    '✦',
    'cx design',
    '✦',
    'social media',
    '✦',
    'prototyping',
    '✦',
    'consulting',
    '✦',
    'quality assurance',
    '✦',
    'strategy',
    '✦',
    'cx design',
    '✦',
    'social media',
    '✦',
    'prototyping',
    '✦',
    'consulting',
    '✦',
    'quality assurance',
    '✦',
  ]

  return (
    <div className=" flex h-[120px] w-full bg-dark">
      <motion.div className=" desktop:text-2xl flex  w-full items-center justify-evenly gap-12   overflow-clip py-3 text-xl uppercase text-white">
        {headings.map((heading, i) => (
          <span className="whitespace-nowrap" key={i}>
            {heading}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default Carousel
