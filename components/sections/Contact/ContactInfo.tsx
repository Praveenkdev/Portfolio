import * as React from "react"
import { contactData } from "@/data/contact"
import { Mail, Link, Terminal, FileText } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="lg:col-span-5 bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-lg p-md flex flex-col justify-between relative overflow-hidden group">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high/50 to-transparent opacity-50 z-0"></div>
      
      <div className="relative z-10">
        <h2 className="font-headline-md text-headline-md text-primary mb-sm">Direct Contact</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
          Reach out directly through email or connect on professional networks.
        </p>
        
        <div className="space-y-sm mb-xl flex flex-col">
          {contactData.email && (
            <a 
              href={`mailto:${contactData.email}`} 
              className="flex items-center gap-sm p-sm rounded border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.3)] hover:bg-surface-container-low transition-all group/link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-container"
              aria-label={`Email me at ${contactData.email}`}
            >
              <Mail className="w-5 h-5 text-outline group-hover/link:text-primary transition-colors" aria-hidden="true" />
              <span className="font-code text-code text-on-surface group-hover/link:text-primary transition-colors">
                {contactData.email}
              </span>
            </a>
          )}
          
          {contactData.linkedin && (
            <a 
              href={`https://${contactData.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-sm p-sm rounded border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.3)] hover:bg-surface-container-low transition-all group/link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-container"
              aria-label="Visit my LinkedIn profile"
            >
              <Link className="w-5 h-5 text-outline group-hover/link:text-primary transition-colors" aria-hidden="true" />
              <span className="font-code text-code text-on-surface group-hover/link:text-primary transition-colors">
                {contactData.linkedin}
              </span>
            </a>
          )}
          
          {contactData.github && (
            <a 
              href={`https://${contactData.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-sm p-sm rounded border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.3)] hover:bg-surface-container-low transition-all group/link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary-container"
              aria-label="Visit my GitHub profile"
            >
              <Terminal className="w-5 h-5 text-outline group-hover/link:text-primary transition-colors" aria-hidden="true" />
              <span className="font-code text-code text-on-surface group-hover/link:text-primary transition-colors">
                {contactData.github}
              </span>
            </a>
          )}
        </div>
      </div>
      
      {contactData.resumeUrl && (
        <div className="relative z-10 mt-auto">
          <a 
            href={contactData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-xs px-md py-sm border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-primary hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Download my resume as a PDF"
          >
            <FileText className="w-5 h-5" aria-hidden="true" />
            Download Resume
          </a>
        </div>
      )}
    </div>
  )
}
