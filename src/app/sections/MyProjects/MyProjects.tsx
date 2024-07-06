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
        <div className='flex flex-col gap-8 '>
          <div className='shadow-lg shadow-green-400/30'>
            <Image src={Portfolio} width={400} height={400} alt='project-img' />
            <div>
              <p></p>
              <p></p>
              <p></p>
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
