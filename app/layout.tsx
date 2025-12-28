import type { Metadata } from "next";

import "./globals.css";
import "@/public/css/sm-clean.css";
import "@/public/css/style.css";

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./navbar";
import Footer from "./footer";
import Script from "next/script";

// app/fonts.ts
import { Inter } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional: specify weights you need
});



export const metadata: Metadata = {
  title: {
    default: "Kajukosha | Premium Dry Fruits & Healthy Snacks",
    template: "%s | Kajukosha",
  },
  description:
    "Kajukosha – premium quality dry fruits, nuts, healthy snacks and gift packs. Fresh, authentic and delivered to your doorstep.",

  keywords: [
    "Kajukosha",
    "dry fruits online",
    "premium dry fruits",
    "nuts and seeds",
    "healthy snacks",
    "cashew almond pistachio",
    "dry fruits gift pack",
    "online dry fruits store India",
  ],

  authors: [{ name: "Kajukosha" }],
  creator: "Kajukosha",
  publisher: "Kajukosha",

  openGraph: {
    title: "Kajukosha | Premium Dry Fruits & Healthy Snacks",
    description:
      "Shop premium dry fruits, nuts and healthy snacks at Kajukosha. Fresh quality, trusted source.",
    url: "https://kajukosha.com",
    siteName: "Kajukosha",
    images: [
      {
        url: "/images/og-image.jpg", // later add this image in public/images
        width: 1200,
        height: 630,
        alt: "Kajukosha – Premium Dry Fruits",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kajukosha | Premium Dry Fruits & Healthy Snacks",
    description:
      "Buy premium dry fruits, nuts and healthy snacks online at Kajukosha.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery.smartmenus/1.2.1/css/sm-core-css.min.css" />
      </head>
      <body className={`${inter.variable}`}
      >

        <Navbar />
        {children}
        <Footer />

        <Script src="https://code.jquery.com/jquery-3.7.1.min.js"  strategy="beforeInteractive"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.smartmenus/1.2.1/jquery.smartmenus.min.js" strategy="beforeInteractive"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.smartmenus/1.2.1/jquery.smartmenus.bootstrap.min.js" strategy="beforeInteractive"></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
