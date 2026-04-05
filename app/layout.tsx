import "./globals.scss";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

import Header from "./components/Header/Header";
import TopNavigation from "./components/TopNavigation/TopNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Action Toy Guide",
  description:
    "Archive of vintage Kenner 80's and 90's action figure pack-in catalogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <TopNavigation />
          <Header />
          {children}
          <Analytics />
          <footer>
            <p className="text-white w-full p-8 text-center italic">
              Not affiliated with or endorsed by Hasbro or Kenner. Informational
              and archival purposes only.
            </p>
            <Image
              src="/kenner.svg"
              alt="Kenner Logo"
              width={200}
              height={54}
              className="mx-auto mb-8"
            />
          </footer>
        </div>
      </body>
    </html>
  );
}
