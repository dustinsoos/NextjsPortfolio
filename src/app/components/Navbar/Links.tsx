import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import useRemoveUrlHash from '../../hooks/useRemoveUrlHash';
import smoothScroll from '@/app/hooks/smoothScroll';

export default function Links() {
  useRemoveUrlHash();

  return (
    <div className='p-8 flex flex-col gap-4 items-center justify-center '>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ></motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          onClick={(e) => smoothScroll(e, '#Introduction')}
          href='#Introduction'
          className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
        >
          About Me
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          onClick={(e) => smoothScroll(e, '#Experience')}
          href='#Experience'
          className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
        >
          Experience
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          onClick={(e) => smoothScroll(e, '#MyProjects')}
          href='#MyProjects'
          className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
        >
          Projects
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          onClick={(e) => smoothScroll(e, '#TechSkills')}
          href='#TechSkills'
          className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
        >
          Tech Skills
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          onClick={(e) => smoothScroll(e, '#Contact')}
          href='#Contact'
          className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
        >
          Contact
        </Link>
      </motion.div>
    </div>
  );
}
