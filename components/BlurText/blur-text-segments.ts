import type { BlurSegmentMode } from "@/lib/hero-animation";
import { splitBlurSegments } from "@/lib/hero-animation";

export type BlurAnimateBy = BlurSegmentMode;

export function getBlurSegments(text: string, animateBy: BlurAnimateBy): string[] {
  return splitBlurSegments(text, animateBy);
}
