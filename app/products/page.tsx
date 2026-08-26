import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SeriesCard } from "@/components/series-card";
import { featuredProducts, seriesItems } from "@/data/site";

/**
 * 渲染产品中心页面，集中展示系列矩阵与重点单品。
 *
 * @returns 返回产品中心页面。
 */
export default function ProductsPage(): React.JSX.Element {
  return (
    <div className="container-shell space-y-16 py-16 md:py-20">
      <SectionHeading
        eyebrow="Products"
        title="多系列产品并行，首页重展示，产品页重结构与卖点承接。"
        description="当前版本优先承接风处理、智能清洁、厨房、健康与睡眠家居等方向，形成可持续扩展的数据化产品结构。"
      />

      <section className="grid gap-6 md:grid-cols-2">
        {seriesItems.map((item) => (
          <SeriesCard key={item.title} item={item} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {featuredProducts.map((item) => (
          <ProductCard key={item.name} item={item} />
        ))}
      </section>
    </div>
  );
}
