import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Classicum | Milan String Quartet Concerts",
  description:
    "Experience the magic of live classical music in Milan. Enjoy intimate string quartet performances within the historic ambiance of a stunning monument. Book your unique cultural escape today!",
  keywords: [
    "live classical music",
    "string quartet",
    "Milan",
    "milan",
    "classical concert",
    "historic monument",
    "cultural event",
    "live music",
    "chamber music",
    "concert in milan",
    "things to do in milan",
    "unique experience",
    "music performance",
    "classical music concert",
    "milano",
    "Milano",
    "italian music",
    "string music",
  ],
  robots: {
    index: true,
    follow: true,
    nosnippet: false,
  },
  authors: [{ name: "Classicum Team" }],
  publisher: "Classicum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
