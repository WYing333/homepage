import { normalizeWindow } from "./window";

// Clamps a value into a [min, max] window; the window may be given in either order.
export function clampToWindow(value, window) {
  const [low, high] = normalizeWindow(window);
  return Math.min(Math.max(value, low), high);
}
