import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tooltip } from "@chakra-ui/react";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiVercel,
  SiGit,
  SiNodedotjs,
  SiPython,
  SiNpm,
  SiJira,
  SiConfluence,
  SiFigma,
  SiExpress,
  SiEjs,
  SiPostgresql,
  SiMui,
  SiChakraui,
  SiPostman,
  SiGithub,
  SiReacthookform,
  SiSass,
  SiCssmodules,
  SiDocker,
} from "@icons-pack/react-simple-icons";

export default function TechSkillsList() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const sections = [
    {
      header: "Frontend",
      items: [
        {
          name: "HTML5",
          icon: <SiHtml5 color="#E34F26" className="tech-icon" />,
        },
        {
          name: "CSS3",
          icon: <SiCss3 color="#1572B6" className="tech-icon" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript color="#F7DF1E" className="tech-icon" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript color="#007ACC" className="tech-icon" />,
        },
        {
          name: "React",
          icon: <SiReact color="#61DAFB" className="tech-icon" />,
        },
        {
          name: "React-Hook-Form",
          icon: <SiReacthookform color="#EC5990" className="tech-icon" />,
        },
        {
          name: "Redux",
          icon: <SiRedux color="#764ABC" className="tech-icon" />,
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss color="#06B6D4" className="tech-icon" />,
        },
        {
          name: "Sass",
          icon: <SiSass color="#CC6699" className="tech-icon" />,
        },
        {
          name: "Css-Modules",
          icon: <SiCssmodules color="#000000" className="tech-icon bg-white" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap color="#7952B3" className="tech-icon" />,
        },
        {
          name: "jQuery",
          icon: <SiJquery color="#0769AD" className="tech-icon" />,
        },
        {
          name: "Material-UI",
          icon: <SiMui color="#007FFF" className="tech-icon" />,
        },
        {
          name: "Chakra UI",
          icon: <SiChakraui color="#319795" className="tech-icon" />,
        },
      ],
    },
    {
      header: "Backend | Databases",
      items: [
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#68A063" className="tech-icon" />,
        },
        {
          name: "Python",
          icon: <SiPython color="#3776AB" className="tech-icon" />,
        },
        {
          name: "Express",
          icon: <SiExpress color="#000000" className="tech-icon bg-white" />,
        },
        {
          name: "EJS",
          icon: <SiEjs color="#B4CA65" className="tech-icon" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql color="#4169E1" className="tech-icon" />,
        },
      ],
    },
    {
      header: "Tools",
      items: [
        {
          name: "Postman",
          icon: <SiPostman color="#FF6C37" className="tech-icon" />,
        },
        {
          name: "Github",
          icon: <SiGithub color="#181717" className="tech-icon bg-white" />,
        },
        { name: "Git", icon: <SiGit color="#F05032" className="tech-icon" /> },
        { name: "NPM", icon: <SiNpm color="#CB3837" className="tech-icon" /> },
        {
          name: "Docker",
          icon: <SiDocker color="#2496ED" className="tech-icon" />,
        },
        {
          name: "Vercel",
          icon: <SiVercel color="#000000" className="tech-icon bg-white" />,
        },
        {
          name: "Jira",
          icon: <SiJira color="#0052CC" className="tech-icon" />,
        },
        {
          name: "Figma",
          icon: <SiFigma color="#F24E1E" className="tech-icon" />,
        },
        {
          name: "Confluence",
          icon: <SiConfluence className="tech-icon text-blue-500" />,
        },
      ],
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const listItemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  return (
    <>
      {sections.map((section, index) => (
        <motion.div
          className="flex flex-col gap-4 p-4 shadow-md shadow-green-400/40"
          key={index}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={listItemVariants}
        >
          <h3 className="uppercase">{section.header}</h3>
          <ul className="flex flex-wrap gap-2 text-gray-300">
            {section.items.map((item, itemIndex) => (
              <Tooltip
                key={itemIndex}
                className="text-md rounded-md bg-custom-black px-4 py-1 font-medium text-green-400 shadow-lg shadow-gray-300/45"
                label={item.name}
              >
                <li>{item.icon}</li>
              </Tooltip>
            ))}
          </ul>
        </motion.div>
      ))}
    </>
  );
}
