import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono, montserrat } from "./fonts";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "./site";

// components
import Header from "@/components/Header/header";
import Intake from "@/components/Intake/intake";
import Footer from "@/components/Footer/footer";
import BackToTop from "@/components/BackToTop/backToTop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(Number(localStorage.getItem("intro-views"))>=3)document.documentElement.dataset.skipIntro=""}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-200 focus:bg-white focus:text-black/85 focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
          <Intake />
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
