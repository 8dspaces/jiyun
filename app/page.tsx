"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { buttonVariants } from "@/components/ui/button";
import {
  capabilities,
  companyProfile,
  homeSlides,
  statistics,
} from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";
import { getLocalizedText } from "@/lib/locale";

/**
 * 渲染官网首页，采用更接近企业集团官网的横幅加分区结构。
 *
 * @returns 返回首页页面。
 */
export default function HomePage(): React.JSX.Element {
  const { locale } = useLocale();
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) =>
        (currentIndex + 1) % homeSlides.length,
      );
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  /**
   * 按索引切换首页主视觉。
   *
   * @param slideIndex 目标轮播索引。
   */
  const handleSelectSlide = (slideIndex: number): void => {
    setActiveSlideIndex(slideIndex);
  };

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div className="relative min-h-[28rem] md:min-h-[32rem]">
          {homeSlides.map((slide, index) => (
            <Image
              key={slide.image}
              src={getAssetPath(slide.image)}
              alt={getLocalizedText(slide.alt, locale)}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`pointer-events-none object-cover transition-opacity duration-700 ${
                index === activeSlideIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.78)_0%,rgba(20,20,20,0.55)_38%,rgba(20,20,20,0.16)_72%,rgba(20,20,20,0.05)_100%)]" />
          <div className="container-shell relative z-10 flex min-h-[28rem] items-center py-8 md:min-h-[32rem] md:py-10">
            <div className="max-w-2xl space-y-4 text-white">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/70">
                {companyProfile.englishName}
              </p>
              <h3 className="max-w-4xl text-balance text-[26px] font-semibold leading-[1.08] tracking-tight md:text-[34px]">
                {getLocalizedText(companyProfile.heroTitle, locale)}
              </h3>
              <p className="max-w-xl text-[14px] leading-6 text-white/76 md:text-[15px]">
                {locale === "en"
                  ? "Focused on design, development, and coordinated delivery for home appliance programs."
                  : "专注家电产品的设计研发与协同交付。"}
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/about"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "rounded-md bg-[#123e67] px-7 text-white hover:bg-[#0f3354]",
                  })}
                >
                  {locale === "en"
                    ? "Explore Company Strength"
                    : "了解企业实力"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className={buttonVariants({
                    size: "lg",
                    variant: "secondary",
                    className:
                      "rounded-md border border-white/28 bg-white/10 px-7 text-white hover:border-white hover:bg-white/16 hover:text-white",
                  })}
                >
                  {locale === "en" ? "View Product Center" : "查看产品中心"}
                </Link>
              </div>
            </div>
          </div>
          <div className="container-shell relative z-10 pb-4 md:pb-5">
            <div className="flex items-center justify-center gap-2">
              {homeSlides.map((slide, index) => {
                const isActive = index === activeSlideIndex;

                return (
                  <button
                    key={`hero-slide-dot-${slide.image}`}
                    type="button"
                    onClick={() => handleSelectSlide(index)}
                    className={`rounded-full transition-all ${
                      isActive
                        ? "h-2.5 w-2.5 bg-[#c8192e]"
                        : "h-2 w-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={
                      locale === "en"
                        ? `Switch to slide ${index + 1}`
                        : `切换到第 ${index + 1} 张轮播图`
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ececec] bg-white">
        <div className="container-shell grid gap-4 py-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 xl:py-10">
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

      <section className="bg-[#f7f7f7]">
        <div className="container-shell py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="bg-white px-8 py-10 md:px-12">
              <div className="max-w-2xl space-y-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#123e67]">
                  {locale === "en" ? "Brand Profile" : "品牌介绍"}
                </p>
                <h2 className="text-balance text-[34px] font-semibold leading-tight text-[#222222] md:text-[46px]">
                  {locale === "en"
                    ? "Focused on air treatment and related home appliance design and development."
                    : "专注风处理与水处理相关家电设计研发。"}
                </h2>
                <p className="text-[15px] leading-8 text-[#666666]">
                  {locale === "en"
                    ? `${getLocalizedText(companyProfile.fullName, locale)} is based in Shunde, building stable support for brand cooperation and product programs through design, R&D, manufacturing synergy, and custom development capability.`
                    : `${getLocalizedText(companyProfile.fullName, locale)}立足广东顺德，围绕设计研发、制造协同与客户化开发能力，为品牌合作与产品项目提供稳定支撑。`}
                </p>
                <div className="grid gap-4 border-t border-[#ededed] pt-5 sm:grid-cols-2">
                  <div className="border border-[#ececec] bg-[#fafafa] px-5 py-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#123e67]">
                      {locale === "en" ? "Location" : "区域基础"}
                    </p>
                    <p className="mt-3 text-[17px] leading-8 text-[#444444]">
                      {locale === "en"
                        ? "Based in Shunde with a stable foundation for product collaboration and long-term project delivery."
                        : "立足顺德，具备稳定的产品协作与长期项目交付基础。"}
                    </p>
                  </div>
                  <div className="border border-[#ececec] bg-[#fafafa] px-5 py-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#123e67]">
                      {locale === "en" ? "Execution" : "执行能力"}
                    </p>
                    <p className="mt-3 text-[17px] leading-8 text-[#444444]">
                      {locale === "en"
                        ? "Supporting brand programs through coordinated design, development, and manufacturing resources."
                        : "通过设计、研发与制造协同资源，为品牌项目提供持续支撑。"}
                    </p>
                  </div>
                </div>
                <Link
                  href="/about"
                  className={buttonVariants({
                    variant: "secondary",
                    className:
                      "mt-2 inline-flex rounded-md border-[#d9d9d9] px-6 text-[#222222] hover:border-[#123e67] hover:text-[#123e67]",
                  })}
                >
                  {locale === "en" ? "MORE" : "更多"}
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <article className="bg-[#123e67] px-8 py-8 text-white md:px-10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/70">
                  {locale === "en" ? "Partnership Focus" : "合作方向"}
                </p>
                <p className="mt-4 text-[22px] font-semibold leading-9 md:text-[28px]">
                  {locale === "en"
                    ? "Brand cooperation, product programs, and custom development with a cleaner, more direct presentation."
                    : "围绕品牌合作、产品项目与客户化开发，提供稳定高效的合作支撑。"}
                </p>
              </article>
              <article className="border border-[#ececec] bg-white px-8 py-8 md:px-10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#123e67]">
                  {locale === "en" ? "Support Base" : "合作基础"}
                </p>
                <p className="mt-4 text-[18px] leading-8 text-[#444444]">
                  {locale === "en"
                    ? "A stronger coordination base across design, development, and supply resources keeps product programs moving with clearer execution."
                    : "围绕设计、研发与供应资源协同，形成更清晰稳定的产品项目执行基础。"}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="container-shell py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="bg-white px-8 py-10 md:px-12">
              <div className="max-w-xl space-y-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#123e67]">
                  {locale === "en" ? "Core Strengths" : "核心优势"}
                </p>
                <h2 className="text-balance text-[34px] font-semibold leading-tight text-[#222222] md:text-[46px]">
                  {locale === "en"
                    ? "Design, manufacturing synergy, and custom development moving in parallel."
                    : "设计研发、制造协同与客户化开发并行推进。"}
                </h2>
                <div className="grid gap-4">
                  {capabilities.map((item) => (
                    <div
                      key={getLocalizedText(item.title, locale)}
                      className="border-b border-[#ededed] pb-4 last:border-b-0"
                    >
                      <p className="text-[12px] uppercase tracking-[0.2em] text-[#123e67]">
                        {getLocalizedText(item.title, locale)}
                      </p>
                      <p className="mt-2 text-[17px] leading-8 text-[#444444]">
                        {getLocalizedText(item.description, locale)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <article className="border border-[#ececec] bg-white px-8 py-8 md:px-10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#123e67]">
                  {locale === "en" ? "Service Scope" : "服务范围"}
                </p>
                <p className="mt-4 text-[22px] font-semibold leading-9 text-[#222222] md:text-[28px]">
                  {locale === "en"
                    ? "Supporting product definition, design execution, manufacturing coordination, and project delivery in one line."
                    : "覆盖产品定义、设计执行、制造协同与项目交付的一体化协作链路。"}
                </p>
              </article>
              <article className="border border-[#ececec] bg-[#123e67] px-8 py-8 text-white md:px-10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/72">
                  {locale === "en" ? "Project Delivery" : "项目交付"}
                </p>
                <p className="mt-4 text-[18px] leading-8 text-white/88">
                  {locale === "en"
                    ? "From product definition to coordinated manufacturing follow-through, CUMULUS keeps delivery progress visible and collaboration links tighter."
                    : "从产品定义到制造协同落地，积云家居持续保持更清晰的交付节奏与更紧密的协作链路。"}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
