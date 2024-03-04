"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900 bg-blue">
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
