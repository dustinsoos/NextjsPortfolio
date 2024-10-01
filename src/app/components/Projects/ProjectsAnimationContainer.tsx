import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectsAnimationContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
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
      className={className}
    >
      {children}
    </motion.div>
  );
}
