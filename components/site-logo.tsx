import Link from "next/link";

import { cn } from "@/lib/utils";

interface SiteLogoProps {
  compact?: boolean;
  className?: string;
}

/**
 * 渲染站点品牌标识，以图形化字标方式展示英文名与中文名。
 *
 * @param compact 是否使用紧凑模式。
 * @param className 自定义类名。
 * @returns 返回站点 Logo 组件。
 */
export function SiteLogo({
  compact = false,
  className,
}: SiteLogoProps): React.JSX.Element {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3.5", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-[1rem] border border-[#7cb4db] bg-[linear-gradient(135deg,#0f6ba8_0%,#2093dd_58%,#8bd2ff_100%)] shadow-[0_12px_28px_rgba(53,130,190,0.32)]",
          compact ? "h-12 w-12" : "h-14 w-14",
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.32),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(7,31,53,0.18))]" />
        <div className="relative text-[24px] font-semibold tracking-[0.08em] text-white">
          C
        </div>
        <div className="absolute bottom-2.5 right-2.5 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.18)]" />
      </div>
      <div className="space-y-0.5">
        <div
          className={cn(
            "font-bold tracking-[0.2em] text-[#123e67]",
            compact ? "text-[15px]" : "text-[18px]",
          )}
        >
          CUMULUS
        </div>
        <div
          className={cn(
            "font-medium text-[#476b89]",
            compact ? "text-[11px]" : "text-[13px]",
          )}
        >
          积云家居科技
        </div>
      </div>
    </Link>
  );
}
