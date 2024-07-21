'use client';

import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const contactVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={contactVariants}
      className='flex flex-col w-11/12  md:w-3/4 mx-auto md:mx-0 bg-custom-black p-4 rounded-xl shadow-lg shadow-green-400/60'
    >
      <h4 className=' text-3xl font-medium text-gray-300 pb-6'>
        Send A Message:
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
        <div className='flex'>
          <input
            {...register('firstName', { required: true })}
            type='text'
            className='w-full py-3 pl-2 pr-10 rounded-md text-gray-300 bg-custom-black border-2 border-gray-300 focus:outline-green-400 mr-2'
            placeholder='First Name'
          />
          <input
            {...register('lastName', { required: true })}
            type='text'
            className='w-full py-3 pl-2 pr-10 rounded-md text-gray-300 bg-custom-black border-2 border-gray-300 focus:outline-green-400'
            placeholder='Last Name'
          />
        </div>
        <input
          {...register('email', { required: true })}
          type='text'
          className='w-full py-3 pl-2 pr-10 rounded-md text-gray-300 bg-custom-black border-2 border-gray-300 focus:outline-green-400'
          placeholder='Email'
        />
        <textarea
          className='w-full pb-20 pl-2 pr-10 rounded-md text-gray-300 bg-custom-black border-2 border-gray-300 focus:outline-green-400'
          placeholder='Message'
        />
      </form>
    </motion.div>
  );
}
