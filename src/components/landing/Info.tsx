import Image from 'next/image'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Section from '../ui/Section'
import whoImg from '../../../public/who.jpg'
import whatImg from '../../../public/what.jpg'
import whyImg from '../../../public/why.jpg'

export default function Info({}: {}) {
  return (
    <>
      <Section id="who" className="pb-32 pt-40">
        <Container className="flex flex-col gap-[120px] md:flex-row">
          <div className="flex  flex-col justify-center gap-12">
            <h1 className="whitespace-nowrap">Who we are</h1>
            <p>
              Our digital product studio creates long-lasting digital solutions
              like apps, websites, and platforms designed with user behavior in
              mind.
            </p>

            <p>
              We aim to help your business grow by solving real problems. As a
              hybrid of a creative agency, engineering firm, and consultancy, we
              bring a unique blend of creativity, technical skill, and strategic
              insight to every project.
            </p>

            <Button variant="secondary" className="h-16 w-[280px]">
              About us
            </Button>
          </div>

          <Image src={whoImg} alt="who" />
        </Container>
      </Section>
      <Section id="what" className="pb-32 pt-40">
        <Container className="flex flex-col gap-[120px] md:flex-row-reverse">
          <div className="flex  flex-col justify-center gap-12">
            <h1 className="whitespace-nowrap">What we do</h1>
            <p>
              We help businesses create exceptional digital experiences that
              engage and delight their users. Our end-to-end consulting services
              are tailored to your needs and goals, from strategy and planning
              to design and development.
            </p>

            <p>
              Whether launching a new product, revamping an existing platform,
              or developing custom software, we&apos;ll help you bring your
              vision to life with expertise and personalized solutions.
            </p>

            <Button variant="secondary" className="h-16 w-72">
              Our services
            </Button>
          </div>
          <Image src={whatImg} alt="" width={631} height={719} />
        </Container>
      </Section>

      <Section id="why" className="pb-32 pt-40">
        <Container className="flex flex-col gap-[120px] md:flex-row">
          <div className="flex  flex-col justify-center gap-12">
            <h1 className="whitespace-nowrap">Spread the joy</h1>
            <p>
              We understand that your digital presence is critical to your
              success, and we&apos;re dedicated to helping you achieve your
              goals. Our team of experts brings a passion for innovation to
              every project, delivering creative and practical solutions to
              enhance joyful experiences.
            </p>
          </div>
          <Image src={whyImg} alt="" width={631} height={719} />
        </Container>
      </Section>
    </>
  )
}
