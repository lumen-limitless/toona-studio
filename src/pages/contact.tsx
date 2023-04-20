import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from '../components/Container'
import { Menu } from '@headlessui/react'
import { useState } from 'react'
import CirclesSVG from 'public/circles.svg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/router'
import FlexSection from '../components/FlexSection'

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
  name: z.string().min(1),
  email: z.string().email(),
  work: z.string().min(1),
  message: z.string().min(1),
})

export type ContactForm = z.infer<typeof schema>

const ContactPage: NextPage = () => {
  const [work, setWork] = useState('')
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>()

  const { push } = useRouter()

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.debug(data)
    fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.debug(res)
      if (res.status === 200) {
        push('/success')
      } else {
        alert('Something went wrong. Please try again later.')
      }
    })
  }
  return (
    <>
      <NextSeo />
      <FlexSection col centered id="contact" className="py-[44px]">
        <CirclesSVG className="pointer-events-none absolute -top-32 right-0 h-[640px] rotate-180" />
        <CirclesSVG className="pointer-events-none absolute -bottom-32 left-0 h-[640px]" />
        <FlexSection.Container className="z-10 flex max-w-5xl flex-col items-center justify-center gap-12">
          <div className="mt-12 flex flex-col gap-12 text-center">
            <h1 className="text-4xl/[49px]">Let&apos;s chat</h1>
            <p className="text-lg/[25px] font-kindabold">
              Let us know what you need and we can <br /> provide a brief cost &
              time estimate.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-3"
          >
            <label htmlFor="name">Your name or company</label>
            <input
              {...register('name', {
                required: 'This field is required',
              })}
              className="rounded-full border-2 border-dark px-2 py-3 text-dark"
              id="name"
              type="text"
              placeholder="Peter Parker at Amazon"
            />
            <label htmlFor="email">Email address</label>
            <input
              {...register('email')}
              className="rounded-full border-2 border-dark px-2 py-3 text-dark"
              id="email"
              type="text"
              placeholder="pparker@gmail.com"
            />
            <label htmlFor="work">What type of work are you looking for?</label>
            <Menu as="div" className={'relative w-full'}>
              {({ open, close }) => (
                <>
                  <Menu.Button
                    id="work"
                    className="w-full rounded-full border-2 border-dark px-2 py-3 text-dark"
                  >
                    {work || 'Select your work'}
                  </Menu.Button>
                  <Menu.Items className="absolute z-20 mt-3 w-full origin-bottom rounded-xl border-2 border-dark bg-white shadow-lg ring ring-black ring-opacity-5 drop-shadow-lg focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <>
                            {items.map((item, i) => (
                              <a
                                {...register('work')}
                                key={i}
                                onClick={() => {
                                  close()
                                  setWork(item)
                                }}
                                className={`${
                                  active
                                    ? 'bg-violet-500 text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2`}
                              >
                                {item}
                              </a>
                            ))}
                          </>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </>
              )}
            </Menu>
            <label htmlFor="details">Tell us about your project</label>
            <textarea
              {...register('message')}
              rows={6}
              className="rounded-xl border-2 border-dark px-2 py-3 text-dark"
              id="details"
              placeholder="I want to make an app about lemons & machine learning for the elderly"
            />

            <button
              type="submit"
              className="mx-auto h-[64px] w-[203px] bg-indigo text-light transition-colors ease-out hover:bg-indigo-600"
            >
              Send message
            </button>
          </form>
          <a href="" className="text-lg/[24px] font-kindabold text-indigo ">
            {' '}
            {'<-'} Idea Generator
          </a>
        </FlexSection.Container>
      </FlexSection>
      <FlexSection
        id="connect"
        col
        centered
        className="gap-12 bg-indigo-600 py-32 text-light"
      >
        <h1 className="text-center text-4xl/[49px] md:text-6xl/[87px]">
          Get connected
        </h1>

        <div className="flex flex-col items-center gap-3">
          <span className="text-xl opacity-50">General</span>
          <a
            href="mailto:hello@toona.studio"
            className="text-4xl/[49px] font-kindabold"
          >
            hello@toona.studio
          </a>
        </div>
      </FlexSection>
    </>
  )
}
export default ContactPage
