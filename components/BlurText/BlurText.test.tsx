import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import BlurText from "./BlurText";

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

describe("BlurText", () => {
  beforeEach(() => {
    useReducedMotion.mockReturnValue(false);
  });

  it("animateOnMount で IntersectionObserver なしでも inView アニメーションを開始する", () => {
    render(
      <BlurText
        text="Hi"
        animateBy="letters"
        animateOnMount
        animationFrom={{ filter: "blur(8px)", opacity: 0, y: 16 }}
        animationTo={[{ filter: "blur(0px)", opacity: 1, y: 0 }]}
      />,
    );

    const spans = screen.getAllByTestId("motion-span");
    expect(spans).toHaveLength(2);
    const animate = JSON.parse(spans[0]!.getAttribute("data-animate")!);
    expect(animate.opacity).toContain(1);
  });

  it("block モードでは1セグメントのみ", () => {
    render(
      <BlurText
        text="日本語の説明"
        animateBy="block"
        animateOnMount
        animationFrom={{ filter: "blur(8px)", opacity: 0, y: 16 }}
        animationTo={[{ filter: "blur(0px)", opacity: 1, y: 0 }]}
      />,
    );

    expect(screen.getAllByTestId("motion-span")).toHaveLength(1);
    expect(screen.getByTestId("motion-span")).toHaveTextContent("日本語の説明");
  });

  it("useReducedMotion 時は全文を静的表示（opacity 0 のままにしない）", () => {
    useReducedMotion.mockReturnValue(true);
    render(
      <BlurText
        text="静的"
        animateBy="letters"
        animateOnMount
        animationFrom={{ filter: "blur(8px)", opacity: 0, y: 16 }}
      />,
    );

    expect(screen.queryAllByTestId("motion-span")).toHaveLength(0);
    expect(screen.getByText("静的")).toBeVisible();
  });
});
