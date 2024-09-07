import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectsAnimationContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.8 });
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      transition={{ duration: 1.5 }}
      className="flex w-full flex-col justify-evenly gap-4 md:flex-row"
    >
      {children}
    </motion.div>
  );
}
