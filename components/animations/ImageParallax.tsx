"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useParallax } from "./hooks/useParallax";

export interface ImageParallaxProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  distance?: number;
}

export function ImageParallax({ children, distance = 50, className, ...props }: ImageParallaxProps) {
  const y = useParallax(distance);

  return (
    <motion.div
      style={{ y }}
      className={className}
      {...props as any}
    >
      {<>{children}</>}
    </motion.div>
  );
}
