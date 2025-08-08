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
      <defs>
        <linearGradient id="god-hand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
      </defs>
      
      <path d="M11 15.5C12.5 14.5 14.5 14.5 16 15.5L22 20L16 22L11.5 19.5" fill="hsl(var(--secondary))" stroke="hsl(var(--secondary-foreground))" />
      <path d="M11 15.5L16 15.5" stroke="hsl(var(--secondary-foreground))" strokeWidth="1" />

      <path d="M13 8.5C11.5 9.5 9.5 9.5 8 8.5L2 4L8 2L12.5 4.5" 
        fill="url(#god-hand-gradient)" 
        stroke="hsl(var(--primary-foreground))"
        filter="url(#glow)"
      />
      
      <path d="M13 8.5L8 8.5" stroke="hsl(var(--primary-foreground))" strokeWidth="1" />

      <path d="M16 15.5L13 8.5" stroke="currentColor" />
    </svg>
  );
}
