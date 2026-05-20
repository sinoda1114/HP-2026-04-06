import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { HeroIntro } from "./hero-intro";

const tagline = "AIで未来を創造する";
const description =
  "最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます。";

const useReducedMotion = vi.fn();

vi.mock("motion/react", () => ({
  useReducedMotion: () => useReducedMotion(),
  motion: {
    span: ({
      children,
      initial,
      animate,
      ...rest
    }: {
      children: React.ReactNode;
      initial?: object;
      animate?: object;
    }) => (
      <span
        data-testid="motion-span"
        data-initial={JSON.stringify(initial)}
        data-animate={JSON.stringify(animate)}
        {...rest}
      >
        {children}
      </span>
    ),
  },
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("HeroIntro", () => {
  beforeEach(() => {
    useReducedMotion.mockReturnValue(false);
  });

  it("prefers-reduced-motion 時は常に静的な h1/p（motion.span なし）", async () => {
    useReducedMotion.mockReturnValue(true);
    render(<HeroIntro tagline={tagline} description={description} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(tagline);
    expect(screen.getByText(description)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryAllByTestId("motion-span")).toHaveLength(0);
    });
  });

  it("マウント後・通常設定ではタグラインを1文字ずつ motion.span で描画する", async () => {
    render(<HeroIntro tagline={tagline} description={description} />);

    await waitFor(() => {
      expect(screen.getAllByTestId("motion-span").length).toBeGreaterThan(0);
    });

    const spans = screen.getAllByTestId("motion-span");
    expect(spans).toHaveLength(tagline.length + 1);

    const taglineSpans = spans.slice(0, tagline.length);
    for (let i = 0; i < tagline.length; i++) {
      expect(taglineSpans[i]).toHaveTextContent(tagline[i]!);
      const initial = JSON.parse(taglineSpans[i]!.getAttribute("data-initial")!);
      expect(initial.filter).toBe("blur(8px)");
      expect(initial.y).toBe(16);
    }
  });

  it("マウント後・通常設定では説明文を1ブロックの motion.span で描画する", async () => {
    render(<HeroIntro tagline={tagline} description={description} />);

    await waitFor(() => {
      expect(screen.getAllByTestId("motion-span").length).toBe(tagline.length + 1);
    });

    const spans = screen.getAllByTestId("motion-span");
    const descriptionSpan = spans[tagline.length]!;
    expect(descriptionSpan).toHaveTextContent(description);

    const animate = JSON.parse(descriptionSpan.getAttribute("data-animate")!);
    expect(animate.opacity[animate.opacity.length - 1]).toBe(1);
    expect(animate.filter[animate.filter.length - 1]).toBe("blur(0px)");
  });

  it("reduced-motion でもタグライン本文は常に DOM に存在する", () => {
    useReducedMotion.mockReturnValue(true);
    render(<HeroIntro tagline={tagline} description={description} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(tagline);
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
