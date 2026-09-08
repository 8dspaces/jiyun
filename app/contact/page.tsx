"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { buttonVariants } from "@/components/ui/button";
import { contactItems } from "@/data/site";
import { getLocalizedText } from "@/lib/locale";

/**
 * 渲染联系我们页面，提供合作方向与联系信息入口。
 *
 * @returns 返回联系我们页面。
 */
export default function ContactPage(): React.JSX.Element {
  const { locale } = useLocale();

  return (
    <div className="bg-white pb-20 md:pb-24">
      <section className="border-b border-[#ececec] bg-[#f7f7f7]">
        <div className="container-shell py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#123e67]">
              Contact
            </p>
            <h1 className="text-balance text-[40px] font-semibold leading-tight text-[#222222] md:text-[60px]">
              {locale === "en"
                ? "Contact for Brand Partnerships, Product Customization, and Channel Cooperation"
                : "品牌合作、产品定制与渠道合作联系入口"}
            </h1>
            <p className="text-base leading-8 text-[#666666]">
              {locale === "en"
                ? "We welcome inquiries related to product development, cooperation projects, and business communication."
                : "欢迎围绕产品开发、合作项目与商务沟通需求建立联系。"}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-[#ececec] bg-[#fafafa] px-8 py-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#123e67]">
              Cooperation
            </p>
            <h2 className="mt-5 text-[32px] font-semibold leading-tight text-[#222222]">
              {locale === "en"
                ? "A communication entry point for brand cooperation, product development, and project coordination."
                : "面向品牌合作、产品开发与项目协同提供沟通入口。"}
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[#666666]">
              {locale === "en"
                ? "You can reach our team directly through the official phone number, email, and company address listed on this page."
                : "当前可直接通过页面中的正式电话、邮箱与公司地址建立商务沟通。"}
            </p>
            <Link
              href="/products"
              className={buttonVariants({
                className: "mt-8 inline-flex rounded-md bg-[#123e67] px-6 !text-white hover:bg-[#0f3354]",
              })}
            >
              {locale === "en" ? "View Product Center" : "查看产品中心"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5">
            {contactItems.map((item) => (
              <div
                key={getLocalizedText(item.label, locale)}
                className="border border-[#ececec] bg-white px-6 py-6"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#123e67]">
                  {getLocalizedText(item.label, locale)}
                </div>
                <div className="mt-3 text-[18px] leading-8 text-[#222222]">
                  {getLocalizedText(item.value, locale)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
