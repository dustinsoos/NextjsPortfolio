import Link from 'next/link';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Links() {
  return (
    <div className='p-8 flex flex-col gap-4 items-center justify-center '>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href='#Introduction'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          About Me
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href='#Experience'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          Experience
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href='#MyProjects'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          Projects
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          href='#TechSkills'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          Tech Skills
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href='#Contact'
          className='text-gray-300 uppercase font-medium hover:text-green-400 hover:underline'
        >
          Contact
        </Link>
      </motion.div>
    </div>
  );
}
