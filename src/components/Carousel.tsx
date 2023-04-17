import React from 'react'
import { motion, useAnimation } from 'framer-motion'

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

  // const controls = useAnimation()
  // const duration = 5 // Duration of the rotation animation in seconds

  // React.useEffect(() => {
  //   const rotateCarousel = async () => {
  //     while (true) {
  //       for (let i = 0; i < headings.length; i++) {
  //         await controls.start({
  //           x: -(i * (100 / headings.length)) + '%',
  //           transition: { duration: duration, ease: 'linear' },
  //         })
  //       }
  //     }
  //   }
  //   rotateCarousel()
  // }, [controls, headings.length])

  return (
    <div className=" flex h-[120px] w-full bg-dark">
      <motion.div className=" flex w-full  items-center justify-evenly gap-12   py-3 text-xl uppercase text-white desktop:text-2xl">
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
