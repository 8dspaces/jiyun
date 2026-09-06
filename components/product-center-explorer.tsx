"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { ProductCard } from "@/components/product-card";
import type {
  CatalogSection,
  ProductItem,
  ProductLineItem,
} from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";

interface ProductCenterExplorerProps {
  sections: CatalogSection[];
  products: ProductItem[];
}

/**
 * 渲染产品中心交互式目录，提供一级品类与二级产品线切换。
 *
 * @param sections 品类目录数据。
 * @param products 代表产品数据。
 * @returns 返回产品中心交互组件。
 */
export function ProductCenterExplorer({
  sections,
  products,
}: ProductCenterExplorerProps): React.JSX.Element {
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]?.id ?? "");
  const activeSection =
    sections.find((section) => section.id === activeSectionId) ?? sections[0];

  const [activeLineName, setActiveLineName] = useState<string>(
    activeSection?.productLines[0]?.name ?? "",
  );

  const normalizedActiveLineName = useMemo(() => {
    if (!activeSection) {
      return "";
    }

    const hasMatch = activeSection.productLines.some(
      (line) => line.name === activeLineName,
    );

    return hasMatch ? activeLineName : activeSection.productLines[0]?.name ?? "";
  }, [activeLineName, activeSection]);

  const activeLine: ProductLineItem | undefined = activeSection?.productLines.find(
    (line) => line.name === normalizedActiveLineName,
  );

  const matchedProducts = products.filter(
    (item) => item.category === activeSection?.title,
  );

  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {sections.map((section) => {
            const isActive = section.id === activeSection?.id;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  setActiveSectionId(section.id);
                  setActiveLineName(section.productLines[0]?.name ?? "");
                }}
                onMouseEnter={() => {
                  setActiveSectionId(section.id);
                  setActiveLineName(section.productLines[0]?.name ?? "");
                }}
                className={`group relative overflow-hidden border text-left transition-all duration-300 ${
                  isActive
                    ? "border-[#123e67] shadow-[0_24px_48px_rgba(18,62,103,0.16)] -translate-y-2"
                    : "border-[#ececec] hover:-translate-y-2 hover:border-[#d4e0eb] hover:shadow-[0_24px_48px_rgba(17,17,17,0.10)]"
                }`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={getAssetPath(section.image)}
                    alt={section.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.04)_0%,rgba(20,20,20,0.3)_55%,rgba(20,20,20,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[12px] text-white/72">产品品类</p>
                    <p className="mt-2 text-[22px] font-semibold leading-tight text-white">
                      {section.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {section.highlights.slice(0, 2).map((highlight) => (
                        <span
                          key={`${section.id}-${highlight}`}
                          className="border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] text-white/88 backdrop-blur-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {activeSection ? (
        <div className="space-y-8">
          <section className="grid gap-0 overflow-hidden border border-[#ececec] bg-white lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[22rem] bg-[#f7f7f7]">
              <Image
                src={getAssetPath(activeSection.image)}
                alt={activeSection.alt}
                fill
                className="object-contain p-10"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
            <div className="flex items-center px-8 py-10 md:px-10">
              <div className="max-w-xl space-y-5">
                <p className="text-sm font-medium text-[#123e67]">
                  当前品类
                </p>
                <h2 className="text-[36px] font-semibold text-[#222222]">
                  {activeSection.title}
                </h2>
                <p className="text-[15px] leading-8 text-[#666666]">
                  {activeSection.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {activeSection.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="border border-[#ececec] bg-[#fafafa] px-4 py-2 text-[12px] text-[#333333]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {activeSection.productLines.map((line) => {
                const isActive = line.name === normalizedActiveLineName;

                return (
                  <button
                    key={line.name}
                    type="button"
                    onClick={() => setActiveLineName(line.name)}
                    className={`border px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "border-[#123e67] bg-[#f5f8fb] text-[#123e67]"
                        : "border-[#ececec] bg-white text-[#333333] hover:border-[#cfdbe6] hover:text-[#123e67]"
                    }`}
                  >
                    {line.name}
                  </button>
                );
              })}
            </div>

            {activeLine ? (
              <div className="border border-[#ececec] bg-[#fafafa] px-6 py-6">
                <p className="text-sm font-medium text-[#123e67]">
                  产品线
                </p>
                <h3 className="mt-3 text-[28px] font-semibold text-[#222222]">
                  {activeLine.name}
                </h3>
                <p className="mt-3 max-w-3xl text-[15px] leading-8 text-[#666666]">
                  {activeLine.summary}
                </p>
              </div>
            ) : null}
          </section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {activeSection.productLines.map((line) => {
              const isActive = line.name === normalizedActiveLineName;

              return (
                <article
                  key={line.name}
                  className={`border px-5 py-5 ${
                    isActive
                      ? "border-[#123e67] bg-[#f5f8fb]"
                      : "border-[#ececec] bg-white"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      isActive ? "font-medium text-[#123e67]" : "text-[#8f8f8f]"
                    }`}
                  >
                    产品目录
                  </p>
                  <p className="mt-3 text-[22px] font-semibold text-[#222222]">
                    {line.name}
                  </p>
                  <p className="mt-3 text-[14px] leading-7 text-[#666666]">
                    {line.summary}
                  </p>
                </article>
              );
            })}
          </section>

          <section className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#123e67]">
                  代表产品
                </p>
                <h3 className="mt-2 text-[32px] font-semibold text-[#222222]">
                  代表产品
                </h3>
              </div>
            </div>
            {matchedProducts.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-3">
                {matchedProducts.map((item) => (
                  <ProductCard key={`${activeSection.id}-${item.name}`} item={item} />
                ))}
              </div>
            ) : (
              <div className="border border-[#ececec] bg-[#fafafa] px-6 py-10 text-[15px] text-[#666666]">
                当前品类展示以产品线与方案信息为主，完整资料可通过商务沟通进一步获取。
              </div>
            )}
          </section>
        </div>
      ) : null}
    </div>
  );
}
