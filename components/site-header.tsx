"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLocale } from "@/components/locale-provider";
import { SiteLogo } from "@/components/site-logo";
import { buttonVariants } from "@/components/ui/button";
import { navigationItems } from "@/data/site";
import { getLocalizedText } from "@/lib/locale";

/**
 * 渲染站点顶部导航，统一为更正式的企业官网头部样式。
 *
 * @returns 返回官网头部组件。
 */
export function SiteHeader(): React.JSX.Element {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-[#ececec] bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-5 lg:px-10">
        <SiteLogo />
        <nav className="hidden items-center gap-12 md:flex">
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-3 text-[15px] transition-colors ${
                  isActive
                    ? "text-[#123e67] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#123e67] after:content-['']"
                    : "text-[#585858] hover:text-[#123e67]"
                }`}
              >
                {getLocalizedText(item.label, locale)}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-[5.5rem] grid-cols-2 rounded-full border border-[#dce4eb] bg-[#f7f9fb] p-1">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`inline-flex items-center justify-center rounded-full text-[12px] font-medium transition-colors ${
                locale === "en"
                  ? "bg-[#123e67] text-white"
                  : "text-[#5d6b79] hover:text-[#123e67]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("zh")}
              className={`inline-flex items-center justify-center rounded-full text-[12px] font-medium transition-colors ${
                locale === "zh"
                  ? "bg-[#123e67] text-white"
                  : "text-[#5d6b79] hover:text-[#123e67]"
              }`}
            >
              中
            </button>
          </div>
          <Link
            href="/contact"
            className={buttonVariants({
              className:
                "inline-flex min-w-[11.5rem] justify-center rounded-full bg-[#123e67] px-5 !text-white hover:bg-[#0f3354] hover:!text-white",
            })}
          >
            {locale === "en" ? "Business Cooperation" : "商务合作"}
          </Link>
        </div>
      </div>
    </header>
  );
}
