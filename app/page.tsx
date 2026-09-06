import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { capabilities, companyProfile, statistics } from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";

/**
 * 渲染官网首页，采用更接近企业集团官网的横幅加分区结构。
 *
 * @returns 返回首页页面。
 */
export default function HomePage(): React.JSX.Element {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div className="relative min-h-[36rem] md:min-h-[42rem]">
          <Image
            src={getAssetPath("/images/brand/jiyun_01.png")}
            alt="积云家居品牌主视觉"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.78)_0%,rgba(20,20,20,0.55)_38%,rgba(20,20,20,0.16)_72%,rgba(20,20,20,0.05)_100%)]" />
          <div className="container-shell relative flex min-h-[36rem] items-center py-16 md:min-h-[42rem] md:py-24">
            <div className="max-w-3xl space-y-7 text-white">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/70">
                {companyProfile.englishName}
              </p>
              <h3 className="max-w-5xl text-balance text-[30px] font-semibold leading-[1.04] tracking-tight md:text-[42px]">
                {companyProfile.heroTitle}
              </h3>
              <p className="max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                {companyProfile.heroDescription}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/about"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "rounded-md bg-[#123e67] px-7 text-white hover:bg-[#0f3354]",
                  })}
                >
                  了解企业实力
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
                  查看产品中心
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ececec] bg-white">
        <div className="container-shell grid gap-4 py-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 xl:py-10">
          {statistics.map((item) => (
            <article
              key={item.label}
              className="border border-[#ececec] bg-[#fafafa] px-6 py-6"
            >
              <p className="text-[30px] font-semibold text-[#222222]">{item.value}</p>
              <p className="mt-2 text-[13px] leading-6 text-[#7b7b7b]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="container-shell grid gap-0 py-16 md:py-20 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative min-h-[24rem] overflow-hidden">
            <Image
              src={getAssetPath("/images/brand/campus.jpeg")}
              alt="积云家居园区实景"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
          <div className="flex items-center bg-white px-8 py-10 md:px-12">
            <div className="max-w-xl space-y-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#123e67]">
                品牌介绍
              </p>
              <h2 className="text-balance text-[34px] font-semibold leading-tight text-[#222222] md:text-[46px]">
                专注风处理与水处理相关家电设计研发。
              </h2>
              <p className="text-[15px] leading-8 text-[#666666]">
                {companyProfile.fullName}
                立足广东顺德，围绕设计研发、制造协同与客户化开发能力，
                为品牌合作与产品项目提供稳定支撑。
              </p>
              <Link
                href="/about"
                className={buttonVariants({
                  variant: "secondary",
                  className:
                    "mt-2 inline-flex rounded-md border-[#d9d9d9] px-6 text-[#222222] hover:border-[#123e67] hover:text-[#123e67]",
                })}
              >
                MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="container-shell grid gap-0 py-16 md:py-20 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="flex items-center bg-white px-8 py-10 md:px-12">
            <div className="max-w-xl space-y-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#123e67]">
                核心优势
              </p>
              <h2 className="text-balance text-[34px] font-semibold leading-tight text-[#222222] md:text-[46px]">
                设计研发、制造协同与客户化开发并行推进。
              </h2>
              <div className="grid gap-4">
                {capabilities.map((item) => (
                  <div key={item.title} className="border-b border-[#ededed] pb-4 last:border-b-0">
                    <p className="text-[12px] uppercase tracking-[0.2em] text-[#123e67]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[17px] leading-8 text-[#444444]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden">
            <Image
              src={getAssetPath("/images/brand/global-map.png")}
              alt="积云家居全球业务覆盖示意图"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
