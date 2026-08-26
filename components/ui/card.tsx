import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * 提供统一卡片容器样式。
 *
 * @param className 自定义类名。
 * @param props 原生 div 属性。
 * @returns 返回卡片容器。
 */
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <div
      className={cn(
        "rounded-[1rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_16px_40px_rgba(117,154,194,0.08)]",
        className,
      )}
      {...props}
    />
  );
}

/**
 * 提供卡片头部布局。
 *
 * @param className 自定义类名。
 * @param props 原生 div 属性。
 * @returns 返回卡片头部。
 */
export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return <div className={cn("space-y-2.5 p-6", className)} {...props} />;
}

/**
 * 提供卡片标题样式。
 *
 * @param className 自定义类名。
 * @param props 原生标题属性。
 * @returns 返回卡片标题。
 */
export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element {
  return (
    <h3
      className={cn("text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

/**
 * 提供卡片描述文本样式。
 *
 * @param className 自定义类名。
 * @param props 原生段落属性。
 * @returns 返回卡片描述。
 */
export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element {
  return (
    <p
      className={cn("text-sm leading-7 text-[color:var(--color-muted)]", className)}
      {...props}
    />
  );
}

/**
 * 提供卡片主体布局。
 *
 * @param className 自定义类名。
 * @param props 原生 div 属性。
 * @returns 返回卡片主体。
 */
export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}
