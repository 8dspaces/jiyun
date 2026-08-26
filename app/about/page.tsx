import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { capabilities, companyProfile, statistics } from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";

/**
 * 渲染关于我们页面，重点承接企业背景与能力说明。
 *
 * @returns 返回关于我们页面。
 */
export default function AboutPage(): React.JSX.Element {
  return (
    <div className="container-shell space-y-16 py-16 md:py-20">
      <SectionHeading
        eyebrow="About Us"
        title="把品牌气质、制造基础与客户化开发能力讲清楚。"
        description={`${companyProfile.fullName} ${companyProfile.introduction}`}
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[1rem] border border-[color:var(--color-border)] bg-white">
          <div className="relative aspect-[16/10]">
            <Image
              src={getAssetPath("/images/brand/campus.jpeg")}
              alt="积云家居园区图片"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
        <div className="rounded-[1rem] border border-[color:var(--color-border)] bg-white p-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-strong)]">
            Brand Keywords
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {statistics.map((item) => (
              <div
                key={item.label}
                className="rounded-[0.9rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-5"
              >
                <div className="text-2xl font-semibold text-[color:var(--color-foreground)]">
                  {item.value}
                </div>
                <div className="mt-2 text-[13px] leading-6 text-[color:var(--color-muted)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {capabilities.map((item) => (
          <article
            key={item.title}
            className="rounded-[1rem] border border-[color:var(--color-border)] bg-white p-8"
          >
            <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
