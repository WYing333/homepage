import { clampToWindow } from "./clamp";

// Normalises a [min, max] pair so that min <= max, clamping each bound to the outer window.
export function normalizeWindow(window, outer) {
  const [low, high] = window[0] <= window[1] ? window : [window[1], window[0]];
  if (!outer) {
    return [low, high];
  }
  return [clampToWindow(low, outer), clampToWindow(high, outer)];
}
