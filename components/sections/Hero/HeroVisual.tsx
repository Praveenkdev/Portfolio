"use client";

import { MotionImage, Floating } from "@/components/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useBootState } from "@/hooks/use-boot-state";
import heroImg from "@/public/images/hero-portrait.jpg";

export function HeroVisual() {
  const isBooted = useBootState();
  return (
    <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative h-[450px] w-full">
      <Floating amplitude={10} duration={6} className="relative w-full h-full flex items-center justify-center">
        
        {/* Glow behind portrait */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] z-0 pointer-events-none"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-0 pointer-events-none"
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Portrait Image Container */}
        <div className="relative w-full max-w-[380px] aspect-[4/5] z-10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0f25] via-[#060a17] to-[#02040a] shadow-[0_0_50px_rgba(6,182,212,0.15)] border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-500">
          
          {/* AI Themed Background Elements (Behind Transparent Portrait) */}
          <div className="absolute inset-0 z-0">
            {/* Ambient Glows */}
            <motion.div 
              className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-[50px]"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-[50px]"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            
            {/* Neural Network Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
              <line x1="20%" y1="20%" x2="50%" y2="40%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="80%" y1="30%" x2="50%" y2="40%" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50%" y1="40%" x2="40%" y2="70%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40%" y1="70%" x2="70%" y2="80%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
              
              <circle cx="20%" cy="20%" r="2" fill="#06b6d4" />
              <circle cx="80%" cy="30%" r="2" fill="#8b5cf6" />
              <circle cx="50%" cy="40%" r="3" fill="#ffffff" />
              <circle cx="40%" cy="70%" r="2" fill="#6366f1" />
              <circle cx="70%" cy="80%" r="2" fill="#06b6d4" />
            </svg>

            {/* Floating Particles */}
            <div className="absolute top-[30%] left-[25%] w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
            <div className="absolute top-[60%] right-[30%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-[20%] left-[40%] w-1 h-1 bg-indigo-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <motion.div
            className="absolute inset-0 w-full h-full z-10 transition-transform duration-700 hover:scale-[1.02]"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={isBooted ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={heroImg}
              alt="Praveen Kumar E - AI Engineer"
              fill
              className="object-cover object-[50%_15%]"
              sizes="(max-width: 1024px) 100vw, 800px"
              quality={100}
              unoptimized={true}
              priority
            />
          </motion.div>
        </div>
        
        {/* Floating Data Packets / Nodes around the portrait to blend with the background */}
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-cyan-400 rounded-full animate-pulse-glow shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20"></div>
        <div className="absolute bottom-[25%] right-[10%] w-2 h-2 bg-indigo-400 rounded-full animate-pulse-glow shadow-[0_0_15px_rgba(99,102,241,0.8)] z-20" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-[60%] right-[5%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse-glow shadow-[0_0_10px_rgba(59,130,246,0.8)] z-20" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-[10%] left-[20%] w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse-glow shadow-[0_0_15px_rgba(168,85,247,0.8)] z-20" style={{ animationDelay: "0.5s" }}></div>
      </Floating>
    </div>
  );
}
