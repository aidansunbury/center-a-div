"use client";

import { HorizontalArrows } from "./icons/HorizontalArrows";
import { VerticalArrows } from "./icons/VerticalArrows";

import type { ContainerStyles } from "@/lib/constants";

export function Axes({ flex }: { flex: ContainerStyles["flex"] }) {
  const config = {
    "flex-row": {
      horizontal: { left: false, right: true, isMain: true },
      vertical: { top: true, bottom: true, isMain: false },
    },
    "flex-col": {
      horizontal: { left: true, right: true, isMain: false },
      vertical: { top: false, bottom: true, isMain: true },
    },
    "flex-row-reverse": {
      horizontal: { left: true, right: false, isMain: true },
      vertical: { top: true, bottom: true, isMain: false },
    },
    "flex-col-reverse": {
      horizontal: { left: true, right: true, isMain: false },
      vertical: { top: true, bottom: false, isMain: true },
    },
  };

  const { horizontal, vertical } = config[flex];

  return (
    <>
      <HorizontalArrows {...horizontal} />
      <VerticalArrows {...vertical} />
    </>
  );
}
