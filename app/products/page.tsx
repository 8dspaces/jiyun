import { ProductCenterExplorer } from "@/components/product-center-explorer";
import { catalogSections, featuredProducts } from "@/data/site";

/**
 * 渲染产品中心页面，采用层级菜单与交互式目录展示。
 *
 * @returns 返回产品中心页面。
 */
export default function ProductsPage(): React.JSX.Element {
  return (
    <div className="bg-white pb-20 md:pb-24">
      <section className="container-shell pb-8 pt-3 md:pb-10 md:pt-4">
        <ProductCenterExplorer
          sections={catalogSections}
          products={featuredProducts}
        />
      </section>
    </div>
  );
}
