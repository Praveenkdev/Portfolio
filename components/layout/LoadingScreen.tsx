"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const loadingSteps = [
  "Initializing AI Core...",
  "Loading Neural Network...",
  "Preparing Portfolio...",
  "Optimizing Experience...",
  "System Ready."
];

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("portfolio_loaded");
    
    // Skip completely if already loaded or prefers reduced motion
    if (hasLoaded || prefersReducedMotion) {
      setIsLoading(false);
      // Ensure other components boot immediately if skipping
      if (!hasLoaded) {
        sessionStorage.setItem("portfolio_loaded", "true");
        window.dispatchEvent(new Event("portfolio-boot-complete"));
      }
      return;
    }

    // Sequence the loading steps (Total time ~2000ms, 5 steps = ~400ms per step)
    const stepInterval = 400;
    let currentStepIndex = 0;

    const interval = setInterval(() => {
      currentStepIndex++;
      if (currentStepIndex < loadingSteps.length) {
        setCurrentStep(currentStepIndex);
      } else {
        clearInterval(interval);
      }
    }, stepInterval);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("portfolio_loaded", "true");
      window.dispatchEvent(new Event("portfolio-boot-complete"));
    }, 2400); // 2.4 seconds total to fade out smoothly

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [prefersReducedMotion]);

  // Fast typing effect for the current step
  useEffect(() => {
    const fullText = loadingSteps[currentStep] || "";
    setTypedText("");
    
    if (fullText.length === 0) return;

    const typeSpeed = 20; // very fast typing
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypedText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, typeSpeed);
    
    return () => clearInterval(typeInterval);
  }, [currentStep]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816] overflow-hidden"
        >
          {/* Subtle cinematic glow */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse"></div>
          </div>

          <div className="z-10 flex flex-col items-center space-y-8 w-full max-w-[280px]">
            
            {/* Minimal Progress Bar */}
            <div className="w-full h-[1px] bg-white/10 overflow-hidden">
              <motion.div 
                className="h-full bg-cyan-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "linear" }}
              />
            </div>

            {/* Typewriter Text Sequence */}
            <div className="h-8 flex items-center justify-center overflow-hidden">
              <p className="font-mono text-sm md:text-base text-cyan-400/90 tracking-widest uppercase flex items-center">
                {typedText}
                <motion.span 
                  className="inline-block w-[2px] h-[1em] ml-2 bg-cyan-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
              </p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
