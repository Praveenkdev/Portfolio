"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { hoverCardVariants } from "./variants";

export interface MotionCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function MotionCard({ children, className, ...props }: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} {...props as any}>{<>{children}</>}</div>;
  }

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      variants={hoverCardVariants}
      className={className}
      {...props as any}
    >
      {<>{children}</>}
    </motion.div>
  );
}
