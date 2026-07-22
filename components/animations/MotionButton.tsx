"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { snappyTransition } from "./variants";

export interface MotionButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, className, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
      return (
        <button ref={ref} className={className} {...props as any}>
          {<>{children}</>}
        </button>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={snappyTransition}
        className={className}
        {...props as any}
      >
        {<>{children}</>}
      </motion.button>
    );
  }
);

MotionButton.displayName = "MotionButton";
