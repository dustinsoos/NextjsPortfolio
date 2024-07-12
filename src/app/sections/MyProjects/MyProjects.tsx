import Image from 'next/image';
import React from 'react';
import Portfolio from '../../../images/portfolio.png';
import faAssets from '../../../images/fa_assets.png';

export default function MyProjects() {
  return (
    <>
      <section
        id='MyProjects'
        className='flex flex-col justify-center items-center md:justify-start md:items-start min-h-screen'
      >
        <h2>Projects</h2>
        <div className='flex flex-col gap-8'>
          <div className='shadow-lg shadow-green-400/30 flex'>
            <Image src={Portfolio} width={400} height={400} alt='project-img' />
            <div className='p-4 flex flex-col gap-4'>
              <h3>My Portfolio</h3>
              <h4>React | Tailwind CSS | NextJS | Framer-Motion</h4>
              <p>This is just a brief overview of what I'm about</p>
            </div>
          </div>
          <div className='shadow-lg shadow-green-400/30'>
            <Image src={faAssets} width={400} height={400} alt='project-img' />
          </div>
        </div>
      </section>
      <hr className='border-t-2 border-green-400 mt-4' />
    </>
  );
}
