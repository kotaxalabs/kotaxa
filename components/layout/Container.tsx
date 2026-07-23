import { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1100px] px-8 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
