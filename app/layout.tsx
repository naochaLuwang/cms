"use client";
import "./globals.css";
import { Nunito } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@material-tailwind/react";

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <ThemeProvider>
          <body className="font.className">{children}</body>
        </ThemeProvider>
      </SessionProvider>
    </html>
  );
}
