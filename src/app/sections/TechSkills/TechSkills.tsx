'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TechSkillsList from './components/TechSkillsList';

export default function TechSkills() {
  const sections = [
    {
      header: 'Frontend | Backend',
      items: [
        'JavaScript ES6',
        'HTML5',
        'CSS3',
        'TypeScript',
        'React',
        'Redux',
        'Tailwind CSS',
        'Bootstrap',
        'jQuery',
        'MySQL',
        'Vercel',
        'Git',
        'NodeJS',
        'Python',
        'npm',
        'JIRA',
        'Confluence',
      ],
    },
    {
      header: 'Concepts',
      items: [
        'APIs',
        'Rest APIS',
        'Web APIs',
        'Document Object Model (DOM)',
        'Responsive Design',
        'Agile Methodology',
        'Software Testing',
        'Web Performance Optimization',
        'Accessibility Standards',
      ],
    },
    {
      header: 'Design',
      items: [
        'Adobe Programs',
        'Figma',
        'Personas',
        'Journey Maps',
        'Wireframing',
        'Prototyping',
      ],
    },
  ];

  return (
    <>
      <section
        id='TechSkills'
        className='flex flex-col justify-center items-center md:justify-start md:items-start min-h-screen gap-4 '
      >
        <h2>TechSkills</h2>
        <TechSkillsList sections={sections} />
      </section>
      <hr className='border-t-2 border-green-400 mt-4' />
    </>
  );
}
