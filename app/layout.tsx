import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
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
    "An open source Minecraft launcher with modern UI and instance/mod management.",
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
      "An open source Minecraft launcher with modern UI and instance/mod management.",
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
      <body className="bg-[#050505] text-text-1 overflow-x-hidden min-h-[150vh] overflow-y-auto p-48 gap-24 flex flex-col justify-start items-center justify-items-center">
        <nav className="max-w-[1200px] bg-bg-1 h-fit py-16 px-128 w-full flex place-content-between rounded-out border border-stroke-1 backdrop-blur-main sticky top-[48px]">
          <Link href={"/"}>
            <Image
              src={"/brand/mark.svg"}
              width={32}
              height={32}
              alt="HQL Logo"
            />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
