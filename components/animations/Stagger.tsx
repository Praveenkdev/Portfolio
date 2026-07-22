"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReveal } from "./hooks/useReveal";
import { ReplayStrategy } from "./utils/motion";
import { staggerContainerVariants, staggerItemVariants } from "./variants";

import { useBootState } from "@/hooks/use-boot-state";

export interface StaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  replay?: ReplayStrategy;
  threshold?: number;
  staggerDelay?: number;
  waitForBoot?: boolean;
}

export function Stagger({ 
  children, 
  replay = "always", 
  threshold = 0.1, 
  staggerDelay = 0.1,
  waitForBoot = false,
  className,
  ...props 
}: StaggerProps) {
  const { ref, isVisible } = useReveal(replay, threshold);
  const isBooted = useBootState();

  const customContainerVariants = React.useMemo(() => {
    return {
      hidden: staggerContainerVariants.hidden,
      visible: {
        ...((staggerContainerVariants.visible as any) || {}),
        transition: {
          ...((staggerContainerVariants.visible as any)?.transition || {}),
          staggerChildren: staggerDelay,
        }
      }
    };
  }, [staggerDelay]);

  // Only animate to visible if we are in view AND (if required) we have booted
  const shouldAnimate = isVisible && (!waitForBoot || isBooted);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={customContainerVariants}
      className={className}
      {...props as any}
    >
      {<>{children}</>}
    </motion.div>
  );
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  // StaggerItem relies on its parent Stagger to control 'initial' and 'animate'
  return (
    <motion.div
      variants={staggerItemVariants}
      className={className}
      {...props as any}
    >
      {<>{children}</>}
    </motion.div>
  );
}
