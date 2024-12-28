export const defaultContainer: ContainerStyles = {
  flex: "flex-row",
  justify: "justify-start",
  align: "items-end",
};

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
  align: ["items-start", "items-end", "items-center", "items-baseline"],
} as const;

// Derive the type from the value
export type ContainerStyles = {
  [K in keyof typeof containerOptions]: (typeof containerOptions)[K][number];
};
