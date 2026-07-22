"use client";

import * as React from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useReveal } from "./hooks/useReveal";
import { ReplayStrategy } from "./utils/motion";

export interface MotionImageProps extends Omit<ImageProps, "ref"> {
  hoverMove?: boolean;
  reveal?: boolean;
  replay?: ReplayStrategy;
  delay?: number;
}

const MotionNextImage = motion(Image as any);

export function MotionImage({ 
  hoverMove = false, 
  reveal = false, 
  replay = "always",
  delay,
  className,
  ...props 
}: MotionImageProps) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, isVisible } = useReveal(replay, 0.1);

  // Cursor tracking for extremely subtle movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the movement
  const springConfig = { damping: 30, stiffness: 150, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverMove || shouldReduceMotion) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Move up to 8px max in any direction
    const distanceX = (e.clientX - centerX) / (rect.width / 2);
    const distanceY = (e.clientY - centerY) / (rect.height / 2);
    
    x.set(distanceX * 8);
    y.set(distanceY * 8);
  };

  const handleMouseLeave = () => {
    if (!hoverMove || shouldReduceMotion) return;
    x.set(0);
    y.set(0);
  };

  const motionProps: any = {};
  
  if (reveal) {
    motionProps.initial = { opacity: 0, scale: 0.95 };
    motionProps.animate = isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 };
    motionProps.transition = {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay: delay || 0
    };
  }

  if (hoverMove && !shouldReduceMotion) {
    motionProps.style = { x: springX, y: springY };
  }

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {shouldReduceMotion ? (
        <Image {...props} />
      ) : (
        <MotionNextImage 
          {...props} 
          {...motionProps} 
        />
      )}
    </div>
  );
}
