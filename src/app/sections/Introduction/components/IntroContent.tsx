'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProfileImg from '../../../../../public/images/profileimg.jpg';
import Button from '@/app/components/Button';

export default function IntroText() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className=' flex flex-col gap-10 min-h-screen md:flex-row justify-center items-center '
      >
        <div className='sm:w-full md:w-3/5 flex flex-col gap-4'>
          <h1 className='text-5xl md:text-6xl'>
            Yo, I&#39;m <span className=' text-green-400'>Dustin.</span>
          </h1>
          <p className='text-lg'>
            A Frontend Engineer putting all my time and efforts into becoming
            the best programmer I can be. I&#39;m always wanting to learn and
            improve, not only related to coding but as a person in general.
          </p>
          <div className='flex justify-between gap-4'>
            <Button className='w-full font-medium' variant='custom-black'>
              GitHub
            </Button>
            <Button className='w-full font-medium' variant='custom-green'>
              LinkedIn
            </Button>
          </div>
        </div>
        <div className='hidden w-2/5 md:block '>
          <Image
            src={ProfileImg}
            alt='Profile-Image'
            className=' rounded-2xl'
          />
        </div>
      </motion.div>
      <hr className='border-t-2 border-green-400 w-full mt-4' />
    </>
  );
}
