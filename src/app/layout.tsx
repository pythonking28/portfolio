import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Niraj Kumar Thakur",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
