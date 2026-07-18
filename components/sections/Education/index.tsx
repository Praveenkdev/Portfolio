import * as React from "react"
import { EducationTimeline } from "./EducationTimeline"

export function EducationSection() {
  return (
    <section className="flex flex-col gap-lg w-full">
      <h2 className="font-headline-lg text-headline-lg md:font-display md:text-display text-primary">
        Education
      </h2>
      <EducationTimeline />
    </section>
  )
}
