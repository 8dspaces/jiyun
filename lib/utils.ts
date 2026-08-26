import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并 Tailwind 与条件类名，统一处理组件样式拼接。
 *
 * @param inputs 需要合并的类名数组。
 * @returns 返回去重并合并后的类名字符串。
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
