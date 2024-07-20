'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

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

  return (
    <div className='flex flex-col w-11/12  md:w-3/4 mx-auto md:mx-0 '>
      <h4 className=' text-3xl font-medium text-green-400 pb-6'>
        Send Me A Message
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 '>
        <div className='flex'>
          <input
            {...register('firstName', { required: true })}
            type='text'
            className='w-full py-3 pl-2 pr-10 rounded-md text-custom-black focus:outline-green-400 mr-2'
            placeholder='First Name'
          />
          <input
            {...register('lastName', { required: true })}
            type='text'
            className='w-full py-3 pl-2 pr-10 rounded-md text-custom-black focus:outline-green-400'
            placeholder='Last Name'
          />
        </div>
        <input
          {...register('email', { required: true })}
          type='text'
          className='w-full py-3 pl-2 pr-10 rounded-md text-custom-black focus:outline-green-400'
          placeholder='Email'
        />
        <textarea
          className='w-full pb-20 pl-2 pr-10 rounded-md text-custom-black focus:outline-green-400'
          placeholder='Message'
        />
      </form>
    </div>
  );
}
