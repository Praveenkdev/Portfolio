"use client";

import * as React from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
}

export function Typewriter({ text, delay = 0, className = "" }: TypewriterProps) {
  const [typedText, setTypedText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [isFinished, setIsFinished] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();
  const cursorControls = useAnimationControls();
  const glowControls = useAnimationControls();

  React.useEffect(() => {
    if (prefersReducedMotion) {
      setTypedText(text);
      setIsFinished(true);
      return;
    }

    let timeout: NodeJS.Timeout;
    let typeInterval: NodeJS.Timeout;

    timeout = setTimeout(() => {
      setIsTyping(true);
      cursorControls.start({
        opacity: [1, 0, 1],
        transition: { duration: 0.8, repeat: Infinity, ease: "linear" }
      });

      let charIndex = 0;
      typeInterval = setInterval(() => {
        if (charIndex <= text.length) {
          setTypedText(text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setIsFinished(true);
          // Smoothly fade out the cursor
          cursorControls.start({ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } });
          
          // Trigger one-time cyan glow on text
          setTimeout(() => {
            glowControls.start({
              textShadow: ["0px 0px 0px rgba(6,182,212,0)", "0px 0px 15px rgba(6,182,212,0.6)", "0px 0px 0px rgba(6,182,212,0)"],
              color: ["hsl(var(--muted-foreground))", "hsl(var(--primary))", "hsl(var(--muted-foreground))"],
              transition: { duration: 1.5, ease: "easeInOut" }
            });
          }, 500);
        }
      }, 35); // typing speed

    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(typeInterval);
    };
  }, [text, delay, prefersReducedMotion, cursorControls, glowControls]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Invisible placeholder reserves the exact space so the layout doesn't shift or overlap */}
      <span className="invisible pointer-events-none" aria-hidden="true">{text}</span>
      
      {/* Absolute positioned typing text */}
      <span className="absolute inset-0 left-0 top-0 flex flex-wrap items-start text-left">
        <motion.span animate={glowControls}>{typedText}</motion.span>
        {(!isFinished || isTyping) && !prefersReducedMotion && (
          <motion.span 
            animate={cursorControls}
            initial={{ opacity: 0 }}
            className="inline-block w-[2px] h-[1em] ml-[1px] bg-current translate-y-[0.15em]"
          />
        )}
      </span>
    </span>
  );
}
