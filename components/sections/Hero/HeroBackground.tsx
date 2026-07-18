export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none"></div>
      <div className="absolute top-[10%] right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] z-0 animate-pulse-glow pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] z-0 pointer-events-none"></div>
    </>
  );
}
