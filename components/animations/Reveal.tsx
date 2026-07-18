"use client";

import * as React from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";


export interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animation?: "fade" | "slide-up" | "scale-up";
  delay?: number;
  duration?: number;
}

export function Reveal({ 
  children, 
  animation = "slide-up", 
  delay = 0, 
  duration = 0.5,
  className,
  ...props 
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: { 
      opacity: 0, 
      y: animation === "slide-up" ? 30 : 0,
      scale: animation === "scale-up" ? 0.95 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // Smooth, premium cubic-bezier ease
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ 
  children, 
  delayChildren = 0.1, 
  staggerChildren = 0.1,
  className,
  ...props
}: HTMLMotionProps<"div"> & { delayChildren?: number; staggerChildren?: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{<>{children}</>}</div>;
  }

  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }: HTMLMotionProps<"div">) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{<>{children}</>}</div>;
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
