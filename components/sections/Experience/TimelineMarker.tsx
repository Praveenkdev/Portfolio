import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineMarkerProps {
  isActive?: boolean;
}

export function TimelineMarker({ isActive = false }: TimelineMarkerProps) {
  return (
    <>
      {/* Marker Mobile */}
      <div 
        className={cn(
          "absolute left-[20px] top-6 w-2 h-2 rounded-full z-10 md:hidden transition-colors",
          isActive 
            ? "bg-primary animate-subtle-pulse" 
            : "bg-outline-variant group-hover:bg-primary"
        )}
      />
      
      {/* Marker Desktop */}
      <div 
        className={cn(
          "hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 rounded-full z-10 items-center justify-center transition-colors",
          isActive 
            ? "w-3 h-3 bg-primary animate-subtle-pulse" 
            : "w-2 h-2 bg-outline-variant group-hover:bg-primary block"
        )}
      >
        {isActive && (
          <div className="w-1 h-1 bg-background rounded-full" />
        )}
      </div>
    </>
  )
}
