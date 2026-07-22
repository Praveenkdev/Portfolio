"use client";

import * as React from "react";
import { Reveal, RevealProps } from "./Reveal";

export interface MotionSectionProps extends Omit<RevealProps, "animation"> {
  as?: React.ElementType;
}

export function MotionSection({ as: Component = "section", children, ...props }: MotionSectionProps) {
  // We use Reveal's base mechanics but render as a section. 
  // Since Reveal renders a motion.div by default, we can just use Reveal and pass an 'as' prop if Reveal supported it, 
  // but framer-motion requires motion(Component). Instead of complicating Reveal, we'll just wrap the children 
  // or pass className to Reveal directly (since it renders a div, sections can be divs if they just hold content, 
  // or we can structure the section outside).
  // Standard usage: <section> <MotionSection> content </MotionSection> </section>
  // However, it's cleaner to let Reveal be a div inside a section.
  return (
    <Reveal animation="slide-up" {...props}>
      {children}
    </Reveal>
  );
}
