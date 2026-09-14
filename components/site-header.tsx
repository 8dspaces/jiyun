"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-[70] isolate border-b border-[#ececec] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-4 sm:px-6 md:gap-6 md:py-5 lg:px-10">
        <div className="min-w-0">
          <div className="md:hidden">
            <SiteLogo compact />
          </div>
          <div className="hidden md:block">
            <SiteLogo />
          </div>
        </div>
        <nav className="hidden items-center justify-center gap-12 md:flex">
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
        <div className="flex items-center justify-self-end gap-2 md:gap-4">
          <Link
            href="/contact"
            className={buttonVariants({
              className:
                "hidden min-w-[11.5rem] justify-center rounded-full bg-[#123e67] px-5 !text-white hover:bg-[#0f3354] hover:!text-white md:inline-flex",
            })}
          >
            {locale === "en" ? "Business Cooperation" : "商务合作"}
          </Link>
          <div className="grid h-9 w-[5.25rem] grid-cols-2 rounded-full border border-[#dce4eb] bg-[#f7f9fb] p-1 md:w-[5.5rem]">
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
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((currentState) => !currentState)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dce4eb] text-[#123e67] transition-colors hover:bg-[#f7f9fb] md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={locale === "en" ? "Toggle navigation menu" : "切换导航菜单"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div className="border-t border-[#ececec] bg-white shadow-[0_18px_40px_rgba(15,51,84,0.08)] md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl border px-4 py-3 text-[14px] font-medium transition-colors ${
                    isActive
                      ? "border-[#123e67] bg-[#123e67] text-white"
                      : "border-[#e6ecf1] bg-[#fafbfd] text-[#3f4d5b]"
                  }`}
                >
                  {getLocalizedText(item.label, locale)}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={buttonVariants({
                className:
                  "mt-2 inline-flex w-full justify-center rounded-full bg-[#123e67] !text-white hover:bg-[#0f3354] hover:!text-white",
              })}
            >
              {locale === "en" ? "Business Cooperation" : "商务合作"}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
