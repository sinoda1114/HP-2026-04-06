"use client";

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@heroui/styles";

type ScrollRevealProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const hiddenInner =
  "opacity-0 translate-y-4 motion-reduce:translate-y-0 motion-reduce:opacity-100";
const visibleInner = "opacity-100 translate-y-0";

export function ScrollReveal<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ScrollRevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setShown(true));
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || entry.intersectionRatio < 0.1) return;
        obs.disconnect();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setShown(true));
        });
      },
      // threshold を単一 0.1 だけにすると、初回コールバックが来ない環境・
      // 交差の更新タイミングによって「効かない」ことがある。[0, 0.1] で
      // 交差の変化を拾い、ratio >= 0.1 で「10% 見えた」と判定する。
      { root: null, rootMargin: "0px", threshold: [0, 0.1] },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Component className={className} {...(rest as object)}>
      <div
        ref={ref}
        className={cn(
          "block min-w-0 transform-gpu transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
          shown ? visibleInner : hiddenInner,
        )}
      >
        {children}
      </div>
    </Component>
  );
}
