import { cn } from "@/lib/utils";
import React from "react";

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11.726 3.233c.532-1.63 2.012-2.31 3.524-1.222 1.512 1.088 1.63 3.24-.273 4.65-1.355 1.41-3.538 1.62-4.894.272" />
      <path d="M12.274 3.233c-.532-1.63-2.012-2.31-3.524-1.222-1.512 1.088-1.63 3.24-.273 4.65 1.355 1.41 3.538 1.62 4.894.272" />
      <path d="M14.5 10.5c-2.321 1.044-4.68 1.044-7 0" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}