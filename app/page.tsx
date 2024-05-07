import CTA from '@/components/CTA';
import InfoSection from '@/components/InfoSection';
import Landing from '@/components/Landing';
import MarqueeComponent from '@/components/MarqueeComponent';
import ServicesSection from '@/components/ServicesSection';
import whatImg from '@/public/what.jpg';
import whoImg from '@/public/who.jpg';
import whyImg from '@/public/why.jpg';

const info = [
  {
    id: 'who',
    title: 'Who we are',
    description: [
      'Our digital product studio creates long-lasting digital solutions like apps, websites, and platforms designed with user behavior in mind.',
      'We aim to help your business grow by solving real problems. As a hybrid of a creative agency, engineering firm, and consultancy, we bring a unique blend of creativity, technical skill, and strategic insight to every project.',
    ],
    image: whoImg,
    button: {
      name: 'About us',
      link: '/about',
    },
    reverse: false,
  },
  {
    id: 'what',
    title: 'What we do',
    description: [
      'We help businesses create exceptional digital experiences that engage and delight their users. Our end-to-end consulting services are tailored to your needs and goals, from strategy and planning to design and development.',
      'Whether launching a new product, revamping an existing platform, or developing custom software, we will help you bring your vision to life with expertise and personalized solutions.',
    ],
    image: whatImg,
    button: {
      name: 'Our services',
      link: '/services',
    },
    reverse: true,
  },
  {
    id: 'why',
    title: 'Spread the joy',
    description: [
      'We understand that your digital presence is critical to your success, and we are dedicated to helping you achieve your goals. Our team of experts brings a passion for innovation to every project, delivering creative and practical solutions to enhance joyful experiences.',
    ],
    image: whyImg,
    reverse: false,
  },
];

export default function Page() {
  return (
    <>
      <Landing />

      <MarqueeComponent />

      <div className="flex flex-col gap-20 pt-40">
        {info.map((info) => (
          <div key={info.id}>
            <InfoSection {...info} />
          </div>
        ))}
      </div>

      <ServicesSection />

      <CTA />
    </>
  );
}
