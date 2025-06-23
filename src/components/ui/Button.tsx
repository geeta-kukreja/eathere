import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-md px-4 py-2 font-medium transition-all duration-150",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
