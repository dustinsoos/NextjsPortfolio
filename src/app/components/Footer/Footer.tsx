'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import useRemoveUrlHash from '@/app/hooks/useRemoveUrlHash';
import smoothScroll from '@/app/hooks/smoothScroll';

export default function Footer() {
  useRemoveUrlHash();

  return (
    <div className='p-8 flex flex-wrap items-start md:items-center  justify-between pt-32 gap-'>
      <div className='flex flex-col md:flex md:flex-row gap-4'>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            onClick={(e) => smoothScroll(e, '#Introduction')}
            href='#Introduction'
            className='text-gray-300 uppercase text-sm hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            About Me
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            onClick={(e) => smoothScroll(e, '#Experience')}
            href='#Experience'
            className='text-gray-300 uppercase text-sm hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            Experience
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            onClick={(e) => smoothScroll(e, '#MyProjects')}
            href='#MyProjects'
            className='text-gray-300 uppercase text-sm hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            Projects
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            onClick={(e) => smoothScroll(e, '#TechSkills')}
            href='#TechSkills'
            className='text-gray-300 uppercase text-sm hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            Tech Skills
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            onClick={(e) => smoothScroll(e, '#Contact')}
            href='#Contact'
            className='text-gray-300 uppercase text-sm hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            Contact
          </Link>
        </motion.div>
      </div>
      <p className='text-gray-300 text-sm'>
        &copy; Dustin Soos {new Date().getFullYear()}
      </p>
    </div>
  );
}
