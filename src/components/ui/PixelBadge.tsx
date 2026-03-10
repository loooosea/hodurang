"use client";

import { type ReactNode } from "react";

interface PixelBadgeProps {
  children: ReactNode;
  variant?: "default" | "orange" | "dark";
  className?: string;
}

const variantStyles = {
  default: "bg-warm-100 text-warm-600 border-warm-400",
  orange: "bg-orange-50 text-orange-500 border-orange-400",
  dark: "bg-dark text-white border-dark-light",
};

export default function PixelBadge({
  children,
  variant = "default",
  className = "",
}: PixelBadgeProps) {
  return (
    <span
      className={`
        inline-block px-3 py-1
        text-xs font-bold uppercase tracking-wider
        border-2 rounded-none
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
