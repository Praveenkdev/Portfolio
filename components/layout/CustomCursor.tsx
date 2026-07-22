"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useBootState } from "@/hooks/use-boot-state";

export function CustomCursor() {
  const isBooted = useBootState();
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<{ x: number, y: number, id: number }[]>([]);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth the tracking slightly for a premium feel
  // Increase stiffness for tighter response when hovering buttons
  const springConfig = { damping: 25, stiffness: isHovering ? 400 : 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || prefersReducedMotion) {
      return;
    }
    
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;
      let hoveringBtn = false;

      // Check for magnetic button
      if (e.target instanceof Element) {
        const clickable = e.target.closest('a, button, [role="button"]');
        if (clickable) {
          hoveringBtn = true;
          // Calculate center of button for magnetic effect
          const rect = clickable.getBoundingClientRect();
          targetX = rect.left + rect.width / 2;
          targetY = rect.top + rect.height / 2;
        }
      }

      setIsHovering(hoveringBtn);
      cursorX.set(targetX);
      cursorY.set(targetY);
    };

    const handleClick = (e: MouseEvent) => {
      setRipples((prev) => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (!isVisible || !isBooted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100]"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* The cursor wrapper, centered on the coordinates */}
        <motion.div 
          className="relative flex items-center justify-center"
          animate={{
            scale: isHovering ? 2.5 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ x: "-50%", y: "-50%" }}
        >
          {/* Center glowing dot (hides when hovering button) */}
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            animate={{ opacity: isHovering ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Soft outer aura */}
          <div className="absolute inset-[-12px] bg-cyan-500/20 rounded-full blur-[8px]"></div>

          {/* Hover outline (shows when hovering button) */}
          <motion.div 
            className="absolute inset-[-10px] rounded-full border-[1px] border-cyan-400/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.div>

      {/* Ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-[90] rounded-full border border-cyan-400/40"
          initial={{ top: ripple.y, left: ripple.x, width: 0, height: 0, x: "-50%", y: "-50%", opacity: 1 }}
          animate={{ width: 100, height: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onAnimationComplete={() => setRipples(prev => prev.filter(r => r.id !== ripple.id))}
        />
      ))}
    </>
  );
}
