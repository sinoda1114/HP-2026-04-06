"use client";

import BlurText from "@/components/BlurText/BlurText";
import {
  heroDescriptionBlurConfig,
  heroTaglineBlurConfig,
  shouldShowHeroAnimation,
} from "@/lib/hero-animation";
import { cn, buttonVariants } from "@heroui/styles";
import { useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroIntroProps = {
  tagline: string;
  description: string;
};

const heroTitleClass =
  "mt-4 text-4xl font-bold tracking-tight text-[var(--color-ink)] drop-shadow-sm sm:text-5xl";
const heroDescriptionClass =
  "mt-6 text-lg leading-relaxed text-[var(--color-muted)] drop-shadow-sm";

function HeroStaticCopy({ tagline, description }: HeroIntroProps) {
  return (
    <>
      <h1 className={heroTitleClass}>{tagline}</h1>
      <p className={heroDescriptionClass}>{description}</p>
    </>
  );
}

export function HeroIntro({ tagline, description }: HeroIntroProps) {
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const showAnimation = shouldShowHeroAnimation(mounted, reduceMotion);

  return (
    <div className="max-w-2xl">
      {showAnimation ? (
        <>
          <BlurText
            text={tagline}
            as="h1"
            animateOnMount
            className={heroTitleClass}
            {...heroTaglineBlurConfig}
          />
          <BlurText
            text={description}
            as="p"
            animateOnMount
            className={heroDescriptionClass}
            {...heroDescriptionBlurConfig}
          />
        </>
      ) : (
        <HeroStaticCopy tagline={tagline} description={description} />
      )}
      <HeroCtas />
    </div>
  );
}

function HeroCtas() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        href="/contact"
        className={cn(buttonVariants({ variant: "primary", size: "md" }))}
      >
        お問い合わせ
      </Link>
      <Link
        href="/services"
        className={cn(
          buttonVariants({ variant: "secondary", size: "md" }),
          "border border-[var(--color-border)] bg-white/90 shadow-sm backdrop-blur-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
        )}
      >
        サービスを見る
      </Link>
    </div>
  );
}
