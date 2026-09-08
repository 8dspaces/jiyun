import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";

import { LocaleProvider } from "@/components/locale-provider";
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
  title: "CUMULUS Smart Home | Corporate Website",
  description:
    "CUMULUS Smart Home focuses on design and development across air treatment and related home appliance solutions, backed by industrial design, manufacturing synergy, and custom development capability.",
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
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
        <LocaleProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <SiteHeader />
            <main className="relative flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
