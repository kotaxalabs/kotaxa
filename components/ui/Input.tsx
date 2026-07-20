import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3",
          "text-white placeholder:text-zinc-500",
          "outline-none transition-all duration-300",
          "focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
