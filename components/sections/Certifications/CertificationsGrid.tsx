import * as React from "react"
import { certificationsData } from "@/data/certifications"
import { CertificationCard } from "./CertificationCard"

export function CertificationsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {certificationsData.map((certification) => (
        <CertificationCard 
          key={certification.id} 
          certification={certification} 
        />
      ))}
    </div>
  )
}
