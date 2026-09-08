"use client";

import Image from "next/image";
import Link from "next/link";

import { useLocale } from "@/components/locale-provider";
import { getAssetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  compact?: boolean;
  className?: string;
}

/**
 * 渲染站点品牌标识，使用企业 Logo 图片与中英文品牌字标组合。
 *
 * @param compact 是否使用紧凑模式。
 * @param className 自定义类名。
 * @returns 返回站点 Logo 组件。
 */
export function SiteLogo({
  compact = false,
  className,
}: SiteLogoProps): React.JSX.Element {
  const { locale } = useLocale();

  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative shrink-0 overflow-hidden",
          compact ? "h-10 w-10" : "h-12 w-12",
        )}
      >
        <Image
          src={getAssetPath("/images/logo.png")}
          alt={locale === "en" ? "CUMULUS logo" : "积云家居科技 Logo"}
          fill
          className="object-contain"
          sizes="48px"
          priority
        />
      </div>
      <div className="space-y-0.5">
        <div
          className={cn(
            "font-semibold tracking-[0.2em] text-[#123e67]",
            compact ? "text-[13px]" : "text-[17px]",
          )}
        >
          CUMULUS
        </div>
        <div
          className={cn(
            "font-medium text-[#3f3f46]",
            compact ? "text-[10px]" : "text-[12px]",
          )}
        >
          {locale === "en" ? "SMART HOME APPLIANCE" : "积云家居科技"}
        </div>
      </div>
    </Link>
  );
}
