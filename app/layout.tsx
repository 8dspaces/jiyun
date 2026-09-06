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
  title: "积云家居科技 | 企业官网",
  description:
    "积云家居科技专注风处理与水处理相关家电设计研发，围绕设计研发、制造协同与客户化开发能力构建企业官网展示体系。",
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
          <SiteHeader />
          <main className="relative flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
