"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2 } from "lucide-react"
import { MotionCard, MotionButton } from "@/components/animations"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact"

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      botField: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      reset()
    } catch (error) {
      console.error(error)
      toast.error("Failed to send message", {
        description: error instanceof Error ? error.message : "Please try again later or use the direct email.",
      })
    }
  }

  const inputClasses = "bg-black border border-outline-variant rounded px-sm py-sm text-on-surface font-code text-code focus:outline-none focus:border-secondary-container focus:ring-1 focus:ring-secondary-container transition-colors";

  return (
    <MotionCard className="lg:col-span-7 bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-lg p-md h-full">
      <h2 className="font-headline-md text-headline-md text-primary mb-lg">Send a Message</h2>
      
      <form className="space-y-md" onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot field - visually hidden */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="botField">Don't fill this out if you're human:</label>
          <input id="botField" tabIndex={-1} {...register("botField")} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            <label htmlFor="name" className="font-label-md text-label-md text-on-surface-variant">Name</label>
            <Input 
              id="name" 
              placeholder="Your Name" 
              type="text" 
              className={inputClasses} 
              {...register("name")}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          
          <div className="flex flex-col gap-xs">
            <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant">Email</label>
            <Input 
              id="email" 
              placeholder="your.email@example.com" 
              type="email" 
              className={inputClasses}
              {...register("email")}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
        </div>
        
        <div className="flex flex-col gap-xs">
          <label htmlFor="message" className="font-label-md text-label-md text-on-surface-variant">Message</label>
          <Textarea 
            id="message" 
            placeholder="Tell me about your project or opportunity..." 
            rows={6} 
            className={`${inputClasses} resize-none min-h-[140px]`}
            {...register("message")}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
        </div>
        
        <div className="flex justify-end pt-sm">
          <MotionButton 
            type="submit" 
            disabled={isSubmitting}
            className="flex items-center gap-xs px-md py-sm bg-primary text-background rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                Sending...
                <Loader2 className="w-[18px] h-[18px] animate-spin" aria-hidden="true" />
              </>
            ) : (
              <>
                Send Message
                <Send className="w-[18px] h-[18px]" aria-hidden="true" />
              </>
            )}
          </MotionButton>
        </div>
      </form>
    </MotionCard>
  )
}
