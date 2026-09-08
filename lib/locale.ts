export type Locale = "en" | "zh";

export interface LocalizedText {
  en: string;
  zh: string;
}

/**
 * 创建中英文双语文本对象。
 *
 * @param en 英文文案。
 * @param zh 中文文案。
 * @returns 返回双语文本对象。
 */
export function createLocalizedText(
  en: string,
  zh: string,
): LocalizedText {
  return { en, zh };
}

/**
 * 按当前语言取出对应文案。
 *
 * @param text 双语文本对象。
 * @param locale 当前语言。
 * @returns 返回当前语言对应的文案。
 */
export function getLocalizedText(
  text: LocalizedText,
  locale: Locale,
): string {
  return text[locale];
}
