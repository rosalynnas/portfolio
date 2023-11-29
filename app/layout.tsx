import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";

import localFont from "next/font/local";

const Eesti = localFont({
  src: [
    {
      path: "./fonts/GT-Eesti-Display-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-eesti",
});

const Super = localFont({
  src: [
    {
      path: "./fonts/GT-Super-Display-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-super",
});

export const metadata: Metadata = {
  title: {
    default: "Rosalynn Ashwood",
    template: "%s | Rosalynn Ashwood",
  },
  description: "Montreal-based software engineer",
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx("text-blue-950", Eesti.variable, Super.variable)}
    >
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
