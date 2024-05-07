'use client'
import FlexSection from '@/components/FlexSection'
import { contactFormAction } from '@/lib/actions'
import ChevronDownSVG from '@/public/chevron-down.svg'
import CirclesStarLeftSVG from '@/public/circles-star-left.svg'
import CirclesStarRightSVG from '@/public/circles-star-right.svg'
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import type { NextPage } from 'next'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { useBoolean } from 'react-use'

const items = [
  'Digital Experience',
  'Web Design',
  'Product Design',
  'Branding',
  'Software Engineering',
  'Early Startup Strategy',
  'Other',
] as const

// const schema = z.object({
//   name: z.string().min(2),
//   email: z.string().email(),
//   message: z.string().min(2),
// })

// export type ContactForm = z.infer<typeof schema>

const SubmitButton: React.FC = ({}) => {
  const { pending } = useFormStatus()
  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="mx-auto h-[64px] w-[203px] bg-indigo text-light transition-colors ease-out hover:bg-indigo-600 disabled:bg-opacity-50"
      >
        {pending ? (
          <>
            <Loader2 className="animate-spin" />
          </>
        ) : (
          'Send message'
        )}
      </button>
    </>
  )
}

const ContactPage: NextPage = () => {
  const [work, setWork] = useState<(typeof items)[number]>('Digital Experience')
  const [isOpen, toggleIsOpen] = useBoolean(false)

  const handleSubmit = (formData: FormData) => {
    formData.append('work', work)
    contactFormAction(formData).then(({ success }) => {
      if (success) {
        toggleIsOpen(true)
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
          action={handleSubmit}
          className=" relative z-10 flex w-full max-w-[538px] flex-col gap-10"
        >
          <label htmlFor="name" className="flex flex-col gap-3">
            Your name or company
            <input
              className="rounded-full border-2 border-dark bg-transparent px-5 py-3 text-dark"
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Peter Parker at Amazon"
              required
              minLength={2}
            />
          </label>

          <label htmlFor="email" className="flex flex-col gap-3">
            Email address
            <input
              // {...register('email')}
              className="rounded-full border-2 border-dark bg-transparent px-5 py-3 text-dark"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="pparker@gmail.com"
              required
            />{' '}
          </label>

          <div>
            <label htmlFor="work" className="mb-3 flex flex-col">
              What type of work are you looking for?
            </label>
            <Menu as="div">
              <MenuButton
                id="work"
                className="w-full items-center justify-start rounded-full border-2 border-dark px-5 py-3 text-dark"
              >
                {work} <ChevronDownSVG className="ml-auto h-[7px] w-3" />
              </MenuButton>
              <MenuItems className="absolute z-40 mt-3 w-full origin-bottom rounded-xl border-2 border-dark bg-white shadow-lg ring ring-black ring-opacity-5 drop-shadow-lg focus:outline-none">
                {items.map((item, i) => (
                  <MenuItem key={i}>
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
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>

          <label htmlFor="message" className="flex flex-col gap-3">
            Tell us about your project
            <textarea
              rows={5}
              className="rounded-xl border-2 border-dark bg-transparent px-5 py-3 text-dark"
              name="message"
              id="message"
              placeholder="I want to make an app about lemons & machine learning for the elderly"
              required
            />
          </label>

          <SubmitButton />
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

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-40" onClose={toggleIsOpen}>
          <div className="fixed inset-0 z-40 w-screen overflow-y-auto bg-black/50 backdrop-blur-lg">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md rounded-xl border-2 border-dark bg-light p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium">
                    Message Sent 🎉
                  </DialogTitle>

                  <p className="mt-2 text-sm/6 ">
                    Thank you for reaching out to us. We will get back to you as
                    soon as possible.
                  </p>
                  <div className="mt-4">
                    <Button
                      className="h-[32px] w-[160px] bg-indigo text-light transition-colors ease-out hover:bg-indigo-600 disabled:bg-opacity-50"
                      onClick={toggleIsOpen}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ContactPage
