import * as React from "react"
import { certificationsData } from "@/data/certifications"
import { CertificationCard } from "./CertificationCard"
import { Stagger, StaggerItem } from "@/components/animations"

export function CertificationsGrid() {
  return (
    <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {certificationsData.map((certification) => (
        <StaggerItem key={certification.id}>
          <CertificationCard 
            certification={certification} 
          />
        </StaggerItem>
      ))}
    </Stagger>
  )
}
