"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Intentionally left blank. Architecture supports future integration.
  }

  const inputClasses = "bg-black border border-outline-variant rounded px-sm py-sm text-on-surface font-code text-code focus:outline-none focus:border-secondary-container focus:ring-1 focus:ring-secondary-container transition-colors";

  return (
    <div className="lg:col-span-7 bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-lg p-md">
      <h2 className="font-headline-md text-headline-md text-primary mb-lg">Send a Message</h2>
      
      <form className="space-y-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            <label htmlFor="name" className="font-label-md text-label-md text-on-surface-variant">Name</label>
            <Input 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              type="text" 
              className={inputClasses} 
              required
            />
          </div>
          
          <div className="flex flex-col gap-xs">
            <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant">Email</label>
            <Input 
              id="email" 
              name="email" 
              placeholder="john@example.com" 
              type="email" 
              className={inputClasses}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-xs">
          <label htmlFor="message" className="font-label-md text-label-md text-on-surface-variant">Message</label>
          <Textarea 
            id="message" 
            name="message" 
            placeholder="How can we collaborate?" 
            rows={6} 
            className={`${inputClasses} resize-none min-h-[140px]`}
            required
          />
        </div>
        
        <div className="flex justify-end pt-sm">
          <button 
            type="submit" 
            className="flex items-center gap-xs px-md py-sm bg-primary text-background rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Send Message
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">send</span>
          </button>
        </div>
      </form>
    </div>
  )
}
