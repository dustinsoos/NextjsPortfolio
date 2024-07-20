import Link from 'next/link';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Links() {
  //quick fix for scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='p-8 flex flex-col gap-4 items-center justify-center '>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ></motion.div>
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
        <Link
          href='#TechSkills'
          className='text-gray-300 uppercase font-medium hover:text-green-400  hover:border-b-2 hover:border-green-400  pb-1'
        >
          Tech Skills
        </Link>
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
  );
}
