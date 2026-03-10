import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "cream" | "white" | "dark" | "orange";
}

const bgStyles = {
  cream: "bg-warm-50",
  white: "bg-white",
  dark: "bg-dark text-white",
  orange: "bg-gradient-to-br from-orange-400 to-orange-500 text-white",
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  background = "cream",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`
        relative w-full
        py-16 md:py-24 lg:py-32
        px-4 sm:px-6 lg:px-8
        ${bgStyles[background]}
        ${className}
      `}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
