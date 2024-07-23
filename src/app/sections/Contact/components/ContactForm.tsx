'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { sendEmail } from '@/app/apis/sendEmail';
import sendIcon from '../../../../../public/images/send-icon.svg';
import Image from 'next/image';

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
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [showPopup, setShowPopup] = useState(false);

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

  const handleFormSubmit = async (formData: Inputs, resetForm: () => void) => {
    const convertedFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      convertedFormData.append(key, value as string);
    });
    await sendEmail(convertedFormData);
    resetForm();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={contactVariants}
      className='flex flex-col w-11/12  md:w-3/4 mx-auto md:mx-0 bg-custom-black p-4 rounded-xl shadow-lg shadow-green-400/60'
    >
      <h4 className=' text-3xl font-medium text-green-400 pb-6'>
        Get in touch:
      </h4>
      <form
        onSubmit={handleSubmit((formData) => handleFormSubmit(formData, reset))}
        className='flex flex-col gap-3'
      >
        <div className='flex gap-2'>
          <div className='w-1/2'>
            <input
              {...register('firstName', {
                required: 'First Name Required',
              })}
              type='text'
              className='w-full py-3 pl-2 pr-10 rounded-md text-gray-300 bg-custom-black border-2 border-gray-300 focus:border-green-400 mr-2 outline-none'
              placeholder='First Name'
            />
            {errors.firstName && (
              <p className='text-red-500 text-sm italic pt-1'>
                <span className='font-bold'>*</span> {errors.firstName.message}
              </p>
            )}
          </div>
          <div className='w-1/2'>
            <input
              {...register('lastName', { required: 'Last Name Required' })}
              type='text'
              className='w-full py-3 pl-2 pr-10 rounded-md text-gray-300 bg-custom-black border-2 border-gray-300 focus:border-green-400 outline-none'
              placeholder='Last Name'
            />
            {errors.lastName && (
              <p className='text-red-500 text-sm italic pt-1'>
                <span className='font-bold'>*</span> {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
            type='text'
            className='w-full py-3 pl-2 pr-10 rounded-md text-gray-300 bg-custom-black border-2 border-gray-300 focus:border-green-400 outline-none'
            placeholder='Email'
          />
          {errors.email && (
            <p className='text-red-500 text-sm italic pt-1'>
              <span className='font-bold'>*</span> {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <textarea
            {...register('message', { required: 'Message is required' })}
            className='w-full pb-20 pl-2 pr-10 rounded-md text-gray-300 bg-custom-black border-2 border-gray-300 focus:border-green-400 outline-none'
            placeholder='Message'
          />
          {errors.message && (
            <p className='text-red-500 text-sm italic'>
              <span className='font-bold'>*</span> {errors.message.message}
            </p>
          )}
        </div>
        <button
          type='submit'
          className='w-1/2 md:w-1/3 py-3 mx-auto font-medium bg-green-400 text-custom-black rounded-md hover:bg-green-500 flex items-center justify-center gap-2'
        >
          Send Message{' '}
          <span>
            {<Image src={sendIcon} width={24} height={24} alt='send icon' />}
          </span>
        </button>
      </form>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className='text-md font-medium py-3 px-2 text-green-400 shadow-lg shadow-gray-300/45 rounded-md mx-auto text-center'
          >
            Thanks for your message, I will get back to you shortly.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
