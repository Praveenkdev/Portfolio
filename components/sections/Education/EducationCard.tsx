import * as React from "react"
import { Education } from "@/data/education"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface EducationCardProps {
  education: Education;
  index: number;
}

export function EducationCard({ education, index }: EducationCardProps) {
  const isFirst = index === 0;

  return (
    <div className="relative">
      {/* Timeline Node */}
      <div 
        className={cn(
          "absolute -left-[25px] md:-left-[33px] top-[6px] w-[16px] h-[16px] bg-background rounded-full z-10",
          isFirst 
            ? "border-2 border-secondary shadow-[0_0_10px_rgba(174,198,255,0.5)]" 
            : "border-2 border-outline"
        )}
      />
      
      {/* Content Card */}
      <div className="flex flex-col gap-xs bg-surface-container-low border border-outline-variant/20 p-md rounded-lg shadow-sm hover:border-outline-variant/50 transition-colors">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-xs">
          <h3 className="font-headline-md text-headline-md text-primary">
            {education.degree}
          </h3>
          <span className="font-code text-code px-xs py-base rounded w-fit flex-shrink-0 bg-surface-variant/30 text-on-surface-variant">
            {isFirst ? (
              <span className="text-secondary bg-secondary/10 px-xs py-base rounded inline-block -mx-xs -my-base">
                {education.startDate} - {education.endDate}
              </span>
            ) : (
              `${education.startDate} - ${education.endDate}`
            )}
          </span>
        </div>
        
        <p className="font-body-md text-body-md text-on-surface-variant">
          {education.institution}
        </p>
        
        {education.focus && education.focus.length > 0 && (
          <div className="mt-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider block mb-xs">
              Focus
            </span>
            <div className="flex flex-wrap gap-xs">
              {education.focus.map((item) => (
                <Badge key={item} variant="tech">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
