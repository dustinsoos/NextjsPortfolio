"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../../../../../data/experience";
import "../../../styles/experienceStyles.css";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

export default function ExperienceCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      className="w-full pt-8 md:w-3/4"
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      ref={ref}
    >
      <div className="flex flex-col gap-20">
        {experience.map((exp) => (
          <motion.div
            key={exp.title}
            className="flex flex-col"
            variants={{
              hidden: { opacity: 0, x: -100 },
              show: { opacity: 1, x: 0, transition: { duration: 1.75 } },
            }}
          >
            <div className="pb-4">
              <h3 className="text-2xl text-green-400">
                {exp.company} - {exp.title}
              </h3>
              <h3 className="text-xl"></h3>
              <ul className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <li key={tech}>{tech} |</li>
                ))}
              </ul>
              <p>{exp.date}</p>
            </div>

            <ul className="custom-bullet flex list-inside list-disc flex-col gap-4 pb-8 pl-6 pt-4">
              {exp.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <hr className="border-t-2 border-green-400 pb-2" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
