"use client";

import { colorMapping, boxOptions } from "@/lib/constants";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuCheckboxItem,
  ContextMenuTrigger,
  ContextMenuLabel,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { useAtom } from "jotai";
import { boxesAtom } from "@/lib/constants";

export function Box({ index }: { index: number }) {
  const [boxes, setBoxes] = useAtom(boxesAtom);
  const currentBox = boxes[index];
  return (
    <ContextMenu>
      <ContextMenuTrigger className={`z-30 ${currentBox.align}`}>
        <div className={`size-16 p-1 ${colorMapping[index]} opacity-80`}>
          {index}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Align Self</ContextMenuLabel>
        <ContextMenuSeparator />
        {boxOptions.align.map((option) => (
          <ContextMenuCheckboxItem
            key={option}
            checked={currentBox.align === option}
            onCheckedChange={(checked) => {
              if (checked) {
                const firstHalf = boxes.slice(0, index);
                const secondHalf = boxes.slice(index + 1);
                const newBox = {
                  align: option,
                };
                setBoxes([...firstHalf, newBox, ...secondHalf]);
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
