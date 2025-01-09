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

import { containerAtom } from "@/hooks/atoms";
import { parseCodeBlock } from "@/lib/utils";
import { useAtom } from "jotai";

import { Label } from "@/components/ui/label";
import { MoveRight } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [styles, setStyles] = useAtom(containerAtom);

  return (
    <CopyProvider>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-300">
        <main className="relative flex w-full max-w-screen-md flex-col items-center justify-start rounded-lg bg-gray-50 bg-opacity-30 p-5 px-4 sm:px-6 lg:px-8">
          <Link
            href="https://github.com/aidansunbury/center-a-div"
            target="_blank"
            className="absolute top-2 right-2 size-8"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>

          <h1 className="my-2 font-mono text-4xl">Center a {"<div>"}</h1>
          <span className="text-secondary-foreground">
            Interactively visualize css flexbox using tailwindcss
          </span>
          <span className="font-semibold text-secondary-foreground italic">
            Right click on an individual box to edit its styles
          </span>

          {/* View Axes checkboxes */}
          <div className="flex flex-row space-x-8">
            <div className="flex flex-row items-center space-x-2">
              <Checkbox
                className="size-6 data-[state=checked]:bg-red-500"
                onCheckedChange={(checked) =>
                  setStyles((draft) => {
                    draft.mainAxisVisible = checked as boolean;
                  })
                }
                checked={styles.mainAxisVisible}
              />

              <MoveRight className="text-red-500" size={32} />
              <span>Main Axis</span>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <Checkbox
                className="size-6"
                onCheckedChange={(checked) =>
                  setStyles((draft) => {
                    draft.crossAxisVisible = checked as boolean;
                  })
                }
                checked={styles.crossAxisVisible}
              />
              <MoveRight size={32} />
              <span>Cross Axis</span>
            </div>
          </div>
          <Container />
          {/* Select triggers */}
          <div className="my-4 flex w-full flex-col justify-between space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <div className="flex flex-col">
              <Label className="text-base">
                <Link
                  href="https://tailwindcss.com/docs/flex-direction"
                  target="_blank"
                  className="flex flex-row items-center"
                >
                  <span className="mr-2">Flex Direction</span>
                  <MoveUpRight size={16} />
                </Link>
              </Label>
              <Select
                value={styles.flex}
                onValueChange={(flex: ContainerStyles["flex"]) =>
                  setStyles((draft) => {
                    draft.flex = flex;
                  })
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
            </div>

            <div className="flex flex-col">
              <Label className="text-base">
                <Link
                  href="https://tailwindcss.com/docs/align-items"
                  target="_blank"
                  className="flex flex-row items-center"
                >
                  <span className="mr-2">Align Items</span>
                  <MoveUpRight size={16} />
                </Link>
              </Label>
              <Select
                value={styles.align}
                onValueChange={(align: ContainerStyles["align"]) =>
                  setStyles((draft) => {
                    draft.align = align;
                  })
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
            </div>

            <div className="flex flex-col">
              <Label className="text-base">
                <Link
                  href="https://tailwindcss.com/docs/justify-content"
                  target="_blank"
                  className="flex flex-row items-center"
                >
                  <span className="mr-2">Justify Content</span>
                  <MoveUpRight size={16} />
                </Link>
              </Label>
              <Select
                value={styles.justify}
                onValueChange={(justify: ContainerStyles["justify"]) =>
                  setStyles((draft) => {
                    draft.justify = justify;
                  })
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
          </div>

          <CodeBlock code={parseCodeBlock(styles)} />
        </main>
      </div>
    </CopyProvider>
  );
}
