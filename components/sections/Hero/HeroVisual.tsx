export function HeroVisual() {
  return (
    <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative h-[400px] scale-90">
      {/* Constructing an abstract visual using div elements to represent a network/system */}
      <div className="relative w-full h-full animate-float">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-card rounded-xl border border-secondary/30 shadow-[0_0_40px_rgba(174,198,255,0.15)] flex items-center justify-center z-20 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" aria-hidden="true">
            <path d="m21 16-9 5-9-5"/>
            <path d="m21 8-9 5-9-5"/>
            <path d="m3 8 9-5 9 5"/>
            <path d="M12 22V13"/>
          </svg>
        </div>
        
        {/* Nodes */}
        <div className="absolute top-10 left-1/4 w-16 h-16 bg-[#201f1f] rounded-lg border border-white/10 flex items-center justify-center z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground" aria-hidden="true">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
            <path d="M3 12A9 3 0 0 0 21 12"/>
          </svg>
        </div>
        
        <div className="absolute top-20 right-10 w-20 h-20 bg-[#201f1f] rounded-lg border border-white/10 flex items-center justify-center z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground" aria-hidden="true">
            <polyline points="4 17 10 11 4 5"/>
            <line x1="12" x2="20" y1="19" y2="19"/>
          </svg>
        </div>
        
        <div className="absolute bottom-16 left-10 w-20 h-20 bg-[#201f1f] rounded-lg border border-white/10 flex items-center justify-center z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <line x1="9" x2="9" y1="3" y2="21"/>
            <line x1="15" x2="15" y1="3" y2="21"/>
            <line x1="3" x2="21" y1="9" y2="9"/>
            <line x1="3" x2="21" y1="15" y2="15"/>
          </svg>
        </div>
        
        <div className="absolute bottom-24 right-1/4 w-16 h-16 bg-[#201f1f] rounded-lg border border-white/10 flex items-center justify-center z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground" aria-hidden="true">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
          </svg>
        </div>
        
        {/* Connecting Lines (SVG overlay) */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line stroke="rgba(174,198,255,0.5)" strokeDasharray="4 4" strokeWidth="2" x1="50%" x2="25%" y1="50%" y2="20%"></line>
          <line stroke="rgba(174,198,255,0.5)" strokeDasharray="4 4" strokeWidth="2" x1="50%" x2="80%" y1="50%" y2="30%"></line>
          <line stroke="rgba(174,198,255,0.5)" strokeDasharray="4 4" strokeWidth="2" x1="50%" x2="20%" y1="50%" y2="80%"></line>
          <line stroke="rgba(174,198,255,0.5)" strokeDasharray="4 4" strokeWidth="2" x1="50%" x2="70%" y1="50%" y2="70%"></line>
        </svg>
        
        {/* Floating Data Packets */}
        <div className="absolute top-[35%] left-[37%] w-2 h-2 bg-secondary rounded-full animate-pulse-glow shadow-[0_0_10px_rgba(174,198,255,0.8)]"></div>
        <div className="absolute bottom-[35%] right-[37%] w-2 h-2 bg-secondary rounded-full animate-pulse-glow shadow-[0_0_10px_rgba(174,198,255,0.8)]" style={{ animationDelay: "1s" }}></div>
      </div>
    </div>
  );
}
