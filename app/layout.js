import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata = {
  title: "株式会社家来 (うちくる) | 福井の新築・リフォーム専門",
  description:
    "福井県で新築住宅からリフォーム・リノベーションまで手掛ける株式会社家来(うちくる)のホームページです。お客様のライフスタイルに合わせた住まいづくりをご提案します。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
