import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-[family-name:var(--font-body)] font-bold text-sm sm:text-lg text-black rounded-full border-2 border-black px-8 py-3 cursor-pointer transform transition-transform duration-150 ease-in-out active:scale-95 hover:shadow-[6px_6px_0px_#000] focus:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-yellow-100 shadow-[4px_4px_0px_#000]",
        secondary: "bg-white shadow-[4px_4px_0px_#B5E4FF]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  )
}

export default Button
