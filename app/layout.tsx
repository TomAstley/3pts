import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono, montserrat } from "./fonts";

// components
import Header from "@/components/Header/header";
import Intake from "@/components/Intake/intake";
import Footer from "@/components/Footer/footer";

export const metadata: Metadata = {
  title: "3pts | Fractional CMO Services for Financial Markets",
  description:
    "Three Points Communications provides fractional CMO services for the buy side, sell side, and liquidity networks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-200 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
          <Intake />
        </main>
        <Footer />
      </body>
    </html>
  );
}
