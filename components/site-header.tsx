import Link from "next/link";

import { SiteLogo } from "@/components/site-logo";
import { buttonVariants } from "@/components/ui/button";
import { navigationItems } from "@/data/site";

/**
 * 渲染站点顶部导航，统一承载品牌入口与主导航链接。
 *
 * @returns 返回官网头部组件。
 */
export function SiteHeader(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-40 border-b border-[#cfe2f3] bg-[linear-gradient(180deg,#edf7ff_0%,#e4f1fc_100%)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <SiteLogo />
        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-[#52708e] transition-colors hover:text-[#1d5f91]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={buttonVariants({
            className:
              "inline-flex bg-[#0000ff] font-bold text-white shadow-[0_10px_24px_rgba(0,0,255,0.24)] hover:bg-[#0000e6]",
          })}
        >
          商务咨询
        </Link>
      </div>
    </header>
  );
}
