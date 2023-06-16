'use client'
import designImg from 'public/design.jpg'
import brandImg from 'public/brand.jpg'
import engineeringImg from 'public/engineering.jpg'
import contentImg from 'public/content.jpg'
import Image from 'next/image'
import FlexSection from './FlexSection'
import { motion } from 'framer-motion'

const services = [
  {
    name: 'Design',
    image: designImg,
    content: [
      'Web Design',
      'App Design',
      'Logos & Branding',
      'Visual Design',
      'Vision & Road Mapping',
    ],
  },
  {
    name: 'Brand Development',
    image: brandImg,
    content: [
      'Strategy',
      'Visual Identity System',
      'Naming',
      'Voice & Tone',
      'Brand Guidelines',
    ],
  },
  {
    name: 'Engineering',
    image: engineeringImg,
    content: [
      'Frontend / Backend',
      'Mobile Development',
      'Web Development',
      'Prototyping',
      'Quality Assurance',
    ],
  },
  {
    name: 'Content Services',
    image: contentImg,
    content: [
      'Content Strategy',
      'Graphic Design',
      'Social Media Content',
      'Email Marketing',
      'Animation',
    ],
  },
]

export default function ServicesSection() {
  return (
    <>
      <FlexSection
        id="services"
        col
        className="items-center gap-12 px-5 pb-44 pt-[120px] md:px-20 lg:pb-60 xl:px-[269px]"
      >
        <motion.h1
          className="text-center text-4xl/[49px]  font-kindabold md:text-[64px]/[87px]"
          initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          Services
        </motion.h1>
        <div className="flex w-full max-w-container flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row">
          {services.map((service, i) => (
            <div key={i} className="flex flex-1 flex-col gap-6">
              <motion.div
                className="relative h-72 w-full "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </motion.div>

              <motion.h2
                className="text-2xl/[49px] font-kindabold"
                key={i}
                initial={{ opacity: 0, translateY: 5 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >
                {service.name}
              </motion.h2>

              <ul>
                {service.content.map((content, i) => (
                  <motion.li
                    className="text-lg/[200%]"
                    key={i}
                    initial={{ opacity: 0, translateY: 5 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * i,
                      ease: 'easeInOut',
                    }}
                  >
                    {content}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FlexSection>
    </>
  )
}
