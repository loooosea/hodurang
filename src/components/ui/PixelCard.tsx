"use client";

import { type ReactNode } from "react";

type PixelCardVariant = "default" | "primary" | "dark";

interface PixelCardProps {
  children: ReactNode;
  variant?: PixelCardVariant;
  className?: string;
  hover?: boolean;
}

const variantStyles: Record<PixelCardVariant, string> = {
  default:
    "bg-white border-3 border-dark shadow-[4px_4px_0_#D4A574]",
  primary:
    "bg-orange-50 border-3 border-dark shadow-[4px_4px_0_#FF6B35]",
  dark:
    "bg-dark text-white border-3 border-dark-light shadow-[4px_4px_0_#D4A574]",
};

export default function PixelCard({
  children,
  variant = "default",
  className = "",
  hover = false,
}: PixelCardProps) {
  return (
    <div
      className={`
        ${variantStyles[variant]}
        rounded-none p-6
        ${hover ? "pixel-transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#D4A574] cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
