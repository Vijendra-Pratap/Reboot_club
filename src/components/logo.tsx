import { cn } from "@/lib/utils";
import React from "react";

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 15.5C12.5 14.5 14.5 14.5 16 15.5L22 20L16 22L11.5 19.5" />
      <path d="M13 8.5C11.5 9.5 9.5 9.5 8 8.5L2 4L8 2L12.5 4.5" />
      <path d="M16 15.5L13 8.5" />
      <path d="M13 8.5C14.5 7.5 16.5 7.5 18 8.5L22 12L18 14L13 11.5" />
      <path d="M2 8L8 11L13 8.5" />
    </svg>
  );
}