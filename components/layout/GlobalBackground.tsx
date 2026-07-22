"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion, useMotionTemplate } from "framer-motion";
import * as React from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { useBootState } from "@/hooks/use-boot-state";

const SECTIONS = ["projects", "experience", "skills", "education", "contact"];

// Maps each section to a primary and secondary aurora glow color using premium desaturated colors
const colorMap: Record<string, { color1: string; color2: string; color3: string }> = {
  "": { color1: "rgba(6, 182, 212, 0.15)", color2: "rgba(59, 130, 246, 0.12)", color3: "rgba(99, 102, 241, 0.1)" }, // Hero: Blue + Cyan
  "about": { color1: "rgba(99, 102, 241, 0.15)", color2: "rgba(168, 85, 247, 0.12)", color3: "rgba(59, 130, 246, 0.1)" }, // About: Indigo + Purple
  "skills": { color1: "rgba(59, 130, 246, 0.15)", color2: "rgba(139, 92, 246, 0.12)", color3: "rgba(99, 102, 241, 0.1)" }, // Skills: Blue + Violet
  "projects": { color1: "rgba(168, 85, 247, 0.15)", color2: "rgba(6, 182, 212, 0.12)", color3: "rgba(99, 102, 241, 0.1)" }, // Projects: Purple + Cyan
  "experience": { color1: "rgba(99, 102, 241, 0.15)", color2: "rgba(59, 130, 246, 0.12)", color3: "rgba(168, 85, 247, 0.1)" }, // Experience: Indigo + Electric Blue
  "education": { color1: "rgba(59, 130, 246, 0.15)", color2: "rgba(168, 85, 247, 0.12)", color3: "rgba(6, 182, 212, 0.1)" }, // Education
  "contact": { color1: "rgba(168, 85, 247, 0.15)", color2: "rgba(6, 182, 212, 0.12)", color3: "rgba(59, 130, 246, 0.1)" }, // Contact: Purple + Cyan
};

