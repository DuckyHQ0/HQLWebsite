import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Image from "next/image";
import { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hql.duckyhq.com"),
  title: "HQLauncher",
  description:
    "I'm dukc. And I'm a versatile designer / web developer skilled in UI, graphic, motion design, and React / Vue",
  keywords: [
    "Minecraft",
    "Minecraft launcher",
    "Modrinth",
    "Curseforge",
    "MultiMC",
    "Prism launcher",
    "HQLauncher",
    "HQL",
  ],
  authors: [{ name: "dukc", url: "https://dukc.dev" }],
  creator: "dukc",
  publisher: "dukc",
  openGraph: {
    title: "HQLauncher",
    description:
      "I'm dukc. And I'm a versatile designer / web developer skilled in UI, graphic, motion design, and React / Vue",
    url: "https://hql.duckyhq.com",
    siteName: "dukc",
    images: [
      {
        url: "/seoCover.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const outfit = Outfit({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-[#050505] text-text-1 overflow-x-hidden overflow-y-auto p-[48px] flex flex-col justify-center items-center justify-items-center">
        <nav className="max-w-[1200px] bg-bg-1 h-fit py-16 px-128 w-full flex place-content-between rounded-out border border-stroke-1 backdrop-blur-main sticky top-[48px]">
          <Image
            src={"/brand/mark.svg"}
            width={32}
            height={32}
            alt="HQL Logo"
          />
        </nav>
        {children}
      </body>
    </html>
  );
}
