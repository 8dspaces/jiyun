import Link from "next/link";

import { footerGroups } from "@/data/site";

/**
 * 渲染站点底部信息，承载品牌说明与基础导航。
 *
 * @returns 返回官网底部组件。
 */
export function SiteFooter(): React.JSX.Element {
  return (
    <footer className="border-t border-[#173454] bg-[linear-gradient(180deg,#143554_0%,#0f2a45_100%)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 text-[13px] text-[#a8bfd8] lg:grid-cols-[1.15fr_1.85fr] lg:px-10">
        <div className="space-y-5">
          <p className="text-base font-semibold tracking-[0.16em] text-white">
            CUMULUS SMART HOME
          </p>
          <p className="max-w-xl leading-7">
            积云家居专注风处理与水处理相关家电设计研发，围绕品质制造、
            工业设计与客户化定制能力打造现代家电品牌形象。
          </p>
          <div className="space-y-2 text-[12px] leading-6 text-[#8faecc]">
            <p>广东顺德积云家居科技有限公司</p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#dcecff]">
                {group.title}
              </p>
              <div className="grid gap-3">
                {group.items.map((item) => (
                  <Link
                    key={`${group.title}-${item.label}`}
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#1d446b]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-[12px] text-[#89a7c5] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>@ 2016-2026 CUMULUS SMART HOME. All Rights Reserved.</p>
          <p>持续十年深耕家居科技与产品研发</p>
        </div>
      </div>
    </footer>
  );
}
