import * as React from "react"
import { educationData } from "@/data/education"
import { EducationCard } from "./EducationCard"

export function EducationTimeline() {
  return (
    <div className="relative pl-sm md:pl-md border-l border-outline-variant/30 ml-xs md:ml-0 flex flex-col gap-lg">
      {educationData.map((education, index) => (
        <EducationCard 
          key={education.id} 
          education={education} 
          index={index} 
        />
      ))}
    </div>
  )
}
