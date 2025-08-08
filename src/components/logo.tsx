import { cn } from "@/lib/utils";
import React from "react";

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM7.5 5C5.52 5 4 6.52 4 8.5c0 2.73 2.61 5.17 7 8.88l1 1.09.01-.01L13 17.38c4.39-3.71 7-6.15 7-8.88 0-1.98-1.52-3.5-3.5-3.5-1.49 0-2.85.9-3.5 2.22h-1c-.65-1.32-2.01-2.22-3.5-2.22z"/>
    </svg>
  );
}
