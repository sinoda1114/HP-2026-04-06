import { describe, expect, it } from "vitest";
import {
  HERO_SOFT_FROM,
  HERO_SOFT_TO,
  heroDescriptionBlurConfig,
  heroTaglineBlurConfig,
  shouldShowHeroAnimation,
  shouldUseStaticHero,
  splitBlurSegments,
} from "./hero-animation";

describe("splitBlurSegments", () => {
  it("タグラインは1文字ずつに分割する", () => {
    const tagline = "AIで未来を創造する";
    expect(splitBlurSegments(tagline, "letters")).toEqual([...tagline]);
    expect(splitBlurSegments(tagline, "letters")).toHaveLength(tagline.length);
  });

  it("説明文は日本語でも1ブロックとして扱う", () => {
    const description =
      "最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます。";
    expect(splitBlurSegments(description, "block")).toEqual([description]);
    expect(splitBlurSegments(description, "block")).toHaveLength(1);
  });

  it("words モードはスペース区切り（日本語単一文は1要素）", () => {
    const description = "単一の説明文";
    expect(splitBlurSegments(description, "words")).toEqual([description]);
  });
});

describe("HERO_SOFT animation", () => {
  it("B2B 向けの控えめな blur / y を使う", () => {
    expect(HERO_SOFT_FROM.filter).toBe("blur(8px)");
    expect(HERO_SOFT_FROM.y).toBe(16);
    expect(HERO_SOFT_TO[0]).toEqual({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
    });
  });

  it("ヒーロー設定がタグライン=letters・説明=block である", () => {
    expect(heroTaglineBlurConfig.animateBy).toBe("letters");
    expect(heroTaglineBlurConfig.animationFrom).toEqual(HERO_SOFT_FROM);
    expect(heroDescriptionBlurConfig.animateBy).toBe("block");
    expect(heroDescriptionBlurConfig.animationFrom).toEqual(HERO_SOFT_FROM);
  });
});

describe("shouldUseStaticHero", () => {
  it("prefers-reduced-motion が true のとき静的表示", () => {
    expect(shouldUseStaticHero(true)).toBe(true);
  });

  it("false / null / undefined のときアニメーション可能", () => {
    expect(shouldUseStaticHero(false)).toBe(false);
    expect(shouldUseStaticHero(null)).toBe(false);
    expect(shouldUseStaticHero(undefined)).toBe(false);
  });
});

describe("shouldShowHeroAnimation", () => {
  it("マウント前は SSR と揃えて常に静的（アニメしない）", () => {
    expect(shouldShowHeroAnimation(false, false)).toBe(false);
    expect(shouldShowHeroAnimation(false, true)).toBe(false);
  });

  it("マウント後は reduced-motion 以外でアニメ可能", () => {
    expect(shouldShowHeroAnimation(true, false)).toBe(true);
    expect(shouldShowHeroAnimation(true, null)).toBe(true);
    expect(shouldShowHeroAnimation(true, true)).toBe(false);
  });
});
