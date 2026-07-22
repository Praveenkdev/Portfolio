import * as React from "react"
import { ContactInfo } from "./ContactInfo"
import { ContactForm } from "./ContactForm"
import { MotionSection, SlideUp } from "@/components/animations"

export function ContactSection() {
  return (
    <MotionSection id="contact" className="mb-lg">
      <header className="mb-lg">
        <SlideUp delay={0.1}>
          <h1 className="font-display text-display text-primary mb-md">
            Let&apos;s Build Something Meaningful
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </SlideUp>
      </header>
      
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
        <ContactInfo />
        <ContactForm />
      </div>
    </MotionSection>
  )
}
