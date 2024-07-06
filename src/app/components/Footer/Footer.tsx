'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <div className='p-8 flex flex-wrap  items-center justify-between pt-32'>
      <div className='flex flex-col md:flex md:flex-row gap-4'>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href='#Introduction'
            className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            About Me
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href='#Experience'
            className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            Experience
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href='#MyProjects'
            className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            Projects
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href='#TechSkills'
            className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            Tech Skills
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href='#Contact'
            className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
          >
            Contact
          </Link>
        </motion.div>
      </div>
      <div>
        <p>&copy; Dustin Soos</p>
      </div>
    </div>
  );
}
