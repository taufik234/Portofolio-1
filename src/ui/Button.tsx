import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "yap" | "pink" | "cyan" | "lime" | "lavender" | "peach" | "white";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  yap: "bg-yap",
  pink: "bg-pink",
  cyan: "bg-cyan",
  lime: "bg-lime",
  lavender: "bg-lavender",
  peach: "bg-peach",
  white: "bg-white",
};

export default function Button({
  variant = "yap",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-xl
        border-3 border-ink font-semibold text-ink
        shadow-brutal hover-shadow-brutal cursor-pointer
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
