import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="px-4 py-2 rounded-md border border-gray-300 w-full outline-none focus:ring-2 focus:ring-orange-400"
      {...props}
    />
  );
}
