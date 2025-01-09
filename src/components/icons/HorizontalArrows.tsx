import clsx from "clsx";
export type HorizontalArrowsProps = {
  right: boolean;
  left: boolean;
  isMain: boolean;
};

export const HorizontalArrows = ({
  right,
  left,
  isMain,
}: HorizontalArrowsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.3"
    preserveAspectRatio="none"
    className={clsx("absolute inset-0 m-auto size-full h-1/2 opacity-50", {
      "text-red-500": isMain,
    })}
    strokeLinecap="round"
    strokeLinejoin="round"
    // Makes it dashed
    // stroke-dasharray="1 1"
  >
    <title>Horizontal Arrows</title>

    <path d="M0 12H24" />

    {right && <path d="M20 8L24 12L20 16" />}
    {left && <path d="M4 8L0 12L4 16" />}
  </svg>
);
