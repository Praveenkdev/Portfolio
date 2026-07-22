import * as React from "react"
import { educationData } from "@/data/education"
import { EducationCard } from "./EducationCard"
import { Stagger, StaggerItem } from "@/components/animations"

export function EducationTimeline() {
  return (
    <Stagger className="relative pl-sm md:pl-md border-l border-outline-variant/30 ml-xs md:ml-0 flex flex-col gap-lg">
      {educationData.map((education, index) => (
        <StaggerItem key={education.id}>
          <EducationCard 
            education={education} 
            index={index} 
          />
        </StaggerItem>
      ))}
    </Stagger>
  )
}
