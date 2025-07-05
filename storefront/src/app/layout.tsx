import type { Metadata } from "next";
import "./globals.css";
import Header from "@app/widgets/Header";
import React from "react";
import CustomCursor from "@app/widgets/CustomCursor";
import Footer from "@app/widgets/Footer";

export const metadata: Metadata = {
  title: "Suhaib Baba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <CustomCursor />
        <Footer />
      </body>
    </html>
  );
}
