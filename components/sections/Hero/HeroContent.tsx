"use client";

import { Badge } from "@/components/ui/badge";
import { heroData } from "@/data/hero";
import { HeroActions } from "./HeroActions";
import { Stagger as StaggerContainer, StaggerItem, Typewriter } from "@/components/animations";
import { motion } from "framer-motion";

export function HeroContent() {
  return (
    <StaggerContainer waitForBoot staggerDelay={0.2} className="lg:col-span-7 flex flex-col space-y-md">
      {/* Heading */}
      <StaggerItem>
        <h1 className="font-heading text-4xl md:text-6xl tracking-tight mb-2 font-bold">
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-300 to-primary bg-[length:200%_auto] inline-block"
            initial={{ backgroundPosition: "200% center" }}
            animate={{ backgroundPosition: "0% center" }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
          >
            {heroData.name}
          </motion.span>
        </h1>
        <h2 className="font-heading text-xl md:text-3xl text-muted-foreground font-semibold leading-snug h-[1.2em]">
          <Typewriter text={heroData.title} delay={0.6} />
        </h2>
      </StaggerItem>
      
      {/* Intro */}
      <StaggerItem>
        <p className="font-sans text-lg text-muted-foreground/80 max-w-2xl leading-relaxed">
          {heroData.introduction}
        </p>
      </StaggerItem>
      
      {/* Actions */}
      <StaggerItem>
        <HeroActions />
      </StaggerItem>
      
      {/* Core Technologies */}
      <StaggerItem>
        <div className="mt-8 flex flex-col gap-2">
          <span className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest font-heading">
            Core Technologies
          </span>
          <div className="flex flex-wrap gap-2">
            {heroData.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="px-3 py-1 bg-white/5 border-white/10 hover:border-secondary/50 hover:-translate-y-0.5 transition-all cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </StaggerItem>
    </StaggerContainer>
  );
}
