"use client";

import Image from "next/image";
import Link from "next/link";

import { useLocale } from "@/components/locale-provider";
import { buttonVariants } from "@/components/ui/button";
import { capabilities, companyProfile, statistics } from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";
import { getLocalizedText } from "@/lib/locale";

/**
 * 渲染关于我们页面，展示品牌背景、制造基础与核心能力。
 *
 * @returns 返回关于我们页面。
 */
export default function AboutPage(): React.JSX.Element {
  const { locale } = useLocale();

  return (
    <div className="bg-white pb-20 md:pb-24">
      <section className="relative overflow-hidden">
        <div className="relative min-h-[18rem] md:min-h-[22rem]">
          <Image
            src={getAssetPath("/images/brand/campus.jpeg")}
            alt={locale === "en" ? "CUMULUS campus banner" : "积云家居园区横幅"}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.76)_0%,rgba(20,20,20,0.38)_54%,rgba(20,20,20,0.12)_100%)]" />
          <div className="container-shell relative flex min-h-[18rem] items-center md:min-h-[22rem]">
            <div className="max-w-2xl space-y-4 text-white">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/72">
                About Cumulus
              </p>
              <h1 className="text-balance text-[40px] font-semibold leading-tight md:text-[60px]">
                {locale === "en"
                  ? "Company Strength and Partnership Foundation"
                  : "企业实力与合作基础"}
              </h1>
              <p className="text-base leading-8 text-white/80">
                {locale === "en"
                  ? "Built around design, manufacturing synergy, and custom development capability to support stable product partnerships."
                  : "围绕设计研发、制造协同与客户化开发能力，建立更稳定的产品合作支撑。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="container-shell grid gap-0 py-16 md:py-20 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative min-h-[24rem] overflow-hidden">
            <Image
              src={getAssetPath("/images/brand/campus.jpeg")}
              alt={locale === "en" ? "CUMULUS campus" : "积云家居园区图片"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
          <div className="flex items-center bg-white px-8 py-10 md:px-12">
            <div className="max-w-xl space-y-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#123e67]">
                {locale === "en" ? "Brand Profile" : "品牌介绍"}
              </p>
              <h2 className="text-balance text-[34px] font-semibold leading-tight text-[#222222] md:text-[46px]">
                {getLocalizedText(companyProfile.fullName, locale)}
              </h2>
              <p className="text-[15px] leading-8 text-[#666666]">
                {locale === "en"
                  ? `${getLocalizedText(companyProfile.introduction, locale)} CUMULUS continues to strengthen its R&D and delivery foundation around brand cooperation, product development, and supply chain coordination needs.`
                  : `${getLocalizedText(companyProfile.introduction, locale)}围绕品牌合作、产品开发与供应链协同需求，积云家居持续完善更稳定的研发与交付基础。`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16 md:py-20">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item) => (
            <article
              key={getLocalizedText(item.label, locale)}
              className="border border-[#ececec] bg-[#fafafa] px-6 py-6"
            >
              <p className="text-[30px] font-semibold text-[#222222]">
                {getLocalizedText(item.value, locale)}
              </p>
              <p className="mt-2 text-[13px] leading-6 text-[#7b7b7b]">
                {getLocalizedText(item.label, locale)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="container-shell py-16 md:py-20">
          <div className="max-w-3xl space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#123e67]">
              Core Capabilities
            </p>
            <h2 className="text-balance text-[34px] font-semibold text-[#222222] md:text-[46px]">
              {locale === "en"
                ? "Design, manufacturing synergy, and custom development capability advancing together."
                : "设计研发、制造协同与客户化开发能力并行推进。"}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={getLocalizedText(item.title, locale)}
                className="border border-[#ececec] bg-white px-8 py-8"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#123e67]">
                  {getLocalizedText(item.title, locale)}
                </p>
                <p className="mt-5 text-[24px] font-semibold leading-9 text-[#222222]">
                  {getLocalizedText(item.description, locale)}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className={buttonVariants({
                className: "rounded-md bg-[#123e67] px-6 !text-white hover:bg-[#0f3354]",
              })}
            >
              {locale === "en" ? "Start a Business Inquiry" : "发起合作沟通"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
