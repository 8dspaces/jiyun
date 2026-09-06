import Image from "next/image";

import { ProductCenterExplorer } from "@/components/product-center-explorer";
import { catalogSections, featuredProducts } from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";

/**
 * 渲染产品中心页面，采用层级菜单与交互式目录展示。
 *
 * @returns 返回产品中心页面。
 */
export default function ProductsPage(): React.JSX.Element {
  return (
    <div className="bg-white pb-20 md:pb-24">
      <section className="relative overflow-hidden">
        <div className="relative min-h-[18rem] md:min-h-[22rem]">
          <Image
            src={getAssetPath("/images/brand/jiyun_01.png")}
            alt="积云家居产品中心横幅"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.74)_0%,rgba(20,20,20,0.4)_52%,rgba(20,20,20,0.12)_100%)]" />
          <div className="container-shell relative flex min-h-[18rem] items-center md:min-h-[22rem]">
            <div className="max-w-2xl space-y-4 text-white">
              <p className="text-sm tracking-[0.2em] text-white/72">
                产品中心
              </p>
              <h1 className="text-balance text-[40px] font-semibold leading-tight md:text-[60px]">
                六大品类产品中心
              </h1>
              <p className="text-base leading-8 text-white/80">
                以层级目录、二级产品线菜单与代表产品展示，重构更清晰的浏览路径。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-14 md:py-16">
        <ProductCenterExplorer
          sections={catalogSections}
          products={featuredProducts}
        />
      </section>
    </div>
  );
}
