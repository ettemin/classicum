import { Open_Sans } from "next/font/google";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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
