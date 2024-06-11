'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../experienceData';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 1,
    },
  },
};

export default function ExperienceCards() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  return (
    <motion.div
      className='pt-8 w-3/4'
      variants={variants}
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      ref={ref}
    >
      {experienceData.map((experience) => (
        <motion.div
          key={experience.title}
          className='flex flex-col gap-2 border-2 border-gray-700 '
          variants={{
            hidden: { opacity: 0, x: -100 },
            show: { opacity: 1, x: 0, transition: { duration: 1 } },
          }}
        >
          <div className='pb-4 p-2'>
            <h2 className='text-2xl'>{experience.title}</h2>
            <h3 className='text-xl'>{experience.company}</h3>
            <ul className='flex gap-2'>
              {experience.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <p>{experience.date}</p>
          </div>
          <hr className='border-t-2 border-gray-700' />
          <ul className='list-disc list-inside p-2'>
            {experience.description.map((desc, index) => (
              <li className='pb-2' key={index}>
                {desc}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
