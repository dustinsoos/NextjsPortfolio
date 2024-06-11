import React from 'react';
import ExperienceCards from './components/ExperienceCards';

export default function Experience() {
  return (
    <div className='flex flex-col justify-center items-center md:justify-start md:items-start min-h-screen pt-40'>
      <h2 className='uppercase text-4xl text-green-400 pb-12 font-bold'>
        Experience
      </h2>
      <ExperienceCards />
    </div>
  );
}