export function GlobalBackground() {
  const [mounted, setMounted] = React.useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const activeSection = useActiveSection(SECTIONS);
  const isBooted = useBootState();

  // Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse for fluid, premium lag
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.8 });

  // Mouse Parallax for particles
  const particleX1 = useTransform(springX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [-15, 15]);
  const particleY1 = useTransform(springY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [-15, 15]);
  
  const particleX2 = useTransform(springX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [20, -20]);
  const particleY2 = useTransform(springY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [20, -20]);

  // Motion template for radial mouse glow
  const glowBackground = useMotionTemplate`radial-gradient(circle 600px at ${springX}px ${springY}px, rgba(99, 102, 241, 0.06), transparent 80%)`;

  React.useEffect(() => {
    setMounted(true);
    
    // Fallback to center initial glow
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 3);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Current Colors
  const colors = colorMap[activeSection] || colorMap[""];

  // Scroll Parallax (kept extremely subtle)
  const yBlobs = useTransform(scrollY, [0, 3000], [0, prefersReducedMotion ? 0 : 200]);
  const yLines = useTransform(scrollY, [0, 3000], [0, prefersReducedMotion ? 0 : 100]);

  if (!mounted) return null;

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050816]"
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={{ opacity: isBooted ? 1 : 0, filter: isBooted ? "blur(0px)" : "blur(20px)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      
      {/* 1. Base Mesh/Glow Layer */}
      <motion.div 
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ y: yBlobs }}
      >
        {/* Blob 1 */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] mix-blend-screen"
          animate={{
            backgroundColor: colors.color1,
            scale: prefersReducedMotion ? 1 : [1, 1.05, 1],
            x: prefersReducedMotion ? 0 : [0, 20, 0],
          }}
          transition={{
            backgroundColor: { duration: 2, ease: "easeInOut" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        {/* Blob 2 */}
        <motion.div
          className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full blur-[120px] mix-blend-screen"
          animate={{
            backgroundColor: colors.color2,
            scale: prefersReducedMotion ? 1 : [1, 1.1, 1],
            y: prefersReducedMotion ? 0 : [0, -30, 0],
          }}
          transition={{
            backgroundColor: { duration: 2, ease: "easeInOut" },
            scale: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 25, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        {/* Blob 3 (Bottom Center) */}
        <motion.div
          className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[40vw] rounded-full blur-[130px] mix-blend-screen"
          animate={{
            backgroundColor: colors.color3,
            x: prefersReducedMotion ? 0 : [0, -20, 0],
          }}
          transition={{
            backgroundColor: { duration: 2, ease: "easeInOut" },
            x: { duration: 22, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </motion.div>

      {/* 2. Neural Network Connections (SVG Layer) */}
      <motion.div style={{ y: yLines }} className="absolute inset-0 w-full h-[120%] opacity-30 -top-[10%]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="neural-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.4)" />
            </linearGradient>
            <linearGradient id="neural-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.4)" />
            </linearGradient>
          </defs>
          
          <motion.g 
            animate={{ opacity: prefersReducedMotion ? 0.5 : [0.3, 0.6, 0.3] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M-10,20 Q30,40 50,20 T110,30" fill="none" stroke="url(#neural-grad-1)" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M-10,60 Q20,80 60,50 T120,70" fill="none" stroke="url(#neural-grad-2)" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M20,-10 Q40,30 70,10 T100,60" fill="none" stroke="url(#neural-grad-1)" strokeWidth="0.15" vectorEffect="non-scaling-stroke" />
            <path d="M30,110 Q50,70 80,90 T120,40" fill="none" stroke="url(#neural-grad-2)" strokeWidth="0.15" vectorEffect="non-scaling-stroke" />
          </motion.g>
        </svg>
      </motion.div>

      {/* 3. Floating Particles with Mouse Parallax */}
      <div className="absolute inset-0 w-full h-full">
        {/* Layer 1 (Moves with mouse) */}
        <motion.div style={{ x: particleX1, y: particleY1 }} className="absolute inset-0 w-full h-full">
          <motion.div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-cyan-400/40 blur-[1px]" animate={{ opacity: prefersReducedMotion ? 0.4 : [0.2, 0.8, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute top-[70%] left-[80%] w-2 h-2 rounded-full bg-indigo-400/40 blur-[1px]" animate={{ opacity: prefersReducedMotion ? 0.4 : [0.2, 0.7, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
          <motion.div className="absolute top-[40%] left-[10%] w-1 h-1 rounded-full bg-blue-400/50" animate={{ opacity: prefersReducedMotion ? 0.4 : [0.1, 0.9, 0.1] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} />
        </motion.div>
        
        {/* Layer 2 (Moves opposite to mouse) */}
        <motion.div style={{ x: particleX2, y: particleY2 }} className="absolute inset-0 w-full h-full">
          <motion.div className="absolute top-[60%] left-[25%] w-2 h-2 rounded-full bg-purple-400/40 blur-[1px]" animate={{ opacity: prefersReducedMotion ? 0.4 : [0.2, 0.6, 0.2] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }} />
          <motion.div className="absolute top-[15%] left-[75%] w-1.5 h-1.5 rounded-full bg-cyan-300/50" animate={{ opacity: prefersReducedMotion ? 0.4 : [0.3, 0.8, 0.3] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }} />
          <motion.div className="absolute top-[85%] left-[50%] w-1 h-1 rounded-full bg-indigo-300/50" animate={{ opacity: prefersReducedMotion ? 0.4 : [0.1, 0.7, 0.1] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }} />
        </motion.div>
      </div>

      {/* 4. Interactive Mouse Glow Layer (Soft radial gradient) */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute inset-0 z-[1] opacity-40 mix-blend-screen pointer-events-none"
          style={{ background: glowBackground }}
        />
      )}

      {/* 5. Glassmorphism Noise/Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-[2] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </motion.div>
  );
}
