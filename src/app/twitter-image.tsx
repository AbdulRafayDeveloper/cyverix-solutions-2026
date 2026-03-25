import { createCyverixOgImageResponse } from "./og-shared";

export const alt = "Cyverix Solutions: software and AI development";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function TwitterImage() {
  return createCyverixOgImageResponse();
}
