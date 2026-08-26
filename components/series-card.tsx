import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SeriesItem } from "@/data/site";

interface SeriesCardProps {
  item: SeriesItem;
}

/**
 * 展示产品系列摘要信息，便于首页和产品页复用。
 *
 * @param item 产品系列数据。
 * @returns 返回系列卡片组件。
 */
export function SeriesCard({ item }: SeriesCardProps): React.JSX.Element {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="leading-7 text-[color:var(--color-muted)]">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] px-3 py-1 text-[11px] text-[color:var(--color-foreground)]"
            >
              {highlight}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
