import * as React from "react"
import { EducationTimeline } from "./EducationTimeline"
import { MotionSection, SlideUp } from "@/components/animations"

export function EducationSection() {
  return (
    <MotionSection id="education" className="flex flex-col gap-lg w-full">
      <SlideUp delay={0.1}>
        <h2 className="font-headline-lg text-headline-lg md:font-display md:text-display text-primary">
          Education
        </h2>
      </SlideUp>
      <EducationTimeline />
    </MotionSection>
  )
}
