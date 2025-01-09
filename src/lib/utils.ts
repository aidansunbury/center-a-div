import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ContainerStyles } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function expand(input: Record<string, string>) {
  return Object.values(input).join(" ");
}

// Spacing is handled automatically by js-beautify
export function parseCodeBlock(styles: ContainerStyles) {
  const classNames = [
    "flex",
    "size-full",
    styles.align,
    styles.flex,
    styles.justify,
  ];
  return `<div className="${classNames.sort().join(" ")}">${styles.boxes.map((box, index) => `<div className="${box.align} size-16">${index + 1}</div>`).join(" ")}</div>`;
}
