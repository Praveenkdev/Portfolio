"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import brainTumorCover from "@/public/images/brain-tumor-cover.png";
import realisticMri from "@/public/images/projects/realistic_mri_segmentation.png";

export function FeaturedProjectVisual() {
  const [imgSrc, setImgSrc] = useState<any>(brainTumorCover);

  return (
    <div className="md:w-1/2 bg-[#050505] min-h-[300px] md:min-h-[400px] h-full relative overflow-hidden flex items-center justify-center group z-0">
      
      {/* Full-width Image Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={imgSrc}
          alt="Brain Tumor Segmentation Project Cover"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          onError={() => setImgSrc(realisticMri)}
        />
      </motion.div>

      {/* Floating Badges */}
      <motion.div 
        className="absolute top-[15%] left-[5%] md:left-[10%] bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white/80 px-3 py-1.5 rounded-full font-mono flex items-center gap-2 shadow-xl z-20"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        Input: .nii.gz
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[15%] right-[5%] md:right-[10%] bg-black/60 backdrop-blur-md border border-cyan-500/30 text-xs text-cyan-400 px-3 py-1.5 rounded-full font-mono flex items-center gap-2 shadow-xl z-20"
        initial={{ y: 0 }}
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        Mask: DDPM
      </motion.div>
    </div>
  );
}
