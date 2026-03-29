import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

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
    <html lang="en" className="dark">
      <head>
        <Script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.toggle('dark', localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <TopNavigation />
          <Header />
          {children}
          <footer className="text-black dark:text-white w-full p-8 text-center">
            Not endorsed by Hasbro or Kenner. Informational purposes only.
          </footer>
        </div>
      </body>
    </html>
  );
}
