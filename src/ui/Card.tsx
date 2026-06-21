import type { ReactNode } from "react";

type CardVariant = "yap" | "pink" | "cyan" | "lime" | "lavender" | "peach" | "white";

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  yap: "bg-yap",
  pink: "bg-pink",
  cyan: "bg-cyan",
  lime: "bg-lime",
  lavender: "bg-lavender",
  peach: "bg-peach",
  white: "bg-white",
};

export default function Card({
  variant = "white",
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl border-3 border-ink p-6
        shadow-brutal hover-shadow-brutal
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
