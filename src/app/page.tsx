"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { Container } from "@/components/Container";
import { Checkbox } from "@/components/ui/checkbox";
import { CopyProvider } from "@/components/ui/copy-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type ContainerStyles, containerOptions } from "@/lib/constants";
import { defaultContainer } from "@/lib/constants";
import { parseCodeBlock } from "@/lib/utils";
import { useState } from "react";
import { Label } from "@/components/ui/label";

// Dynamically pass in different code if the screen size changes

export default function Home() {
  const [styles, setStyles] = useState<ContainerStyles>(defaultContainer);

  return (
    <CopyProvider>
      <div className="flex min-h-screen items-start justify-center">
        <main className="flex w-full max-w-screen-md flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl">Center a {"<div>"}</h1>

          <h1 className="self-start">Container Options</h1>
          <Checkbox>Main axis</Checkbox>
          <Checkbox>Cross axis</Checkbox>
          <div className="flex w-full flex-row justify-between border space-x-2">
            <Label>bitch</Label>
            <Select
              value={styles.flex}
              onValueChange={(flex: ContainerStyles["flex"]) =>
                setStyles((prev) => ({ ...prev, flex }))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="flex direction" />
              </SelectTrigger>
              <SelectContent>
                {containerOptions.flex.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={styles.align}
              onValueChange={(align: ContainerStyles["align"]) =>
                setStyles((prev) => ({ ...prev, align }))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="flex direction" />
              </SelectTrigger>
              <SelectContent>
                {containerOptions.align.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={styles.justify}
              onValueChange={(justify: ContainerStyles["justify"]) =>
                setStyles((prev) => ({ ...prev, justify }))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="flex direction" />
              </SelectTrigger>
              <SelectContent>
                {containerOptions.justify.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Container styles={styles} />

          <CodeBlock code={parseCodeBlock(styles)} />
        </main>
      </div>
    </CopyProvider>
  );
}
