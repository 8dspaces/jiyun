import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Sparkles } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SeriesCard } from "@/components/series-card";
import { buttonVariants } from "@/components/ui/button";
import {
  capabilities,
  companyProfile,
  featuredProducts,
  seriesItems,
  statistics,
} from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";

/**
 * 渲染官网首页，集中展示品牌定位、能力与重点产品矩阵。
 *
 * @returns 返回首页页面。
 */
export default function HomePage(): React.JSX.Element {
  return (
    <div className="pb-24">
      <section className="w-full pb-10 pt-0">
        <div className="relative w-full overflow-hidden bg-[#1f4e73] shadow-[0_22px_60px_rgba(46,100,150,0.2)]">
          <div className="absolute inset-0">
            <Image
              src={getAssetPath("/images/brand/jiyun_01.png")}
              alt="积云家居品牌主视觉"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,30,47,0.62)_0%,rgba(11,30,47,0.28)_42%,rgba(11,30,47,0.08)_100%)]" />
          <div className="container-shell relative grid min-h-[34rem] gap-8 px-6 py-10 md:min-h-[40rem] md:px-10 md:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:px-14 lg:py-14">
            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-[#d8efff]">
                <Sparkles className="h-4 w-4" />
                Cumulus Visual Highlight
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-[#cfe9fb]">
                  {companyProfile.englishName}
                </p>
                <h1 className="max-w-3xl text-balance text-[36px] font-semibold leading-tight tracking-tight text-white md:text-[58px]">
                  {companyProfile.heroTitle}
                </h1>
                <p className="max-w-xl text-sm leading-7 text-[#dceeff] md:text-base">
                  {companyProfile.heroDescription}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/products"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "bg-[#0d72b9] font-bold text-white shadow-[0_14px_34px_rgba(13,114,185,0.38)] hover:bg-[#0a639f]",
                  })}
                >
                  查看产品中心
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                    className:
                      "border-[#0d72b9] bg-[#1787d6] font-bold text-white hover:bg-[#0f78bf]",
                  })}
                >
                  了解企业实力
                </Link>
              </div>
            </div>
            <div className="relative z-10 flex items-end justify-end">
              {/* <div className="relative h-[20rem] w-full max-w-[32rem] md:h-[24rem] lg:h-[30rem]">
                <Image
                  src="/images/products/fan-flagship.png"
                  alt="积云家居旗舰风扇主视觉"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(8,21,39,0.36)]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-16 pb-24 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-5">
            <h2 className="max-w-4xl text-balance text-[30px] font-semibold leading-tight tracking-tight md:text-[42px]">
              积云家居科技，专注风处理与水处理相关家电设计研发。
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[color:var(--color-foreground-soft)]">
              依托广东顺德制造优势、资深设计研发团队与成熟供应链体系，
              积云家居持续打造兼具效率、品质与美感的现代家电产品方案。
            </p>
            <p className="max-w-2xl text-sm leading-7 text-[color:var(--color-muted)]">
              {companyProfile.introduction}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statistics.map((item) => (
              <div
                key={item.label}
                className="rounded-[0.9rem] border border-[color:var(--color-border)] bg-white p-5"
              >
                <p className="text-2xl font-semibold text-[color:var(--color-foreground)]">
                  {item.value}
                </p>
                <p className="mt-3 text-[13px] leading-6 text-[color:var(--color-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[1.25rem] bg-[radial-gradient(circle_at_top,rgba(167,215,245,0.26),transparent_56%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.1rem] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,#ffffff,#eef6ff)] shadow-[0_20px_50px_rgba(117,154,194,0.12)]">
            <div className="relative aspect-[9/10]">
              <Image
                src={getAssetPath("/images/products/fan-flagship.png")}
                alt="积云家居旗舰风扇"
                fill
                className="object-contain p-4"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="grid gap-4 border-t border-[color:var(--color-border)] p-6 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-strong)]">
                  Featured Product
                </p>
                <p className="mt-3 text-base font-semibold text-[color:var(--color-foreground)]">
                  蓄电旗舰风扇
                </p>
                <p className="mt-2 text-[13px] leading-6 text-[color:var(--color-muted)]">
                  将风量、蓄电与模块快接能力组合在一台旗舰单品中。
                </p>
              </div>
              <div className="space-y-3 text-[13px] text-[color:var(--color-foreground-soft)]">
                <div>9 档风速</div>
                <div>4-8 小时续航</div>
                <div>模块快接扩展</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading
          eyebrow="About Cumulus"
          title="以工业设计审美，承接家电研发与制造协同。"
          description={companyProfile.introduction}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-[1rem] border border-[color:var(--color-border)] bg-white">
            <div className="relative aspect-[16/9]">
              <Image
                src={getAssetPath("/images/brand/campus.jpeg")}
                alt="积云家居园区实景"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
          <div className="rounded-[1rem] border border-[color:var(--color-border)] bg-white p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-strong)]">
              Core Values
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {companyProfile.values.map((value) => (
                <span
                  key={value}
                  className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] px-4 py-2 text-[13px] text-[color:var(--color-foreground-soft)]"
                >
                  {value}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-6">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-[color:var(--color-border)] pt-6 first:border-t-0 first:pt-0"
                >
                  <h3 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading
          eyebrow="Product Matrix"
          title="围绕核心风处理技术，逐步延展智能清洁、厨房、健康与睡眠家居。"
          description="首页优先展示最具识别度的系列结构，便于客户快速判断积云家居的主营能力与产品边界。"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {seriesItems.map((item) => (
            <SeriesCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading
          eyebrow="Featured Products"
          title="以真实产品图为核心，建立品牌可信度与审美识别。"
          description="首版优先上线最能代表积云家居能力带的产品，包括旗舰风扇、风幕机、扫地机器人、冷风机与延展型家电单品。睡眠家居系列当前先在产品矩阵中展示方向。"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-10 overflow-hidden rounded-[1rem] border border-[color:var(--color-border)] bg-[linear-gradient(135deg,#ffffff,#eef6ff)] p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface-strong)] px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-strong)]">
              <Globe2 className="h-4 w-4" />
              Global Reach
            </div>
            <h2 className="text-balance text-[28px] font-semibold md:text-[42px]">
              从顺德出发，为海外与国内合作客户提供更高完成度的家电方案。
            </h2>
            {/* <p className="max-w-2xl text-sm leading-7 text-[color:var(--color-foreground-soft)]">
              现有资料明确提到业务已覆盖美国与加拿大。官网首版以“制造基地 +
              产品矩阵 + 定制能力”来建立跨区域合作的信任基础。
            </p> */}
            <Link
              href="/contact"
              className={buttonVariants({ variant: "secondary" })}
            >
              发起合作沟通
            </Link>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden rounded-[1rem] border border-[color:var(--color-border)] bg-white">
            <Image
              src={getAssetPath("/images/brand/global-map.png")}
              alt="积云家居全球业务覆盖示意图"
              fill
              className="object-cover opacity-78"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(141,215,255,0.22),transparent_18%),radial-gradient(circle_at_28%_34%,rgba(141,215,255,0.35),transparent_7%),radial-gradient(circle_at_25%_37%,rgba(141,215,255,0.35),transparent_7%),radial-gradient(circle_at_23%_36%,rgba(141,215,255,0.35),transparent_7%)]" />
          </div>
        </div>
      </section>
    </div>
  );
}
