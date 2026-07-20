import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-violet-600 text-white hover:bg-violet-500",
        variant === "secondary" &&
          "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        variant === "ghost" &&
          "text-zinc-300 hover:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}
