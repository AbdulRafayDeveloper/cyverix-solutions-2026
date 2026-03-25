/** Shared motion defaults — shorter motion = snappier UI & less main-thread work */
export const viewTransition = { duration: 0.32, ease: [0.25, 0.1, 0.25, 1] as const };
export const viewViewport = { once: true, margin: "-64px" as const, amount: 0.2 as const };
export const stagger = (i: number, step = 0.04) => ({ delay: i * step, ...viewTransition });
