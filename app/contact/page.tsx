import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { contactItems } from "@/data/site";

/**
 * 渲染联系我们页面，承载合作说明与联系信息占位。
 *
 * @returns 返回联系我们页面。
 */
export default function ContactPage(): React.JSX.Element {
  return (
    <div className="container-shell space-y-16 py-16 md:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="欢迎围绕品牌合作、产品定制与渠道合作展开沟通。"
        description="当前资料尚未提供完整邮箱与电话，因此页面先保留标准化联系模块，待企业补充正式联系方式后即可直接上线。"
      />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1rem] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,#ffffff,#eef6ff)] p-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-strong)]">
            Cooperation
          </p>
          <h2 className="mt-5 text-[28px] font-semibold text-[color:var(--color-foreground)]">
            让官网成为品牌实力与商务线索之间的第一触点。
          </h2>
          <p className="mt-5 text-sm leading-7 text-[color:var(--color-foreground-soft)]">
            推荐后续补充企业邮箱、联系电话、联系人职能与地图位置，以便同步满足展示和转化需求。
          </p>
          <Link
            href="/products"
            className={buttonVariants({
              className: "mt-8 inline-flex",
              variant: "secondary",
            })}
          >
            查看产品矩阵
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-[1rem] border border-[color:var(--color-border)] bg-white p-8">
          <div className="space-y-6">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[0.9rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-6"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-strong)]">
                  {item.label}
                </div>
                <div className="mt-3 text-base leading-7 text-[color:var(--color-foreground)]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
