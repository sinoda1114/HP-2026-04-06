import { describe, expect, it } from "vitest";
import { getBlurSegments } from "./blur-text-segments";

describe("getBlurSegments", () => {
  it("letters / words / block を hero-animation と同じ規則で分割する", () => {
    expect(getBlurSegments("AB", "letters")).toEqual(["A", "B"]);
    expect(getBlurSegments("一文", "block")).toEqual(["一文"]);
    expect(getBlurSegments("a b", "words")).toEqual(["a", "b"]);
  });
});
