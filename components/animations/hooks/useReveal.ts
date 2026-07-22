"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ReplayStrategy } from "../utils/motion";

export function useReveal(replay: ReplayStrategy = "once", threshold: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: replay === "once", amount: threshold });
  const [hasRevealed, setHasRevealed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY.current;
    
    if (isInView) {
      setHasRevealed(true);
      setIsVisible(true);
    } else {
      if (replay === "always") {
        setIsVisible(false);
      } else if (replay === "onDirectionChange") {
        if (!isScrollingDown) {
          setIsVisible(false);
          setHasRevealed(false);
        }
      }
    }
    
    lastScrollY.current = currentScrollY;
  }, [isInView, replay]);

  return { ref, isVisible: replay === "once" ? hasRevealed : isVisible };
}
