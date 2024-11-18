"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { RaffleProvider } from "@/contexts/raffleContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <RaffleProvider>
        <body className={inter.className}>{children}</body>
      </RaffleProvider>
    </html>
  );
}
