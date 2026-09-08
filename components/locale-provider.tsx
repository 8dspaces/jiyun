"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Locale } from "@/lib/locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LOCALE_STORAGE_KEY = "jiyun-site-locale";

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
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);

    return savedLocale === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale,
      setLocale: setLocaleState,
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
