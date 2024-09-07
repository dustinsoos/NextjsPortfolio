"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimationContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      id="Introduction"
      className="flex flex-col items-center justify-center gap-10 p-custom-padding md:flex-row"
    >
      {children}
    </motion.div>
  );
}
