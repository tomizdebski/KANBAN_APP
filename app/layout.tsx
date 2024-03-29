"use client";
import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "next-themes";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-dark_gray bg-white">
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
