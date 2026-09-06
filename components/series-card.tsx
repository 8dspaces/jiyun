import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { SeriesItem } from "@/data/site";
import { getAssetPath } from "@/lib/asset-path";

interface SeriesCardProps {
  item: SeriesItem;
}

/**
 * 展示图片化产品品类卡片，承接首页与产品中心的目录入口。
 *
 * @param item 品类数据。
 * @returns 返回系列卡片组件。
 */
export function SeriesCard({ item }: SeriesCardProps): React.JSX.Element {
  return (
    <Link
      href={`/products#${item.id}`}
      className="group block overflow-hidden rounded-sm border border-[#ececec] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d6e1ea] hover:shadow-[0_20px_40px_rgba(17,17,17,0.08)]"
    >
      <div className="border-b border-[#ececec] px-6 pb-4 pt-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#b4b4b4]">
          {item.englishTitle}
        </p>
        <h3 className="mt-2 text-[28px] font-semibold text-[#222222] transition-colors group-hover:text-[#123e67]">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-[#7a7a7a]">{item.description}</p>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f7f7]">
        <Image
          src={getAssetPath(item.image)}
          alt={item.alt}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="px-6 py-5">
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-[#ececec] bg-[#fafafa] px-3 py-1 text-[11px] text-[#333333]"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#123e67]">
          查看目录
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
