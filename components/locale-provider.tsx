"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

import type { Locale } from "@/lib/locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LOCALE_STORAGE_KEY = "jiyun-site-locale";
const LOCALE_CHANGE_EVENT = "jiyun-site-locale-change";

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps {
  children: React.ReactNode;
}

/**
 * 提供全站语言状态，并将用户选择持久化到本地存储。
 *
 * @param children 子组件内容。
 * @returns 返回语言上下文提供器。
 */
export function LocaleProvider({
  children,
}: LocaleProviderProps): React.JSX.Element {
  const locale = useSyncExternalStore<Locale>(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale,
      setLocale: updateLocale,
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

/**
 * 读取当前语言上下文。
 *
 * @returns 返回当前语言状态与切换方法。
 */
export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider.");
  }

  return context;
}

/**
 * 订阅语言变化事件，兼容当前页切换与跨标签页切换。
 *
 * @param onStoreChange 外部仓库变更回调。
 * @returns 返回取消订阅函数。
 */
function subscribeToLocale(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LOCALE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
  };
}

/**
 * 在客户端读取当前语言快照。
 *
 * @returns 返回当前语言。
 */
function getLocaleSnapshot(): Locale {
  return window.localStorage.getItem(LOCALE_STORAGE_KEY) === "zh" ? "zh" : "en";
}

/**
 * 在服务端返回默认语言快照，保证首帧与客户端水合一致。
 *
 * @returns 返回默认英文语言。
 */
function getServerLocaleSnapshot(): Locale {
  return "en";
}

/**
 * 更新本地语言并广播变更。
 *
 * @param locale 目标语言。
 */
function updateLocale(locale: Locale): void {
  if (window.localStorage.getItem(LOCALE_STORAGE_KEY) === locale) {
    return;
  }

  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
}
