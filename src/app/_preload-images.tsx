"use client";

import { preload } from "react-dom";

export default function PreloadImages() {
  preload("/grain.svg", { as: "image", fetchPriority: "high" });
  return null;
}
