import Image from "next/image";

import { useLocale } from "@/components/locale-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProductItem } from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";
import { getLocalizedText } from "@/lib/locale";

interface ProductCardProps {
  item: ProductItem;
}

/**
 * 展示重点产品图片、型号与核心卖点。
 *
 * @param item 产品数据。
 * @returns 返回产品卡片组件。
 */
export function ProductCard({ item }: ProductCardProps): React.JSX.Element {
  const { locale } = useLocale();

  return (
    <Card className="overflow-hidden rounded-sm border border-[#cfe0ee] bg-white shadow-none">
      <div className="relative aspect-[1/1] border-b border-[#d7e6f2] bg-white">
        <Image
          src={getAssetPath(item.image)}
          alt={getLocalizedText(item.alt, locale)}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardHeader className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#123e67]">
          {getLocalizedText(item.categoryLabel, locale)}
        </p>
        <CardTitle className="text-[22px] text-[#222222]">
          {getLocalizedText(item.name, locale)}
        </CardTitle>
        <p className="text-[13px] text-[#8b8b8b]">{item.model}</p>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-6 text-[#6f6f6f]">
          {getLocalizedText(item.summary, locale)}
        </p>
        <ul className="space-y-2 text-[13px] text-[#222222]">
          {item.features.map((feature) => (
            <li
              key={getLocalizedText(feature, locale)}
              className="flex items-start gap-3"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#123e67]" />
              <span>{getLocalizedText(feature, locale)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
