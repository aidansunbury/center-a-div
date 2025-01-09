"use client";

import { HorizontalArrows } from "./icons/HorizontalArrows";
import { VerticalArrows } from "./icons/VerticalArrows";

import type { ContainerStyles } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Axes({ flex }: { flex: ContainerStyles["flex"] }) {
  if (flex === "flex-row") {
    return (
      <>
        <HorizontalArrows left={false} right={true} isMain={true} />
        <VerticalArrows top={true} bottom={true} isMain={false} />
      </>
    );
  }
  if (flex === "flex-col") {
    return (
      <>
        <HorizontalArrows left={true} right={true} isMain={false} />
        <VerticalArrows top={false} bottom={true} isMain={true} />
      </>
    );
  }
  if (flex === "flex-row-reverse") {
    return (
      <>
        <HorizontalArrows left={true} right={false} isMain={true} />
        <VerticalArrows top={true} bottom={true} isMain={false} />
      </>
    );
  }

  // flex-col-reverse
  return (
    <>
      <HorizontalArrows left={true} right={true} isMain={false} />
      <VerticalArrows top={true} bottom={false} isMain={true} />
    </>
  );
}
