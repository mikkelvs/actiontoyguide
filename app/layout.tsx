import "./globals.scss";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });

          gtag('config', '${process.env.GA_TRACKING_ID || ""}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <TopNavigation />
          <Header />
          {children}
          <Analytics />

          <GoogleAnalytics gaId={process.env.GA_TRACKING_ID || ""} />
          <footer>
            <p className="text-white w-full py-8 text-center italic">
              Not affiliated with or endorsed by Hasbro or Kenner. Informational
              and archival purposes only.
            </p>
            <Image
              src="/kenner.svg"
              alt="Kenner Logo"
              width={150}
              height={41}
              className="mx-auto mb-8"
            />
          </footer>
        </div>
      </body>
    </html>
  );
}
