import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { contactItems } from "@/data/site";

/**
 * 渲染联系我们页面，提供合作方向与联系信息入口。
 *
 * @returns 返回联系我们页面。
 */
export default function ContactPage(): React.JSX.Element {
  return (
    <div className="bg-white pb-20 md:pb-24">
      <section className="border-b border-[#ececec] bg-[#f7f7f7]">
        <div className="container-shell py-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#123e67]">
              Contact
            </p>
            <h1 className="text-balance text-[40px] font-semibold leading-tight text-[#222222] md:text-[60px]">
              品牌合作、产品定制与渠道合作联系入口
            </h1>
            <p className="text-base leading-8 text-[#666666]">
              欢迎围绕产品开发、合作项目与商务沟通需求建立联系。
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
              面向品牌合作、产品开发与项目协同提供沟通入口。
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[#666666]">
              当前可先通过标准化联系信息建立沟通，后续补充正式邮箱、电话与联系人信息后即可形成完整联系页。
            </p>
            <Link
              href="/products"
              className={buttonVariants({
                className: "mt-8 inline-flex rounded-md bg-[#123e67] px-6 text-white hover:bg-[#0f3354]",
              })}
            >
              查看产品中心
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="border border-[#ececec] bg-white px-6 py-6"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#123e67]">
                  {item.label}
                </div>
                <div className="mt-3 text-[18px] leading-8 text-[#222222]">
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
