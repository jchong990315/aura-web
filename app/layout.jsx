import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "AURA | 상처지킴이",
  description:
    "AURA(AI Ulcer Recognition Assistance) — 욕창 단계를 AI로 빠르게 판별해 돌봄 현장을 돕는 캡스톤 프로젝트.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <title>AURA | 상처지킴이</title>
        <meta name="description" content="AURA(AI Ulcer Recognition Assistance) — 욕창 단계를 AI로 빠르게 판별해 돌봄 현장을 돕는 캡스톤 프로젝트." />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
