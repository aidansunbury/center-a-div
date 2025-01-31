"use client";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { boxOptions } from "@/lib/constants";

import { containerAtom } from "@/hooks/atoms";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export function Box({ index }: { index: number }) {
  const [container, setContainer] = useAtom(containerAtom);
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          className={cn(
            "z-30 size-16 p-1 opacity-80 sm:size-20",
            container.boxes[index].align,
            {
              "bg-green-500": index === 0,
              "bg-red-500": index === 1,
              "bg-blue-500": index === 2,
            },
          )}
        >
          {index + 1}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>
          <Link
            href={"https://tailwindcss.com/docs/align-self"}
            target="_blank"
            className="flex flex-row items-center"
          >
            <span className="mr-2">Align Self</span>
            <MoveUpRight size={16} />
          </Link>
        </ContextMenuLabel>
        <ContextMenuSeparator />
        {boxOptions.align.map((option) => (
          <ContextMenuCheckboxItem
            key={option}
            checked={container.boxes[index].align === option}
            onCheckedChange={(checked) => {
              if (checked) {
                setContainer((draft) => {
                  draft.boxes[index].align = option;
                });
              }
            }}
          >
            {option}
          </ContextMenuCheckboxItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
}
