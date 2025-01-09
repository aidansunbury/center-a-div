import { Button, type ButtonProps } from "@/components/ui/button";
import { useCopy } from "@/components/ui/copy-provider";
import { Check, Clipboard } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

export interface CopyButtonProps
  extends Omit<ButtonProps, "onClick" | "children"> {
  text: string;
  onCopy?: () => void;
  CopyIcon?: React.ElementType;
  CopiedIcon?: React.ElementType;
}

export const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      text,
      className,
      CopiedIcon = Clipboard,
      CopyIcon = Check,
      onCopy,
      ...props
    },
    ref,
  ) => {
    const { copiedText, copy } = useCopy();

    return (
      <Button
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        onClick={() => {
          copy(text);
          if (onCopy) {
            onCopy();
          }
        }}
        variant={"ghost"}
        {...props}
      >
        {copiedText === text ? <CopyIcon /> : <CopiedIcon />}
      </Button>
    );
  },
);
CopyButton.displayName = "CopyButton";
