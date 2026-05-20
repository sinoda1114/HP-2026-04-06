/** B2B 向けの控えめな BlurText キーフレーム */
export const HERO_SOFT_FROM = {
  filter: "blur(8px)",
  opacity: 0,
  y: 16,
} as const;

export const HERO_SOFT_TO = [{ filter: "blur(0px)", opacity: 1, y: 0 }] as const;

export type BlurSegmentMode = "letters" | "words" | "block";

export function splitBlurSegments(
  text: string,
  mode: BlurSegmentMode,
): string[] {
  if (mode === "block") return [text];
  if (mode === "letters") return [...text];
  return text.split(" ");
}

export function shouldUseStaticHero(reduceMotion: boolean | null | undefined): boolean {
  return reduceMotion === true;
}

/** SSR / hydration 前は常に false（静的表示）。マウント後のみアニメを許可 */
export function shouldShowHeroAnimation(
  mounted: boolean,
  reduceMotion: boolean | null | undefined,
): boolean {
  return mounted && !shouldUseStaticHero(reduceMotion);
}

export const heroTaglineBlurConfig = {
  animateBy: "letters" as const,
  delay: 48,
  stepDuration: 0.4,
  animationFrom: HERO_SOFT_FROM,
  animationTo: [...HERO_SOFT_TO],
};

export const heroDescriptionBlurConfig = {
  animateBy: "block" as const,
  delay: 120,
  stepDuration: 0.45,
  animationFrom: HERO_SOFT_FROM,
  animationTo: [...HERO_SOFT_TO],
};
