import type { Metadata } from "next";
import { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aruberuto Makoto – Aprende Japonés",
  description: "Aprende japonés con Aruberuto Makoto",
  keywords: [
    "japonés",
    "aprende japonés",
    "japonés online",
    "japonés con Aruberuto Makoto",
  ],
  authors: [
    {
      name: "Jozef",
      url: "https://joseignacio.dev",
    },
  ],
  creator: "Jozef",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aruberuto.vercel.app",
    title: "Aruberuto Makoto – Aprende Japonés",
    description: "Aprende japonés con Aruberuto Makoto",
    siteName: "Aruberuto Makoto",
    images: [
      {
        url: "https://aruberuto.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Aruberuto Makoto – Aprende Japonés",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aruberuto Makoto – Aprende Japonés",
    description: "Aprende japonés con Aruberuto Makoto",
    images: ["https://aruberuto.vercel.app/og.png"],
    creator: "@shadcn",
  },
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh font-sans antialiased bg-black text-primary-foreground",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
