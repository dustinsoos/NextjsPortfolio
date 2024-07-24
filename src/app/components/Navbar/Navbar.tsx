"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Links from "./Links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Variants for Framer Motion animations
  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
  };

  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="text-4xl text-green-400 hover:opacity-80">
        DS
      </Link>
      <motion.div
        className="z-50 cursor-pointer space-y-2 hover:opacity-80"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-1 w-8 bg-green-400"></div>
        <div className="mt-1 h-1 w-8 bg-green-400"></div>
        <div className="mt-1 h-1 w-8 bg-green-400"></div>
      </motion.div>
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="absolute left-0 top-0 flex h-3/5 w-3/4 items-center justify-center border-2 border-green-400 bg-custom-black lg:h-4/5 lg:w-2/4"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-4xl text-green-400 hover:text-gray-300"
          aria-label="Close menu"
        >
          &times;
        </button>
        <Links />
      </motion.div>
    </nav>
  );
}
