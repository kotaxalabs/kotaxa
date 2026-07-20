import { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className,
  ...props
}: Props) {
  return (
    <textarea
      className={cn(
        "min-h-[160px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3",
        "text-white placeholder:text-zinc-500",
        "outline-none transition focus:border-violet-500",
        className
      )}
      {...props}
    />
  );
}
