import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "积云家居科技 | 风处理与水处理家电官网",
  description:
    "积云家居科技专注风处理与水处理相关家电设计研发，展示风扇、风幕机、冷风机、扫地机器人等核心产品系列。",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * 渲染全站根布局，统一挂载字体、导航与页脚。
 *
 * @param children 子页面内容。
 * @returns 返回站点根布局。
 */
export default function RootLayout({
  children,
}: RootLayoutProps): React.JSX.Element {
  return (
    <html
      lang="zh-CN"
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(168,214,245,0.42),transparent_58%)]" />
          <SiteHeader />
          <main className="relative flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
