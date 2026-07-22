import * as React from "react"
import { CertificationsGrid } from "./CertificationsGrid"
import { MotionSection, SlideUp } from "@/components/animations"

export function CertificationsSection() {
  return (
    <MotionSection className="flex flex-col gap-lg w-full mt-lg">
      <SlideUp delay={0.1}>
        <h2 className="font-headline-lg text-headline-lg md:font-display md:text-display text-primary">
          Certifications
        </h2>
      </SlideUp>
      <CertificationsGrid />
    </MotionSection>
  )
}
