import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import useRemoveUrlHash from "../../hooks/useRemoveUrlHash";

export default function Links() {
  useRemoveUrlHash();

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ></motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href="#Introduction"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          About Me
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href="#Experience"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          Experience
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href="#MyProjects"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          Projects
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href="#TechSkills"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          Tech Skills
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href="#Contact"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          Contact
        </Link>
      </motion.div>
    </div>
  );
}
