import { createPaddedFaviconPng } from "@/lib/create-padded-favicon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return createPaddedFaviconPng(180);
}
