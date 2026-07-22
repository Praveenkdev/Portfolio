export const ease = {
  premium: [0.19, 1, 0.22, 1] as [number, number, number, number], // easeOutExpo (luxurious, fast start, long tail)
  snappy: [0.16, 1, 0.3, 1] as [number, number, number, number], // custom smooth fast
  smooth: [0.65, 0, 0.35, 1] as [number, number, number, number], // easeInOutCubic
  bounce: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
};
