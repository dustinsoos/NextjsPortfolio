import React from 'react';
import ExperienceCards from './components/ExperienceCards';

export default function Experience() {
  return (
    <section
      id='Experience'
      className='flex flex-col justify-center md:justify-start md:items-start min-h-screen '
    >
      <h2>Experience</h2>
      <ExperienceCards />
    </section>
  );
}
