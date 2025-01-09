import type { ContainerStyles } from "@/lib/constants";
import { atomWithImmer } from "jotai-immer";

export const containerAtom = atomWithImmer<ContainerStyles>({
  flex: "flex-row",
  justify: "justify-start",
  align: "items-center",
  boxes: [
    {
      align: "self-auto",
    },
    {
      align: "self-auto",
    },
    {
      align: "self-auto",
    },
  ],
  mainAxisVisible: true,
  crossAxisVisible: true,
});
