'use client'
import Image from 'next/image'
import heroPhoto from 'public/hero.jpg'

export const HeroImage: React.FC = () => {
  return (
    <div className="relative  mx-auto  flex h-[399.57px] w-[209px] items-center justify-center rounded-b-[400px] rounded-t-[400px] md:h-[558.5px] md:w-[292.13px]  lg:h-[759px] lg:w-[397px]">
      <Image
        src={heroPhoto}
        alt=""
        priority
        quality={100}
        fill
        className=" object-contain object-center"
      />
      <>
        <svg
          className="absolute top-10 -mr-1 w-[380px]  md:-mr-2 md:w-[540px] lg:top-20 lg:-mr-3 lg:w-[760px]"
          id="ei6PGQMjhyu1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 745 667"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <g mask="url(#ei6PGQMjhyu5)">
            <g>
              <path
                d="M637.186,36.1392c11.324,12.1007,14.864,30.629,11.301,54.0272-3.56,23.3836-14.195,51.4536-30.967,82.3896-33.539,61.863-91.508,134.985-165.973,204.67s-151.267,122.683-215.215,152.049c-31.98,14.686-60.692,23.438-84.261,25.442-23.582,2.004-41.836-2.755-53.1595-14.856-11.3239-12.101-14.864-30.629-11.3012-54.027c3.5607-23.384,14.1957-51.454,30.9677-82.39c33.538-61.863,91.508-134.984,165.973-204.67C359.016,129.089,435.817,76.0916,499.766,46.7247c31.98-14.6857,60.692-23.4374,84.26-25.4411c23.583-2.005,41.836,2.7549,53.16,14.8556Z"
                fill="none"
                stroke="#2e3338"
                stroke-width="2"
              />
            </g>
            <mask
              id="ei6PGQMjhyu5"
              mask-type="alpha"
              x="-150%"
              y="-150%"
              height="400%"
              width="400%"
            >
              <path d="M74,423l93-103v29.5l384-309-6-17L670,0v375.622C670,536.545,539.545,667,378.622,667h-100.686C148.769,667,51.0773,550.117,74,423Z" />
            </mask>
          </g>
          <g mask="url(#ei6PGQMjhyu9)">
            <mask
              id="ei6PGQMjhyu9"
              mask-type="alpha"
              x="-150%"
              y="-150%"
              height="400%"
              width="400%"
            >
              <path d="M74,423l93-103v29.5l384-309-6-17L670,0v375.622C670,536.545,539.545,667,378.622,667h-100.686C148.769,667,51.0773,550.117,74,423Z" />
            </mask>
          </g>
          <g mask="url(#ei6PGQMjhyu14)">
            <g>
              <path
                d="M701.844,131.634c7.031,15.007,4.672,33.723-5.947,54.875-10.613,21.139-29.401,44.548-54.912,68.788-51.013,48.471-128.741,100.1-221.096,143.364-92.354,43.263-181.774,69.934-251.668,78.102-34.952,4.085-64.964,3.536-87.9977-1.842-23.0482-5.38-38.9371-15.548-45.9674-30.555-7.0304-15.008-4.6717-33.724,5.9472-54.876c10.6125-21.139,29.4005-44.548,54.9115-68.788c51.0144-48.47,128.7414-100.1,221.0964-143.363c92.354-43.264,181.774-69.935,251.668-78.1031c34.952-4.0848,64.964-3.5354,87.998,1.8421c23.048,5.38,38.937,15.548,45.967,30.556Z"
                fill="none"
                stroke="#2e3338"
                stroke-width="2"
              />
            </g>
            <mask
              id="ei6PGQMjhyu14"
              mask-type="alpha"
              x="-150%"
              y="-150%"
              height="400%"
              width="400%"
            >
              <path
                d="M167.5,379.5v-133.5l-101-13L0,493.5l130,95l366-152L744.5,223L730,21.5l-166.5,75l.5,7-3,53.5L217,458.5l-49.5-79Z"
                fill="#d9d9d9"
              />
            </mask>
          </g>
          <path
            id="ei6PGQMjhyu16"
            d="M608.949,31.5c9.586-3.8587,17.192-11.4649,21.051-21.051c3.859,9.5861,11.465,17.1923,21.051,21.051-9.586,3.8587-17.192,11.4649-21.051,21.051-3.859-9.5861-11.465-17.1923-21.051-21.051Z"
            transform="translate(7.186 4.639201)"
            fill="#f2fafd"
            stroke="#2e3338"
            stroke-width="2"
          />
          <path
            d="M642,242.5c1.82,5.707,6.293,10.18,12,12-5.707,1.82-10.18,6.293-12,12-1.82-5.707-6.293-10.18-12-12c5.707-1.82,10.18-6.293,12-12Z"
            fill="#2e3338"
          />
          <path
            d="M108,297.5c1.82,5.707,6.293,10.18,12,12-5.707,1.82-10.18,6.293-12,12-1.82-5.707-6.293-10.18-12-12c5.707-1.82,10.18-6.293,12-12Z"
            fill="#2e3338"
          />
        </svg>
      </>
    </div>
  )
}
