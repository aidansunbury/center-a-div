"use client";

import { cn, expand } from "@/lib/utils";

import { containerAtom } from "@/hooks/atoms";
import { useAtom } from "jotai";

import { Axes } from "./Axes";
import { Box } from "./Box";

export function Container() {
  const [styles] = useAtom(containerAtom);

  const { boxes, crossAxisVisible, mainAxisVisible, ...container } = styles;

  return (
    <div className="h-96 w-96 self-center rounded-md rounded-md border-4">
      {/* {JSON.stringify(styles)} */}
      {/* {JSON.stringify(expand(styles))} */}
      <div className="relative size-full items-center justify-center">
        <Axes flex={styles.flex} />
        <div className={cn("flex size-full bg-gray-200", expand(container))}>
          {boxes.map((_value, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Box index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
