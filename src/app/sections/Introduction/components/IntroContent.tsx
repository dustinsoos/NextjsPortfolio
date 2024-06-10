'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProfileImg from '../../../../../public/images/profileimg.jpg';

export default function IntroText() {
  return (
    <motion.div
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className=' min-h-screen flex justify-center items-center gap-4'
    >
      <div className='w-3/5 flex flex-col gap-4'>
        <h1 className='text-6xl'>
          Yo, I'm <span className=' text-green-400'>Dustin.</span>
        </h1>
        <p className='text-xl'>
          A Frontend Engineer putting all my time and efforts into becoming the
          best programmer I can be. I'm always wanting to learn and improve, not
          only related to coding but as a person in general.
        </p>
      </div>
      <div className='w-2/5'>
        <Image src={ProfileImg} alt='Profile-Image' className=' rounded-2xl' />
      </div>
    </motion.div>
  );
}
