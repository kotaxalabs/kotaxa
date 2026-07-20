import { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({
  className,
  ...props
}: Props) {
  return (
    <label
      className={cn(
        "mb-2 block text-sm font-medium text-zinc-300",
        className
      )}
      {...props}
    />
  );
}
