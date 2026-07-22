"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export function useBootState() {
  const prefersReducedMotion = useReducedMotion();
  
  const [isBooted, setIsBooted] = useState(() => {
    if (typeof window !== "undefined") {
      // If prefers reduced motion or already loaded, instantly boot
      const hasLoaded = sessionStorage.getItem("portfolio_loaded");
      // Note: prefersReducedMotion might be null initially during SSR/hydration, so we check it in useEffect too
      return !!hasLoaded;
    }
    return false;
  });

  useEffect(() => {
    // If we're already booted, do nothing
    if (isBooted) return;

    // Instantly boot if user prefers reduced motion to skip long intro sequences
    if (prefersReducedMotion) {
      setIsBooted(true);
      return;
    }

    const handleBoot = () => {
      setIsBooted(true);
    };

    window.addEventListener("portfolio-boot-complete", handleBoot);
    return () => window.removeEventListener("portfolio-boot-complete", handleBoot);
  }, [isBooted, prefersReducedMotion]);

  return isBooted;
}
