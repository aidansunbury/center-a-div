// Based on https://lucide.dev/icons/move-right, but no padding

export const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
    preserveAspectRatio="none"
    className="absolute inset-0 m-auto w-full w-full text-green-500 opacity-50"
    stroke-linecap="round"
    stroke-linejoin="round"
    // Makes it dashed
    // stroke-dasharray="1 1"
  >
    <title>Right Arrow</title>
    {/* <path d="M20 8L24 12L20 16" />
    <path d="M0 12H22" /> */}
    <path d="M20 8L24 12L20 16" />
    <path d="M4 8L0 12L4 16" />

    <path d="M0 12H24" />
  </svg>
);
