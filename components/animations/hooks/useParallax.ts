"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";

export function useParallax(distance: number = 50): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  // If reduced motion is enabled, we return a transform that does nothing (stays at 0 offset)
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : distance]);
  
  return y;
}
