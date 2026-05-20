import { describe, expect, it } from "vitest";
import {
  FAVICON_INNER_SCALE,
  FAVICON_OUTER_RADIUS_RATIO,
} from "./create-padded-favicon";

describe("create-padded-favicon constants", () => {
  it("内側スケールは余白のため 1 未満である", () => {
    expect(FAVICON_INNER_SCALE).toBeGreaterThan(0.45);
    expect(FAVICON_INNER_SCALE).toBeLessThan(1);
  });

  it("32px タブ用で内側ピクセルがキャンバスより小さい", () => {
    const size = 32;
    const inner = Math.max(1, Math.round(size * FAVICON_INNER_SCALE));
    expect(inner).toBeLessThan(size);
  });

  it("外枠角丸比率は妥当な範囲", () => {
    expect(FAVICON_OUTER_RADIUS_RATIO).toBeGreaterThan(0.1);
    expect(FAVICON_OUTER_RADIUS_RATIO).toBeLessThan(0.45);
  });
});
