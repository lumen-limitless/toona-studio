'use client'
import FlexSection from '@/components/FlexSection'
import { Menu } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import type { NextPage } from 'next'
import ChevronDownSVG from 'public/chevron-down.svg'
import CirclesStarLeftSVG from 'public/circles-star-left.svg'
import CirclesStarRightSVG from 'public/circles-star-right.svg'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useBoolean } from 'react-use'
import { z } from 'zod'

const items = [
  'Digital Experience',
  'Web Design',
  'Product Design',
  'Branding',
  'Software Engineering',
  'Early Startup Strategy',
  'Other',
]

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(2),
})

export type ContactForm = z.infer<typeof schema>

const ContactPage: NextPage = () => {
  const [work, setWork] = useState('Digital Experience')
  const [loading, toggleLoading] = useBoolean(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>()

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.debug(data)

    toggleLoading(true)

    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, work }),
    }).then((res) => {
      console.debug(res)
      toggleLoading(false)

      if (res.status === 200) {
        alert('Message sent!')
      } else {
        alert('Something went wrong. Please try again later.')
      }
    })
  }
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 inset-y-20 hidden lg:inset-y-0 lg:block">
        <CirclesStarRightSVG className="pointer-events-none absolute -top-24 right-0 z-0 h-[335px]  stroke-dark md:h-[642px]" />
        <CirclesStarLeftSVG className="pointer-events-none absolute -bottom-36 left-0 z-0 h-[335px]  stroke-dark md:h-[642px]" />
      </div>
      <FlexSection
        col
        id="contact"
        className="z-20 px-5 pb-[44px] md:px-20 md:pb-[140px] xl:px-[269px]"
      >
        <motion.div
          className=" mb-12 space-y-12 pt-[100px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h1 className="text-4xl font-kindabold md:text-[52px]/[71px] lg:text-7xl">
            Let&apos;s chat
          </h1>
          <p className="text-lg font-kindabold lg:text-2xl">
            Let us know what you need and we can <br /> provide a brief cost &
            time estimate.
          </p>
        </motion.div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" relative z-10 flex w-full max-w-[538px] flex-col gap-10"
        >
          <label htmlFor="name" className="flex flex-col gap-3">
            Your name or company
            <input
              {...register('name', {
                required: 'This field is required',
              })}
              className="rounded-full border-2 border-dark bg-transparent px-5 py-3 text-dark"
              id="name"
              type="text"
              placeholder="Peter Parker at Amazon"
            />
          </label>
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <label htmlFor="email" className="flex flex-col gap-3">
            Email address
            <input
              {...register('email')}
              className="rounded-full border-2 border-dark bg-transparent px-5 py-3 text-dark"
              id="email"
              type="text"
              placeholder="pparker@gmail.com"
            />{' '}
          </label>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <div>
            <label htmlFor="work" className="mb-3 flex flex-col">
              What type of work are you looking for?
            </label>
            <Menu as="div">
              <Menu.Button
                id="work"
                className="w-full items-center justify-start rounded-full border-2 border-dark px-5 py-3 text-dark"
              >
                {work} <ChevronDownSVG className="ml-auto h-[7px] w-3" />
              </Menu.Button>
              <Menu.Items className="absolute z-40 mt-3 w-full origin-bottom rounded-xl border-2 border-dark bg-white shadow-lg ring ring-black ring-opacity-5 drop-shadow-lg focus:outline-none">
                {items.map((item, i) => (
                  <Menu.Item key={i}>
                    {({ close }) => (
                      <button
                        onClick={() => {
                          setWork(item)
                          close()
                        }}
                        disabled={item === work}
                        className={`group inline-flex w-full items-center justify-start rounded-md px-2 py-2 text-gray-900`}
                      >
                        {item}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </div>

          <label htmlFor="details" className="flex flex-col gap-3">
            Tell us about your project
            <textarea
              {...register('message')}
              rows={5}
              className="rounded-xl border-2 border-dark bg-transparent px-5 py-3 text-dark"
              id="details"
              placeholder="I want to make an app about lemons & machine learning for the elderly"
            />
          </label>
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mx-auto h-[64px] w-[203px] bg-indigo text-light transition-colors ease-out hover:bg-indigo-600 disabled:bg-opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
              </>
            ) : (
              'Send message'
            )}
          </button>
        </form>
        {/*
        <Link
          href="/idea-generator"
          className="mt-10 text-lg font-kindabold text-indigo "
        >
          {' '}
          {'<-'} Idea Generator
        </Link> */}
      </FlexSection>
      <FlexSection
        id="connect"
        col
        centered
        className="gap-12 bg-indigo-600 px-5 py-32 text-light"
      >
        <motion.h1
          className="text-center text-4xl md:text-6xl"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
        >
          Get connected
        </motion.h1>

        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
        >
          <span className="text-xl opacity-50">General</span>
          <a
            href="mailto:hello@toona.studio"
            className="text-4xl font-kindabold"
          >
            hello@toona.studio
          </a>
        </motion.div>
      </FlexSection>
    </>
  )
}
export default ContactPage
