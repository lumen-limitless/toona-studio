import Container from '../ui/Container'
import Section from '../ui/Section'
import designImg from '../../../public/design.jpg'
import brandImg from '../../../public/brand.jpg'
import engineeringImg from '../../../public/engineering.jpg'
import contentImg from '../../../public/content.jpg'
import Image from 'next/image'

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

export default function Features({}: {}) {
  return (
    <>
      <Section id="features" className="py-32">
        <Container className="flex flex-col gap-12 ">
          <h1 className="text-center">Services</h1>
          <div className="flex flex-col gap-6 md:flex-row">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col gap-6">
                <Image src={service.image} alt={service.name} />
                <h2>{service.name}</h2>
                <ul>
                  {service.content.map((content, i) => (
                    <li className="font-kindalight leading-[200%]" key={i}>
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
