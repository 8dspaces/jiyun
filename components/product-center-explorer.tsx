"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { useLocale } from "@/components/locale-provider";
import { ProductCard } from "@/components/product-card";
import {
  homeCustomizationShowcaseImages,
  type CatalogSection,
  type ProductItem,
} from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";
import { getLocalizedText } from "@/lib/locale";

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
  const { locale } = useLocale();
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const activeSection = sections.find((section) => section.id === activeSectionId);
  const [activeLineName, setActiveLineName] = useState<string>("");

  const productCountByCategory = useMemo(() => {
    return products.reduce<Record<string, number>>((counts, item) => {
      counts[item.category] = (counts[item.category] ?? 0) + 1;
      return counts;
    }, {});
  }, [products]);

  const allProductLines = useMemo(() => {
    return sections.flatMap((section) =>
      section.productLines.map((line) => ({
        sectionId: section.id,
        sectionTitle: section.title,
        name: line.name,
        label: line.label,
        summary: line.summary,
      })),
    );
  }, [sections]);

  useEffect(() => {
    if (typeof window === "undefined" || sections.length === 0) {
      return;
    }

    const syncSectionFromHash = (): void => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));

      if (!hash || hash === "all") {
        setActiveSectionId("");
        setActiveLineName("");
        return;
      }

      const matchedSection = sections.find((section) => section.id === hash);

      if (!matchedSection) {
        return;
      }

      setActiveSectionId(matchedSection.id);
      setActiveLineName((currentLineName) => {
        const hasMatch = matchedSection.productLines.some(
          (line) => line.name === currentLineName,
        );

        return hasMatch
          ? currentLineName
          : matchedSection.productLines[0]?.name ?? "";
      });
    };

    syncSectionFromHash();
    window.addEventListener("hashchange", syncSectionFromHash);

    return () => {
      window.removeEventListener("hashchange", syncSectionFromHash);
    };
  }, [sections]);

  const normalizedActiveLineName = useMemo(() => {
    if (!activeLineName) {
      return "";
    }

    if (!activeSection) {
      const hasGlobalMatch = allProductLines.some(
        (line) => line.name === activeLineName,
      );

      return hasGlobalMatch ? activeLineName : "";
    }

    const hasMatch = activeSection.productLines.some(
      (line) => line.name === activeLineName,
    );

    return hasMatch ? activeLineName : "";
  }, [activeLineName, activeSection, allProductLines]);

  const visibleProductLines = activeSection
    ? activeSection.productLines.map((line) => ({
        sectionId: activeSection.id,
        sectionTitle: activeSection.title,
        name: line.name,
        label: line.label,
        summary: line.summary,
      }))
    : allProductLines;

  const matchedProducts = products.filter((item) => {
    const matchesSection = activeSection ? item.category === activeSection.key : true;
    const matchesLine = normalizedActiveLineName
      ? item.productLine === normalizedActiveLineName
      : true;

    return matchesSection && matchesLine;
  });
  const isHomeCustomizationSection = activeSection?.id === "home-customization";
  const activeProductCount = activeSection
    ? productCountByCategory[activeSection.key] ?? 0
    : products.length;

  /**
   * 统一处理品类切换，并同步更新地址 hash，便于刷新后保持当前目录。
   *
   * @param section 当前选中的品类对象。
   */
  const handleSectionChange = (section: CatalogSection): void => {
    setActiveSectionId(section.id);
    setActiveLineName("");

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${section.id}`);
    }
  };

  /**
   * 重置系列与产品类别筛选，回到全部展示状态。
   */
  const handleResetFilters = (): void => {
    setActiveSectionId("");
    setActiveLineName("");

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "#all");
    }
  };

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleResetFilters}
            className={`relative border border-[#ececec] bg-white px-4 py-2 text-sm transition-colors ${
              activeSectionId === "" && normalizedActiveLineName === ""
                ? "text-[#c8192e]"
                : "text-[#333333] hover:bg-[#fafafa] hover:text-[#c8192e]"
            }`}
          >
            {locale === "en" ? "All Series" : "全部系列"}
            <span
              className={`absolute inset-x-0 bottom-0 h-[3px] transition-colors ${
                activeSectionId === "" && normalizedActiveLineName === ""
                  ? "bg-[#c8192e]"
                  : "bg-transparent"
              }`}
            />
          </button>
          {activeSection ? (
            <p className="text-sm text-[#777777]">
              {locale === "en" ? "Current filter: " : "当前已筛选："}
              {getLocalizedText(activeSection.title, locale)}
              {normalizedActiveLineName
                ? ` / ${
                    getLocalizedText(
                      visibleProductLines.find(
                        (line) => line.name === normalizedActiveLineName,
                      )?.label ?? {
                        en: normalizedActiveLineName,
                        zh: normalizedActiveLineName,
                      },
                      locale,
                    )
                  }`
                : ""}
            </p>
          ) : (
            <p className="text-sm text-[#777777]">
              {locale === "en"
                ? "Showing all series and featured products by default"
                : "默认展示全部系列与全部代表产品"}
            </p>
          )}
        </div>
        <div className="border border-[#ececec] bg-white p-3 md:p-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {sections.map((section) => {
              const isActive = section.id === activeSectionId;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSectionChange(section)}
                  className={`group relative w-[10.2rem] overflow-hidden border border-[#ececec] bg-white text-center transition-colors duration-300 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8192e]/20 md:w-[11rem] ${
                    isActive
                      ? "z-10 bg-[#fafafa]"
                      : "hover:bg-[#fafafa]"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex flex-col">
                    <div className="relative h-28 w-full md:h-32">
                      <Image
                        src={getAssetPath(section.image)}
                        alt={getLocalizedText(section.alt, locale)}
                        fill
                        className={`object-cover transition-transform duration-300 ${
                          isActive ? "scale-[1.04]" : "group-hover:scale-[1.03]"
                        }`}
                        sizes="(max-width: 768px) 164px, 176px"
                      />
                    </div>
                    <p
                      className={`border-t border-[#ececec] px-3 py-3 text-[14px] font-medium leading-6 transition-colors duration-300 md:text-[15px] ${
                        isActive ? "text-[#c8192e]" : "text-[#555555] group-hover:text-[#333333]"
                      }`}
                    >
                      {getLocalizedText(section.title, locale)}
                    </p>
                    <div
                      className={`mx-auto mt-4 h-[3px] w-12 transition-all duration-300 ${
                        isActive ? "bg-[#c8192e]" : "bg-transparent group-hover:bg-[#f1c5cb]"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveLineName("")}
            className={`relative border border-[#ececec] bg-white px-4 py-3 text-sm transition-colors ${
              normalizedActiveLineName === ""
                ? "text-[#123e67]"
                : "text-[#333333] hover:bg-[#fafafa] hover:text-[#123e67]"
            }`}
          >
            {locale === "en" ? "All Categories" : "全部类别"}
            <span
              className={`absolute inset-x-0 bottom-0 h-[3px] transition-colors ${
                normalizedActiveLineName === "" ? "bg-[#123e67]" : "bg-transparent"
              }`}
            />
          </button>
          {visibleProductLines.map((line) => {
            const isActive = line.name === normalizedActiveLineName;

            return (
              <button
                key={`${line.sectionId}-${line.name}`}
                type="button"
                onClick={() => {
                  if (!activeSection && line.sectionId !== activeSectionId) {
                    setActiveSectionId(line.sectionId);
                  }

                  setActiveLineName(line.name);

                  if (typeof window !== "undefined") {
                    window.history.replaceState(null, "", `#${line.sectionId}`);
                  }
                }}
                className={`relative border border-[#ececec] bg-white px-4 py-3 text-sm transition-colors ${
                  isActive
                    ? "text-[#123e67]"
                    : "text-[#333333] hover:bg-[#fafafa] hover:text-[#123e67]"
                }`}
              >
                {!activeSection
                  ? `${getLocalizedText(
                      sections.find((section) => section.id === line.sectionId)?.title ?? {
                        en: "Unknown Section",
                        zh: "未知分类",
                      },
                      locale,
                    )} / `
                  : ""}
                {getLocalizedText(
                  activeSection?.productLines.find((item) => item.name === line.name)?.label ??
                    sections
                      .find((section) => section.id === line.sectionId)
                      ?.productLines.find((item) => item.name === line.name)?.label ?? {
                      en: line.name,
                      zh: line.name,
                    },
                  locale,
                )}
                <span
                  className={`absolute inset-x-0 bottom-0 h-[3px] transition-colors ${
                    isActive ? "bg-[#123e67]" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </section>

      {activeSection ? (
        <div id={activeSection.id} className="space-y-6 scroll-mt-28">
          <section className="relative overflow-hidden border border-[#ececec] bg-[#f7f7f7]">
            <div className="absolute inset-0">
              <Image
                src={getAssetPath(activeSection.image)}
                alt={getLocalizedText(activeSection.alt, locale)}
                fill
                priority
                className="object-contain p-8 md:p-12"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,247,247,0.96)_0%,rgba(247,247,247,0.88)_28%,rgba(247,247,247,0.58)_55%,rgba(247,247,247,0.18)_100%)]" />
            <div className="relative z-10 grid min-h-[24rem] items-end gap-6 px-8 py-8 md:min-h-[28rem] md:px-10 md:py-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-8">
              <div className="max-w-xl space-y-5">
                <p className="text-sm font-medium text-[#123e67]">
                  {locale === "en" ? "Product Center" : "产品中心"}
                </p>
                <h2 className="text-[34px] font-semibold text-[#222222] md:text-[42px]">
                  {getLocalizedText(activeSection.title, locale)}
                </h2>
                <p className="max-w-lg text-[15px] leading-8 text-[#666666]">
                  {getLocalizedText(activeSection.description, locale)}
                </p>
                <div className="flex flex-wrap gap-3 text-[12px] text-[#666666]">
                  <span className="border border-[#e3e7eb] bg-[#fafafa] px-3 py-2">
                    {activeSection.productLines.length}{" "}
                    {locale === "en" ? "product lines" : "条产品线"}
                  </span>
                  <span className="border border-[#e3e7eb] bg-[#fafafa] px-3 py-2">
                    {activeProductCount}{" "}
                    {locale === "en" ? "featured products" : "款代表产品"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {activeSection.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={`${activeSection.id}-highlight-${highlightIndex}`}
                      className="border border-[#e3e7eb] bg-white/90 px-4 py-2 text-[12px] text-[#333333]"
                    >
                      {getLocalizedText(highlight, locale)}
                    </span>
                  ))}
                </div>
              </div>
              <aside className="space-y-3 self-end lg:justify-self-end">
                <p className="text-[12px] tracking-[0.2em] text-[#123e67]">
                  {locale === "en" ? "Product Directory" : "产品目录"}
                </p>
                {activeSection.productLines.map((line) => {
                  const isActiveLine = line.name === normalizedActiveLineName;

                  if (normalizedActiveLineName && !isActiveLine) {
                    return null;
                  }

                  return (
                    <article
                      key={`${activeSection.id}-${line.name}-detail`}
                      className={`border px-4 py-3 backdrop-blur-[2px] ${
                        isActiveLine
                          ? "border-[#123e67]/45 bg-[#123e67]/10"
                          : "border-[#d6dee6] bg-transparent"
                      }`}
                    >
                      <p
                        className={`text-[12px] ${
                          isActiveLine
                            ? "font-medium text-[#123e67]"
                            : "text-[#7f8b96]"
                        }`}
                      >
                        {getLocalizedText(line.label, locale)}
                      </p>
                      <p className="mt-1 text-[13px] leading-6 text-[#4f5b66]">
                        {getLocalizedText(line.summary, locale)}
                      </p>
                    </article>
                  );
                })}
              </aside>
            </div>
          </section>
        </div>
      ) : null}

      {normalizedActiveLineName ? (
        <section className="border border-[#ececec] bg-[#fafafa] px-6 py-6">
          <p className="text-sm font-medium text-[#123e67]">
            {locale === "en" ? "Product Category" : "产品类别"}
          </p>
          <h3 className="mt-3 text-[28px] font-semibold text-[#222222]">
            {getLocalizedText(
              visibleProductLines.find((line) => line.name === normalizedActiveLineName)
                ?.label ?? {
                  en: normalizedActiveLineName,
                  zh: normalizedActiveLineName,
                },
              locale,
            )}
          </h3>
          <p className="mt-3 max-w-3xl text-[15px] leading-8 text-[#666666]">
            {getLocalizedText(
              visibleProductLines.find((line) => line.name === normalizedActiveLineName)
                ?.summary ??
                {
                  en: "Detailed material for this category is being organized.",
                  zh: "当前产品类别资料正在整理中。",
                },
              locale,
            )}
          </p>
        </section>
      ) : null}

      {isHomeCustomizationSection ? (
        <section className="space-y-4">
          <div>
            <p className="text-sm font-medium text-[#123e67]">
              {locale === "en" ? "Customization Gallery" : "定制图册"}
            </p>
            <h3 className="mt-2 text-[32px] font-semibold text-[#222222]">
              {locale === "en"
                ? "Home Customization Showcase"
                : "家居定制案例展示"}
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {homeCustomizationShowcaseImages.map((item) => (
              <article
                key={item.image}
                className="overflow-hidden border border-[#e2e8ef] bg-white"
              >
                <div className="relative aspect-[4/3] bg-[#f7f7f7]">
                  <Image
                    src={getAssetPath(item.image)}
                    alt={getLocalizedText(item.alt, locale)}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#123e67]">
              {locale === "en" ? "Featured Products" : "代表产品"}
            </p>
            <h3 className="mt-2 text-[32px] font-semibold text-[#222222]">
              {activeSection || normalizedActiveLineName
                ? locale === "en"
                  ? "Filtered Results"
                  : "筛选结果"
                : locale === "en"
                  ? "All Featured Products"
                  : "全部代表产品"}
            </h3>
          </div>
        </div>
        {matchedProducts.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {matchedProducts.map((item) => (
              <ProductCard
                key={`${item.category}-${item.productLine}-${item.model}`}
                item={item}
              />
            ))}
          </div>
        ) : isHomeCustomizationSection ? (
          <div className="border border-[#ececec] bg-[#fafafa] px-6 py-10 text-[15px] text-[#666666]">
            {locale === "en"
              ? "The home customization series is presented primarily through a project gallery. Specific solution combinations are available through business communication."
              : "家居定制系列以空间案例图册展示为主，具体组合方案可通过商务沟通进一步获取。"}
          </div>
        ) : (
          <div className="border border-[#ececec] bg-[#fafafa] px-6 py-10 text-[15px] text-[#666666]">
            {locale === "en"
              ? "No featured products are currently available under this filter. Full materials can be obtained through business communication."
              : "当前筛选条件下暂无代表产品，完整资料可通过商务沟通进一步获取。"}
          </div>
        )}
      </section>
    </div>
  );
}
