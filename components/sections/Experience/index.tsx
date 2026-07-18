import * as React from "react"
import { ExperienceTimeline } from "./ExperienceTimeline"

export function ExperienceSection() {
  return (
    <section className="w-full max-w-container-max mx-auto px-gutter py-xl">
      <header className="mb-xl max-w-2xl">
        <h2 className="font-display text-display text-primary mb-sm">
          Experience
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          A trajectory of technical engineering, spanning complex system architecture to foundational research and development.
        </p>
      </header>
      
      <ExperienceTimeline />
    </section>
  )
}
