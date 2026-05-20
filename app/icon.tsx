import { createPaddedFaviconPng } from "@/lib/create-padded-favicon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return createPaddedFaviconPng(32);
}
