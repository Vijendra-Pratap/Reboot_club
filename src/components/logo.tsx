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
      <path d="M12 2L4.5 5.5v6.5c0 4.97 3.03 9.42 7.5 10.5 4.47-1.08 7.5-5.53 7.5-10.5V5.5L12 2zm0 17.5c-3.14-1-5.5-4.43-5.5-8.5V7.2l5.5-2.5 5.5 2.5v4.3c0 4.07-2.36 7.5-5.5 8.5zM11 14h2v-3h3v-2h-3V6h-2v3H8v2h3v3z" />
    </svg>
  );
}
