import { atom } from "jotai";

export const containerOptions = {
  flex: ["flex-row", "flex-col", "flex-row-reverse", "flex-col-reverse"],
  justify: [
    "justify-start",
    "justify-end",
    "justify-center",
    "justify-between",
    "justify-around",
    "justify-evenly",
  ],
  align: ["items-start", "items-end", "items-center"], // "items-baseline"
} as const;

export const boxOptions = {
  align: ["self-auto", "self-start", "self-end", "self-center"],
} as const;

export type BoxStyles = {
  [K in keyof typeof boxOptions]: (typeof boxOptions)[K][number];
};

// Derive the type from the value
export type ContainerStyles = {
  [K in keyof typeof containerOptions]: (typeof containerOptions)[K][number];
} & {
  boxes: BoxStyles[];
  mainAxisVisible: boolean;
  crossAxisVisible: boolean;
};
