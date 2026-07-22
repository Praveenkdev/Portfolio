import * as React from "react"
import { experienceData } from "@/data/experience"
import { ExperienceItem } from "./ExperienceItem"
import { Stagger, StaggerItem } from "@/components/animations"

export function ExperienceTimeline() {
  return (
    <Stagger className="relative py-md before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[24px] md:before:left-1/2 md:before:-translate-x-1/2 before:w-[1px] before:bg-gradient-to-b before:from-white/5 before:via-white/20 before:to-white/5">
      {experienceData.map((experience, index) => (
        <StaggerItem key={experience.id}>
          <ExperienceItem 
            experience={experience} 
            index={index} 
          />
        </StaggerItem>
      ))}
    </Stagger>
  )
}
