import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Circles from '../components/Circles'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import { Menu } from '@headlessui/react'
import { useState } from 'react'

const ContactPage: NextPage = () => {
  const [work, setWork] = useState('')
  return (
    <>
      <NextSeo />
      <Section col centered id="contact" className="py-40">
        <Circles />
        <Container className="flex max-w-5xl flex-col items-center justify-center gap-12">
          {' '}
          <div className="text-center">
            <h1>Let&apos;s chat</h1>
            <p>
              Let us know what you need and we can <br /> provide a brief cost &
              time estimate.
            </p>
          </div>
          <form className="flex w-full flex-col    gap-3">
            <label htmlFor="name">Your name or company</label>
            <input
              className="rounded-full border-2 border-dark px-2 py-3 text-dark"
              id="name"
              type="text"
              placeholder="Peter Parker at Amazon"
            />
            <label htmlFor="email">Email address</label>
            <input
              className="rounded-full border-2 border-dark px-2 py-3 text-dark"
              id="email"
              type="text"
              placeholder="pparker@gmail.com"
            />
            <label htmlFor="phone">
              What type of work are you looking for?
            </label>
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button className="rounded-full border-2 border-dark px-2 py-3 text-dark">
                    {work || 'Select a work type'}
                  </Menu.Button>
                  <Menu.Items className=" rounded-xl border-2 border-dark bg-white shadow-lg ring ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => setWork('Web development')}
                            className={`${
                              active
                                ? 'bg-violet-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Web development
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </>
              )}
            </Menu>
            <label htmlFor="details">Tell us about your project</label>
            <textarea
              rows={6}
              className="rounded-xl border-2 border-dark px-2 py-3 text-dark"
              id="details"
              placeholder="I want to make an app about lemons & machine learning for the elderly"
            />

            <Button
              variant="primary"
              type="submit"
              className="mx-auto h-[64px] w-[203px]"
            >
              Send message
            </Button>
          </form>
        </Container>
      </Section>
      <Section
        id="connect"
        col
        centered
        className="gap-12 bg-indigo-600 py-32 text-light"
      >
        <h1>Get connected</h1>

        <div className="flex flex-col items-center gap-3">
          <span className="text-xl opacity-50">General</span>
          <a href="mailto:hello@toona.studio">hello@toona.studio</a>
        </div>
      </Section>
    </>
  )
}
export default ContactPage
