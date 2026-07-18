import * as React from "react"
import { Certification } from "@/data/certifications"

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] p-md rounded flex items-center gap-sm hover:border-[rgba(255,255,255,0.3)] transition-colors group">
      <div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded text-on-surface-variant group-hover:text-secondary transition-colors">
        <span 
          className="material-symbols-outlined" 
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {certification.icon}
        </span>
      </div>
      <span className="font-body-md text-body-md text-on-surface font-medium leading-snug">
        {certification.title}
      </span>
    </div>
  )
}
