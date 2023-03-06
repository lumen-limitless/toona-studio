import Button from '../ui/Button'
import Container from '../ui/Container'
import Section from '../ui/Section'

export default function CTA({}: {}) {
  return (
    <>
      <Section id="CTA" className="py-40">
        <Container className="flex flex-col items-center gap-12">
          <h1>Get Connected</h1>
          <p>Do you have a project idea or want to keep in touch?</p>
          <Button className="h-16 w-72">Let&apos;s chat</Button>
        </Container>
      </Section>
    </>
  )
}
