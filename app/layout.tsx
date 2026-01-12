import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Header from "./components/Header/Header";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid max-w-7xl mx-auto px-4 md:px-8">
          <TopNavigation />
          <Header />
          {children}
          <footer className="lg:max-w-7xl mx-auto p-8">
            Not endorsed by Hasbro or Kenner. Informational purposes only.
          </footer>
        </div>
      </body>
    </html>
  );
}
