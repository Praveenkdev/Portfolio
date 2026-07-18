import * as React from "react"
import { cn } from "@/lib/utils"
import { Experience } from "@/data/experience"
import { Badge } from "@/components/ui/badge"
import { TimelineMarker } from "./TimelineMarker"
import { ChevronRight } from "lucide-react"

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div 
      className={cn(
        "relative flex flex-col items-start mb-xl group",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <TimelineMarker isActive={false} />
      
      {/* Date Side */}
      <div 
        className={cn(
          "w-full md:w-1/2 pt-1 mb-xs md:mb-0",
          isEven 
            ? "md:pr-xl md:text-right pl-12 md:pl-0" 
            : "md:pl-xl pl-12"
        )}
      >
        <span className="font-code text-code text-on-surface-variant block md:inline-block">
          {experience.dateRange}
        </span>
      </div>
      
      {/* Content Side */}
      <div 
        className={cn(
          "w-full md:w-1/2 pl-12 md:pl-0",
          isEven ? "md:pl-xl" : "md:pr-xl md:text-right"
        )}
      >
        <div 
          className={cn(
            "bg-[#0a0a0a] border border-white/10 transition-colors duration-300 hover:border-white/30 rounded-lg p-md text-left",
            !isEven && "md:text-right"
          )}
        >
          <div 
            className={cn(
              "flex flex-col mb-xs",
              !isEven && "md:items-end"
            )}
          >
            <h3 className="font-headline-md text-headline-md text-primary">
              {experience.role}
            </h3>
          </div>
          <h4 className="font-label-md text-label-md text-on-surface-variant mb-sm">
            {experience.company}
          </h4>
          
          <ul 
            className={cn(
              "space-y-2 mb-md",
              !isEven && "md:text-left inline-block"
            )}
          >
            {experience.description.map((desc, i) => (
              <li key={i} className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 text-outline-variant shrink-0" />
                <p className="font-body-md text-body-md text-on-surface">
                  {desc}
                </p>
              </li>
            ))}
          </ul>
          
          {experience.skills && experience.skills.length > 0 && (
            <div 
              className={cn(
                "flex flex-wrap gap-2 mt-sm pt-sm border-t border-outline-variant/10",
                !isEven && "md:justify-end"
              )}
            >
              {experience.skills.map((skill) => (
                <Badge key={skill} variant="tech">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
