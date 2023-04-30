import Marquee from 'react-fast-marquee'

const headings = [
  'strategy',
  '✦',
  'cx design',
  '✦',
  'social media',
  '✦',
  'prototyping',
  '✦',
  'consulting',
  '✦',
  'quality assurance',
  '✦',
  'strategy',
  '✦',
  'cx design',
  '✦',
  'social media',
  '✦',
  'prototyping',
  '✦',
  'consulting',
  '✦',
  'quality assurance',
  '✦',
  'strategy',
  '✦',
  'cx design',
  '✦',
  'social media',
  '✦',
  'prototyping',
  '✦',
  'consulting',
  '✦',
]

const MarqueeComponent: React.FC = () => {
  return (
    <>
      <Marquee
        className="flex h-[120px] w-full overflow-hidden bg-dark py-3 text-xl uppercase text-light lg:text-2xl"
        gradient={false}
      >
        {headings.map((heading, i) => (
          <span className="mx-3 font-kindabold" key={i}>
            {heading}
          </span>
        ))}
      </Marquee>
    </>
  )
}

export default MarqueeComponent
