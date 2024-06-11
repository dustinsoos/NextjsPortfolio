'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../experienceData';
import '../styles/experienceStyles.css';

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
    triggerOnce: true,
  });
  return (
    <motion.div
      className='pt-8 w-3/4'
      variants={variants}
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      ref={ref}
    >
      <div className='flex flex-col gap-4'>
        {experienceData.map((experience) => (
          <motion.div
            key={experience.title}
            className='flex flex-col'
            variants={{
              hidden: { opacity: 0, x: -100 },
              show: { opacity: 1, x: 0, transition: { duration: 1.75 } },
            }}
          >
            <div className='pb-4'>
              <h2 className='text-2xl text-green-400'>
                {experience.company} - {experience.title}
              </h2>
              <h3 className='text-xl'></h3>
              <ul className='flex gap-2 flex-wrap'>
                {experience.technologies.map((tech) => (
                  <li key={tech}>{tech} |</li>
                ))}
              </ul>
              <p>{experience.date}</p>
            </div>

            <ul className='list-disc list-inside pt-4 pb-8 custom-bullet pl-6 flex flex-col gap-4'>
              {experience.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <hr className='border-t-2 border-green-400 pb-2' />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
