import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteChrome } from "@/components/SiteChrome";
import { site } from "@/lib/portfolio";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={workSans.variable}>
        <LanguageProvider><SiteChrome>{children}</SiteChrome></LanguageProvider>
      </body>
    </html>
  );
}
