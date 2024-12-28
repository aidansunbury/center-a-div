"use client";

import type { ContainerStyles } from "@/lib/constants";
import { MoveRight } from "lucide-react";
import { cn, expand } from "@/lib/utils";

import { defaultContainer } from "@/lib/constants";

export function Container({ styles }: { styles: ContainerStyles }) {
  return (
    <div>
      {JSON.stringify(styles)}
      {JSON.stringify(expand(styles))}
      <div className="relative size-48 items-center justify-center">
        <MoveRight className="absolute inset-0 m-auto" />

        <div className={cn("flex size-full bg-slate-400", expand(styles))}>
          <div className="size-12 bg-green-400">1</div>
          <div className="size-10 bg-red-400">2</div>
          <div className="size-8 bg-blue-400"> 3</div>
        </div>
      </div>
    </div>
  );
}
