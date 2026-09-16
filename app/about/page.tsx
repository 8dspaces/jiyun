"use client";

import Link from "next/link";

import { useLocale } from "@/components/locale-provider";
import { buttonVariants } from "@/components/ui/button";
import { capabilities, companyProfile, statistics } from "@/data/site";
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
      <section className="border-b border-[#ececec] bg-[#f7f7f7]">
        <div className="container-shell py-14 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="bg-[#123e67] px-8 py-10 text-white md:px-12 md:py-12">
              <div className="max-w-2xl space-y-4">
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
            <div className="grid gap-4">
              <article className="border border-[#ececec] bg-white px-8 py-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#123e67]">
                  {locale === "en" ? "Company Base" : "企业基础"}
                </p>
                <p className="mt-4 text-[18px] leading-8 text-[#444444]">
                  {locale === "en"
                    ? "Based in Shunde, CUMULUS continues to strengthen its R&D and delivery foundation around brand cooperation, product development, and supply chain coordination."
                    : "积云家居立足顺德，围绕品牌合作、产品开发与供应链协同，持续夯实研发与交付基础。"}
                </p>
              </article>
              <article className="border border-[#ececec] bg-white px-8 py-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#123e67]">
                  {locale === "en" ? "R&D Foundation" : "研发基础"}
                </p>
                <p className="mt-4 text-[18px] leading-8 text-[#444444]">
                  {locale === "en"
                    ? "Strengthening product definition, technical follow-up, and coordinated delivery to support longer-term brand cooperation."
                    : "持续强化产品定义、技术跟进与协同交付能力，支撑更长期的品牌合作。"}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="container-shell py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="bg-white px-8 py-10 md:px-12">
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
            <div className="grid gap-4">
              <article className="border border-[#ececec] bg-white px-8 py-8">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#123e67]">
                  {locale === "en" ? "Collaboration" : "合作支撑"}
                </p>
                <p className="mt-4 text-[18px] leading-8 text-[#444444]">
                  {locale === "en"
                    ? "Providing more stable support for brand cooperation, product development, and coordinated manufacturing execution."
                    : "为品牌合作、产品开发与制造协同执行提供更稳定的支撑基础。"}
                </p>
              </article>
              <article className="border border-[#ececec] bg-[#123e67] px-8 py-8 text-white">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/72">
                  {locale === "en" ? "Program Support" : "项目支撑"}
                </p>
                <p className="mt-4 text-[18px] leading-8 text-white/88">
                  {locale === "en"
                    ? "Keeping cooperation needs aligned across design, development, and manufacturing so product programs can move forward more steadily."
                    : "围绕设计、研发与制造协同持续对齐合作需求，推动产品项目更稳定地向前推进。"}
                </p>
              </article>
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
