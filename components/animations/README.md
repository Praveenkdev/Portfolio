# Premium Motion Design System

This directory contains the central architecture for all animations within the application. It is designed to be highly reusable, scalable, and elegant, inspired by premium software like Linear, Vercel, and Apple.

## Architecture & Philosophy
1. **Centralized Variants**: All motion curves, easings, and transitions live in `variants.ts`. We do not scatter custom `transition={{ duration: 0.5 }}` props throughout the application.
2. **Server Component Preservation**: These are client-side wrappers. Wrap your server components in these components to animate them without converting the entire page to a client component.
3. **Subtle & Premium**: Motion should never distract. Stick to opacity, transform, and blur. Never animate layout-triggering properties (width, height, top, left, margin, padding).
4. **Accessibility First**: The `useReducedMotion` hook automatically disables animations or simplifies them to static rendering if the user has `prefers-reduced-motion` enabled in their OS.

## Components

### Base Primitives
- `<Reveal>`: The core engine for scroll-linked animations. Supports custom directions and replay strategies.
- `<FadeIn>`, `<SlideUp>`, `<SlideLeft>`, `<SlideRight>`, `<ScaleIn>`: Pre-configured wrappers around `Reveal`.
- `<Stagger>` / `<StaggerItem>`: Wrap grids and lists to sequentially reveal children.
- `<Floating>`: Gentle continuous Y-axis floating effect.
- `<ImageParallax>`: Subtle Y-axis movement linked to scroll position.

### Universal Wrappers
- `<MotionSection>`: Drop-in replacement for `<section>` that fades and slides up.
- `<MotionCard>`: Applies premium hover effects (soft shadow, tiny scale lift).
- `<MotionImage>`: Wraps `next/image` with subtle cursor-aware movement and reveal animations.
- `<MotionButton>`: Pre-configured scale on hover/tap.

## Usage Examples

**Animating a Section:**
```tsx
import { MotionSection, SlideUp } from "@/components/animations";

export function Hero() {
  return (
    <MotionSection className="py-20">
      <SlideUp delay={0.2}>
        <h1>Premium Heading</h1>
      </SlideUp>
    </MotionSection>
  );
}
```

**Animating a Grid of Cards:**
```tsx
import { Stagger, StaggerItem, MotionCard } from "@/components/animations";

export function SkillsGrid() {
  return (
    <Stagger staggerDelay={0.1}>
      <div className="grid grid-cols-3">
        {skills.map(skill => (
          <StaggerItem key={skill.id}>
            <MotionCard>
              {skill.name}
            </MotionCard>
          </StaggerItem>
        ))}
      </div>
    </Stagger>
  );
}
```

**Animating an Image with Cursor awareness:**
```tsx
import { MotionImage } from "@/components/animations";

export function FeaturedImage() {
  return (
    <MotionImage 
      src="/screenshot.png" 
      alt="App" 
      hoverMove={true} 
      reveal={true} 
    />
  );
}
```

## Replay Strategies
Pass `replay` to `Reveal`, `Stagger`, or `MotionSection`:
- `"once"` (Default): Animates once.
- `"always"`: Animates every time it enters the viewport.
- `"onDirectionChange"`: Replays when scrolling down, but resets if you scroll up past it.

## Performance
We target a strict 60 FPS.
- Do NOT animate anything except `transform` and `opacity`.
- Do NOT use heavy `filter` animations (like large blurs) on multiple elements simultaneously.
- When animating long lists, use `<Stagger>` to coordinate rather than putting individual Intersection Observers on every child.
