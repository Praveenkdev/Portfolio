"use client";

import * as React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { useReveal } from "./hooks/useReveal";
import { ReplayStrategy } from "./utils/motion";
import { fadeVariants, slideUpVariants, slideLeftVariants, slideRightVariants, scaleInVariants } from "./variants";

type AnimationType = "fade" | "slide-up" | "slide-left" | "slide-right" | "scale-in";

export interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animation?: AnimationType;
  replay?: ReplayStrategy;
  delay?: number;
  duration?: number;
  threshold?: number;
  customVariants?: Variants;
}

const animationMap: Record<AnimationType, Variants> = {
  "fade": fadeVariants,
  "slide-up": slideUpVariants,
  "slide-left": slideLeftVariants,
  "slide-right": slideRightVariants,
  "scale-in": scaleInVariants,
};

export function Reveal({ 
  children, 
  animation = "fade", 
  replay = "always", 
  delay, 
  duration, 
  threshold = 0.1,
  customVariants,
  className,
  ...props 
}: RevealProps) {
  const { ref, isVisible } = useReveal(replay, threshold);
  
  const baseVariants = customVariants || animationMap[animation];
  
  // Create an overridden variant if delay or duration are provided
  const variants = React.useMemo(() => {
    if (!delay && !duration) return baseVariants;
    
    return {
      hidden: baseVariants.hidden,
      visible: {
        ...((baseVariants.visible as any) || {}),
        transition: {
          ...((baseVariants.visible as any)?.transition || {}),
          ...(delay !== undefined && { delay }),
          ...(duration !== undefined && { duration }),
        }
      }
    } as Variants;
  }, [baseVariants, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props as any}
    >
      {<>{children}</>}
    </motion.div>
  );
}
