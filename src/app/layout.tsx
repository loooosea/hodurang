import type { Metadata } from "next";
import { pressStart2P, vt323 } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hodu.life"),
  title: "호두랑 | 기억의 힘으로 더 나은 삶을 만들다",
  description:
    "호두랑은 기억을 기록하고 관리하여, 과거의 소중한 순간을 통해 현재의 행복을 돕는 두뇌 건강 관리 플랫폼입니다.",
  keywords: ["호두랑", "기억력", "타임캡슐", "뇌건강", "AI퀴즈", "추억기록"],
  openGraph: {
    title: "호두랑 | 기억의 힘으로 더 나은 삶을 만들다",
    description:
      "호두랑은 기억을 기록하고 관리하여, 과거의 소중한 순간을 통해 현재의 행복을 돕는 두뇌 건강 관리 플랫폼입니다.",
    type: "website",
    locale: "ko_KR",
    images: ["/images/logos/logo-orange.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
