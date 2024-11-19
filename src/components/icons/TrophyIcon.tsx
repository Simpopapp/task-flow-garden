import { SVGProps } from "react";

export const TrophyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 9H4.5C3.12 9 2 7.88 2 6.5S3.12 4 4.5 4H6" />
    <path d="M18 9h1.5c1.38 0 2.5-1.12 2.5-2.5S20.88 4 19.5 4H18" />
    <path d="M4 22h16" />
    <path d="M10 22v-4" />
    <path d="M14 22v-4" />
    <path d="M8 6h8v7c0 2.21-1.79 4-4 4s-4-1.79-4-4V6z" />
  </svg>
);