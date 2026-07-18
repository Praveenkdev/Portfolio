import * as React from "react"
import { CertificationsGrid } from "./CertificationsGrid"

export function CertificationsSection() {
  return (
    <section className="flex flex-col gap-lg w-full mt-lg">
      <h2 className="font-headline-lg text-headline-lg md:font-display md:text-display text-primary">
        Certifications
      </h2>
      <CertificationsGrid />
    </section>
  )
}
