import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProductItem } from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";

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
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[1/1] border-b border-[color:var(--color-border)] bg-[radial-gradient(circle_at_top,rgba(173,215,244,0.36),transparent_58%),linear-gradient(180deg,#f8fcff,#eef6ff)]">
        <Image
          src={getAssetPath(item.image)}
          alt={item.alt}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardHeader className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-strong)]">
          {item.category}
        </p>
        <CardTitle>{item.name}</CardTitle>
        <p className="text-[13px] text-[color:var(--color-muted)]">{item.model}</p>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-6 text-[color:var(--color-muted)]">
          {item.summary}
        </p>
        <ul className="space-y-2 text-[13px] text-[color:var(--color-foreground)]">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
