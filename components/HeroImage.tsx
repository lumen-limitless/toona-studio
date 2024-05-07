'use client';
import heroPhoto from '@/public/hero.webp';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroImage = () => {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-[567px] items-center justify-center lg:mx-0"
      initial={{ opacity: 0, translateX: 20 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        delay: 0,
      }}
    >
      <div className="relative -top-[0.5px] flex h-[400px] w-[210px] rounded-[400px] md:h-[558.5px] md:w-[292.13px] xl:h-[759px] xl:w-[397px]">
        <Image src={heroPhoto} alt="" priority quality={100} fill />
        <object
          type="image/svg+xml"
          data="/orbit.svg"
          className="absolute -left-[87.92px] top-[12%] w-[392px] md:-left-[122.88px] md:w-[547.83px] xl:-left-[167px] xl:w-[744.5px]"
        />
      </div>
    </motion.div>
  );
};
