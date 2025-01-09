import { atom } from "jotai";

export const defaultContainer: ContainerStyles = {
  flex: "flex-row",
  justify: "justify-start",
  align: "items-end",
  // boxes: [
  //   {
  //     align: "self-auto",
  //   },
  //   {
  //     align: "self-auto",
  //   },
  //   {
  //     align: "self-auto",
  //   },
  // ],
};

export const containerOptions = {
  flex: ["flex-row", "flex-col", "flex-row-reverse", "flex-col-reverse"], // https://tailwindcss.com/docs/flex-direction
  justify: [
    "justify-start",
    "justify-end",
    "justify-center",
    "justify-between",
    "justify-around",
    "justify-evenly",
  ], // https://tailwindcss.com/docs/justify-content
  align: ["items-start", "items-end", "items-center", "items-baseline"], // https://tailwindcss.com/docs/align-content
} as const;

export const boxOptions = {
  align: ["self-auto", "self-start", "self-end", "self-center"], // https://tailwindcss.com/docs/align-self
} as const;

export type BoxStyles = {
  [K in keyof typeof boxOptions]: (typeof boxOptions)[K][number];
};

// Derive the type from the value
export type ContainerStyles = {
  [K in keyof typeof containerOptions]: (typeof containerOptions)[K][number];
};
// & {
//   boxes: BoxStyles[];
// };

export const colorMapping = {
  0: "bg-green-400 hover:bg-green-600",
  1: "bg-red-400",
  2: "bg-blue-400",
};

export const boxesAtom = atom<BoxStyles[]>([
  {
    align: "self-auto",
  },
  {
    align: "self-auto",
  },
  {
    align: "self-auto",
  },
]);
