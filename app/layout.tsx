import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/Footer";
import { siteConfig } from "@/lib/site";
import { MotionProvider } from "@/components/animations";
import { GlobalBackground } from "@/components/layout/GlobalBackground";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { CustomCursor } from "@/components/layout/CustomCursor";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@praveen",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.author,
              url: siteConfig.url,
              sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Engineering Portfolio",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${geist.variable} ${jetbrainsMono.variable} antialiased font-sans text-foreground min-h-screen flex flex-col cursor-auto md:cursor-none`}>
        <CustomCursor />
        <LoadingScreen />
        <GlobalBackground />
        <MotionProvider>
          <Navbar />
          {children}
          <FooterSection />
        </MotionProvider>
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
