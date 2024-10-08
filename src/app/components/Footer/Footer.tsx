"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import useRemoveUrlHash from "@/app/hooks/useRemoveUrlHash";

export default function Footer() {
  useRemoveUrlHash();

  return (
    <footer className="flex flex-wrap items-start justify-between p-8 pt-32 md:items-center">
      <div className="flex flex-col gap-4 md:flex md:flex-row">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="#Introduction"
            className="pb-1 text-sm uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
          >
            About Me
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="#Experience"
            className="pb-1 text-sm uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
          >
            Experience
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="#MyProjects"
            className="pb-1 text-sm uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
          >
            Projects
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="#TechSkills"
            className="pb-1 text-sm uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
          >
            Tech Skills
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="#Contact"
            className="pb-1 text-sm uppercase text-gray-300 hover:border-b-2 hover:border-green-400 hover:text-green-400"
          >
            Contact
          </Link>
        </motion.div>
      </div>
      <p className="text-sm text-gray-300">
        &copy; Dustin Soos {new Date().getFullYear()}
      </p>
    </footer>
  );
}
