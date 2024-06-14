'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Links from './Links';

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
    <nav className='flex items-center justify-between py-4'>
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
        className='absolute top-0 left-0 w-3/4 h-3/5 lg:w-2/4 lg:h-4/5 flex items-center justify-center bg-custom-black border-2 border-green-400'
      >
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-4 right-4 text-4xl text-green-400'
          aria-label='Close menu'
        >
          &times;
        </button>
        <Links />
      </motion.div>
    </nav>
  );
}
