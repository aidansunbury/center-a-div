"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Container } from "@/components/Container";
import { containerOptions, type ContainerStyles } from "@/lib/constants";
import { defaultContainer } from "@/lib/constants";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Test } from "@/components/CodeBlock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function Home() {
  const [styles, setStyles] = useState<ContainerStyles>(defaultContainer);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">Center a {"<div>"}</h1>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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

          <Container styles={styles} />

          <div className="size-48 relative items-center justify-center">
            <MoveRight className="absolute inset-0 m-auto" />

            <div className="flex size-full flex-row-reverse items-end justify-evenly bg-slate-400">
              <div className="size-12 bg-green-400">1.</div>
              <div className="size-10 bg-red-400" />

              <div className="size-8 bg-blue-400" />
            </div>
          </div>
          <Test />
          {/* 
        <div className="bg-slate-400 size-48 flex flex-row justify-between">
          <div className="size-12 bg-green-400" />
          <div className="size-10 bg-red-400" />

          <div className="size-8 bg-blue-400" />
        </div>
        <div className="bg-slate-400 size-48 flex flex-row items-center">
          <div className="size-12 bg-green-400" />
          <div className="size-10 bg-red-400 self-start" />

          <div className="size-8 bg-blue-400" />
        </div>
        <div className="bg-slate-400 size-48 flex flex-row justify-center">
          <div className="size-12 bg-green-400" />
          <div className="size-10 bg-red-400" />

          <div className="size-8 bg-blue-400" />
        </div>
        <div className="bg-slate-400 size-48 flex flex-row justify-center items-baseline">
          <div className="size-12 bg-green-400" />
          <div className="size-10 bg-red-400" />

          <div className="size-8 bg-blue-400" />
        </div> */}
        </main>
      </div>
    </QueryClientProvider>
  );
}
