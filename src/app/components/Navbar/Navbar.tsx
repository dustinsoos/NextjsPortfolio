'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Variants for Framer Motion animations
  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: '-100%', transition: { duration: 0.5 } },
  };

  return (
    <nav className='flex items-center justify-between p-4'>
      <Link href='/' className='text-4xl text-green-400 hover:opacity-80'>
        DS
      </Link>
      <motion.div
        className='space-y-2 cursor-pointer z-50 hover:opacity-80'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='w-8 h-1 bg-green-400'></div>
        <div className='w-8 h-1 bg-green-400 mt-1'></div>
        <div className='w-8 h-1 bg-green-400 mt-1'></div>
      </motion.div>
      <motion.div
        variants={menuVariants}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        className='absolute top-0 left-0 lg:w-3/5 w-3/4 h-3/5 lg:h-2/5 bg-custom-black p-8 flex flex-col gap-4 items-center justify-center border-2 border-green-400'
      >
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-4 right-4 text-4xl text-green-400'
          aria-label='Close menu'
        >
          &times;
        </button>
        <Link
          href='#TechSkills'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          About Me
        </Link>
        <Link
          href='#section2'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          Experience
        </Link>
        <Link
          href='#TechSkills'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          Projects
        </Link>
        <Link
          href='#TechSkills'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          Tech Skills
        </Link>
        <Link
          href='#TechSkills'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  );
}
