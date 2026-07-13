import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingContact } from "@/components/FloatingContact";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Yağmurun Doğası | Kaynağı Belli Köy Lezzetleri",
    template: "%s | Yağmurun Doğası",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  keywords: [
    "doğal köy ürünleri",
    "dut pekmezi",
    "dut kurusu",
    "kurutmalık sebze",
    "ev eriştesi",
    "salamura yaprak",
    "ıhlamur",
    "kuşburnu",
    "Yağmurun Doğası",
  ],
  icons: {
    icon: "/brand-mark.svg",
    shortcut: "/brand-mark.svg",
    apple: "/brand-mark.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: siteConfig.name,
    title: "Yağmurun Doğası | Kaynağı Belli Köy Lezzetleri",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Yağmurun Doğası" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yağmurun Doğası",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  category: "food",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#42512b",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <a className="skip-link" href="#main-content">İçeriğe geç</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
