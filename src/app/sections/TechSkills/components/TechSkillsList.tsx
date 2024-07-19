import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TechSkillsListProps {
  sections: {
    header: string;
    items: (string | React.ReactNode)[];
  }[];
}

export default function TechSkillsList({ sections }: TechSkillsListProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const listItemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <>
      {sections.map((section, index) => (
        <motion.div
          className='flex flex-col gap-4 shadow-md shadow-green-400/40 p-4'
          key={index}
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={listItemVariants}
        >
          <h3 className='uppercase'>{section.header}</h3>
          <ul className='flex flex-wrap gap-2 text-gray-300'>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </>
  );
}
