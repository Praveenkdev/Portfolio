import * as React from "react"
import { Certification } from "@/data/certifications"
import { Code, Brain, Globe, Cpu } from "lucide-react"
import { MotionCard } from "@/components/animations"

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <MotionCard className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] p-md rounded flex items-center gap-sm hover:border-[rgba(255,255,255,0.3)] transition-colors group h-full">
      <div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded text-on-surface-variant group-hover:text-secondary transition-colors">
        {certification.icon === "code" && <Code className="w-5 h-5" />}
        {certification.icon === "neurology" && <Brain className="w-5 h-5" />}
        {certification.icon === "web" && <Globe className="w-5 h-5" />}
        {certification.icon === "memory" && <Cpu className="w-5 h-5" />}
      </div>
      <span className="font-body-md text-body-md text-on-surface font-medium leading-snug">
        {certification.title}
      </span>
    </MotionCard>
  )
}
