import designImg from 'public/design.jpg'
import brandImg from 'public/brand.jpg'
import engineeringImg from 'public/engineering.jpg'
import contentImg from 'public/content.jpg'
import Image from 'next/image'
import FlexSection from './FlexSection'

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
        className="items-center gap-12 px-5 py-32 md:px-20 xl:px-[269px]"
      >
        <h1 className="text-center text-4xl/[49px]  md:text-[64px]/[87px]">
          Services
        </h1>
        <div className="flex w-full flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row">
          {services.map((service, i) => (
            <div key={i} className="flex flex-1 flex-col gap-6">
              <div className="relative h-72 w-full ">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>

              <h2 className="text-2xl/[49px]">{service.name}</h2>

              <ul>
                {service.content.map((content, i) => (
                  <li className="text-lg/[200%] font-kindalight" key={i}>
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FlexSection>
    </>
  )
}
