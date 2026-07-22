"use client";

import { MotionConfig as FramerMotionConfig } from "framer-motion";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { baseTransition } from "./variants";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <FramerMotionConfig 
      reducedMotion={shouldReduceMotion ? "always" : "user"}
      transition={baseTransition}
    >
      {children}
    </FramerMotionConfig>
  );
}
