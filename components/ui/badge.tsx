import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-300",
        className
      )}
    >
      {children}
    </span>
  );
}
