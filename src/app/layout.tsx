'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

const inter = Inter({ subsets: ["latin"], display: "swap"});

export const metadata: Metadata = {
  title: "Fashion Store - Your One-Stop Shop for Clothing",
  description: "Discover the latest trends in men's and women's fashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
} 
