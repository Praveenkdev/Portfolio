export function FeaturedProjectVisual() {
  return (
    <div className="md:w-1/2 bg-[#2a2a2a] h-[300px] md:h-auto relative overflow-hidden flex items-center justify-center">
      {/* Abstract visualization of brain scan segmentation */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden="true"></div>
      
      <div className="w-48 h-48 rounded-full border-4 border-white/5 flex items-center justify-center relative pointer-events-none" aria-hidden="true">
        <div className="w-32 h-32 rounded-full border-4 border-secondary/20 relative animate-pulse-glow">
          <div className="absolute inset-0 bg-secondary/10 rounded-full blur-md"></div>
          
          {/* Mock segmentation overlay */}
          <svg className="w-full h-full absolute inset-0 text-error opacity-60" viewBox="0 0 100 100" aria-hidden="true">
            <path className="animate-pulse" d="M40,30 Q60,20 70,40 T50,70 T30,50 Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
