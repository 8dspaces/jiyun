"use client";

import Link from "next/link";
import {
  Bot,
  Building2,
  ChefHat,
  HeartPulse,
  House,
  Wind,
} from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import type { SeriesItem } from "@/data/site";
import { getLocalizedText } from "@/lib/locale";

interface CategoryStripProps {
  items: SeriesItem[];
}

const iconMap = {
  wind: Wind,
  building: Building2,
  bot: Bot,
  chef: ChefHat,
  heart: HeartPulse,
  home: House,
} as const;

/**
 * 渲染产品品类横向导航，贴近企业官网的图标化目录入口风格。
 *
 * @param items 品类列表。
 * @returns 返回品类导航组件。
 */
export function CategoryStrip({
  items,
}: CategoryStripProps): React.JSX.Element {
  const { locale } = useLocale();

  return (
    <div className="overflow-x-auto">
      <div className="grid min-w-[960px] grid-cols-6 border-y border-[#ececec] bg-white">
        {items.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <Link
              key={item.id}
              href={`/products#${item.id}`}
              className="group flex min-h-[150px] flex-col items-center justify-center gap-4 border-r border-[#ececec] px-4 text-center last:border-r-0"
            >
              <div className="rounded-sm border border-[#ededed] p-4 text-[#9b9b9b] transition-colors group-hover:border-[#d6e1ea] group-hover:text-[#123e67]">
                <Icon className="h-9 w-9" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-[18px] text-[#333333] transition-colors group-hover:text-[#123e67]">
                  {getLocalizedText(item.title, locale)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
