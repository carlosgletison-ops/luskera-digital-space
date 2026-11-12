import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0C0C0E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.siteUrl),
  title: {
    default: siteConfig.meta.title,
    template: `%s | ${siteConfig.creator.stageName}`,
  },
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: siteConfig.creator.name, url: siteConfig.meta.siteUrl }],
  creator: siteConfig.creator.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.meta.siteUrl,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    siteName: `${siteConfig.creator.stageName} — ${siteConfig.creator.signature}`,
    images: [
      {
        url: "/images/lucas-hero.jpg",
        width: 1200,
        height: 1500,
        alt: `${siteConfig.creator.name} — ${siteConfig.creator.concept}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ["/images/lucas-hero.jpg"],
    creator: siteConfig.creator.handle,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${instrumentSerif.variable} font-sans scroll-smooth`}
    >
      <body className="bg-[#0C0C0E] text-[#F2F0EB] antialiased selection:bg-[#C66B40] selection:text-[#0C0C0E] overflow-x-hidden min-h-dvh flex flex-col">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
