import type { Metadata } from "next"
import "./globals.css"
import React from "react"
import localFont from "next/font/local"
import Header from "./_components/header"
import Footer from "./_components/footer"

export const metadata: Metadata = {
  title: "Aurum Capital",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon-aurum.ico",
  },
}

const modaniRegular = localFont({
  src: "./_fonts/MadaniArabicRegular.ttf",
  weight: "400",
})

const modaniBold = localFont({
  src: "./_fonts/MadaniArabicBold.ttf",
  variable: "--font-modani-arabic-bold",
  weight: "700",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${modaniRegular.className} ${modaniBold.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
