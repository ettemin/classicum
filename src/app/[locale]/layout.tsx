import { Open_Sans } from "next/font/google";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://classicum.it"),
  title: "Classicum | Classical Concerts in Historic Venues",
  description:
    "Experience world-class classical music performances in stunning historic venues and monuments across Europe. Live concerts, unique locations, unforgettable moments.",
  keywords:
    "classical music, concerts, historic venues, monuments, classical performances, live music, milan, Milan, Milano, Mailand",
  authors: [{ name: "Classicum" }],
  creator: "Classicum",
  publisher: "Classicum",
  icons: {
    icon: "/logo/icon.png",
    apple: "/logo/icon.png",
  },
  openGraph: {
    title: "Classicum | Classical Concerts in Historic Venues",
    description:
      "Experience classical music performances in stunning historic venues",
    url: "https://classicum.it",
    siteName: "Classicum",
    images: [
      {
        url: "/public/background/string-quartet-cathedral-playing.png",
        width: 1200,
        height: 630,
        alt: "Classicum - Classical Concerts",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Classicum | Classical Concerts",
    description: "Experience classical music in historic venues",
    images: ["/public/background/string-quartet-cathedral-playing.png"],
    creator: "@classicum",
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
/* eslint-disable @typescript-eslint/no-explicit-any */

type SegmentParams<T extends object = any> = T extends Record<string, any>
  ? {
      [K in keyof T]: T[K] extends string
        ? string | string[] | undefined
        : never;
    }
  : T;

interface LayoutProps {
  children?: React.ReactNode;

  params?: Promise<SegmentParams>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${openSans.variable} antialiased font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
