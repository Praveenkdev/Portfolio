import { Variants } from "framer-motion";
import { ease } from "./utils/easing";
import { duration } from "./utils/timings";

// Base transitions
export const baseTransition = {
  duration: duration.base,
  ease: ease.premium,
};

export const snappyTransition = {
  duration: duration.fast,
  ease: ease.snappy,
};

// Reveal Variants
export const fadeVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: baseTransition 
  },
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: baseTransition 
  },
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: 20, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: baseTransition 
  },
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: baseTransition 
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: baseTransition 
  },
};

// Staggered variants
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: snappyTransition 
  },
};

// Hover Variants
export const hoverCardVariants = {
  initial: { 
    y: 0, 
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    scale: 1,
  },
  hover: { 
    y: -4, 
    boxShadow: "0px 10px 40px -10px rgba(6,182,212,0.2)",
    scale: 1.01,
    transition: snappyTransition 
  },
};
