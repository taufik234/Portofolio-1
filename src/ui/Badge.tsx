import type { ReactNode } from "react";

type BadgeVariant = "yap" | "pink" | "cyan" | "lime" | "lavender" | "peach";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  yap: "bg-yap",
  pink: "bg-pink",
  cyan: "bg-cyan",
  lime: "bg-lime",
  lavender: "bg-lavender",
  peach: "bg-peach",
};

export default function Badge({
  variant = "yap",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-block px-3 py-1 rounded-lg
        border-2 border-ink font-semibold text-sm text-ink
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
