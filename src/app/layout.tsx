import type { Metadata } from "next";
import { pressStart2P, vt323 } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hodurang.com"),
  title: "호두랑 - 기억을 저장하고 퀴즈로 되살리는 뇌 건강 플랫폼",
  description:
    "소중한 추억을 타임캡슐에 기록하고, AI가 만든 퀴즈로 기억력을 관리하세요. 사진, 음성, 손글씨로 쉽게 기록하는 호두랑.",
  keywords: ["호두랑", "기억력", "타임캡슐", "뇌건강", "AI퀴즈", "추억기록"],
  openGraph: {
    title: "호두랑 - 기억을 저장하고 퀴즈로 되살리는 뇌 건강 플랫폼",
    description:
      "소중한 추억을 타임캡슐에 기록하고, AI가 만든 퀴즈로 기억력을 관리하세요.",
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
