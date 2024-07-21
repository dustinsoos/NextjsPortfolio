import Image from 'next/image';
import React from 'react';
import Portfolio from '../../../../public/images/portfolio.png';
import faAssets from '../../../../public/images/fa_assets.png';

export default function MyProjects() {
  const data = [
    {
      title: 'My Portfolio',
    },
  ];
  return (
    <>
      <section
        id='MyProjects'
        className='flex flex-col justify-center md:justify-start md:items-start min-h-screen pb-40'
      >
        <h2>Projects</h2>
        <div className='flex flex-col md:flex-row gap-8 '>
          <div className='shadow-lg shadow-green-400/30 flex flex-col max-w-lg rounded-lg '>
            <Image
              src={Portfolio}
              width={520}
              height={400}
              alt='project-img'
              className='rounded-t-lg'
            />
            <div className='p-4 flex flex-col gap-4 text-center'>
              <h3>My Portfolio</h3>
              <h4>React | Tailwind CSS | NextJS | Framer-Motion</h4>
              <p>
                My Portfolio was created to showcase my work and projects. It's
                a place where you can find all the information about me and my
                work.
              </p>
            </div>
          </div>
          <div className='shadow-lg shadow-green-400/30 max-w-lg rounded-lg'>
            <Image
              src={faAssets}
              width={520}
              height={400}
              alt='project-img'
              className='rounded-t-lg'
            />
            <div className='p-4 flex flex-col gap-4 text-center'>
              <h3>Frontend Assets</h3>
              <h4>React | Tailwind CSS | NextJS </h4>
              <p>
                Frontend Assets was created to help developers find the perfect
                resources for their projects. It's a place where you can find
                all the assets you need for your frontend projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className='border-t-2 border-green-400 mt-4' />
    </>
  );
}
