'use client';

import React from 'react';
import TechSkillsList from './components/TechSkillsList';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiMysql,
  SiVercel,
  SiGit,
  SiNodedotjs,
  SiPython,
  SiNpm,
  SiJira,
  SiConfluence,
  SiFigma,
  SiExpress,
  SiEjs,
  SiPostgresql,
  SiMui,
  SiChakraui,
  SiPostman,
  SiGithub,
} from '@icons-pack/react-simple-icons';

import '../../styles/iconStyles.css';

export default function TechSkills() {
  const sections = [
    {
      header: 'Frontend',
      items: [
        <SiJavascript color='#F7DF1E' className='tech-icon' />,
        <SiHtml5 color='#E34F26' className='tech-icon' />,
        <SiCss3 color='#1572B6' className='tech-icon' />,
        <SiTypescript color='#007ACC' className='tech-icon' />,
        <SiReact color='#61DAFB' className='tech-icon' />,
        <SiRedux color='#764ABC' className='tech-icon' />,
        <SiTailwindcss color='#06B6D4' className='tech-icon' />,
        <SiBootstrap color='#7952B3' className='tech-icon' />,
        <SiJquery color='#0769AD' className='tech-icon' />,
        <SiMui color='#007FFF' className='tech-icon' />,
        <SiChakraui color='#319795' className='tech-icon' />,
      ],
    },
    {
      header: 'Backend | Databases',
      items: [
        <SiNodedotjs color='#68A063' className='tech-icon' />,
        <SiPython color='#3776AB' className='tech-icon' />,
        <SiExpress color='#000000' className='tech-icon bg-white' />,
        <SiEjs color='#B4CA65' className='tech-icon' />,
        <SiPostgresql color='#4169E1' className='tech-icon' />,
      ],
    },
    {
      header: 'Tools',
      items: [
        <SiPostman color='#FF6C37' className='tech-icon' />,
        <SiGithub color='#181717' className='tech-icon bg-white ' />,
        <SiGit color='#F05032' className='tech-icon' />,
        <SiNpm color='#CB3837' className='tech-icon' />,
        <SiVercel color='#000000' className='tech-icon bg-white' />,
        <SiFigma color='#F24E1E' className='tech-icon' />,
        <SiJira color='#0052CC' className='tech-icon' />,
        <SiConfluence className='tech-icon text-blue-500' />,
      ],
    },
  ];

  return (
    <>
      <section id='TechSkills' className=' min-h-screen'>
        <h2>TechSkills</h2>
        <div className='flex flex-col justify-start items-start  gap-6'>
          <TechSkillsList sections={sections} />
        </div>
      </section>
      <hr className='border-t-2 border-green-400 mt-4' />
    </>
  );
}
