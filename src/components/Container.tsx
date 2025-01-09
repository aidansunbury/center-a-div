"use client";

import type { ContainerStyles } from "@/lib/constants";
import { cn, expand } from "@/lib/utils";
import { MoveRight } from "lucide-react";

import { defaultContainer } from "@/lib/constants";
import { Axes } from "./Axes";
import { Box } from "./Box";
import { useAtomValue } from "jotai";
import { boxesAtom } from "@/lib/constants";

export function Container({ styles }: { styles: ContainerStyles }) {
  const { ...container } = styles;

  const boxes = useAtomValue(boxesAtom);
  return (
    <div className="h-96 w-96 self-center">
      {/* {JSON.stringify(styles)} */}
      {/* {JSON.stringify(expand(styles))} */}
      <div className="relative size-full items-center justify-center">
        <Axes flex={styles.flex} />
        <div className={cn("flex size-full bg-slate-400", expand(styles))}>
          {boxes.map((value, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Box index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
