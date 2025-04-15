import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
 
  title: "AL TAWAM ELECTRONIC EQUIPMENT REPAIRING",
  description:
    "Supplier of the highest quality refurbished laptops in the world. Sustainable technology solutions for businesses, education, and individuals.",
  keywords:
    "refurbished laptops, sustainable technology, certified refurbished, business laptops, education technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="shortcut icon" href="logo1.jpg" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Navbar />
          <div className="pt-14">{children}</div>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'