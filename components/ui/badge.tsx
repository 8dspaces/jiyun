import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * 提供品牌风格的小标签组件。
 *
 * @param className 自定义类名。
 * @param props 原生 div 属性。
 * @returns 返回标签组件。
 */
export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface-strong)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent-strong)]",
        className,
      )}
      {...props}
    />
  );
}
