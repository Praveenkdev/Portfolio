"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "./hooks/useReducedMotion";

export interface FloatingProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  amplitude?: number; // How far it floats
  duration?: number; // How long one cycle takes
}

export function Floating({ 
  children, 
  amplitude = 10, 
  duration = 4, 
  className,
  ...props 
}: FloatingProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} {...props as any}>{<>{children}</>}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
      {...props as any}
    >
      {<>{children}</>}
    </motion.div>
  );
}
