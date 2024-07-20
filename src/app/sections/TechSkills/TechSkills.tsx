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
  return (
    <>
      <section id='TechSkills' className=' min-h-screen'>
        <h2>TechSkills</h2>
        <div className='flex flex-col justify-start items-start  gap-6'>
          <TechSkillsList />
        </div>
      </section>
      <hr className='border-t-2 border-green-400 mt-4' />
    </>
  );
}
