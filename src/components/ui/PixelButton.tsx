"use client";

import { type ReactNode } from "react";
import Link from "next/link";

type PixelButtonVariant = "primary" | "secondary" | "dark";
type PixelButtonSize = "sm" | "md" | "lg";

interface PixelButtonProps {
  children: ReactNode;
  variant?: PixelButtonVariant;
  size?: PixelButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<PixelButtonVariant, string> = {
  primary:
    "bg-orange-400 text-white border-3 border-dark shadow-[4px_4px_0_#2D2D2D] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none",
  secondary:
    "bg-white text-dark border-3 border-dark shadow-[4px_4px_0_#D4A574] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none",
  dark:
    "bg-dark text-white border-3 border-dark-light shadow-[4px_4px_0_#D4A574] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none",
};

const sizeStyles: Record<PixelButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function PixelButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
}: PixelButtonProps) {
  const baseClass = `
    inline-flex items-center justify-center gap-2
    font-bold rounded-none
    pixel-transition active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
