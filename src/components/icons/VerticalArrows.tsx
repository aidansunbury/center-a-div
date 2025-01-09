"use client";

import { containerAtom } from "@/hooks/atoms";
import { useAtom } from "jotai";

import clsx from "clsx";

export type VerticalArrowsProps = {
  bottom: boolean;
  top: boolean;
  isMain: boolean;
};

export const VerticalArrows = ({
  bottom,
  top,
  isMain,
}: VerticalArrowsProps) => {
  const [container] = useAtom(containerAtom);
  if (
    (isMain && !container.mainAxisVisible) ||
    (!isMain && !container.crossAxisVisible)
  )
    return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.3"
      preserveAspectRatio="none"
      className={clsx("absolute inset-0 m-auto size-full w-1/2 opacity-50", {
        "text-red-500": isMain,
      })}
      strokeLinecap="round"
      strokeLinejoin="round"
      // Makes it dashed
      // stroke-dasharray="1 1"
    >
      <title>Vertical Arrows</title>
      <path d="M12 0v24" />
      {bottom && <path d="m8 20 4 4 4-4" />}
      {top && <path d="m8 4 4-4 4 4" />}
    </svg>
  );
};
