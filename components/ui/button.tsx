import Link from "next/link";
import clsx from "clsx";

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
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
        {
          "bg-violet-600 text-white hover:bg-violet-500":
            variant === "primary",

          "border border-white/10 bg-white/5 text-white hover:bg-white/10":
            variant === "secondary",

          "text-zinc-300 hover:text-white":
            variant === "ghost",
        },
        className
      )}
    >
      {children}
    </Link>
  );
}
