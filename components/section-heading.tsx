import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

/**
 * 提供官网区块统一标题样式。
 *
 * @param eyebrow 区块标签。
 * @param title 区块标题。
 * @param description 区块描述。
 * @param align 文本对齐方式。
 * @returns 返回区块标题组件。
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "space-y-5",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
      )}
    >
      <Badge className={align === "center" ? "mx-auto" : undefined}>
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-[28px] font-semibold tracking-tight text-[color:var(--color-foreground)] md:text-[42px]">
        {title}
      </h2>
      <p className="text-sm leading-7 text-[color:var(--color-muted)] md:text-base">
        {description}
      </p>
    </div>
  );
}
