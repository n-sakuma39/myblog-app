import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import "@/styles/app/globals/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SakuTech blog",
  description:
    "「SakuTech blog」は個人ポートフォリオサイトです。主にReactなどモダン技術を追求＆紹介するブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
