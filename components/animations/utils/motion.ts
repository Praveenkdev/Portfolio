export type ReplayStrategy = "once" | "always" | "onDirectionChange" | "manual";

export interface MotionConfigState {
  reducedMotion: boolean;
  globalTransition: any;
}
