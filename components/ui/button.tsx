import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[13px] font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--color-accent)] px-5 py-3 text-white shadow-none hover:bg-[color:var(--color-accent-strong)]",
        secondary:
          "border border-[color:var(--color-border)] bg-white px-5 py-3 text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]",
        ghost:
          "px-4 py-2 text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)]",
      },
      size: {
        default: "h-10",
        lg: "h-11 px-6 text-sm",
        sm: "h-8 px-3 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * 提供统一视觉规范的按钮组件。
 *
 * @param className 自定义类名。
 * @param variant 按钮视觉变体。
 * @param size 按钮尺寸。
 * @param props 透传按钮原生属性。
 * @returns 返回按钮组件。
 */
export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
