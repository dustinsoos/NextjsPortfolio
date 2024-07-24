import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import useRemoveUrlHash from "../../hooks/useRemoveUrlHash";
import smoothScroll from "@/app/hooks/smoothScroll";

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
          onClick={(e) => smoothScroll(e, "#Introduction")}
          href="#Introduction"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          About Me
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          onClick={(e) => smoothScroll(e, "#Experience")}
          href="#Experience"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          Experience
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          onClick={(e) => smoothScroll(e, "#MyProjects")}
          href="#MyProjects"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          Projects
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          onClick={(e) => smoothScroll(e, "#TechSkills")}
          href="#TechSkills"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          Tech Skills
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          onClick={(e) => smoothScroll(e, "#Contact")}
          href="#Contact"
          className="pb-1 font-medium uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
        >
          Contact
        </Link>
      </motion.div>
    </div>
  );
}
