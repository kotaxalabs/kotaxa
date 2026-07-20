import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type LinkButtonProps = BaseProps & {
  href: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href">;

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-violet-500/30",
    {
      "bg-violet-600 text-white hover:bg-violet-500":
        variant === "primary",

      "border border-white/15 bg-white/5 text-white hover:bg-white/10":
        variant === "secondary",

      "text-zinc-300 hover:text-white hover:bg-white/5":
        variant === "ghost",
    },
    className
  );

  if ("href" in props && props.href) {
    const { href } = props;

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={classes}
    >
      {children}
    </button>
  );
}
